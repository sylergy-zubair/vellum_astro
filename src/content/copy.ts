/* All page copy. Single source of truth. A/B-test-ready.
   Strings only. Tone: professional, empathetic, jargon-light, confident, business-focused.
   Bans: no em dashes. */

export const brand = {
  name: "Vellum",
  parent: "VellumDesk Ltd",
  domain: "vellum.example",
  supportEmail: "support@vellum.example",
};

export const nav = {
  links: [
    { href: "#features", label: "Features" },
    { href: "#compare", label: "Compare" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#lead-demo", label: "Request a demo" },
};

export const hero = {
  eyebrow: "For UK estate & lettings agencies",
  headline: "The modern ledger for ",
  headlineItalic: "estate",
  headlineTail: " agencies.",
  subhead:
    "Vellum unifies contacts, properties, tenancies and client money in a single cloud-native system, purpose-built for the way UK agencies actually work. Compliance-safe by default, fast by design.",
  primaryCta: { href: "#lead-trial", label: "Start free 14-day trial" },
  secondaryCta: { href: "#lead-demo", label: "Request a demo" },
  primaryIntent: "trial" as const,
  secondaryIntent: "demo" as const,
  /* Dashboard mock data — a domain-specific agency analytics view. */
  visual: {
    brand: "Vellum",
    page: "Branch overview",
    range: "Last 12 months",
    nav: [
      { label: "Overview",  active: true  },
      { label: "Properties", active: false },
      { label: "Applicants", active: false },
      { label: "Tenancies",  active: false },
      { label: "Client money", active: false },
      { label: "Reports",   active: false },
    ],
    kpis: [
      { label: "Properties under management", value: "248",  delta: "+12 this month", tone: "ok" as const },
      { label: "Tenants onboarded",           value: "1,074", delta: "+86 YTD",        tone: "ok" as const },
      { label: "Revenue, MTD",                value: "£184k", delta: "+18% vs Oct",    tone: "ok" as const },
      { label: "Reconciliations",             value: "100%",  delta: "On track",       tone: "ok" as const },
    ],
    /* Bar chart: instructions won per month, 12 months. Heights 0-100. */
    chart: {
      title: "Instructions won",
      unit: "properties",
      bars: [
        { m: "J", h: 38 }, { m: "F", h: 52 }, { m: "M", h: 44 },
        { m: "A", h: 60 }, { m: "M", h: 71 }, { m: "J", h: 58 },
        { m: "J", h: 66 }, { m: "A", h: 78 }, { m: "S", h: 84 },
        { m: "O", h: 72 }, { m: "N", h: 90 }, { m: "D", h: 96 },
      ],
    },
    feed: [
      { tone: "ok"   as const, text: "Instruction won · 3-bed semi, Highgate N6",     meta: "Aisha H · 14:02" },
      { tone: "ok"   as const, text: "Deposit received · £1,950 · 14 Elm Park",          meta: "Rob O · 11:48" },
      { tone: "brass" as const, text: "Viewing booked · Studio, Crouch End",             meta: "Jules M · 10:15" },
      { tone: "ok"   as const, text: "Tenancy renewed · Flat 4, Muswell Hill",          meta: "System · 09:30" },
    ],
  },
};

export const problem = {
  eyebrow: "The reality on the ground",
  title: "Why agencies are stuck with ",
  titleItalic: "outdated systems",
  lead: "Legacy software slows you down at exactly the moment you need to move. Most agencies run on tools that were never built for the way modern branches, teams, and client money actually work.",
  items: [
    {
      icon: "scattered" as const,
      title: "Scattered data, no single source of truth",
      body: "Contacts live in one system, properties in another, tenancies in a spreadsheet. Every handover introduces risk and every audit starts with a search.",
    },
    {
      icon: "manual" as const,
      title: "Manual matching that loses leads",
      body: "Sorting applicants by hand is slow and inconsistent. Good enquiries go cold while your team rebuilds the same shortlist from scratch.",
    },
    {
      icon: "risky" as const,
      title: "Compliance risk around client money",
      body: "Client account reconciliation is a monthly fire drill. One missed entry can mean a regulatory conversation you did not want to have.",
    },
  ],
};

export const features = {
  eyebrow: "What Vellum does",
  title: "One operating system, ",
  titleItalic: "five jobs done properly",
  lead: "Vellum is not a CRM with a lettings label. It is the operating layer for an estate or lettings agency, built around the workflows you already run.",
  items: [
    {
      key: "unified",
      icon: "house" as const,
      eyebrow: "Unified contact & property management",
      title: "Every record, in ",
      titleItalic: "one place",
      body: "Vendors, applicants, landlords, tenants and properties live on a single graph. No more copy-paste between spreadsheets and siloed databases.",
      outcomes: [
        "One timeline per contact, per property, per tenancy",
        "Branch-level visibility without exporting to Excel",
        "Role-based access for owners, managers, negotiators, and admin",
      ],
    },
    {
      key: "matching",
      icon: "key" as const,
      eyebrow: "Intelligent applicant matching",
      title: "Shortlists that ",
      titleItalic: "build themselves",
      body: "Vellum scores every new property against your live applicant list and surfaces the best matches in seconds, with clear reasons attached.",
      outcomes: [
        "Match scores you can show the vendor on the call",
        "Automatic shortlist updates as applicants register",
        "Fewer cold leads, faster lets, more instructions won",
      ],
    },
    {
      key: "money",
      icon: "scale" as const,
      eyebrow: "Compliance-safe client money",
      title: "Reconciliation you can ",
      titleItalic: "actually trust",
      body: "Every rent receipt, deposit, and payment is ledgered in a tamper-evident client account. Month-end becomes a five-minute review, not a two-day audit.",
      outcomes: [
        "Per-property, per-tenancy client account ledgers",
        "Reconciliation status visible at a glance",
        "Clear audit trail for ARLA, Propertymark, and HMRC",
      ],
    },
    {
      key: "ai",
      icon: "spark" as const,
      eyebrow: "AI assistant for lettings workflows",
      title: "An assistant that ",
      titleItalic: "knows lettings",
      body: "Draft viewings, summarise applicant notes, and write marketing copy in the language of estate and lettings. Vellum's assistant respects your permissions, your data, and your brand voice.",
      outcomes: [
        "Drafts in the language of UK lettings, not generic SaaS",
        "Operates inside your role-based access controls",
        "No training on your data, no leakage to public models",
      ],
    },
    {
      key: "cloud",
      icon: "cloud" as const,
      eyebrow: "Cloud-native, zero maintenance",
      title: "No server room, ",
      titleItalic: "no upgrade weekends",
      body: "Vellum runs in your browser, on any device. Updates ship continuously. Backups, security patches, and scaling are handled before you ask.",
      outcomes: [
        "Automatic updates with no scheduled downtime",
        "Encrypted in transit and at rest, with UK data residency",
        "Works on a negotiator's tablet or a director's laptop",
      ],
    },
  ],
};

export const trust = {
  eyebrow: "Built for the agencies that matter",
  title: "Domain fit you can ",
  titleItalic: "feel on day one",
  lead: "Vellum is shaped by years of work with multi-branch UK agencies, not adapted from a generic CRM.",
  items: [
    { label: "Multi-branch",    body: "Cross-branch search, transfer, and reporting built in, not bolted on." },
    { label: "Multi-role teams", body: "Owner, branch manager, negotiator, admin, finance, with permissioned views." },
    { label: "Audit-grade trail", body: "Every change timestamped and attributable. Ready for inspection at any time." },
    { label: "UK data residency", body: "Data stays in UK regions. Aligned to UK GDPR from the ground up." },
  ],
};

export const comparison = {
  eyebrow: "How Vellum compares",
  title: "Three ways to run an agency",
  lead: "Legacy software is heavy, generic CRMs miss the domain, and Vellum is purpose-built for UK estate and lettings.",
  columns: [
    {
      key: "legacy",
      name: "Legacy agency software",
      tagline: "Desktop-era, expensive to maintain",
    },
    {
      key: "generic",
      name: "Generic SaaS CRM",
      tagline: "Modern look, missing the domain",
    },
    {
      key: "vellum",
      name: "Vellum",
      tagline: "Modern, purpose-built, affordable",
      highlight: true,
    },
  ],
  rows: [
    { label: "Modern UX",            legacy: "warn", generic: "yes",  vellum: "yes" },
    { label: "Domain-specific",      legacy: "yes",  generic: "no",   vellum: "yes" },
    { label: "Compliance-safe money",legacy: "warn", generic: "no",   vellum: "yes" },
    { label: "Multi-branch native",  legacy: "warn", generic: "warn", vellum: "yes" },
    { label: "Affordable to run",     legacy: "no",   generic: "yes",  vellum: "yes" },
    { label: "AI that knows lettings",legacy: "no",   generic: "warn", vellum: "yes" },
  ],
};

export const socialProof = {
  eyebrow: "What agencies are saying",
  title: "Built ",
  titleItalic: "with",
  titleTail: " agencies, not in isolation",
  lead: "Customer stories are coming soon. The placeholders below reflect the kind of feedback our design partners have shared during the build.",
  isPlaceholder: true,
  items: [
    {
      quote: "We replaced four spreadsheets, a desktop database, and a tired legacy CRM in the first fortnight. Month-end is no longer a fire drill.",
      name: "A. Hartwell",
      role: "Branch Manager, multi-branch agency",
      initials: "AH",
    },
    {
      quote: "The client account reconciliation alone is worth the move. We trust the numbers now, and so does our accountant.",
      name: "R. Okafor",
      role: "Finance Lead, independent lettings",
      initials: "RO",
    },
    {
      quote: "Matching used to take the best part of a morning. Vellum produces a shortlist we are happy to put in front of a vendor within minutes.",
      name: "J. Mears",
      role: "Senior Negotiator, sales & lettings",
      initials: "JM",
    },
  ],
};

export const cta = {
  eyebrow: "Ready when you are",
  title: "Try Vellum for fourteen days, ",
  titleItalic: "on us",
  lead: "No credit card. No procurement call. Set up in an afternoon, with a partner team on hand if you want it.",
  bullets: [
    "Spin up a workspace in minutes",
    "Bring contacts and properties from a spreadsheet",
    "Cancel any time, keep your data export",
  ],
};

export const faq = {
  eyebrow: "Common questions",
  title: "Answers before you ",
  titleItalic: "commit",
  items: [
    {
      q: "How does data migration work?",
      a: "We provide a guided import for spreadsheets and a managed migration for legacy systems. You keep full visibility of every field as it lands, and we run a parallel reconciliation period before you switch over.",
    },
    {
      q: "How is my data secured?",
      a: "Vellum is encrypted in transit and at rest, with UK data residency, role-based access controls, and a full audit trail. We publish a security overview on request and run third-party penetration tests annually.",
    },
    {
      q: "Is Vellum GDPR compliant?",
      a: "Yes. Vellum is designed for UK GDPR from the ground up, including data subject access workflows, retention controls, and a clear data processing agreement. We act as processor for the personal data you control.",
    },
    {
      q: "Can I run more than one agency or branch?",
      a: "Yes. Vellum supports multi-agency and multi-branch operations with permissioned access, cross-branch search, and consolidated or per-branch reporting.",
    },
    {
      q: "How transparent is pricing?",
      a: "Pricing is per active user, with volume tiers for larger agencies. We share full pricing on a short call once we know your branch and seat count, so you do not have to guess from a marketing page.",
    },
    {
      q: "What support is available?",
      a: "Every workspace includes in-app help, a named onboarding contact during your first month, and email support. Larger agencies can add a dedicated partner manager and a phone-hour service.",
    },
  ],
};

export const footer = {
  tagline:
    "Vellum is the modern operating system for UK estate and lettings agencies. Built by VellumDesk Ltd.",
  columns: [
    {
      title: "Product",
      links: [
        { href: "#features", label: "Features" },
        { href: "#compare",  label: "Compare" },
        { href: "#lead-trial", label: "Start a trial" },
        { href: "#lead-demo",  label: "Request a demo" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", label: "About" },
        { href: "#", label: "Careers" },
        { href: "#", label: "Press" },
        { href: "#", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "#", label: "Privacy" },
        { href: "#", label: "Terms" },
        { href: "#", label: "GDPR" },
        { href: "#", label: "DPA" },
      ],
    },
  ],
};
