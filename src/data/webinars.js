/* ---------------------------------------------------------------------------
   /webinars CMS entries, captured verbatim from live jasper.ai at 1440px
   (.scrape/leaves-webinars.json, produced by .scrape/deep6.mjs).

   The live page renders three collection lists. The capture returned every
   item of each; the counts below are the live counts, not a sample:
     FEATURED_WEBINARS  3   the "Featured Webinars" list beside the hero card
     UPCOMING_WEBINARS  1   the flame-400 "Upcoming webinars" band (Register Now)
     PAST_WEBINARS     36   "All past webinars & replays" (Watch the Replay)

   Four speakers carry `role: null` — the live DOM genuinely has no title text
   for them (an empty role slot in the CMS entry), so the row renders name-only
   rather than repeating the card's CTA label, which is what sat in that slot.

   Each speaker carries their OWN badge, not the card's: a BCG X guest keeps
   the BCG mark while the Jasper host keeps the Jasper square, so two speakers
   on one row differ. Portraits render at 104px; live serves 147px / 205px
   sources, downloaded into public/assets.
--------------------------------------------------------------------------- */

export const FEATURED_WEBINARS = [
  {
    "title": "Meet the GEO Agent: From Insight to Action, Automatically",
    "date": "August 13, 2026",
    "href": "/webinars/meet-the-geo-agent-from-insight-to-action-automatically",
    "cta": "Watch the Replay"
  },
  {
    "title": "How iHeartMedia and Jasper Blended Human Voices with AI Efficiency",
    "date": "February 12, 2026",
    "href": "/webinars/how-iheartmedia-and-jasper-blended-human-voices-with-ai-efficiency",
    "cta": "Watch the Replay"
  },
  {
    "title": "From Insight to Impact: Scaling SEO/AEO/GEO Content with Jasper",
    "date": "December 17, 2025",
    "href": "/webinars/scaling-seo-aeo-geo-content-with-jasper",
    "cta": "Watch the Replay"
  }
]

export const UPCOMING_WEBINARS = [
  {
    "title": "From Insight to Action: Why Marketers Need Agents to Win AI Search",
    "date": "September 10, 2026 12:00 PM",
    "tz": "EST",
    "summary": "Jasper CMO Tom Newton sits down with Raakhi Agrawal and Robert Derow of BCG X to break down why you need agents—not just insight—to win AI search.",
    "cta": "Watch the Replay",
    "href": "/webinars/why-marketers-need-agents-to-win-ai-search",
    "speakers": [
      {
        "name": "Raakhi Agrawal",
        "role": "Managing Director and Partner, BCG X",
        "img": "/assets/Raakhi-Agrawal.jpeg",
        "badge": "/assets/bcg-square-light.svg"
      },
      {
        "name": "Robert Derow",
        "role": "Managing Director & Partner, BCG X",
        "img": "/assets/web-assets.bcg2.webp",
        "badge": "/assets/bcg-square-light.svg"
      },
      {
        "name": "Tom Newton",
        "role": "CMO, Jasper",
        "img": "/assets/TomHeadshot-square.jpg",
        "badge": "/assets/Webclip.png"
      }
    ]
  }
]

export const PAST_WEBINARS = [
  {
    "title": "Meet the GEO Agent: From Insight to Action, Automatically",
    "date": "August 13, 2026",
    "tz": null,
    "summary": "GEO isn't one task. It's hundreds of them, repeated continuously as AI answers shift and competitors move—and a citation you win today is no guarantee you'll hold it next week.",
    "cta": "Watch the Replay",
    "href": "/webinars/meet-the-geo-agent-from-insight-to-action-automatically",
    "speakers": [
      {
        "name": "Kurt Lambert",
        "role": "Senior GEO Strategy Manager, Jasper",
        "img": "/assets/1655742980265.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Megan Johnson",
        "role": "Director, Product Strategy and Operations, Jasper",
        "img": "/assets/1774578974399.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Mason Johnson",
        "role": "Technical Product Marketing Manager",
        "img": "/assets/Mason-Johnson.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      }
    ]
  },
  {
    "title": "AI Tools Don't Scale, Systems Do: Bonterra’s Approach to Content Orchestration",
    "date": "April 30, 2026",
    "tz": null,
    "summary": "Most marketing teams have solved content generation. The real challenge is orchestration: building repeatable AI systems that scale output, cut cycle times, and keep quality consistently on-brand.",
    "cta": "Watch the Replay",
    "href": "/webinars/ai-tools-dont-scale-systems-do-bonterras-approach-to-content-orchestration",
    "speakers": [
      {
        "name": "Neil Grasso",
        "role": "Customer Advocacy Marketing Manager, Bonterra",
        "img": "/assets/1664288274034.jpg",
        "badge": "/assets/bonterra_tech_logo.jpg"
      },
      {
        "name": "Steve Kearns",
        "role": "Sr. Director, Customer Evangelism & Community-Led Growth, Jasper",
        "img": "/assets/Screenshot-2026-04-15-at-3.46.04-PM.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Sara Mo Vanacht",
        "role": "Product Marketing Manager, Jasper",
        "img": "/assets/Sara-Mo-Vanacht.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      }
    ]
  },
  {
    "title": "How iHeartMedia and Jasper Blended Human Voices with AI Efficiency",
    "date": "February 12, 2026",
    "tz": null,
    "summary": "Join HeartMedia and Jasper for a virtual behind-the-campaign conversation exploring how an AI-accelerated workflow helped bring a full funnel campaign to life, without losing the human storytelling at its core.",
    "cta": "Watch the Replay",
    "href": "/webinars/how-iheartmedia-and-jasper-blended-human-voices-with-ai-efficiency",
    "speakers": [
      {
        "name": "Gayle Troberman",
        "role": "Executive Marketing Advisor, iHeartMedia",
        "img": "/assets/Gayle-Troberman.png",
        "badge": null
      },
      {
        "name": "Rahul Sabnis",
        "role": "President & Chief Creative Officer, iHeartMedia",
        "img": "/assets/Rahul-Sabnis.png",
        "badge": null
      }
    ]
  },
  {
    "title": "The End of the AI Experiment: The Operational Era is Here",
    "date": "February 4, 2026",
    "tz": null,
    "summary": "Jasper CMO Loreal Lynch & CEO Timothy Young share a candid conversation on what the State of AI in Marketing 2026 report data says about marketing’s next evolution.",
    "cta": "Watch the Replay",
    "href": "/webinars/the-end-of-the-ai-experiment-the-operational-era-is-here",
    "speakers": [
      {
        "name": "Timothy Young",
        "role": "CEO, Jasper",
        "img": "/assets/Timothy-Young-1-.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Loreal Lynch",
        "role": null,
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": null
      }
    ]
  },
  {
    "title": "From Insight to Impact: Scaling SEO/AEO/GEO Content with Jasper",
    "date": "December 17, 2025",
    "tz": null,
    "summary": "Marketing teams are moving past experimentation, defining playbooks for scale. The most forward-thinking teams aren’t asking if AI works. They’re asking where it drives the biggest outcomes, and one area continues to rise to the top: SEO, AEO, & GEO.",
    "cta": "Watch the Replay",
    "href": "/webinars/scaling-seo-aeo-geo-content-with-jasper",
    "speakers": [
      {
        "name": "Daniel Su",
        "role": "Principal Product Manager, Jasper",
        "img": "/assets/Daniel-Su.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Sara Mo Vanacht",
        "role": "Product Marketing Manager, Jasper",
        "img": "/assets/Sara-Mo-Vanacht.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      }
    ]
  },
  {
    "title": "Unlocking People for AI Transformation: Change Management that Sticks",
    "date": "November 5, 2025",
    "tz": null,
    "summary": "A conversation from Jasper Assembly",
    "cta": "Watch the Replay",
    "href": "/webinars/unlocking-people-for-ai-transformation",
    "speakers": [
      {
        "name": "Alex Buder Shapiro",
        "role": "Prev.Chief People Officer, Jasper",
        "img": "/assets/Alex-20Buder-20Shapiro.jpeg",
        "badge": "/assets/bcg-square-light.svg"
      },
      {
        "name": "Raakhi Agrawal",
        "role": "Managing Director and Partner, BCG X",
        "img": "/assets/Raakhi-Agrawal.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "Guardrails for Greatness: Governing Content Quality at Scale",
    "date": "November 5, 2025",
    "tz": null,
    "summary": "A conversation from Jasper Assembly",
    "cta": "Watch the Replay",
    "href": "/webinars/governing-content-quality-at-scale",
    "speakers": [
      {
        "name": "Esther Chung",
        "role": "Head of Communications and Content, Jasper",
        "img": "/assets/Screenshot-2025-05-20-at-12.44.07-PM-1.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Madelene Glomsten",
        "role": "Head of Global Marketing Studio, Sanofi",
        "img": "/assets/Madelene-Glomsten.jpeg",
        "badge": null
      },
      {
        "name": "Ken Boney",
        "role": "Director Marketing Technology Office, NetApp",
        "img": "/assets/Ken-Boney.png",
        "badge": null
      },
      {
        "name": "John Dotto",
        "role": "SVP Content Marketing, U.S. Bank",
        "img": "/assets/john-dotto.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "From SEO to GEO: Winning in the New Era of Search and Discovery",
    "date": "November 4, 2025",
    "tz": null,
    "summary": "A conversation from Jasper Assembly",
    "cta": "Watch the Replay",
    "href": "/webinars/from-seo-to-geo",
    "speakers": [
      {
        "name": "Zach Anderson",
        "role": "CCO, Jasper",
        "img": "/assets/Zach-Anderson-Square.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Sara Mo Vanacht",
        "role": "Product Marketing Manager, Jasper",
        "img": "/assets/Sara-Mo-Vanacht.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Daniel Su",
        "role": "Principal Product Manager, Jasper",
        "img": "/assets/Daniel-Su.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "The Future of Content Pipelines: Scaling with Quality, Resonance, and Performance",
    "date": "November 4, 2025",
    "tz": null,
    "summary": "A conversation from Jasper Assembly",
    "cta": "Watch the Replay",
    "href": "/webinars/future-of-content-pipelines",
    "speakers": [
      {
        "name": "Loreal Lynch",
        "role": "Bryan Tsao",
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": null
      },
      {
        "name": "Bryan Tsao",
        "role": "Chief Product Officer, Jasper",
        "img": "/assets/Bryan-Tsao-Square.png",
        "badge": null
      }
    ]
  },
  {
    "title": "The ROI of Jasper: How AI-Powered Content Pipelines Unlock Marketing Transformation",
    "date": "October 2, 2025",
    "tz": null,
    "summary": "Discover the ROI of Jasper: Forrester Reveals New TEI Insights",
    "cta": "Watch the Replay",
    "href": "/webinars/forrester-study-webinar",
    "speakers": [
      {
        "name": "Lisa Gately",
        "role": "Principal Analyst, Forrester",
        "img": "/assets/Lisa-Gately.jpg",
        "badge": "/assets/ATS.jpg"
      },
      {
        "name": "Loreal Lynch",
        "role": "Sean Owens",
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": "/assets/ATS.jpg"
      },
      {
        "name": "Sean Owens",
        "role": "Principal Consultant, Forrester",
        "img": "/assets/SeanOwens.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "From SEO to GEO: The New Rules of Search, Discovery, and Strategy in the AI Era",
    "date": "September 10, 2025",
    "tz": null,
    "summary": "A seismic shift in search is here. Learn how generative AI is rewriting the rules of visibility, and why GEO and AEO represent the new frontier for modern marketers.",
    "cta": "Watch the Replay",
    "href": "/webinars/seo-geo-new-rules-of-search",
    "speakers": [
      {
        "name": "Kyle Byers",
        "role": "Director of Growth Marketing, Semrush",
        "img": "/assets/Kyle-Byers-headshot-2-1-p-1600.jpeg",
        "badge": "/assets/semrush-logo-700.jpg"
      },
      {
        "name": "Tom Newton",
        "role": "CMO, Jasper",
        "img": "/assets/TomHeadshot-square.jpg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      }
    ]
  },
  {
    "title": "Reinvention in the age of AI with Patrick Schwarzenegger",
    "date": "June 19, 2025",
    "tz": null,
    "summary": "Discover how embracing new mindsets can unlock growth and elevate storytelling to extraordinary heights.",
    "cta": "Watch the Replay",
    "href": "/webinars/reinvention-in-the-age-of-ai-with-patrick-schwarzenegger",
    "speakers": [
      {
        "name": "Loreal Lynch",
        "role": "Patrick Schwarzenegger",
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": null
      },
      {
        "name": "Patrick Schwarzenegger",
        "role": "Actor & Entrepreneur",
        "img": "/assets/Patrick-headshot.png",
        "badge": null
      }
    ]
  },
  {
    "title": "LinkedIn's Steve Kearns on AI, Brand, and the B2B Marketer’s Moment",
    "date": "June 17, 2025",
    "tz": null,
    "summary": "Live from the Jasper Cabana at Cannes Lions 2025, discover how AI and authentic brand building intersect in today's fast-paced B2B landscape.",
    "cta": "Watch the Replay",
    "href": "/webinars/ai-brand-b2b-marketers",
    "speakers": [
      {
        "name": "Esther Chung",
        "role": "Head of Communications and Content, Jasper",
        "img": "/assets/Screenshot-2025-05-20-at-12.44.07-PM-1.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Steve Kearns",
        "role": "Sr. Director, Customer Evangelism & Community-Led Growth, Jasper",
        "img": "/assets/Screenshot-2026-04-15-at-3.46.04-PM.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      }
    ]
  },
  {
    "title": "AI Meets Personalization, a Conversation with McKinsey in Cannes",
    "date": "June 16, 2025",
    "tz": null,
    "summary": "Explore how enterprise marketing teams are effectively driving personalization at scale with AI-powered strategies.",
    "cta": "Watch the Replay",
    "href": "/webinars/ai-meets-personalization",
    "speakers": [
      {
        "name": "Eli Stein",
        "role": "Partner at McKinsey & Company",
        "img": "/assets/Eli-20-1-.jpeg",
        "badge": "/assets/seoimageplaceholder.webp"
      },
      {
        "name": "Loreal Lynch",
        "role": null,
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": null
      }
    ]
  },
  {
    "title": "The AI inflection point for marketing",
    "date": "February 26, 2025",
    "tz": null,
    "summary": "2025 trends, predictions, and how marketers can stay ahead of the competition – and the next wave of innovation.",
    "cta": "Watch the Replay",
    "href": "/webinars/the-ai-inflection-point-for-marketing",
    "speakers": [
      {
        "name": "Loreal Lynch",
        "role": "Timothy Young",
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Timothy Young",
        "role": "CEO, Jasper",
        "img": "/assets/Timothy-Young-1-.png",
        "badge": null
      }
    ]
  },
  {
    "title": "How to Massively Increase Content ROI with AI",
    "date": "February 13, 2025",
    "tz": null,
    "summary": "Learn how to extract deeper insights from your content library and generate high-performing, on-brand assets across multiple channels.",
    "cta": "Watch the Replay",
    "href": "/webinars/ai-content-roi",
    "speakers": [
      {
        "name": "Tom Newton",
        "role": "CMO, Jasper",
        "img": "/assets/TomHeadshot-square.jpg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Andrew Su",
        "role": "Enterprise Solutions Engineer, Jasper",
        "img": "/assets/Andrew-20Su.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Mike Kaput",
        "role": "Chief Content Officer, Marketing AI Institute",
        "img": "/assets/mike.webp",
        "badge": "/assets/mktgai_logo.jpg"
      }
    ]
  },
  {
    "title": "Branding Without Limits: The Future of Retail Visuals with AI",
    "date": "January 30, 2025",
    "tz": null,
    "summary": "Join Jasper's CMO and Wayfair's Director of AI for an exclusive fireside chat on how retail brands leverage generative AI to stay ahead.",
    "cta": "Watch the Replay",
    "href": "/webinars/branding-without-limits",
    "speakers": [
      {
        "name": "Loreal Lynch",
        "role": "Bryan Godwin",
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": "/assets/images.jpg"
      },
      {
        "name": "Bryan Godwin",
        "role": "Director of AI and Visual Media, Wayfair",
        "img": "/assets/1644848237738.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "How to Redefine Your ABM Playbook Using AI with Jasper",
    "date": "December 5, 2024",
    "tz": null,
    "summary": "Featuring Mike Kaput, Chief Content Officer at Marketing AI Institute",
    "cta": "Watch the Replay",
    "href": "/webinars/redefine-abm-playbook",
    "speakers": [
      {
        "name": "Mike Kaput",
        "role": "Chief Content Officer, Marketing AI Institute",
        "img": "/assets/mike.webp",
        "badge": "/assets/mktgai_logo.jpg"
      },
      {
        "name": "Ari Auerbach",
        "role": "Former Sr. Solutions Engineer, Jasper",
        "img": "/assets/AriJasper.webp",
        "badge": null
      }
    ]
  },
  {
    "title": "AI Workflows and the Future of Marketing",
    "date": "November 20, 2024",
    "tz": null,
    "summary": "Featuring Eli Stein, Partner at McKinsey & Company",
    "cta": "Watch the Replay",
    "href": "/webinars/ai-powered-workflows",
    "speakers": [
      {
        "name": "Loreal Lynch",
        "role": "Eli Stein",
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": "/assets/seoimageplaceholder.webp"
      },
      {
        "name": "Eli Stein",
        "role": "Partner at McKinsey & Company",
        "img": "/assets/Eli-20-1-.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "Unlocking a New Era of Retail Marketing with Jasper",
    "date": "October 17, 2024",
    "tz": null,
    "summary": "AI-powered workflows that accelerate the launch of new products and campaigns – at scale.",
    "cta": "Watch the Replay",
    "href": "/webinars/new-era-retail-marketing",
    "speakers": [
      {
        "name": "Angie Hottinger",
        "role": "Director of Product Marketing",
        "img": "/assets/T04GNA7UB-U07ET5JEEKT-8a49f0242dec-512.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Kevin O'Dea",
        "role": "Sr. Solutions Architect",
        "img": "/assets/headshot.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      }
    ]
  },
  {
    "title": "How CloudBees Uses Jasper",
    "date": "August 29, 2024",
    "tz": null,
    "summary": "Learn how CloudBees uses Jasper to reduce content creation time up to 10x.",
    "cta": "Watch the Replay",
    "href": "/webinars/how-cloudbees-uses-jasper",
    "speakers": [
      {
        "name": "Krista Doyle",
        "role": "Former SEO, Jasper",
        "img": "/assets/kdoyle.jpeg",
        "badge": "/assets/gGOBvb-K_400x400.jpg"
      },
      {
        "name": "Dara Cohen",
        "role": "Senior Manager, Campaign Strategy at CloudBees",
        "img": "/assets/17d97daa-30bf-44d9-9b61-76699dd9c04d_thumb.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "The Spotlight with GitLab's Ashley Kramer",
    "date": "August 1, 2024",
    "tz": null,
    "summary": "Explore enterprise AI marketing adoption and best practices in this talk with GitLab's CMO Ashley Kramer.",
    "cta": "Watch the Replay",
    "href": "/webinars/the-spotlight-ashley-kramer",
    "speakers": [
      {
        "name": "Loreal Lynch",
        "role": "Ashley Kramer",
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": "/assets/images-1.jpg"
      },
      {
        "name": "Ashley Kramer",
        "role": "CMO & CSO, GitLab",
        "img": "/assets/1701274082131.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "6 Common Mistakes Companies Make When Launching GenAI Pilots",
    "date": "July 17, 2024",
    "tz": null,
    "summary": "Ready to kick-start your genAI pilot but anxious about potential pitfalls? Learn common missteps to avoid and strategies to successfully pilot your genAI use cases.",
    "cta": "Watch the Replay",
    "href": "/webinars/avoiding-pitfalls-with-genai-pilots",
    "speakers": [
      {
        "name": "Jessica Hreha",
        "role": "Director, AI Transformation Office, Jasper",
        "img": "/assets/T04GNA7UB-U06GPSQ234Y-aa582a2908c9-192.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      }
    ]
  },
  {
    "title": "The Spotlight: Conversations with AI Marketing Leaders",
    "date": "July 10, 2024",
    "tz": null,
    "summary": "Discover how top CMOs are winning with AI marketing in this talk with Webflow's SMO, Shane Murphy-Reuter.",
    "cta": "Watch the Replay",
    "href": "/webinars/the-spotlight-shane-murphy-reuter",
    "speakers": [
      {
        "name": "Loreal Lynch",
        "role": "Shane Murphy-Reuter",
        "img": "/assets/Loreal-Lynch-1-.png",
        "badge": "/assets/images-2.jpg"
      },
      {
        "name": "Shane Murphy-Reuter",
        "role": "CMO, Webflow",
        "img": "/assets/shane_headshot.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "How Jasper Uses Jasper: Customer Marketing",
    "date": "June 26, 2024",
    "tz": null,
    "summary": "Join Carissa Mallory, Jasper's Customer Marketing Manager, for a session on using Jasper for customer engagement strategies.",
    "cta": "Watch the Replay",
    "href": "/webinars/how-jasper-uses-jasper-customer-marketing",
    "speakers": [
      {
        "name": "Cailin Hall",
        "role": "Sr. Enablement Lead",
        "img": "/assets/gMg-4BibSw6bY0xbhCcLbA.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Carissa Mallory",
        "role": "Former Customer Marketing Manager, Jasper",
        "img": "/assets/Carissa.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "How Jasper Uses Jasper: SEO & Content Strategy",
    "date": "May 15, 2024",
    "tz": null,
    "summary": "Join Krista Doyle, Jasper's Content Marketing & SEO Lead, for a session on using Jasper for SEO and content strategy.",
    "cta": "Watch the Replay",
    "href": "/webinars/how-jasper-uses-jasper-seo-marketing",
    "speakers": [
      {
        "name": "Krista Doyle",
        "role": "Former SEO, Jasper",
        "img": "/assets/kdoyle.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Cailin Hall",
        "role": "Sr. Enablement Lead",
        "img": "/assets/gMg-4BibSw6bY0xbhCcLbA.png",
        "badge": null
      }
    ]
  },
  {
    "title": "How Marketers Can Root AI Use in Strategy, Standards & Business Context",
    "date": "March 27, 2024",
    "tz": null,
    "summary": "Save the date to join us live and learn more about what intentional AI use means for you and your team.",
    "cta": "Watch the Replay",
    "href": "/webinars/intentional-ai",
    "speakers": [
      {
        "name": "Meghan Keaney Anderson",
        "role": "Former Head of Marketing, Jasper",
        "img": "/assets/Meghan-20Keaney-20Anderson.jpeg",
        "badge": null
      },
      {
        "name": "Stephanie Mencarelli",
        "role": "Former VP of Design, Jasper",
        "img": "/assets/1698160642040.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "How Jasper Uses Jasper: Partner Marketing",
    "date": "March 21, 2024",
    "tz": null,
    "summary": "Al Biedrzycki, our Director of Partner Marketing, spearheads Jasper’s strategic vision for cultivating robust partnerships and accelerating growth through innovative marketing solutions.",
    "cta": "Watch the Replay",
    "href": "/webinars/how-jasper-uses-jasper-partner-marketing",
    "speakers": [
      {
        "name": "Cailin Hall",
        "role": "Sr. Enablement Lead",
        "img": "/assets/gMg-4BibSw6bY0xbhCcLbA.png",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Al Biedrzycki",
        "role": "Former Director of Partner Marketing",
        "img": "/assets/1678038318893.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "Revolutionizing Retail: How Adidas Utilizes AI for Success in B2B",
    "date": "February 21, 2024",
    "tz": null,
    "summary": "Dive into practical applications of AI in the retail sector, guided by real-world examples from Adidas. We will discuss how this leading brand has integrated AI into their business strategy.",
    "cta": "Watch the Replay",
    "href": "/webinars/revolutionizing-retail-how-adidas-utilizes-ai-for-success",
    "speakers": [
      {
        "name": "Meghan Keaney Anderson",
        "role": "Former Head of Marketing, Jasper",
        "img": "/assets/Meghan-20Keaney-20Anderson.jpeg",
        "badge": null
      },
      {
        "name": "Siddhi Saraiya",
        "role": "Global Head of B2B Digital Product Management",
        "img": "/assets/siddhi.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "How Jasper Uses Jasper: Content Marketing",
    "date": "February 13, 2024",
    "tz": null,
    "summary": "How Jasper uses Jasper for content marketing",
    "cta": "Watch the Replay",
    "href": "/webinars/how-jasper-uses-jasper-content-marketing",
    "speakers": [
      {
        "name": "Alton Zenon III",
        "role": "Former Content Marketing Manager, Jasper",
        "img": "/assets/IMG_3311.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Cailin Hall",
        "role": "Sr. Enablement Lead",
        "img": "/assets/gMg-4BibSw6bY0xbhCcLbA.png",
        "badge": null
      }
    ]
  },
  {
    "title": "The Paradigm Shift in SEO: How Marketers Can Prepare",
    "date": "February 7, 2024",
    "tz": null,
    "summary": "AI is changing SEO. Changes in SEO affect everything. We'll break down exactly what this AI-enabled evolution in SEO looks like and how marketers like you can prepare for it.",
    "cta": "Watch the Replay",
    "href": "/webinars/the-paradigm-shift-in-seo",
    "speakers": [
      {
        "name": "Meghan Keaney Anderson",
        "role": "Former Head of Marketing, Jasper",
        "img": "/assets/Meghan-20Keaney-20Anderson.jpeg",
        "badge": null
      },
      {
        "name": "Sam Smith",
        "role": "Co-founder & CTO, Demandwell",
        "img": "/assets/sam-20smith-20demandwell.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "How Media & Publishing companies use AI to scale production & improve quality",
    "date": "January 25, 2024",
    "tz": null,
    "summary": "The stakes are higher when great content is your product. Join Sage Publishing for a first-hand perspective on how AI is impacting the world of media & publishing and how they're staying on top of it.",
    "cta": "Watch the Replay",
    "href": "/webinars/panel-media-publishing",
    "speakers": [
      {
        "name": "Meghan Keaney Anderson",
        "role": "Former Head of Marketing, Jasper",
        "img": "/assets/Meghan-20Keaney-20Anderson.jpeg",
        "badge": null
      },
      {
        "name": "Shellie Johnson",
        "role": "Director, Global Marketing Operation, Sage Publications",
        "img": "/assets/1517757404325.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "CMO Masterclass on Annual Planning in a Time of AI",
    "date": "October 31, 2023",
    "tz": null,
    "summary": "Your hosts include the Rowan (CMO of Planful) and Meghan (VP of Marketing at Jasper) who will lead you through practical insights about new roles, policies, strategies and budgeting.",
    "cta": "Watch the Replay",
    "href": "/webinars/cmo-masterclass-on-annual-planning-in-a-time-of-ai",
    "speakers": [
      {
        "name": "Meghan Keaney Anderson",
        "role": "Former Head of Marketing, Jasper",
        "img": "/assets/Meghan-20Keaney-20Anderson.jpeg",
        "badge": null
      },
      {
        "name": "Rowan Tonkin",
        "role": "CMO, Planful",
        "img": "/assets/Rowan.png",
        "badge": null
      }
    ]
  },
  {
    "title": "Create Winning Marketing Campaigns with On-Brand, AI-Generated Content",
    "date": "July 26, 2023",
    "tz": null,
    "summary": "Learn how to unlock the full potential of generative AI to drive growth and success in your marketing and sales strategies in this virtual version of our sold out Collision Conference masterclass.",
    "cta": "Watch the Replay",
    "href": "/webinars/winning-marketing-campaigns",
    "speakers": [
      {
        "name": "Carissa Mallory",
        "role": "Former Customer Marketing Manager, Jasper",
        "img": "/assets/Carissa.jpeg",
        "badge": "/assets/Jasper-Logo-Square.svg"
      },
      {
        "name": "Andrea Johb",
        "role": "Solutions Engineer, Jasper",
        "img": "/assets/Andrea.jpeg",
        "badge": null
      }
    ]
  },
  {
    "title": "Introducing Jasper Campaigns",
    "date": "June 16, 2023",
    "tz": null,
    "summary": "Learn how to use Jasper’s feature Campaigns to create an entire marketing campaign in one place with one brief.",
    "cta": "Watch the Replay",
    "href": "/webinars/introducing-jasper-campaigns",
    "speakers": [
      {
        "name": "Jasper Marketing",
        "role": null,
        "img": "/assets/Jasper-Logo-Square.svg",
        "badge": null
      }
    ]
  },
  {
    "title": "Introducing Brand Voice and Knowledge",
    "date": "May 11, 2023",
    "tz": null,
    "summary": "Learn how to use Jasper's feature Brand Voice to teach AI about your company facts, product catalogs, audiences, and style guide so your message is always on-brand.",
    "cta": "Watch the Replay",
    "href": "/webinars/introducing-brand-voice-and-knowledge",
    "speakers": [
      {
        "name": "Jasper Marketing",
        "role": null,
        "img": "/assets/Jasper-Logo-Square.svg",
        "badge": null
      }
    ]
  }
]
