import {
  BarChart3,
  Cloud,
  Database,
  GitBranch,
  LayoutDashboard,
  Lock,
  MessageSquare,
  Palette,
  Radio,
  Rocket,
  Server,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { APP_DESCRIPTION, APP_NAME, APP_TAGLINE } from "@/lib/brand";

export const LANDING_ANNOUNCEMENT = {
  badge: "Designed by",
  text: "Zohaib Nawaz Paighamly",
};

export const LANDING_NAV = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQ", href: "#faq" },
] as const;

export const LANDING_HERO = {
  eyebrow: APP_TAGLINE,
  title: `${APP_NAME}: ${APP_DESCRIPTION}`,
  subtitle:
    "Self-hostable WhatsApp® CRM — shared inbox, contacts, sales pipelines, broadcasts, and no-code automations. Fork it, brand it, host it.",
  primaryCta: "Get started for free",
  secondaryCta: "How it works",
  secondaryHref: "#features",
};

export type LandingFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

/** Core product modules — matches README “What you get” and sidebar nav. */
export const LANDING_FEATURES: LandingFeature[] = [
  {
    icon: MessageSquare,
    title: "Shared inbox",
    description:
      "One WhatsApp number for the whole team — assign conversations, reply, track status, and add notes.",
  },
  {
    icon: Users,
    title: "Contacts & tags",
    description:
      "CRM contacts with custom fields, notes, CSV import, and deduplication.",
  },
  {
    icon: GitBranch,
    title: "Sales pipelines",
    description: "Kanban deals linked to live conversations.",
  },
  {
    icon: Radio,
    title: "Broadcasts",
    description:
      "Meta-approved template campaigns with delivery and read tracking.",
  },
  {
    icon: Zap,
    title: "Automations",
    description:
      "No-code flows on inbound messages, keywords, schedules, and conditional branches.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-time dashboard",
    description:
      "Response times, daily volume, pipeline value, and cross-module activity.",
  },
  {
    icon: Workflow,
    title: "Flows",
    description:
      "Visual conversation builder — welcome menus, FAQs, and triage before a human steps in.",
  },
  {
    icon: Lock,
    title: "Account management",
    description: "Email, password, avatar, sessions, and global sign-out.",
  },
];

export const LANDING_FEATURE_HIGHLIGHT = LANDING_FEATURES[0];

export const LANDING_FEATURE_PAIR: [LandingFeature, LandingFeature] = [
  LANDING_FEATURES[4],
  LANDING_FEATURES[2],
];

export const LANDING_SECTION_FEATURES = {
  title: "Everything you need to run WhatsApp as a team",
  subtitle:
    "Out of the box modules for inbox, CRM, pipelines, broadcasts, automations, and reporting.",
  seeAllLabel: "See all features",
};

export const LANDING_INTEGRATIONS = {
  title: "Built on the stack you already trust",
  subtitle:
    "Official WhatsApp Business API, Supabase for data, and Next.js for the app — no proprietary lock-in.",
  highlights: [
    {
      icon: MessageSquare,
      title: "WhatsApp Business API",
      description:
        "Official Meta Cloud API — webhooks, templates, and multi-agent inbox on one number.",
    },
    {
      icon: Database,
      title: "Supabase",
      description: "Postgres, Auth, Storage, and RLS on every table.",
    },
    {
      icon: Cloud,
      title: "Meta templates",
      description:
        "Approved broadcast templates with delivery and read tracking.",
    },
  ] as const,
  stack: [
    { icon: MessageSquare, label: "WhatsApp" },
    { icon: Cloud, label: "Meta Cloud API" },
    { icon: Database, label: "Supabase" },
    { icon: Server, label: "Next.js 16" },
    { icon: BarChart3, label: "Dashboard" },
    { icon: GitBranch, label: "Pipelines" },
    { icon: Radio, label: "Broadcasts" },
    { icon: Zap, label: "Automations" },
    { icon: Workflow, label: "Flows" },
    { icon: Users, label: "Contacts" },
    { icon: Lock, label: "RLS & encryption" },
    { icon: Rocket, label: "Self-hosted" },
  ] as const,
};

/** README “Why fork this?” — product truths, not fabricated testimonials. */
export const LANDING_WHY_FORK = {
  title: "Why teams fork Paighamly",
  subtitle:
    "A template, not a SaaS — full ownership, customisation, and production-ready security primitives.",
  cards: [
    {
      icon: Lock,
      title: "Full ownership",
      quote:
        "Your code, your Supabase project, your domain, your data. No SaaS lock-in, no seat pricing.",
    },
    {
      icon: Palette,
      title: "Full customisation",
      quote:
        "Add the fields your team needs, remove the modules you don't. Next.js + Supabase + Tailwind on purpose.",
    },
    {
      icon: Rocket,
      title: "Zero ops to start",
      quote:
        "Deploy a fork in a few clicks on managed Node.js — or run anywhere Node.js does.",
    },
    {
      icon: Server,
      title: "Real security",
      quote:
        "Token encryption (AES-256-GCM), RLS on every table, HMAC-verified webhooks, CSP, and rate limiting.",
    },
    {
      icon: MessageSquare,
      title: "Shared inbox",
      quote:
        "Multiple agents on one WhatsApp number — assignment, status, and notes per conversation.",
    },
    {
      icon: Zap,
      title: "No-code automations",
      quote:
        "Triggers on inbound messages, new contacts, keywords, or schedule — with conditional branches and webhooks.",
    },
  ] as const,
};

export const LANDING_FAQ = {
  title: "Frequently asked questions",
  items: [
    {
      question: `What is ${APP_NAME}?`,
      answer: `${APP_NAME} is a self-hostable WhatsApp® CRM template: ${APP_DESCRIPTION} It is MIT-licensed — fork it, rebrand it, and deploy on your own infrastructure.`,
    },
    {
      question: "Do I need a SaaS subscription?",
      answer:
        "No. This repo is the product. You run your own instance with your Supabase project and Meta WhatsApp Business credentials. There is no seat pricing or vendor lock-in.",
    },
    {
      question: "What do I need to get started?",
      answer:
        "A Supabase project (Postgres + Auth), Meta WhatsApp Business API credentials, and environment variables from .env.local.example. Run npm install, cp .env.local.example .env.local, fill in values, then npm run dev.",
    },
    {
      question: "Where is the documentation?",
      answer:
        "Full self-host docs — Supabase migrations, WhatsApp setup, and production deploy — live at wacrm.tech/docs (source: ArnasDon/wacrm-site on GitHub).",
    },
    {
      question: "Can I deploy on Hostinger?",
      answer:
        "Yes — it is the recommended path with one-click Git deploy, managed Node.js, SSL, and env vars in hPanel. Paighamly also runs on Vercel, Railway, or your own VPS.",
    },
    {
      question: "Is this a collaborative open-source product?",
      answer:
        "It is a template meant to be forked and customised. Bug reports and security issues are welcome upstream; feature work usually belongs in your fork. See CONTRIBUTING.md.",
    },
  ] as const,
};

export const LANDING_CTA = {
  title: "Start your journey today",
  subtitle: "Create a free account and connect your WhatsApp Business number.",
  primaryCta: "Get started for free",
  secondaryCta: "Sign in",
};

export const LANDING_FOOTER = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQ", href: "#faq" },
  ],
  resources: [
    {
      label: "Documentation",
      href: "https://wacrm.tech/docs",
      external: true,
    },
    {
      label: "Getting started",
      href: "https://wacrm.tech/docs/getting-started",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/ArnasDon/wacrm",
      external: true,
    },
  ],
  company: [
    { label: "Sign up", href: "/signup" },
    { label: "Log in", href: "/login" },
  ],
  legal: [{ label: "MIT License", href: "https://github.com/ArnasDon/wacrm/blob/main/LICENSE", external: true }],
  copyright: `© ${new Date().getFullYear()} ${APP_NAME}. Fork it, brand it, host it.`,
};
