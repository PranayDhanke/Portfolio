export const profile = {
  name: "Pranay Dhanke",
  firstName: "Pranay",
  lastName: "Dhanke",
  initials: "PD",
  monogram: "PD",
  role: "Computer Science Engineer",
  positioning:
    "Computer Science Engineer building scalable backend systems, distributed systems, and real-time applications.",
  location: "Maharashtra, India",
  timezone: "GMT +5:30",
  phone: "+91 83291 23649",
  phoneHref: "tel:+918329123649",
  email: "pranaydhanke33@gmail.com",
  emailHref: "mailto:pranaydhanke33@gmail.com",
  availability: "Open to SDE / Full-Stack / Backend internships",
  resumeHref: "/pranay%20resume.pdf",
  resumeDownloadName: "Pranay_Dhanke_Resume.pdf",
  summary:
    "Computer Science Engineering student with hands-on experience designing scalable backend systems, distributed microservices, and real-time collaborative applications using Go, Node.js, TypeScript, and Next.js.",
  heroStack: [
    "Go",
    "Node.js",
    "TypeScript",
    "Distributed Systems",
    "Real-Time Systems",
    "DevOps",
  ],
  seo: {
    title: "Pranay Dhanke — Backend & Distributed Systems Engineer",
    description:
      "Portfolio of Pranay Dhanke — Computer Science Engineering student building scalable backend systems, distributed microservices, and real-time collaborative applications with Go, Node.js, TypeScript, and Next.js.",
  },
};

export const socials = [
  { label: "GitHub", href: "https://github.com/PranayDhanke", handle: "@PranayDhanke" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pranay-dhanke",
    handle: "/in/pranay-dhanke",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/PranayDhanke33",
    handle: "@PranayDhanke33",
  },
  {
    label: "DockerHub",
    href: "https://hub.docker.com/u/pranaydhanke",
    handle: "/u/pranaydhanke",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/pranaydhanke33",
    handle: "@pranaydhanke33",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pranaydhanke33/",
    handle: "@pranaydhanke33",
  },
] as const;

export const contactChannels = [
  { label: "Email", value: profile.email, href: profile.emailHref },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "Location", value: profile.location, href: null },
  { label: "Timezone", value: profile.timezone, href: null },
] as const;

export const about = {
  whoAmI:
    "I'm a Computer Science Engineering student who thinks in systems. I care about what happens when your request isn't just a render — when it has to be consistent, concurrent, and survive failure.",
  whatIBuild:
    "Backend services, distributed microservices, real-time collaboration tools, and full-stack products — built with Go, Node.js, and TypeScript, and measured under load, not just in the happy path.",
  interests: [
    "Backend Engineering",
    "Distributed Systems",
    "Real-Time Systems",
    "System Design",
    "DevOps",
    "Scalable Architecture",
  ],
  education: [
    {
      school: "Sipna College of Engineering and Technology",
      degree: "B.E. in Computer Science and Engineering",
      period: "2023 — 2026",
      note: "CGPA: 8.14 / 10",
    },
    {
      school: "Government Polytechnic, Arvi",
      degree: "Diploma in Computer Science and Engineering",
      period: "2020 — 2023",
      note: "79.20%",
    },
  ],
  experience: [
    {
      role: "Full-Stack Web Developer Intern",
      company: "Unified Mentor Pvt. Ltd.",
      period: "June 2024 — July 2024",
      type: "Internship",
      achievements: [
        "Developed a full-stack e-Governance platform for government services and welfare schemes serving rural communities.",
        "Digitized manual application and verification workflows, reducing paperwork by approximately 90% and improving operational efficiency.",
        "Built responsive interfaces and integrated backend APIs to streamline scheme management and citizen service delivery.",
      ],
    },
  ],
};

export const skillGroups = [
  {
    category: "Languages",
    skills: ["Go", "TypeScript", "JavaScript", "Java", "Python"],
  },
  {
    category: "Backend",
    skills: ["Go / Gin", "Node.js", "Express.js"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Redux"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Kubernetes", "Git", "GitHub"],
  },
];

export type SpotlightSkill = keyof typeof skillSpotlight;

export const skillSpotlight = {
  Redis: {
    usedFor: ["Pub/Sub", "Real-time communication", "Cross-instance synchronization", "Performance-sensitive systems"],
    projects: ["E-Editor", "Distributed Order Management System"],
    note: "Scaling real-time events and coordinating state across instances.",
  },
  Kubernetes: {
    usedFor: ["Helm deployments", "Reproducible infrastructure", "Container orchestration"],
    projects: ["E-Editor"],
    note: "Packaging a collaborative IDE for repeatable, reliable deploys.",
  },
  Go: {
    usedFor: ["REST APIs", "Microservices", "Concurrency-safe systems", "High-throughput backends"],
    projects: ["Distributed Order Management System", "Smart-AgriWaste API", "Inventory Reservation System"],
    note: "My preferred language for building systems that must hold up under load.",
  },
  TypeScript: {
    usedFor: ["Full-stack products", "Real-time clients", "Shared type contracts"],
    projects: ["E-Editor", "Smart-AgriWaste Platform"],
    note: "Type safety across the entire product, from editor to socket layer.",
  },
  PostgreSQL: {
    usedFor: ["Transactions", "Row-level locking", "Concurrency-safe writes", "Relational integrity"],
    projects: ["Distributed Order Management System"],
    note: "Where consistency guarantees actually matter.",
  },
};

export const skillSpotlightMap: Record<string, SpotlightSkill> = {
  "Go": "Go",
  "Go / Gin": "Go",
  "TypeScript": "TypeScript",
  "Redis": "Redis",
  "PostgreSQL": "PostgreSQL",
  "Kubernetes": "Kubernetes",
};

export const engineeringIdentity = [
  {
    index: "01",
    title: "Distributed Systems",
    line: "Systems that coordinate across services, not single points of truth.",
  },
  {
    index: "02",
    title: "Real-Time Communication",
    line: "Latency budgets that a user can feel, enforced end-to-end.",
  },
  {
    index: "03",
    title: "Backend Architecture",
    line: "Contracts, boundaries, and event flows designed before code.",
  },
  {
    index: "04",
    title: "Performance Engineering",
    line: "I don't assume it scales. I load-test it until it tells me the truth.",
  },
  {
    index: "05",
    title: "Scalability",
    line: "Capacity targets, fan-out math, and the bottlenecks in between.",
  },
  {
    index: "06",
    title: "Infrastructure",
    line: "Containers, orchestrators, and reproducible deploys as a habit.",
  },
];

export const underTheHood = [
  {
    term: "CRDTs",
    detail:
      "Used Yjs CRDTs in E-Editor to synchronize documents conflict-free across concurrent editors without a central lock.",
  },
  {
    term: "WebSockets / Socket.IO",
    detail:
      "The real-time transport for E-Editor and Smart-AgriWaste — presence, chat, and live document sync over persistent connections.",
  },
  {
    term: "Redis Pub/Sub",
    detail:
      "Scaled Socket.IO across backend instances so events in one room reach editors on any node, in all 5 parallel rooms during load tests.",
  },
  {
    term: "Message Queues",
    detail:
      "BullMQ for background jobs (Yjs snapshot persistence, room cleanup) and RabbitMQ for async communication between order microservices.",
  },
  {
    term: "Event-Driven Architecture",
    detail:
      "Order, Inventory, Payment, and Notification services in the Order Management System communicate only through events — no synchronous coupling.",
  },
  {
    term: "Saga Pattern",
    detail:
      "Orchestrated multi-service order flows with compensating actions so a failed step rolls the whole transaction back consistently.",
  },
  {
    term: "Outbox Pattern",
    detail:
      "Wrote domain events to a PostgreSQL outbox inside the same transaction as state changes, guaranteeing reliable, ordered publication.",
  },
  {
    term: "Idempotency",
    detail:
      "Idempotent consumers and deduplication keys prevent duplicate processing when a message is redelivered after a crash.",
  },
  {
    term: "Retries & Dead-Letter Queues",
    detail:
      "Failed messages are retried with backoff and moved to DLQs for inspection instead of being silently dropped.",
  },
  {
    term: "Distributed Tracing",
    detail:
      "Correlation IDs flow through every async hop in the Order Management System for end-to-end request tracking across services.",
  },
  {
    term: "Concurrency",
    detail:
      "PostgreSQL transactions with row-level locking keep inventory updates concurrency-safe and prevent overselling.",
  },
  {
    term: "Containers & Orchestration",
    detail:
      "Isolated Docker containers with CPU/memory limits for sandboxed code execution; Kubernetes Helm charts for repeatable deployments.",
  },
  {
    term: "Load Testing",
    detail:
      "1,000-connection stress tests surfaced code-update broadcast fan-out as the bottleneck — the measurement that set E-Editor's capacity target.",
  },
];

export const engineeringWorkflow = [
  { index: "01", title: "Understand the problem", detail: "Constraints, failure modes, and the latency budget." },
  { index: "02", title: "Design the architecture", detail: "Contracts, boundaries, and event flows before code." },
  { index: "03", title: "Build the system", detail: "Ship the smallest system that honors the design." },
  { index: "04", title: "Measure the system", detail: "Load tests, latency percentiles, and error counts." },
  { index: "05", title: "Find the bottleneck", detail: "Trace the weakest link — usually the fan-out." },
  { index: "06", title: "Improve the architecture", detail: "Iterate on the design with the data, not guesses." },
];

export const exploring = [
  { topic: "Backend Engineering", mode: "Building" },
  { topic: "Distributed Systems", mode: "Exploring" },
  { topic: "System Design", mode: "Learning" },
  { topic: "DevOps", mode: "Exploring" },
  { topic: "Kubernetes", mode: "Learning" },
  { topic: "DevSecOps", mode: "Exploring" },
  { topic: "Performance Engineering", mode: "Exploring" },
  { topic: "Real-Time Systems", mode: "Building" },
  { topic: "Security", mode: "Learning" },
];
