import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, ArrowLink, CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.layout_cards_wrap` — a split header over a 3-up card row. 5x on Platform.

   MEASURED on live /style-guide at 1440px (section h=963):
     112px g_section_space
     header row inside the 1360px container, two columns:
       LEFT  672px:  eyebrow mono 16/16 ink at y=+114
                     h2 Feature 80/80 ink, 672px measure, 2 lines (160px)
       RIGHT 520px starting at x=728, top-aligned to the h2's optical centre:
                     body ABC ROM 18/21.6, then a 48px outline button 60px
                     under it ("Explore The Platform")
     48px gap, then three 443px cards on a 16px gutter, each 443px TALL:
       art     443 x 249 image flush to the card's top edge
       h2      Feature 28/30.8 ink, 16px in from the card edge, y=+265
       body    ABC ROM 18/21.6, measure 411px
       link    coral mono "Explore X" 18/25.2 at the card foot
     Card grounds are per-card 40%-alpha tints measured as
       rgb(255,249,252)          -> pink-300
       rgba(230,255,217,0.4)     -> green-300/40
       rgba(231,227,247,0.4)     -> violet-400/40

   PROPS
     eyebrow, title            header left column
     eyebrowChip  tailwind bg  the chipped eyebrow tint, where a page uses one.
                               The six Solutions > By Industry pages chip
                               "Features" in flame-300 (measured rgb
                               255,232,226 in .scrape/solx.json); the Platform
                               pages leave it bare, so this defaults to false.
     body, ctas, link          header right column
     cards  [{ title, body, link, img:{src,alt,w,h}, tint }]
     bg, spaceTop, spaceBottom
--------------------------------------------------------------------------- */

export default function LayoutCards({
  eyebrow, eyebrowChip = false, title, body, ctas = [], link, cards = [],
  bg = 'bg-surface', spaceTop = 112, spaceBottom = 112,
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className={`relative clip-bleed ${bg}`}>
      <div aria-hidden="true" style={{ height: spaceTop }} />

      <div className="u-container">
        {/* split header — 672px | 520px */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-[672px]">
            {eyebrow && (
              <Eyebrow className={`reveal mb-6 ${eyebrowChip
                ? `inline-block ${eyebrowChip} px-[6px] py-[2px] leading-none` : ''}`}>
                {eyebrow}
              </Eyebrow>
            )}
            {title && (
              <h2 className="reveal font-serif text-ink tracking-tightest
                             text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
                  style={{ '--reveal-delay': '80ms' }}>
                {title}
              </h2>
            )}
          </div>

          <div className="flex max-w-[520px] flex-col items-start">
            {body && (
              <p className="reveal text-[18px] leading-[21.6px] text-ink text-pretty"
                 style={{ '--reveal-delay': '140ms' }}>
                {body}
              </p>
            )}
            {ctas.length > 0 && (
              <CtaRow ctas={ctas} className="reveal mt-10" style={{ '--reveal-delay': '200ms' }} />
            )}
            {link && <ArrowLink {...link} className="reveal mt-10" style={{ '--reveal-delay': '200ms' }} />}
          </div>
        </div>

        {/* 3-up card row */}
        <div className="mt-12 grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div key={c.title}
                 className={`reveal flex flex-col ${c.tint || 'bg-surface-2'}`}
                 style={{ '--reveal-delay': `${i * 90}ms` }}>
              {c.img && (
                <img src={c.img.src} alt={c.img.alt || ''} width={c.img.w} height={c.img.h}
                     loading="lazy" className="w-full object-cover" style={{ height: 249 }} />
              )}
              <div className="flex flex-1 flex-col p-4 pb-8">
                <h3 className="font-serif text-ink tracking-tightest
                               text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.1]">
                  {c.title}
                </h3>
                {c.body && (
                  <p className="mt-[10px] text-[18px] leading-[21.6px] text-ink text-pretty">
                    {c.body}
                  </p>
                )}
                {c.link && <ArrowLink {...c.link} className="mt-auto pt-6 self-start" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden="true" style={{ height: spaceBottom }} />
    </section>
  )
}
