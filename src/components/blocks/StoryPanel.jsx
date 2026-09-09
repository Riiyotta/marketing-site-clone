import { useReveal } from '../../hooks/useReveal'
import { ArrowLink } from './primitives'

/* ---------------------------------------------------------------------------
   `.stories_large_wrap` (inside a `.w-dyn-list`) — the customer-story panel
   that sits between the feature bands and the "How Jasper Powers …" cards on
   four of the six Solutions > By Industry pages.

   It is NOT on every industry page: /professional-services and
   /retail-and-consumer-goods ship the 8-section variant with no story panel
   at all, so the industry template renders this only when `story` is present.

   MEASURED at 1440px on live /solutions/by-industry/tech (.scrape/solx3.json,
   section 1440 x 851, ground blue-300 rgb(206,235,255) full-bleed):

     header row      1360px well at x=40, y=41, 105px tall, split
                       left  409px  customer logo (185x33), inset 41px
                       right 951px  "Read Customer Story" arrow link,
                             right-aligned at x=1144
     body row        1360px well at y=147, 663px tall — a FIXED height, so
                     the panel is 851px whether the page ships one stat, two,
                     or none (tech reserves both 331px slots but fills one).
                     Split:
                       left  408px  the STAT column — up to two 331px boxes
                             stacked, each: a Feature 54px figure at y=+116
                             inside the box and a mono 16/17 two-line caption
                             beneath it, both inset 41px
                       right 952px  the quote block, inset 41px:
                             a 56x50 quote glyph at x=489
                             the quote itself, Feature 32px ink, 465px measure,
                             starting at x=569
                             the portrait at x=1098, 222x277 (or 326x407 on the
                             stat-less finance/healthcare variant), decorated
                             with a solid triangle above-left and a row of
                             circles across its foot
     1px separators  the well is ruled with hairlines in a darker step of the
                     ground tint, which is what makes the panel read as a grid.

   Grounds measured per page: tech + media blue-300, financial-services +
   healthcare green-300. The decorations take the matching darker step
   (blue-600 / green-700), so `tone` selects the pair rather than hardcoding.

   PROPS
     tint      'blue' | 'green'   the ground + decoration pair
     logo      {src, alt, w, h}   the customer mark in the header
     link      {label, href}      "Read Customer Story" (omitted on some pages)
     stats     [{figure, caption}]  0-2 entries; the stat column is dropped
                                    entirely when empty
     quote     string[]           one or two quote paragraphs
     name      string             attribution name (mono, uppercase on live)
     role      string             attribution title
     portrait  {src, alt, w, h}   the headshot at its measured box
--------------------------------------------------------------------------- */

const TONE = {
  blue:  { bg: 'bg-blue-300',  rule: 'border-blue-400',  deco: 'text-blue-600',  label: 'text-blue-700' },
  green: { bg: 'bg-green-300', rule: 'border-green-400', deco: 'text-green-700', label: 'text-green-800' },
}

/* `.stories_large_quote_svg` — the 56x50 opening quote mark. */
function QuoteMark({ className = '' }) {
  return (
    <svg viewBox="0 0 56 50" fill="none" className={className} aria-hidden="true">
      <path d="M0 50V27.5C0 12.3 9.4 2.2 24.5 0v8.6C15.8 10.6 11 16.4 11 24.4h9.9V50H0Zm35.1 0V27.5C35.1 12.3 44.5 2.2 59.6 0v8.6c-8.7 2-13.5 7.8-13.5 15.8H56V50H35.1Z"
            fill="currentColor" />
    </svg>
  )
}

export default function StoryPanel({
  tint = 'blue', logo, link, stats = [], quote = [], name, role, portrait,
}) {
  const ref = useReveal({ threshold: 0 })
  const t = TONE[tint] || TONE.blue
  const lines = Array.isArray(quote) ? quote : [quote]

  return (
    <section ref={ref} className={`relative clip-bleed ${t.bg}`}>
      <div className="u-container py-[41px]">
        {/* header — logo | link */}
        {(logo || link) && (
          <div className={`reveal flex flex-wrap items-center justify-between gap-6 border-b ${t.rule} pb-[41px]`}>
            {logo && (
              <img src={logo.src} alt={logo.alt || ''} width={logo.w} height={logo.h}
                   loading="lazy" className="w-auto max-w-[200px] object-contain object-left"
                   style={{ height: logo.h || 33 }} />
            )}
            {link && <ArrowLink {...link} className="ml-auto" />}
          </div>
        )}

        {/* body — stats | quote */}
        <div className={`grid gap-10 pt-[41px] lg:min-h-[663px]
                         ${stats.length ? 'lg:grid-cols-[408px_minmax(0,1fr)]' : ''}`}>
          {stats.length > 0 && (
            <div className={`flex flex-col gap-10 lg:border-r ${t.rule} lg:pr-10`}>
              {stats.map((s, i) => (
                <div key={s.caption} className="reveal flex flex-col justify-end lg:h-[331px]"
                     style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <p className="font-serif text-ink tracking-tightest leading-1
                                text-[clamp(2.125rem,3.75vw,3.375rem)]">
                    {s.figure}
                  </p>
                  <p className={`eyebrow mt-3 max-w-[327px] leading-[17px] ${t.label}`}>
                    {s.caption}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">
            <div className="reveal flex min-w-0 flex-1 gap-5" style={{ '--reveal-delay': '80ms' }}>
              <QuoteMark className={`mt-1 h-[38px] w-[42px] shrink-0 ${t.deco}`} />
              <div className="flex min-w-0 flex-col gap-6">
                {lines.map((q, i) => (
                  <p key={i} className="max-w-[465px] font-serif text-ink tracking-tightest
                                        text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.15]">
                    {q}
                  </p>
                ))}
              </div>
            </div>

            {portrait && (
              <div className="reveal shrink-0" style={{ '--reveal-delay': '160ms' }}>
                {/* the decorations sit on their own wrappers, never on the
                    `.reveal` element — an inline transform there is silently
                    overridden by the reveal animation's fill:forwards. */}
                <div className="relative" style={{ width: portrait.w }}>
                  <span aria-hidden="true"
                        className={`absolute -left-6 -top-10 block h-[74px] w-[65px] ${t.deco}`}
                        style={{ background: 'currentColor', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <img src={portrait.src} alt={portrait.alt || ''}
                       width={portrait.w} height={portrait.h} loading="lazy"
                       className="relative block h-auto w-full object-cover" />
                  <span aria-hidden="true"
                        className={`absolute bottom-0 left-[10%] flex h-[34px] w-[90%] items-center ${t.deco}`}>
                    {Array.from({ length: 7 }).map((_, i) => (
                      <span key={i} className="block h-[30px] flex-1 rounded-full"
                            style={{ background: 'currentColor' }} />
                    ))}
                  </span>
                </div>

                {(name || role) && (
                  <div className={`mt-8 border-l pl-4 ${t.rule}`}>
                    {name && <p className={`eyebrow uppercase leading-[17px] ${t.label}`}>{name}</p>}
                    {role && <p className={`eyebrow uppercase leading-[17px] ${t.label}`}>{role}</p>}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
