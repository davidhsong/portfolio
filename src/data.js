export const DATA = {
  // Header
  name: "DAVID SONG",
  tagline: "B.S., Computer Science — Expected Graduation - Dec 2025",

  // Contact: the form will send here
  contactEmail: "david.song@sjsu.edu",

  // Header meta info (email, phone, LinkedIn, GitHub)
  headerMeta: [
    { label: "david.song@sjsu.edu", url: "mailto:david.song@sjsu.edu" },
    { label: "(669) 236-1331", url: "tel:+16692361331" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidthesong/" },
    { label: "GitHub", url: "https://github.com/davidhsong" }
  ],

  // Education
  education: {
    school: "San José State University",
    location: "San José, CA",
    degree: "B.S., Computer Science",
    dates: "Expected Graduation - Dec 2025",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science Senior Project",
      "Software Engineering",
      "Object-Oriented Design",
      "Operating Systems",
      "Data Structures & Algorithms",
      "Python Data Analysis",
      "Big Data Processing",
      "Database Systems",
      "Information Security",
      "Programming Paradigms",
      "Data Visualization"
    ]
  },

  // Experience
  experience: [
    {
      title: "Software Engineer Fellow",
      company: "Headstarter AI",
      dates: "Jul 2024 - Aug 2024",
      bullets: [
        "Built and updated React.js components (form elements, loading states), contributing to 3 bug-free weekly releases",
        "Attended workshops on AI tools and AWS/GCP and applied concepts to group projects to improve deployment reliability",
        "Participated in Git-based code reviews, testing small Node.js/Express.js changes to ensure stable weekly releases"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Life Stages",
      dates: "May 2024 - Jul 2024",
      bullets: [
        "Debugged and tested login/signup APIs (Node.js, PostgreSQL, JWT/OAuth), reducing user-reported authentication errors by 40%",
        "Authored and organized REST API documentation, enabling smoother backend adoption by teammates",
        "Collaborated with frontend developers to fix 12+ layout issues, improving responsiveness across React.js + mobile web"
      ]
    }
  ],

  // Projects with working GitHub URLs
  projects: [
    {
      name: "Zaiku",
      dates: "Jan 2025 – Apr 2025",
      bullets: [
        "Implemented secure login/session features with JWT and Google OAuth, ensuring strong authentication for users",
        "Integrated Elastic Search for scalable, fast queries across multiple content types",
        "Organized backend routes in Node.js/Express.js, adding tests to catch common issues during development"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/davidhsong/zaiku" }
      ]
    },
    {
      name: "PromptWave",
      dates: "Aug 2024 – Oct 2024",
      bullets: [
        "Built chatbot frontend in React.js, enabling switching between multiple Hugging Face API models",
        "Reduced response latency using Redis caching and async functions, improving real-time performance",
        "Debugged backend routes to ensure messages were processed correctly through Express.js APIs"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/davidhsong/promptwave" }
      ]
    },
    {
      name: "HydroSense",
      dates: "Oct 2023 - Nov 2023",
      bullets: [
        "Developed IoT dashboard with React.js + Node.js, displaying real-time sensor data for water monitoring",
        "Integrated Google Sheets API for external data export and analysis",
        "Improved dashboard layout for cross-device usability (desktop, tablet, mobile)"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/davidhsong/HydroSense" }
      ]
    }
  ],

  // Skills (Languages include HTML and CSS)
  skills: {
    "Languages": ["JavaScript (ES6+)", "HTML", "CSS", "Python", "Java", "SQL"],
    "Backend & APIs": ["RESTful APIs", "Microservices", "Authentication (JWT, OAuth)"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Indexing/Search with Elastic Search"],
    "Cloud & Infrastructure": ["GCP", "Firebase", "Kubernetes", "Git (CI/CD, version control)"],
    "Networking & Systems": ["Information Security fundamentals", "API scalability", "Caching with Redis"]
  },

  // Interests — each has title, explanation, and an image list (carousel shows one at a time).
  // Place your images in /public/interests/ with these filenames (or change paths).
  interestsDetailed: [
    {
      title: "Gym",
      explanation:
        "Started working out approximately 1 year ago. Started working out to improve my confidence and figure. Always been insecure about my body and weight, but now I'm a bit more confident.",
      images: ["/interests/gym-1.jpg", "/interests/gym-2.jpg", "/interests/gym-3.jpg"]
    },
    {
      title: "Art",
      explanation:
        "Started drawing parts of face (eg. eyes, mouth, nose, hair) in high school. Shifted to hyperrealism and animations in college.",
      images: ["/interests/art-1.jpg", "/interests/art-2.jpg", "/interests/art-3.jpg"]
    },
    {
      title: "Photography",
      explanation:
        "Bought my first DSLR last year and have been capturing scenic viewpoints whenever I go out with my friends or family to the beach or nice viewpoints.",
      images: ["/interests/photo-1.jpg", "/interests/photo-2.jpg", "/interests/photo-3.jpg"]
    },
    {
      title: "Music",
      explanation:
        "I listen to a variety of music, whether it be EDM, R&B, rap, classical, etc. My current favorite music artist is either Lil Uzi or Drake.",
      images: ["/interests/music-1.jpg", "/interests/music-2.jpg"]
    },
    {
      title: "Festivals / Raves",
      explanation:
        "I grew up listening to EDM artists like Alan Walker and Zedd. Last year, I was able to go to my first EDM festival (Zedd in the Park) and I loved the thrill from nostalgic songs. I plan on going to many more with my friends and family.",
      images: ["/interests/festival-1.jpg", "/interests/festival-2.jpg", "/interests/festival-3.jpg"]
    }
  ]
};
