/* ---------------------------------------------------------------------------
   /customer-stories CMS entries, captured verbatim from live jasper.ai at
   1440px (.scrape/cs2.json + .scrape/cs3.json, produced by deep2/deep7.mjs).

   Live renders 14 case-study cards: one 1360x453 featured card carrying a
   680x453 photo, then 13 in a 3-up 443px grid. The capture returned all 14 —
   the whole live collection, not a sample.

   Each card's foot is a two-part stat bar: a 70px-tall solid number chip
   beside a pale detail strip, both with ink text. Every live tint is an EXACT
   hex match for a token already in tailwind.config.js, so they are stored as
   class names rather than hexes:
     rgb(0,149,255)    blue-500     rgb(206,235,255)  blue-300
     rgb(181,169,227)  violet-500   rgb(231,227,247)  violet-400
     rgb(150,255,111)  green-500    rgb(210,255,193)  green-400
     rgb(250,117,96)   flame-500    rgb(255,179,163)  flame-400
   Three cards carry a bare glyph ("=", "2", the up arrow) where the others
   carry a number; the chip is identical either way, so they are not special-
   cased.
--------------------------------------------------------------------------- */

export const CUSTOMER_STORIES = [
  {
    "name": "bmcsoftware",
    "href": "/case-studies/bmcsoftware",
    "logo": "/assets/Logo_BMC_Software.png",
    "logoW": 76,
    "logoH": 32,
    "title": "How BMC Software Made Its Content Discoverable to Both Humans and AI — Without Losing Its Brand Voice",
    "body": null,
    "stat": "2",
    "statTint": "bg-blue-500",
    "detail": "Restructured content for a two-audience world — readable by people and crawlable by AI models",
    "detailTint": "bg-blue-300",
    "photo": {
      "src": "/assets/Jasper-x-BMC-Customer-Story-Header.png",
      "w": 680,
      "h": 453
    },
    "industry": "Software",
    "size": "Enterprise"
  },
  {
    "name": "bonterra",
    "href": "/case-studies/bonterra",
    "logo": "/assets/bonterra-logo-horizontal.png",
    "logoW": 128,
    "logoH": 32,
    "title": null,
    "body": "With Jasper, Bonterra’s customer marketing team automated high-volume review responses, standardized its brand voice, and reclaimed hours of time every week—freeing the team to focus on the high-touch advocacy work that actually moves the needle.",
    "stat": "83%",
    "statTint": "bg-violet-500",
    "detail": "time savings",
    "detailTint": "bg-violet-400",
    "photo": null,
    "industry": "Software",
    "size": "Enterprise"
  },
  {
    "name": "emeraldx",
    "href": "/case-studies/emeraldx",
    "logo": "/assets/Emerald-Logo-RGB.png",
    "logoW": 128,
    "logoH": 32,
    "title": null,
    "body": "With Jasper, EmeraldX codifies its most experienced marketers’ judgment into agents, then uses those agents to govern its brand voice across a portfolio of trade shows and media brands to stay visible in AI search.",
    "stat": "=",
    "statTint": "bg-green-500",
    "detail": "Established brand- and style-guide governance through Audiences and Brand Voice",
    "detailTint": "bg-green-400",
    "photo": null,
    "industry": "Publishing",
    "size": "Enterprise"
  },
  {
    "name": "iheartmedia",
    "href": "/case-studies/iheartmedia",
    "logo": "/assets/iHeart-New.svg",
    "logoW": 128,
    "logoH": 32,
    "title": null,
    "body": "As the exclusive launch partner for Cardiac Cowboys, Jasper and iHeartMedia delivered the first AI-powered campaign under iHeart’s “Guaranteed Human” promise. Using Jasper’s platform, they scaled assets across broadcast, podcast, social, and live events—driving the year’s most successful binge-drop podcast launch.",
    "stat": "1 day",
    "statTint": "bg-flame-500",
    "detail": "vs. weeks for development of a multi-platform campaign",
    "detailTint": "bg-flame-400",
    "photo": null,
    "industry": "Entertainment",
    "size": "Enterprise"
  },
  {
    "name": "trusted-media-brands",
    "href": "/case-studies/trusted-media-brands",
    "logo": "/assets/Trusted-Media-Brands-logo.png",
    "logoW": 65,
    "logoH": 32,
    "title": null,
    "body": "With Jasper, the TMB marketing team aimed to sustain scale while partnering closely with the sales organization to deepen connections with both audiences and advertisers, and to lay the foundation for its future state.",
    "stat": "37.5%",
    "statTint": "bg-green-500",
    "detail": "increase in RFP responses YoY",
    "detailTint": "bg-green-400",
    "photo": null,
    "industry": "Publishing",
    "size": "Enterprise"
  },
  {
    "name": "old-dominion-freight-line",
    "href": "/case-studies/old-dominion-freight-line",
    "logo": "/assets/fullcolorlogo-100x100.png",
    "logoW": 32,
    "logoH": 32,
    "title": null,
    "body": "How one of the largest LTL carriers in the US scaled content creation, boosted SEO performance, and built customer trust with Jasper.",
    "stat": "↑",
    "statTint": "bg-green-500",
    "detail": "increase in high-quality content creation",
    "detailTint": "bg-green-400",
    "photo": null,
    "industry": "Transportation",
    "size": "Mid-Market"
  },
  {
    "name": "cushman-wakefield",
    "href": "/case-studies/cushman-wakefield",
    "logo": "/assets/Cushman_-26_Wakefield_logo.svg.png",
    "logoW": 128,
    "logoH": 32,
    "title": null,
    "body": "With Jasper, Cushman & Wakefield saves thousands of hours creating content, allowing their team to focus on strategy and results.",
    "stat": "10,000+",
    "statTint": "bg-flame-500",
    "detail": "hours saved annually",
    "detailTint": "bg-flame-400",
    "photo": null,
    "industry": "Real Estate",
    "size": "Enterprise"
  },
  {
    "name": "vertodigital",
    "href": "/case-studies/vertodigital",
    "logo": "/assets/Group-201171280311.png",
    "logoW": 128,
    "logoH": 32,
    "title": null,
    "body": "VertoDigital successfully overcame AI adoption hurdles, using Jasper to accelerate client growth and improve their content marketing strategy.",
    "stat": "50%",
    "statTint": "bg-blue-500",
    "detail": "faster time-to-market",
    "detailTint": "bg-blue-300",
    "photo": null,
    "industry": "Agency",
    "size": "Mid-Market"
  },
  {
    "name": "savista",
    "href": "/case-studies/savista",
    "logo": "/assets/Savista-Logo-Gray.png",
    "logoW": 90,
    "logoH": 32,
    "title": null,
    "body": "See how Savista used Jasper to scale content creation, amplify executive voice, and build a high-performing content engine that positions them as an industry thought leader.",
    "stat": "3",
    "statTint": "bg-violet-500",
    "detail": "weeks to launch new campaigns",
    "detailTint": "bg-violet-400",
    "photo": null,
    "industry": "Healthcare",
    "size": "Mid-Market"
  },
  {
    "name": "webster-first-federal-credit-union",
    "href": "/case-studies/webster-first-federal-credit-union",
    "logo": "/assets/WF-Logo.svg",
    "logoW": 98,
    "logoH": 32,
    "title": null,
    "body": "Discover how Webster First Federal Credit Union used Jasper to power 9x traffic growth and build a high-impact content marketing engine.",
    "stat": "9x",
    "statTint": "bg-blue-500",
    "detail": "growth in organic traffic",
    "detailTint": "bg-blue-300",
    "photo": null,
    "industry": "Finance",
    "size": null
  },
  {
    "name": "mongoose-media",
    "href": "/case-studies/mongoose-media",
    "logo": "/assets/Mongoose-Brand-Building-Blocks_3.png",
    "logoW": 128,
    "logoH": 32,
    "title": null,
    "body": "Over six months, Mongoose Media, an Orlando-based digital marketing agency, wrote 40+ blog posts for a client’s site, something that CEO Lauren Petrullo says wouldn’t have been possible without Jasper.",
    "stat": "166%",
    "statTint": "bg-violet-500",
    "detail": "increase in organic traffic",
    "detailTint": "bg-violet-400",
    "photo": null,
    "industry": "Agency",
    "size": "Small Business"
  },
  {
    "name": "walkme",
    "href": "/case-studies/walkme",
    "logo": "/assets/WalkMe.svg",
    "logoW": 96,
    "logoH": 32,
    "title": null,
    "body": "WalkMe faced the desire to scale content creation and maintain brand consistency. Jasper empowered WalkMe to enhance their content creation process and spark ideation.",
    "stat": "3,000+",
    "statTint": "bg-blue-500",
    "detail": "hours saved in content creation time",
    "detailTint": "bg-blue-300",
    "photo": null,
    "industry": "Software",
    "size": "Enterprise"
  },
  {
    "name": "merge",
    "href": "/case-studies/merge",
    "logo": "/assets/MERGE_Logo.jpeg",
    "logoW": 61,
    "logoH": 32,
    "title": null,
    "body": "MERGE has proven AI frees up time to focus on strategic thinking. Jasper empowers them to work smarter, faster, and more efficiently, ultimately driving better results for their clients.",
    "stat": "50%",
    "statTint": "bg-violet-500",
    "detail": "more time reinvested in research & ideation",
    "detailTint": "bg-violet-400",
    "photo": null,
    "industry": "Agency",
    "size": "Enterprise"
  },
  {
    "name": "akbank",
    "href": "/case-studies/akbank",
    "logo": "/assets/Akbank.svg",
    "logoW": 128,
    "logoH": 32,
    "title": null,
    "body": "By leveraging generative AI, Akbank transformed their marketing strategy, ensuring consistency, engagement, and efficiency.",
    "stat": "40%",
    "statTint": "bg-flame-500",
    "detail": "reduction of time spent creating content",
    "detailTint": "bg-flame-400",
    "photo": null,
    "industry": "Finance",
    "size": "Enterprise"
  }
]
