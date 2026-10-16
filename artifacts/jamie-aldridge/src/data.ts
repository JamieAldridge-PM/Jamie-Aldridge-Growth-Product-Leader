export const links = {
  email: 'mailto:hello@jamiealdridge.com',
  linkedin: 'https://linkedin.com/in/jamiealdridge',
  calendar: 'https://cal.com/jamiealdridge',
  resume: `${import.meta.env.BASE_URL}Jamie-Aldridge-Resume.pdf`,
};

export type CaseStudy = {
  slug: string;
  title: string;
  outcome: string;
  metric: string;
  role: string;
  team: string;
  timeline: string;
  glanceOutcome: string;
  context: string;
  hypothesis: string;
  shipped: string;
  results: string;
  reflection: string;
  visual: 'paywall' | 'payments' | 'growth';
};

export const cases: CaseStudy[] = [
  {
    slug: 'rebuilding-the-paywall',
    title: 'Rebuilding the Paywall: A Pricing Experiment That Lifted Conversion 24%',
    outcome: 'A redesigned paywall and pricing test lifted trial-to-paid conversion by 24% without hurting long-term retention.',
    metric: '+24% trial-to-paid conversion',
    role: 'Senior Growth PM',
    team: '4 engineers, 1 designer, 1 data scientist',
    timeline: '10 weeks',
    glanceOutcome: '+24% trial-to-paid conversion',
    context: "The existing paywall presented a single annual plan with no framing around value, and trial-to-paid conversion had been flat for three quarters. Qualitative research showed users didn't understand what they'd lose by not upgrading, and price-sensitive users had no lower-commitment option.",
    hypothesis: 'If we introduced tiered pricing with a clear "most popular" anchor and reframed the paywall around outcomes instead of features, conversion would increase without cannibalizing existing annual revenue.',
    shipped: 'A three-tier paywall (monthly, annual, and a discounted "founding member" annual tier), a redesigned paywall screen that led with outcomes and social proof, and a post-trial win-back flow for users who churned before converting. Rolled out as an A/B test to 50% of new trial users over 10 weeks.',
    results: '+24% relative lift in trial-to-paid conversion, with average revenue per user roughly flat (tier mix shifted but blended ARPU held). No measurable increase in 90-day churn among converted users.',
    reflection: 'In hindsight, the test should have shipped with a holdout for existing subscribers re-entering the funnel (e.g. lapsed users), since that segment behaved differently than net-new trials and diluted an early read on the results.',
    visual: 'paywall',
  },
  {
    slug: 'unifying-subscriptions',
    title: 'Unifying Subscriptions Across Stripe, Apple, and Google Play',
    outcome: 'Consolidating subscription state across three billing platforms cut involuntary churn and gave support a single source of truth.',
    metric: '−18% involuntary churn (relative)',
    role: 'Growth PM, Payments',
    team: '6 engineers across 3 platform squads',
    timeline: '1 quarter',
    glanceOutcome: '−18% involuntary churn (relative)',
    context: "Subscription state lived in three disconnected systems — Stripe for web, StoreKit for iOS, and Google Play Billing for Android — so a user who upgraded on one platform often saw stale entitlements on another, and failed card renewals on Stripe weren't triggering the same dunning flow as failed renewals on mobile.",
    hypothesis: 'A unified subscription ledger with platform-aware dunning and grace periods would recover more failed payments and eliminate the cross-platform entitlement bugs driving support tickets.',
    shipped: 'A single internal subscription-state service that all three billing platforms wrote to, a shared dunning engine with platform-specific retry schedules and grace periods, and reconciliation jobs to catch drift between platform webhooks and the internal ledger.',
    results: 'Involuntary churn from failed payments dropped 18% relative to the prior quarter, cross-platform entitlement support tickets fell by more than half, and payment-related incident response time improved because engineers had one system to check instead of three.',
    reflection: 'Given the scope, doing a phased platform-by-platform migration (starting with the smallest platform) rather than a near-simultaneous cutover would have reduced risk, even though it would have taken longer to reach full parity.',
    visual: 'payments',
  },
  {
    slug: 'leading-growth-myfitnesspal',
    title: 'Leading the Growth Team at MyFitnessPal',
    outcome: 'Built and led the growth team responsible for subscription acquisition and retention, shipping a steady cadence of pricing, onboarding, and lifecycle experiments.',
    metric: 'Meaningful relative growth in premium subscription revenue over the tenure',
    role: 'Growth Team Lead',
    team: 'up to 12 (PM, eng, design, data)',
    timeline: '~18 months',
    glanceOutcome: 'sustained relative growth in premium subscription revenue and activation',
    context: "MyFitnessPal's free-to-premium funnel had strong top-of-funnel volume but relatively low awareness of premium features among free users, and the team lacked a structured experimentation practice to systematically test onboarding, pricing, and re-engagement ideas.",
    hypothesis: 'Standing up a dedicated growth team with a weekly experimentation cadence — covering onboarding, paywall placement, pricing, and lifecycle messaging — would compound into durable gains in premium conversion and retention.',
    shipped: 'A prioritized experiment backlog reviewed weekly, a redesigned onboarding flow that surfaced premium value earlier, new paywall placements tied to specific user moments (e.g. after logging a meal streak), and lifecycle email/push campaigns targeted at users showing early churn signals.',
    results: 'Consistent quarter-over-quarter relative growth in premium subscription revenue and free-to-premium conversion, alongside a measurable reduction in early-tenure churn among premium subscribers.',
    reflection: 'Looking back, the team would have benefited from investing earlier in a proper experimentation platform instead of ad hoc analysis — several promising results were delayed because significance took longer to establish without better tooling.',
    visual: 'growth',
  },
];

export const principles = [
  "Start from a written hypothesis, not a feature idea — if you can't state what you expect to happen and why, it's not ready to build.",
  'Ship the smallest version of a test that can produce a real signal, then decide whether to invest further.',
  'Treat engineering and design as co-owners of the outcome, not an execution queue — the best experiments come from the whole team debating the hypothesis, not just the PM.',
  "Distinguish relative wins from durable ones — a short-term conversion bump that erodes retention isn't a win.",
  'Default to sharing results (including failed experiments) widely — a team that only hears about wins stops trusting the process.',
];

export const labProjects = [
  {
    title: 'Full Court',
    problem: 'Pickup and rec-league basketball players had no simple way to track games, stats, and standings without a heavyweight league-management tool.',
    built: 'A lightweight web app for organizing pickup basketball games — tracking teams, scores, and simple stats — built solo end-to-end.',
    tools: ['React', 'TypeScript', 'AI pair-programming'],
    link: '#',
    label: 'Project link coming soon',
  },
  {
    title: 'LeagueApps AI Toolkit',
    problem: "Internal ops and support teams at LeagueApps spent significant time on repetitive, manual tasks that didn't require human judgment.",
    built: 'A set of internal AI-assisted tools to speed up common workflows for the ops and support teams.',
    tools: ['LLM APIs', 'Internal tooling stack'],
    link: '',
    label: 'Internal project',
  },
  {
    title: 'Texas Gardening Product Concept',
    problem: "Home gardeners in Texas struggle with planting calendars and plant choices suited to the state's extreme heat and unpredictable seasons.",
    built: 'A product concept and prototype for a Texas-specific gardening planner — recommending what to plant and when, based on local climate data.',
    tools: ['Product prototyping', 'AI-assisted design'],
    link: '#',
    label: 'Prototype link coming soon',
  },
  {
    title: 'This Site',
    problem: 'Wanted a portfolio that doubled as proof of hands-on building and AI fluency, not just a description of it.',
    built: 'This entire site — designed, written, and shipped using an AI coding agent, instrumented like a growth product.',
    tools: ['React', 'AI coding agent', 'Modern web tooling'],
    link: '/',
    label: 'You are here',
  },
];