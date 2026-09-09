import { useReveal } from '../../hooks/useReveal'
import { CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.closing_photo_wrap` — the 900px photo-and-copy band that closes every
   Solutions > By Industry page (in place of the `cta_main_wrap` the Platform
   pages use). Identical geometry on all six; only the headline, lede and the
   button label change.

   MEASURED at 1440px on live /solutions/by-industry/tech (.scrape/solx3.json):
     section     1440 x 900, ground WHITE (`g_background` is rgb 255,255,255)
     copy column x=40, 672px wide, top-anchored at y=0:
       h2      Feature 54/56.7 ink, 552px measure  (y=0,   h=111)
       lede    ABC ROM 16/22.4 ink, 308px measure  (y=135, h=57)
       button  flame-600 filled, 220x87 including its 32px pad (y=232)
       112px   g_section_space closing the column
     photo       941 x 900 at x=499 — bleeds to the right edge
     overlay     `closing_photo_overlay` 527x590 at x=329, y=0 — the greeting
                 card that laps OVER the photo's left edge
     circles     `closing_photo_circles` 1412x900, positioned at x=-930 inside
                 a 483px wrapper, so only its right ~482px shows in the copy
                 column's lower-left corner

   Below lg the photo stacks under the copy and the two decorations are
   dropped — they are pure ornament and have no content role.

   PROPS
     title   string   the 54px Feature h2
     body    string   the lede
     ctas    [{label, variant, href}]
     photo   {src, alt}  the 941x900 right-hand photograph
--------------------------------------------------------------------------- */

export default function ClosingPhoto({ title, body, ctas = [], photo }) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-surface">
      {/* right-anchored photograph */}
      {photo && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
             style={{ width: 941 }} aria-hidden="true">
          <img src={photo.src} alt="" className="h-full w-full object-cover" />
        </div>
      )}

      {/* the greeting-card overlay lapping the photo's left edge */}
      <img src="/assets/closing_photo_overlay.avif" alt="" aria-hidden="true"
           width={527} height={590} loading="lazy"
           className="pointer-events-none absolute left-[329px] top-0 hidden w-[527px] lg:block" />

      {/* the circles field in the copy column's lower-left */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden w-[483px] overflow-hidden lg:block"
           style={{ height: 900 }} aria-hidden="true">
        <img src="/assets/closing_circles.svg" alt=""
             className="absolute bottom-0 left-[-930px] w-[1412px] max-w-none" />
      </div>

      <div className="relative u-container flex flex-col justify-start pt-[112px] lg:min-h-[900px]">
        <div className="flex max-w-[672px] flex-col">
          {title && (
            <h2 className="reveal max-w-[552px] font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]">
              {title}
            </h2>
          )}

          {body && (
            <p className="reveal mt-6 max-w-[340px] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '100ms' }}>
              {body}
            </p>
          )}

          {ctas.length > 0 && (
            <CtaRow ctas={ctas} className="reveal mt-10" style={{ '--reveal-delay': '160ms' }} />
          )}
        </div>
      </div>

      {/* below lg the photo stacks rather than bleeding */}
      {photo && (
        <img src={photo.src} alt={photo.alt || ''} loading="lazy"
             className="block h-[320px] w-full object-cover lg:hidden" />
      )}
    </section>
  )
}
