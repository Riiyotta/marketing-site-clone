import { useId, useState } from 'react'
import Trust from '../components/Trust'
import PageCta from '../components/PageCta'
import SectionSpace from '../components/SectionSpace'
import { ArrowRight, ChevronDown } from '../components/Icons'
import { CHART_GROUPS, PLANS, FAQ_GROUPS } from '../data/pricing'

/* ---------------------------------------------------------------------------
   /pricing — measured against the live page at 1440px:

     .hero_main_wrap          1138   h1 80px, Monthly/Yearly tabs, two tiers
     .g_section_space          112
     .price_chart_section     7203   8 bands / 49 rows, sticky column header
     main.page_main           5973   Trust 829, 3 x accordion_1, cards 862,
                                     cta_main_wrap 925, footer
     total                   14434

   Chart geometry (from .scrape/deep-pricing.json + live probes):
     row grid    12 cols / 16px gutter — desc span 5, divider span 1,
                 Pro span 3, Business span 3
     name        18px / 21.6px  #00063d
     desc        14px / 16.8px  #00063d @ 60%, max-width 449px
     value       14px / 19.6px  #00063d, centred
     underline   1px  #e0e0e1  (dark-200)
     rails       1px #e0e0e1 down both edges of the Pro column, full height
     band        tint @ 40%; every SECOND row repaints the tint at full
     sticky      position:sticky; top:80px; z-index:2; background #fff; h≈122
                 (top:80 clears the fixed 80px .nav_contain)

   The tick glyph is '✓' in the scrape; it renders here as an inline SVG so it
   inherits colour and never depends on a font's glyph coverage.
--------------------------------------------------------------------------- */

/* Tailwind's scanner reads source text, so a `bg-${tint}` template literal
   would never emit a rule. The band tokens are mapped to LITERAL class names
   here; the data file carries the key, this map carries the class. */
const TINT_BG = {
  'chart-green-200': 'bg-chart-green-200',
  'chart-blue-200': 'bg-chart-blue-200',
  'chart-flame-200': 'bg-chart-flame-200',
  'chart-pink-200': 'bg-chart-pink-200',
  'chart-vintage-electric-200': 'bg-chart-vintage-electric-200',
  'chart-violet-200': 'bg-chart-violet-200',
}

/* live asset: 6841dad99336c3aa6fc31eb8_tick.svg — 13x9 coral check */
function Tick({ className = '' }) {
  return (
    <svg viewBox="0 0 13 9" width="13" height="9" fill="none" aria-hidden="true"
         className={className}>
      <path d="M1 4.2 4.6 8 12 1" stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  )
}

/* A chart cell: '✓' -> tick, '-' -> em dash, anything else -> the literal copy */
function CellValue({ value, label }) {
  if (value === '✓') {
    return (
      <>
        <span className="sr-only">{label ? `${label}: included` : 'Included'}</span>
        <Tick className="text-ink" />
      </>
    )
  }
  if (value === '-') {
    return (
      <>
        <span className="sr-only">{label ? `${label}: not included` : 'Not included'}</span>
        <span aria-hidden="true" className="text-ink/40">&mdash;</span>
      </>
    )
  }
  return <span>{label && <span className="sr-only">{label}: </span>}{value}</span>
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <>
      <PricingHero yearly={yearly} onToggle={setYearly} />

      <SectionSpace />

      <PriceChart />

      <Trust />

      {FAQ_GROUPS.map((g, i) => (
        <div key={g.title}>
          <FaqGroup group={g} ribbon={i === 0} />
          {i < FAQ_GROUPS.length - 1 && <SectionSpace />}
        </div>
      ))}

      <SupportCards />

      <PageCta />
    </>
  )
}

/* -------------------------------------------------------------- hero ----- */

function PricingHero({ yearly, onToggle }) {
  const panelId = useId()

  return (
    <section className="relative bg-surface-2 overflow-hidden pt-section-page-top pb-section-main">
      {/* .generated_squares_wrap — the live page tiles ~45x29 cells across the
          hero; a background-image grid reproduces it without 1,200 nodes. */}
      <div aria-hidden="true"
           className="pointer-events-none absolute inset-0 bg-grid"
           style={{ '--grid-color': 'rgba(255,255,255,.9)', '--grid-size': '45px' }} />

      <div className="relative u-container text-center">
        <h1 className="reveal mx-auto max-w-[22ch] font-serif text-ink tracking-tightest
                       text-[clamp(2.5rem,5.6vw,5rem)] leading-1">
          Get the AI built for better marketing results
        </h1>

        <p className="reveal mt-6 mx-auto max-w-[36ch] text-text-main text-ink text-pretty"
           style={{ '--reveal-delay': '80ms' }}>
          Jasper&rsquo;s plans &amp; pricing are designed to meet your needs as you grow
        </p>

        {/* .tab_menu_wrap — 293 x 61, white ground, 2px inset; the active tab
            fills flame-600. Real radiogroup so the control is operable. */}
        <div className="reveal mt-8 flex justify-center" style={{ '--reveal-delay': '140ms' }}>
          <div role="radiogroup" aria-label="Billing period"
               className="inline-flex bg-surface" style={{ padding: 2 }}>
            {[
              { key: 'monthly', label: 'Monthly', on: !yearly },
              { key: 'yearly', label: 'Yearly', note: 'Save ~20%', on: yearly },
            ].map((t) => (
              <button
                key={t.key}
                type="button"
                role="radio"
                aria-checked={t.on}
                aria-controls={panelId}
                onClick={() => onToggle(t.key === 'yearly')}
                className={`inline-flex items-center gap-2 whitespace-nowrap px-5 font-sans
                            text-text-main transition-colors duration-300 ease-jasper
                            ${t.on ? 'bg-flame-600 text-white' : 'text-ink hover:bg-surface-2'}`}
                style={{ height: 57 }}
              >
                {t.label}
                {t.note && (
                  <span className={`text-text-small ${t.on ? 'text-white/85' : 'text-ink/60'}`}>
                    {t.note}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* two info_card tiers — span 6 each of 12 */}
        <div id={panelId} className="mt-12 grid gap-gutter text-left lg:grid-cols-12">
          {PLANS.map((plan, i) => (
            <article
              key={plan.name}
              className="reveal bg-surface p-8 lg:col-span-6 md:p-10"
              style={{ '--reveal-delay': `${200 + i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-ink tracking-tighter leading-1
                               text-[clamp(1.25rem,2vw,1.5rem)]">
                  {plan.name}
                </h3>

                {plan.custom ? (
                  <p className="flex items-center gap-2 font-mono text-text-small
                                uppercase leading-1.2 text-flame-600">
                    {/* live asset: 68421df7879f954056ce9334_union.svg — 21x22
                        hex outline. Drawn inline so it takes currentColor; a
                        clip-path on a bordered box would clip the border off. */}
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                         aria-hidden="true" className="shrink-0">
                      <path d="M10.5 1 19.5 6v10l-9 5-9-5V6l9-5Z"
                            stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                    <span>custom<br />pricing</span>
                  </p>
                ) : (
                  <p className="flex items-start gap-1 text-flame-600">
                    {/* the live card splits "$" (small) from the numeral
                        (44px) and stacks "month/ seat" beside it; screen
                        readers get the whole thing once, in order. */}
                    <span className="sr-only">
                      {(yearly ? plan.price.yearly : plan.price.monthly)} per {plan.unit.join(' ')}
                    </span>
                    <span aria-hidden="true" className="font-serif leading-1 text-[1.25rem]">$</span>
                    <span aria-hidden="true"
                          className="font-serif tracking-tightest leading-1
                                     text-[clamp(2rem,3.4vw,2.75rem)]">
                      {(yearly ? plan.price.yearly : plan.price.monthly).replace('$', '')}
                    </span>
                    <span aria-hidden="true"
                          className="font-mono text-text-small leading-1.2 pt-1">
                      {plan.unit[0]}<br />{plan.unit[1]}
                    </span>
                  </p>
                )}
              </div>

              <hr className="mt-6 border-0 border-t border-ink" />

              <p className="mt-6 text-text-main text-ink text-pretty max-w-[52ch]">
                {plan.blurb}
              </p>

              <a href="#" className={`btn ${plan.variant} mt-8`}>{plan.cta}</a>

              <p className="mt-8 text-text-main text-ink">{plan.listHead}</p>
              <ul className="mt-4 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-text-main text-ink">
                    <span className="mt-[7px] shrink-0 text-flame-600"><Tick /></span>
                    <span className="text-pretty">{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- chart ----- */

function PriceChart() {
  return (
    /* NO overflow on this section, nor on any ancestor of the sticky header —
       any value but `visible` silently turns the nearest scroll container into
       the sticky containing block and the header stops pinning. `body` already
       carries overflow-x:hidden globally, which is why the horizontal-scroll
       fallback below lives on the ROW GRID rather than on a chart wrapper. */
    <section className="relative bg-surface" aria-label="Compare plans">

      {/* .price_chart_sticky_header — pins under the 80px fixed nav */}
      <div className="sticky top-[80px] z-[2] bg-surface">
        <div className="u-container">
          <div className="grid grid-cols-2 gap-gutter md:grid-cols-12"
               style={{ minHeight: 120 }}>
            <div className="hidden md:block md:col-span-6" aria-hidden="true" />
            {[
              { name: 'Pro', cta: 'Start Free Trial', variant: 'btn-secondary', rail: true },
              { name: 'Business', cta: 'Contact Sales', variant: 'btn-primary' },
            ].map((c) => (
              <div key={c.name}
                   className={`flex flex-col items-center justify-center gap-3 py-4
                               md:col-span-3 ${c.rail ? 'md:border-x md:border-dark-200' : ''}`}>
                <p className="font-serif text-ink tracking-tighter leading-1
                              text-[clamp(1.25rem,2vw,1.5rem)]">
                  {c.name}
                </p>
                <a href="#" className={`btn ${c.variant} text-text-small`}
                   style={{ padding: '10px 14px' }}>
                  {c.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-dark-200" />
      </div>

      {CHART_GROUPS.map((group, gi) => (
        <ChartBand key={group.title} group={group} index={gi} />
      ))}
    </section>
  )
}

function ChartBand({ group, index }) {
  /* One reveal per BAND, not per row — 49 staggered rows would read as a
     broken page rather than an entrance. */
  return (
    <div className="reveal relative" style={{ '--reveal-delay': `${(index % 3) * 60}ms` }}>
      {/* .g_background — the band tint at 40% alpha */}
      <div aria-hidden="true"
           className={`absolute inset-0 opacity-40 ${TINT_BG[group.tint]}`} />

      <div className="relative u-container" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <h2 className="font-serif text-ink tracking-tighter leading-1
                       text-[clamp(1.75rem,3vw,2.375rem)] md:pl-3">
          {group.title}
        </h2>

        <div className="mt-6" role="table" aria-label={group.title}>
          {group.rows.map((row, ri) => (
            <ChartRow key={row.name} row={row} tint={group.tint} striped={ri % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ChartRow({ row, tint, striped }) {
  return (
    <div role="row" className="relative">
      {/* every second row repaints the band tint at full strength */}
      {striped && (
        <div aria-hidden="true" className={`absolute inset-0 ${TINT_BG[tint]}`} />
      )}

      {/* Below md the row stacks: name + desc, then Pro / Business as labelled
          pairs, so three columns never have to fit 390px. From md up it is the
          live 12-col grid with the Pro column railed on both edges. */}
      <div className="relative grid grid-cols-2 gap-x-gutter gap-y-3
                      py-5 md:grid-cols-12 md:gap-y-0 md:py-0">

        <div role="cell"
             className="col-span-2 md:col-span-5 md:self-center md:py-6 md:pl-3">
          <p className="text-ink text-[1.125rem] leading-1.2">{row.name}</p>
          <p className="mt-1 text-text-small text-ink/60 text-pretty max-w-[50ch]">
            {row.desc}
          </p>
        </div>

        <div aria-hidden="true" className="hidden md:block md:col-span-1" />

        <div role="cell"
             className="flex items-center justify-start gap-2 text-text-small text-ink
                        md:col-span-3 md:justify-center md:self-stretch md:py-6 md:text-center
                        md:border-x md:border-dark-200">
          <span className="font-mono text-text-tiny text-ink/60 md:hidden">Pro</span>
          <CellValue value={row.pro} label="Pro" />
        </div>

        <div role="cell"
             className="flex items-center justify-start gap-2 text-text-small text-ink
                        md:col-span-3 md:justify-center md:self-center md:py-6 md:text-center">
          <span className="font-mono text-text-tiny text-ink/60 md:hidden">Business</span>
          <CellValue value={row.biz} label="Business" />
        </div>
      </div>

      {/* .pricing_item_underline */}
      <div aria-hidden="true" className="relative h-px bg-dark-200" />
    </div>
  )
}

/* ---------------------------------------------------------------- faq ---- */

/* Questions AND answers are the live copy, read out of the collapsed
   accordion DOM (.scrape/pricing-faq2.json) — nothing here is authored. Each
   answer keeps the original's block structure as an array of paragraphs.
   Styling matches the shared `.accordion_1`: 2/7 of a 9-col grid, flame-300
   card on a flame-500 hairline, 32px vertical padding, 16px question,
   22px chevron. */
function FaqGroup({ group, ribbon = false }) {
  /* The live page ships each accordion with its FIRST item already expanded
     (`.accordion_1_component.is-opened`) — that is what makes group 1 measure
     473px rather than the 263px an all-collapsed column would. */
  const [open, setOpen] = useState(0)
  const base = useId()

  return (
    <section className="bg-surface" aria-label={group.title}>
      <div className="u-container grid gap-gutter lg:grid-cols-9">
        <div className="lg:col-span-2">
          {/* .g_ribbon_wrap — 149 x 95, "FAQs" at Feature 80px on a flame-600
              ground, rotated -10deg. Only the FIRST accordion carries it.
              The rotation lives on a WRAPPER because the .reveal keyframe
              animates `transform` and would overwrite a rotate() on the
              revealed node itself. */}
          {ribbon && (
            <div className="reveal mb-8 inline-block">
              <span className="inline-block bg-flame-600 font-serif text-ink tracking-tightest
                               leading-1 text-[clamp(3rem,5.6vw,5rem)]"
                    style={{ padding: '0 4px', transform: 'rotate(-10deg)' }}>
                FAQs
              </span>
            </div>
          )}

          <h2 className="reveal font-serif text-ink tracking-tighter leading-1
                         text-[clamp(1.75rem,2.9vw,2.375rem)] lg:sticky lg:top-[104px]">
            {group.title}
          </h2>
        </div>

        <div className="reveal lg:col-span-7 lg:col-start-3" style={{ '--reveal-delay': '100ms' }}>
          {group.items.map((item, i) => {
            const isOpen = open === i
            const panelId = `${base}-p${i}`
            const btnId = `${base}-b${i}`
            return (
              <div key={item.q} className="border border-flame-500 bg-flame-300 -mt-px first:mt-0">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-start justify-between gap-6 px-4 text-left"
                    style={{ paddingTop: 32, paddingBottom: 32 }}
                  >
                    <span className="font-sans text-ink text-text-main">{item.q}</span>
                    <span
                      className="shrink-0 grid place-items-center text-flame-600
                                 transition-transform duration-300 ease-jasper"
                      style={{ width: 22, height: 22,
                               transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div id={panelId} role="region" aria-labelledby={btnId}
                     className="grid transition-[grid-template-rows] duration-500 ease-jasper"
                     style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <div className="px-4 pb-8 max-w-[80ch] space-y-4">
                      {item.a.map((para, pi) => (
                        <p key={pi} className="text-text-main text-ink text-pretty">
                          {/* A paragraph is either a plain string or, when the live
                              answer carried inline links, an array of string and
                              {t, href} parts. */}
                          {typeof para === 'string'
                            ? para
                            : para.map((part, si) =>
                                typeof part === 'string'
                                  ? <span key={si}>{part}</span>
                                  : <a key={si} href={part.href}
                                       target={part.href.startsWith('http') ? '_blank' : undefined}
                                       rel={part.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                                       className="underline underline-offset-2 hover:text-flame-600
                                                  transition-colors duration-200">
                                      {part.t}
                                    </a>
                              )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------ support cards ---- */

/* .layout_cards_wrap — 862px overall (112 spacer + 638 layout + 112 spacer).
   Three 443 x 407 `.g_card_link` cards, span 4 each, and each on its OWN
   tint — read off the live computed backgrounds, not one shared ground. */
const SUPPORT_CARDS = [
  { title: 'Read help articles & FAQs', cta: 'Explore the Help Center', tint: 'bg-pink-300' },
  { title: 'Get customer support', cta: 'Email hey@Jasper.ai', tint: 'bg-blue-300' },
  { title: 'Learn more about Jasper', cta: 'Get a demo', tint: 'bg-green-300' },
]

function SupportCards() {
  return (
    <section className="bg-surface">
      <SectionSpace />
      {/* .layout_cards_layout — a 48px-gap flex column: a 135px heading block,
          then the 407px card row, measuring 638px inside the two spacers. */}
      <div className="u-container flex flex-col" style={{ gap: 48 }}>
        <h2 className="reveal flex items-end font-serif text-ink tracking-tightest leading-1.05
                       text-[clamp(1.9rem,3.6vw,2.375rem)] md:min-h-[135px]">
          Have additional questions?
        </h2>
        <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-12">
          {SUPPORT_CARDS.map((c, i) => (
            <article key={c.title}
                     className={`reveal flex flex-col justify-between p-6 lg:col-span-4 ${c.tint}`}
                     style={{ minHeight: 407, '--reveal-delay': `${i * 90}ms` }}>
              <h3 className="font-serif text-ink tracking-tighter text-h4 leading-1.1">
                {c.title}
              </h3>
              <a href="#" className="link-arrow mt-6 self-start text-text-main">
                {c.cta}
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
      <SectionSpace />
    </section>
  )
}
