# Vellum Landing Page PRD

## Overview

This product requirements document defines the scope for building a production-ready landing page for Vellum, a cloud-native agency management platform for UK estate and lettings agencies.[file:1]

The purpose of the page is to communicate Vellum's positioning, explain its core business value, establish trust, and convert qualified visitors into trial starts, demo requests, or waitlist signups.[file:1]

## Product Summary

Vellum is positioned as a modern alternative to legacy agency software such as MRI and Keystone, which the source brief describes as expensive, outdated, slow to evolve, and poorly suited to modern workflows.[file:1]

The landing page should present Vellum as a unified operating system for contacts, properties, tenancies, and client money, with AI-assisted workflows and compliance-safe financial operations built specifically for estate agencies.[file:1]

## Product Goal

The landing page must:

- Clearly explain what Vellum does and who it is for.[file:1]
- Make the pain of legacy estate-agency software feel immediate and credible.[file:1]
- Show how Vellum solves fragmented operations, manual matching, and compliance-heavy client money management.[file:1]
- Drive visitors toward one of three conversion actions: start a free trial, request a demo, or join a waitlist.[file:1]

## Target Users

### Primary Persona

Agency owners or managing directors at UK estate and lettings agencies, especially mid-market businesses with approximately 2 to 8 branches and 20 to 100 staff.[file:1]

### Secondary Persona

Branch managers or operations managers who care about staff efficiency, ease of adoption, and day-to-day operational control.[file:1]

### Tertiary Persona

Admin and finance team members who need accurate accounting, strong compliance controls, and efficient month-end workflows.[file:1]

## Problem Statement

Estate and lettings agencies often operate with scattered contact records, disconnected property and applicant workflows, manual matching processes, and accounting/compliance burdens that increase operational risk.[file:1]

Legacy agency systems are framed in the brief as hard to update, expensive to maintain, and poorly aligned with the needs of modern multi-branch agencies.[file:1]

The landing page must make these problems obvious, then position Vellum as the single modern platform that removes this complexity.[file:1]

## Success Metrics

### Commercial Metrics

- CTA click-through rate above 8%.[file:1]
- Bounce rate below 40%.[file:1]
- Average session duration above 2 minutes.[file:1]
- Growth in trial starts, demo requests, or waitlist signups, with exact baselines to be set post-launch.[file:1]

### Technical Metrics

- Lighthouse score of at least 90, with the brief explicitly targeting 90 on desktop and 85 on mobile as a minimum benchmark.[file:1]
- Page load time under 2 seconds at the 90th percentile.[file:1]
- Zero console errors or warnings.[file:1]

## Scope

### In Scope

- A responsive marketing landing page for Vellum.[file:1]
- Hero, problem, feature/value, trust, comparison, social-proof, CTA, FAQ, and footer sections.[file:1]
- Clear CTA routes for free trial and demo request, with waitlist support as optional fallback.[file:1]
- Validated lead capture form UX.[file:1]
- Analytics instrumentation using a privacy-first tool such as Plausible.[file:1]
- Accessibility-compliant, mobile-first frontend implementation.[file:1]
- Visual placeholders or layout support for future screenshots, testimonials, and industry proof assets.[file:1]

### Out of Scope

- The actual Vellum product or authenticated app experience.[file:1]
- A pricing engine or finalized pricing page, since pricing remains TBD in the brief.[file:1]
- A full CMS or blog platform in version 1, because blog/case-study expansion is listed as a later phase.[file:1]
- Real testimonial/case-study management beyond placeholders if final assets are not yet available.[file:1]

## Core Messaging

The page must reinforce the following positioning:

- Vellum is the modern alternative to legacy agency software.[file:1]
- Vellum is purpose-built for UK estate and lettings agencies, not a generic CRM adapted after the fact.[file:1]
- Vellum unifies contacts, properties, tenancies, and money into a single operating system.[file:1]
- Vellum reduces admin time, improves applicant-property matching, and lowers compliance risk.[file:1]
- Vellum includes an AI assistant that understands lettings and sales workflows while respecting permissions.[file:1]

### Messaging Tone

The tone must be professional, empathetic, jargon-light, confident, and business-focused rather than flashy or overly salesy.[file:1]

The brief explicitly asks for a modern, clean, minimal presentation that feels closer to brands like Stripe, Linear, or Notion than to generic SaaS templates.[file:1]

## Functional Requirements

### FR1: Hero Section

The page must include an above-the-fold hero with:

- A headline positioning Vellum as the modern alternative to legacy agency software.[file:1]
- A supporting subheadline that communicates cloud-native delivery, compliance-safe operations, and estate-agency specialization.[file:1]
- A primary CTA: `Start Free 14-Day Trial`.[file:1]
- A secondary CTA: `Request a Demo`.[file:1]
- A visual region for dashboard imagery, animation, or a conceptual representation of unified agency workflows.[file:1]

### FR2: Problem Section

The page must communicate the pain of outdated systems using concise copy and supporting visuals/cards focused on:

- Scattered data and no single source of truth.[file:1]
- Manual matching that slows deals and loses leads.[file:1]
- Compliance risk around client money and operational processes.[file:1]

### FR3: Solution and Features Section

The page must present Vellum's solution through structured feature/value blocks covering:

1. Unified contact and property management.[file:1]
2. Intelligent applicant matching.[file:1]
3. Compliance-safe client money handling.[file:1]
4. AI assistant built for lettings workflows.[file:1]
5. Cloud-native, zero-maintenance operation.[file:1]

Each feature block should connect capability to business outcome, such as time saved, reduced admin effort, fewer errors, better service, or stronger compliance confidence.[file:1]

### FR4: Trust and Credibility Section

The page must reinforce that Vellum is built for agencies that operate with multi-branch complexity, multi-role teams, strict financial requirements, and real sales/lettings workflows.[file:1]

This section may use proof cards, industry-body placeholders, compliance messaging, or domain-specific statements until real customer proof becomes available.[file:1]

### FR5: Comparison Section

The page should compare Vellum against two competing categories:

- Legacy agency software, described as expensive, slow, desktop-era, poor UX, and difficult to customize.[file:1]
- Generic SaaS CRM, described as modern but lacking domain-specific financial and compliance depth for lettings agencies.[file:1]

Vellum should be positioned as modern, purpose-built, compliance-safe, and affordable.[file:1]

### FR6: Social Proof Section

The design should support testimonial cards, agency case studies, and proof metrics, even if final content is not yet available.[file:1]

Placeholder content may be used structurally, but the implementation must make later replacement straightforward.[file:1]

### FR7: CTA and Lead Capture Section

A lower-page conversion section must include:

- A strong CTA for trial or demo.[file:1]
- Reassurance copy such as no credit card and quick setup.[file:1]
- A form or CTA flow that captures prospect details and routes them to the correct next step.[file:1]

### FR8: FAQ Section

The page must handle key objections around:

- Data migration.[file:1]
- Security and encryption.[file:1]
- GDPR and access control.[file:1]
- Multi-agency isolation and multi-branch support.[file:1]
- Pricing transparency.[file:1]
- Availability of support resources.[file:1]

### FR9: Footer

The footer must include:

- Privacy link.[file:1]
- Terms link.[file:1]
- GDPR reference.[file:1]
- Contact information such as support email or phone.[file:1]
- Optional newsletter or social links if relevant.[file:1]

### FR10: Form Integration Readiness

Lead capture must be implementation-ready for integration with:

- Email providers such as Resend or SendGrid.[file:1]
- Slack notifications for inbound leads.[file:1]
- A future sign-up backend after product launch.[file:1]

## Information Architecture

Recommended section order:

1. Hero.[file:1]
2. Problem/credibility.[file:1]
3. Solution/features.[file:1]
4. Trust/credibility.[file:1]
5. Comparison.[file:1]
6. Social proof.[file:1]
7. CTA/sign-up.[file:1]
8. FAQ.[file:1]
9. Footer.[file:1]

This structure mirrors the source brief and aligns with a standard B2B conversion narrative from pain to solution to proof to action.[file:1]

## Design Requirements

The interface must feel modern, minimal, clear, and trustworthy, using generous whitespace, strong hierarchy, modular sections, and a restrained visual language.[file:1]

The brief recommends clean typography, minimal iconography, mobile-first responsiveness, and real product screenshots when available rather than generic stock imagery.[file:1]

### Visual Direction

- Professional but not stiff.[file:1]
- Clean and cloud-native rather than enterprise-heavy.[file:1]
- Competent and trustworthy, especially around compliance messaging.[file:1]
- Human enough to feel approachable, but not playful or gimmicky.[file:1]

### Layout Expectations

- Responsive desktop, tablet, and mobile layouts for 1920px, 1440px, 1024px, 768px, 425px, and 375px breakpoints.[file:1]
- Clear hierarchy and section rhythm.[file:1]
- Form and CTA visibility throughout the page journey.[file:1]

## Technical Requirements

- Compatible with Cloudflare Pages hosting.[file:1]
- Cloudflare Workers can be used for dynamic/API behavior if needed.[file:1]
- WCAG 2.1 AA accessibility baseline.[file:1]
- Lighthouse target of 90+, with strong mobile performance.[file:1]
- Privacy-first analytics such as Plausible.[file:1]
- Validated forms and clean error handling.[file:1]
- Zero console errors or warnings.[file:1]

## User Flows

### Trial Flow

1. Visitor lands on page and understands Vellum's positioning from hero content.[file:1]
2. Visitor reads pain points, product value, and trust sections.[file:1]
3. Visitor clicks `Start Free 14-Day Trial`.[file:1]
4. Visitor completes short form or is passed to a product signup flow.[file:1]

### Demo Flow

1. Visitor lands on page but prefers guided evaluation.[file:1]
2. Visitor uses feature, comparison, and FAQ content to evaluate fit.[file:1]
3. Visitor clicks `Request a Demo`.[file:1]
4. Visitor submits business details and receives confirmation.[file:1]

### Waitlist Flow

1. Visitor is interested but product access is not fully open.[file:1]
2. Visitor chooses `Join Our Waitlist`.[file:1]
3. Visitor submits details for follow-up and early access communication.[file:1]

## Non-Functional Requirements

- Fast first paint and strong perceived performance.[file:1]
- Readable, frictionless mobile experience.[file:1]
- Easy future editing of copy, pricing, testimonials, and visuals.[file:1]
- Modular component structure that supports future A/B testing or section reordering.[file:1]
- Production readiness with no broken states, inaccessible controls, or dead CTAs.[file:1]

## Dependencies

The following inputs are needed or expected for the final production version:

- Real dashboard screenshots or product visuals.[file:1]
- Final brand system or visual identity, if one exists.[file:1]
- Final pricing details.[file:1]
- Real testimonial or customer proof assets.[file:1]
- Final endpoint details for trial/demo/waitlist submission.[file:1]
- Preferred frontend framework or delivery stack if constrained by the team.[file:1]

## Risks and Constraints

- The landing page may feel less credible if social proof and screenshots are still placeholders.[file:1]
- Unclear pricing may reduce conversion for high-intent visitors.[file:1]
- Overemphasizing AI without balancing it with trust, accounting accuracy, and compliance could weaken messaging for this ICP.[file:1]
- Generic SaaS design patterns may reduce differentiation if the implementation does not respect the domain-specific seriousness of agency operations.[file:1]

## Deliverables

The AI agent should produce:

- A production-ready responsive landing page implementation.[file:1]
- Reusable sections/components aligned to the approved information architecture.[file:1]
- Accessible interaction and form states.[file:1]
- Integration-ready CTA/form handling hooks.[file:1]
- Analytics-ready instrumentation plan or implementation.[file:1]

## Acceptance Criteria

The build is considered successful when:

- The page clearly communicates Vellum's positioning within the first screen.[file:1]
- Required sections are present and ordered logically.[file:1]
- The design is modern, clear, and trustworthy rather than generic or overly flashy.[file:1]
- CTA paths for trial and demo are obvious and functional.[file:1]
- The implementation is responsive, accessible, and performance-safe across specified breakpoints.[file:1]
- The structure is ready for real screenshots, customer proof, and final pricing content.[file:1]

---

# Builder Prompt

Use the prompt below with an AI coding agent.

## Prompt

Build a production-quality responsive marketing landing page for **Vellum**, a cloud-native agency management platform for UK estate and lettings agencies.[file:1]

### Objective

Create a high-converting landing page that positions Vellum as the modern alternative to legacy agency software and drives visitors toward one of three actions: start a free 14-day trial, request a demo, or join a waitlist.[file:1]

### Audience

Target UK estate-agency decision-makers, especially:

- Agency owners and managing directors.[file:1]
- Branch or operations managers.[file:1]
- Admin and finance staff involved in compliance and accounting workflows.[file:1]

### Core Product Story

The page must communicate that agencies are stuck with fragmented systems, manual applicant matching, difficult tenancy accounting, and growing compliance pressure, while Vellum gives them a unified, cloud-native, purpose-built platform for contacts, properties, tenancies, client money, and AI-assisted workflows.[file:1]

### Required Messaging

Emphasize these themes:

- Modern alternative to legacy software.[file:1]
- Unified contacts, properties, tenancies, and money.[file:1]
- Intelligent applicant-property matching.[file:1]
- Compliance-safe client money handling.[file:1]
- AI assistant that understands lettings workflows.[file:1]
- No server maintenance, automatic updates, and access from anywhere.[file:1]

### Required Sections

Build these sections in this order unless a better conversion flow strongly justifies a small change:

1. Hero with headline, subheadline, product visual, and primary/secondary CTAs.[file:1]
2. Problem section explaining why agencies are stuck with outdated systems.[file:1]
3. Feature/value section covering unified management, matching, compliance, AI assistant, and cloud-native operation.[file:1]
4. Trust/credibility section showing domain fit for agencies.[file:1]
5. Comparison section contrasting legacy software, generic CRM, and Vellum.[file:1]
6. Social proof/testimonial section with placeholders if final assets are unavailable.[file:1]
7. Bottom CTA section with trial/demo/waitlist conversion path.[file:1]
8. FAQ section handling migration, security, GDPR, isolation, pricing, and support.[file:1]
9. Footer with privacy, terms, GDPR, and contact details.[file:1]

### CTAs

Include at least these CTA labels:

- `Start Free 14-Day Trial`.[file:1]
- `Request a Demo`.[file:1]

You may also include `Join Our Waitlist` where needed.[file:1]

### Tone and Design Direction

The design should feel:

- Modern, minimal, and professional.[file:1]
- Trustworthy and competent around compliance-heavy workflows.[file:1]
- Clean and polished, closer to Stripe, Linear, or Notion than to a generic SaaS template.[file:1]
- Empathetic to the pain of legacy systems, but not dramatic or hype-driven.[file:1]

Avoid cheesy stock-SaaS patterns, noisy visuals, or exaggerated AI branding. Favor clarity, strong hierarchy, whitespace, and premium restraint.[file:1]

### Functional Requirements

- Responsive layout across desktop, tablet, and mobile.[file:1]
- Validated form UX for trial/demo/waitlist capture.[file:1]
- Structurally ready for future backend integration.[file:1]
- Reusable components and editable copy blocks.[file:1]
- Clear hover, focus, active, loading, success, and error states.[file:1]

### Technical Requirements

- Build for Cloudflare Pages compatibility.[file:1]
- Allow easy future wiring to Cloudflare Workers or equivalent backend endpoints.[file:1]
- Accessibility baseline: WCAG 2.1 AA.[file:1]
- Privacy-first analytics readiness, such as Plausible.[file:1]
- Performance target: Lighthouse 90+ and page load under 2 seconds at the 90th percentile.[file:1]
- Zero console errors or warnings.[file:1]

### UX Priorities

- Make the value proposition obvious above the fold.[file:1]
- Use business-outcome language, not just feature language.[file:1]
- Build trust before asking for commitment.[file:1]
- Keep CTAs visible throughout the page.[file:1]
- Make the mobile experience feel first-class, not compressed desktop.[file:1]

### Constraints

- This is a marketing landing page, not the actual Vellum product app.[file:1]
- Pricing is not finalized, so do not invent detailed pricing plans.[file:1]
- Testimonials, final logos, and screenshots may be placeholders, but the design must be ready to accept real assets later.[file:1]
- Keep the architecture modular so headlines, CTA copy, comparison framing, and proof sections can be A/B tested later.[file:1]

### Deliverable

Return a production-ready landing page implementation with semantic structure, polished responsive UI, accessible states, and clean code suitable for handoff or deployment.[file:1]
