# Content Brief — Jamie Aldridge Portfolio

All content below is DRAFT/placeholder copy, written to match the structure Jamie specified. Use it verbatim as a starting point (do not invent wildly different content), but clearly this is a first draft Jamie will edit with real, verified numbers later. Company names (MyFitnessPal, LeagueApps) and project names (Full Court, AGBL) are real and should be kept as-is; the specific metrics/timelines around them are illustrative placeholders — feel free to keep the numbers below, just don't present them as if independently verified beyond what's given here.

## Site identity

- Name: Jamie Aldridge
- Title: Growth Product Leader
- Specialty: subscription monetization — paywalls, pricing, subscription lifecycle, and payments across Stripe, Apple StoreKit, and Google Play
- Contact email (placeholder): hello@jamiealdridge.com
- LinkedIn (placeholder): https://linkedin.com/in/jamiealdridge
- Calendar booking (placeholder): https://cal.com/jamiealdridge
- Resume PDF (placeholder link/button — file may not exist yet, link can point to "#" or a `/resume.pdf` path)

## Home page

**Headline:** "I turn free users into paying subscribers."

**Supporting line:** "Growth product leader specializing in paywalls, pricing, and subscription lifecycle — with hands-on payments expertise across Stripe, Apple StoreKit, and Google Play."

**Proof bar (4 metrics, illustrative placeholders):**
- +24% average trial-to-paid conversion lift across shipped pricing experiments
- $18M+ incremental ARR influenced
- 120+ growth experiments shipped
- Teams of 4–15 led across product, eng, and data

**Featured case studies (3 cards — title, one-sentence outcome, headline metric):** see Case Studies section below; use the same three.

**CTAs:** "View Case Studies" and "Download Resume"

## Case Studies — index page

Three featured case study cards, each with title, one-sentence outcome, and headline metric (pulled from the case studies below).

## Case Studies — template (apply to all three)

Each case study page includes, in this order:
1. An "at a glance" summary box near the top (role, team size, timeline, outcome)
2. Context and problem
3. Hypothesis
4. What was shipped
5. Results with quantified impact
6. Reflection — what Jamie would do differently

### Case Study 1: Rebuilding the Paywall

**Title:** Rebuilding the Paywall: A Pricing Experiment That Lifted Conversion 24%
**One-sentence outcome:** A redesigned paywall and pricing test lifted trial-to-paid conversion by 24% without hurting long-term retention.
**Headline metric:** +24% trial-to-paid conversion

**At a glance:** Role — Senior Growth PM · Team — 4 engineers, 1 designer, 1 data scientist · Timeline — 10 weeks · Outcome — +24% trial-to-paid conversion

**Context and problem:** The existing paywall presented a single annual plan with no framing around value, and trial-to-paid conversion had been flat for three quarters. Qualitative research showed users didn't understand what they'd lose by not upgrading, and price-sensitive users had no lower-commitment option.

**Hypothesis:** If we introduced tiered pricing with a clear "most popular" anchor and reframed the paywall around outcomes instead of features, conversion would increase without cannibalizing existing annual revenue.

**What was shipped:** A three-tier paywall (monthly, annual, and a discounted "founding member" annual tier), a redesigned paywall screen that led with outcomes and social proof, and a post-trial win-back flow for users who churned before converting. Rolled out as an A/B test to 50% of new trial users over 10 weeks.

**Results:** +24% relative lift in trial-to-paid conversion, with average revenue per user roughly flat (tier mix shifted but blended ARPU held). No measurable increase in 90-day churn among converted users.

**Reflection:** In hindsight, the test should have shipped with a holdout for existing subscribers re-entering the funnel (e.g. lapsed users), since that segment behaved differently than net-new trials and diluted an early read on the results.

### Case Study 2: Unifying Subscriptions Across Stripe, Apple, and Google Play

**Title:** Unifying Subscriptions Across Stripe, Apple, and Google Play
**One-sentence outcome:** Consolidating subscription state across three billing platforms cut involuntary churn and gave support a single source of truth.
**Headline metric:** −18% involuntary churn (relative)

**At a glance:** Role — Growth PM, Payments · Team — 6 engineers across 3 platform squads · Timeline — 1 quarter · Outcome — −18% involuntary churn (relative)

**Context and problem:** Subscription state lived in three disconnected systems — Stripe for web, StoreKit for iOS, and Google Play Billing for Android — so a user who upgraded on one platform often saw stale entitlements on another, and failed card renewals on Stripe weren't triggering the same dunning flow as failed renewals on mobile.

**Hypothesis:** A unified subscription ledger with platform-aware dunning and grace periods would recover more failed payments and eliminate the cross-platform entitlement bugs driving support tickets.

**What was shipped:** A single internal subscription-state service that all three billing platforms wrote to, a shared dunning engine with platform-specific retry schedules and grace periods, and reconciliation jobs to catch drift between platform webhooks and the internal ledger.

**Results:** Involuntary churn from failed payments dropped 18% relative to the prior quarter, cross-platform entitlement support tickets fell by more than half, and payment-related incident response time improved because engineers had one system to check instead of three.

**Reflection:** Given the scope, doing a phased platform-by-platform migration (starting with the smallest platform) rather than a near-simultaneous cutover would have reduced risk, even though it would have taken longer to reach full parity.

### Case Study 3: Leading the Growth Team at MyFitnessPal

**Title:** Leading the Growth Team at MyFitnessPal
**One-sentence outcome:** Built and led the growth team responsible for subscription acquisition and retention, shipping a steady cadence of pricing, onboarding, and lifecycle experiments.
**Headline metric:** Meaningful relative growth in premium subscription revenue over the tenure

**At a glance:** Role — Growth Team Lead · Team — up to 12 (PM, eng, design, data) · Timeline — ~18 months · Outcome — sustained relative growth in premium subscription revenue and activation

**Context and problem:** MyFitnessPal's free-to-premium funnel had strong top-of-funnel volume but relatively low awareness of premium features among free users, and the team lacked a structured experimentation practice to systematically test onboarding, pricing, and re-engagement ideas.

**Hypothesis:** Standing up a dedicated growth team with a weekly experimentation cadence — covering onboarding, paywall placement, pricing, and lifecycle messaging — would compound into durable gains in premium conversion and retention.

**What was shipped:** A prioritized experiment backlog reviewed weekly, a redesigned onboarding flow that surfaced premium value earlier, new paywall placements tied to specific user moments (e.g. after logging a meal streak), and lifecycle email/push campaigns targeted at users showing early churn signals.

**Results:** Consistent quarter-over-quarter relative growth in premium subscription revenue and free-to-premium conversion, alongside a measurable reduction in early-tenure churn among premium subscribers.

**Reflection:** Looking back, the team would have benefited from investing earlier in a proper experimentation platform instead of ad hoc analysis — several promising results were delayed because significance took longer to establish without better tooling.

## Lab page

Opening line (use near the top): "I build to stay close to the craft — and to what AI tooling can now do."

**Lab projects (cards: problem, what was built, tools used, link/screenshot placeholder):**

1. **Full Court**
   - Problem: Pickup and rec-league basketball players had no simple way to track games, stats, and standings without a heavyweight league-management tool.
   - What was built: A lightweight web app for organizing pickup basketball games — tracking teams, scores, and simple stats — built solo end-to-end.
   - Tools: React, TypeScript, AI pair-programming tools for rapid iteration
   - Link/screenshot: placeholder link (e.g. "#")

2. **LeagueApps AI Toolkit**
   - Problem: Internal ops and support teams at LeagueApps spent significant time on repetitive, manual tasks that didn't require human judgment.
   - What was built: A set of internal AI-assisted tools to speed up common workflows for the ops and support teams.
   - Tools: LLM APIs, internal tooling stack
   - Link/screenshot: placeholder (internal project — no public link)

3. **Texas Gardening Product Concept**
   - Problem: Home gardeners in Texas struggle with planting calendars and plant choices suited to the state's extreme heat and unpredictable seasons.
   - What was built: A product concept and prototype for a Texas-specific gardening planner — recommending what to plant and when, based on local climate data.
   - Tools: Product prototyping, AI-assisted design and content generation
   - Link/screenshot: placeholder link

4. **This Site**
   - Problem: Wanted a portfolio that doubled as proof of hands-on building and AI fluency, not just a description of it.
   - What was built: This entire site — designed, written, and shipped using an AI coding agent, instrumented like a growth product.
   - Tools: React, an AI coding agent, modern web tooling
   - Link/screenshot: this site itself

## About / Resume page

**Bio (~150 words, draft):**

"Jamie Aldridge is a growth product leader who specializes in turning free users into paying subscribers. Over the past decade, Jamie has led growth and monetization efforts at consumer subscription companies, most notably building and running the Growth Team at MyFitnessPal. Jamie's focus sits at the intersection of pricing, paywalls, subscription lifecycle, and payments infrastructure — the unglamorous plumbing that determines whether a great product actually makes money. Outside of core product work, Jamie serves as commissioner of the AGBL, running league operations, scheduling, and rules for a real, active community — a different kind of product management with its own stakeholders and edge cases. Jamie also builds side projects to stay hands-on with code and to keep pace with what AI tooling now makes possible for a single builder. Based in [City], Jamie is looking for the next senior growth or monetization role at a consumer subscription company."

**Operating principles (short list, how Jamie runs experiments and partners with eng/design):**
- Start from a written hypothesis, not a feature idea — if you can't state what you expect to happen and why, it's not ready to build.
- Ship the smallest version of a test that can produce a real signal, then decide whether to invest further.
- Treat engineering and design as co-owners of the outcome, not an execution queue — the best experiments come from the whole team debating the hypothesis, not just the PM.
- Distinguish relative wins from durable ones — a short-term conversion bump that erodes retention isn't a win.
- Default to sharing results (including failed experiments) widely — a team that only hears about wins stops trusting the process.

**Condensed resume (web version):** Present as a simple timeline/list — role, company, dates, one-line impact. Suggested entries (adjust freely):
- Growth Team Lead, MyFitnessPal — led growth team responsible for subscription acquisition and retention
- Senior Growth PM — led paywall, pricing, and cross-platform payments initiatives (see Case Studies)
- Commissioner, AGBL — runs league operations for an active amateur sports league
- Education / earlier career — placeholder, keep generic and clearly editable

**Resume PDF download button:** placeholder link/target (`/resume.pdf` or `#`) — clearly a button labeled "Download Resume (PDF)"

**Calendar booking:** a clear "Book a Call" button/link using the placeholder Calendly/Cal.com URL above.

**Community leadership callout:** mention AGBL commissioner role as evidence of running a real community with real operational complexity (scheduling, rules, disputes).

## Footer (persistent on every page)

- Contact email (placeholder mailto link)
- LinkedIn link (placeholder)
- Resume PDF download (placeholder)
- Calendar booking link (placeholder)
- Simple copyright line
