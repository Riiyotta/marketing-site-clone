/**
 * /pricing data, extracted verbatim from the live page.
 *
 *  CHART_GROUPS   the 8 `.pricing_chart_wrap` bands and their 49
 *                 `.pricing_item_wrap` rows. Row values are either literal
 *                 text ("3 audiences", "Unlimited"), '✓' for a tick, or '-'
 *                 for "not included". Source: .scrape/pricing-chart.json.
 *  PLANS          the two hero `info_card` tiers. Monthly $69 / Yearly $59,
 *                 both "month/seat"; Business is custom-priced either way.
 *  FAQ_GROUPS     the three `.accordion_1` blocks. Questions AND answers are
 *                 the live copy, read out of the collapsed DOM
 *                 (.scrape/pricing-faq2.json) — not authored. Each answer keeps the
 *                 original's block structure as an array of paragraphs.
 *
 * Band tints are Tailwind tokens (see chart.* in tailwind.config.js); the
 * band ground is the token at 40% alpha and every second row is the token at
 * full strength, matching the live computed backgrounds.
 */

export const CHART_GROUPS = [
  {
    title: "Jasper IQ",
    tint: "chart-green-200",
    rows: [
      { name: "Audiences",
        desc: "Transform static personas into dynamic, actionable AI inputs, to define, manage, and apply audience insights across every asset.",
        pro: "3 audiences", biz: "Unlimited" },
      { name: "Brand Voice",
        desc: "Let AI analyze your content's tone of voice, then set tone and formatting rules so Jasper's writing always sounds like you.",
        pro: "2 voices", biz: "Unlimited voices" },
      { name: "Marketing Best Practices",
        desc: "Jasper’s proprietary marketing knowledge layer deeply understands marketing, and sits atop the general purpose LLM to deliver outputs fine-tuned to marketing best practices.",
        pro: "✓", biz: "✓" },
      { name: "Multi-Modal Company Knowledge",
        desc: "Ensure all outputs are grounded in your company's institutional knowledge by uploading text, video, image, data, or audio assets for Jasper to ingest and reference.",
        pro: "5 multi-modal knowledge assets", biz: "Unlimited multi-modal knowledge assets" },
      { name: "Style Guide",
        desc: "Maintain a series of rules in a style guide that ensures you're always on-brand, and see these style guide updates visually in the editor with x-ray view.",
        pro: "-", biz: "✓" },
      { name: "Visual Guidelines",
        desc: "Eliminate design bottlenecks and accelerate time to market by ensuring that content is high-quality and on-brand.",
        pro: "-", biz: "Unlimited" },
    ],
  },
  {
    title: "Jasper's LLM-Optimized Architecture",
    tint: "chart-blue-200",
    rows: [
      { name: "LLM Routing & Maintenance",
        desc: "Jasper's AI Engine leverages several large language models, fine tuned for marketing-specific needs, so you get the highest quality outputs and superior uptime.",
        pro: "✓", biz: "✓" },
      { name: "30+ Languages",
        desc: "Easily create or repurpose content in over 30 languages.",
        pro: "✓", biz: "✓" },
    ],
  },
  {
    title: "Jasper Platform",
    tint: "chart-flame-200",
    rows: [
      { name: "Jasper Studio",
        desc: "Design and deploy context-rich, no-code AI agents and workflows that transform your marketing processes.",
        pro: "-", biz: "✓" },
      { name: "Custom Workflows & Agents",
        desc: "Let our team create custom Agents and Workflows to fit your business needs.",
        pro: "-", biz: "✓" },
      { name: "100+ Purpose-Built Marketing Agents",
        desc: "Enable every marketer, across every function, to accelerate AI adoption and time to value with pre-built Agents fine-tuned for marketing use-cases.",
        pro: "✓", biz: "✓" },
      { name: "Custom Agents",
        desc: "Build and publish a Custom Agent that maps any marketing task to your company’s unique processes to accelerate business impact and create consistency across your team.",
        pro: "-", biz: "✓" },
      { name: "Document Collaboration",
        desc: "Built-in features that allow for real-time interaction among your team members.",
        pro: "-", biz: "✓" },
      { name: "Remix Content",
        desc: "Repurpose existing content into new assets for other marketing channels.",
        pro: "✓", biz: "✓" },
      { name: "Plagiarism Checker",
        desc: "Scan your content for sources using our add-on for Copyscape, the best plagiarism search on the web.",
        pro: "✓", biz: "✓" },
      { name: "Marketing Editor",
        desc: "Write, edit, and format all of your content inside our user-friendly document editor.",
        pro: "✓", biz: "✓" },
      { name: "Rephrase & Rewrite",
        desc: "Highlight text and with 1-click you can improve your writing, change the tone, adjust the length, or repurpose for a different channel.",
        pro: "✓", biz: "✓" },
      { name: "Chat",
        desc: "Our chatbot can assist you with tasks, do research quickly, and answer questions all through a human-like conversation.",
        pro: "✓", biz: "✓" },
    ],
  },
  {
    title: "Visual & Multimodal Functionality",
    tint: "chart-pink-200",
    rows: [
      { name: "The Jasper AI Image Suite",
        desc: "Integrate state of the art image processing & AI capabilities directly in your products.",
        pro: "-", biz: "✓" },
      { name: "Image Generation & Editing",
        desc: "Create new campaign imagery and update existing assets using natural language while maintaining a cohesive visual brand everywhere.",
        pro: "✓", biz: "✓" },
      { name: "Replace Image Background",
        desc: "Replace the background of an image automatically or using a prompt.",
        pro: "-", biz: "✓" },
      { name: "Image Upscaling",
        desc: "Boost image resolution while preserving every detail. Quickly create sharper, more impactful visuals with ease.",
        pro: "-", biz: "✓" },
      { name: "Packshot Compositing",
        desc: "Create studio style product photographs with life-like shadows on a branded background.",
        pro: "-", biz: "✓" },
      { name: "Remove Image Background",
        desc: "Quickly and accurately remove backgrounds while keeping high-quality image details.",
        pro: "✓", biz: "✓" },
      { name: "Remove Image Text",
        desc: "Repurpose any image by removing text with ease.",
        pro: "✓", biz: "✓" },
      { name: "Make Image Square",
        desc: "Uncrop your photos to fit into square formats.",
        pro: "✓", biz: "✓" },
    ],
  },
  {
    title: "Extensions, Integrations & API",
    tint: "chart-vintage-electric-200",
    rows: [
      { name: "API Access",
        desc: "Build a custom integration or automate manual processes with Jasper's API.",
        pro: "-", biz: "✓" },
      { name: "API Integration",
        desc: "Get on-brand AI wherever you work using Jasper API-powered integrations like BigQuery, Google Sheets, Zapier, Make and more.",
        pro: "-", biz: "✓" },
      { name: "Integrations",
        desc: "Tap into our growing integrations marketplace to level-up your AI processes with Webflow, Google Docs, Slack and more.",
        pro: "✓", biz: "✓" },
      { name: "Browser Extension",
        desc: "Use AI everywhere you work by adding the Jasper extension to your Chrome or Edge browser.",
        pro: "✓", biz: "✓" },
    ],
  },
  {
    title: "Account Management & Organization",
    tint: "chart-violet-200",
    rows: [
      { name: "User Logins",
        desc: "Collaborate on content with your team.",
        pro: "Single user", biz: "Large teams" },
      { name: "Team Usage & Analytics",
        desc: "See valuable data on team usage over time including total generations, active users, hours saved & more.",
        pro: "-", biz: "✓" },
      { name: "Advanced Admin Controls",
        desc: "Gain 100% control over your Jasper instance with the ability to toggle on or off core features like image generation at the workspace level.",
        pro: "-", biz: "✓" },
      { name: "Sharing & Project Management",
        desc: "Share documents between your team and apply status labels to quickly know what's ready for review.",
        pro: "-", biz: "✓" },
      { name: "User Management",
        desc: "Control who can access documents in your workspace with user-specific permission settings to make them private, view-only, editable, or available to everyone in your workspace.",
        pro: "-", biz: "✓" },
      { name: "Personal Usage Analytics",
        desc: "See data on your individual usage over time including total generations, hours saved & more.",
        pro: "✓", biz: "✓" },
      { name: "History & Backups",
        desc: "Automatically saves your content in the document editor with the ability to view and restore previous versions of the document going back 7 days.",
        pro: "✓", biz: "✓" },
      { name: "Save, Star, Tag",
        desc: "Save your prompts & outputs for later, or star your favorites for a more organized workspace.",
        pro: "✓", biz: "✓" },
    ],
  },
  {
    title: "Data Security & Privacy",
    tint: "chart-green-200",
    rows: [
      { name: "SSO",
        desc: "Single sign-on to securely authenticate all users’ logins.",
        pro: "-", biz: "✓" },
      { name: "Enterprise Security",
        desc: "Your data is not only protected from threats, but also completely under your control.",
        pro: "-", biz: "✓" },
      { name: "SCIM",
        desc: "Easily provision and manage user identities across different applications.",
        pro: "-", biz: "✓" },
      { name: "Role-Based Permissions",
        desc: "Set up users in your workspace with admin, manager, or member roles, and permissions to create Groups, Brand Voices, Audiences, Knowledge, Style Guide rules, and Visual Guidelines, and permission to publish Studio agents.",
        pro: "-", biz: "✓" },
      { name: "Security",
        desc: "Built with robust enterprise access control and regular security audits.",
        pro: "✓", biz: "✓" },
      { name: "SOC2 Compliant",
        desc: "Jasper is SOC 2 certified to meet the strict technical and organizational requirement for protecting customer data and follows best practices for cybersecurity.",
        pro: "✓", biz: "✓" },
      { name: "Reliability",
        desc: "We’re proud to have 99% uptime thanks to our multi-model interoperability and enterprise-grade infrastructure.",
        pro: "✓", biz: "✓" },
      { name: "Data Privacy",
        desc: "Your data and outputs are safe with Jasper - we never permit third parties to train their AI models with Jasper customer data, and data is encrypted in transit and at rest.",
        pro: "✓", biz: "✓" },
    ],
  },
  {
    title: "Onboarding & Support",
    tint: "chart-blue-200",
    rows: [
      { name: "Dedicated Customer Success Manager",
        desc: "Your organization will be assigned a dedicated Customer Success Manager to create an action plan, and implement AI into you workflows, and train your team on best practices.",
        pro: "-", biz: "✓" },
      { name: "Product training",
        desc: "Attend live workshops or watch our on-demand series Jasper Jumpstart to learn how to use Jasper to its fullest potential.",
        pro: "✓", biz: "✓" },
      { name: "Support",
        desc: "Get your questions answered from our global customer success team.",
        pro: "Email", biz: "Priority Support" },
    ],
  },
]

export const PLANS = [
  {
    name: "Pro",
    price: {
      monthly: "$69",
      yearly: "$59"
    },
    unit: ["month/", "seat"],
    blurb: "Powerful AI to help you stay on-brand, even at scale.",
    cta: "Start Free 7-Day Trial",
    variant: "btn-secondary",
    listHead: "Plan includes:",
    features: [
      "Includes 1 seat",
      "Canvas platform for accelerated, on-brand content creation",
      "Agents for core marketing workflows",
      "Smart customization with 2 Brand Voices, 5 Knowledge assets and 3 Audiences"
    ]
  },
  {
    name: "Business",
    custom: true,
    blurb: "The AI platform built to elevate your brand and accelerate the impact of your team.",
    cta: "Contact Sales",
    variant: "btn-primary",
    listHead: "Plan includes everything in Pro, plus:",
    features: [
      "Agents for complex marketing workflows, including GEO, translations, and deep research",
      "No-code builder to create Custom AI Agents",
      "Jasper Grid for scaled systematic content execution",
      "Unlimited IQ customization: Brand Voices, Knowledge, Audiences",
      "API access",
      "Enterprise-grade governance: Admin controls and Groups",
      "Dedicated account management & priority support",
      "Secure and flexible deployment options"
    ]
  }
]

export const FAQ_GROUPS = [
  {
    title: "Questions about Jasper Basics",
    items: [
      { q: "How much does Jasper cost?", open: true,
        a: [
          "Jasper's pricing is transparent and meets your business needs as you grow. There are two plans to choose from:",
          "Business: (custom pricing tailored for your company's needs. Includes personalized AI features with additional control, security, team training & tech support.)",
          "Pro: $59/month billed yearly or $69/month billed monthly (cancel anytime). Includes advanced AI features to create content for multiple brands & collaborate on campaigns.",
          "The most popular plan is the Business plan for its rich feature-set and ability to add teammates into your workspace. If you need personalized AI features with additional control, security, team training & tech support, then The Business Plan is for you.If you prefer to explore Jasper on your own, start a free trial and see for yourself how Jasper is the better AI for business.",
        ] },
      { q: "What is Jasper?",
        a: [
          "Jasper is the generative platform built for marketing success, empowering marketers to create on-brand written and visual content with AI. Unlike typical AI tools limited to single functions and generic outputs, Jasper can be trained on your brand and used seamlessly across platforms, from email and social media to your website.‍Over 100,000 businesses, both small and large, use Jasper to scale up content and rate their experience 4.8/5 stars in over 10k reviews.",
        ] },
      { q: "Why should I choose Jasper?",
        a: [
          "These 4 key differentiators are why Jasper is the best AI for businesses:",
          "Jasper is built by Marketers for Marketers, so not only is the AI trained on high-performing copy, the intuitive UI/UX is designed for creating content for all types of campaigns. Whether you are a social media manager, SEO specialist, ads manager, email marketer, or you're in marketing leadership then Jasper will be your home-base for creating content.",
          "If staying on-brand is important for you, then Jasper is the only AI solution for you. Other AIs sound generic... like a robot wrote it. Jasper is different. You can upload your brand's writing style guide, or feed Jasper a piece of content, and the AI will analyze that writing style to mimic your tone of voice. Not only does the AI write on-brand, it helps keep everyone on your team writing on-brand as well because Jasper knows how important keeping a consistent message is across all channels.",
          "Productivity is a big reason for looking at AI solutions, but 99% of AIs are siloed in their own app. Jasper has a large partnership ecosystem where Jasper has brought AI into the tools you use everyday. You can also add Jasper to your Chrome or Edge browser to bring your AI writing assistant everywhere you work – like Gmail, Wordpress, Docs, HubSpot, LinkedIn, or any other tabs you may have open. Jasper's extension is your brainstorming buddy for getting content going, or a friendly editor to review & improve your message before you press send.",
          "If your company has a team of people creating content, then you'll want an AI platform that enables collaboration while also securing access to certain content. Jasper is a multi-player AI platform where you can assign work, see status updates, and set workspace defaults for AI features like setting your brand-voice, teaching the AI about your products, and setting a language default.",
          "So in summary, Jasper is for you if you want high-performing content created quickly with AI that is factually accurate and always on-brand. You may start alone on the Pro plan and then upgrade to Business as your team grows and you need access to enterprise-ready features like API access, custom AI templates, and hands-on support.",
          "Start your free trial today to see what amazing content Jasper will write for you!",
        ] },
    ] },
  {
    title: "Common Billing Questions",
    items: [
      { q: "How do Jasper credits work?", open: true,
        a: [
          [
            "Some usage-based features, like the GEO Hub and Agents, run on credits, which sit alongside seat-based pricing on the Business plan. Credits are consumed per action (for example, each GEO Hub report run), and admins can view and govern their workspace's credit allocation. Standard content creation in Chat and Canvas is not what drives credit usage. You can see current rates on the ",
            { t: "Jasper credits rate card", href: "#" },
            ".",
          ],
        ] },
      { q: "What’s the cost of additional users?",
        a: [
          [
            "Need more than 1 user on Pro? ",
            { t: "Contact Jasper's sales team", href: "#" },
            " to customize the Business Plan with additional seats, unlimited custom agents via Jasper’s no-code AI Agent Builder, marketing Agents, SSO, custom style guide, and API access, everything your team needs to streamline workflows and scale content production.",
          ],
        ] },
      { q: "What payment methods do you support?",
        a: [
          "Jasper supports all major credit cards and debit cards. Jasper secures your payment method with 3D Secure authentication for your privacy and protection.",
          "Jasper does not accept PayPal, prepaid cards, or other cash apps at this time.",
          "‍",
        ] },
      { q: "What’s the cancellation policy?",
        a: [
          "You can cancel your subscription at any time and you will no longer be charged. After canceling, you will be able to continue generating content and have access to your account until the end of your billing cycle.",
          "‍",
        ] },
      { q: "What’s the commitment?",
        a: [
          "On the Pro plan, you have the option to pay monthly with no ongoing commitments (you can cancel anytime), or you can pay annually up-front to save ~20% and the commitment is 12 months. Business plans are customized to your needs and begin with a 12 month commitment.",
          "You can start a 7-day free trial of the Pro plan to try Jasper's features risk-free today before committing to a paid plan.",
        ] },
      { q: "What currencies does Jasper accept?",
        a: [
          "All currencies! Prices are in USD, and an exchange rate will be applied at time of purchase as determined by Stripe.",
          "‍",
        ] },
      { q: "Do you offer yearly price plans?",
        a: [
          [
            "You can pay annually up-front to save ~20% and the commitment is 12 months, or you can pay a little more for monthly billing but have the flexibility to ",
            { t: "pause for 30 days", href: "https://help.jasper.ai/hc/en-us/articles/18618636907931-Pause-Plan" },
            ". Business plans are customized to your needs and begin with a 12 month commitment.",
          ],
          "You can start a 7-day free trial of the Pro plan to try Jasper's features risk-free today before committing to an annual plan.",
        ] },
      { q: "Do you offer free trials?",
        a: [
          "Most people get started with a 7-day free trial on the Pro plan to experience Jasper risk-free. When you're ready, create your free account and see for yourself how Jasper is the better AI for business.",
        ] },
      { q: "I am a nonprofit. Do you offer any discounts?",
        a: [
          [
            "Jasper offers 20% non-profit discounts. To access this discount, first start a free trial and then email ",
            { t: "hey@jasper.ai", href: "mailto:hey@jasper.ai" },
            " to get your non-profit discount applied. The team will request for documentation to prove your non-profit's legitimacy.",
          ],
        ] },
      { q: "Do you offer Enterprise plans?",
        a: [
          "Jasper is thoughtfully designed for departments and organizations who need a secure, scalable, and customizable AI platform that meets technical needs and aligns their team. That's why large companies like Wayfair, SentinelOne, and IHeartMedia choose Jasper to help their organization create on-brand content at scale.",
          [
            "Explore all the features of Jasper's Business Plan, and when you're ready to take the next step you can ",
            { t: "book a time", href: "/demo" },
            " with one of Jasper's Generative AI Consultants to walk you through how to customize Jasper to your business needs.",
          ],
        ] },
      { q: "Can I upgrade to a different plan at a later time?",
        a: [
          "Yes! For most plan changes, you will need to upgrade to Business get unlimited users and other popularfeatures.",
        ] },
    ] },
  {
    title: "Common Product Questions",
    items: [
      { q: "Does Jasper support SSO and SAML?", open: true,
        a: [
          "Yes. Single sign-on (SSO) is available on the Business plan and supports SAML 2.0, including Okta, Azure AD, and Google Workspace. Role-based access controls and an in-app AI audit log are also included, so admins can govern who has access and how the platform is used across their team.",
        ] },
      { q: "What security and compliance certifications does Jasper have?",
        a: [
          [
            "Jasper is SOC 2 Type II certified and complies with GDPR, CCPA, PCI, and DPA requirements, with annual third-party penetration testing. Customer data is hosted in US-based data centers and encrypted in transit (TLS 1.2 or higher) and at rest (AES-256). Jasper does not use your data to train AI models, and you keep full ownership of your content. You can request the SOC 2 report and supporting documentation through Jasper's compliance portal at ",
            { t: "security.jasper.ai", href: "https://security.jasper.ai" },
            ".",
          ],
        ] },
      { q: "What does Jasper do with my data?",
        a: [
          "Jasper employs robust access controls across accounts, and no user outside your workspace will have access to your data. The Jasper service has been tested and audited by independent 3rd parties to verify that these protections are in place, and properly protect your data.",
          [
            "Jasper will never share your data outside Jasper's list of trusted partners that help provide the Jasper service. Jasper is transparent about all the sub-processors it uses. You can find a list of the sub-processors Jasper uses at ",
            { t: "#", href: "#" },
            ".",
          ],
        ] },
      { q: "What is Jasper’s Fair Use Policy?",
        a: [
          [
            "Jasper strives to provide the Jasper Software as a Service Application (the “Service”) fairly to all Users while maintaining correspondingly high levels of quality. To do so, Jasper maintains this ",
            { t: "Fair Use Policy", href: "https://help.jasper.ai/hc/en-us/articles/18618630845339-Fair-Use-Policy" },
            ", which applies to all Users.",
          ],
        ] },
      { q: "Can I use Jasper for my client’s sites?",
        a: [
          "Yes, you create multiple projects within Jasper for each of your clients. You can also log into your clients Jasper account if they're a customer and give you access.",
        ] },
    ] },
]
