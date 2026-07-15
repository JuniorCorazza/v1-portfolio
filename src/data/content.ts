/**
 * Single source of truth for every piece of copy on the site.
 * Keeping content here (rather than inline in components) makes the sections
 * pure presentation and lets non-code edits — new products, tweaked blurbs —
 * happen in one obvious place.
 */

export const profile = {
  name: "Junior Corazza",
  role: "Full-stack Engineer · Consultant @ Skylet AB · Stockholm",
  location: "Stockholm, Sweden",
  coordinates: "Stockholm · 59.33°N",
  branch: "main ✳ full-stack-consultant",
  availability: "AVAILABLE FOR CONSULTING — 2026",
} as const;

export const contact = {
  email: "juncor94@gmail.com",
  phone: "+46 70 738 33 86",
  github: "https://github.com/JuniorCorazza",
  linkedin: "https://se.linkedin.com/in/junior-corazza",
  website: "https://juniorcorazza.com",
} as const;

export const heroTerminal: { command: string; output: string; accent?: boolean }[] = [
  { command: "whoami", output: "junior_corazza" },
  { command: "role --current", output: "full-stack developer · consultant @ Skylet AB", accent: true },
  { command: "role --side", output: "founder @ Corazza Consulting AB → sidverket.se" },
  { command: "stack --top", output: "TypeScript · React · Next.js · Node · Cloud" },
  { command: "status", output: "open to new engagements" },
];

export const stats: { value: string; label: string; accent?: boolean }[] = [
  { value: "4 yrs", label: "SHIPPING IN PRODUCTION" },
  { value: "3", label: "ENGINEERING TEAMS" },
  { value: "B.Sc", label: "COMPUTER SCIENCE", accent: true },
];

export const services: { no: string; title: string; body: string; wide?: boolean }[] = [
  {
    no: "01",
    title: "Full-stack product development",
    body: "Own software end to end — data model and cloud infrastructure through to the front-end people actually use — in a codebase your team can keep.",
  },
  {
    no: "02",
    title: "Integrations & microservices",
    body: "Design and build the integration solutions and microservices that connect your platform to the partners and services it depends on.",
  },
  {
    no: "03",
    title: "Cloud infrastructure & DevOps",
    body: "Ship reliably with CI/CD, containers and infrastructure-as-code on Google Cloud — secure, observable, and cost-aware.",
  },
  {
    no: "04",
    title: "Data pipelines & APIs",
    body: "Handle, process and present data cleanly, and integrate with partners over well-designed RESTful APIs and secure cloud operations.",
  },
  {
    no: "05",
    title: "Agile delivery & Scrum Master",
    body: "Set up the code reviews, workflows and rituals that scale a team's output — I've built these from the ground up while scaling an IT department.",
    wide: true,
  },
];

export const selectedWork: {
  meta: string;
  title: string;
  external?: boolean;
  href?: string;
  body: string;
  /** Optional substring of `body` rendered brighter for emphasis. */
  highlight?: string;
  /** Optional "a service by X" footer link, rendered under the body. */
  serviceBy?: { label: string; href: string };
  tags: string[];
}[] = [
  {
    meta: "FOUNDER · SIDE VENTURE · CORAZZA CONSULTING AB · 2026",
    title: "Sidverket — websites as a subscription",
    external: true,
    href: "https://sidverket.se",
    body:
      "A subscription website service for small Swedish businesses — tradespeople like builders, electricians and salons. Each customer gets a fast, professional site tailored to their trade, with their own domain and hosting included. Designed, built and operated solo, on a platform of my own — static builds deployed on Cloudflare, 500+ sites live.",
    serviceBy: { label: "Corazza Consulting AB", href: "https://corazzaconsulting.com" },
    tags: ["Python", "SQLite", "Cloudflare", "SSG"],
  },
  {
    meta: "REITAN CONVENIENCE SWEDEN · 2024–2026",
    title: "Service Platform — integrations & microservices at scale",
    body: "Owned integration solutions and microservices on the in-house Service Platform, advised other IT units, and introduced code reviews and structured workflows to scale the department.",
    tags: ["Microservices", "Integrations", "DevOps", "CI/CD"],
  },
  {
    meta: "QUANDIFY AB · 2022–2024",
    title: "Full-stack build & Scrum Master for a data platform",
    body: "Built the data layer end to end — handling, processing and presenting sensor data — and led UI/UX on the consumer app (live on the App Store & Google Play) that surfaces water usage and leak alerts over partner APIs. Ran cloud infrastructure and served as Scrum Master.",
    highlight: "(live on the App Store & Google Play)",
    tags: ["React", "Node.js", "Cloud", "APIs", "Scrum"],
  },
  {
    meta: "PERSONAL PROJECT · 3D GAME",
    title: "Cone Storm: Cubic Escape",
    external: true,
    href: "https://luminous-crepe-1e214d.netlify.app/",
    body: "A browser-based 3D survival game built from scratch with Three.js — dodge an endless onslaught of cones down a shifting neon corridor and chase the high score. Runs entirely client-side, playable in-page.",
    tags: ["Three.js", "JavaScript", "WebGL"],
  },
  {
    meta: "PERSONAL PROJECT · ONGOING",
    title: "A fully self-serve e-commerce platform",
    external: true,
    href: "https://ecommerce-git-main-junior-corazzas-projects.vercel.app/",
    body: "A storefront entirely customizable from an admin dashboard — create categories and products, edit the dashboard content, and track store analytics in one place.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind"],
  },
];

export const stack: { label: string; items: string }[] = [
  { label: "languages", items: "TypeScript · JavaScript · Python · C++ · C#" },
  { label: "frameworks", items: "React · Next.js · Node.js · React Native · Expo · Tailwind CSS" },
  { label: "data", items: "PostgreSQL · MySQL · Firebase · RESTful APIs" },
  { label: "cloud / devops", items: "Docker · Terraform · Google Cloud · AWS · CI/CD · Git · GitHub · GitLab" },
  { label: "ai / tooling", items: "Claude · Gemini · OpenAI · GitHub Copilot · Cursor" },
  { label: "testing / process", items: "Jest · Test-driven development · Scrum · ESLint · Prettier" },
];

export const about = {
  heading: "Full-stack, end to end — and genuinely built for the people who use it.",
  paragraphs: [
    "I'm a full-stack developer based in Stockholm, now working independently as a consultant through Skylet. I own software across the whole stack — data models, cloud infrastructure, APIs and the interfaces people actually touch — and I integrate quickly into whatever team I'm helping.",
    "I came to engineering deliberately — from work as an electrician and a retail manager into a Computer Science degree and a career in code. That path is why I care as much about the people and process around software as the software itself.",
  ],
} as const;

/** Experience timeline, newest first — rendered as a git log. */
export const timeline: {
  hash: string;
  ref?: string;
  date: string;
  title: string;
  titleNote?: string;
  body: string;
  head?: boolean;
  muted?: boolean;
}[] = [
  {
    hash: "9f3ac21",
    ref: "HEAD → main, current",
    date: "May 2026 — Present · Stockholm",
    title: "Skylet AB — Full-stack Developer",
    titleNote: "(Consultant)",
    body: "Delivering tailored full-stack solutions for diverse clients — bridging complex business requirements and technical implementation, and embedding into client teams across both front-end and robust back-end systems.",
    head: true,
  },
  {
    hash: "6b1e4d0",
    date: "Aug 2024 — May 2026 · Stockholm",
    title: "Reitan Convenience Sweden — Full-stack Developer, DevOps",
    body: "On the DevOps team, developed and maintained proprietary systems with a focus on the Service Platform — designing and implementing integration solutions and microservices, guiding other IT units and business functions, and establishing new team protocols (code reviews, structured workflows) to scale the IT department.",
  },
  {
    hash: "3c9f7a2",
    date: "Mar 2022 — Aug 2024 · Stockholm",
    title: "Quandify AB — Full-stack Developer & Scrum Master",
    body: "Handled, relayed, processed and presented data across the system; led front-end UI/UX and explored new technologies; managed cloud infrastructure and partner API integrations for secure, efficient operations; and served as Scrum Master, running the agile process for the team.",
  },
  {
    hash: "1a0d5e8",
    ref: "tag: v1.0-graduated",
    date: "Aug 2019 — Jun 2022 · Örebro",
    title: "Örebro Universitet — B.Sc Computer Science",
    body: "Completed a Bachelor of Science in Computer Science — the deliberate pivot into software, studied alongside working as a qualified electrician.",
  },
  {
    hash: "84c2b19",
    date: "Aug 2018 — Mar 2022 · Stockholm",
    title: "Temael i Tumba AB — Electrician",
    body: "Practised as a qualified electrician on complex tenant adaptations and installations — high technical precision, real-world systems, and building regulations.",
    muted: true,
  },
  {
    hash: "0e5f3c4",
    ref: "root",
    date: "Feb 2017 — Jul 2018 · Stockholm",
    title: "Hennes & Mauritz — Department Manager",
    body: "Personnel planning, scheduling and organising a department to maximise sales and profitability — plus recruitment and training. Where I learned to lead people.",
    muted: true,
  },
];

export const languages = ["Swedish — mother tongue", "English — fluent", "German — basics"];

export const outsideTheTerminal =
  "Golf · gaming · and a lasting soft spot for\nThe Legend of Zelda: Ocarina of Time.";
