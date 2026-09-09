import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.illo_hero` — the centred hero on /solutions/seo-aeo-geo. A one-off: no
   other route in the Solutions family uses it, and neither Solutions template
   includes it.

   MEASURED at 1440px on live (.scrape/seolib.json, section 834px tall):
     ground   flame-700 (rgb 128,26,16) — the darkest coral step, full-bleed
     eyebrow  mono 16/16 ink on a flame-300 chip, CENTRED
     h1       Feature 80/80 WHITE, centred, 2 lines
     body     ABC ROM 16/22.4 white, centred, ~62ch measure
     cta      a single white filled "Get a Demo" button, centred
     illo     "SEO Hero NEw-min" 1440 x 642 pinned at y=192 — a starfield /
              dune render that fills the band's lower two-thirds and bleeds
              to both edges. The copy sits ON it, so it is a background layer
              rather than a sibling column.

   PROPS
     eyebrow, title, body
     ctas  [{label, variant, href}]
     illo  {src, alt}  the full-bleed illustration
--------------------------------------------------------------------------- */

export default function IlloHero({ eyebrow, title, body, ctas = [], illo }) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-flame-700 lg:min-h-[834px]">
      {/* the illustration fills the band's lower portion, edge to edge */}
      {illo && (
        <img src={illo.src} alt="" aria-hidden="true"
             className="pointer-events-none absolute inset-x-0 bottom-0 w-full object-cover"
             style={{ height: 642 }} />
      )}

      <div className="relative u-container flex flex-col items-center pt-[112px] pb-[112px] text-center">
        {eyebrow && (
          <Eyebrow className="reveal bg-flame-300 px-[6px] py-[2px] leading-none text-ink">
            {eyebrow}
          </Eyebrow>
        )}

        {title && (
          <h1 className="reveal mt-6 max-w-[20ch] font-serif text-white tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
              style={{ '--reveal-delay': '80ms' }}>
            {title}
          </h1>
        )}

        {body && (
          <p className="reveal mt-6 max-w-[62ch] text-text-main text-white text-balance"
             style={{ '--reveal-delay': '140ms' }}>
            {body}
          </p>
        )}

        {ctas.length > 0 && (
          <CtaRow ctas={ctas} className="reveal mt-8 justify-center"
                  style={{ '--reveal-delay': '200ms' }} />
        )}
      </div>
    </section>
  )
}
