import { useReveal } from '../../hooks/useReveal'
import { Eyebrow } from './primitives'

/* ---------------------------------------------------------------------------
   `.layout_cards_wrap` holding `.card_iq_wrap` tiles — the "The only
   generative AI purpose-built for <role>" band, second section on all six
   Solutions > By Role pages.

   It shares the wrapper class with blocks/LayoutCards but not its shape:
   LayoutCards is a split header over IMAGE-topped cards on a white ground;
   this is a CENTRED header over three flat TINTED cards with no artwork.

   MEASURED at 1440px on live /solutions/by-role/brand-marketers
   (.scrape/solx.json, section 640-657 tall on the surface-2 ground):
     header    centred in the 1360px well
       eyebrow mono 16/16 ink on a yellow-500 chip (rgb 255,251,183) — "Use Cases"
       h2      Feature 38/38 ink, centred, 1-2 lines
     cards     three 443px tiles on a 16px gutter, each 219px tall, flush to
               the container. Per-card measured grounds:
                 1  rgb(230,255,217)  green-300
                 2  rgb(206,235,255)  blue-300
                 3  rgb(255,204,198)  a coral step BETWEEN flame-300 (#ffe8e2)
                    and flame-400 (#ffb3a3) — added to the token table as
                    flame-350 rather than hardcoded here.
               Inside each tile, inset 16px:
                 title  Feature 28/30.8, painted in a DARKER step of the tile's
                        own tint (green-700 / blue-700 / flame-700). The live
                        computed colour reads back as the tint itself because
                        the glyphs are knocked out over a solid inner block;
                        the painted pixels in .scrape/plat-solutions-by-role-
                        brand-marketers.png are the dark step, which is what is
                        reproduced.
                 body   ABC ROM 16/22.4 in the same dark step

   PROPS
     eyebrow  string    the chipped mono label ("Use Cases")
     title    string    the centred 38px Feature h2
     cards    [{title, body}]   exactly three on every live page
--------------------------------------------------------------------------- */

/* The three tile skins, in the order live paints them. */
const SKINS = [
  { bg: 'bg-green-300', fg: 'text-green-700' },
  { bg: 'bg-blue-300',  fg: 'text-blue-700'  },
  { bg: 'bg-flame-350', fg: 'text-flame-700' },
]

export default function UseCaseCards({ eyebrow, title, cards = [] }) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-surface-2">
      <div aria-hidden="true" className="h-[80px]" />

      <div className="u-container">
        <div className="flex flex-col items-center text-center">
          {eyebrow && (
            <Eyebrow className="reveal bg-yellow-500 px-[6px] py-[2px] leading-none">
              {eyebrow}
            </Eyebrow>
          )}
          {title && (
            <h2 className="reveal mt-6 max-w-[24ch] font-serif text-ink tracking-tightest leading-1
                           text-[clamp(1.875rem,2.64vw,2.375rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              {title}
            </h2>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const skin = SKINS[i % SKINS.length]
            return (
              <div key={c.title}
                   className={`reveal flex flex-col p-4 lg:min-h-[219px] ${skin.bg}`}
                   style={{ '--reveal-delay': `${i * 90}ms` }}>
                <h3 className={`font-serif tracking-tightest leading-[1.1] ${skin.fg}
                                text-[clamp(1.5rem,1.95vw,1.75rem)]`}>
                  {c.title}
                </h3>
                <p className={`mt-auto pt-6 text-text-main text-pretty ${skin.fg}`}>
                  {c.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div aria-hidden="true" className="h-[80px]" />
    </section>
  )
}
