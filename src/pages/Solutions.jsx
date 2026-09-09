import { useState } from 'react'
import PageCta from '../components/PageCta'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'

/* ---------------------------------------------------------------------------
   /solutions — rebuilt from the live DOM + jasper-new.webflow.shared CSS.

   Measured section order and heights at 1440px:
     1. section.hero_main_wrap.is-solutions   750
     2. section.tabs_solutions_wrap          1753
          ├ g_section_space (large)           180
          ├ section.layout_cards_wrap         581   ("Solutions by use case")
          └ div.tabs_solutions_contain        992   (180 spacer + 812 layout)
     3. section.tabs_solutions_wrap          1172   ("Solutions by industry")
          180 + 812 + 180
     4. section.cta_main_wrap                 925   (shared <PageCta/>)

   NOTE: `layout_cards_wrap` is NESTED INSIDE the first `tabs_solutions_wrap`
   on the live page, not a sibling — hence the single <section> below.

   The hero's announcement pill ("New report! / 2025 State of AI in Marketing")
   exists in the live DOM but carries `.hero_main_eyebrow.is-hidden`, so it is
   not painted. It is rendered here inside an aria-hidden, visually-hidden node
   to keep the copy present without diverging from the live pixels.
--------------------------------------------------------------------------- */

/* .hero_main_cursor is-1/2/3 — verbatim from the site CSS.
   is-1 14rem inset:-10% auto auto 9.4% | is-2 inset:auto auto -20% 13%
   is-3 top:20% right:4%.  aspect-ratio 249/72.  Anim direction from
   data-sol-anim-cursor. */
const HERO_CURSORS = [
  { img: '/assets/avatar-strong-colours.webp',   alt: 'Digital Marketer',
    cls: 'w-[14rem] -top-[10%] left-[9.4%]',      from: '-120%' },
  { img: '/assets/avatar-strong-colours-1.webp', alt: 'Product Marketer',
    cls: 'w-[15.56rem] -bottom-[20%] left-[13%]', from: '-120%' },
  { img: '/assets/avatar-strong-colours-2.webp', alt: 'Content Marketer',
    cls: 'w-[15.56rem] top-[20%] right-[4%]',     from: '120%' },
]

/* layout_cards_grid — three g_card, u-flex-column-reverse (text above the
   16:9 visual). Card grounds read off the live g_background variants:
   background-flame-700 / background-blue-800 / background-green-800. */
const USE_CASES = [
  {
    title: 'SEO, AEO & GEO',
    body: 'Jasper makes it easier — and faster — to create content that ranks, drives traffic, and strengthens authority.',
    href: '/solutions/seo-aeo-geo',
    img: '/assets/nav-seo.avif',
    bg: 'bg-flame-700',
  },
  {
    title: 'Personalization',
    body: 'Empower your team to target specific accounts, contacts, leads, and opportunities, rather than broad audiences.',
    href: '/solutions/personalization',
    img: '/assets/nav-personalization.avif',
    bg: 'bg-blue-800',
    alt: 'Stylized illustration of a crowd with a diagonal beam of light illuminating several figures in shades of blue and white.',
  },
  {
    title: 'Campaigns',
    body: 'Transform briefs, insights, and channel requirements into on-brand campaign content across every market and format.',
    href: '/solutions/campaigns',
    img: '/assets/nav-campaigns.avif',
    bg: 'bg-green-800',
  },
]

/* tabs_solutions_cms_wrap.is-role — item tints come from the page's inline
   <style>: item 1 falls through to the .tabs_solutions_item_bg default
   (green-300 / green-800); 2..6 are overridden by nth-child rules. */
const ROLES = [
  { title: 'Performance Marketers',
    body: 'Rewrite the pipe gen playbook with AI, creating hyper-personalized experiences that drive meaningful changes in engagement, performance and ROI.',
    href: '/solutions/by-role/performance-marketers',
    person: '/assets/performance-person.webp', card: '/assets/performance-card.webp',
    bg: 'bg-green-300', rule: 'bg-green-800',
    alt: 'Smiling woman with curly hair, glasses, and teal shirt on a black background with green pixel shapes.' },
  { title: 'PR & Communications',
    body: 'Uplevel your strategic comms program by optimizing your channel strategy, creating thought leadership content across formats and exec voices, and increasing velocity.',
    href: '/solutions/by-role/pr-and-communications',
    person: '/assets/pr-coms-person.webp', card: '/assets/pr-comms-card.webp',
    bg: 'bg-blue-300', rule: 'bg-ink',
    alt: 'Smiling man with curly hair and mustache wearing an orange beanie and gray sweatshirt on blue background.' },
  { title: 'Product Marketers',
    body: 'Get products to market faster, and differentiate your message by using AI to refine your GTM strategy, streamline routine launch tasks, and deliver impactful enablement.',
    href: '/solutions/by-role/product-marketers',
    person: '/assets/product-person.webp', card: '/assets/product-card.webp',
    bg: 'bg-yellow-400', rule: 'bg-yellow-800' },
  { title: 'Content Marketers',
    body: 'Accelerate your engagement goals and elevate your brand with high-quality, AI-enhanced content.',
    href: '/solutions/by-role/content-marketers',
    person: '/assets/content-marketer.webp', card: '/assets/content-card.webp',
    bg: 'bg-flame-300', rule: 'bg-flame-600' },
  { title: 'Brand Marketers',
    body: 'Say goodbye to the brand police as your team is empowered to automate the brand management process, even as campaign velocity increases.',
    href: '/solutions/by-role/brand-marketers',
    person: '/assets/brand-person-role.webp', card: '/assets/brand-card.webp',
    bg: 'bg-pink-400', rule: 'bg-pink-700' },
  { title: 'Field Marketers',
    body: 'Create impactful, personalized campaigns and experiences that drive customer engagement and acquisition.',
    href: '/solutions/by-role/field-marketers',
    person: '/assets/field-marketer.webp', card: '/assets/field-card.webp',
    bg: 'bg-violet-400', rule: 'bg-violet-700' },
]

/* tabs_solutions_cms_wrap.is-industries — each listitem carries data-color;
   the pattern webp behind the photo matches it. Link labels are taken
   verbatim from .btn_link_text.is-solutions-btn (note "Technology Companies"). */
const INDUSTRIES = [
  { title: 'Financial Services',
    body: 'Jasper is the governed AI marketing platform for financial services teams reducing marketing risk',
    cta: 'Solutions for Financial Services',
    href: '/solutions/by-industry/financial-services',
    pattern: '/assets/industry-pattern-green.webp', photo: '/assets/ind-financial.avif',
    bg: 'bg-green-300', rule: 'bg-green-800',
    alt: 'Pattern of light green pixelated shapes with small dark blue dots scattered on a black background.' },
  { title: 'Healthcare & Life Sciences',
    body: 'Jasper is the governed AI marketing platform for healthcare & life sciences teams operating in regulated environments',
    cta: 'Solutions for Healthcare & Life Sciences',
    href: '/solutions/by-industry/healthcare',
    pattern: '/assets/industry-pattern-red.webp', photo: '/assets/ind-healthcare.avif',
    bg: 'bg-flame-300', rule: 'bg-flame-600',
    alt: 'Abstract geometric pattern with red, pink, and black angular shapes scattered across the image.' },
  { title: 'Technology',
    body: 'Jasper is the AI marketing platform for technology teams shipping content at product speed',
    cta: 'Solutions for Technology Companies',
    href: '/solutions/by-industry/tech',
    pattern: '/assets/industry-pattern-blue.webp', photo: '/assets/ind-technology.avif',
    bg: 'bg-blue-300', rule: 'bg-blue-700' },
  { title: 'Retail & Consumer Goods',
    body: 'Jasper is the AI marketing platform for retail & consumer goods teams driving demand across every channel',
    cta: 'Solutions for Retail & Consumer Goods',
    href: '/solutions/by-industry/retail-and-consumer-goods',
    pattern: '/assets/industry-pattern-purple.png', photo: '/assets/ind-retail.avif',
    bg: 'bg-violet-400', rule: 'bg-violet-800' },
  { title: 'Media & Entertainment',
    body: 'Jasper is the AI marketing platform for media & entertainment teams producing content at scale',
    cta: 'Solutions for Media & Entertainment',
    href: '/solutions/by-industry/media-and-entertainment',
    pattern: '/assets/industry-pattern-pink.webp', photo: '/assets/ind-media.avif',
    bg: 'bg-pink-400', rule: 'bg-pink-800' },
  { title: 'Professional Services',
    body: 'Jasper is the agentic marketing platform for professional services teams scaling expertise into content',
    cta: 'Solutions for Professional Services',
    href: '/solutions/by-industry/professional-services',
    pattern: '/assets/industry-pattern-yellow.png', photo: '/assets/ind-professional.avif',
    bg: 'bg-yellow-400', rule: 'bg-yellow-800' },
]

/* g_section_space variants used on this page: "large" = 180px, "main" = 112px.
   Both collapse fluidly below the desktop breakpoint. */
function Space({ size = 'large' }) {
  return (
    <div aria-hidden="true"
         className={size === 'large' ? 'h-section-large' : 'h-section-main'} />
  )
}

/* ---------------------------------------------------------------------------
   Shared accordion used by BOTH "Solutions by role" and "Solutions by
   industry" (.tabs_solutions_layout). The two differ only in which side the
   visual sits on and which heading alignment is used:
     role      → .tabs_solutions_bg.is-role (left), header justify-end
     industry  → bg right, header .is-left, items .is-reverted (content first)
--------------------------------------------------------------------------- */
function SolutionsTabs({ heading, items, side, render, lead = false }) {
  const [active, setActive] = useState(0)
  const reversed = side === 'left' // content first, visual on the right

  return (
    <div className="relative">
      {/* On the ROLE block the opening g_section_space lives INSIDE
          .tabs_solutions_contain (992 = 180 + 80 + 112 + 620), so
          .tabs_solutions_bg — which is inset:0 of the contain — washes up
          behind the spacer as well as the heading. The INDUSTRY contain is
          812 (80 + 112 + 620) with its spacer outside, so the panel starts
          level with the heading there. */}
      {lead && <Space size="large" />}
      {/* .tabs_solutions_bg — measured on live: inset 0 with the far edge at
          688px, i.e. calc(50% - 8px) wide and the FULL height of the contain
          (992/812px), so it rises behind the heading rather than starting
          below it. `u-grid-custom` lays 6 equal tracks ruled in green-300,
          and the ground washes up from green-300 at the 50% stop. Desktop
          only — below 480px the list stacks and the panel is not painted. */}
      <div aria-hidden="true"
           className={`pointer-events-none absolute inset-y-0 hidden
                       w-[calc(50%-8px)] border border-green-300 sm:grid grid-cols-6
                       ${reversed ? 'right-0' : 'left-0'}`}
           style={{ backgroundImage: 'linear-gradient(0deg, #e6ffd9 50%, transparent)' }}>
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="border-r border-green-300 last:border-r-0" />
        ))}
      </div>

      {/* .tabs_solutions_header — 80px display heading, 112px below it, and
          padded 114.667px off the far edge so the heading clears the panel. */}
      <div className={`relative flex items-center mb-12 lg:mb-[112px]
                       ${reversed ? 'justify-start lg:pl-[114.667px]' : 'justify-start lg:justify-end lg:pr-[114.667px]'}`}>
        <h2 className="reveal font-serif text-ink tracking-tightest max-w-[20ch]
                       text-[clamp(2.5rem,5.6vw,5rem)] leading-1">
          {heading}
        </h2>
      </div>

      {/* .tabs_solutions_item_visual — on live the artwork frame has the SAME
          rect for every item ([40,1716,672,409] on the role block, regardless
          of which row is active): it belongs to the panel, not to a row. Only
          the artwork inside it cross-fades. Rendering it once here, anchored
          to the bottom of the panel, keeps the person's feet on the panel
          floor; nesting it in the active <li> instead made it hang off that
          row's 174px box and float above the list. Desktop only — below 480px
          live drops the artwork entirely and the list stacks. */}
      <div aria-hidden="true"
           className={`pointer-events-none absolute bottom-0 hidden w-[calc(50%-8px)] sm:block
                       ${reversed ? 'right-0' : 'left-0'}`}
           style={{ aspectRatio: '672 / 771' }}>
        {items.map((item, i) => (
          <div key={item.title}
               className={`absolute inset-0 transition-opacity duration-500 ease-jasper
                           ${active === i ? 'opacity-100' : 'opacity-0'}`}>
            {render(item, active === i)}
          </div>
        ))}
      </div>

      {/* .tabs_solutions_cms_list — column, 1.5rem row gap below 480 only */}
      <ul className="relative flex flex-col gap-s4 sm:gap-0">
        {items.map((item, i) => {
          const open = active === i
          const panelId = `sol-${side}-panel-${i}`
          return (
            <li key={item.title}
                className="reveal relative flex flex-col sm:flex-row sm:items-start"
                style={{ '--reveal-delay': `${i * 60}ms` }}>

              {/* .tabs_solutions_item_bg — the active tint spans the FULL row
                  on live (1360px), washing across the artwork panel as well as
                  the content half, not just the text column. */}
              <span aria-hidden="true"
                    className={`absolute inset-0 ${item.bg} transition-opacity duration-300 ease-out
                                ${open ? 'opacity-100' : 'opacity-0'}`} />

              {/* the visual half is an empty spacer in the row; the artwork
                  itself is painted once at panel level, above. */}
              <div className={`hidden sm:block sm:w-1/2 ${reversed ? 'sm:order-2' : ''}`} />

              {/* .tabs_solutions_cms_content — sets the row height on its own.
                  Live padding 24px 12px 24px 0 (mirrored when reverted). */}
              <div className={`relative w-full py-s4 sm:w-1/2
                               ${reversed ? 'sm:order-1 sm:pr-s2' : 'sm:pl-s2'}`}>
                <h3 className={open ? 'pb-s3' : ''}>
                  <button type="button"
                          onClick={() => setActive(i)}
                          aria-expanded={open}
                          aria-controls={panelId}
                          className="w-full text-left font-serif text-ink tracking-tighter leading-1.1
                                     text-[clamp(1.375rem,1.9vw,1.75rem)]">
                    {item.title}
                  </button>
                </h3>

                <div id={panelId}
                     className="grid transition-[grid-template-rows] duration-500 ease-jasper"
                     style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <p className="mb-s4 max-w-[54ch] text-text-large text-ink">{item.body}</p>
                    <a href={item.href}
                       className="link-arrow font-sans text-text-small !text-ink pb-[.125rem]">
                      {item.cta || `Solutions for ${item.title}`}
                      <ArrowRight className="h-2.5 w-2.5" />
                    </a>
                  </div>
                </div>

                {/* .tabs_solutions_item_progress — a 1px rule under the CONTENT
                    half. On live it doubles as the autoplay progress bar: the
                    ACTIVE row's rule is scaled from 0 along X while its timer
                    runs, and every other row keeps its rule at full width in
                    that item's own dark colour. Reproduced here as a static
                    full-width rule in that item's own dark colour. */}
                <span aria-hidden="true"
                      className={`absolute bottom-0 h-px ${item.rule}
                                  ${reversed ? 'left-0 right-0 sm:right-s2' : 'left-0 right-0 sm:left-s2'}`} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Solutions() {
  const heroRef = useReveal({ threshold: 0.05 })
  const useCaseRef = useReveal()
  const roleRef = useReveal()
  const industryRef = useReveal()

  return (
    <>
      {/* ---------------- 1. hero_main_wrap.is-solutions — 750px ------------- */}
      <section ref={heroRef} className="relative overflow-hidden bg-surface lg:h-[750px]">
        {/* .hero_sol_main_pattern_wrap — pinned to the bottom, image 140% wide */}
        <div aria-hidden="true"
             className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
          <img src="/assets/hero-b-bottom.webp" alt="" loading="eager"
               className="w-[140%] max-w-none" />
        </div>

        <Space size="large" />

        <div className="relative u-container">
          <div className="relative flex flex-col items-center gap-s4 pt-20 text-center">
            {/* live: .hero_main_eyebrow carries .is-hidden — copy retained,
                not painted, so the measured 750px hero is unchanged. */}
            <p className="sr-only">
              New report! 2025 State of AI in Marketing: Insights from 500+ marketers
              on the future of marketing
            </p>

            <h1 className="reveal mx-auto max-w-[16ch] font-serif text-ink tracking-tightest
                           text-[clamp(2.5rem,5.6vw,5rem)] leading-1">
              AI solutions for every marketer and use case
            </h1>

            <div className="reveal mt-2 flex flex-wrap items-center justify-center gap-3"
                 style={{ '--reveal-delay': '120ms' }}>
              <a href="#" className="btn btn-primary">Get A Demo</a>
              <a href="#" className="btn btn-secondary">
                Start Free Trial
              </a>
            </div>
          </div>

          {/* .hero_main_cursor is-1/2/3 — hidden below 767 on the live site */}
          {/* above the fold on live and painted eagerly there — lazy-loading
              them lets a full-page capture race the decode and drop them */}
          {HERO_CURSORS.map((c, i) => (
            <img key={c.alt} src={c.img} alt="" aria-hidden="true" loading="eager"
                 className={`reveal pointer-events-none absolute z-[1] hidden max-w-none md:block ${c.cls}`}
                 style={{ aspectRatio: '249 / 72', '--reveal-delay': `${300 + i * 120}ms` }} />
          ))}
        </div>

        <Space size="main" />
      </section>

      {/* -------- 2. tabs_solutions_wrap — use-case cards + roles (1753) ----- */}
      <section className="relative">
        <Space size="large" />

        {/* --- section.layout_cards_wrap — 581px --- */}
        <section ref={useCaseRef} className="relative">
          <div className="u-container flex flex-col gap-s7">
            <h2 className="reveal mx-auto max-w-[20ch] text-center font-serif text-ink
                           tracking-tightest text-[clamp(2.5rem,5.6vw,5rem)] leading-1">
              Solutions by use case
            </h2>

            {/* .layout_cards_grid.u-grid-autofit — 3 up, 1 up on mobile */}
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              {USE_CASES.map((c, i) => (
                <article key={c.title}
                         className={`reveal group relative flex flex-col-reverse ${c.bg} text-white`}
                         style={{ '--reveal-delay': `${i * 90}ms` }}>
                  {/* .g_card_visual — u-ratio-16-9, sits below the text */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                    <img src={c.img} alt={c.alt || ''} loading="lazy"
                         className="absolute inset-0 h-full w-full object-cover" />
                  </div>

                  {/* .g_card_wrap — site gutter padding */}
                  <div className="relative flex flex-grow flex-col p-s4">
                    <h3 className="mb-s2 font-serif tracking-tightest leading-1.05
                                   text-[clamp(1.75rem,2.7vw,2.375rem)]">
                      {c.title}
                    </h3>
                    <p className="mb-s6 text-text-main text-pretty">{c.body}</p>

                    {/* .btn_link_wrap primary-w-background — mono label on a
                        flame-300 chip, matching .btn_link_background */}
                    <div className="mt-auto">
                      <a href={c.href}
                         className="inline-flex items-center gap-2.5 bg-flame-300 px-0.5
                                    py-0.5 font-mono text-text-large text-flame-600">
                        <span className="pl-0.5">Learn More</span>
                        <ArrowRight className="mr-0.5 h-2.5 w-2.5 transition-transform
                                               duration-300 ease-jasper group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- .tabs_solutions_contain — "Solutions by role" (992) --- */}
        <div ref={roleRef} className="u-container">
          <SolutionsTabs
            heading="Solutions by role"
            items={ROLES}
            side="right"
            lead
            render={(item) => (
              <>
                {/* the shared white beams-and-circles backdrop sits behind
                    every role's artwork, filling the whole panel */}
                <img src="/assets/last-item.png" alt="" aria-hidden="true" loading="lazy"
                     className="absolute inset-0 h-full w-full object-cover" />
                {/* .tabs_solutions_item_visual_inner — the person is 672x409 on
                    live, bottom-anchored and object-fit cover */}
                <img src={item.person} alt={item.alt || ''} loading="lazy"
                     className="absolute inset-x-0 bottom-0 w-full object-cover"
                     style={{ aspectRatio: '672 / 409' }} />
                {/* .tabs_solutions_item_card — 323x180 at 16px from the left,
                    flush with the bottom of the panel */}
                <img src={item.card} alt="" aria-hidden="true" loading="lazy"
                     className="absolute bottom-0 left-4 w-[48%] object-contain"
                     style={{ aspectRatio: '5.87 / 3.28' }} />
              </>
            )}
          />
        </div>
      </section>

      {/* --------- 3. tabs_solutions_wrap — "Solutions by industry" (1172) --- */}
      <section ref={industryRef} className="relative">
        <Space size="large" />
        <div className="u-container">
          <SolutionsTabs
            heading="Solutions by industry"
            items={INDUSTRIES}
            side="left"
            render={(item) => (
              <>
                {/* same beams backdrop as the role block */}
                <img src="/assets/last-item.png" alt="" aria-hidden="true" loading="lazy"
                     className="absolute inset-0 h-full w-full object-cover" />
                {/* the per-industry pattern is 672x409 on live, bottom-anchored */}
                <img src={item.pattern} alt={item.alt || ''} loading="lazy"
                     className="absolute inset-x-0 bottom-0 w-full object-cover"
                     style={{ aspectRatio: '672 / 409' }} />
                {/* .tabs_solutions_item_visual_inner — the photo is 470x286,
                    centred horizontally and inset 61px above the panel floor */}
                <img src={item.photo} alt="" aria-hidden="true" loading="lazy"
                     className="absolute left-1/2 w-[70%] -translate-x-1/2 object-cover"
                     style={{ aspectRatio: '470 / 286', bottom: '7.9%' }} />
              </>
            )}
          />
        </div>
        <Space size="large" />
      </section>

      {/* ---------------- 4. cta_main_wrap — 925px (shared) ------------------ */}
      <PageCta />
    </>
  )
}
