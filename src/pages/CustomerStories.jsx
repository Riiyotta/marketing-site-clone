import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight, ChevronDown } from '../components/Icons'
import PageCta from '../components/PageCta'
import { Eyebrow, CtaRow } from '../components/blocks/primitives'
import { CUSTOMER_STORIES } from '../data/customerStories'

/**
 * /customer-stories — rebuilt against the live page (4694px at 1440).
 *
 * Section order and heights from .scrape/plat-customer-stories.json:
 *   hero_vertical_wrap   567   mono eyebrow + 80px h1 + lede + two buttons
 *   simple_layout_wrap  2025   the 14-card case-study collection:
 *                                1 featured card, 1360x453, copy | 680x453 photo
 *                                13 grid cards, 443px wide, 232-299px tall
 *                              with an "Industry / Company size / Reset filters"
 *                              bar between the featured card and the grid
 *   cta_main_wrap        925   the shared closing CTA
 *
 * Every card foot is a two-part stat bar (solid number chip + pale detail
 * strip); the tints live as tokens in src/data/customerStories.js because each
 * one is an exact hex match for a swatch already in tailwind.config.js.
 *
 * The two filter dropdowns narrow the ALREADY-RENDERED collection — live posts
 * to a Webflow CMS filter, which this clone must not call.
 */

/* The card's "Read Story ->" link, identical on the featured and grid cards. */
function ReadStory({ href }) {
  return (
    <a href={href} className="link-arrow shrink-0 font-mono text-text-small text-ink">
      Read Story<ArrowRight />
    </a>
  )
}

/**
 * `.casestudies_card_stats` — the two-part bar at each card's foot.
 * Measured live: the number chip is 70px tall with 16px mono-ish ink text on
 * the solid tint, and the detail strip takes the remaining width on the pale
 * tint of the SAME ramp. Both carry ink text (rgb 0,6,61) on every card.
 */
function StatBar({ stat, statTint, detail, detailTint }) {
  return (
    <div className="mt-6 flex min-h-[70px] items-stretch">
      <span className={`flex shrink-0 items-center justify-center px-4 font-serif
                        text-h3 leading-1 tracking-tighter text-ink ${statTint}`}>
        {stat}
      </span>
      <span className={`flex flex-1 items-center px-4 py-3 text-text-small
                        text-ink text-pretty ${detailTint}`}>
        {detail}
      </span>
    </div>
  )
}

/** The two live filter dropdowns. They narrow the rendered collection only. */
function FilterSelect({ label, options, value, onChange }) {
  return (
    <label className="relative inline-flex items-center gap-2 border border-ink px-4 py-2">
      <span className="font-sans text-text-small text-ink">{value || label}</span>
      <ChevronDown className="h-4 w-4 shrink-0 text-ink" />
      <select value={value} onChange={(e) => onChange(e.target.value)}
              aria-label={label}
              className="absolute inset-0 cursor-pointer opacity-0">
        <option value="">{label}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}

const uniq = (key) => [...new Set(CUSTOMER_STORIES.map((s) => s[key]).filter(Boolean))]

export default function CustomerStories() {
  const heroRef = useReveal({ threshold: 0 })
  const listRef = useReveal({ threshold: 0 })
  const [industry, setIndustry] = useState('')
  const [size, setSize] = useState('')

  const [featured, ...rest] = CUSTOMER_STORIES
  const shown = rest.filter((s) =>
    (!industry || s.industry === industry) && (!size || s.size === size))

  return (
    <>
      {/* 1 — hero_vertical_wrap, h=567 */}
      <section ref={heroRef} className="clip-bleed bg-surface">
        <div aria-hidden="true" className="h-[112px]" />

        <div className="u-container flex flex-col items-center text-center">
          <Eyebrow className="reveal mb-[38px]">Customer Stories</Eyebrow>

          <h1 className="reveal max-w-[20ch] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]"
              style={{ '--reveal-delay': '60ms' }}>
            Jasper helps 100,000+ customers transform how they work
          </h1>

          <p className="reveal mt-6 max-w-[70ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '120ms' }}>
            Marketers are are transforming how they work and achieving remarkable results
            with Jasper. Don&apos;t just take our word for it – hear from Jasper customers
            in this collection of compelling case studies.
          </p>

          <CtaRow className="reveal mt-8 justify-center"
                  style={{ '--reveal-delay': '180ms' }}
                  ctas={[
                    { label: 'Start Free Trial', variant: 'btn-secondary' },
                    { label: 'Get A Demo', variant: 'btn-primary' },
                  ]} />
        </div>

        <div aria-hidden="true" className="h-[80px]" />
      </section>

      {/* 2 — simple_layout_wrap, h=2025 — the case-study collection */}
      <section ref={listRef} className="clip-bleed bg-surface pb-[112px]">
        <div className="u-container">

          {/* featured card — MEASURED a fixed 1360x453 on live: a copy column
              beside a 680x453 photo, the whole card height-locked so the photo
              keeps its aspect instead of stretching to the copy. */}
          <article className="reveal grid overflow-hidden bg-surface-2
                              lg:h-[453px] lg:grid-cols-2">
            <div className="flex flex-col p-6">
              <div className="flex items-start justify-between gap-6 border-b border-ink/15 pb-4">
                <img src={featured.logo} alt="" aria-hidden="true"
                     width={featured.logoW} height={featured.logoH}
                     className="h-8 w-auto object-contain" />
                <ReadStory href={featured.href} />
              </div>

              <h2 className="mt-6 font-serif text-ink tracking-tightest leading-[1.05]
                             text-[clamp(1.5rem,2.64vw,2.375rem)]">
                <a href={featured.href}
                   className="transition-opacity duration-300 ease-jasper hover:opacity-70">
                  {featured.title}
                </a>
              </h2>

              <div className="mt-auto">
                <StatBar {...featured} />
              </div>
            </div>

            {featured.photo && (
              <img src={featured.photo.src} alt="" aria-hidden="true"
                   width={featured.photo.w} height={featured.photo.h}
                   className="h-full min-h-[280px] w-full object-cover" />
            )}
          </article>

          {/* filter bar */}
          <div className="reveal mt-8 flex flex-wrap items-center justify-between gap-4"
               style={{ '--reveal-delay': '80ms' }}>
            <div className="flex flex-wrap gap-4">
              <FilterSelect label="Industry" options={uniq('industry')}
                            value={industry} onChange={setIndustry} />
              <FilterSelect label="Company size" options={uniq('size')}
                            value={size} onChange={setSize} />
            </div>

            <button type="button" onClick={() => { setIndustry(''); setSize('') }}
                    className="font-sans text-text-small text-ink underline
                               underline-offset-4 transition-opacity duration-300
                               ease-jasper hover:opacity-70">
              Reset filters
            </button>
          </div>

          {/* the 3-up 443px grid. `.reveal` sits on the CONTAINER, never on the
              individual cards — a filtered-out card that remounts later would
              otherwise never intersect and stay permanently invisible. */}
          {shown.length === 0 ? (
            <p className="mt-10 text-text-main text-ink/70">
              No customer stories match those filters.
            </p>
          ) : (
            <div className="reveal mt-8 grid gap-gutter sm:grid-cols-2 lg:grid-cols-3"
                 style={{ '--reveal-delay': '140ms' }}>
              {shown.map((s) => (
                <article key={s.name} className="flex flex-col bg-surface-2 p-6">
                  <div className="flex items-start justify-between gap-4 border-b border-ink/15 pb-4">
                    <img src={s.logo} alt="" aria-hidden="true"
                         width={s.logoW} height={s.logoH}
                         className="h-8 w-auto max-w-[128px] object-contain" />
                    <ReadStory href={s.href} />
                  </div>

                  <p className="mt-4 text-text-small text-ink text-pretty">{s.body}</p>

                  <div className="mt-auto">
                    <StatBar {...s} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3 — cta_main_wrap, h=925 */}
      <PageCta />
    </>
  )
}
