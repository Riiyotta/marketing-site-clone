/* ---------------------------------------------------------------------------
   Nav destinations that exist on jasper.ai but are not yet cloned as full pages.

   Every route below is reachable from the mega-menu. Before this table they all
   fell through the `*` route to the homepage, so clicking "Canvas" or "Trust"
   silently rendered "Put AI agents to work for marketing" — worse than an honest
   placeholder, because it looks like a finished page.

   Headlines are the live <h1> text, captured from jasper.ai (.scrape/subpages.json)
   along with the live page height, which is a rough measure of how much work each
   full clone would be.

   The 13 Solutions sub-pages (/solutions/by-industry/*, /solutions/by-role/*
   and /solutions/seo-aeo-geo) used to live here; they are now real cloned
   pages routed above this table in App.jsx, so they were removed.
--------------------------------------------------------------------------- */
export const STUB_ROUTES = [
  { path: "/blog", title: "Resources for AI in Marketing", liveHeight: 22960 },
  { path: "/careers", title: "Grow your career while shaping the future of marketing", liveHeight: 7208 },
  { path: "/contact-support", title: "How can Jasper customer support help you today?", liveHeight: 2366 },
  { path: "/customer-stories", title: "Jasper helps 100,000+ customers transform how they work", liveHeight: 4694 },
  { path: "/customer-success", title: "Fast-track your AI ROI with Jasper's success resources", liveHeight: 7686 },
  { path: "/diagnostics/geo", title: "Make sure AI recommends you, not your competitors.", liveHeight: 7500 },
  { path: "/legal", title: "Jasper legal information", liveHeight: 3634 },
  { path: "/llm-optimized", title: "The best AI models, governed and on-brand", liveHeight: 5650 },
  { path: "/press", title: "Jasper in the news", liveHeight: 11083 },
  { path: "/security", title: "Your data is safe with Jasper", liveHeight: 10939 },
  { path: "/trust", title: "Marketing led, IT-governed AI", liveHeight: 7651 },
  { path: "/webinars", title: "Learn AI best practices, how to use Jasper, & more", liveHeight: 17312 },
  { path: "/workflows", title: "AI marketing workflows for every use case in Jasper", liveHeight: 4987 },
]
