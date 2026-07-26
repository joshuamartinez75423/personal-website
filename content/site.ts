/**
 * Single source of truth for all site content.
 * Components render this data; edit here to update the site.
 */

export type ExternalLink = {
  title: string;
  desc: string;
  href: string;
  /** Which icon the footer renders for this link. */
  icon: "linkedin" | "github" | "resume" | "email";
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Education = {
  school: string;
  degree: string;
  graduation: string;
  details: string[];
  involvement: string[];
};

export type FeaturedProject = {
  title: string;
  tagline: string;
  tech: string[];
  overview: string;
  contributions: string[];
  lessons: string[];
  /** Self-hosted autoplay clip in /public. Empty = show "coming soon". */
  clipSrc: string;
  /** Link to the full video for the "watch the full demo" link. */
  fullVideoUrl: string;
};

export type Project = {
  title: string;
  tech: string[];
  description: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
};

export type SectionLink = {
  id: string;
  label: string;
};

/** Page sections in display order — drives the top-bar nav. */
export const sections: SectionLink[] = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "featured", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export const site = {
  name: "Joshua Martinez",
  /**
   * Hero photo. To change it: drop a new image into /public and update
   * src (or just overwrite /public/headshot.jpg and keep this as is).
   * Portrait orientation (~4:5) works best; keep it under ~200 KB.
   * width/height are the image file's real pixel dimensions.
   */
  headshot: {
    src: "/headshot.jpg",
    alt: "Headshot of Joshua Martinez",
    width: 800,
    height: 1000,
  },
  bio: "I chose computer science because it's like chasing a sunset: you can get closer, even stay with it a while, but it always sets — and a new day brings something new to learn. I'll never know everything; I can certainly try. I'm a CS senior at the University of Nebraska–Lincoln, minoring in Business, and I'm drawn to the intersection of the two — building things that leave a community genuinely better. Outside the terminal: wildlife conservation, and a lifelong soft spot for animals.",
  chatPrompt: "Ask a question about Joshua Martinez",
  chatPlaceholder: "Ask anything about Joshua…",
  // TODO: keep this line fresh — it's the "person in motion" signal.
  now: "Currently: interning at Assurity, heading into my final year at UNL, and building this site.",
  repoUrl: "https://github.com/joshuamartinez75423/personal-website",
} as const;

export const links: ExternalLink[] = [
  {
    title: "LinkedIn",
    desc: "Connect with me professionally.",
    href: "https://www.linkedin.com/in/joshua-martinez1/",
    icon: "linkedin",
  },
  {
    title: "GitHub",
    desc: "Browse my code and open-source work.",
    href: "https://github.com/joshuamartinez75423",
    icon: "github",
  },
  {
    title: "Resume",
    desc: "View my full resume.",
    href: "/resume.pdf", // TODO: drop resume.pdf into /public
    icon: "resume",
  },
  {
    title: "Email",
    desc: "Get in touch directly.",
    href: "mailto:jmartinez75423@gmail.com",
    icon: "email",
  },
];

export const featuredProject: FeaturedProject = {
  title: "N.O.A.H Ark",
  tagline: "A collaborative Unity VR game — I owned the Arctic biome end to end.",
  tech: ["Unity", "C#", "SteamVR", "XR Interaction Toolkit", "Git/GitHub"],
  overview:
    "N.O.A.H Ark is a multi-contributor VR game built in Unity, where players work to stabilize failing biomes aboard an ark. I developed the Arctic biome from the ground up and helped carry the project through final integration.",
  contributions: [
    "Authored 13 C# scripts driving the biome's interactive systems — temperature faults, alarm and wiring puzzles, and environmental melting — and integrated them with the game's global state.",
    "Identified that the game had no lose condition, pitched the fix to the team, and designed and implemented the lose scenario that completed the win/lose loop.",
    "Directed the game's ending sequence and the full playthrough demo video.",
    "Resolved 20+ merge conflicts and cross-system bugs across 100+ commits to keep the shared Unity/SteamVR codebase stable through final integration.",
  ],
  lessons: [
    "How to keep individually-owned systems compatible with a shared global state in a multi-contributor codebase.",
    "Spotting design gaps — not just building what's assigned, but noticing what's missing and making the case to fix it.",
    "Practical Git collaboration under pressure: frequent integration beats big-bang merges.",
  ],
  clipSrc: "/noah-demo.mp4",
  fullVideoUrl: "https://www.youtube.com/watch?v=iv4HJJ_lASA",
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "C#", "C", "JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["ASP.NET", "React", "Next.js"],
  },
  {
    label: "Testing & Tools",
    items: ["Cypress", "JMeter", "Postman", "Git", "GitHub Copilot CLI", "Claude Code"],
  },
  {
    label: "Platforms & Practices",
    items: [
      "Azure DevOps",
      "Databricks",
      "Jira",
      "Asana",
      "REST APIs",
      "MVC",
      "Object-Oriented Programming",
      "Agile/Scrum",
      "Spec-Driven Development",
    ],
  },
];

export const education: Education = {
  school: "University of Nebraska–Lincoln",
  degree: "B.S. in Computer Science, Minor in Business",
  graduation: "Expected May 2027",
  details: ["GPA: 3.48 / 4.00", "Dean's List (2×)"],
  involvement: [
    "Peter Kiewit Engineering Academy (selective admission, ~30 students/year)",
    "Jeffrey S. Raikes School of Computer Science and Management Design Studio",
    "Initialize UNL",
  ],
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Blue Cross and Blue Shield of Nebraska",
    location: "Omaha, NE (Hybrid)",
    dates: "June 2026 – July 2026",
    highlights: [
      "Integrated a Lakebase Data API through Databricks via a secure server-side proxy, querying up to 500 archetype records per request with zero browser credential exposure.",
      "Co-led spec-driven development of a multi-tier, rule-based and machine-learning classification engine to segment 210k+ members into behavioral personas.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Assurity",
    location: "Lincoln, NE (Remote)",
    dates: "October 2025 – Present",
    highlights: [
      "Built end-to-end logging and tracking in C# and ASP.NET for a distributed claims system, making each request traceable across background jobs and multiple services.",
      "Implemented system resilience features with the Polly framework to ensure high availability and application stability.",
      "Added API versioning to production endpoints, supporting backward compatibility while enabling safe rollout of new functionality.",
    ],
  },
  {
    role: "Software Quality Engineer Intern",
    company: "Quantum Workplace",
    location: "Omaha, NE (Hybrid)",
    dates: "June 2025 – October 2025",
    highlights: [
      "Developed and automated performance and UI test cases in JavaScript using Cypress, with load testing in JMeter, to validate enterprise software at scale.",
      "Grew UI test coverage 14% and expanded performance test scenarios 6.2× in the Azure DevOps CI/CD pipeline.",
      "Designed high-volume performance tests simulating 15,000+ concurrent users, uncovering critical bottlenecks.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "VR Punch Golf",
    tech: [],
    // TODO: add real description and tech stack
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Electronic Combination Lock",
    tech: ["C", "CowPi"],
    description:
      "Created with 2 others: an embedded lock system integrating a servomotor, rotary encoder, and persistent storage. Delivers real-time feedback and multi-step validation for secure access.",
  },
  {
    title: "Card Game Web Application",
    tech: ["C#", ".NET", "React", "Next.js", "CSS", "MS SQL"],
    description:
      "Collaborated in a team of 6 to design and develop a full-stack card game web app featuring Blackjack and Solitaire. Built using MVC architecture and SOLID principles for modular design, developed in an Agile environment with Scrum, sprint planning, and Git/GitHub version control.",
  },
  {
    title: "This Website",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Gemini API"],
    description:
      "Designed and built from scratch — editorial dark design, scroll-driven animation, a self-hosted gameplay video pipeline, and an AI assistant that answers questions about me through a streaming Next.js API route with prompt guardrails and rate limiting. You're looking at it.",
  },
];
