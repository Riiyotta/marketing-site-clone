import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.grid_hero_wrap` as used by the six Solutions > By Industry pages — the
   same right-anchored photo band as blocks/GridHero, plus the stepped
   pixel-grid overlay that dissolves the photo's left edge into the ground.
   GridHero's Platform variants bake that dither into the photo asset; these
   pages layer it as a separate SVG, so this is its own block rather than a
   flag on GridHero.

   MEASURED at 1440px on live /solutions/by-industry/tech (.scrape/solx3.json):
     section     1440 x 683, ground blue-600 (rgb 0,67,211) full-bleed
     copy column x=40, 672px wide
       112px   g_section_space
       eyebrow mono 16/16 ink on a WHITE chip, 314px wide  (y=112)
       h1      Feature 54/56.7 WHITE, 672px measure, 4 lines (y=156, h=224)
       body    ABC ROM 16/22.4 white, 616px measure         (y=404, h=79)
       button  a single white filled "Get a Demo", 141x48   (y=523)
       112px   g_section_space
     photo       941 x 683 at x=499, right-bleeding
     pixels      `grid_hero_pixels` 563 x 683 at x=405 — a 831x1008 SVG of
                 59.53px blue-600 squares that steps across the photo's left
                 edge. Its right portion is transparent, so the photo shows
                 through; the solid left columns read as the ground.

   Page heights vary 956-1063 because the h1 runs 3-5 lines; the band grows
   with the copy rather than being pinned, which is what live does.

   PROPS
     eyebrow  string            the mono label ("Solutions for Technology Companies")
     title    string            the page h1
     body     string            the lede
     ctas     [{label, variant, href}]
     photo    {src, alt}        the 941-wide photograph
--------------------------------------------------------------------------- */

export default function IndustryHero({ eyebrow, title, body, ctas = [], photo }) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-blue-600">
      {/* right-anchored photograph */}
      {photo && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
             style={{ width: 941 }} aria-hidden="true">
          <img src={photo.src} alt="" className="h-full w-full object-cover" />
        </div>
      )}

      {/* the stepped pixel grid dissolving the photo's left edge */}
      <div className="pointer-events-none absolute inset-y-0 hidden lg:block"
           style={{ left: 405, width: 563 }} aria-hidden="true">
        <img src="/assets/grid-hero-pixels.svg" alt=""
             className="h-full w-full object-cover object-left" />
      </div>

      <div className="relative u-container py-[112px]">
        <div className="flex max-w-[672px] flex-col">
          {eyebrow && (
            <Eyebrow className="reveal self-start bg-surface px-[6px] py-[2px] text-ink">
              {eyebrow}
            </Eyebrow>
          )}

          {title && (
            <h1 className="reveal mt-[24px] font-serif text-white tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              {title}
            </h1>
          )}

          {body && (
            <p className="reveal mt-6 max-w-[616px] text-text-main text-white text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              {body}
            </p>
          )}

          {ctas.length > 0 && (
            <CtaRow ctas={ctas} className="reveal mt-10" style={{ '--reveal-delay': '200ms' }} />
          )}
        </div>
      </div>

      {/* below lg the photo stacks under the copy rather than bleeding */}
      {photo && (
        <img src={photo.src} alt={photo.alt || ''} loading="lazy"
             className="block h-[300px] w-full object-cover lg:hidden" />
      )}
    </section>
  )
}
