import type { StaticImageData } from "next/image";
import agriwaste from "@/images/work/agriwaste.png";
import egram from "@/images/work/egram.png";
import blogger from "@/images/work/bloggerapp.png";
import farmerPlatform from "@/images/work/plat.png";
import weather from "@/images/work/weatherweb.png";

export interface ArchitectureNode {
  id: string;
  label: string;
  caption: string;
  why: string;
  detail: string;
  kind: "client" | "gateway" | "runtime" | "queue" | "store" | "worker" | "infra";
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}

export interface Metric {
  value: string;
  label: string;
  context?: string;
  primary?: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  summary: string;
  year: string;
  status: string;
  links: { label: string; href: string }[];
  stack: string[];
  category: string;
  challenge: string[];
  solutions: { title: string; detail: string }[];
  insights: string[];
  architecture: { nodes: ArchitectureNode[]; edges: ArchitectureEdge[] };
  metrics?: Metric[];
  metricNote?: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "e-editor",
    title: "E-Editor",
    subtitle: "Real-Time Collaborative Code Editor",
    tagline: "A collaborative IDE where 20 people edit the same document — conflict-free.",
    summary:
      "A real-time collaborative IDE built around Yjs CRDTs and Monaco Editor, scaled horizontally with Redis Pub/Sub and hardened by load testing.",
    year: "2026",
    status: "Architecture · Real-Time · Load-Tested",
    category: "Real-Time Collaboration",
    links: [
      { label: "Source", href: "https://github.com/PranayDhanke/e-edito" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "Socket.IO",
      "WebRTC",
      "Yjs",
      "Monaco Editor",
      "Redis",
      "MongoDB",
      "Clerk",
      "BullMQ",
      "Docker",
      "Kubernetes",
    ],
    challenge: [
      "Multi-user editing produces conflicts the moment two cursors touch the same file.",
      "Socket.IO defaulting to a single node means every connected client is pinned to one process.",
      "Chat, presence, and WebRTC media sessions must ride the same real-time layer without breaking the editor.",
      "Code execution is a security boundary — untrusted code needs isolation and resource limits.",
      "Long-running rooms must survive crashes without losing document state.",
    ],
    solutions: [
      {
        title: "Conflict-free editing with Yjs",
        detail:
          "Documents are modeled as Yjs CRDTs, so concurrent edits merge deterministically across clients with zero coordination and zero merge conflicts. Monaco Editor is bound to the shared document.",
      },
      {
        title: "Cross-instance fan-out with Redis Pub/Sub",
        detail:
          "The Socket.IO adapter routes room events through Redis Pub/Sub, so editors connected to different backend instances stay in sync — presence, chat, and WebRTC signaling included.",
      },
      {
        title: "Background durability with BullMQ",
        detail:
          "Room lifecycle cleanup and Yjs snapshot persistence are offloaded to BullMQ workers, keeping the real-time hot path fast while durability happens off the critical path.",
      },
      {
        title: "Isolated, limited execution",
        detail:
          "Code runs in isolated Docker containers with explicit CPU and memory limits, and the whole platform deploys via Kubernetes Helm charts for repeatable, reproducible infrastructure.",
      },
    ],
    insights: [
      "Load-tested 100 concurrent users across 5 parallel rooms (20 users/room) over Redis Pub/Sub — 1.07s P95 room-join latency with zero errors across the workload.",
      "Stress-tested a single room to 1,000 concurrent connections. P95 latency degraded to 22.3s — code-update broadcast fan-out was the bottleneck.",
      "The data set a 20-user-per-room production capacity target: the fan-out cost of every keystroke to every peer is the true scaling constraint.",
    ],
    architecture: {
      nodes: [
        {
          id: "browser",
          label: "Browser",
          caption: "Monaco + Yjs client",
          why: "Editors connect here.",
          detail:
            "Each client holds a Yjs document, applies updates locally for zero-latency typing, and syncs deltas over a persistent socket.",
          kind: "client",
        },
        {
          id: "socket",
          label: "Socket.IO",
          caption: "Real-time gateway",
          why: "The real-time transport.",
          detail:
            "Presence, chat, WebRTC signaling, and Yjs update streams all route through Socket.IO rooms. Supports 20 users per room as the production target.",
          kind: "gateway",
        },
        {
          id: "redis",
          label: "Redis Pub/Sub",
          caption: "Cross-instance bus",
          why: "Scales beyond one node.",
          detail:
            "The Socket.IO adapter publishes room events to Redis so any backend instance can reach any editor — this is what made 5 parallel rooms possible.",
          kind: "queue",
        },
        {
          id: "instances",
          label: "Backend Instances",
          caption: "Express.js · horizontal",
          why: "Stateless, horizontally scaled.",
          detail:
            "Multiple instances share rooms through Redis. Horizontal scaling is what the load tests validated — 100 users across 5 rooms, zero errors.",
          kind: "runtime",
        },
        {
          id: "mongo",
          label: "MongoDB",
          caption: "Snapshot persistence",
          why: "Durability off the hot path.",
          detail:
            "Room state and Yjs snapshots are persisted by workers so documents survive crashes without blocking real-time writes.",
          kind: "store",
        },
        {
          id: "bullmq",
          label: "BullMQ",
          caption: "Background workers",
          why: "Heavy work, not on the socket thread.",
          detail:
            "Room lifecycle cleanup and snapshot persistence run as queued jobs, keeping the collaborative hot path fast and responsive.",
          kind: "worker",
        },
        {
          id: "docker",
          label: "Docker + Kubernetes",
          caption: "Isolated code execution",
          why: "Untrusted code, contained.",
          detail:
            "Executions run in containers with CPU/memory limits; Helm charts make the entire platform repeatable across environments.",
          kind: "infra",
        },
      ],
      edges: [
        { from: "browser", to: "socket", label: "Yjs deltas · chat · presence" },
        { from: "socket", to: "redis", label: "room events" },
        { from: "redis", to: "instances", label: "broadcast" },
        { from: "instances", to: "mongo", label: "snapshots (via workers)" },
        { from: "instances", to: "bullmq", label: "enqueue jobs" },
        { from: "bullmq", to: "mongo", label: "persist" },
        { from: "instances", to: "docker", label: "run code" },
      ],
    },
    metrics: [
      { value: "20", label: "Concurrent users / room", context: "Production capacity target", primary: true },
      { value: "1.15s", label: "P95 room-join latency", context: "Initial measured baseline, zero errors" },
      { value: "100", label: "Concurrent users tested", context: "Across 5 parallel rooms" },
      { value: "5", label: "Parallel rooms", context: "20 users per room, Redis Pub/Sub" },
      { value: "1,000", label: "Stress-test connections", context: "Single-room saturation" },
      { value: "22.3s", label: "P95 latency at saturation", context: "Code-update broadcast fan-out" },
    ],
    metricNote:
      "Code-update broadcast fan-out became the bottleneck during single-room stress testing.",
    featured: true,
  },
  {
    slug: "agriwaste",
    title: "Smart-AgriWaste",
    subtitle: "Agricultural Waste Management Platform",
    tagline: "A marketplace connecting farmers with buyers — in three languages, on low-bandwidth phones.",
    summary:
      "A full-stack agricultural marketplace where farmers list categorized agricultural waste and connect with buyers for browsing, negotiation, and purchase.",
    year: "2025",
    status: "Full-Stack Product · Multilingual · PWA",
    category: "Full-Stack Product",
    links: [
      { label: "Live", href: "https://smart-agriwaste.vercel.app" },
      { label: "Source", href: "https://github.com/PranayDhanke/Smart-Agriwaste-Full" },
    ],
    stack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Next-Intl",
      "Clerk",
      "ImageKit",
      "Socket.IO",
      "OneSignal",
      "Go",
      "Gin",
    ],
    challenge: [
      "Farmers and buyers rarely speak the same language — English, Hindi, and Marathi all need first-class support.",
      "Rural connectivity is unreliable; the product has to work when the network is not.",
      "Agricultural waste has no standard taxonomy — the platform must map informal descriptions to actionable solutions.",
      "Negotiation is social. Buyers and sellers need to talk in real time, not just through forms.",
    ],
    solutions: [
      {
        title: "A marketplace built around the farmer",
        detail:
          "Farmers list categorized agricultural waste and buyers browse, negotiate, and purchase directly — cutting out the middleman that leaves farmers underpaid.",
      },
      {
        title: "Go + MongoDB waste-management API",
        detail:
          "A separate Go/Gin service maps user-provided agricultural-waste inputs to relevant management and utilization solutions through structured REST endpoints.",
      },
      {
        title: "Truly multilingual",
        detail:
          "Next-Intl ships English, Hindi, and Marathi across the whole product, plus voice accessibility — speech input and text-to-speech — for users who don't read.",
      },
      {
        title: "Built for low connectivity",
        detail:
          "PWA support and OneSignal push notifications keep the experience usable and reachable in low-connectivity rural environments.",
      },
    ],
    insights: [
      "Real-time buyer-seller communication runs over Socket.IO, so negotiation feels immediate.",
      "Clerk handles authentication across roles, keeping identity secure without a bespoke auth system.",
      "The two-language split — Next.js for the product, Go for the waste-mapping API — keeps each system in the language it fits.",
    ],
    architecture: {
      nodes: [
        {
          id: "client",
          label: "Web / PWA",
          caption: "Next.js · Next-Intl · Redux",
          why: "Where farmers and buyers live.",
          detail:
            "A multilingual Next.js app with voice accessibility and push notifications, installable as a PWA for low-connectivity areas.",
          kind: "client",
        },
        {
          id: "auth",
          label: "Clerk",
          caption: "Authentication",
          why: "Secure identity, no bespoke auth.",
          detail:
            "Manages farmer and buyer roles and session security across the platform.",
          kind: "gateway",
        },
        {
          id: "api",
          label: "API Layer",
          caption: "Express.js + Go / Gin",
          why: "Product + domain logic.",
          detail:
            "Express.js serves the marketplace; a Go + MongoDB service maps agricultural-waste inputs to management and utilization solutions.",
          kind: "runtime",
        },
        {
          id: "realtime",
          label: "Socket.IO",
          caption: "Live negotiation",
          why: "Buyer-seller conversations.",
          detail:
            "Real-time messaging between buyers and sellers for negotiating terms and closing purchases.",
          kind: "gateway",
        },
        {
          id: "mongo",
          label: "MongoDB",
          caption: "Primary store",
          why: "Listings, users, messages.",
          detail:
            "Document store for flexible listing data, user profiles, and conversation history.",
          kind: "store",
        },
        {
          id: "media",
          label: "ImageKit",
          caption: "Media delivery",
          why: "Optimized images on slow networks.",
          detail:
            "CDN-backed image handling so listings load fast even on rural connections.",
          kind: "infra",
        },
        {
          id: "push",
          label: "OneSignal",
          caption: "Push notifications",
          why: "Reach users offline.",
          detail:
            "Delivers negotiation and listing updates as push notifications when the user isn't on the page.",
          kind: "infra",
        },
      ],
      edges: [
        { from: "client", to: "auth", label: "sessions" },
        { from: "client", to: "api", label: "REST" },
        { from: "client", to: "realtime", label: "socket" },
        { from: "api", to: "mongo", label: "persist" },
        { from: "realtime", to: "mongo", label: "messages" },
        { from: "client", to: "media", label: "images" },
        { from: "client", to: "push", label: "subscribe" },
      ],
    },
    featured: false,
  },
  {
    slug: "order-management",
    title: "Order Management",
    subtitle: "Distributed Event-Driven System",
    tagline: "Four microservices, one async pipeline, zero lost orders.",
    summary:
      "A distributed order processing system built with Go, Gin, RabbitMQ, PostgreSQL, Redis, and Docker — designed around asynchronous service communication and backend reliability patterns.",
    year: "2026",
    status: "Microservices · Event-Driven · Go",
    category: "Distributed Systems",
    links: [
      {
        label: "Source",
        href: "https://github.com/PranayDhanke/Event-Driven-Order-Management-System",
      },
    ],
    stack: ["Go", "Gin", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
    challenge: [
      "Order, Inventory, Payment, and Notification services must evolve independently — no tight coupling.",
      "A payment can succeed while inventory fails. The system has to converge on a consistent end state.",
      "Redelivery is normal in messaging. Consumers must be safe to run twice.",
      "Two buyers clicking buy on the last item simultaneously must not both succeed.",
    ],
    solutions: [
      {
        title: "Async communication over RabbitMQ",
        detail:
          "Services talk through RabbitMQ topic exchanges. Order publishes events; Inventory, Payment, and Notification consume and act — no synchronous calls between them.",
      },
      {
        title: "Saga orchestration",
        detail:
          "Multi-service order flows are orchestrated as a saga, with compensating actions that roll the pipeline back when any step fails.",
      },
      {
        title: "Outbox pattern",
        detail:
          "Domain events are written to a PostgreSQL outbox in the same transaction as state changes, guaranteeing events are published reliably and in order.",
      },
      {
        title: "Idempotency, retries, and DLQs",
        detail:
          "Consumers are idempotent, failed work retries with backoff, and poisoned messages land in dead-letter queues for inspection instead of being dropped.",
      },
      {
        title: "Concurrency-safe inventory",
        detail:
          "PostgreSQL transactions with row-level locking prevent overselling when simultaneous purchase requests compete for the last unit.",
      },
      {
        title: "Observable by design",
        detail:
          "Correlation IDs propagate across every async hop, enabling end-to-end distributed tracing across service boundaries.",
      },
    ],
    insights: [
      "Saga + Outbox together give you an eventually-consistent system that still looks correct to every user.",
      "Row-level locking converts a race condition into a queue — the last unit can only ever be sold once.",
      "Docker containers for every service make the whole pipeline reproducible from a single repository.",
    ],
    architecture: {
      nodes: [
        {
          id: "order",
          label: "Order",
          caption: "Go · Gin · REST",
          why: "Entry point for every purchase.",
          detail:
            "Accepts orders, validates them, writes state + outbox event atomically in one PostgreSQL transaction, then publishes to RabbitMQ.",
          kind: "runtime",
        },
        {
          id: "rabbit",
          label: "RabbitMQ",
          caption: "Topic exchanges",
          why: "The async backbone.",
          detail:
            "Decouples producers from consumers. Order publishes; Inventory, Payment, and Notification subscribe to relevant topics.",
          kind: "queue",
        },
        {
          id: "inventory",
          label: "Inventory",
          caption: "Go consumer",
          why: "Stock integrity.",
          detail:
            "Reserves stock with row-level locking and confirms/compensates on success or failure of downstream steps.",
          kind: "runtime",
        },
        {
          id: "payment",
          label: "Payment",
          caption: "Go consumer",
          why: "Money, exactly once.",
          detail:
            "Processes payment idempotently with retry + backoff; dead-letter queues catch anything that can't be settled.",
          kind: "runtime",
        },
        {
          id: "notify",
          label: "Notification",
          caption: "Go consumer",
          why: "Keep users informed.",
          detail:
            "Emits order confirmations and failure alerts based on the event stream.",
          kind: "runtime",
        },
        {
          id: "pg",
          label: "PostgreSQL",
          caption: "Transactions + outbox",
          why: "Consistency guarantees.",
          detail:
            "Each service owns its schema. The outbox table lives inside the Order service's transaction to guarantee reliable publication.",
          kind: "store",
        },
        {
          id: "redis",
          label: "Redis",
          caption: "Cache & coordination",
          why: "Hot reads stay fast.",
          detail:
            "Caching for read-heavy data and lightweight coordination across the services.",
          kind: "store",
        },
        {
          id: "docker",
          label: "Docker",
          caption: "Containerized services",
          why: "Reproducible infrastructure.",
          detail:
            "Every service ships as a container so the whole distributed system runs identically anywhere.",
          kind: "infra",
        },
      ],
      edges: [
        { from: "order", to: "rabbit", label: "order.created" },
        { from: "rabbit", to: "inventory", label: "reserve" },
        { from: "rabbit", to: "payment", label: "charge" },
        { from: "rabbit", to: "notify", label: "confirm" },
        { from: "inventory", to: "pg", label: "row-level locking" },
        { from: "payment", to: "pg", label: "settle" },
        { from: "notify", to: "pg", label: "audit" },
        { from: "inventory", to: "redis", label: "cache" },
        { from: "order", to: "pg", label: "state + outbox" },
        { from: "order", to: "docker", label: "runs in" },
      ],
    },
    featured: true,
  },
];

export interface SecondaryBuild {
  id: string;
  title: string;
  desc: string;
  year: string;
  stack: string[];
  link?: string;
  codeLink?: string;
  image?: StaticImageData;
  type: string;
}

export const secondaryBuilds: SecondaryBuild[] = [
  {
    id: "inventory-reservation",
    title: "Inventory Reservation System",
    desc: "A Go API with PostgreSQL, SQL migrations, Swagger docs, Docker support, and task-oriented Makefile workflows.",
    year: "2026",
    stack: ["Go", "PostgreSQL", "Docker", "Swagger"],
    codeLink: "https://github.com/PranayDhanke/Inventory-Reservation-System",
    type: "Backend API",
  },
  {
    id: "agrocart",
    title: "Farmer Product Selling Platform",
    desc: "An e-commerce experience where farmers list products and buyers purchase directly or negotiate pricing.",
    year: "2025",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    link: "https://agrocart-ten.vercel.app/",
    codeLink: "https://github.com/PranayDhanke/farmer-buyer-platfom.git",
    image: farmerPlatform,
    type: "E-Commerce",
  },
  {
    id: "egram",
    title: "E-Gram Panchayat Portal",
    desc: "A digital governance portal for village-level schemes with online applications, verification, and status updates.",
    year: "2024",
    stack: ["Next.js", "Firebase Auth", "Firestore"],
    link: "https://e-gram.vercel.app/",
    codeLink: "https://github.com/PranayDhanke/e-panchayat.git",
    image: egram,
    type: "GovTech",
  },
  {
    id: "blogger",
    title: "Blogger Platform",
    desc: "A full-stack blogging platform with authentication, CRUD, and a clean publishing experience.",
    year: "2023",
    stack: ["Next.js", "Firebase Firestore", "Firebase Auth"],
    link: "https://blogger-blue-ten.vercel.app/",
    codeLink: "https://github.com/PranayDhanke/blogger.git",
    image: blogger,
    type: "Full-Stack",
  },
  {
    id: "weather",
    title: "Weather Application",
    desc: "A responsive weather app with real-time conditions and forecasts from the OpenWeather API.",
    year: "2024",
    stack: ["React", "OpenWeather API", "Tailwind CSS"],
    link: "https://whetherapp-three.vercel.app/",
    codeLink: "https://github.com/PranayDhanke/simpleweather.git",
    image: weather,
    type: "Frontend",
  },
];

export const agriwasteImage = agriwaste;
