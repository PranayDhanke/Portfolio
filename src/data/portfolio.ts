import type { IconType } from "react-icons";
import type { StaticImageData } from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

import portrait from "@/images/home/IMG20250917134730.jpg";
import agriwaste from "@/images/work/agriwaste.png";
import blogger from "@/images/work/bloggerapp.png";
import egram from "@/images/work/egram.png";
import farmerPlatform from "@/images/work/plat.png";
import weather from "@/images/work/weatherweb.png";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ContactItem {
  title: string;
  content: string;
  link?: string;
  icon: IconType;
}

export interface Project {
  id: string;
  title: string;
  desc: string;
  image?: StaticImageData;
  link?: string;
  codeLink?: string;
  tech: string[];
  highlights?: string[];
  year?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export const portfolio = {
  name: "Pranay Dhanke",
  firstName: "Pranay",
  initial: "P",
  role: "Full-Stack Developer",
  shortRole: "Go, Next.js, Node.js",
  location: "Maharashtra, India",
  availability: "Open to internships and full-time roles",
  email: "pranaydhanke33@gmail.com",
  phone: "+91 83291 23649",
  resumeHref: "/resume.pdf",
  resumeDownloadName: "Pranay_Dhanke_Resume.pdf",
  hero: {
    badge: "Available for internships and entry-level software roles",
    headingLead: "I build scalable",
    headingAccent: "backend and web systems",
    description:
      "Computer Science student skilled in building scalable web applications and distributed backend systems using Go, Node.js, and Next.js, with a strong interest in backend engineering and distributed systems.",
    ctaPrimary: "Let's work together",
    ctaSecondary: "Download resume",
  },
  about: {
    introTitle: "About Me",
    intro:
      "I focus on building reliable backend systems and full-stack products that solve operational problems with clean architecture, clear workflows, and production-minded engineering.",
    detail:
      "My recent work spans full-stack web applications, event-driven backend design, real-time workflows, and database-backed systems using Go, Node.js, Next.js, PostgreSQL, MongoDB, Redis, and Docker.",
    highlights: [
      "Built full-stack products and backend services for real-world workflows",
      "Interested in backend engineering, concurrency, and distributed systems",
      "Hands-on with REST APIs, real-time systems, PostgreSQL, MongoDB, Redis, and Docker",
    ],
  },
  seo: {
    title: "Pranay Dhanke | Full-Stack and Backend Developer",
    description:
      "Portfolio of Pranay Dhanke, a computer science student building scalable web applications and backend systems with Go, Next.js, Node.js, PostgreSQL, and distributed architecture patterns.",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/PranayDhanke",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://in.linkedin.com/in/pranay-dhanke-176a66263",
      icon: FaLinkedin,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/pranaydhanke33",
      icon: FaTwitter,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/pranaydhanke33/",
      icon: FaInstagram,
    },
  ] satisfies SocialLink[],
  contactItems: [
    {
      title: "Email",
      content: "pranaydhanke33@gmail.com",
      link: "mailto:pranaydhanke33@gmail.com",
      icon: FaEnvelope,
    },
    {
      title: "Phone",
      content: "+91 83291 23649",
      link: "tel:+918329123649",
      icon: FaPhone,
    },
    {
      title: "Location",
      content: "Maharashtra, India (GMT +5:30)",
      icon: FaMapMarkerAlt,
    },
    {
      title: "Availability",
      content: "Open to internships and full-time roles",
      icon: FaEnvelope,
    },
  ] satisfies ContactItem[],
  skillGroups: [
    {
      title: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    },
    {
      title: "Backend",
      skills: ["Go", "Node.js", "Express.js", "REST APIs", "Socket.IO", "Gin"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
      title: "Systems and Messaging",
      skills: ["RabbitMQ", "Event-Driven Architecture", "Distributed Systems"],
    },
    {
      title: "Authentication and Realtime",
      skills: ["Clerk", "Firebase Auth", "Socket.IO"],
    },
    {
      title: "Tools and Platforms",
      skills: ["Git", "GitHub", "Docker", "Linux", "Postman", "Vercel"],
    },
  ] satisfies SkillGroup[],
  featuredSkills: [
    {
      category: "Backend",
      items: ["Go", "Node.js", "Express.js", "Gin", "REST APIs"],
    },
    {
      category: "Data and Infra",
      items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "RabbitMQ"],
    },
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    },
  ],
  experience: [
    {
      role: "Full-Stack Web Developer Intern",
      company: "Unified Mentor Pvt. Ltd.",
      period: "June 2024 - July 2024",
      points: [
        "Developed responsive full-stack applications using Next.js with a strong focus on performance.",
        "Designed role-based workflows and backend logic for a digital governance platform.",
        "Integrated REST APIs, authentication systems, and database-driven features.",
        "Helped digitize manual processes and reduced operational effort by approximately 70 to 80 percent.",
      ],
    },
  ] satisfies Experience[],
  education: [
    {
      school: "Sipna College of Engineering and Technology",
      degree: "B.E. in Computer Science and Engineering",
      period: "2024 - 2026",
    },
    {
      school: "Government Polytechnic Arvi",
      degree: "Diploma Studies",
      period: "2020 - 2023",
    },
  ] satisfies Education[],
  projects: [
    {
      id: "e-editor",
      title: "E-Editor - Real-Time Collaborative Code Editor",
      desc: "A scalable collaborative IDE built for multi-user coding sessions with conflict-free editing, live presence, integrated communication, and secure containerized code execution.",
      tech: [
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
      ],
      highlights: [
        "Conflict-free real-time editing with Yjs CRDTs",
        "Live sync, presence, chat, and audio/video collaboration",
        "Sandboxed code execution in isolated Docker containers",
      ],
      year: "2026",
      codeLink: "https://github.com/PranayDhanke/e-edito.git",
    },
    {
      id: "event-driven-order-management-system",
      title: "Event-Driven Order Management System",
      desc: "A distributed order processing system built with Go, Gin, RabbitMQ, PostgreSQL, Redis, and Docker, designed around asynchronous service communication and backend reliability patterns.",
      tech: ["Go", "Gin", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
      highlights: [
        "Saga orchestration",
        "Outbox pattern",
        "Concurrency-safe inventory updates",
      ],
      year: "2026",
      codeLink:
        "https://github.com/PranayDhanke/Event-Driven-Order-Management-System.git",
    },
    {
      id: "agriwaste",
      title: "Smart Agri Waste Management Platform",
      desc: "A full-stack agricultural waste management platform where farmers can discover solutions, list categorized waste, negotiate with buyers, and complete direct purchases through a multilingual, mobile-friendly experience.",
      image: agriwaste,
      link: "https://smart-agriwaste.vercel.app",
      codeLink: "https://github.com/PranayDhanke/Smart-Agriwaste.git",
      tech: [
        "Next.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "shadcn/ui",
        "Next-Intl",
        "Clerk",
        "ImageKit",
        "Socket.IO",
        "OneSignal",
      ],
      highlights: [
        "PWA support",
        "Voice-enabled accessibility",
        "Multilingual experience",
      ],
      year: "2025",
    },
    {
      id: "inventory-reservation-system",
      title: "Inventory Reservation System",
      desc: "An inventory reservation API written in Go with PostgreSQL, SQL migrations, Swagger docs, Docker support, and a task-oriented Makefile for local development, testing, and database workflows.",
      codeLink: "https://github.com/PranayDhanke/Inventory-Reservation-System",
      tech: [
        "Go",
        "PostgreSQL",
        "Docker",
        "Swagger",
        "SQL Migrations",
        "Makefile",
      ],
      highlights: [
        "Create products and stock",
        "Reserve, confirm, and cancel flows",
        "Swagger UI and health endpoints",
      ],
      year: "2026",
    },
    {
      id: "sbp",
      title: "Farmer Product Selling Platform",
      desc: "An e-commerce experience where farmers list products and buyers can purchase directly or negotiate pricing, improving transparency and fair market access.",
      image: farmerPlatform,
      link: "https://agrocart-ten.vercel.app/",
      codeLink: "https://github.com/PranayDhanke/farmer-buyer-platfom.git",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
      year: "2025",
    },
    {
      id: "egram",
      title: "E-Gram Panchayat Portal",
      desc: "A digital governance portal for village-level schemes with online applications, verification workflows, and real-time status updates.",
      image: egram,
      link: "https://e-gram.vercel.app/",
      codeLink: "https://github.com/PranayDhanke/e-panchayat.git",
      tech: ["Next.js", "Firebase Auth", "Firestore", "Firebase Storage"],
      year: "2024",
    },
    {
      id: "blogger",
      title: "Blogger Platform",
      desc: "A full-stack blogging platform with authentication, CRUD operations, and a clean publishing experience for readers and writers.",
      image: blogger,
      link: "https://blogger-blue-ten.vercel.app/",
      codeLink: "https://github.com/PranayDhanke/blogger.git",
      tech: ["Next.js", "Firebase Firestore", "Firebase Auth"],
      year: "2023",
    },
    {
      id: "weather",
      title: "Weather Application",
      desc: "A responsive weather app that shows real-time conditions and forecasts using the OpenWeather API.",
      image: weather,
      link: "https://whetherapp-three.vercel.app/",
      codeLink: "https://github.com/PranayDhanke/simpleweather.git",
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      year: "2024",
    },
  ] satisfies Project[],
  portrait,
};
