import { useReveal } from '../../hooks/useReveal'
import { Eyebrow } from './primitives'

/* ---------------------------------------------------------------------------
   `.horizontal_vis_wrap` as it appears on the six Solutions > By Industry
   pages — the same two-column band as HorizontalVis, but the copy column
   carries a THREE-ITEM CHECKLIST under the lede instead of a single body
   paragraph + arrow link, and the art column layers a product screenshot on
   top of a large tinted "BG n.png" backdrop.

   MEASURED at 1440px on live /solutions/by-industry/tech
   (.scrape/plat-solutions-by-industry-tech.json, .scrape/solx.json):

     section h  871-1199 depending on copy length; ground is the page's
                white surface (the tint lives in the BG art, not the section).
     u-container 1360px, two columns of 660px on a 40px gutter, copy LEFT on
                every row of every industry page (live never flips these).

     copy column, x=40:
       eyebrow   mono 16/16 ink on a per-row CHIP — measured tints:
                   row 1  rgb(210,255,193)  green-400
                   row 2  rgb(206,235,255)  blue-300
                   row 3  rgb(210,255,193)  green-400
                 (healthcare/finance reuse the same three-step cycle)
       h2        Feature 54/56.7 ink, 660px measure
       lede      ABC ROM 16/22.4 ink — one or two paragraphs
       checklist 3 items, each:
                   a 24x24 checkmark glyph (viewBox 0 0 24 24,
                   "M20 6L9 17L4 12", stroke-width 1.75, stroke-linecap
                   square) in a 24px green-600 square, left column
                   h3    ABC ROM 20/22 ink, weight 500
                   body  ABC ROM 16/22.4 ink, 336px measure
                 rows are 24px apart; glyph gutter is 16px.

     art column, right: the BG backdrop (636 x 647-975) with the product shot
     (586-636 wide) overlapping it, offset down-left. Live composites these as
     two absolutely-positioned images inside a relative wrapper; the backdrop
     defines the column height.

   Some rows carry inline links inside the checklist copy ("Brand IQ",
   "Jasper Studio"); those arrive as `links` on the item and are substituted
   into the text so the anchor lands on the right words.

   PROPS
     eyebrow      string            the mono chip label
     eyebrowChip  tailwind bg class per-row chip tint (default green-400)
     title        string            the 54px Feature h2
     lede         string|string[]   one or two intro paragraphs
     items        [{ title, body, links?: [{label, href}] }]
     bg           {src, w, h}       the tinted backdrop art
     art          {src, alt, w, h}  the product screenshot on top
     spaceTop / spaceBottom  px     g_section_space heights (default 112)
--------------------------------------------------------------------------- */

/* `.checklist_grid_svg` — traced verbatim from the live inline SVG. */
function Check({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  )
}

/* Splits `body` around each link label so the anchor wraps the exact words
   live links, rather than appending a bare link after the sentence. */
function withLinks(body, links) {
  if (!links || !links.length) return body
  const pattern = links.map((l) => l.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  const parts = body.split(new RegExp(`(${pattern})`))
  return parts.map((part, i) => {
    const hit = links.find((l) => l.label === part)
    return hit
      ? <a key={`${part}-${i}`} href={hit.href} className="text-ink underline underline-offset-2 hover:text-flame-600">{part}</a>
      : part
  })
}

export default function ChecklistVis({
  eyebrow, eyebrowChip = 'bg-green-400', title, lede, items = [],
  bg, art, spaceTop = 112, spaceBottom = 112,
}) {
  const ref = useReveal({ threshold: 0 })
  const ledes = Array.isArray(lede) ? lede : lede ? [lede] : []

  return (
    <section ref={ref} className="relative clip-bleed bg-surface">
      <div aria-hidden="true" style={{ height: spaceTop }} />

      <div className="u-container">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
          {/* copy column */}
          <div className="flex max-w-[660px] flex-col">
            {eyebrow && (
              <Eyebrow className={`reveal mb-[22px] self-start px-[6px] py-[2px] ${eyebrowChip}`}>
                {eyebrow}
              </Eyebrow>
            )}

            {title && (
              <h2 className="reveal font-serif text-ink tracking-tightest leading-[1.05]
                             text-[clamp(2.125rem,3.75vw,3.375rem)]"
                  style={{ '--reveal-delay': '80ms' }}>
                {title}
              </h2>
            )}

            {ledes.map((t, i) => (
              <p key={i} className="reveal mt-6 max-w-[540px] text-text-main text-ink text-pretty"
                 style={{ '--reveal-delay': `${140 + i * 40}ms` }}>
                {t}
              </p>
            ))}

            {items.length > 0 && (
              <ul className="mt-8 flex flex-col gap-6">
                {items.map((it, i) => (
                  <li key={it.title} className="reveal flex gap-4"
                      style={{ '--reveal-delay': `${220 + i * 70}ms` }}>
                    <span className="mt-[2px] grid h-6 w-6 shrink-0 place-items-center
                                     bg-green-300 text-green-700">
                      <Check className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-sans text-[20px] font-medium leading-[22px] text-ink">
                        {it.title}
                      </h3>
                      <p className="mt-2 max-w-[336px] text-text-main text-ink text-pretty">
                        {withLinks(it.body, it.links)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* art column — backdrop with the product shot layered over it */}
          {(bg || art) && (
            <div className="reveal relative flex justify-center lg:justify-end"
                 style={{ '--reveal-delay': '120ms' }}>
              <div className="relative w-full" style={{ maxWidth: bg?.w || art?.w }}>
                {bg && (
                  <img src={bg.src} alt="" width={bg.w} height={bg.h} loading="lazy"
                       className="block h-auto w-full" />
                )}
                {art && (
                  <img src={art.src} alt={art.alt || ''} width={art.w} height={art.h}
                       loading="lazy"
                       className={bg
                         ? 'absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2'
                         : 'block h-auto w-full'} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div aria-hidden="true" style={{ height: spaceBottom }} />
    </section>
  )
}
