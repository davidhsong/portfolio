export const DATA = {
  // Header
  name: "DAVID SONG",
  tagline: "B.S., Computer Science, Minor in Digital Media Art — Expected Graduation - Dec 2025",

  // Contact: the form will send here
  contactEmail: "davidhsongg@gmail.com",

  // Header meta info (email, phone, LinkedIn, GitHub)
  headerMeta: [
    { label: "davidhsongg@gmail.com", url: "mailto:davidhsongg@gmail.com" },
    { label: "(669) 236-1331", url: "tel:+16692361331" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidthesong/" },
    { label: "GitHub", url: "https://github.com/davidhsong" }
  ],

  // Education
  education: {
    school: "San José State University",
    location: "San José, CA",
    degree: "B.S., Computer Science, Minor in Digital Media Art",
    dates: "Expected Graduation - Dec 2025",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "Software Engineering",
      "Operating Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Visualization",
      "Database Management Systems",
      "Digital Media Art",
      "Information Security",
      "Programming Paradigms",
      "Big Data Processing"
    ]
  },

  // Experience (expanded for portfolio)
  experience: [
    {
      title: "Software Engineer Fellow",
      company: "Headstarter AI",
      dates: "Jul 2024 - Aug 2024",
      bullets: [
        "Built and maintained React.js components (forms, loading states, error handling) integrated with Node.js/Express APIs for smooth frontend–backend interaction.",
        "Contributed across 3 Agile sprints with multiple feature releases delivered and no major regressions reported.",
        "Applied AWS/GCP deployment practices and CI/CD workflows, reducing deployment errors by ~25% and improving release reliability.",
        "Performed Git-based peer code reviews and wrote sanity tests to improve maintainability and catch regressions early.",
        "Collaborated across time zones in a cross-functional team, aligning UX expectations with technical constraints and delivery timelines."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Life Stages",
      dates: "May 2024 - Jul 2024",
      bullets: [
        "Debugged and optimized authentication APIs (Node.js, PostgreSQL, JWT/OAuth), reducing login errors by ~40% and improving session stability.",
        "Authored and organized REST API documentation, accelerating backend adoption and cutting new-dev onboarding time.",
        "Resolved 12+ React.js UI issues, improving cross-device responsiveness and perceived performance.",
        "Added unit tests and tightened error handling around auth flows to prevent edge-case failures.",
        "Worked in Agile Scrum with product and design partners to prioritize fixes and ship improvements faster."
      ]
    }
  ],

  // Projects (expanded for portfolio)
  projects: [
    {
      name: "Zaiku",
      dates: "Jan 2025 – Apr 2025",
      bullets: [
        "Implemented secure authentication (JWT + Google OAuth) in Node.js/Express to support reliable user sessions.",
        "Integrated ElasticSearch for scalable, low-latency queries over larger datasets, reducing typical search times by ~30%.",
        "Structured modular routes and centralized error handling to simplify maintenance and debugging.",
        "Added backend tests to improve reliability and reinforce data structure integrity during development.",
        "Collaborated with frontend to integrate APIs and stage features for smooth rollouts."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/davidhsong/zaiku" }
      ]
    },
    {
      name: "PromptWave",
      dates: "Aug 2024 – Oct 2024",
      bullets: [
        "Built a React.js chatbot interface with multiple Hugging Face model integrations for real-time interactions.",
        "Optimized backend response times by ~40% via Redis caching and async workflows to handle bursty traffic.",
        "Hardened Express routes to better handle concurrency, timeouts, and rate limits for overall stability.",
        "Added UI/UX polish to simplify model switching and improve input/response readability."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/davidhsong/promptwave" }
      ]
    },
    {
      name: "HydroSense",
      dates: "Oct 2023 - Nov 2023",
      bullets: [
        "Developed a React + Node.js IoT dashboard to visualize real-time water sensor data from 5+ devices.",
        "Integrated Google Sheets API for automated data export/reporting to support non-technical stakeholders.",
        "Improved layout and responsiveness across desktop, tablet, and mobile, increasing usability scores by ~25% in peer testing.",
        "Used Figma for UI/UX design to prototype flows and iterate on visual hierarchy before implementation."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/davidhsong/HydroSense" }
      ]
    }
  ],

  // Skills (broadened slightly; still accurate)
  skills: {
    "Languages": ["Python", "Java", "JavaScript (ES6+)", "SQL", "HTML/CSS"],
    "Backend & APIs": ["Node.js/Express", "REST APIs", "JWT/OAuth"],
    "Frontend": ["React.js", "Responsive UI Design", "UI/UX (Figma)"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "ElasticSearch"],
    "Cloud & Infra": ["AWS", "GCP", "Firebase", "Git", "CI/CD Pipelines"],
    "Core CS": ["Object-Oriented Programming", "Data Structures & Algorithms", "Debugging", "Scalable Systems"],
    "Collaboration": ["Agile Scrum", "Code Reviews", "Cross-Functional Teamwork", "Documentation"]
  },

    interestsDetailed: [
    {
      title: "Gym",
      icon: "💪",
      explanation: "Started working out approximately 1 year ago...",
      images: ["/interests/gym-1.jpg", "/interests/gym-2.jpg", "/interests/gym-3.jpg"]
    },
    {
      title: "Art",
      icon: "🎨",
      explanation: "Started drawing parts of face (eg. eyes, mouth...)",
      images: ["/interests/art-1.jpg", "/interests/art-2.jpg", "/interests/art-3.jpg"]
    },
    {
      title: "Photography",
      icon: "📷",
      explanation: "Bought my first DSLR last year...",
      images: ["/interests/photo-1.jpg", "/interests/photo-2.jpg", "/interests/photo-3.jpg"]
    },
    {
      title: "Music",
      icon: "🎵",
      explanation: "I listen to a variety of music...",
      images: ["/interests/music-1.jpg", "/interests/music-2.jpg"]
    },
    {
      title: "Festivals / Raves",
      icon: "🎶",
      explanation: "I grew up listening to EDM artists...",
      images: ["/interests/festival-1.jpg", "/interests/festival-2.jpg", "/interests/festival-3.jpg"]
    }
  ]
};
