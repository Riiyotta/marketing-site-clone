/* ---------------------------------------------------------------------------
   /blog CMS entries, captured verbatim from live jasper.ai at 1440px
   (.scrape/leaves-blog.json, produced by .scrape/deep6.mjs).

   The live "All posts" grid renders its whole collection list up front; the
   capture walked it and returned 80 posts, which is exactly what BLOG_POSTS
   holds. Titles, summaries, dates, authors and hrefs are the live strings —
   none of it is invented. Every img is a downloaded copy of the live CDN
   asset, sitting in public/assets.

     FEATURED_POST   the 832px editorial_hero card (h2 54px, 832x468 art)
     POPULAR_POSTS   the 3-up "Popular posts" list beside it (h2 28px, no art)
     BLOG_POSTS      the 80-card blogs_list grid (h2 28px, 497x280 art)
--------------------------------------------------------------------------- */

export const FEATURED_POST = {
  "title": "9 AEO/GEO workflows for your new AI search team",
  "summary": "Build repeatable AEO/GEO workflows across content, PR and communications, and marketing ops to improve your brand’s visibility in AI search.",
  "date": "September 4, 2026",
  "author": "Jasper Marketing",
  "href": "/blog/aeo-geo-workflows",
  "img": "/assets/Blog_Build_Topic_Pillar_Pages.png"
}

export const POPULAR_POSTS = [
  {
    "title": "Jasper Webflow Integration: Publish GEO Agent Content Straight to Your Site",
    "summary": "Connect Webflow to Jasper and the GEO Agent can take an optimized page from recommendation to live, or to draft for review. Here is what changes and how to turn it on.",
    "date": "September 3",
    "author": "Jessica Kennedy",
    "href": "/blog/jasper-webflow"
  },
  {
    "title": "Introducing Product IQ",
    "summary": "One source of truth that ensures AI gets your products right.",
    "date": "August 24",
    "author": "Mason Johnson",
    "href": "/blog/introducing-product-iq"
  },
  {
    "title": "The Governance Gap Behind AI Slop",
    "summary": "As AI makes content generation nearly limitless, AI slop becomes a growing risk for brands without the governance systems to control it.",
    "date": "August 20",
    "author": "Mason Johnson",
    "href": "/blog/the-governance-gap-behind-ai-slop"
  }
]

export const BLOG_POSTS = [
  {
    "title": "Jasper Webflow Integration: Publish GEO Agent Content Straight to Your Site",
    "summary": "Connect Webflow to Jasper and the GEO Agent can take an optimized page from recommendation to live, or to draft for review. Here is what changes and how to turn it on.",
    "date": "September 3, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/jasper-webflow",
    "img": "/assets/Blog-Jasper-Webflow.png"
  },
  {
    "title": "Introducing Product IQ",
    "summary": "One source of truth that ensures AI gets your products right.",
    "date": "August 24, 2026",
    "author": "Mason Johnson",
    "href": "/blog/introducing-product-iq",
    "img": "/assets/Introducing-Product-IQ-p-1600.png"
  },
  {
    "title": "The Governance Gap Behind AI Slop",
    "summary": "As AI makes content generation nearly limitless, AI slop becomes a growing risk for brands without the governance systems to control it.",
    "date": "August 20, 2026",
    "author": "Mason Johnson",
    "href": "/blog/the-governance-gap-behind-ai-slop",
    "img": "/assets/Blog_Governance_Gap_Behind_AI_Slop-1.png"
  },
  {
    "title": "Jasper Google Search Console Integration: Ground Your GEO Agent in Real Search Data",
    "summary": "Connect Google Search Console to Jasper and your GEO Agent can see how pages actually perform in Google, then find where that traffic isn't translating into AI visibility.",
    "date": "August 19, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/jasper-google-search-console",
    "img": "/assets/Blog_Jasper_GSC-p-1600.png"
  },
  {
    "title": "Introducing the Jasper MCP Claude Connector",
    "summary": "Jasper is now in the Claude Connector Marketplace. Generate on-brand content grounded in your brand voice, audience, products and company knowledge, right inside Claude.",
    "date": "August 18, 2026",
    "author": "Tom Newton",
    "href": "/blog/jasper-mcp-claude-connector",
    "img": "/assets/Jasper-x-claude-Blog-Header-p-1600.png"
  },
  {
    "title": "How to Create Pillar Pages for AI Search Visibility",
    "summary": "Building pillar pages for AI search visibility requires question-driven structure, modular formatting, and demonstrated expertise that AI engines can extract and cite.",
    "date": "August 12, 2026",
    "author": "Mason Johnson",
    "href": "/blog/pillar-pages-ai-search",
    "img": "/assets/Blog_Build_Topic_Pillar_Pages.png"
  },
  {
    "title": "Jasper + Semrush: Give Your GEO Agent Live Search Data to Work From",
    "summary": "Connect Semrush to Jasper, and your GEO Agent grounds its recommendations in real keyword, competitive, and SERP data.",
    "date": "August 6, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/jasper-semrush",
    "img": "/assets/Jasper-x-semrush-p-1600.png"
  },
  {
    "title": "What’s New in July 2026",
    "summary": "Run AI Search as a System, Not a Sprint.",
    "date": "August 5, 2026",
    "author": "Mason Johnson",
    "href": "/blog/july-2026-product-update",
    "img": "/assets/July-2026-Header-p-1600.png"
  },
  {
    "title": "How To Use the Jasper × Wrike Integration",
    "summary": "The Jasper Wrike integration sends content from Jasper straight into Wrike as a task—either a new one or one your team is already working on.",
    "date": "July 29, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/jasper-wrike",
    "img": "/assets/ChatGPT-Image-Jul-29-2026-11_55_44-AM-p-1600.png"
  },
  {
    "title": "How to Use Jasper’s GEO and Brand Compliance Diagnostic Tools",
    "summary": "Jasper's free diagnostic tools give enterprise marketers the visibility they need to continuously govern and improve AI search visibility.",
    "date": "July 28, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/jasper-diagnostic-tools",
    "img": "/assets/Blog_Jasper_Diagnostic_Tools.png"
  },
  {
    "title": "How Executive Leaders Unlock Brand Authority on AI Search",
    "summary": "CMOs can turn executive expertise into a powerful driver of brand authority and visibility across AI search.",
    "date": "July 24, 2026",
    "author": "Tom Newton",
    "href": "/blog/executive-brand-authority-ai-search",
    "img": "/assets/18.png"
  },
  {
    "title": "How to Earn Citations Across Off-Domain AI Search Sources",
    "summary": "Learn how to earn citations across the publications, communities, review platforms, and other third-party sources shaping AI search results.",
    "date": "July 23, 2026",
    "author": "Jasper Marketing",
    "href": "/blog/off-domain-citations",
    "img": "/assets/How-to-Produce-Off-Domain-Content-that-AI-Engines-Actually-Cite.png"
  },
  {
    "title": "Why Generic AI Translation Fails Enterprise Marketing",
    "summary": "Leading teams go beyond generic translation tools that strip their brand voice, choosing purpose-built systems that enforce brand voice and quality at scale.",
    "date": "July 10, 2026",
    "author": "Sara Mo Vanacht",
    "href": "/blog/why-generic-ai-translation-fails-enterprise-marketing",
    "img": "/assets/Translation-Blog-Image.png"
  },
  {
    "title": "How to Create the Non-Commodity Content That Wins AI Search",
    "summary": "Google's AI Optimization Guide says non-commodity content wins AI Search. Here's how to actually produce it at scale for AEO and GEO.",
    "date": "July 9, 2026",
    "author": "Mason Johnson",
    "href": "/blog/non-commodity-content-ai-search",
    "img": "/assets/How-to-Create-Non-Commodity-Content-That-Wins-AI-Search-Header.png"
  },
  {
    "title": "What’s New in June 2026",
    "summary": "Close the Loop on AI Search",
    "date": "July 8, 2026",
    "author": "Mason Johnson",
    "href": "/blog/whats-new-in-june-2026",
    "img": "/assets/June-2026-Blog-Header-p-1600.png"
  },
  {
    "title": "Cannes 2026: We are in the third era of brand",
    "summary": "This year at Cannes, the most prevalent theme was how AI has redefined how brands are discovered and perceived—and what marketers need to do to stay in control of their message.",
    "date": "July 1, 2026",
    "author": "Timothy Young",
    "href": "/blog/cannes-reflections-2026",
    "img": "/assets/c193a4876faf12c52e3acbd4fdd158f7e914a6cb-p-1600.png"
  },
  {
    "title": "How To Use the Jasper + monday.com Integration: Close the Gap Between Generated and Shipped",
    "summary": "The Jasper monday.com integration exports on-brand content from Jasper directly to new or existing items in monday.com, keeping work moving while reducing manual overhead.",
    "date": "June 29, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/jasper-monday",
    "img": "/assets/Blog-Monday-1-p-1600.png"
  },
  {
    "title": "How To Use the Jasper + Asana Integration: Move Marketing Content From Draft to Done",
    "summary": "Send drafted content straight from Jasper into Asana—as a new task or one you are already working in—so it goes from creation to coordination to launch without the copy-paste tax.",
    "date": "June 25, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/jasper-asana-integration",
    "img": "/assets/Monochromatic-Asana-Logo.png"
  },
  {
    "title": "Jasper + Claude: Bringing Marketing Intelligence Into Your Workflow",
    "summary": "How Jasper and Claude work together to bring intelligence, governance, and brand context into marketing workflows at scale.",
    "date": "June 18, 2026",
    "author": "Dan Stephen",
    "href": "/blog/jasper-claude",
    "img": "/assets/Blog-Jasper-Claude-integration-1-p-1600.png"
  },
  {
    "title": "Introducing Jasper GEO Agent and GEO Hub: End-to-End AI Search Optimization",
    "summary": "Jasper's end-to-end system for turning AI search visibility into consistent, compounding brand authority.",
    "date": "June 16, 2026",
    "author": "Timothy Young",
    "href": "/blog/geo-agent-and-geo-hub",
    "img": "/assets/GEO-Launch-Blog.png"
  },
  {
    "title": "What’s New in May 2026",
    "summary": "Put Jasper where your marketing work already happens.",
    "date": "June 10, 2026",
    "author": "Mason Johnson",
    "href": "/blog/may-2026-product-update",
    "img": "/assets/Product-Updates-Carousel-A_compressed.png"
  },
  {
    "title": "5 Steps to Set Up Jasper IQ for AI Search Success",
    "summary": "A step-by-step guide to configuring Jasper IQ to win across AI search channels.",
    "date": "June 5, 2026",
    "author": "Mason Johnson",
    "href": "/blog/jasper-iq-for-ai-search",
    "img": "/assets/15.png"
  },
  {
    "title": "Monet Lowering the Barrier to World Class Image Generation Research",
    "summary": "Jasper Research releases MONET, the largest open text-image dataset (104.9M samples), plus nano-t2i, a codebase to train a competitive T2I model on a single GPU.",
    "date": "June 4, 2026",
    "author": "Damien Henry",
    "href": "/blog/monet",
    "img": "/assets/Monet.png"
  },
  {
    "title": "Google's Guide to AI Search: 5 Must-Know Takeaways for Marketers",
    "summary": "Actionable ways to win AI search, right from the source.",
    "date": "June 2, 2026",
    "author": "Jasper Marketing",
    "href": "/blog/googles-guide-to-ai-search",
    "img": "/assets/17-2x-p-1600.png"
  },
  {
    "title": "How to Use the Jasper Slack Agent",
    "summary": "Create on-brand content without leaving your workflow.",
    "date": "May 27, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/jasper-slack-agent",
    "img": "/assets/Monochromatic-Slack-Logo-2.png"
  },
  {
    "title": "Why Content Freshness Matters for AI Search Visibility (and How to Scale It in Jasper)",
    "summary": "Learn why content freshness is essential for AI search visibility and how to keep your content current in an intentional, scalable way.",
    "date": "May 21, 2026",
    "author": "Esther Chung",
    "href": "/blog/content-freshness-for-ai-search",
    "img": "/assets/content-freshness-header.png"
  },
  {
    "title": "3 Agentic Workflows Gaining AI Search Visibility Today (and How to Run Them in Jasper)",
    "summary": "Unlock new organic growth and strengthen your AI search visibility with Jasper’s scalable agentic workflows and Grid templates.",
    "date": "May 15, 2026",
    "author": "Mason Johnson",
    "href": "/blog/agentic-workflows-ai-search-visibility",
    "img": "/assets/13.png"
  },
  {
    "title": "What’s New in April 2026",
    "summary": "Win in AI search—and scale what works.",
    "date": "May 5, 2026",
    "author": "Mason Johnson",
    "href": "/blog/april-2026-product-update",
    "img": "/assets/Whats-new-april-2026-p-1600.png"
  },
  {
    "title": "Influence Engineering: The Next Mandate for Marketing Leaders",
    "summary": "Content engineering creates scale. Influence engineering creates authority.",
    "date": "April 29, 2026",
    "author": "Loreal Lynch",
    "href": "/blog/influence-engineering",
    "img": "/assets/influence-engineering-blog-p-1600.jpg"
  },
  {
    "title": "Native RGBA Object Removal with Jasper Cleanup v3.0",
    "summary": "Cleanup v3.0 delivers real-time, artifact-free object removal for transparent RGBA images via a seamless API integration.",
    "date": "April 28, 2026",
    "author": "Damien Henry",
    "href": "/blog/native-rgba-object-removal",
    "img": "/assets/Clipdrop-Uncrop-RGBA-v3-Cleanup-p-1600.png"
  },
  {
    "title": "Why Brand Consistency is So Important for AI Search Discovery",
    "summary": "How to stand out and be the answer in AI search.",
    "date": "April 27, 2026",
    "author": "Megan Dubin",
    "href": "/blog/brand-consistency",
    "img": "/assets/Brand-Consistency-A-p-1600.png"
  },
  {
    "title": "How To Use Jasper's Knowledge Base Connectors",
    "summary": "Keep your AI agents aligned with your source of truth.",
    "date": "April 22, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/knowledge-base-connectors",
    "img": "/assets/Knowledge-Base-Connectors-blog.png"
  },
  {
    "title": "Navigating the Shift from Prompting AI to Goal-Driven Agents",
    "summary": "As AI agents evolve marketing from task-based assistance to goal-oriented systems, embedding governance at every layer has become mission-critical.",
    "date": "April 21, 2026",
    "author": "Bryan Tsao",
    "href": "/blog/goal-driven-agents",
    "img": "/assets/goal-driven-agents-blog-p-1600.png"
  },
  {
    "title": "What is Generative Engine Optimization? GEO vs AEO vs SEO Guide 2026",
    "summary": "Learn how generative engine optimization (GEO) and answer engine optimization (AEO) help your content get cited by AI search engines like ChatGPT, Perplexity, and Google AI Overviews.",
    "date": "April 17, 2026",
    "author": "Megan Dubin",
    "href": "/blog/geo-aeo",
    "img": "/assets/What-is-GEO-p-1600.png"
  },
  {
    "title": "Digital Marketing’s New Operating Model",
    "summary": "Featured leaders from Forrester, Samsara, and Blue Yonder share how AI is changing websites, channel strategy, brand building, and marketing operations.",
    "date": "April 16, 2026",
    "author": "Megan Dubin",
    "href": "/blog/ai-digital-marketing",
    "img": "/assets/blog-Digital-Marketing-s-New-Operating-Model-p-1600.png"
  },
  {
    "title": "The #1 Role You Should Hire in 2026 Is a Content Engineer",
    "summary": "Content engineering builds the systems that become the foundation for influence in the AI era.",
    "date": "April 1, 2026",
    "author": "Loreal Lynch",
    "href": "/blog/content-engineer-role",
    "img": "/assets/hire-content-engineer-role-p-1600.jpg"
  },
  {
    "title": "How To Use the Jasper × Adobe Workfront Integration",
    "summary": "Send finished content from Jasper directly into Adobe Workfront, as a link, attached file, or cloud copy, so work moves from creation to approval without stalling in handoffs.",
    "date": "March 31, 2026",
    "author": "Jessica Kennedy",
    "href": "/blog/adobe-workfront-integration",
    "img": "/assets/jasper-x-adobe-workfront-integration-p-1600.png"
  },
  {
    "title": "Why CMOs and ICs See AI So Differently",
    "summary": "AI success looks different at the top and bottom of the org chart. Here’s what you can do to close the gap.",
    "date": "March 5, 2026",
    "author": "Megan Dubin",
    "href": "/blog/cmos-ics-ai",
    "img": "/assets/blog-CMOs-ICs-AI-p-1600.jpg"
  },
  {
    "title": "AI is Changing Marketing Roles (and That’s a Good Thing)",
    "summary": "Marketing roles are being disrupted by AI, but structured change is leading to clearer ownership and happier teams.",
    "date": "March 4, 2026",
    "author": "Megan Dubin",
    "href": "/blog/ai-marketing-roles",
    "img": "/assets/Blog-header-AI-is-changing-marketing-roles-p-1600.png"
  },
  {
    "title": "Jasper Named HyperCUBEd Innovation Award Winner in 2026 Tech Innovation CUBEd Awards",
    "summary": "The award recognizes companies that lead the market with bold ideas and measurable results.",
    "date": "February 24, 2026",
    "author": "Jasper Marketing",
    "href": "/blog/hypercubed-innovation-award",
    "img": "/assets/HyperCUBEd-blog-C-p-1600.png"
  },
  {
    "title": "AI Maturity Is the Strongest Predictor of Impact in 2026",
    "summary": "The most advanced marketing teams have cracked the code on AI scalability, governance, and ROI measurement.",
    "date": "February 18, 2026",
    "author": "Jasper Marketing",
    "href": "/blog/ai-maturity-2026",
    "img": "/assets/Blog-Header-A-5-p-1600.png"
  },
  {
    "title": "What’s New in January 2026",
    "summary": "Advancing how marketing teams create, optimize, and deliver content.",
    "date": "February 4, 2026",
    "author": "Mason Johnson",
    "href": "/blog/january-2026-product-update",
    "img": "/assets/January-product-update-p-1600.png"
  },
  {
    "title": "AI Content Creation: How It Works, Tools & Best Practices (2026)",
    "summary": "AI content creation uses artificial intelligence to plan, write, repurpose, and optimize content at scale. Learn how it works, the best tools, and how teams are using it to move faster without sacrificing quality.",
    "date": "February 2, 2026",
    "author": "Jasper Marketing",
    "href": "/blog/ai-content-creation",
    "img": "/assets/Small-20Thumbnail-2071.png"
  },
  {
    "title": "New Research: The State of AI in Marketing 2026",
    "summary": "Trends from 1,400 marketers defining the operational era of AI.",
    "date": "January 28, 2026",
    "author": "Jasper Marketing",
    "href": "/blog/state-of-ai-marketing-2026",
    "img": "/assets/SOAI-Blog-Header.png"
  },
  {
    "title": "The Future of B2C Search Isn’t Keywords: Preparing for AI-Driven Discovery in 2026",
    "summary": "Discover how B2C brands can win AI search in 2026 with AEO/GEO, trust signals, and structured content for Google, ChatGPT, Perplexity, and Amazon.",
    "date": "January 7, 2026",
    "author": "Megan Dubin",
    "href": "/blog/future-b2c-ai-search",
    "img": "/assets/futureofb2c.png"
  },
  {
    "title": "3 Ways to Optimize for Search at Scale in Jasper",
    "summary": "Learn how Jasper helps enterprise marketing teams optimize for traditional and AI search at scale.",
    "date": "December 22, 2025",
    "author": "Mason Johnson",
    "href": "/blog/optimize-search-at-scale",
    "img": "/assets/Jasper-search-use-cases-blog.png"
  },
  {
    "title": "Three Use Cases for Personalization at Scale with Jasper",
    "summary": "How Jasper Agents power personalization at scale through outreach, campaigns, and strategic initiatives.",
    "date": "December 22, 2025",
    "author": "Megan Dubin",
    "href": "/blog/personalization-at-scale",
    "img": "/assets/personalization-blog-header-p-1600.png"
  },
  {
    "title": "Jasper in Review: How Marketers Used Jasper in 2025",
    "summary": "Discover how marketers used Jasper in 2025 with 76M+ generations, millions of campaigns launched, and custom apps transforming daily operations.",
    "date": "December 18, 2025",
    "author": "David Pan",
    "href": "/blog/jasper-in-review",
    "img": "/assets/wrappedblog-p-1600.png"
  },
  {
    "title": "Measuring the ROI of Marketing AI",
    "summary": "A clear value framework to stop reporting on usage and start measuring outcomes.",
    "date": "December 15, 2025",
    "author": "Joyce Yi",
    "href": "/blog/measuring-roi-ai",
    "img": "/assets/measuring-AI-ROI-p-1600.png"
  },
  {
    "title": "Gemini 3 Pro in 24 Hours: Inside Jasper’s LLM-Optimized Architecture",
    "summary": "How does Jasper validate new AI models like Gemini 3 Pro in under 24 hours? Inside our rigorous 3-step testing process for enterprise marketing.",
    "date": "December 4, 2025",
    "author": "Nick Hough",
    "href": "/blog/llm-optimized-architecture",
    "img": "/assets/Blog-header_LLM-optimized-architecture.png"
  },
  {
    "title": "3 Predictions for AI in Marketing in 2026",
    "summary": "In 2026, AI will rewire teams, streamline tooling, and turn content into a competitive engine.",
    "date": "December 2, 2025",
    "author": "Loreal Lynch",
    "href": "/blog/predictions-ai-marketing-2026",
    "img": "/assets/3-predictions-for-AI-in-marketing-in-2026_B.png"
  },
  {
    "title": "Highlights from Jasper Assembly: Scaling Content with Confidence",
    "summary": "Discover key insights from Jasper Assembly 2025. Leaders from Sanofi, NetApp, U.S. Bank, and BCG shared AI marketing strategies for scaling content and driving impact.",
    "date": "November 19, 2025",
    "author": "Loreal Lynch",
    "href": "/blog/highlights-from-jasper-assembly",
    "img": "/assets/Blog-Header-B-1-.png"
  },
  {
    "title": "Automating Content Pipelines with Jasper Grid",
    "summary": "Transform content creation with Jasper Grid’s no-code automation. Scale quality content across channels while maintaining brand consistency.",
    "date": "October 28, 2025",
    "author": "Loreal Lynch",
    "href": "/blog/jasper-grid",
    "img": "/assets/Blog-Hero-Grid-and-Content-Pipelines-p-1600.jpg"
  },
  {
    "title": "Jasper is Now Available on Salesforce AppExchange",
    "summary": "Discover how the Jasper and Salesforce Marketing Cloud integration helps enterprise teams generate, personalize, and optimize on-brand content at scale, directly within your existing workflows.",
    "date": "October 22, 2025",
    "author": "Jasper Marketing",
    "href": "/blog/salesforce-marketing-cloud-integration",
    "img": "/assets/Jasper-integrates-with-Salesforce-Marketing-Cloud.png"
  },
  {
    "title": "Jasper and Braze Integrate to Accelerate On-Brand Campaigns",
    "summary": "Jasper and Braze have joined forces to bring AI-powered content creation directly into cross-channel marketing workflows.",
    "date": "October 22, 2025",
    "author": "Jasper Marketing",
    "href": "/blog/braze-integration",
    "img": "/assets/jasperbraze-1-.png"
  },
  {
    "title": "Jasper Powers the Marketing Campaign Creation Behind iHeartMedia's \"Cardiac Cowboys\" Podcast",
    "summary": "Jasper is proud to sponsor \"Cardiac Cowboys,\" a new podcast series from iHeartMedia and OSO Studios. Discover how our AI marketing content automation platform helped connect this incredible story with audiences.",
    "date": "October 14, 2025",
    "author": "Jasper Marketing",
    "href": "/blog/jasper-powers-podcast-marketing-campaign",
    "img": "/assets/cardiac-cowboys-blog.png"
  },
  {
    "title": "Steve Kearns Joins Jasper as Head of Customer Evangelism & Community-Led Growth",
    "summary": "Jasper welcomes Steve Kearns, an industry leader in AI-powered content strategy and Jasper power user turned advocate for our customer community.",
    "date": "September 30, 2025",
    "author": "Jasper",
    "href": "/blog/steve-kearns-joins-jasper",
    "img": "/assets/SteveKearns-BlogHeader-Announcement.png"
  },
  {
    "title": "The Most Common AEO and GEO Questions, Answered",
    "summary": "An FAQ about adapting your SEO strategy for AI. Get answers to your top questions about answer engine optimization (AEO) and generative engine optimization (GEO).",
    "date": "September 26, 2025",
    "author": "Megan Dubin",
    "href": "/blog/common-aeo-geo-questions",
    "img": "/assets/GEO-AEO-FAQ-p-1600.jpg"
  },
  {
    "title": "The Hidden Power of Image APIs in Enterprise Workflows",
    "summary": "Discover how Jasper's Images APIs can act as core infrastructure for enterprises, enabling scalability, low latency, and reliability for content workflows.",
    "date": "September 25, 2025",
    "author": "Damien Henry",
    "href": "/blog/image-apis",
    "img": "/assets/images-api.png"
  },
  {
    "title": "How Jasper Helped Old Dominion Freight Line Scale Expert Content",
    "summary": "Old Dominion Freight Line Marketing VP Dick Podiak shares how Jasper has transformed their content scalability, brand trust, and AI search performance.",
    "date": "September 10, 2025",
    "author": "Megan Dubin",
    "href": "/blog/old-dominion-freight-line",
    "img": "/assets/ODFL-Blog-Hero-min.png"
  },
  {
    "title": "Forrester TEI Study Finds Measurable ROI and Business Impact with Jasper",
    "summary": "The Forrester Total Economic Impact™ of Jasper study reveals 342% ROI and $2.2M in annual time savings for Jasper customers.",
    "date": "September 10, 2025",
    "author": "Loreal Lynch",
    "href": "/blog/forrester-tei-study-roi",
    "img": "/assets/Forrester-TEI-min-p-1600.png"
  },
  {
    "title": "The Rise of the Content Engineer: Redefining Marketing in the Next Era",
    "summary": "Content engineering is critical for the future of how teams build and scale brand-safe content.",
    "date": "September 2, 2025",
    "author": "Loreal Lynch",
    "href": "/blog/content-engineer",
    "img": "/assets/Blog_Content-Engineer-min.png"
  },
  {
    "title": "How I Used Jasper to Create the State of AI in Marketing 2025 Report",
    "summary": "From draft to market in record time, thanks to Jasper.",
    "date": "September 2, 2025",
    "author": "Esther Chung",
    "href": "/blog/how-i-used-jasper-state-of-ai-report",
    "img": "/assets/How-I-Used-Jasper-to-Create-the-State-of-AI-in-Marketing-202.png"
  },
  {
    "title": "How Leading Retailers Are Using AI to Scale with Precision",
    "summary": "See how Anthropologie, Adidas, and Wayfair use AI to scale SEO, content, and campaigns while keeping strategy and brand consistency in focus.",
    "date": "August 26, 2025",
    "author": "Megan Dubin",
    "href": "/blog/retailers-ai-scale",
    "img": "/assets/Blog-How-Leading-Retailers-Are-Using-AI-to-Scale-with-Precision-2-.png"
  },
  {
    "title": "Running Seamless Marketing Launches and Events with Jasper",
    "summary": "Discover how Jasper streamlines enterprise launches from ideation to post-launch optimization, driving faster time-to-market and maximum marketing ROI.",
    "date": "August 14, 2025",
    "author": "Megan Dubin",
    "href": "/blog/marketing-launches-events",
    "img": "/assets/running-seamless-launches-and-events.png"
  },
  {
    "title": "How to Quantify Marketing AI Skills Across Your Professional Presence (with Examples)",
    "summary": "Marketers need to show not just that they’ve used AI, but that they’ve achieved measurable results. Here’s how.",
    "date": "August 12, 2025",
    "author": "Laura Granahan",
    "href": "/blog/quantify-marketing-ai-skills",
    "img": "/assets/Quantifying-AI-A-p-1600.jpg"
  },
  {
    "title": "McKinsey on the Future of Personalization",
    "summary": "Eli Stein, Partner at McKinsey, breaks down why true personalization was stuck in “Mad Libs” mode, how AI shifts the paradigm, and what it takes to build full‑journey personalization at scale.",
    "date": "August 4, 2025",
    "author": "Megan Dubin",
    "href": "/blog/mckinsey-on-personalization",
    "img": "/assets/Q-A-McKinsey-p-1600.png"
  },
  {
    "title": "What Is ChatGPT? Horizontal vs. Purpose-Built AI",
    "summary": "What is ChatGPT and how does it differ from purpose-built AI? Learn the key distinctions for enterprise marketers focused on security, brand voice, and ROI.",
    "date": "August 1, 2025",
    "author": "Jasper Marketing",
    "href": "/blog/what-is-chatgpt-real-life-applications",
    "img": "/assets/what-is-chatgpt.png"
  },
  {
    "title": "Jasper Pixel-Perfect Imagery: Driving Advantage for Enterprise Marketers",
    "summary": "Learn how Jasper delivers scalability and precision in visual content generation not achievable with generic AI alternatives.",
    "date": "July 31, 2025",
    "author": "Damien Henry",
    "href": "/blog/pixel-perfect-imagery",
    "img": "/assets/Blog-Pixel-Perfect.png"
  },
  {
    "title": "LinkedIn's Steve Kearns on AI, Brand, and the B2B Marketer’s Moment",
    "summary": "Steve Kearns, Global Head of Content at LinkedIn Ads, shares how AI has brought human connection even further to the forefront for B2B marketing.",
    "date": "July 28, 2025",
    "author": "Esther Chung",
    "href": "/blog/linkedin-on-ai-brand-b2b-marketers",
    "img": "/assets/LinkedIn-Q-A-p-1600.png"
  },
  {
    "title": "Legal Rulings on AI Fair Use and What it Means for Jasper",
    "summary": "Takeaways from recent court decisions on AI training and usage as they relate to implications for Jasper in the future.",
    "date": "July 18, 2025",
    "author": "Jasper Marketing",
    "href": "/blog/legal-rulings-ai-fair-use",
    "img": "/assets/AI-Legal-Rulings-Blog-Header-A-p-1600.jpg"
  },
  {
    "title": "6 Kinds of AI Writers’ Tools for Marketers in 2026",
    "summary": "Discover six types of AI writers' tools that optimize the content lifecycle and why a central content automation platform is the best way to adopt them.",
    "date": "July 15, 2025",
    "author": "Jasper Marketing",
    "href": "/blog/writers-tools",
    "img": "/assets/AI-writers-tools-blog.png"
  },
  {
    "title": "How to Accelerate Content with AI Reword Generators",
    "summary": "Learn how AI rewording generator tools reduce friction in the writing process and power more seamless marketing content creation.",
    "date": "July 15, 2025",
    "author": "Jasper Marketing",
    "href": "/blog/reword-generator",
    "img": "/assets/accelerate-content-AI-reword-generators-blog.png"
  },
  {
    "title": "Scaling AI for the Enterprise: How Marketing Leaders Drive Impact",
    "summary": "High-performing marketing teams are scaling AI with structure and strategy. Learn how CMOs can lead the way to drive organization-wide impact.",
    "date": "July 1, 2025",
    "author": "Megan Dubin",
    "href": "/blog/scaling-ai-enterprise",
    "img": "/assets/OpenGraph-Scaling-AI-for-the-Enterprise.webp"
  },
  {
    "title": "How AI is Reshaping SEO for the Next Era of Search",
    "summary": "Explore how AI capabilities are transforming online search, how it's impacting the user experience, and actionable ways for marketers to keep pace with the change.",
    "date": "June 26, 2025",
    "author": "Megan Dubin",
    "href": "/blog/ai-for-seo",
    "img": "/assets/AI-and-SEO.png"
  },
  {
    "title": "How to Create Personal Bios for Content Authors That Support SEO and GEO",
    "summary": "Discover how personal bios for content authors enhance SEO by building trust and showcasing expertise.",
    "date": "June 24, 2025",
    "author": "Megan Dubin",
    "href": "/blog/personal-bio-examples",
    "img": "/assets/Jasper_2025-06-23T20-3A16-3A22.149Z_upscaled-p-1600.webp"
  },
  {
    "title": "Reflections from Cannes: Why Brand and People Still Matter Most in the Era of AI",
    "summary": "At Cannes Lions 2025, one truth stood out: brand, trust, and authenticity are making a powerful comeback.",
    "date": "June 24, 2025",
    "author": "Loreal Lynch",
    "href": "/blog/reflections-from-cannes",
    "img": "/assets/Cannes-thumbnail.jpg"
  },
  {
    "title": "5 Video Script Templates for Impactful Enterprise Marketing",
    "summary": "Discover 5 video script templates to create impactful content that boosts engagement.",
    "date": "June 23, 2025",
    "author": "Jasper Marketing",
    "href": "/blog/video-script-templates",
    "img": "/assets/video-script-templates-p-1600.webp"
  },
  {
    "title": "Building a Robust AI-driven Content Strategy for Enterprise Success",
    "summary": "Discover how enterprises can use AI for content marketing, market research, and automation to boost ROI and efficiency.",
    "date": "June 23, 2025",
    "author": "Jasper Marketing",
    "href": "/blog/ai-content-strategy",
    "img": "/assets/AI-content-strategy-p-1600.webp"
  },
  {
    "title": "Interactive Tool: Benchmark Your AI in Marketing Strategy",
    "summary": "Discover your marketing team's AI maturity. Benchmark your strategy, compare with peers, and uncover gaps with an interactive tool.",
    "date": "June 17, 2025",
    "author": "Megan Dubin",
    "href": "/blog/ai-benchmark-tool",
    "img": "/assets/benchmarking-tool.png"
  }
]
