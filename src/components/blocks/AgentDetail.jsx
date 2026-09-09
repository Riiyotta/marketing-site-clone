import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { ArrowRight } from '../Icons'

/* ---------------------------------------------------------------------------
   `apps_page_wrap` — the Agent Library DETAIL template.

   One Webflow composition shared verbatim by /agents/optimization,
   /agents/research and /agents/translation, so it is built once here and the
   three pages supply only content.

   MEASURED at 1440px (.scrape/plat-agents-{optimization,research,translation}
   .json plus a full text/geometry walk; live section heights 6689 / 6016 /
   6150):

     315px  `apps_page_animation_wrap` — a full-bleed blue-400 (rgb 129,203,255)
            plate ruled with a ~48px yellow grid, whose bottom edge dissolves
            into three descending white steps. Live animates the cells; the
            resting composition is reproduced with a CSS grid of cells.
      80px  g_section_space
      25px  `btn_link_wrap` — the "← Agents Library" mono breadcrumb at x=40.

     `sticky_scroll_content_wrap` — the 1360px article, a
     `minmax(0,1fr) 443px` row with a 78px gutter and the RIGHT rail sticky:

       LEFT (877px, x=40)
         h1     Feature 80/80, ink, at y=460
         intro  ABC ROM 16/22.4 ink at y=724
         h2     Feature 54/56.7 "What is the <Agent> Agent?"
         a collapsed `<details>` "Transcript" strip (18px, rgb(34,34,34)) —
           live ships the whole video transcript inside it, closed on load
         body   16/22.4 paragraphs and bulleted lists
         h3     Feature 38/38 "How the <Agent> Agent works"
         h3     Feature 28/30.8 sub-heads
         BENEFITS PANEL — a full-bleed-to-container blue-300 (rgb 206,235,255)
           slab, 64px pad, an h2 Feature 54/56.7 then a 2-up grid of WHITE
           cards, 40px pad. Card headings are ABC ROM 24px (sans, NOT serif —
           the only sans heading on the page) over a 16/22.4 body.
         USE CASES — h2 Feature 54/56.7 then alternating 28px Feature h3 +
           16/22.4 body pairs, full 877px measure.

       RIGHT rail (443px, x=957)
         `apps_details_wrap` — the agent card:
           a blue-300 plate holding a 395px-wide product still (24px inset),
           then a 110px blue-300 strip with "AGENT NAME:" (mono 16px, ink at
           60% alpha) beside a 38px Feature name and a 48px blue-400 icon tile
           carrying a 32px white glyph;
           then a 40%-alpha blue-300 meta panel with "INCLUDED IN:" (a mono
           "Business Only" chip) and, when present, "USED FOR:" — a wrap of
           20px-tall blue-300 mono tag chips each ending in "→".
         `sticky_scroll_moving_wrap` — the sticky Table of contents: a 24px
           Feature h2 over 18px anchor links on a 30px stride, then a "Share
           on:" row and a filled flame "Get A Demo Of This Agent" button.

     `accordion_1` — the FAQ: a rotated flame-600 "FAQs" chip over a 38px
       Feature h2 in a ~250px left column, and blue-300 question rows on the
       right, first row open. (The generic `blocks/Accordion` is flame-tinted
       and centres its chip differently, so the agent-detail FAQ passes
       `tint="bg-blue-300"` into it rather than forking a second accordion.)

     112px g_section_space
     `hero_vertical_wrap` — the closing band: a full-bleed flame-300 ground
       under the same yellow grid texture, a centred 54px Feature h2 in a
       ~1035px measure, an optional 16/22.4 line, then ONE filled flame CTA.
       Measured 482 / 446 / 503px tall across the three pages.

   Every string is supplied by the caller from the capture — this file holds
   no page copy of its own.
--------------------------------------------------------------------------- */

/* `apps_page_animation_wrap` — the blue plate. Live is a Webflow interaction
   that reveals cells column by column; the settled composition is a 30x7 cell
   grid on a 48px pitch whose last three row-bands are clipped back from the
   right by a stepped white mask. Reproduced with three stacked strips rather
   than 210 individual divs. */
function GridPlate() {
  // strip = [height in cells, fraction of the 1440px width the plate covers]
  const STRIPS = [[4, 1], [2, 0.435], [1, 0.30]]
  return (
    <div aria-hidden="true" className="clip-bleed relative w-full bg-surface" style={{ height: 315 }}>
      {/* the plate is anchored to the RIGHT edge, so each shorter strip
          retreats leftward exactly as the live steps do */}
      <div className="absolute inset-0 flex flex-col items-end">
        {STRIPS.map(([rows, frac], i) => (
          <div key={i}
               className="bg-blue-400 bg-grid"
               style={{
                 height: rows * 45,
                 width: `${frac * 100}%`,
                 '--grid-color': 'rgba(255,251,183,.95)',
                 '--grid-size': '48px',
               }} />
        ))}
      </div>
      {/* the two lone highlight cells punched out of the top band on live */}
      <div className="absolute bg-surface" style={{ left: 1041, top: 90, width: 48, height: 26 }} />
      <div className="absolute bg-surface" style={{ left: 1089, top: 135, width: 48, height: 26 }} />
    </div>
  )
}

/* `.apps_details_wrap` — the sticky agent card. */
function AgentCard({ name, icon, still, includedIn, usedFor = [] }) {
  return (
    <div className="flex flex-col">
      <div className="bg-blue-300 p-6">
        <img src={still.src} alt={still.alt} width={still.w} height={still.h} loading="lazy"
             className="h-auto w-full object-contain" />
      </div>

      {/* AGENT NAME strip — 110px on live */}
      <div className="flex items-center justify-between gap-4 bg-blue-300 px-6 pb-6">
        <div>
          <p className="eyebrow text-ink/60">AGENT NAME:</p>
          <h2 className="mt-2 font-serif text-ink tracking-tightest leading-1
                         text-[clamp(1.875rem,2.64vw,2.375rem)]">
            {name}
          </h2>
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center bg-blue-400">
          <img src={icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
        </span>
      </div>

      {/* meta panel — blue-300 at 40% */}
      <div className="bg-blue-300/40 px-6 py-6">
        <p className="eyebrow text-ink/60">INCLUDED IN:</p>
        <p className="mt-3 inline-block bg-blue-300 px-1 font-mono text-text-main text-ink">
          {includedIn}
        </p>

        {usedFor.length > 0 && (
          <>
            <p className="eyebrow mt-6 text-ink/60">USED FOR:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {usedFor.map((t) => (
                <li key={t}>
                  <a href="#" className="inline-flex items-center gap-1 bg-blue-300 px-1
                                         font-mono text-text-main text-ink">
                    {t}
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

/* `.table_of_contents_wrapper` + the share row + the demo button. */
function TableOfContents({ toc, cta }) {
  return (
    <div className="lg:sticky lg:top-[120px]">
      <h2 className="font-serif text-ink tracking-tighter leading-1.1 text-h4">Table of contents</h2>
      <ul className="mt-4 flex flex-col gap-[10px]">
        {toc.map((t) => (
          <li key={t.label}>
            <a href={t.href} className="text-[18px] leading-[21.6px] text-ink underline-offset-4 hover:underline">
              {t.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-3 border-t border-dark-200 pt-6">
        <span className="text-text-small text-dark-700">Share on:</span>
        {['X', 'in', '⎘'].map((g) => (
          <span key={g} aria-hidden="true"
                className="font-sans text-text-small text-ink">{g}</span>
        ))}
      </div>

      {cta && <a href="#" className="btn btn-primary mt-6 w-full">{cta}</a>}
    </div>
  )
}

/* The collapsed video transcript. Live keeps the whole thing in the DOM behind
   a closed disclosure, so the clone renders the same affordance rather than a
   third-party player embed. */
function Transcript({ lines = [] }) {
  const [open, setOpen] = useState(false)
  if (!lines.length) return null
  return (
    <div className="mt-10 border border-flame-300 bg-flame-200">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="font-sans text-[18px] leading-[21.6px] text-dark-900">Transcript</span>
        <span aria-hidden="true"
              className="grid h-5 w-5 shrink-0 place-items-center border border-flame-600 text-flame-600">
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
            <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" />
            {!open && <path d="M6 2v8" stroke="currentColor" strokeWidth="1.5" />}
          </svg>
        </span>
      </button>
      {open && (
        <div className="flex flex-col gap-3 px-5 pb-5">
          {lines.map((l, i) => (
            <p key={i} className="text-text-small text-ink text-pretty">{l}</p>
          ))}
        </div>
      )}
    </div>
  )
}

/* Live hyperlinks a fixed set of product names wherever they appear in the
   article prose (e.g. "aligned with your Jasper IQ assets including Brand
   Voice, Style Guide … and your Jasper Knowledge Base"). Reproducing that by
   hand in every page's copy would mean forking each string into a node tree,
   so the phrases are linked here instead — longest-first so "Jasper Knowledge
   Base" wins over "Knowledge Base". */
const LINKED = [
  ['Jasper Knowledge Base', '/knowledge-base'],
  ['SEO, AEO, and GEO', '/solutions/seo-aeo-geo'],
  ['Knowledge Base', '/knowledge-base'],
  ['Visual Guidelines', '/visual-guidelines'],
  ['Brand Voice', '/brand-voice'],
  ['Style Guide', '/style-guide'],
  ['Jasper IQ', '/jasper-iq'],
  ['Canvas', '/canvas'],
  ['Grid', '/grid'],
]

function linkify(text) {
  if (typeof text !== 'string') return text
  const pattern = new RegExp(`(${LINKED.map(([p]) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  const parts = text.split(pattern)
  if (parts.length === 1) return text
  return parts.map((part, i) => {
    const hit = LINKED.find(([p]) => p === part)
    return hit
      ? <a key={i} href={hit[1]} className="text-ink underline underline-offset-2">{part}</a>
      : part
  })
}

/* One article body node. `sections` is an ordered list so a page can lay its
   own copy out without this file knowing anything about it. */
function Body({ nodes }) {
  return nodes.map((n, i) => {
    if (n.h2) {
      return (
        <h2 key={i} id={n.id}
            className="reveal mt-14 font-serif text-ink tracking-tightest leading-[1.05]
                       text-[clamp(2.125rem,3.75vw,3.375rem)]">
          {n.h2}
        </h2>
      )
    }
    if (n.h3) {
      const big = n.size === 38
      return (
        <h3 key={i} className={`reveal mt-10 font-serif text-ink tracking-tightest
                                ${big ? 'text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1'
                                      : 'text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.1]'}`}>
          {n.h3}
        </h3>
      )
    }
    if (n.ul) {
      return (
        <ul key={i} className="reveal mt-4 flex list-disc flex-col gap-[6px] pl-5">
          {n.ul.map((li, j) => (
            <li key={j} className="text-text-main text-ink text-pretty">{linkify(li)}</li>
          ))}
        </ul>
      )
    }
    return (
      <p key={i} className="reveal mt-4 text-text-main text-ink text-pretty">{linkify(n.p)}</p>
    )
  })
}

export default function AgentDetail({
  breadcrumb = { label: 'Agents Library', href: '/agents#library' },
  title, intro,
  card,                 // {name, icon, still, includedIn, usedFor}
  toc = [], tocCta = 'Get A Demo Of This Agent',
  transcript = [],
  body = [],            // ordered nodes ABOVE the benefits panel
  benefits,             // {title, items:[{title, body}]}
  useCases,             // {title, items:[{title, body}]}
  useCasesBody,         // alternative: a raw node list (translation's bulleted form)
  faq,                  // {title, items:[{q,a}]}
  closing,              // {title, body, cta}
}) {
  const ref = useReveal({ threshold: 0 })
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div ref={ref}>
      <GridPlate />

      <div aria-hidden="true" style={{ height: 80 }} />

      <div className="u-container">
        <a href={breadcrumb.href} className="link-arrow font-mono text-text-main">
          <span aria-hidden="true">&larr;</span>
          {breadcrumb.label}
        </a>
      </div>

      {/* sticky_scroll_content_wrap — 877px article | 443px rail */}
      <div className="u-container mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_443px] lg:gap-[78px]">

        {/* ---- article ---- */}
        <article className="min-w-0">
          <h1 className="reveal font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]">
            {title}
          </h1>

          <p className="reveal mt-8 text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '80ms' }}>
            {linkify(intro)}
          </p>

          <Transcript lines={transcript} />

          <Body nodes={body} />

          {/* ---- benefits panel: blue-300 slab, white 2-up cards ---- */}
          {benefits && (
            <section id="benefits" className="clip-bleed relative mt-16 bg-blue-300 bg-grid p-8 lg:p-16"
                     style={{ '--grid-color': 'rgba(255,255,255,.45)', '--grid-size': '32px' }}>
              <h2 className="reveal relative font-serif text-ink tracking-tightest leading-[1.05]
                             text-[clamp(2.125rem,3.75vw,3.375rem)]">
                {benefits.title}
              </h2>
              <div className="relative mt-10 grid gap-gutter sm:grid-cols-2">
                {benefits.items.map((b, i) => (
                  <article key={b.title} className="reveal bg-surface p-10"
                           style={{ '--reveal-delay': `${(i % 2) * 80}ms` }}>
                    {/* measured: ABC ROM 24px — the one sans heading on the page */}
                    <h3 className="max-w-[22ch] font-sans text-h4 text-ink">{b.title}</h3>
                    <p className="mt-4 text-text-main text-ink text-pretty">{linkify(b.body)}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* ---- use cases: bulleted form (translation) ---- */}
          {useCasesBody && (
            <section id="use-cases" className="mt-16">
              <Body nodes={useCasesBody} />
            </section>
          )}

          {/* ---- use cases: heading + paragraph pairs ---- */}
          {useCases && (
            <section id="use-cases" className="mt-16">
              <h2 className="reveal font-serif text-ink tracking-tightest leading-[1.05]
                             text-[clamp(2.125rem,3.75vw,3.375rem)]">
                {useCases.title}
              </h2>
              {useCases.items.map((u) => (
                <div key={u.title} className="reveal mt-10">
                  <h3 className="max-w-[24ch] font-serif text-ink tracking-tightest leading-[1.1]
                                 text-[clamp(1.5rem,1.95vw,1.75rem)]">
                    {u.title}
                  </h3>
                  <p className="mt-4 text-text-main text-ink text-pretty">{linkify(u.body)}</p>
                </div>
              ))}
            </section>
          )}
        </article>

        {/* ---- sticky rail ---- */}
        <aside className="min-w-0">
          {card && <AgentCard {...card} />}
          <div className="mt-12">
            <TableOfContents toc={toc} cta={tocCta} />
          </div>
        </aside>
      </div>

      {/* ---- FAQ (accordion_1) ---- */}
      {faq && (
        <div id="faqs" className="u-container mt-24 grid gap-8
                                  lg:grid-cols-[minmax(0,250px)_minmax(0,1fr)] lg:gap-gutter">
          <div>
            {/* rotation on a WRAPPER, never on the .reveal element */}
            <div className="mb-4 inline-block" style={{ transform: 'rotate(-6deg)' }}>
              <span className="reveal inline-block bg-flame-600 px-3 py-1 font-serif text-h3 text-white">
                FAQs
              </span>
            </div>
            <h2 className="reveal max-w-[18ch] font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(1.5rem,2.65vw,2.375rem)]"
                style={{ '--reveal-delay': '60ms' }}>
              {faq.title}
            </h2>
          </div>

          <div className="reveal flex flex-col gap-[1px]" style={{ '--reveal-delay': '120ms' }}>
            {faq.items.map((it, i) => (
              <div key={it.q} className="bg-blue-300">
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                        aria-expanded={openFaq === i}
                        className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left">
                  <span className="font-serif text-h5 text-ink">{it.q}</span>
                  <span aria-hidden="true"
                        className="grid h-5 w-5 shrink-0 place-items-center border border-ink text-ink">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" />
                      {openFaq !== i && <path d="M6 2v8" stroke="currentColor" strokeWidth="1.5" />}
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-text-small text-ink text-pretty">{it.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div aria-hidden="true" style={{ height: 112 }} />

      {/* ---- closing hero_vertical_wrap ---- */}
      {closing && (
        <section className="clip-bleed relative bg-flame-300 bg-grid px-6 py-24 text-center"
                 style={{ '--grid-color': 'rgba(255,255,255,.5)', '--grid-size': '40px' }}>
          <div className="relative mx-auto max-w-[1035px]">
            <h2 className="reveal font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]">
              {closing.title}
            </h2>
            {closing.body && (
              <p className="reveal mx-auto mt-6 max-w-[62ch] text-text-main text-ink text-pretty"
                 style={{ '--reveal-delay': '100ms' }}>
                {closing.body}
              </p>
            )}
            {/* live's closing band pairs an outline "Get Started Today" with
                the filled demo button */}
            <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-4"
                 style={{ '--reveal-delay': '160ms' }}>
              <a href="#" className="btn btn-secondary">Get Started Today</a>
              <a href="#" className="btn btn-primary">{closing.cta}</a>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
