import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, ArrowLink, CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.horizontal_vis_wrap` — the two-column copy | illustration band.
   Appears 12x across the 22 Platform pages; it is BOTH the page hero on
   several routes and a mid-page feature row on others.

   MEASURED at 1440px (.scrape/txt-style-guide.json, txt-brand-voice.json,
   txt-brand-iq.json, txt-visual-guidelines.json):

   Hero use (style-guide, h=746, on a flame-400 g_background):
     140px g_section_space
     .u-container 1360px, two columns 660px each with a 40px gutter, the copy
       column top-anchored at x=40:
         eyebrow  mono 16/16 ink        y=229
         h1       Feature 54/56.7 or 80/80 ink, measure 660px
         body     ABC ROM 16/22.4 ink, measure 514px
         CTA row  two 48px buttons, 16px apart
       and a 660px art column on the right (image heights vary 494-680).
     112px g_section_space

   Mid-page use (style-guide rows 2-4, h=739/760, white ground): identical
   grid, heading drops to h2 38/38, art alternates left/right by row, and the
   art can be TALLER than the copy (660x659) so the column is height-driven.

   brand-iq's variant (h=766) has no h1/h2 at all — a 54px Feature PARAGRAPH is
   the whole copy block under a mono eyebrow, with a single outline button.

   PROPS
     eyebrow     string           mono label above the heading
     eyebrowTag  'p'|'h3'         live's brand-iq rows tag the eyebrow as the
                                  row's h3 (there is no other heading there)
     eyebrowChip false|tw class    the chipped eyebrow tint, where a page has
                                  one (/style-guide: flame-300 on flame-400)
     eyebrowTag  'h1'|'p'         tag for that label — /mcp's page <h1> IS the
                                  eyebrow, so it passes 'h1' (default 'p')
     title       string|node      the heading text
     titleTag    'h1'|'h2'|'h3'   default 'h2'
     titleSize   'display'|'54'|'38'  measured Feature sizes; default '38'
     titleAsPara bool             render the heading as a <p> (brand-iq rows)
     body        string           supporting paragraph
     bodySize    '16'|'18'        measured 16/22.4 or 18/21.6; default '16'
     link        {label, href}    coral mono arrow link
     ctas        [{label,variant}] button row
     img         {src, alt, w, h} the illustration, rendered at measured size
     flip        bool             art on the LEFT, copy on the right
     bg          tailwind class   full-bleed g_background colour layer
     spaceTop / spaceBottom  px   g_section_space heights (140/112/80/40)
     copyWidth   px              measured copy-column width (default 660)
--------------------------------------------------------------------------- */

const TITLE_SIZE = {
  display: 'text-[clamp(2.5rem,5.55vw,5rem)] leading-1',      // 80/80
  54: 'text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]', // 54/56.7
  38: 'text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1',      // 38/38
  28: 'text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.1]',     // 28/30.8
}

export default function HorizontalVis({
  eyebrow, eyebrowTag = 'p', eyebrowChip = false, title, titleTag = 'h2', titleSize = '38', titleAsPara = false,
  body, bodySize = '16', link, ctas = [], img, flip = false,
  bg = 'bg-surface', spaceTop = 140, spaceBottom = 112,
  copyWidth = 660, bodyWidth = 514, children,
}) {
  const ref = useReveal({ threshold: 0 })
  const Tag = titleAsPara ? 'p' : titleTag

  return (
    <section ref={ref} className={`relative clip-bleed ${bg}`}>
      <div aria-hidden="true" style={{ height: spaceTop }} />

      <div className="u-container">
        <div className={`flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10
                         ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>

          {/* copy column */}
          <div className="flex flex-col" style={{ maxWidth: copyWidth }}>
            {eyebrow && <Eyebrow as={eyebrowTag} className="reveal mb-[22px]">{eyebrow}</Eyebrow>}

            {title && (
              <Tag className={`reveal font-serif text-ink tracking-tightest ${TITLE_SIZE[titleSize] || TITLE_SIZE[38]}`}
                   style={{ '--reveal-delay': '80ms' }}>
                {title}
              </Tag>
            )}

            {body && (
              <p className={`reveal mt-6 text-ink text-pretty
                             ${bodySize === '18' ? 'text-[18px] leading-[21.6px]' : 'text-text-main'}`}
                 style={{ '--reveal-delay': '140ms', maxWidth: bodyWidth }}>
                {body}
              </p>
            )}

            {link && (
              <ArrowLink {...link} className="reveal mt-6 self-start"
                         style={{ '--reveal-delay': '190ms' }} />
            )}

            {ctas.length > 0 && (
              <CtaRow ctas={ctas} className="reveal mt-8"
                      style={{ '--reveal-delay': '200ms' }} />
            )}

            {children}
          </div>

          {/* art column — rendered at the measured intrinsic box so it keeps
              the live aspect ratio, but allowed to shrink below 1024px. */}
          {img && (
            <div className="reveal flex justify-center lg:justify-end"
                 style={{ '--reveal-delay': '120ms' }}>
              <img src={img.src} alt={img.alt || ''} width={img.w} height={img.h}
                   loading="lazy"
                   className="h-auto w-full max-w-full object-contain"
                   style={{ maxWidth: img.w }} />
            </div>
          )}
        </div>
      </div>

      <div aria-hidden="true" style={{ height: spaceBottom }} />
    </section>
  )
}
