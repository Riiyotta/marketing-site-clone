import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, ArrowLink } from './primitives'

/* ---------------------------------------------------------------------------
   The `.horizontal_content_wrap` + `.seo_image_wrap` pair that repeats three
   times on /solutions/seo-aeo-geo — once each for SEO, GEO and AEO. Unlike
   ChecklistVis (copy over art, checklist under the lede) this one puts the
   COPY and the CHECKLIST side by side and hangs a full-width figure beneath.

   MEASURED at 1440px on live (.scrape/seox.json):

     horizontal_content_wrap  h 517-561, white ground
       112px g_section_space
       1360px well split into two 672px columns on a 16px gutter:
         LEFT   x=40
           eyebrow  mono 16/16 ink on a per-section CHIP:
                      SEO  blue-300  (rgb 206,235,255)
                      GEO  flame-400 (rgb 255,179,163)
                      AEO  green-400 (rgb 210,255,193)
           h3       Feature 54/56.7 ink, 672px measure   (y=+152)
           lede     ABC ROM 16/22.4 ink, 514px measure   (y=+279)
           link     an optional arrow link (GEO only)
         RIGHT  x=728, a stack of `checklist_grid_item` rows, 67px each on a
                40px pitch. Each row: a 24x24 checkmark on a chip tinted to
                MATCH the section (blue-300 / flame-300 / green-300), then
                h4 ABC ROM 20/20 ink and a 16/17.5 body on a 462px measure.

     seo_image_wrap  h 750, a 1360px `figure` in the container
       img         1360 x 750, flush to the well
       figcaption  ABC ROM 14px ink on white, directly beneath the image
       overlay     a 476x155 definition card floated at x=900, y=571 INSIDE
                   the image, built from two stacked panels:
                     top    470x44 on blue-400 (rgb 129,203,255) — an h4
                            "What is …?" plus a small circled glyph, right
                     bottom 470x103 on blue-300 — the definition, with its
                            key clause in <strong>
                   the card's 3px surround is blue-600 (rgb 0,67,211).

   The definition card is the same blue on all three sections — live does not
   retint it per section, so it is not parameterised.

   PROPS
     eyebrow      string           the mono chip label
     eyebrowChip  tailwind bg      per-section chip tint
     checkChip    tailwind bg      the checkmark tile tint
     title        string           the 54px Feature heading
     lede         string
     link         {label, href}    optional arrow link under the lede
     items        [{title, body}]  the checklist, 2-4 entries
     figure       {src, alt, caption, defTitle, defBody, defStrong}
--------------------------------------------------------------------------- */

/* `.checklist_grid_svg` — the same glyph the industry pages use. */
function Check({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  )
}

/* Splits the definition around its <strong> clause so the emphasis lands on
   the same words live bolds, instead of bolding the whole sentence. */
function withStrong(body, strong) {
  if (!strong || !body.includes(strong)) return body
  const [before, ...rest] = body.split(strong)
  return <>{before}<strong className="font-medium">{strong}</strong>{rest.join(strong)}</>
}

export default function SeoSection({
  eyebrow, eyebrowChip = 'bg-blue-300', checkChip = 'bg-blue-300',
  title, lede, link, items = [], figure,
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-surface">
      <div aria-hidden="true" className="h-[112px]" />

      <div className="u-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-gutter">
          {/* copy */}
          <div className="flex max-w-[672px] flex-col">
            {eyebrow && (
              <Eyebrow className={`reveal self-start px-[6px] py-[2px] leading-none ${eyebrowChip}`}>
                {eyebrow}
              </Eyebrow>
            )}
            {title && (
              <h3 className="reveal mt-6 font-serif text-ink tracking-tightest leading-[1.05]
                             text-[clamp(2.125rem,3.75vw,3.375rem)]"
                  style={{ '--reveal-delay': '80ms' }}>
                {title}
              </h3>
            )}
            {lede && (
              <p className="reveal mt-6 max-w-[514px] text-text-main text-ink text-pretty"
                 style={{ '--reveal-delay': '140ms' }}>
                {lede}
              </p>
            )}
            {link && (
              <ArrowLink {...link} className="reveal mt-6 self-start"
                         style={{ '--reveal-delay': '190ms' }} />
            )}
          </div>

          {/* checklist */}
          <ul className="flex flex-col gap-4">
            {items.map((it, i) => (
              <li key={it.title} className="reveal flex gap-4"
                  style={{ '--reveal-delay': `${120 + i * 70}ms` }}>
                <span className={`grid h-6 w-6 shrink-0 place-items-center text-ink ${checkChip}`}>
                  <Check className="h-4 w-4" />
                </span>
                <div className="min-w-0 max-w-[462px]">
                  <h4 className="font-sans text-[20px] font-medium leading-[20px] text-ink">
                    {it.title}
                  </h4>
                  <p className="mt-2 text-text-main text-ink text-pretty">{it.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* the full-width figure with its floating definition card */}
        {figure && (
          <figure className="reveal relative mt-10" style={{ '--reveal-delay': '160ms' }}>
            <img src={figure.src} alt={figure.alt || ''} width={1360} height={750}
                 loading="lazy" className="block h-auto w-full object-cover" />

            {figure.defTitle && (
              <div className="mt-6 bg-blue-600 p-[3px] lg:absolute lg:bottom-[24px] lg:right-[64px] lg:mt-0 lg:w-[476px]">
                <div className="flex items-center justify-between gap-3 bg-blue-400 px-3 py-3">
                  <h4 className="font-sans text-[20px] font-medium leading-[20px] text-ink">
                    {figure.defTitle}
                  </h4>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"
                       className="h-5 w-5 shrink-0 text-blue-600">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 14v-4M10 6.5h.01" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" />
                  </svg>
                </div>
                <div className="bg-blue-300 px-3 py-3">
                  <p className="text-text-main text-ink text-pretty">
                    {withStrong(figure.defBody, figure.defStrong)}
                  </p>
                </div>
              </div>
            )}

            {figure.caption && (
              <figcaption className="mt-3 bg-surface text-text-small text-ink">
                {figure.caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  )
}
