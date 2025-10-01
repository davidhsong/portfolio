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
        "Developed React.js components integrated with Node.js/Express APIs, contributing to multiple feature releases.",
        "Applied AWS/GCP cloud deployment practices and CI/CD pipelines, improving system reliability and reducing release errors.",
        "Collaborated in a cross-functional Agile team, performing code reviews and debugging services to ensure stability."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Life Stages",
      dates: "May 2024 - Jul 2024",
      bullets: [
        "Debugged authentication APIs (Node.js, PostgreSQL, JWT/OAuth), reducing login errors by ~40%.",
        "Authored REST API documentation, accelerating backend adoption and reducing onboarding time for new developers.",
        "Partnered with frontend engineers and product teammates to fix 12+ UI issues, improving responsiveness and cross-device usability."
      ]
    }
  ],

  // Projects with working GitHub URLs
  projects: [
    {
      name: "Zaiku",
      dates: "Jan 2025 – Apr 2025",
      bullets: [
        "Implemented JWT + Google OAuth authentication for secure sessions across the platform.",
        "Integrated ElasticSearch for scalable data queries, reducing search latency by ~30%.",
        "Added backend tests to improve reliability and reinforce data structure integrity."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/davidhsong/zaiku" }
      ]
    },
    {
      name: "PromptWave",
      dates: "Aug 2024 – Oct 2024",
      bullets: [
        "Built a React.js chatbot interface connected to Hugging Face APIs for real-time interactions.",
        "Optimized backend response times by ~40% using Redis caching and async workflows.",
        "Debugged Express.js APIs to ensure stable and reliable client-server communication."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/davidhsong/promptwave" }
      ]
    },
    {
      name: "HydroSense",
      dates: "Oct 2023 - Nov 2023",
      bullets: [
        "Built a React + Node.js dashboard visualizing real-time IoT sensor data from 5+ devices.",
        "Integrated Google Sheets API for automated data exports and reporting.",
        "Improved dashboard layout and responsiveness, boosting usability scores by 25% in peer testing."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/davidhsong/HydroSense" }
      ]
    }
  ],

  skills: {
    "Languages": ["Python", "Java", "JavaScript (ES6+)", "SQL", "HTML/CSS"],
    "Backend & APIs": ["Node.js/Express", "REST APIs", "JWT/OAuth"],
    "Frontend": ["React.js", "responsive UI design"], 
    "Databases": ["PostgreSQL", "MongoDB", "MySQL"],
    "Cloud & Infra": ["AWS", "GCP", "Firebase", "Git/CI/CD pipelines"],
    "Core CS": ["Object-Oriented Programming", "Data Structures and Algorithms", "Debugging", "Scalable Systems"],
    "Collaboration": ["Agile scrum", "code reviews", "cross-functional teamwork"]
  },

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
