/* ---------------------------------------------------------------------------
   Mega-menu content, measured from the live jasper.ai nav on 2026-09-09
   (Chrome, 1440x1000, fresh page per item, hover + 2200ms, read `.nav_dropdown`).

   Every label, href, description and image URL below was read out of the live
   DOM (see .scrape/links-*.json, .scrape/detail-*.json) — nothing is invented.

   Structure per panel:
     kind      'columns'  Platform / Resources / Company — a grid of columns,
                          each = an optional heading card + a list of link rows
               'rows'     Solutions — three stacked rows, each = a 342px
                          heading block on the left + a 4-col grid on the right
     spotlight the left/right feature block (Platform, Resources, Company)
--------------------------------------------------------------------------- */

/* Measured tints: the hover wash behind a row/card is a `g_background` child
   whose colour is the column's brand swatch (Platform col 1 = green-300). */
export const TINT = {
  green300: '#e6ffd9',
  blue300: '#ceebff',
  flame400: '#ffb3a3',
  flame300: '#ffe8e2',
  flame200: '#fff7f5',
}

/* Heading-card washes sit at opacity .5 at rest and animate to 1 on hover
   (measured: `.nav_card_colorful_background` 0.5 -> 1, the only rule in the
   panel's inline <style>). Link-row washes start at opacity 0 -> 1. */
export const CARD_REST_OPACITY = 0.5

export const PLATFORM = {
  kind: 'columns',
  // measured .nav_dropdown 1326x634 @x=57; inner grid 295.484 295.5 295.484,
  // gap 16px 24px; spotlight 319.48x585.72 on the LEFT.
  panelWidth: 1326,
  spotlightWidth: 319.48,
  spotlightSide: 'left',
  columns: [
    {
      head: 'Agents',
      href: '/agents',
      desc: 'Purpose-built agents that execute end-to-end marketing workflows',
      img: '/assets/nav-agents.avif',
      tint: TINT.green300,      // measured .nav_card_colorful_background
      rowTint: TINT.green300,   // measured .nav_card_background wash
      items: [
        { t: 'Optimization', href: '/agents/optimization' },
        { t: 'Research', href: '/agents/research' },
        { t: 'Translation', href: '/agents/translation', badge: 'NEW' },
        { rule: true },
        { t: 'View All Agents', href: '/agents#library' },
      ],
    },
    {
      head: 'Content Pipelines',
      href: '/content-pipelines',
      desc: 'A structured workflow system that enables repeatability and scale.',
      img: '/assets/nav-pipelines.avif',
      tint: TINT.flame300,
      rowTint: TINT.flame200,
      items: [
        { t: 'Canvas', href: '/canvas' },
        { t: 'Grid', href: '/grid' },
        { t: 'AI Studio', href: '/studio' },
        { t: 'Image Pipelines', href: '/image/pipelines' },
        {
          t: 'Jasper APIs', href: '/api',
          sub: [
            { t: 'Jasper MCP', href: '/mcp' },
            { t: 'Image APIs', href: '/image/api' },
          ],
        },
      ],
    },
    {
      head: 'Jasper IQ',
      href: '/jasper-iq',
      desc: 'Governed marketing decision surface embedding context, rules, and brand logic.',
      img: '/assets/nav-iq.avif',
      tint: TINT.blue300,
      rowTint: TINT.blue300,
      items: [
        {
          t: 'Brand IQ', href: '/brand-iq',
          sub: [
            { t: 'Brand Voice', href: '/brand-voice' },
            { t: 'Visual Guidelines', href: '/visual-guidelines' },
            { t: 'Style Guide', href: '/style-guide' },
          ],
        },
        { t: 'Marketing IQ', href: '/marketing-iq' },
        { t: 'Product IQ', href: '/product-iq' },
        { t: 'Knowledge', href: '/knowledge-base' },
        { t: 'Governance', href: '/governance' },
      ],
    },
  ],
  /* .nav_geo_wrap 319.48x585.72, padding 24px, flex column centred; the live
     background is an <iframe> of a red pixel-scatter canvas — reproduced here
     as a CSS scatter (see NavMenuSpotlight). Card 271.48x324.31, padding 12px,
     white; eyebrow flame-600 pill; headline 38px/38px/-0.38px Feature. */
  spotlight: {
    kind: 'geo',
    eyebrow: 'GEO & AI Optimization',
    title: 'Win the new front door of search',
    body: 'Measure how your brand performs across every major AI answer engine, prioritize the actions that matter, and ship brand-governed content at scale.',
    cta: 'Learn More',
    href: '/geo',
  },
}

export const SOLUTIONS = {
  kind: 'rows',
  // measured .nav_dropdown 1416x604 @x=12; inner 1368 wide, three rows; each
  // row = 342px heading block + 1026px grid of 4 x 244.5px (row 1) / 256.5px.
  panelWidth: 1416,
  headWidth: 342,
  rows: [
    {
      head: 'Solutions by Use Case',
      href: null,
      desc: 'Scale SEO, personalization, and campaigns and more—driving faster, smarter marketing growth.',
      cards: true,
      items: [
        {
          t: 'GEO & AI Optimization', href: '/geo', img: '/assets/nav-geo.avif',
          tint: TINT.flame300,
          desc: 'Monitor citation rates, identify content gaps, and generate governed content that AI will actually cite.',
        },
        {
          t: 'SEO & AEO', href: '/solutions/seo-aeo-geo', img: '/assets/nav-seo.avif',
          tint: TINT.flame400,
          desc: 'Create content that ranks, drives traffic & strengthens authority at scale.',
        },
        {
          t: 'Personalization', href: '/solutions/personalization', img: '/assets/nav-personalization.avif',
          tint: TINT.blue300,
          desc: 'Empower your team to target specific accounts, contacts, leads, and opportunities.',
        },
        {
          t: 'Campaigns', href: '/solutions/campaigns', img: '/assets/nav-campaigns.avif',
          tint: TINT.green300,
          desc: 'Transform briefs, insights, & channel requirements into on-brand campaign content.',
        },
      ],
    },
    {
      head: 'Solutions by Role',
      href: '/solutions#by-role',
      desc: '',
      cards: false,
      items: [
        { t: 'Product Marketing', href: '/solutions/by-role/product-marketers' },
        { t: 'Content Marketing', href: '/solutions/by-role/content-marketers' },
        { t: 'Performance Marketing', href: '/solutions/by-role/performance-marketers' },
        { t: 'Field & Events Marketing', href: '/solutions/by-role/field-marketers' },
        { t: 'Brand Marketing', href: '/solutions/by-role/brand-marketers' },
        { t: 'PR & Communications', href: '/solutions/by-role/pr-and-communications' },
      ],
    },
    {
      head: 'Solutions by Industry',
      href: '/solutions#by-industry',
      desc: '',
      cards: false,
      items: [
        { t: 'Financial Services', href: '/solutions/by-industry/financial-services' },
        { t: 'Healthcare & Life Sciences', href: '/solutions/by-industry/healthcare' },
        { t: 'Technology', href: '/solutions/by-industry/tech' },
        { t: 'Retail & Consumer Goods', href: '/solutions/by-industry/retail-and-consumer-goods' },
        { t: 'Media & Entertainment', href: '/solutions/by-industry/media-and-entertainment' },
        { t: 'Professional Services', href: '/solutions/by-industry/professional-services' },
      ],
    },
  ],
  spotlight: null,
}

export const RESOURCES = {
  kind: 'columns',
  // measured 1326x473 @x=57; same 3-col grid as Platform; spotlight
  // 319.48x425.25 on the LEFT, holding a heading + two colour cards.
  panelWidth: 1326,
  spotlightWidth: 319.48,
  spotlightSide: 'left',
  columns: [
    {
      head: 'Discover',
      href: null,
      desc: 'Unlock the full potential of Jasper through stories, tools, and expert guidance built for marketers.',
      tint: null,               // measured: no wash on these heading cards
      rowTint: TINT.flame200,
      items: [
        { t: 'Blog', href: '/blog' },
        { t: 'Customer Stories', href: '/customer-stories' },
        { t: 'Webinars & Events', href: '/webinars' },
      ],
    },
    {
      head: 'Learn',
      href: null,
      desc: 'Level up your skills with guides, tools, and trainings designed to help you get more from Jasper.',
      tint: null,
      rowTint: TINT.flame200,
      items: [
        { t: 'Courses', href: 'https://community.jasper.ai/courses', external: true },
        { t: 'The Jasper Community', href: 'https://community.jasper.ai/', external: true },
        { t: 'Explore Jasper Workflows', href: '/workflows' },
      ],
    },
    {
      head: 'Get Support',
      href: null,
      desc: 'Everything you need to get the most out of Jasper—fast help, expert guidance, and trusted resources.',
      tint: null,
      rowTint: TINT.flame200,
      items: [
        { t: 'Contact & Support', href: '/contact-support' },
        { t: 'FAQ & Help Center', href: 'https://community.jasper.ai/c/help-center/', external: true },
        { t: 'Customer Success', href: '/customer-success' },
      ],
    },
  ],
  /* measured: heading "Diagnostics & Tools" (24px Feature) then two 319.48
     x144.63 cards, 16px padding, 1px border, mb 16px on the first:
     card 1 bg + border flame-600 #fa4028, link text flame-300 #ffe8e2
     card 2 bg + border blue-600  #0043d3, link text blue-400  #81cbff */
  spotlight: {
    kind: 'cards',
    head: 'Diagnostics & Tools',
    cards: [
      {
        title: 'GEO Diagnostic',
        body: 'Learn what AI is saying about your brand, where the gaps are, and what governs the brands AI cites instead.',
        cta: 'Get Your GEO Score',
        href: '/diagnostics/geo',
        bg: '#fa4028',
        border: '#fa4028',
        ctaColor: '#ffe8e2',
      },
      {
        title: 'Brand Compliance Diagnostic',
        body: 'Scan your website and public content to learn how consistently you score for brand governance and compliance.',
        cta: 'Get Your Brand Score',
        href: '/diagnostics/brand-compliance',
        bg: '#0043d3',
        border: '#0043d3',
        ctaColor: '#81cbff',
      },
    ],
  },
}

export const COMPANY = {
  kind: 'columns',
  // measured 1001x489 @x=219; inner grid 300.656 300.656, gap 16px 24px;
  // spotlight 304x440.56 on the LEFT.
  panelWidth: 1001,
  spotlightWidth: 304,
  spotlightSide: 'left',
  columns: [
    {
      head: 'Company Information',
      href: null,
      desc: 'Get the latest about Jasper in the news, careers information, legal documents and more.',
      tint: null,
      rowTint: TINT.flame200,
      items: [
        { t: 'Newsroom', href: '/press' },
        { t: 'Careers', href: '/careers' },
        { t: 'Legal Information', href: '/legal' },
      ],
    },
    {
      head: 'Trust Foundation',
      href: '/trust',
      desc: 'Learn more about our LLM-optimized infrastructure with built-in security, governance, and compliance.',
      tint: null,
      rowTint: TINT.flame200,
      items: [
        { t: 'LLM-Optimized', href: '/llm-optimized' },
        { t: 'Security', href: '/security' },
        { t: 'Governance', href: '/governance' },
      ],
    },
  ],
  /* measured .g_card 304x440.56, border 1px solid rgb(94,93,95) (dark-700),
     background #0011a7 (blue-700), flex-column-reverse:
       image  302x302  (Nav - Company.avif, object-fit cover)
       text   302x136.56, padding 16px, white
     heading 38px/38px/-0.76px Feature; body 16px; link flame-600 mono. */
  spotlight: {
    kind: 'card',
    title: 'About Jasper',
    body: 'Our vision, mission, and impact.',
    cta: 'Learn More',
    href: '/company',
    img: '/assets/nav-company.avif',
    bg: '#0011a7',
    border: '#5e5d5f',
  },
}

/* Trigger tint measured per item on the live `.nav_menu_link_color`
   (3-segment staggered wipe: 9.88px border / centre / 9.88px border). */
export const MENUS = {
  Platform: PLATFORM,
  Solutions: SOLUTIONS,
  Resources: RESOURCES,
  Company: COMPANY,
}
