/* ---------------------------------------------------------------------------
   Nav destinations that exist on jasper.ai but are not yet cloned as full pages.

   Every route below is reachable from the mega-menu. Before this table they all
   fell through the `*` route to the homepage, so clicking "Canvas" or "Trust"
   silently rendered "Put AI agents to work for marketing" — worse than an honest
   placeholder, because it looks like a finished page.

   Headlines are the live <h1> text, captured from jasper.ai (.scrape/subpages.json)
   along with the live page height, which is a rough measure of how much work each
   full clone would be.

   The table is now EMPTY: every route that used to sit here has been built as a
   real cloned page and routed above this map in App.jsx —
     the 13 Solutions sub-pages (/solutions/by-industry/*, /solutions/by-role/*,
       /solutions/seo-aeo-geo),
     the Resources family (/blog, /webinars, /customer-stories, /customer-success,
       /contact-support, /workflows, /diagnostics/geo),
     and the Company family (/press, /security, /trust, /careers, /llm-optimized,
       /legal).
   `Stub` itself is kept as the `*` catch-all in App.jsx, so an unknown URL still
   lands on an honest placeholder rather than silently rendering the homepage.
--------------------------------------------------------------------------- */
export const STUB_ROUTES = []
