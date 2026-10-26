/**
 * Single source of truth for all portfolio content.
 * Components only render what is defined here.
 */

export type NavItem = { label: string; href: string };

export type ProjectLink = { label: string; url: string };

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  /**
   * Optional links. No repository URLs have been provided yet, so none are set.
   * To add one later: links: [{ label: 'Repository', url: 'https://github.com/...' }]
   */
  links?: ProjectLink[];
};

export type SkillGroup = { group: string; items: string[] };

export type LogEntry = {
  date: string; // ISO date, YYYY-MM-DD
  kind: "Project" | "Skill";
  title: string;
  text: string;
};

export type AboutBlock = { title: string; lines: string[] };

export type Contact = {
  Location: string;
  Studying: string;
  Languages: string;
  Email: string;
  GitHub: string;
};

export type Portfolio = {
  name: string;
  role: string;
  headline: string;
  locationLine: string;
  updated: string;
  contact: Contact;
  about: AboutBlock[];
  skills: SkillGroup[];
  projects: Project[];
  log: LogEntry[];
};

export const portfolio: Portfolio = {
  name: "Ahmed Ben Aissa",
  role: "Software Engineering Student · Backend Development - DevOps",
  headline:
    "Backend engineering student building with Express, NestJS and TypeScript. I learn by building small, complete pieces and then wiring them into larger systems.",
  locationLine: "Beni Khiar, Nabeul, Tunisia · ISSAT Sousse · Class of 2028",
  updated: "2026-10-25",
  contact: {
    Location: "Beni Khiar, Nabeul, Tunisia",
    Studying: "ISSAT Sousse, class of 2028",
    Languages: "Arabic, French, English",
    Email: "ahmedbenaissa147@gmail.com",
    GitHub: "AhmedBenaissaM10",
  },
  about: [
    {
      title: "Experience",
      lines: [
        "Summer internship at L-Mobil, one month. I worked on warehouse optimization using Ollama, applied to transport scheduling.",
      ],
    },
    {
      title: "Education",
      lines: ["Software engineering, ISSAT Sousse. Entering fourth year, graduating in 2028."],
    },
    {
      title: "How I work",
      lines: [
        "Self-taught backend developer. I use API testing tools and environment-based config from the start of each project.",
      ],
    },
  ],
  skills: [
    {
      group: "Backend",
      items: [
        "Express",
        "TypeScript",
        "NestJS",
        "Prisma",
        "Redis",
        "Passport and auth flows",
        "Nodemailer",
        "API Testing",
        "Openapi",
      ],
    },
    {
      group: "Languages",
      items: ["Java (OOP, sockets, Swing)", "C++ (OOP)", "C", "Python"],
    },
    { group: "Data", items: ["SQL", "MySQL", "Oracle", "Postgres", "MongoDB"] },
    {
      group: "Cloud & DevOps",
      items: ["Git", "Docker", "GitHub Actions", "Cloud fundamentals", "AWS fundamentals", "System design basics"],
    },
    {
      group: "Tools and frontend",
      items: ["React", "Postman", "Apidog"],
    },
  ],
  projects: [
    {
      title: "NestJS Auth Project",
      summary:
        "A pro-level authentication service built step by step in NestJS. JWT access tokens with rotating refresh tokens, role-based access, request throttling, end-to-end tests with Vitest and Swagger docs.",
      stack: ["NestJS", "TypeScript", "JWT", "Vitest", "Swagger"],
    },
    {
      title: "Auth Template",
      summary:
        "A production-ready auth template built through git tags, from simple to complex features. Email flows, social login, sessions and caching are added one tag at a time.",
      stack: ["Express", "TypeScript", "Prisma", "Redis", "Nodemailer", "Passport"],
    },
    {
      title: "Blog API",
      summary: "Posts and comments API for version 1, built on an existing user model with Google sign-in and roles.",
      stack: ["Express", "TypeScript", "Prisma"],
    },
    {
      title: "Task Manager",
      summary: "A full-stack task manager application.",
      stack: ["React", "Express", "TypeScript", "Prisma", "Redis", "Docker", "CI/CD"],
    },
    {
      title: "Google Drive Clone",
      summary: "A full-stack Google Drive Clone.",
      stack: ["React", "Nestjs", "TypeScript", "Prisma", "S3", "CI/CD"],
    },
  ],
  log: [
    {
      date: "2026-10-25",
      kind: "Project",
      title: "Task Manager",
      text: "Added a full-stack task manager project.",
    },
    {
      date: "2026-10-13",
      kind: "Skill",
      title: "DevOps section",
      text: "Added Git, Docker, GitHub Actions, cloud and AWS fundamentals, and system design basics.",
    },
    {
      date: "2026-10-13",
      kind: "Project",
      title: "NestJS Auth Project, version 1",
      text: "Added JWT with rotating refresh tokens, roles, throttling, Vitest end-to-end tests and Swagger docs.",
    },
    {
      date: "2026-10-07",
      kind: "Skill",
      title: "NestJS fundamentals",
      text: "Built a first todo project with in-memory storage and learned the nest generate commands.",
    },
    {
      date: "2026-08-25",
      kind: "Project",
      title: "Auth Template",
      text: "Started the tagged auth template covering Prisma, Redis, Nodemailer and Passport.",
    },
  ],
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Activity", href: "#activity" },
  { label: "Contact", href: "#contact" },
];

export const githubUrl = `https://github.com/${portfolio.contact.GitHub}`;
export const emailUrl = `mailto:${portfolio.contact.Email}`;
