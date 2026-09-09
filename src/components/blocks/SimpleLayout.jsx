import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, ArrowLink } from './primitives'

/* ---------------------------------------------------------------------------
   `.simple_layout_wrap` — the N-up tile grid. 15x across Platform, the single
   most common block. Its shape varies by column count; all three variants
   measured on the IQ family share one grid and differ only in track width.

   MEASURED at 1440px:

   TWO-UP (brand-voice #1, h=737; visual-guidelines #1, h=737):
     40px  g_section_space
     .u-container 1360px -> two 660px tracks, 40px gutter
       each tile:
         media  660 x 440 image on a surface-2 (rgb 242,242,243) ground,
                the ground box measures 660 x 585 so it extends 145px BELOW
                the image and the copy sits inside that extension:
         h2/h3  Feature 28/30.8 ink at x = tile+24, 464px below tile top
         body   ABC ROM 18/21.6 ink, measure 612px
         link   optional coral mono "Learn More" 18/25.2  (present on the
                second brand-voice grid, absent on the first)
     112px g_section_space

   THREE-UP (brand-iq #1, h=638):
     32px  g_section_space, then three 443px tracks on a 16px gutter, each a
     flame-300 card 574px tall. Offsets INSIDE the card (measured y=1251):
       h3    +60   Feature 28/30.8 ink, 419px measure, 1-2 lines
       img   +167  354 x 190 illustration, centred
       body  +404  ABC ROM 18/21.6 ink, 347px measure, bottom-anchored
       card ends at +574; the section adds 32px below -> 638.
     i.e. copy-first / art-middle / body-last, and the body is pinned to the
     card foot rather than following the art, so cards with 3-line and 4-line
     bodies still share one baseline. `cardH` pins that measured height.

   PROPS
     items       [{ eyebrow, title, titleTag, body, link, img:{src,alt,w,h} }]
     cols        2 | 3            default 2
     order       'media-first' | 'copy-first'   default 'media-first'
     tint        tailwind bg for the tile ground (surface-2 / flame-300)
     mediaH      px   the image's rendered height (440 / 371 / 190)
     bg          tailwind class for the section ground
     spaceTop / spaceBottom  px

   PROMO variant (`variant="promo"`) — the SAME Webflow class used as a single
   wide banner rather than a tile grid. MEASURED on live /api (h=500) and
   /grid (h=274 and h=1125):
     one tinted panel inset in the 1360px container, 48px pad, holding a copy
     column (an optional chip eyebrow, a Feature heading, one button) beside a
     single wide screenshot. On /grid the same panel appears once with copy and
     no image ("Learn how to use Jasper Grid" + "Get Certified") and once as a
     bare video poster with no copy at all — so every part is optional.

   PROMO PROPS
     eyebrow, title, titleSize ('display'|'54'|'38'|'28'), cta {label,variant},
     img {src,alt,w,h}, tint (panel ground), bgImage (cover art behind the
     panel), center (bool), bleed (bool — panel spans the viewport)
--------------------------------------------------------------------------- */

const PROMO_TITLE = {
  display: 'text-[clamp(2.5rem,5.55vw,5rem)] leading-1',
  54: 'text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]',
  38: 'text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1',
  28: 'text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.1]',
}

export default function SimpleLayout({
  items = [], cols = 2, order = 'media-first',
  tint = 'bg-surface-2', mediaH = 440, mediaPad = false, cardH,
  bg = 'bg-surface', spaceTop = 40, spaceBottom = 112,
  variant = 'grid', eyebrow, title, titleSize = '54', cta, img,
  bgImage, center = false, bleed = false, minHeight,
}) {
  const ref = useReveal({ threshold: 0 })

  if (variant === 'promo') {
    const panel = (
      <div className={`clip-bleed relative ${tint} px-6 py-12 md:px-12`}
           style={minHeight ? { minHeight } : undefined}>
        {bgImage && (
          <img src={bgImage} alt="" aria-hidden="true" loading="lazy"
               className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        )}
        <div className={`relative grid items-center gap-10
                         ${img ? 'lg:grid-cols-2 lg:gap-10' : ''}
                         ${center ? 'text-center' : ''}`}>
          <div className={center ? 'mx-auto max-w-[40ch]' : ''}>
            {eyebrow && (
              <Eyebrow className="reveal inline-block bg-surface px-2 py-1">{eyebrow}</Eyebrow>
            )}
            {title && (
              <h2 className={`reveal mt-4 max-w-[26ch] font-serif text-ink tracking-tightest
                              ${PROMO_TITLE[titleSize] || PROMO_TITLE[54]} ${center ? 'mx-auto' : ''}`}
                  style={{ '--reveal-delay': '80ms' }}>
                {title}
              </h2>
            )}
            {cta && (
              <div className="reveal mt-8" style={{ '--reveal-delay': '160ms' }}>
                <a href="#" className={`btn ${cta.variant || 'btn-secondary'}`}>{cta.label}</a>
              </div>
            )}
          </div>
          {img && (
            <div className="reveal lg:justify-self-end" style={{ '--reveal-delay': '140ms' }}>
              <img src={img.src} alt={img.alt || ''} width={img.w} height={img.h} loading="lazy"
                   className="h-auto w-full object-contain" style={{ maxWidth: img.w }} />
            </div>
          )}
        </div>
      </div>
    )
    return (
      <section ref={ref} className={`relative clip-bleed ${bg}`}>
        <div aria-hidden="true" style={{ height: spaceTop }} />
        {bleed ? panel : <div className="u-container">{panel}</div>}
        <div aria-hidden="true" style={{ height: spaceBottom }} />
      </section>
    )
  }

  const grid = cols === 3
    ? 'sm:grid-cols-2 lg:grid-cols-3 gap-gutter'
    : 'lg:grid-cols-2 gap-10'

  return (
    <section ref={ref} className={`relative clip-bleed ${bg}`}>
      <div aria-hidden="true" style={{ height: spaceTop }} />

      <div className="u-container">
        <div className={`grid grid-cols-1 ${grid}`}>
          {items.map((it, i) => {
            const media = it.img && (
              <img src={it.img.src} alt={it.img.alt || ''}
                   width={it.img.w} height={it.img.h} loading="lazy"
                   className={`w-full object-contain ${mediaPad ? 'px-8' : ''}`}
                   style={{ height: mediaH }} />
            )
            const copy = (
              <div className={`flex flex-col ${cols === 3 ? 'px-[52px] pt-[60px]' : 'px-6 pb-5'}`}>
                {it.eyebrow && <Eyebrow className="mb-3">{it.eyebrow}</Eyebrow>}
                {it.title && (
                  <h3 className="font-serif text-ink tracking-tightest
                                 text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.1]">
                    {it.title}
                  </h3>
                )}
                {/* on the 3-up the body is bottom-anchored below the art, so
                    it is emitted by the card body instead of here. */}
                {it.body && cols !== 3 && (
                  <p className="mt-[10px] text-[18px] leading-[21.6px] text-ink text-pretty">
                    {it.body}
                  </p>
                )}
                {it.link && <ArrowLink {...it.link} className="mt-6 self-start" />}
              </div>
            )

            return (
              <div key={it.title || i}
                   className={`reveal flex flex-col ${tint}`}
                   style={{ '--reveal-delay': `${i * 90}ms`, minHeight: cardH }}>
                {order === 'copy-first'
                  ? (
                    <>
                      {copy}
                      {media && <div className="mt-[46px] px-[52px]">{media}</div>}
                      {it.body && (
                        <p className="mt-auto px-[52px] pb-[38px] pt-8 text-[18px] leading-[21.6px]
                                      text-ink text-pretty">
                          {it.body}
                        </p>
                      )}
                    </>
                  )
                  : <>{media}<div className="mt-6">{copy}</div></>}
              </div>
            )
          })}
        </div>
      </div>

      <div aria-hidden="true" style={{ height: spaceBottom }} />
    </section>
  )
}
