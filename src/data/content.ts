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
  availability: "AVAILABLE FOR CONSULTING · 2026",
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
    body: "I build the whole thing, from data model and cloud infrastructure to the front end, and leave you with a codebase your team can maintain without me.",
  },
  {
    no: "02",
    title: "Integrations & microservices",
    body: "I design and build the integrations and microservices that connect your platform to the partners and services it depends on.",
  },
  {
    no: "03",
    title: "Cloud infrastructure & DevOps",
    body: "I set up CI/CD, containers and infrastructure-as-code on Google Cloud, with attention to security, monitoring and the monthly bill.",
  },
  {
    no: "04",
    title: "Data pipelines & APIs",
    body: "I build the pipelines that collect, process and present data, and the REST APIs that connect it to partner systems.",
  },
  {
    no: "05",
    title: "Agile delivery & Scrum Master",
    body: "I set up the code reviews and workflows a growing team needs. I introduced them at Reitan Convenience while its IT department was growing, and I was Scrum Master at Quandify.",
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
    title: "Sidverket: websites as a subscription",
    external: true,
    href: "https://sidverket.se",
    body:
      "A subscription website service for small Swedish businesses such as builders, electricians and salons. Each customer gets a fast site built for their trade, with their own domain and hosting included. I designed, built and run it alone, on my own platform. The sites are static builds deployed on Cloudflare, and more than 500 are live.",
    serviceBy: { label: "Corazza Consulting AB", href: "https://corazzaconsulting.com" },
    tags: ["Python", "SQLite", "Cloudflare", "SSG"],
  },
  {
    meta: "REITAN CONVENIENCE SWEDEN · 2024–2026",
    title: "Service Platform: integrations & microservices",
    body: "I built and maintained integrations and microservices on the in-house Service Platform, advised other IT units, and introduced code reviews and structured workflows as the department grew.",
    tags: ["Microservices", "Integrations", "DevOps", "CI/CD"],
  },
  {
    meta: "QUANDIFY AB · 2022–2024",
    title: "Full-stack build & Scrum Master for a data platform",
    body: "I built the data layer that takes in, processes and presents sensor data, and led UI/UX on the consumer app (live on the App Store & Google Play), which shows water usage and leak alerts. I also ran the cloud infrastructure, handled the partner API integrations and was Scrum Master.",
    highlight: "(live on the App Store & Google Play)",
    tags: ["React", "Node.js", "Cloud", "APIs", "Scrum"],
  },
  {
    meta: "PERSONAL PROJECT · 3D GAME",
    title: "Cone Storm: Cubic Escape",
    external: true,
    href: "https://luminous-crepe-1e214d.netlify.app/",
    body: "A 3D survival game for the browser, written from scratch in Three.js. You dodge cones flying down a neon corridor and try to beat your high score. It runs entirely client-side.",
    tags: ["Three.js", "JavaScript", "WebGL"],
  },
  {
    meta: "PERSONAL PROJECT · ONGOING",
    title: "A self-serve e-commerce platform",
    external: true,
    href: "https://ecommerce-git-main-junior-corazzas-projects.vercel.app/",
    body: "A storefront you manage from an admin dashboard: create categories and products, edit the content, and check store analytics.",
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
  heading: "Full-stack developer, former electrician.",
  paragraphs: [
    "I'm a full-stack developer in Stockholm, now working as a consultant through Skylet. I work across the whole stack: data models, cloud infrastructure, APIs and front ends. I'm used to being the new person on a team, and I get up to speed quickly.",
    "I got here the long way round. I managed a department at H&M, then worked as an electrician, and did my Computer Science degree alongside the electrician job. That's why I care about the people and the process around software as much as the code.",
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
    date: "May 2026 – Present · Stockholm",
    title: "Skylet AB — Full-stack Developer",
    titleNote: "(Consultant)",
    body: "Full-stack consulting. I join client teams, turn business requirements into working software, and work on both front end and back end.",
    head: true,
  },
  {
    hash: "6b1e4d0",
    date: "Aug 2024 – May 2026 · Stockholm",
    title: "Reitan Convenience Sweden — Full-stack Developer, DevOps",
    body: "I was on the DevOps team, developing and maintaining in-house systems, mainly the Service Platform. I designed and built integrations and microservices, advised other IT units and business functions, and introduced code reviews and structured workflows as the IT department grew.",
  },
  {
    hash: "3c9f7a2",
    date: "Mar 2022 – Aug 2024 · Stockholm",
    title: "Quandify AB — Full-stack Developer & Scrum Master",
    body: "I worked on the data flow through the whole system, from sensor readings to what the user sees, and led front-end UI/UX. I also managed the cloud infrastructure and partner API integrations, and ran the team's agile process as Scrum Master.",
  },
  {
    hash: "1a0d5e8",
    ref: "tag: v1.0-graduated",
    date: "Aug 2019 – Jun 2022 · Örebro",
    title: "Örebro Universitet — B.Sc Computer Science",
    body: "Bachelor of Science in Computer Science. I studied while working as an electrician, with the plan of moving into software.",
  },
  {
    hash: "84c2b19",
    date: "Aug 2018 – Mar 2022 · Stockholm",
    title: "Temael i Tumba AB — Electrician",
    body: "Worked as a qualified electrician on tenant adaptations and installations. The work had to be precise and had to meet building regulations.",
    muted: true,
  },
  {
    hash: "0e5f3c4",
    ref: "root",
    date: "Feb 2017 – Jul 2018 · Stockholm",
    title: "Hennes & Mauritz — Department Manager",
    body: "Staffing, scheduling and running a department to hit sales and profit targets, plus recruitment and training. This is where I learned to lead people.",
    muted: true,
  },
];

export const languages = ["Swedish (native)", "English (fluent)", "German (basics)"];

export const outsideTheTerminal =
  "Golf, gaming, and a soft spot for\nThe Legend of Zelda: Ocarina of Time.";
