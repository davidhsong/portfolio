export const DATA = {
  name: "DAVID SONG",
  tagline: "CS @ SJSU • graduating Dec 2025 • I build clean, useful software",
  contactEmail: "davidhsongg@gmail.com",
  headerMeta: [
    { label: "Email", url: "mailto:davidhsongg@gmail.com" },
    { label: "Phone", url: "tel:+16692361331" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidthesong/" },
    { label: "GitHub", url: "https://github.com/davidhsong" }
  ],
  education: {
    school: "San Jose State University",
    location: "San Jose, CA",
    degree: "B.S. Computer Science, Minor in Digital Media Art",
    dates: "Expected Dec 2025",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "Software Engineering",
      "Operating Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Visualization",
      "Database Management Systems",
      "Information Security",
      "Programming Paradigms",
      "Big Data Processing"
    ]
  },
  experience: [
    {
      title: "Software Engineer Fellow",
      company: "Headstarter AI",
      dates: "Jul 2024 – Aug 2024",
      bullets: [
        "Shipped React features people actually used; kept interactions fast, stable, and accessible. Partnered with design to tune micro-states and ensure no jank.",
        "Integrated components with Node/Express APIs, hardened error states, and added retries so the UI felt reliable even on flaky networks.",
        "Planned small weekly releases; wrote sanity checks and reviewed PRs to avoid regressions and keep velocity predictable.",
        "Set up lightweight CI and basic cloud deploys so releases were boring (in the best way) and rollbacks were easy."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Life Stages",
      dates: "May 2024 – Jul 2024",
      bullets: [
        "Untangled a noisy auth flow (sessions & API edge cases) and reduced login issues by clarifying states and tightening server responses.",
        "Refined React layouts for responsiveness and clarity—fixed confusing interactions and improved mobile breakpoints.",
        "Wrote concise API docs and setup notes so new teammates could get productive quickly without hand-holding."
      ]
    }
  ],
  projects: [
    {
      name: "PPSN — Community Safety Navigator",
      dates: "Hackathon Project",
      bullets: [
        "Built a safer-route web app on React + Mapbox; I owned the map layers, directions, and Firebase storage.",
        "Implemented route saving, turn-by-turn text, and an animated route marker for clear navigation.",
        "Added clickable crime markers with details; watched non-technical friends try it and iterated on what actually mattered for them."
      ],
      links: [{ label: "GitHub", url: "https://github.com/SJHacks-Team44/ppsn" }]
    },
    {
      name: "ART109 Audio Visualizer",
      dates: "Course Project",
      bullets: [
        "Browser visualizer using Web Audio API and p5.js; supports mic or file input for live playback.",
        "Built three views (circles, bars, waveform) and tuned sensitivity, resizing, and frame pacing to stay smooth instead of chaotic."
      ],
      links: [{ label: "GitHub", url: "https://github.com/davidhsong/art109-audio-visualizer" }]
    },
    {
      name: "Zaiku",
      dates: "Jan 2025 – Apr 2025",
      bullets: [
        "Auth that feels invisible: JWT + Google OAuth on Node/Express with clear error surfaces and safe defaults.",
        "Search stays snappy with Elasticsearch for larger datasets; added indexes and query tuning for common paths.",
        "Tests + centralized error handling so debugging later doesn’t turn into archaeology."
      ],
      links: [{ label: "GitHub", url: "https://github.com/davidhsong/zaiku" }]
    },
    {
      name: "PromptWave",
      dates: "Aug 2024 – Oct 2024",
      bullets: [
        "Lightweight chat UI to swap between ML models without the confusing bits; clean prompts, clean outputs.",
        "Trimmed response times via caching and async jobs; added timeouts and rate-limit guards to avoid stalls."
      ],
      links: [{ label: "GitHub", url: "https://github.com/davidhsong/promptwave" }]
    },
    {
      name: "HydroSense",
      dates: "Oct 2023 – Nov 2023",
      bullets: [
        "Small IoT dashboard for water sensor data with simple sharing/exports for non-technical users.",
        "Designed mobile-first layout to make the rest of the build smoother and keep charts usable on phones."
      ],
      links: [{ label: "GitHub", url: "https://github.com/davidhsong/HydroSense" }]
    }
  ],
  skills: {
    Languages: ["Python", "Java", "JavaScript (ES6+)", "SQL", "HTML/CSS"],
    "Backend & APIs": ["Node.js/Express", "REST APIs", "JWT/OAuth"],
    Frontend: ["React.js", "Responsive UI", "UI/UX (Figma)"],
    Databases: ["PostgreSQL", "MongoDB", "MySQL", "ElasticSearch"],
    "Cloud & Infra": ["AWS", "GCP", "Firebase", "Git", "CI/CD Pipelines"],
    "Core CS": ["Object-Oriented Programming", "Data Structures & Algorithms", "Debugging", "Scalable Systems"],
    Collaboration: ["Agile Scrum", "Code Reviews", "Cross-Functional Teamwork", "Documentation"]
  },
  interestsDetailed: [
    { title: "Gym", icon: "💪", explanation: "Lifting helps me reset and think clearly.", images: ["/interests/gym-1.jpg", "/interests/gym-2.jpg", "/interests/gym-3.jpg"] },
    { title: "Art", icon: "🎨", explanation: "Sketching faces taught me patience and details.", images: ["/interests/art-1.jpg", "/interests/art-2.jpg", "/interests/art-3.jpg"] },
    { title: "Photography", icon: "📷", explanation: "Playing with light and framing keeps my eye honest.", images: ["/interests/photo-1.jpg", "/interests/photo-2.jpg", "/interests/photo-3.jpg"] },
    { title: "Music", icon: "🎵", explanation: "Playlists for building and debugging.", images: ["/interests/music-1.jpg", "/interests/music-2.jpg"] },
    { title: "Festivals / Raves", icon: "🎶", explanation: "EDM shows are my happy place.", images: ["/interests/festival-1.jpg", "/interests/festival-2.jpg", "/interests/festival-3.jpg"] }
  ]
};

export default DATA;
