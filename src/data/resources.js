/**
 * Content for /resources, transcribed verbatim from the live page.
 * Sources: .scrape/spk.json / .scrape/spk2.json (a per-slide walk of the live
 * `.collection_list_item` nodes) cross-checked against .scrape/cap-resources-live.json.
 * The scrape lists every carousel card twice (Swiper duplicates slides for the
 * loop); these arrays are the deduped set.
 *
 * Each webinar speaker carries their OWN badge: the live markup renders a company
 * mark for outside guests and the Jasper square for Jasper staff, so `badge` is a
 * per-speaker field rather than a per-card one.
 */

export const HERO_CARDS = [
  {
    title: 'The State of AI in Marketing 2026',
    body: 'AI adoption is nearly universal. What happens next? Findings from 1,400 marketers show how leading teams are navigating the operational era of AI.',
    cta: 'Get the 2026 Benchmarks',
    img: '/assets/res-hero-1.png',
  },
  {
    title: 'The End of the AI Experiment: The Operational Era is Here',
    body: 'Join Jasper CMO Loreal Lynch & CEO Timothy Young for a candid conversation about marketing’s next evolution.',
    cta: 'Register to Attend',
    img: '/assets/res-hero-2.png',
  },
  {
    title: 'How Old Dominion Freight Line Uses Jasper to Deliver on its Brand Promise',
    body: 'How one of the largest LTL carriers in the US scaled content creation, boosted SEO performance, and built customer trust with Jasper.',
    cta: 'Read The Story',
    img: '/assets/res-hero-3.png',
  },
]

export const EBOOKS = [
  {
    title: 'Reinventing Marketing Teams for the Operational Era of AI',
    body: 'Inside the new roles and operating models that transform AI adoption into scaled execution',
    cta: 'Get The Ebook',
    img: '/assets/eb-reinventing.png',
  },
  {
    title: 'Owning AI Search in 2026',
    body: "5 opportunities to use AI for AEO and GEO that most marketing teams aren't thinking about",
    cta: 'Get The Ebook',
    img: '/assets/eb-owning-ai-search.png',
  },
  {
    title: "Influence Engineering: How to Shape Your Brand's Presence in AI Search",
    body: 'A practical playbook for marketing leaders building authority in the age of AI',
    cta: 'Get The Ebook',
    img: '/assets/eb-influence-eng.png',
  },
  {
    title: 'The GEO Operating Playbook',
    body: 'How CMOs build a system that wins in AI search',
    cta: 'Get The Ebook',
    img: '/assets/eb-geo-playbook.png',
  },
  {
    title: 'Jasper Named a Tech Innovator',
    body: "More of your team's day is happening inside general-purpose AI. Content Generation is no longer the bottleneck. Speed and volume are here to stay. The slop, however, needs to stop. The blocker to high-quality marketing content is the thing that makes any of that output shippable: brand. Your voice, your facts, your taste – the guardrails that turn AI output into content your team can actually publish, trust, and scale.",
    cta: 'Gartner Flex Report',
    img: '/assets/eb-gartner-flex.png',
  },
  {
    title: 'The State of AI in Marketing 2026',
    body: 'AI is everywhere, but scaling it is the real challenge. See the new findings from 1,400 marketers.',
    cta: 'Get the 2026 benchmarks',
    img: '/assets/eb-soaim-2026.png',
  },
  {
    title: 'How to Optimize Content for GEO and AEO in an AI-Native World',
    body: 'A practical guide for evolving your strategy to optimize for AI—with AI',
    cta: 'Download the Guide',
    img: '/assets/eb-aeo-geo.png',
  },
  {
    title: 'AI Search Optimization for B2C Marketers',
    body: 'A practical guide to GEO, AEO, and SEO for consumer brands',
    cta: 'Download your copy',
    img: '/assets/eb-b2c-search.png',
  },
  {
    title: 'Forrester: The Total Economic Impact™ of Jasper',
    body: 'Enterprises using Jasper achieved 342% ROI and $2.2M in annual time savings. Download to learn more.',
    cta: 'Download the Report',
    img: '/assets/eb-tei-report.png',
  },
  {
    title: 'Integrating AEO and SEO: Tactics for Improving Online Search Visibility',
    body: 'Discover how to integrate AEO and SEO for maximum online visibility.',
    cta: 'Download the Report',
    img: '/assets/eb-aeo-seo.png',
  },
  {
    title: 'Building a Scalable Content Pipeline with AI',
    body: 'A marketer\u2019s guide to scaling campaigns and evergreen content with speed, consistency, and control.',
    cta: 'Download your copy',
    img: '/assets/eb-content-pipeline.png',
  },
  {
    title: 'The State of AI in Marketing 2025',
    body: 'Empower your team with the AI trends, tactics, and technologies driving the next era of marketing',
    cta: 'Get the exclusive insights',
    img: '/assets/eb-soaim-2025.png',
  },
  {
    title: "A CMO's Guide to Responsible & Results-Driven AI in 2025",
    body: 'How to scale out an AI program and achieve meaningful outcomes',
    cta: 'Get your copy today!',
    img: '/assets/eb-cmo-guide.png',
  },
  {
    title: 'Scaling AI for the Enterprise',
    body: 'A playbook for marketing leaders',
    cta: 'Get your copy',
    img: '/assets/eb-scaling-ai.png',
  },
  {
    title: 'From RFP to ROI: How to Choose the Right AI Platform for Your Marketing Team',
    body: 'How to choose the right AI platform for your marketing team',
    cta: 'Get your copy today',
    img: '/assets/eb-rfp-to-roi.png',
  },
  {
    title: 'How to Pilot AI Content at your company',
    body: 'The steps necessary to pilot a generative AI content program at your company.',
    cta: 'Claim your copy today!',
    img: '/assets/eb-pilot-ai.png',
  },
]
const JASPER_MARK = '/assets/wb-jasper-square.svg'

export const WEBINARS = [
  {
    title: 'From Insight to Action: Why Marketers Need Agents to Win AI Search',
    date: 'September 10, 2026', time: 'September 10, 2026 12:00 PM', tz: 'EST',
    body: 'Jasper CMO Tom Newton sits down with Raakhi Agrawal and Robert Derow of BCG X to break down why you need agents—not just insight—to win AI search.',
    // The only card whose visible CTA on live is "Register Now" — it is the one
    // still-upcoming event. Every other card ships both anchors in the DOM but
    // paints "Watch the Replay".
    cta: 'Register Now',
    speakers: [
      { name: 'Raakhi Agrawal', role: 'Managing Director and Partner, BCG X', img: '/assets/sp-raakhi.jpeg', badge: '/assets/wb-bcg.svg' },
      { name: 'Robert Derow', role: 'Managing Director & Partner, BCG X', img: '/assets/sp-robert.webp', badge: '/assets/wb-bcg.svg' },
    ],
  },
  {
    title: 'Meet the GEO Agent: From Insight to Action, Automatically',
    date: 'August 13, 2026', time: 'August 13, 2026 12:00 PM', tz: 'EST',
    body: "GEO isn't one task. It's hundreds of them, repeated continuously as AI answers shift and competitors move—and a citation you win today is no guarantee you'll hold it next week.",
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Kurt Lambert', role: 'Senior GEO Strategy Manager, Jasper', img: '/assets/sp-kurt.jpeg', badge: JASPER_MARK },
      { name: 'Megan Johnson', role: 'Director, Product Strategy and Operations, Jasper', img: '/assets/sp-megan.jpeg', badge: JASPER_MARK },
    ],
  },
  {
    title: "AI Tools Don't Scale, Systems Do: Bonterra’s Approach to Content Orchestration",
    date: 'April 30, 2026', time: 'April 30, 2026 12:00 PM', tz: 'EST',
    body: 'Most marketing teams have solved content generation. The real challenge is orchestration: building repeatable AI systems that scale output, cut cycle times, and keep quality consistently on-brand.',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Neil Grasso', role: 'Customer Advocacy Marketing Manager, Bonterra', img: '/assets/sp-neil.jpg', badge: '/assets/wb-bonterra.jpg' },
      { name: 'Steve Kearns', role: 'Sr. Director, Customer Evangelism & Community-Led Growth, Jasper', img: '/assets/sp-steve.png', badge: JASPER_MARK },
    ],
  },
  {
    title: 'How iHeartMedia and Jasper Blended Human Voices with AI Efficiency',
    date: 'February 12, 2026', time: 'February 12, 2026 12:00 PM', tz: 'EST',
    body: 'Join HeartMedia and Jasper for a virtual behind-the-campaign conversation exploring how an AI-accelerated workflow helped bring a full funnel campaign to life, without losing the human storytelling at its core.',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Gayle Troberman', role: 'Executive Marketing Advisor, iHeartMedia', img: '/assets/sp-gayle.png' },
      { name: 'Rahul Sabnis', role: 'President & Chief Creative Officer, iHeartMedia', img: '/assets/sp-rahul.png' },
    ],
  },
  {
    title: 'The End of the AI Experiment: The Operational Era is Here',
    date: 'February 4, 2026', time: 'February 4, 2026 12:00 PM', tz: 'EST',
    body: 'Jasper CMO Loreal Lynch & CEO Timothy Young share a candid conversation on what the State of AI in Marketing 2026 report data says about marketing’s next evolution.',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Timothy Young', role: 'CEO, Jasper', img: '/assets/sp-timothy.png', badge: JASPER_MARK },
      { name: 'Loreal Lynch', role: '', img: '/assets/sp-loreal.png' },
    ],
  },
  {
    title: 'From Insight to Impact: Scaling SEO/AEO/GEO Content with Jasper',
    date: 'December 17, 2025', time: 'December 17, 2025 12:00 PM', tz: 'EST',
    body: 'Marketing teams are moving past experimentation, defining playbooks for scale. The most forward-thinking teams aren’t asking if AI works. They’re asking where it drives the biggest outcomes, and one area continues to rise to the top: SEO, AEO, & GEO.',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Daniel Su', role: 'Principal Product Manager, Jasper', img: '/assets/sp-daniel.jpeg', badge: JASPER_MARK },
      { name: 'Sara Mo Vanacht', role: 'Product Marketing Manager, Jasper', img: '/assets/sp-sara.jpeg', badge: JASPER_MARK },
    ],
  },
  {
    title: 'Unlocking People for AI Transformation: Change Management that Sticks',
    date: 'November 5, 2025', time: 'November 5, 2025 11:00 AM', tz: 'EST',
    body: 'A conversation from Jasper Assembly',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Alex Buder Shapiro', role: 'Prev.Chief People Officer, Jasper', img: '/assets/sp-alex.jpeg' },
      { name: 'Raakhi Agrawal', role: 'Managing Director and Partner, BCG X', img: '/assets/sp-raakhi.jpeg', badge: '/assets/wb-bcg.svg' },
    ],
  },
  {
    title: 'Guardrails for Greatness: Governing Content Quality at Scale',
    date: 'November 5, 2025', time: 'November 5, 2025 11:00 AM', tz: 'EST',
    body: 'A conversation from Jasper Assembly',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Esther Chung', role: 'Head of Communications and Content, Jasper', img: '/assets/sp-esther.png', badge: JASPER_MARK },
      { name: 'Madelene Glomsten', role: 'Head of Global Marketing Studio, Sanofi', img: '/assets/sp-madelene.jpeg' },
    ],
  },
  {
    title: 'From SEO to GEO: Winning in the New Era of Search and Discovery',
    date: 'November 4, 2025', time: 'November 4, 2025 11:00 AM', tz: 'EST',
    body: 'A conversation from Jasper Assembly',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Zach Anderson', role: 'CCO, Jasper', img: '/assets/sp-zach.png' },
      { name: 'Sara Mo Vanacht', role: 'Product Marketing Manager, Jasper', img: '/assets/sp-sara.jpeg', badge: JASPER_MARK },
    ],
  },
  {
    title: 'The Future of Content Pipelines: Scaling with Quality, Resonance, and Performance',
    date: 'November 4, 2025', time: 'November 4, 2025 11:00 AM', tz: 'EST',
    body: 'A conversation from Jasper Assembly',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Loreal Lynch', role: '', img: '/assets/sp-loreal.png' },
      { name: 'Bryan Tsao', role: 'Chief Product Officer, Jasper', img: '/assets/sp-bryan.png' },
    ],
  },
  {
    title: 'The ROI of Jasper: How AI-Powered Content Pipelines Unlock Marketing Transformation',
    date: 'October 2, 2025', time: 'October 2, 2025 12:00 PM', tz: 'EST',
    body: 'Discover the ROI of Jasper: Forrester Reveals New TEI Insights',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Lisa Gately', role: 'Principal Analyst, Forrester', img: '/assets/sp-lisa.jpg', badge: '/assets/wb-forrester.jpg' },
      { name: 'Loreal Lynch', role: '', img: '/assets/sp-loreal.png' },
    ],
  },
  {
    title: 'From SEO to GEO: The New Rules of Search, Discovery, and Strategy in the AI Era',
    date: 'September 10, 2025', time: 'September 10, 2025 11:00 AM', tz: 'EST',
    body: 'A seismic shift in search is here. Learn how generative AI is rewriting the rules of visibility, and why GEO and AEO represent the new frontier for modern marketers.',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Kyle Byers', role: 'Director of Growth Marketing, Semrush', img: '/assets/sp-kyle.jpeg', badge: '/assets/wb-semrush.jpg' },
      { name: 'Tom Newton', role: 'CMO, Jasper', img: '/assets/sp-tom.jpg', badge: JASPER_MARK },
    ],
  },
  {
    title: 'Reinvention in the age of AI with Patrick Schwarzenegger',
    date: 'June 19, 2025', time: 'June 19, 2025 3:00 PM', tz: 'EST',
    body: 'Discover how embracing new mindsets can unlock growth and elevate storytelling to extraordinary heights.',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Loreal Lynch', role: '', img: '/assets/sp-loreal.png' },
      { name: 'Patrick Schwarzenegger', role: 'Actor & Entrepreneur', img: '/assets/sp-patrick.png' },
    ],
  },
  {
    title: "LinkedIn's Steve Kearns on AI, Brand, and the B2B Marketer’s Moment",
    date: 'June 17, 2025', time: 'June 17, 2025 11:00 AM', tz: 'EST',
    body: "Live from the Jasper Cabana at Cannes Lions 2025, discover how AI and authentic brand building intersect in today's fast-paced B2B landscape.",
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Esther Chung', role: 'Head of Communications and Content, Jasper', img: '/assets/sp-esther.png', badge: JASPER_MARK },
      { name: 'Steve Kearns', role: 'Sr. Director, Customer Evangelism & Community-Led Growth, Jasper', img: '/assets/sp-steve.png', badge: JASPER_MARK },
    ],
  },
  {
    title: 'AI Meets Personalization, a Conversation with McKinsey in Cannes',
    date: 'June 16, 2025', time: 'June 16, 2025 11:00 AM', tz: 'EST',
    body: 'Explore how enterprise marketing teams are effectively driving personalization at scale with AI-powered strategies.',
    cta: 'Watch The Replay',
    speakers: [
      { name: 'Eli Stein', role: 'Partner at McKinsey & Company', img: '/assets/sp-eli.jpeg', badge: '/assets/wb-mckinsey.webp' },
      { name: 'Loreal Lynch', role: '', img: '/assets/sp-loreal.png' },
    ],
  },
]

export const CASE_STUDIES = [
  {
    company: 'BMC Software', stat: '2', img: '/assets/cs-bmc-new.png',
    body: "With Jasper as the platform where its tone, voice, audiences, and knowledge live in one place, BMC's marketing team is rebuilding content for a world where buyers start their research inside AI — keeping it on-brand, differentiated, and model-agnostic at scale.",
    caption: 'Restructured content for a two-audience world — readable by people and crawlable by AI models',
  },
  {
    company: 'EmeraldX', stat: '=', img: '/assets/cs-emerald-new.png',
    body: 'With Jasper, EmeraldX codifies its most experienced marketers’ judgment into agents, then uses those agents to govern its brand voice across a portfolio of trade shows and media brands to stay visible in AI search.',
    caption: 'Established brand- and style-guide governance through Audiences and Brand Voice',
  },
  {
    company: 'Bonterra', stat: '83%', img: '/assets/cs-bonterra-new.png',
    body: 'With Jasper, Bonterra’s customer marketing team automated high-volume review responses, standardized its brand voice, and reclaimed hours of time every week—freeing the team to focus on the high-touch advocacy work that actually moves the needle.',
    caption: 'time savings',
  },
  {
    company: 'iHeartMedia', stat: '1 day', img: '/assets/cs-iheart-new.svg',
    body: 'As the exclusive launch partner for Cardiac Cowboys, Jasper and iHeartMedia delivered the first AI-powered campaign under iHeart’s “Guaranteed Human” promise. Using Jasper’s platform, they scaled assets across broadcast, podcast, social, and live events—driving the year’s most successful binge-drop podcast launch.',
    caption: 'vs. weeks for development of a multi-platform campaign',
  },
  {
    company: 'Trusted Media Brands', stat: '37.5%', img: '/assets/cs-tmb-new.png',
    body: 'With Jasper, the TMB marketing team aimed to sustain scale while partnering closely with the sales organization to deepen connections with both audiences and advertisers, and to lay the foundation for its future state.',
    caption: 'increase in RFP responses YoY',
  },
  {
    company: 'Old Dominion Freight Line', stat: '↑', img: '/assets/cs-odfl-new.png',
    body: 'How one of the largest LTL carriers in the US scaled content creation, boosted SEO performance, and built customer trust with Jasper.',
    caption: 'increase in high-quality content creation',
  },
  {
    company: 'Webster First Federal Credit Union', stat: '9x', img: '/assets/cs-webster-new.svg',
    body: 'Discover how Webster First Federal Credit Union used Jasper to power 9x traffic growth and build a high-impact content marketing engine.',
    caption: 'growth in organic traffic',
  },
  {
    company: 'Savista', stat: '3', img: '/assets/cs-savista-new.png',
    body: 'See how Savista used Jasper to scale content creation, amplify executive voice, and build a high-performing content engine that positions them as an industry thought leader.',
    caption: 'weeks to launch new campaigns',
  },
  {
    company: 'WalkMe', stat: '3,000+', img: '/assets/cs-walkme-new.svg',
    body: 'WalkMe faced the desire to scale content creation and maintain brand consistency. Jasper empowered WalkMe to enhance their content creation process and spark ideation.',
    caption: 'hours saved in content creation time',
  },
  {
    company: 'VertoDigital', stat: '50%', img: '/assets/cs-verto-new.png',
    body: 'VertoDigital successfully overcame AI adoption hurdles, using Jasper to accelerate client growth and improve their content marketing strategy.',
    caption: 'faster time-to-market',
  },
  {
    company: 'Mongoose Media', stat: '166%', img: '/assets/cs-mongoose-new.png',
    body: 'Over six months, Mongoose Media, an Orlando-based digital marketing agency, wrote 40+ blog posts for a client’s site, something that CEO Lauren Petrullo says wouldn’t have been possible without Jasper.',
    caption: 'increase in organic traffic',
  },
  {
    company: 'MERGE', stat: '50%', img: '/assets/cs-merge-new.jpeg',
    body: 'MERGE has proven AI frees up time to focus on strategic thinking. Jasper empowers them to work smarter, faster, and more efficiently, ultimately driving better results for their clients.',
    caption: 'more time reinvested in research & ideation',
  },
  {
    company: 'Cushman & Wakefield', stat: '10,000+', img: '/assets/cs-cushman.png',
    body: 'With Jasper, Cushman & Wakefield saves thousands of hours creating content, allowing their team to focus on strategy and results.',
    caption: 'hours saved annually',
  },
  {
    company: 'Akbank', stat: '40%', img: '/assets/cs-akbank.svg',
    body: 'By leveraging generative AI, Akbank transformed their marketing strategy, ensuring consistency, engagement, and efficiency.',
    caption: 'reduction of time spent creating content',
  },
]
