/* ---------------------------------------------------------------------------
   The Agent Library card set shown on load by live /agents.

   Captured verbatim from the live collection list at 1440px: title, the
   32px icon (served from cdn.jasper.ai/icons, downloaded into /assets), the
   badges the card actually PAINTS, and the description. The live grid holds
   122 agents in total behind a "Load More" button; these are the 30 rendered
   before the first click, which is what the page height measures.

   `workflow` / `role` are left unset — live exposes those filters but the
   card markup does not expose which value each card carries, so the rail's
   filter groups narrow on search and the Business badge only.
--------------------------------------------------------------------------- */
export const AGENT_CARDS = [
  { title: 'Optimization', icon: '/assets/chart-breakout-square.svg', badges: ['Business', 'New'],
    desc: 'Consolidate SEO, AEO, and GEO strategies into one intelligent workflow. The Optimization Agent handles keyword research, competitive analysis, and content scoring—aligned with your Brand Voice and Knowledge Base.' },
  { title: 'Research', icon: '/assets/file-search.svg', badges: ['Business', 'New'],
    desc: 'Transform complex market research into comprehensive, cited reports in minutes. The Research Agent plans, researches, and analyzes across multiple sources—integrated with your Brand Voice, Knowledge Base, and more.' },
  { title: 'SEO/AEO/GEO Rewriter', icon: '/assets/magic-wand.svg', badges: ['New', 'Popular', 'Business'],
    desc: 'Boost visibility by optimizing content for AI answers and traditional search results' },
  { title: 'Translation', icon: '/assets/translate.svg', badges: ['Business', 'New'],
    desc: 'Translate marketing content into 27 languages with brand-accurate terminology, native fluency, and glossary enforcement — available in Canvas and Grid.' },
  { title: 'Competitor Audit', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Analyze a competitor\'s content to surface entity gaps and AI positioning risks' },
  { title: 'Competitive Response', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Turn a competitor\'s page into your brand\'s counter-narrative — structured, AEO-optimized content that owns the same topic on your terms.' },
  { title: 'Competitor Positioning', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Analyze how AI answer engines would likely describe and position a competitor based on their public content and entity signals.' },
  { title: 'AI Readiness Comparison', icon: '/assets/arrows-up.svg', badges: ['New', 'Popular'],
    desc: 'Score and compare your content\'s AEO/GEO readiness after optimization — with a detailed breakdown of what changed and why it matters for AI citation.' },
  { title: 'Gap Finder', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Identifies high-impact AEO/GEO content gaps by uncovering competitor-answered questions your brand is missing and prioritizing them for AI-driven search visibility.' },
  { title: 'Entity Mapper', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Audits a page for missing, relevant entities and automatically matches each suggestion to the best available link target from your site.' },
  { title: 'AI Readiness Score', icon: '/assets/check.svg', badges: ['New', 'Popular'],
    desc: 'Analyzes your content to determine how well it performs in AI-driven search and answer engines. Scores key factors like direct answer clarity, structure, and citation potential, then surfaces the highest-impact improvements to increase discoverability and attribution.' },
  { title: 'Fact Density Audit', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Uncover high-impact opportunities to add statistics and expert quotes that boost your content\'s authority and AI search visibility' },
  { title: 'Schema Markup', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Generate production-ready JSON-LD schema markup for any page of content, ready to be cited by AI answer engines.' },
  { title: 'Comparison Brief', icon: '/assets/arrows-up.svg', badges: ['New', 'Popular'],
    desc: 'Generate a brand-favorable, AEO/GEO-optimized competitor comparison brief structured for both human readers and AI answer engines.' },
  { title: 'Query Planner', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Generate and prioritize the AI search queries your brand should be targeting — ranked by opportunity, competitive difficulty, and citation potential.' },
  { title: 'Citable Claims', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Generate a set of crisp, standalone, AI-ready brand claims and factual assertions engineered to be cited by answer engines.' },
  { title: 'FAQ Generator', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Generates AI-optimized, answer-first FAQ content from real query data, structured for schema markup and designed to maximize citation in AI search engines.' },
  { title: 'Pillar Article', icon: '/assets/chart-breakout-square.svg', badges: ['New', 'Popular'],
    desc: 'Write long-form content that provides value, drives traffic, and enhances SEO/AEO/GEO' },
  { title: 'Blog Post', icon: '/assets/pen-tool.svg', badges: ['Popular'],
    desc: 'Write long-form content that provides value, drives traffic, and enhances SEO' },
  { title: 'Product Description', icon: '/assets/cube-01.svg', badges: ['Popular'],
    desc: 'Compose detailed descriptions that highlight the benefits and features of a product' },
  { title: 'Instagram Caption', icon: '/assets/camera-plus.svg', badges: ['Popular'],
    desc: 'Boost engagement with captions that perfectly accompany your Instagram images' },
  { title: 'Search Ad', icon: '/assets/search-md.svg', badges: ['Popular'],
    desc: 'Drive clicks and conversions by crafting concise, impactful search ad copy' },
  { title: 'Social Media Campaign', icon: '/assets/message-heart.svg', badges: ['Popular'],
    desc: 'Amplify your brand and engage followers with a cohesive social media campaign' },
  { title: 'Landing Page', icon: '/assets/globe-03.svg', badges: ['Popular'],
    desc: 'Transform site traffic into valuable leads through engaging landing pages' },
  { title: 'Email Sequence', icon: '/assets/mail-01.svg', badges: ['Popular'],
    desc: 'Guide customer journeys and boost conversions with a tailored email sequence' },
  { title: 'Campaign Brief', icon: '/assets/announcement-01.svg', badges: ['Popular'],
    desc: 'Draft a comprehensive plan with goals and deliverables for a marketing campaign' },
  { title: 'Facebook Post', icon: '/assets/thumbs-up.svg', badges: ['Popular'],
    desc: 'Foster engagement and amplify reach using engaging Facebook updates' },
  { title: 'Listicle', icon: '/assets/list.svg', badges: ['Popular'],
    desc: 'Write engaging listicles that deliver information in an easy-to-read format' },
  { title: 'Background Remover', icon: '/assets/contrast-01.svg', badges: ['Popular'],
    desc: 'Effortlessly remove backgrounds from any image' },
  { title: 'Meta Title and Description', icon: '/assets/bookmark-check.svg', badges: ['Popular'],
    desc: 'Improve your webpage\'s visibility with SEO-friendly meta titles and descriptions' },
]
