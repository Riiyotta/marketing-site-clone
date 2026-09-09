# Component library

Generated from the source files. Regenerate with `node design/gen-components.mjs`.

Every block carries a header comment recording the values MEASURED off the
reference site — section height, grid tracks, font sizes, colours. Read that
comment before changing a block; the numbers are evidence, not preference.

The 22 Platform pages and the Solutions/Resources/Company sub-pages are
compositions of these blocks, not bespoke builds. Webflow reuses a small
vocabulary across the whole site — `simple_layout_wrap` appears 15 times,
`horizontal_vis_wrap` 12, `hero_vertical_wrap` 10 — which is what makes
cloning ~50 pages tractable.

**Extend a block through props. Never fork a second copy.**


## `src/components/blocks`

| component | props | measured spec |
|---|---|---|
| **Accordion** | `chip` `title` `items` `openFirst` `tint` `size` | `accordion_1 u-container u-grid-autofill` — the interior-page FAQ. MEASURED on live /api at 1440: the block is the 1360px container itself (not a full-bleed section), 394px / 473px for the t |
| **AgentDetail** | `breadcrumb` `title` `intro` `card` `tocCta` `transcript` `body` | `apps_page_wrap` — the Agent Library DETAIL template. One Webflow composition shared verbatim by /agents/optimization, /agents/research and /agents/translation, so it is built once here and  |
| **AgentLibrary** | `eyebrow` `title` `body` `promo` `workflows` `roles` `cards` `pageSize` `capTop` `capBottom` | The Agent Library — the 4445px filter-and-grid block on live /agents. MEASURED at 1440px: ground     flame-200 (rgb 255,247,245) full-bleed, with a 1440x195 |
| **AgentSlider** | — | `.slider_main_wrap` — "Agents for every marketer, across every function". The third section on all six Solutions > By Role pages, and IDENTICAL on every one of them: same heading, same lede, |
| **ApiEndpointCards** | `title` `items` | `.api_cards_section` — "Jasper API endpoints", the 8-card catalogue shared VERBATIM by /image/api and /image/pipelines. MEASURED on both pages at 1440px (section 1440 x 1672): a pale flame-2 |
| **Catalog** | `eyebrow` `title` `body` `link` `img` `bg` `spaceTop` `spaceBottom` | `.catalog_wrap` — left-aligned copy header over a full-width product shot. 3x on /marketing-iq; the same shape recurs on other Platform routes. MEASURED on live /marketing-iq at 1440px (sect |
| **ChecklistVis** | `eyebrow` `eyebrowChip` `title` `lede` `items` `bg` `art` `spaceTop` `spaceBottom` | `.horizontal_vis_wrap` as it appears on the six Solutions > By Industry pages — the same two-column band as HorizontalVis, but the copy column carries a THREE-ITEM CHECKLIST under the lede i |
| **ClosingPhoto** | `title` `body` `ctas` `photo` | `.closing_photo_wrap` — the 900px photo-and-copy band that closes every Solutions > By Industry page (in place of the `cta_main_wrap` the Platform pages use). Identical geometry on all six;  |
| **DocLayout** | `title` `nav` `cta` `sections` `signoff` `bg` | `.simple_layout_wrap u-position-relative` used as a LONG-FORM DOCUMENT — the whitepaper body on live /security (section 1440 x 4312). MEASURED at 1440px off .scrape/plat-security.png: |
| **EditorialHero** | `lead` `listLabel` `items` `metaBelow` `leadCta` | `.editorial_hero_wrap` — the split "one big card / ranked list" band that opens both /blog (h=865) and /webinars (h=948). MEASURED at 1440px (.scrape/plat-blog.json #4, plat-webinars.json #3 |
| **FilterIndex** | `title` `chips` `promo` `items` `search` `render` `layout` `railWidth` `wellWidth` `empty` | `.sticky_scroll_wrap` in its CMS-index form — a sticky left rail carrying the section heading, a search field, a "Clear Filters" button and (on /workflows) a chip cloud, beside a long grid o |
| **GridHero** | `eyebrow` `eyebrowChip` `title` `body` `ctas` `photo` `bg` `tone` `height` | `.grid_hero_wrap` — a full-bleed coloured band with the copy in the 1360px well on the left and one photo anchored to the RIGHT edge, bleeding past 1440. Used by live /marketing-iq, /knowled |
| **HeroVertical** | `eyebrow` `title` `titleTag` `titleSize` `titleWidth` `body` `link` `ctas` `media` `bg` `spaceTop` `spaceBottom` | `.hero_vertical_wrap` — the CENTRED statement block. 10x across Platform. MEASURED at 1440px: Bare statement (brand-voice #1, h=304; visual-guidelines #1, h=304): |
| **HorizontalContent** | `eyebrow` `tint` `title` `body` `items` `bg` `spaceTop` `spaceBottom` | `.horizontal_content_wrap` — a copy column beside a CHECKLIST column. Distinct from `horizontal_vis_wrap` (which pairs copy with an illustration): the right track here is a list of check-mar |
| **HorizontalVis** | `eyebrow` `eyebrowTag` `eyebrowChip` `title` `titleTag` `titleSize` `titleAsPara` `body` `bodySize` `link` `ctas` `img` `flip` `bg` `spaceTop` `spaceBottom` `copyWidth` `bodyWidth` `children` | `.horizontal_vis_wrap` — the two-column copy / illustration band. Appears 12x across the 22 Platform pages; it is BOTH the page hero on several routes and a mid-page feature row on others. |
| **IQHub** | `eyebrow` `title` `body` `cta` | `hero_main_wrap` + `feature_banner_wrap` — the "Jasper IQ" cross-sell band that closes the IQ-family pages. Live /knowledge-base and /product-iq both end on it before the closing photo. |
| **IlloHero** | `eyebrow` `title` `body` `ctas` `illo` | `.illo_hero` — the centred hero on /solutions/seo-aeo-geo. A one-off: no other route in the Solutions family uses it, and neither Solutions template includes it. |
| **IndustryHero** | `eyebrow` `title` `body` `ctas` `photo` | `.grid_hero_wrap` as used by the six Solutions > By Industry pages — the same right-anchored photo band as blocks/GridHero, plus the stepped pixel-grid overlay that dissolves the photo's lef |
| **IntegrationsVis** | `title` `body` `ctas` | `.horizontal_vis_wrap` — the "Integrations for <Role>" band, fourth section on all six Solutions > By Role pages. Structurally it is HorizontalVis (copy left, art right) but the art is a THR |
| **LayoutCards** | `eyebrow` `eyebrowChip` `title` `body` `ctas` `link` `cards` `bg` `spaceTop` `spaceBottom` | `.layout_cards_wrap` — a split header over a 3-up card row. 5x on Platform. MEASURED on live /style-guide at 1440px (section h=963): 112px g_section_space |
| **LogoBlade** | `title` `logos` | `.marquee_wrap` — the customer-logo blade that sits directly under the hero on every Solutions > By Industry page. MEASURED at 1440px on live /solutions/by-industry/tech (.scrape/solx3.json) |
| **PeopleRail** | `eyebrow` `title` `body` `titleSize` `items` `variant` `bg` `spaceTop` `spaceBottom` | `.slider_main_wrap` — a split header over a horizontally-scrolling rail. Used TWICE on live /careers, in two shapes. MEASURED at 1440px off .scrape/plat-careers.png: |
| **PhotoMarquee** | `rows` `columns` `variant` `tileW` `tileH` `duration` `height` | `.careers-photo-marquee-wrapper` — the two-row photo rail on live /careers (section 1440 x 704). MEASURED at 1440px off .scrape/plat-careers.png: |
| **ProductSlot** | `bg` `shot` `caption` `height` | `.g_slot u-container` — a full-bleed patterned backdrop with one product screenshot floated on top of it. Alternates with `horizontal_content_wrap` 3x on live /knowledge-base and 3x on live  |
| **RevealSection** | `as` `children` | A `<section>` that owns its own reveal observer. Page-local one-off bands used to sit inside a single wrapping `<div ref={useReveal()}>` per page. That works visually, but it collapses |
| **RoleHero** | `eyebrow` `title` `body` `ctas` `headshotLeft` `headshotRight` `cardLeft` `cardRight` | `.hero_main_wrap.is_full_height.is_solutions` — the CENTRED hero that opens all six Solutions > By Role pages. Unlike every Platform hero (copy left, art right) this one stacks the copy dead |
| **SeoSection** | `eyebrow` `eyebrowChip` `checkChip` `title` `lede` `link` `items` `figure` | The `.horizontal_content_wrap` + `.seo_image_wrap` pair that repeats three times on /solutions/seo-aeo-geo — once each for SEO, GEO and AEO. Unlike ChecklistVis (copy over art, checklist und |
| **SideBlockStack** | `items` `rowH` | `.side_block` x N inside a `.simple_layout_inner` — the scroll-pinned feature stack. Used on live /jasper-iq for the four IQ components. MEASURED on live /jasper-iq at 1440px (.scrape/row-ja |
| **SimpleLayout** | `items` `cols` `order` `tint` `mediaH` `mediaPad` `cardH` `bg` `spaceTop` `spaceBottom` `variant` `eyebrow` `title` `titleSize` `cta` `img` `bgImage` `center` `bleed` `minHeight` | `.simple_layout_wrap` — the N-up tile grid. 15x across Platform, the single most common block. Its shape varies by column count; all three variants measured on the IQ family share one grid a |
| **SplitHero** | `eyebrow` `title` `body` `ctas` `gridBg` `left` `right` `bg` `height` | `.split_hero_wrap` — the centred hero flanked by two clipped product panels. MEASURED on live /brand-iq at 1440px (section h=940): ground   flame-400 (rgb 255,179,163) full-bleed, PLUS a 144 |
| **StickyScroll** | `eyebrow` `title` `titleSize` `body` `cta` `items` `variant` `tint` | `sticky_scroll_wrap` — a two-column band whose LEFT column is a heading that sticks while the RIGHT column scrolls a stacked list of features past it. MEASURED on live /api (section 1440 x 1 |
| **StoryPanel** | `tint` `logo` `link` `stats` `quote` `name` `role` `portrait` | `.stories_large_wrap` (inside a `.w-dyn-list`) — the customer-story panel that sits between the feature bands and the "How Jasper Powers …" cards on four of the six Solutions > By Industry p |
| **TrustCards** | `eyebrow` `title` `body` `link` `cards` `bg` `spaceTop` `spaceBottom` | `.layout_cards_wrap` in its CENTRED 4-up form — the "Foster AI Trust. Scale AI Adoption." band that closes live /security (section 1440 x 835). MEASURED at 1440px off .scrape/plat-security.p |
| **UseCaseCards** | `eyebrow` `title` `cards` | `.layout_cards_wrap` holding `.card_iq_wrap` tiles — the "The only generative AI purpose-built for <role>" band, second section on all six Solutions > By Role pages. |
| **ValueProps** | `eyebrow` `title` `items` `photo` `pattern` `tint` `cardTitleSize` `children` | `value_props_wrap` — an 80px display heading over a two-track band: a column of flat tinted cards on the LEFT and one tall duotone photograph on the RIGHT, with the "Pink Pattern" dot-lattic |
| **WindowCta** | `title` `cta` `media` `height` | `window_wrap u-width-full` — the short navy closing band used by the two /image/* pages, and by /studio as a media frame. MEASURED on live /image/api and /image/pipelines (section 1440 x 350 |
| **primitives** | — | Shared primitives for the Platform-family Webflow blocks. Every value here is MEASURED off the reference site at 1440px (see .scrape/txt-*.json and .scrape/bg-*.json). They are the small pieces  |

## `src/components`

| component | props | measured spec |
|---|---|---|
| **Carousel** | `label` `children` | Horizontal card rail used by the three `slider_main_wrap` sections on /resources. The live site drives these with Swiper; this is a dependency-free equivalent built on native scroll-snap, wh |
| **Closing** | `title` `body` `market` `cta` `photo` | Closing CTA. Measured from the live `.closing_photo_wrap`: section   1440 x 900, background WHITE (not navy) |
| **Faq** | `items` `heading` `spaceBottom` `headingTag` `questionTag` | FAQ accordion. Measured from the live `.accordion_1`: grid      9 columns x 136.875px, 16px gutter, section height 604 |
| **Footer** | — | Footer — rebuilt from measurements of the live .footer_wrap (1440px). Structure on the original is NOT "brand block + 5 link columns". It is: .footer_contain   1360px well, padding 80px 0, c |
| **Hero** | — | Announcement pill |
| **HeroScenes** | — | Hero collage. The original renders this as a Rive state machine (`home_hero.riv`, served from a third-party CDN) on a <canvas>. That file is licensed artwork, so the |
| **Icons** | — | Wordmark — redrawn as text in the brand's display serif rather than tracing Jasper's proprietary logo artwork. |
| **Layout** | `children` | Shared chrome for every route, plus scroll-reset on navigation. The reveal observer is mounted HERE, on <main>, rather than per-section. Several pages declared one `useReveal()` but rendered |
| **Marquee** | `space` | Live order, read off `.marquee_cms_list`: Ulta leads the track. Measured per `.marquee_cms_item`: a 160 x 80 box with a 100px right margin (a 260px pitch), holding a 160 x 66 image at object |
| **NavMenuDropdown** | `menu` `onNavigate` | The panel body. Measured live geometry, reproduced exactly: .nav_dropdown        bg #fff, padding 24px, radius 0, margin-top 12px, box-shadow none, display flex, gap 24px, y = 92. |
| **NavMenuPanel** | — | Mega-menu panel primitives — every number below is measured off the the reference site `.nav_dropdown` (Chrome 1440x1000, fresh page per item). .nav_dropdown          bg #fff, padding 24px, radi |
| **NavMenuSpotlight** | `spot` `height` `onNavigate` | Spotlight blocks — measured from the live `.nav_dropdown_spotlight`. Platform  .nav_geo_wrap  319.48 x 585.72, padding 24px, flex column centred. Background is a live <iframe src=scatter-bg. |
| **Navbar** | — | Measured from the the reference site `.nav_wrap` (Chrome, 1440x1000): .nav_wrap      position:fixed; top:0; left:0; right:0; z-index:1000; background transparent; pointer-events:none (so the |
| **PageCta** | `headline` `ctas` `docName` | Interior-page closing CTA (`.cta_main_wrap`). Measured on live /solutions at 1440px — section is 1440 x 925 and layers, back to front: |
| **PageHero** | `eyebrow` `title` `sub` `ctas` `tint` | Shared interior-page hero. Matches the original's `hero_main_wrap` rhythm: mono eyebrow, serif display headline, supporting paragraph, then optional CTAs — all centred in the |
| **Platform** | — | measured: 12-col, 16px gutter, each card spans 4 (442.67px) |
| **PlatformCanvas** | — | "Create, edit, and collaborate in real time" — `.canvas_wrap`. Measured at 1440px on the live /platform (section height 1847): 80px g_section_space top and bottom. |
| **PlatformHero** | — | `.hero_platform_wrap` — the /platform hero. Unlike the other interior pages (which share `hero_main_wrap` via PageHero) this one has its own block. Measured at 1440px on live /platform (sect |
| **PlatformIQ** | — | "Governance, context, and control—built in" — the first `.layout_cards_wrap`. Measured at 1440px on live /platform (section height 707): 112px g_section_space above, 80px below. |
| **PlatformModels** | — | "Jasper is AI built to execute marketing end to end" — `.models_wrap`. Measured at 1440px on the live /platform: section        1440 x 353, flex row, centre-aligned, no padding. |
| **PlatformPipelines** | — | "Structured systems for repeatable execution" — `.value_props_wrap` (the `.u-zindex-2` block on live /platform). Measured at 1440px on the live page (section height 1613): |
| **PlatformStories** | — | "From system to impact" — `.slider_main_wrap`. Measured at 1440px on live /platform (section height 808, ground #fff): 112px g_section_space above. |
| **PlatformStudio** | — | "The keys to building AI workflows that actually work" — the second `.layout_cards_wrap`. Measured at 1440px on live /platform (section height 923): |
| **Resources** | — | measured: layout_cards_grid = 12-col, 16px gutter, span-4 each |
| **SectionSpace** | `size` | Standalone vertical spacer. The live page carries NO padding on its sections — every gap between them is a `g_section_space` div in `.page_main`. Measured on the homepage: three of |
| **Solutions** | — | Floating persona pills that ring the collage. MEASURED from the live site's `.solutions_visuals_cursor` elements (is-1 … is-6) inside `.solutions_visuals_wrap` (901 x 473 at 1440px). Each li |
| **Stories** | — | Customer stories mosaic. Measured from the live `.stories_main_grid`: a 4 x 328px grid with a 16px gutter over 3 rows, mixing `span 2` testimonial cards (672px, #f9f9f9) with |
| **Tabs** | — | measured: tabs_layout = 2 x 640px with an 80px gap |
| **Trust** | — | Trust Foundation. Measured from the live `.trust_wrap`: section   1440 x 829, background WHITE (not navy) |

## The five core blocks

| block | live class | measured at 1440px |
|---|---|---|
| `HorizontalVis` | `.horizontal_vis_wrap` | 670px: 140px spacer, 1360px container 418px tall, 112px spacer, over a full-bleed colour layer |
| `HeroVertical` | `.hero_vertical_wrap` | 872px on /api: 54px h1, then 38px h3 feature rows with ~538x300 art |
| `SimpleLayout` | `.simple_layout_wrap` | 500px on /api: 54px h2, eyebrow, one CTA link, one ~620x308 image |
| `LayoutCards` | `.layout_cards_wrap` | 822px on /agents: 54px h2 plus numbered 24px h3 stage cards |
| `PageCta` | `.cta_main_wrap` | 925px: blue grid ground, navy slab, a 817x745 document frame holding the copy |
