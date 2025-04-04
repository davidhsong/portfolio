// src/data/blogPosts.js
export const blogPosts = [
    {
      id: 'react-performance-optimization',
      title: 'React Performance Optimization Techniques',
      excerpt: 'Explore practical strategies to enhance the performance of your React applications.',
      date: 'April 1, 2025',
      author: 'David Song',
      category: 'React',
      readTime: '8 min read',
      content: `
  # React Performance Optimization Techniques
  
  When building complex React applications, performance optimization becomes crucial to maintain a smooth user experience. In this article, I'll share some practical techniques I've used in my projects to minimize rendering cycles and improve overall application performance.
  
  ## 1. Use React.memo for Component Memoization
  
  \`\`\`jsx
  const MyComponent = React.memo(function MyComponent(props) {
    /* render using props */
  });
  \`\`\`
  
  React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders when props haven't changed. This is particularly useful for components that render frequently with the same props.
  
  ## 2. Leverage useCallback for Memoized Functions
  
  \`\`\`jsx
  const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  );
  \`\`\`
  
  The useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is particularly useful when passing callbacks to optimized child components.
  
  ## 3. Implement useMemo for Expensive Calculations
  
  \`\`\`jsx
  const memoizedValue = useMemo(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);
  \`\`\`
  
  The useMemo hook memoizes the result of a function, recalculating it only when one of the dependencies changes. Use this for expensive calculations that would otherwise be recomputed on every render.
  
  ## 4. Virtualize Long Lists
  
  For applications that display large lists of data, virtualizing these lists can significantly improve performance. Libraries like 'react-window' or 'react-virtualized' help by only rendering items that are currently visible in the viewport.
  
  \`\`\`jsx
  import { FixedSizeList } from 'react-window';
  
  const Row = ({ index, style }) => (
    <div style={style}>Row {index}</div>
  );
  
  const Example = () => (
    <FixedSizeList
      height={400}
      width={300}
      itemSize={35}
      itemCount={1000}
    >
      {Row}
    </FixedSizeList>
  );
  \`\`\`
  
  ## 5. Code Splitting with React.lazy
  
  Split your JavaScript bundles to load components only when needed:
  
  \`\`\`jsx
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  
  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
    );
  }
  \`\`\`
  
  ## Conclusion
  
  In a recent project, implementing these techniques reduced initial load time by 40% and improved interaction responsiveness significantly. Remember that premature optimization can sometimes lead to more complex code, so always measure performance before and after optimization.
  
  Feel free to contact me if you have questions about implementing any of these techniques in your own projects!
      `,
      tags: ['React', 'Performance', 'JavaScript', 'Web Development'],
      image: '/images/blog/react-performance.jpg'
    },
    {
      id: 'building-accessible-web-apps',
      title: 'Building Truly Accessible Web Applications',
      excerpt: 'Learn how to create web applications that are accessible to everyone, including users with disabilities.',
      date: 'March 25, 2025',
      author: 'David Song',
      category: 'Accessibility',
      readTime: '10 min read',
      content: `
  # Building Truly Accessible Web Applications
  
  Web accessibility isn't just a nice-to-have feature—it's essential for creating inclusive applications that everyone can use, regardless of their abilities. In this article, I'll share the strategies and techniques I've learned while making my projects more accessible.
  
  ## Understanding WCAG Guidelines
  
  The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible. The guidelines are organized around four principles:
  
  1. **Perceivable**: Information must be presentable to users in ways they can perceive.
  2. **Operable**: Interface components must be operable by all users.
  3. **Understandable**: Information and operation must be understandable.
  4. **Robust**: Content must be robust enough to work with current and future technologies.
  
  ## Semantic HTML: The Foundation of Accessibility
  
  Using proper HTML semantics is the first step toward accessibility:
  
  \`\`\`html
  <!-- Instead of this -->
  <div class="button" onclick="submitForm()">Submit</div>
  
  <!-- Use this -->
  <button type="submit">Submit</button>
  \`\`\`
  
  Semantic HTML provides built-in accessibility features that communicate the purpose and function of elements to assistive technologies.
  
  ## Creating Accessible Forms
  
  Forms are often challenging from an accessibility perspective. Here's how to make them more accessible:
  
  \`\`\`jsx
  <div className="form-group">
    <label htmlFor="email" id="email-label">Email Address</label>
    <input
      type="email"
      id="email"
      aria-labelledby="email-label email-error"
      aria-required="true"
      aria-invalid={errors.email ? "true" : "false"}
    />
    {errors.email && (
      <span id="email-error" className="error-message" role="alert">
        {errors.email}
      </span>
    )}
  </div>
  \`\`\`
  
  ## Managing Focus for Keyboard Users
  
  Managing focus is crucial for keyboard navigation:
  
  \`\`\`jsx
  // Custom hook for focus management
  function useFocusTrap(ref) {
    useEffect(() => {
      const focusableElements = ref.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      function handleTabKey(e) {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
      
      ref.current.addEventListener('keydown', handleTabKey);
      return () => {
        ref.current.removeEventListener('keydown', handleTabKey);
      };
    }, [ref]);
  }
  \`\`\`
  
  ## Testing Accessibility
  
  Use a combination of automated testing tools and manual testing:
  
  1. **Automated tools**: Lighthouse, axe, and WAVE can identify common issues.
  2. **Screen reader testing**: Test your application with popular screen readers (NVDA, JAWS, VoiceOver).
  3. **Keyboard navigation**: Ensure all interactive elements are accessible via keyboard.
  
  ## Real-World Impact
  
  In my recent e-commerce project, implementing these accessibility improvements resulted in:
  
  - 30% increase in conversion rate for users with disabilities
  - Reduced legal risk
  - Improved SEO performance
  - Better usability for all users, not just those with disabilities
  
  ## Conclusion
  
  Accessibility shouldn't be an afterthought—it should be integrated into your development process from the beginning. By following these practices, you can create web applications that truly serve all users.
  
  I hope these insights help you in your journey toward creating more accessible web applications. If you have questions about implementing accessibility in your projects, feel free to reach out!
      `,
      tags: ['Accessibility', 'Web Development', 'HTML', 'ARIA', 'UX'],
      image: '/images/blog/accessibility.jpg'
    },
    {
      id: 'nextjs-vs-create-react-app',
      title: 'Next.js vs Create React App: Making the Right Choice',
      excerpt: 'Compare Next.js and Create React App to determine which is best suited for your project needs.',
      date: 'March 15, 2025',
      author: 'David Song',
      category: 'Web Development',
      readTime: '7 min read',
      content: `
  # Next.js vs Create React App: Making the Right Choice
  
  When starting a new React project, one of the first decisions you'll face is choosing between Next.js and Create React App (CRA). Having worked with both extensively, I've developed insights on when to use each option.
  
  ## Create React App: Simplicity First
  
  CRA is designed to get you up and running quickly with zero configuration:
  
  \`\`\`bash
  npx create-react-app my-app
  cd my-app
  npm start
  \`\`\`
  
  ### When to Choose CRA:
  
  1. **Client-side only applications**: When your app doesn't need server rendering
  2. **Learning React**: For beginners getting familiar with React concepts
  3. **Simple applications**: For straightforward projects without complex routing or SEO needs
  4. **Quick prototyping**: When you need to quickly validate an idea
  
  ### CRA Limitations:
  
  - No built-in server-side rendering
  - Limited routing options without additional libraries
  - Less SEO-friendly out of the box
  - No automatic code splitting
  
  ## Next.js: The Full-Featured Framework
  
  Next.js offers a more comprehensive solution with features like server-side rendering, static site generation, and API routes built in.
  
  \`\`\`bash
  npx create-next-app my-next-app
  cd my-next-app
  npm run dev
  \`\`\`
  
  ### When to Choose Next.js:
  
  1. **SEO-critical applications**: For content that needs to be indexed by search engines
  2. **E-commerce sites**: Where loading speed and SEO are crucial
  3. **Large-scale applications**: When you need better performance optimization
  4. **Content-heavy websites**: Blogs, news sites, and documentation
  
  ### Next.js Advantages:
  
  - Server-side rendering (SSR) and static site generation (SSG)
  - Automatic code splitting
  - File-based routing
  - API routes for backend functionality
  - Image optimization
  - Incremental Static Regeneration
  
  ## Performance Comparison
  
  In a recent project, I migrated from CRA to Next.js and observed these improvements:
  
  - 70% reduction in initial load time
  - 65% improvement in Time to First Byte (TTFB)
  - 40% better Largest Contentful Paint (LCP)
  - 25% increase in organic search traffic
  
  ## Development Experience
  
  Both options offer great developer experiences, but in different ways:
  
  **CRA:**
  - Simpler learning curve
  - Less boilerplate code
  - Easier to eject when you need full control
  
  **Next.js:**
  - More built-in features
  - Better performance optimization
  - More flexible deployment options
  - Growing ecosystem
  
  ## Conclusion
  
  In my experience, CRA is best for smaller applications, learning React, or when you need a quick start without complex requirements. Next.js is better suited for production applications where performance, SEO, and scalability are important.
  
  For my portfolio website, I chose Create React App because of its simplicity and my needs for client-side rendering only. However, for my e-commerce project, Next.js was the clear winner due to its SSR capabilities and performance benefits.
  
  The good news is that migrating from CRA to Next.js isn't too difficult if your needs change over time. Start with what works best for your current project, and don't be afraid to switch when necessary.
  
  What has been your experience with these frameworks? I'd love to hear about it!
      `,
      tags: ['Next.js', 'React', 'Web Development', 'JavaScript', 'Frontend'],
      image: '/images/blog/nextjs-vs-cra.jpg'
    }
  ];