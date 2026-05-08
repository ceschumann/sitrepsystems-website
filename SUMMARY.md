# SitRep Systems Website Redesign Summary

## Repository Inventory

Repository: `ceschumann/sitrepsystems-website`

Current branch: `main`

Tracked files reviewed:

- `index.html`
- `styles.css`
- `CNAME`
- `sitrep-logo.svg`
- `SitRepSystems_Banner.png`
- `Veteran-Owned Certified.png`
- `Service-Disabled Veteran-Owned-Certified.png`

The site is currently a static GitHub Pages site with no build step, no JavaScript, no framework, and no package manager. That should stay intact.

## Current Site Assessment

Current information architecture:

- Header with logo
- Navigation links: About, Services, Contact
- Centered banner image
- Hero
- About
- Services
- Contact
- Footer

Current copy:

- Title: `SitRep Systems | Application Development & Business Intelligence`
- Hero: `Actionable Solutions. Modern Apps.`
- Supporting line: `Custom Power Apps & Business Intelligence built for your unique business challenges.`
- About: Low-code application design and development on Microsoft Power Platform
- Services:
  - Power Apps Development for Custom Business Solutions
  - Data Integration & Dashboard Reporting
  - Process Automation & Digital Transformation
  - Intuitive User Experiences for Real Results
- Contact email: `info@sitrepsystems.com`
- Footer year: 2025

Current assets:

- `sitrep-logo.svg`: clean vector mark with blue and gold chart icon plus SitRep Systems wordmark.
- `SitRepSystems_Banner.png`: larger rounded banner version of the brand mark.
- `Veteran-Owned Certified.png`: SBA Veteran-Owned Certified badge.
- `Service-Disabled Veteran-Owned-Certified.png`: SBA Service-Disabled Veteran-Owned Certified badge.

Current hosting:

- `CNAME` is present and contains `www.sitrepsystems.com`. Preserve this exactly.

What works:

- Simple static deployment model is GitHub Pages compatible.
- Contact email is present.
- Brand assets are present.
- Veteran-Owned and SDVOSB certification assets are present and valuable for federal positioning.
- Markup is simple and easy to refactor.

What does not work for the target audience:

- Positioning is generic and small-business oriented, not prime-contractor capture-team oriented.
- No mention of federal delivery, VA Office of Strategic Planning, GCC, GCC High, ATO-aware delivery, Section 508, SAFe/Agile, Dataverse, or AI-augmented delivery.
- No capability statement content or PDF link.
- No case studies or past performance summaries.
- No business data strip for NAICS, business size, certification language, or environments.
- No Formspree or structured contact form.
- No JavaScript interactions.
- No sitemap, robots file, Open Graph metadata, structured data, or README.
- CSS uses large rounded cards and a basic blue/gold palette that reads more generic than modern federal technology.
- Google Fonts are loaded externally, which is acceptable but may not be necessary for Lighthouse goals.
- Banner image is shown with inline styles and `width: 25%`, which risks weak first-viewport brand presentation and mobile inconsistency.
- No visible skip link or strong keyboard focus styling.
- No reduced-motion handling because there is no motion yet.
- No responsive testing evidence.

## Current Site In Your Head

The live experience likely feels like a small brochure site:

- A white header with the SitRep logo.
- A small centered brand banner under the header.
- A centered hero with a short generic headline.
- Three white rounded content cards for About, Services, and Contact.
- The tone is competent but broad. It could fit many Power Apps freelancers or small IT consultancies.
- The site does not yet signal federal delivery fluency, prime-contractor readiness, or modern capture support.

## Content To Keep

Preserve:

- `www.sitrepsystems.com` in `CNAME`
- `info@sitrepsystems.com`
- UEI: `WBTEMR2DWUE4`
- CAGE: `141M2`
- Confirmed NAICS: `541511`, `541519`, `541611`
- SitRep Systems name and brand mark
- SBA Veteran-Owned Certified badge
- SBA Service-Disabled Veteran-Owned Certified badge
- Core Power Platform and business intelligence positioning
- Static GitHub Pages deployment model

Keep after refinement:

- Power Apps development
- Data integration and dashboard reporting
- Process automation
- User experience language, rewritten with human-centered design specificity

## Content To Replace

Replace or substantially rewrite:

- `Actionable Solutions. Modern Apps.`
- `Custom Power Apps & Business Intelligence built for your unique business challenges.`
- Generic `Who We Are` and `What We Do` sections
- Generic service list
- Basic card-heavy page layout
- Inline banner placement
- Blue/gold visual system as the dominant palette

Avoid in the redesign:

- Jargon-soup claims
- Broad "digital transformation" language without proof
- Unsupported public claims about agencies, vehicles, or certifications
- Red, white, and blue federal cliches
- Stock imagery as the main design language
- Em dashes in final public copy

## Proposed Sitemap

Recommended first build:

- `index.html`
  - Hero
  - Capabilities
  - Federal-Ready
  - Approach
  - Selected Work
  - Capability Statement preview
  - Contact
- `capability-statement.html`
  - Scannable capability statement
  - Download link for PDF when available
  - Core competencies
  - Differentiators
  - Federal data strip
  - Selected work summaries
  - Contact
- `assets/`
  - `css/`
  - `js/`
  - `img/`
  - `docs/`
- `sitemap.xml`
- `robots.txt`
- `README.md`
- `CNAME`

Optional later pages:

- `selected-work.html`
- `contact.html`

Recommendation: start with a polished one-page home page plus `capability-statement.html`. This keeps the site focused, satisfies the hero plus inner page checkpoint, and avoids adding thin pages before all business details are confirmed.

## Proposed Information Architecture

Primary navigation:

- Capabilities
- Federal-Ready
- Approach
- Selected Work
- Capability Statement
- Contact

Primary CTA:

- Start a Conversation

Secondary CTA:

- Request a Capability Statement

Recommended hero value proposition:

> Power Platform architecture for federal teams that need governed delivery, usable workflows, and capture-ready execution in GCC and GCC High.

Alternate hero value proposition:

> SitRep Systems helps federal primes design, build, and transition governed Power Platform solutions for mission teams operating inside real compliance constraints.

Recommended supporting copy:

> Veteran-owned and service-disabled veteran-owned. Built for capture teams, program managers, and federal users who need Microsoft 365 modernization that can survive governance, accessibility, and transition.

## Proposed Visual Direction

Direction:

- Dark-mode-first, with a confident federal technology feel.
- Deep ink or slate background.
- One restrained signal accent. Recommended: cyan for technical clarity or electric green for operational signal.
- Preserve the existing SitRep mark, but reduce the dominance of gold in the broader interface.
- Use certification badges as trust signals in a clean Federal-Ready data strip, not as oversized hero visuals.
- Use diagrams, grid systems, and product architecture language instead of stock imagery.

Typography:

- Use a modern system stack or Inter.
- Consider a mono accent only for labels, data strips, environments, and NAICS-style details.
- Keep headings direct and compact.

Motion:

- Lightweight animated hero grid or node field.
- Scroll reveal for sections using `IntersectionObserver`.
- Respect `prefers-reduced-motion`.
- No carousel, autoplay, or scroll-fighting parallax.

Layout:

- First viewport should immediately communicate SitRep Systems, federal Power Platform architecture, and SDVOSB credibility.
- Use dense but readable blocks for prime contractor scanning.
- Avoid nested cards.
- Use cards only for capabilities, case studies, and estimator output.

## Recommended Interactive Elements

Use these 4:

1. Animated hero grid
   - Static HTML, CSS, and vanilla JS only.
   - Should be subtle and performant.

2. Expandable capability cards
   - Three pillars:
     - Power Platform Solution Architecture
     - Federal Human-Centered Delivery
     - Governed Modernization and AI-Augmented Workflows
   - Hover, focus, and tap should reveal tools, outcomes, and environments.

3. Solution Estimator
   - Inputs:
     - Organization size
     - Workflow complexity
     - Environment: Commercial, GCC, GCC High
   - Outputs:
     - Timeline range
     - Team shape
     - Likely phases
   - Framed as illustrative planning guidance, not a quote.

4. Animated Power Platform architecture diagram
   - Dataverse, Power Apps, Power Automate, Power BI, Teams.
   - Hover and focus states explain each layer.
   - SVG is the best fit for performance and accessibility.

Optional:

- Theme toggle with localStorage, only if it feels useful rather than decorative.

## Proposed Core Sections

Hero:

- Direct federal Power Platform positioning.
- One primary CTA.
- Certification and environment trust signals below the hero copy.

Capabilities:

- Power Platform solution architecture
- Federal human-centered design
- Governed modernization and AI-augmented delivery

Federal-Ready:

- GCC and GCC High
- Section 508 awareness
- ATO-aware development
- SAFe/Agile inside compliance-heavy environments
- Veteran-Owned Certified
- Service-Disabled Veteran-Owned Certified
- UEI: `WBTEMR2DWUE4`
- CAGE: `141M2`
- NAICS: `541511`, `541519`, `541611`

Approach:

- Discover
- Design
- Build
- Govern
- Transition

Selected Work:

- 2 to 3 anonymized cards.
- Each card should include problem, approach, outcome, and stack.

Capability Statement:

- On-page content plus PDF link.
- If no PDF exists, use a placeholder link state until the document is provided or generated.

Contact:

- Direct email: `info@sitrepsystems.com`
- LinkedIn once confirmed
- Formspree endpoint if available, otherwise mailto fallback

## Proposed Case Study Themes

These should remain anonymized unless public references are approved.

1. Legacy Intake Modernization
   - Problem: spreadsheet-driven request intake and fragmented status tracking.
   - Approach: discovery, journey mapping, Dataverse model, Power Apps interface, Power Automate notifications.
   - Outcome: clearer ownership, reduced manual reconciliation, better reporting.
   - Stack: Power Apps, Dataverse, Power Automate, Power BI, Teams.

2. Executive Reporting Workflow
   - Problem: recurring reporting assembled manually across SharePoint files and ad hoc trackers.
   - Approach: governed data model, automated refresh workflow, role-based reporting views.
   - Outcome: faster status visibility and cleaner briefing preparation.
   - Stack: Dataverse, Power BI, SharePoint, Power Automate.

3. Compliance-Aware App Delivery
   - Problem: mission team needed a usable workflow while staying aligned with agency constraints.
   - Approach: iterative delivery, stakeholder demos, 508-aware UI, ATO-aware documentation support.
   - Outcome: production-ready workflow with smoother transition to government maintainers.
   - Stack: GCC or GCC High Power Platform, Teams, Microsoft 365.

## Technical Plan After Sign-Off

1. Create a feature branch from `main`.
2. Preserve `CNAME`.
3. Preserve `info@sitrepsystems.com` unless changed by the owner.
4. Preserve certification assets, ideally moved into a cleaner `assets/img/` structure.
5. Build static pages with plain HTML, CSS, and vanilla JS.
6. Add responsive, accessible interactions.
7. Add SEO metadata, Open Graph tags, and Organization plus ProfessionalService structured data.
8. Add `sitemap.xml` and `robots.txt`.
9. Add `README.md` with local preview and deploy notes.
10. Run final checks:
    - Lighthouse mobile target: 95+
    - Accessibility audit
    - Keyboard navigation pass
    - Reduced motion pass
    - Responsive checks at 375, 768, 1024, and 1440
    - Broken-link check
    - Chrome, Firefox, Edge, and Safari where available

## Questions For Sign-Off

1. Do you approve the recommended first build: one-page home plus `capability-statement.html`?
2. Which primary CTA should lead: `Start a Conversation` or `Request a Capability Statement`?
3. Should the public site name VA Office of Strategic Planning directly, or keep all past performance anonymized?
4. Is `CDF-style task order` approved public wording, or should it be generalized?
5. What LinkedIn URL should be used?
6. Do you have an existing capability statement PDF, or should I create a static on-page version first and leave the PDF link as pending?
7. What NAICS codes are approved for display?
8. What business data is approved for display: UEI, CAGE, business size, certifications, socioeconomic status, and contract vehicles?
9. Is the SDVOSB certification asset approved to display prominently?
10. Do you prefer cyan, electric green, or amber as the main accent?
11. Should the contact form use a Formspree endpoint, or should the first version use a mailto fallback only?
12. Are there any agency names, client details, certifications, or performance claims that must be avoided?
