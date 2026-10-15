// All page copy lives here so text, prices and links can change without touching components.

export const BRAND = "Leadfactory";

// Replace with your Cal.com (or other) booking link when it exists.
export const BOOKING_URL = "#book";

export const navLinks = [
  { href: "#method", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#audit", label: "Free audit" },
  { href: "#offers", label: "Pricing" },
  { href: "#hvac", label: "HVAC" },
  { href: "#faq", label: "FAQ" },
];

export const heroEvents = [
  {
    time: "9:47 PM",
    title: "After-hours call: AC not cooling",
    body: "Voice agent answered on ring 1, checked the address, booked tomorrow 8:00 AM.",
    tag: "Job booked",
    tone: "ok",
  },
  {
    time: "10:02 PM",
    title: "Web form lead from Google Ads",
    body: "Texted back in 41 seconds, qualified, added to CRM with source tracked.",
    tag: "Lead captured",
    tone: "ok",
  },
  {
    time: "10:15 PM",
    title: "Old estimate from March: $8,400 heat pump",
    body: "Reactivation sequence, message 2 of 4. Customer replied “Is the rebate still on?”",
    tag: "Reactivated",
    tone: "bl",
  },
];

export const tools = [
  "Google Ads", "Meta Ads", "GoHighLevel", "HubSpot", "ServiceTitan", "Jobber", "Housecall Pro",
  "Twilio", "n8n", "Make", "Zapier", "Vapi", "Retell",
];

export const fixes = [
  { pain: "Calls go to voicemail after 5 PM", fix: "An AI receptionist answers 24/7 and books the job" },
  { pain: "Web leads wait hours for a reply", fix: "Every lead gets a reply in under a minute" },
  { pain: "Quotes sent, then forgotten", fix: "Unsold estimates followed up until they book or say no" },
  { pain: "Ad spend with no idea what it returns", fix: "Meta and Google ads tracked to booked jobs" },
  { pain: "Customer info lives in five places", fix: "One clean CRM your team actually uses" },
  { pain: "Owner stuck doing admin at midnight", fix: "AI workflows handle scheduling, reminders and data entry" },
];

export const services = [
  {
    label: "Get found",
    title: "Bring in demand",
    items: [
      { name: "Websites that convert", body: "Fast, mobile-first sites built to turn visitors into booked calls." },
      { name: "Meta ads", body: "Facebook and Instagram campaigns for offers, seasonal pushes and retargeting." },
      { name: "Google ads", body: "Search, Local Services Ads and Performance Max, tracked to booked jobs." },
    ],
  },
  {
    label: "Convert & follow up",
    title: "Turn leads into revenue",
    items: [
      { name: "CRM setup & cleanup", body: "GoHighLevel, HubSpot, or the field-service software you already run." },
      { name: "AI automations & workflows", body: "Speed-to-lead, reminders, review requests, reporting, data entry." },
      { name: "Lead reactivation", body: "Wake up old leads, unsold estimates and lapsed customers." },
    ],
  },
  {
    label: "Answer everything",
    title: "Never miss a call",
    items: [
      { name: "AI voice agents", body: "Natural-sounding agents that answer, qualify and book, around the clock." },
      { name: "AI receptionist", body: "After-hours, overflow and weekend coverage with handoff to your team." },
      { name: "Outbound calling", body: "Follow-up and reminder calls that run on schedule." },
    ],
  },
];

export const differences = [
  { icon: "search", title: "Audit first, pitch last", body: "We test your phones, forms and follow-up before we sell you anything. You get the findings either way." },
  { icon: "lines", title: "Custom plans, not templates", body: "Your AI roadmap is built from your numbers and your tools, in the order that pays back fastest." },
  { icon: "trend", title: "Measured in booked jobs", body: "We report revenue, booked appointments and cost per job. Impressions and clicks are not the goal." },
  { icon: "person", title: "A human in the loop", body: "Every build has logging, alerts and a person who checks the work until the results earn your trust." },
  { icon: "window", title: "Inside your existing tools", body: "We plug into the CRM, calendar and phone system you already pay for. No new app for your team to learn." },
  { icon: "shield", title: "You own everything", body: "Month-to-month. Your accounts, your data, your workflows. If you leave, it all stays with you." },
];

export const phases = [
  {
    n: "01",
    when: "Week 1 · Free",
    title: "Audit & plan",
    items: [
      "After-hours call test and mystery quote request",
      "Ads, website and CRM review",
      "Revenue-leak estimate with the math shown",
      "Custom AI adoption plan, ranked by payback",
    ],
  },
  {
    n: "02",
    when: "Weeks 2–4",
    title: "Quick win",
    items: [
      "Lead reactivation on your existing list",
      "Speed-to-lead on every form and missed call",
      "AI receptionist for after-hours and overflow",
      "Weekly report on booked jobs",
    ],
  },
  {
    n: "03",
    when: "Month 2 onward",
    title: "Growth engine",
    items: [
      "Website rebuild or conversion fixes",
      "Meta and Google ads tied to booked jobs",
      "Full CRM pipelines and automations",
      "Ongoing testing, reporting and new workflows",
    ],
  },
];

export const auditSteps = [
  { title: "Call & response test", body: "We call after hours and submit a quote request, then time what happens." },
  { title: "Ads & website check", body: "Tracking, landing pages, cost per lead, where budget is wasted." },
  { title: "CRM & follow-up review", body: "How many leads and quotes went quiet in the last 12 months." },
  { title: "Competitor snapshot", body: "Reviews, response speed and offers against your top three local rivals." },
  { title: "Your custom plan", body: "The three changes that pay back fastest, with cost and timeline." },
];

export const leakRows = [
  ["Missed calls per month (after hours + busy)", "60"],
  ["Share that would have booked", "35%"],
  ["Average ticket", "$420"],
  ["Missed-call revenue / month", "$8,820"],
  ["Unsold estimates over $3k, last 12 months", "140"],
  ["Recoverable with follow-up (8%) × $7,500", "$84,000"],
];
export const leakTotal = ["Estimated revenue left on the table / year", "$189,840"];

export const finderOptions = [
  { id: "calls", label: "Missed calls" },
  { id: "quotes", label: "Old quotes & cold leads" },
  { id: "leads", label: "Not enough new leads" },
  { id: "ads", label: "Ads not paying off" },
  { id: "site", label: "Outdated website" },
  { id: "admin", label: "Too much admin" },
  { id: "crm", label: "Messy or no CRM" },
];

// Which offers each problem points to. Three or more matches recommend the all-in retainer.
export const finderMap = {
  calls: ["voice"],
  quotes: ["react", "auto"],
  leads: ["ads", "site"],
  ads: ["ads"],
  site: ["site"],
  admin: ["auto"],
  crm: ["auto"],
};

export const offers = [
  {
    id: "audit",
    kind: "Start here",
    title: "AI Growth Audit",
    price: "$0",
    body: "Call test, ads and CRM review, revenue-leak estimate and a custom AI plan.",
    feature: true,
    badge: "Everyone starts here",
  },
  {
    id: "react",
    kind: "30-day pilot",
    title: "Lead Reactivation Sprint",
    price: "$0",
    priceNote: "setup · pay per booked job",
    body: "We work your old leads, unsold estimates and past customers by text, email and call.",
    bullets: ["$75–$150 per booked appointment", "Your list, your calendar"],
  },
  {
    id: "voice",
    kind: "Monthly",
    title: "AI Receptionist",
    price: "$497",
    priceNote: "/mo · from $1,500 setup",
    body: "A voice agent that answers, qualifies and books 24/7, with emergency routing and call summaries.",
  },
  {
    id: "auto",
    kind: "One-time build",
    title: "CRM & Automation Build",
    price: "$2,000",
    priceNote: "from",
    body: "CRM setup or cleanup, speed-to-lead, reminders, review requests and reporting workflows.",
  },
  {
    id: "site",
    kind: "One-time build",
    title: "Growth Website",
    price: "$2,500",
    priceNote: "from",
    body: "A fast, conversion-focused site with call tracking, booking and lead capture wired to your CRM.",
  },
  {
    id: "ads",
    kind: "Monthly",
    title: "Meta + Google Ads",
    price: "$1,000",
    priceNote: "/mo + ad spend",
    body: "Campaign strategy, creative, landing pages and tracking all the way to booked jobs.",
  },
];

export const engineOffer = {
  id: "engine",
  kind: "All-in retainer",
  title: "The Growth Engine: ads, website, CRM, automations and AI receptionist as one system",
  price: "$2,997",
  priceNote: "/mo from · month-to-month",
  wide: true,
};

export const offerNames = {
  voice: "AI Receptionist",
  react: "Lead Reactivation Sprint",
  auto: "CRM & Automation Build",
  ads: "Meta + Google Ads",
  site: "Growth Website",
  engine: "The Growth Engine",
};

export const hvacPoints = [
  { label: "NO-COOL / NO-HEAT", body: "Emergency calls answered, triaged and routed to the on-call tech." },
  { label: "UNSOLD ESTIMATES", body: "Replacement quotes followed up with financing and rebate reminders." },
  { label: "MAINTENANCE PLANS", body: "Tune-up reminders and renewals before the season rush." },
  { label: "FSM SOFTWARE", body: "Bookings written into ServiceTitan, Jobber or Housecall Pro." },
];

export const transcript = [
  { who: "c", text: "Hi, our AC stopped blowing cold and it's 88 inside." },
  { who: "a", text: "Sorry about that, let's get it sorted. Is anyone in the home elderly, an infant, or unwell?" },
  { who: "c", text: "No, just us. Can someone come tomorrow?" },
  { who: "a", text: "I have 8:00 AM or 10:30 AM. The diagnostic is $89 and waived if you go ahead with the repair. Which works?" },
  { who: "c", text: "8 please." },
  { who: "a", text: "Booked for 8:00 AM. You'll get a text with your tech's name when they're on the way." },
];

export const expectations = [
  {
    title: "Async by default",
    items: [
      { lead: "Weekly report", rest: "with booked jobs, revenue and cost per job." },
      { lead: "Short video walkthroughs", rest: "of every new build before it goes live." },
      { lead: "Shared dashboard", rest: "you can check any time." },
    ],
  },
  {
    title: "Live when it matters",
    items: [
      { lead: "Kickoff call", rest: "to map your process and tools." },
      { lead: "Monthly review", rest: "of results and the next priority." },
      { lead: "Fast support", rest: "during your business hours, every US time zone." },
    ],
  },
];

export const trustPoints = [
  { title: "Free audit", body: "Findings and a custom plan, yours to keep." },
  { title: "No long contracts", body: "Month-to-month after any pilot." },
  { title: "You own it all", body: "Accounts, data and workflows stay with you." },
];

export const faqs = [
  { q: "Is the audit really free?", a: "Yes. We spend time on it because it is the best way to show what we can do. You get the findings and the plan whether or not you hire us." },
  { q: "Will an AI receptionist sound robotic to my customers?", a: "Modern voice agents sound natural, and we tune the script to your business. Anything it can't handle goes to your team with a full summary." },
  { q: "Do I need to change my CRM or software?", a: "Usually not. We build inside what you already use. If you have no CRM, we set one up and move your data in." },
  { q: "How fast will I see results?", a: "Lead reactivation and speed-to-lead can produce booked jobs in the first few weeks because they work on leads you already have. Ads and websites take longer to build momentum." },
  { q: "Where are your case studies?", a: "We're a young team, so we don't pad this page with borrowed logos. We prove ourselves on your business instead: a free audit with the math shown, then a reactivation pilot where you pay only for booked jobs." },
  { q: "Am I locked into a contract?", a: "No. Pilots are fixed-length, and retainers are month-to-month." },
  { q: "What happens to my data?", a: "It stays in your accounts. We use the access we need, log what our systems do, and hand everything over if you leave." },
  { q: "Do you only work with HVAC companies?", a: "No. We work with service businesses of all kinds. HVAC is our first deep-dive industry, so that's where our playbooks are most detailed." },
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { href: "#method", label: "Process" },
      { href: "#different", label: "Why us" },
      { href: "#expect", label: "What to expect" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "#audit", label: "Free AI audit" },
      { href: "#offers", label: "Pricing" },
      { href: "#hvac", label: "HVAC" },
      { href: BOOKING_URL, label: "Book a call" },
    ],
  },
];
