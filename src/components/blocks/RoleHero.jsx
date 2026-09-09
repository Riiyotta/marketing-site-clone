import { useReveal } from '../../hooks/useReveal'
import { CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.hero_main_wrap.is_full_height.is_solutions` — the CENTRED hero that opens
   all six Solutions > By Role pages. Unlike every Platform hero (copy left,
   art right) this one stacks the copy dead centre and flanks it with two
   mirrored collages of a pattern block, a cut-out headshot, a small UI card
   and a decorative stripe.

   MEASURED at 1440px on live /solutions/by-role/brand-marketers
   (.scrape/solx3.json, section 1440 x 750, white ground):

     112px       g_section_space
     copy well   616px wide, centred at x=412
       h1        the mono eyebrow IS the page's <h1> on live — "Solutions for
                 Brand Marketers", 16px ABC ROM Mono ink on a green-300 chip
       h2        Feature 54/56.7 ink, 616px measure, 2 lines  (y=248, h=111)
       body      ABC ROM 16/22.4 ink, balanced               (y=395, h=35)
       CTAs      a 164px outline "Start Free Trial" beside a 125px flame
                 "Get Demo", 16px apart, centred as a 301px group (y=453)

     LEFT collage `.hero_sol_left`, a 544x750 column anchored at x=-24 (it
     bleeds off-canvas). Offsets below are RELATIVE to that column
     (.scrape/rolehero.mjs read them straight off the live boxes):
       pattern   392x460 at   0, 97   jasp-sol-hero-pattern-left
       UI card   195x131 at 228, 303  jasp-sol-hero-ui-box, caption inset
                                      +11,+18 ("Creative Brief")
       headshot  316x375 at 228, 375  per-role, e.g. brand-headshot
       stripe    307x393 at  51, 428  jasp-sol-hero-decor-1

     RIGHT collage `.hero_sol_right`, the same 544x750 column at x=920:
       pattern   392x459 at 152, 145  jasp-sol-hero-pattern-right
       UI card   195x131 at 169, 280  caption "Ad Campaign"
       headshot  316x374 at   0, 376  a second, shared headshot
       stripe     71x352 at 277, 510  jasp-sol-hero-decor-2

   Both collages are decoration and are dropped below lg, where the hero
   becomes the centred copy alone — which is what live does at 768/390.

   PROPS
     eyebrow      string   the mono chip; rendered as the page's <h1>
     title        string   the 54px Feature headline (an <h2> on live)
     body         string   the lede
     ctas         [{label, variant, href}]
     headshotLeft  {src, alt}   the per-role cut-out on the left
     headshotRight {src, alt}   the shared cut-out on the right
     cardLeft / cardRight  string  the UI-card captions
--------------------------------------------------------------------------- */

/* `.hero_sol_ui` — the 195x131 window card with its caption overlaid at
   x=+11, y=+18 inside it. The frame itself is a captured asset. */
function UiCard({ label, className = '', style }) {
  return (
    <div className={`absolute ${className}`} style={style} aria-hidden="true">
      <img src="/assets/jasp-sol-hero-ui-box.webp" alt="" width={195} height={131}
           className="block w-[195px]" />
      <span className="absolute left-[11px] top-[18px] font-sans text-text-small text-ink">
        {label}
      </span>
    </div>
  )
}

export default function RoleHero({
  eyebrow, title, body, ctas = [],
  headshotLeft, headshotRight, cardLeft = 'Creative Brief', cardRight = 'Ad Campaign',
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-surface lg:min-h-[750px]">
      {/* LEFT collage */}
      <div className="pointer-events-none absolute inset-y-0 hidden lg:block"
           style={{ left: -24, width: 544 }} aria-hidden="true">
        <img src="/assets/jasp-sol-hero-pattern-left.webp" alt=""
             width={392} height={460}
             className="absolute left-0 w-[392px]" style={{ top: 97 }} />
        <img src="/assets/jasp-sol-hero-decor-1.webp" alt=""
             width={307} height={393}
             className="absolute w-[307px]" style={{ left: 51, top: 428 }} />
        <UiCard label={cardLeft} style={{ left: 228, top: 303 }} />
        {headshotLeft && (
          <img src={headshotLeft.src} alt="" width={316} height={375}
               className="absolute w-[316px]" style={{ left: 228, top: 375 }} />
        )}
      </div>

      {/* RIGHT collage */}
      <div className="pointer-events-none absolute inset-y-0 hidden lg:block"
           style={{ left: 920, width: 544 }} aria-hidden="true">
        <img src="/assets/jasp-sol-hero-pattern-right.webp" alt=""
             width={392} height={459}
             className="absolute w-[392px]" style={{ left: 152, top: 145 }} />
        <img src="/assets/jasp-sol-hero-decor-2.webp" alt=""
             width={71} height={352}
             className="absolute w-[71px]" style={{ left: 277, top: 510 }} />
        <UiCard label={cardRight} style={{ left: 169, top: 280 }} />
        {headshotRight && (
          <img src={headshotRight.src} alt="" width={316} height={374}
               className="absolute w-[316px]" style={{ left: 0, top: 376 }} />
        )}
      </div>

      <div className="relative u-container py-[112px]">
        <div className="mx-auto flex max-w-[616px] flex-col items-center text-center">
          {eyebrow && (
            <h1 className="reveal eyebrow inline-block bg-green-300 px-[6px] py-[2px] leading-none text-ink">
              {eyebrow}
            </h1>
          )}

          {title && (
            <h2 className="reveal mt-8 font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              {title}
            </h2>
          )}

          {body && (
            <p className="reveal mt-6 text-text-main text-ink text-balance"
               style={{ '--reveal-delay': '140ms' }}>
              {body}
            </p>
          )}

          {ctas.length > 0 && (
            <CtaRow ctas={ctas} className="reveal mt-6 justify-center"
                    style={{ '--reveal-delay': '200ms' }} />
          )}
        </div>
      </div>
    </section>
  )
}
