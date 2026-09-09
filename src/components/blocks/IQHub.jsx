import { useReveal } from '../../hooks/useReveal'

/* ---------------------------------------------------------------------------
   `hero_main_wrap` + `feature_banner_wrap` — the "Jasper IQ" cross-sell band
   that closes the IQ-family pages. Live /knowledge-base and /product-iq both
   end on it before the closing photo.

   MEASURED on live /knowledge-base at 1440px (section h=1235):
     header  centred inside the 1360px well:
       eyebrow  mono 16/16 ink on a flame-300 chip                    y=+2
       h1-scale statement — live renders it as a <p> at Feature 80/80 in a
         ~1000px measure, NOT an <h*>, which is why the section reports no
         heading in the capture
       body     ABC ROM 16/22.4 ink, ~640px measure, centred
       a single 121x48 outline "Jasper IQ" button
     banner  `.feature_banner_wrap` 1360 x 634 at x=40:
       an "IQ BG New" SVG fills the whole box, and SIX solid notch blocks are
       cut out of its corners in flame-200 (top pair) and white (bottom pair):
         topleft 214x75 @ 0,0        topleft_vertical  81x75 @ 0,48
         topright 347x75 @ 1013,0    topright_vertical 97x160 @ 1263,48
         bottomright_vertical 108x75 @ 1252,463
         bottomleft_vertical  81x75 @ 0,511   bottomright_alt 167x75 @ 1193,511
         bottomleft 347x75 @ 0,559  bottomright 347x75 @ 1013,559
       over that sit five collage layers at their measured offsets:
         rive_background      720x535 @ 320,96   (the navy pixel slab)
         avatar-headshots     389x477 @ 464,157  (the portrait)
         Knowledge Base svg   288x193 @ 176,96
         Brand IQ floater     288x190 @ 766,69
         Product IQ           288x230 @ 104,365
         Marketing IQ floater 288x215 @ 896,365
       (x here is banner-relative: page x minus the 40px well offset.)

   PROPS
     eyebrow, title, body, cta {label, href}
   Defaults carry the measured /knowledge-base copy, which /product-iq shares.
--------------------------------------------------------------------------- */

/* banner-relative offsets, straight off the live geometry walk */
const NOTCHES = [
  { l: 0,    t: 0,   w: 214, h: 75,  tone: 'bg-flame-200' },
  { l: 0,    t: 48,  w: 81,  h: 75,  tone: 'bg-flame-200' },
  { l: 1013, t: 0,   w: 347, h: 75,  tone: 'bg-flame-200' },
  { l: 1263, t: 48,  w: 97,  h: 160, tone: 'bg-flame-200' },
  { l: 1252, t: 463, w: 108, h: 75,  tone: 'bg-surface' },
  { l: 0,    t: 511, w: 81,  h: 75,  tone: 'bg-surface' },
  { l: 1193, t: 511, w: 167, h: 75,  tone: 'bg-surface' },
  { l: 0,    t: 559, w: 347, h: 75,  tone: 'bg-surface' },
  { l: 1013, t: 559, w: 347, h: 75,  tone: 'bg-surface' },
]

const LAYERS = [
  { src: '/assets/rive_background.avif', w: 720, h: 535, l: 320, t: 96, alt: '' },
  { src: '/assets/knowledge-base.svg',   w: 288, h: 193, l: 176, t: 96,
    alt: 'A Knowledge Base panel offering "Add to Knowledge Base" from text, file upload or URL.' },
  { src: '/assets/avatar-headshots.png', w: 389, h: 477, l: 464, t: 157, alt: '' },
  { src: '/assets/brand_iq-floater.png', w: 288, h: 190, l: 766, t: 69,
    alt: 'A Brand IQ card flagging an image that does not meet brand guidelines.' },
  { src: '/assets/product-iq.avif',      w: 288, h: 230, l: 104, t: 365,
    alt: 'A Product IQ card listing a product’s sizes and colourways.' },
  { src: '/assets/marketing_iq_floater.avif', w: 288, h: 215, l: 896, t: 365,
    alt: 'A Marketing IQ card optimizing a newsletter’s content for open rates.' },
]

export default function IQHub({
  eyebrow = 'Jasper IQ',
  title = 'The intelligence layer that powers agent execution',
  body = 'Jasper IQ embeds brand rules, company knowledge, audience context, and policy controls directly into agents and workflows at runtime—ensuring every output starts within the right guardrails.',
  cta = { label: 'Jasper IQ', href: '/jasper-iq' },
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="clip-bleed relative bg-flame-200">
      <div className="u-container flex flex-col items-center pt-[112px] text-center">
        <p className="reveal eyebrow inline-block bg-flame-300 px-1 text-ink">{eyebrow}</p>

        {/* live renders this statement as a <p> at display scale, not a heading */}
        <p className="reveal mt-6 max-w-[1000px] font-serif text-ink tracking-tightest leading-1
                      text-[clamp(2.5rem,5.55vw,5rem)]"
           style={{ '--reveal-delay': '80ms' }}>
          {title}
        </p>

        <p className="reveal mt-6 max-w-[640px] text-text-main text-ink text-pretty"
           style={{ '--reveal-delay': '140ms' }}>
          {body}
        </p>

        {cta && (
          <a href={cta.href} className="btn btn-secondary reveal mt-8"
             style={{ '--reveal-delay': '200ms' }}>
            {cta.label}
          </a>
        )}
      </div>

      {/* feature_banner_wrap — 1360 x 634 */}
      <div className="u-container mt-[100px]">
        <div className="clip-bleed relative mx-auto w-full" style={{ maxWidth: 1360, aspectRatio: '1360 / 634' }}>
          <img src="/assets/IQ-BG-New.svg" alt="" aria-hidden="true" loading="lazy"
               className="absolute inset-0 h-full w-full object-cover" />

          {/* the corner notches punched out of the plate */}
          <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
            {NOTCHES.map((n, i) => (
              <div key={i} className={`absolute ${n.tone}`}
                   style={{ left: n.l, top: n.t, width: n.w, height: n.h }} />
            ))}
          </div>

          {/* the collage — absolute at the measured offsets on lg, and a plain
              centred portrait below it where the offsets would overflow */}
          <div className="absolute inset-0 hidden lg:block">
            {LAYERS.map((l) => (
              <img key={l.src} src={l.src} alt={l.alt} aria-hidden={!l.alt} loading="lazy"
                   className="absolute max-w-none object-contain"
                   style={{ left: l.l, top: l.t, width: l.w, height: l.h }} />
            ))}
          </div>

          <img src="/assets/avatar-headshots.png" alt="" aria-hidden="true" loading="lazy"
               className="absolute left-1/2 top-1/2 h-[80%] w-auto -translate-x-1/2 -translate-y-1/2
                          object-contain lg:hidden" />
        </div>
      </div>

      <div aria-hidden="true" style={{ height: 112 }} />
    </section>
  )
}
