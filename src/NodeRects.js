import React, { useEffect, useRef } from 'react';

/**
 * NodeRects (dark-mode glow + corner motion + PERIMETER HINGES)
 *
 * - For each .pane.section: draws a glowing rectangle with 4 corner nodes
 *   that gently react to cursor (no inward movement; never overlaps content).
 * - Additionally computes ONE global outer perimeter (min/max across panes).
 * - Along that global perimeter only, adds 0–2 evenly spaced extra nodes
 *   ("hinges") per edge. These hinges:
 *      • drift very slowly on their own,
 *      • repel slightly from the cursor,
 *      • are clamped to the edge span and outward cap,
 *      • and the OUTER LINE now bends through them (so the line itself moves).
 *
 * Performance:
 * - Lightweight rAF with FPS cap, tiny arrays (≤8 hinges), minimal math.
 */
export default function NodeRects({
  children,
  outlineOffset = 18,
  nodeRadius = 11,
  lineWidth = 2,
  lineColor = 'rgba(135,206,250,0.75)',
  nodeColorA = '#60a5fa',
  nodeColorB = '#a78bfa',
  hoverMaxOffset = 12,
  hoverRadius = 180,
  maxOutward = 22,
  ease = 0.12,
  fps = 30,

  // Perimeter drifting-node controls
  perimeterExtrasPerSide = 2,         // 0..2 extra nodes per edge on outer perimeter
  perimeterOutwardCap = 24,           // how far these can float outward (px)
  perimeterDriftTangential = 0.06,    // slow drift along edge
  perimeterDriftNormal = 0.02,        // tiny outward/inward jitter (but clamped to be non-inward)
  perimeterMouseFactor = 0.08         // responsiveness to cursor for these nodes
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const roRef = useRef(null);

  // Per-section base boxes
  const baseRectsRef = useRef([]);   // [{L,T,R,B}]
  // Animated corner nodes per section
  const nodesRef = useRef([]);       // [{tl,tr,bl,br}]

  // GLOBAL perimeter box & drifting nodes
  const outerBoxRef = useRef(null);  // {L,T,R,B}
  const perimeterNodesRef = useRef([]); // drifting nodes with velocity, side, tangential/normal basis

  // input/motion
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);

  // ---- helpers ----
  const lerpPt = (from, to, a) => ({
    x: from.x + (to.x - from.x) * a,
    y: from.y + (to.y - from.y) * a
  });

  const resizeCanvas = () => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = wrap.getBoundingClientRect();
    const width = Math.ceil(rect.width);
    const height = Math.ceil(wrap.scrollHeight);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const repel = (pt, mx, my, intensity = hoverMaxOffset, radius = hoverRadius) => {
    const dx = pt.x - mx;
    const dy = pt.y - my;
    const d = Math.hypot(dx, dy);
    if (d >= radius || d === 0) return { x: pt.x, y: pt.y };
    const t = 1 - d / radius;
    const mag = intensity * Math.pow(t, 1.25);
    const ux = dx / d;
    const uy = dy / d;
    return { x: pt.x + ux * mag, y: pt.y + uy * mag };
  };

  // Clamp corner nodes (never inward, limited outward)
  const clampCorner = (pt, box, xSide, ySide, cap = maxOutward) => {
    const { L, T, R, B } = box;
    const p = { ...pt };
    if (xSide === 'left'  && p.x > L) p.x = L;
    if (xSide === 'right' && p.x < R) p.x = R;
    if (ySide === 'top'   && p.y > T) p.y = T;
    if (ySide === 'bottom'&& p.y < B) p.y = B;
    if (xSide === 'left'  && p.x < L - cap) p.x = L - cap;
    if (xSide === 'right' && p.x > R + cap) p.x = R + cap;
    if (ySide === 'top'   && p.y < T - cap) p.y = T - cap;
    if (ySide === 'bottom'&& p.y > B + cap) p.y = B + cap;
    return p;
  };

  // Clamp perimeter drifting nodes: project along edge span, allow outward up to perimeterOutwardCap
  const clampPerimeterNode = (node, box) => {
    const { L, T, R, B } = box;
    let { x, y } = node.pos;

    if (node.side === 'top') {
      x = Math.max(L, Math.min(R, x));
      if (y > T) y = T;
      if (y < T - perimeterOutwardCap) y = T - perimeterOutwardCap;
    } else if (node.side === 'bottom') {
      x = Math.max(L, Math.min(R, x));
      if (y < B) y = B;
      if (y > B + perimeterOutwardCap) y = B + perimeterOutwardCap;
    } else if (node.side === 'left') {
      y = Math.max(T, Math.min(B, y));
      if (x > L) x = L;
      if (x < L - perimeterOutwardCap) x = L - perimeterOutwardCap;
    } else if (node.side === 'right') {
      y = Math.max(T, Math.min(B, y));
      if (x < R) x = R;
      if (x > R + perimeterOutwardCap) x = R + perimeterOutwardCap;
    }

    node.pos.x = x;
    node.pos.y = y;
  };

  // ---- measure panes & seed nodes ----
  const samplePanes = () => {
    const wrap = wrapRef.current;
    const canvasBox = wrap.getBoundingClientRect();
    const panes = wrap.querySelectorAll('.pane.section');

    baseRectsRef.current = Array.from(panes).map(p => {
      const r = p.getBoundingClientRect();
      const left = Math.round(r.left - canvasBox.left);
      const top = Math.round(p.offsetTop);
      const right = Math.round(left + r.width);
      const bottom = Math.round(top + p.offsetHeight);
      const L = left - outlineOffset;
      const T = top - outlineOffset;
      const R = right + outlineOffset;
      const B = bottom + outlineOffset;
      return { L, T, R, B };
    });

    // init corner nodes at base corners per pane
    nodesRef.current = baseRectsRef.current.map(b => ({
      tl: { x: b.L, y: b.T },
      tr: { x: b.R, y: b.T },
      bl: { x: b.L, y: b.B },
      br: { x: b.R, y: b.B },
    }));

    // Compute GLOBAL outer perimeter (min/max across panes)
    if (baseRectsRef.current.length) {
      const L = Math.min(...baseRectsRef.current.map(b => b.L));
      const T = Math.min(...baseRectsRef.current.map(b => b.T));
      const R = Math.max(...baseRectsRef.current.map(b => b.R));
      const B = Math.max(...baseRectsRef.current.map(b => b.B));
      outerBoxRef.current = { L, T, R, B };
    } else {
      outerBoxRef.current = null;
    }

    // Seed perimeter drifting nodes (positions + velocities + basis)
    perimeterNodesRef.current = [];
    if (outerBoxRef.current && perimeterExtrasPerSide > 0) {
      const { L, T, R, B } = outerBoxRef.current;

      const makeNodes = (A, Bp, side, count) => {
        const nodes = [];
        for (let i = 1; i <= count; i++) {
          const t = i / (count + 1);      // EVENLY SPACED between corners
          const x = A.x + (Bp.x - A.x) * t;
          const y = A.y + (Bp.y - A.y) * t;

          // tangential & outward-normal unit vectors per side
          let tx = 0, ty = 0, nx = 0, ny = 0;
          if (side === 'top')    { tx = 1;  ty = 0;  nx = 0;  ny = -1; }
          if (side === 'bottom') { tx = 1;  ty = 0;  nx = 0;  ny =  1; }
          if (side === 'left')   { tx = 0;  ty = 1;  nx = -1; ny =  0; }
          if (side === 'right')  { tx = 0;  ty = 1;  nx =  1; ny =  0; }

          nodes.push({
            side,
            base: { x, y },        // projection point on edge
            pos:  { x, y },
            vel:  { x: 0, y: 0 },
            tangential: { x: tx, y: ty },
            normal:     { x: nx, y: ny }
          });
        }
        return nodes;
      };

      const tl = { x: L, y: T }, tr = { x: R, y: T }, bl = { x: L, y: B }, br = { x: R, y: B };
      perimeterNodesRef.current.push(
        ...makeNodes(tl, tr, 'top', perimeterExtrasPerSide),
        ...makeNodes(tr, br, 'right', perimeterExtrasPerSide),
        ...makeNodes(br, bl, 'bottom', perimeterExtrasPerSide),
        ...makeNodes(bl, tl, 'left', perimeterExtrasPerSide)
      );
    }
  };

  // ---- draw helpers for outer path ----
  const sortSide = (arr, side) => {
    if (!arr.length) return arr;
    if (side === 'top' || side === 'bottom') {
      // left to right
      return [...arr].sort((a, b) => a.pos.x - b.pos.x);
    } else {
      // top to bottom
      return [...arr].sort((a, b) => a.pos.y - b.pos.y);
    }
  };

  const drawOuterPerimeter = (ctx) => {
    if (!outerBoxRef.current) return;

    const { L, T, R, B } = outerBoxRef.current;
    const tl = { x: L, y: T }, tr = { x: R, y: T }, bl = { x: L, y: B }, br = { x: R, y: B };

    const topNodes    = sortSide(perimeterNodesRef.current.filter(n => n.side === 'top'), 'top');
    const rightNodes  = sortSide(perimeterNodesRef.current.filter(n => n.side === 'right'), 'right');
    const bottomNodes = sortSide(perimeterNodesRef.current.filter(n => n.side === 'bottom'), 'bottom');
    const leftNodes   = sortSide(perimeterNodesRef.current.filter(n => n.side === 'left'), 'left');

    // Build polygon path through corners + ordered hinge nodes
    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.shadowColor = 'rgba(135,206,250,0.95)';
    ctx.shadowBlur = 26;
    ctx.beginPath();

    // start at TL
    ctx.moveTo(tl.x, tl.y);
    // top edge: TL -> ...top nodes... -> TR
    topNodes.forEach(n => ctx.lineTo(n.pos.x, n.pos.y));
    ctx.lineTo(tr.x, tr.y);

    // right edge: TR -> ...right nodes... -> BR
    rightNodes.forEach(n => ctx.lineTo(n.pos.x, n.pos.y));
    ctx.lineTo(br.x, br.y);

    // bottom edge: BR -> ...bottom nodes (right->left: reverse)... -> BL
    [...bottomNodes].reverse().forEach(n => ctx.lineTo(n.pos.x, n.pos.y));
    ctx.lineTo(bl.x, bl.y);

    // left edge: BL -> ...left nodes (bottom->top: reverse)... -> TL
    [...leftNodes].reverse().forEach(n => ctx.lineTo(n.pos.x, n.pos.y));
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    // draw moving perimeter nodes (glow)
    if (perimeterNodesRef.current.length) {
      ctx.save();
      ctx.shadowColor = 'rgba(99,102,241,0.95)';
      ctx.shadowBlur = 26;

      const g = ctx.createLinearGradient(tl.x, tl.y, br.x, br.y);
      g.addColorStop(0, nodeColorA);
      g.addColorStop(1, nodeColorB);

      perimeterNodesRef.current.forEach(n => {
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.pos.x, n.pos.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.beginPath();
        ctx.arc(n.pos.x, n.pos.y, Math.max(2.5, nodeRadius * 0.33), 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(190,210,255,.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(n.pos.x, n.pos.y, nodeRadius - 0.5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.shadowBlur = 26;
      });

      ctx.restore();
    }
  };

  // ---- draw ----
  const drawFrame = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const wrap = wrapRef.current;
    const rect = wrap.getBoundingClientRect();
    const width = Math.ceil(rect.width);
    const height = Math.ceil(wrap.scrollHeight);

    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = lineWidth;

    // 1) Draw per-section boxes with corner nodes
    baseRectsRef.current.forEach((box, i) => {
      const nodes = nodesRef.current[i];
      const { tl, tr, bl, br } = nodes;

      // glowing border lines (straight edges)
      ctx.save();
      ctx.strokeStyle = lineColor;
      ctx.shadowColor = 'rgba(135,206,250,0.85)';
      ctx.shadowBlur = 22;
      ctx.beginPath();
      ctx.moveTo(tl.x, tl.y);
      ctx.lineTo(tr.x, tr.y);
      ctx.lineTo(br.x, br.y);
      ctx.lineTo(bl.x, bl.y);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // glowing corner nodes
      const g = ctx.createLinearGradient(tl.x, tl.y, br.x, br.y);
      g.addColorStop(0, nodeColorA);
      g.addColorStop(1, nodeColorB);

      ctx.save();
      ctx.shadowColor = 'rgba(99,102,241,.85)';
      ctx.shadowBlur = 24;

      const dot = (n) => {
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(2.5, nodeRadius * 0.33), 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(190,210,255,.45)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeRadius - 0.5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.shadowBlur = 24;
      };

      [tl, tr, bl, br].forEach(dot);
      ctx.restore();
    });

    // 2) Draw the GLOBAL outer perimeter as a segmented, flexible path through hinge nodes
    drawOuterPerimeter(ctx);
  };

  // ---- animation step ----
  const step = (now) => {
    const minDelta = 1000 / fps;
    if (!lastTimeRef.current || now - lastTimeRef.current >= minDelta) {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Corners ease toward hover targets
      baseRectsRef.current.forEach((box, i) => {
        const baseTL = { x: box.L, y: box.T };
        const baseTR = { x: box.R, y: box.T };
        const baseBL = { x: box.L, y: box.B };
        const baseBR = { x: box.R, y: box.B };

        const targetTL = clampCorner(repel(baseTL, mx, my), box, 'left', 'top', maxOutward);
        const targetTR = clampCorner(repel(baseTR, mx, my), box, 'right', 'top', maxOutward);
        const targetBL = clampCorner(repel(baseBL, mx, my), box, 'left', 'bottom', maxOutward);
        const targetBR = clampCorner(repel(baseBR, mx, my), box, 'right', 'bottom', maxOutward);

        const nodes = nodesRef.current[i];
        nodes.tl = clampCorner(lerpPt(nodes.tl, targetTL, ease), box, 'left', 'top', maxOutward);
        nodes.tr = clampCorner(lerpPt(nodes.tr, targetTR, ease), box, 'right', 'top', maxOutward);
        nodes.bl = clampCorner(lerpPt(nodes.bl, targetBL, ease), box, 'left', 'bottom', maxOutward);
        nodes.br = clampCorner(lerpPt(nodes.br, targetBR, ease), box, 'right', 'bottom', maxOutward);
      });

      // Perimeter drifting nodes: random slow drift + mouse repel + damping, then clamp
      if (outerBoxRef.current && perimeterNodesRef.current.length) {
        perimeterNodesRef.current.forEach(n => {
          // tiny random acceleration along tangential and slight normal
          const jitterT = (Math.random() - 0.5) * perimeterDriftTangential;
          const jitterN = (Math.random() - 0.5) * perimeterDriftNormal;

          n.vel.x += n.tangential.x * jitterT + n.normal.x * jitterN;
          n.vel.y += n.tangential.y * jitterT + n.normal.y * jitterN;

          // mild mouse repel (toward target offset, not instant)
          const dx = n.pos.x - mx;
          const dy = n.pos.y - my;
          const d  = Math.hypot(dx, dy);
          if (d > 0 && d < hoverRadius * 1.15) {
            const t = 1 - d / (hoverRadius * 1.15);
            const mag = perimeterMouseFactor * t * t;
            n.vel.x += (dx / d) * mag;
            n.vel.y += (dy / d) * mag;
          }

          // damping (keep it slow)
          n.vel.x *= 0.96;
          n.vel.y *= 0.96;

          // integrate
          n.pos.x += n.vel.x;
          n.pos.y += n.vel.y;

          // clamp to edge span & outward cap (never inward)
          clampPerimeterNode(n, outerBoxRef.current);
        });
      }

      drawFrame();
      lastTimeRef.current = now;
    }
    rafRef.current = requestAnimationFrame(step);
  };

  // ---- lifecycle ----
  const fullRefresh = () => {
    resizeCanvas();
    samplePanes();
    drawFrame();
  };

  useEffect(() => {
    const wrap = wrapRef.current;

    // initial
    fullRefresh();

    // watch size/content changes
    const ro = new ResizeObserver(fullRefresh);
    roRef.current = ro;
    ro.observe(wrap);
    wrap.querySelectorAll('.pane.section').forEach(el => ro.observe(el));

    const onResize = () => fullRefresh();
    const onScroll = () => drawFrame();
    const onMouseMove = (e) => {
      const box = wrap.getBoundingClientRect();
      mouseRef.current.x = e.clientX - box.left;
      mouseRef.current.y = e.clientY - box.top;
    };
    const onMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener('resize', onResize, { passive: true });
    wrap.addEventListener('scroll', onScroll, { passive: true });
    wrap.addEventListener('mousemove', onMouseMove);
    wrap.addEventListener('mouseleave', onMouseLeave);

    // start animation loop
    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', onResize);
      wrap.removeEventListener('scroll', onScroll);
      wrap.removeEventListener('mousemove', onMouseMove);
      wrap.removeEventListener('mouseleave', onMouseLeave);
      if (roRef.current) roRef.current.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrapRef} className="rects-wrap no-motion">
      <canvas ref={canvasRef} className="rects-canvas" />
      <div className="content-flow">
        {children}
      </div>
    </div>
  );
}
