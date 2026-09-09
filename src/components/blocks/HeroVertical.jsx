import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, ArrowLink, CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.hero_vertical_wrap` — the CENTRED statement block. 10x across Platform.

   MEASURED at 1440px:

   Bare statement (brand-voice #1, h=304; visual-guidelines #1, h=304):
     82px  g_section_space
     eyebrow  mono 16/16 ink, centred, 16px tall     (y=+82)
     38px  gap
     h2       Feature 54/56.7 ink, measure 690px (or 1035px when the copy is
              long), centred, 3 lines -> 167px       (y=+137)
     NO bottom spacer: 82 + 16 + 38 + 167 = 303 ~= the measured 304.
   The block's whole vertical rhythm is carried by its TOP spacer; the next
   block supplies its own. An earlier draft added an 80px bottom spacer here
   and every hero_vertical came out exactly +82px tall.

   With a CTA (brand-voice #2, h=448; style-guide #1, h=440):
     the h2 grows to Feature 80/80 with a 1022px measure (240px for 3 lines),
     and a single 48px outline button sits 25px below it:
     82 + 16 + 38 + 240 + 25 + 48 = 449 ~= the measured 448.

   Compact, no eyebrow (visual-guidelines #3, h=206):
     80 + h2 54 + 25 + button 48 = 207 ~= the measured 206.

   Compact variant (visual-guidelines #3, h=206): 54px h2 + one button, no
   eyebrow, tighter spacers.

   Media variant (visual-guidelines #2, h=1276): the same centred header, then
   a 1360px art slab BELOW it on its own coloured ground — passed as `media`.

   PROPS
     eyebrow    string
     title      string
     titleTag   'h1'|'h2'   default 'h2' — pages whose page-level <h1> lives
                            in this block (e.g. /grid) pass 'h1'
     titleSize  'display'(80/80) | '54' ; default '54'
     titleWidth px      measured h2 measure (690 / 1022 / 1035)
     body       string  optional 18/21.6 paragraph under the heading
     link       {label,href}   coral mono arrow link
     ctas       [{label,variant}]
     media      node    optional block rendered full-width under the header
     bg         tailwind class for the full-bleed ground
     spaceTop / spaceBottom  px
--------------------------------------------------------------------------- */

const TITLE_SIZE = {
  display: 'text-[clamp(2.5rem,5.55vw,5rem)] leading-1',
  54: 'text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]',
  38: 'text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1',
}

export default function HeroVertical({
  eyebrow, title, titleTag: TitleTag = 'h2', titleSize = '54', titleWidth = 690, body,
  link, ctas = [], media, bg = 'bg-surface',
  spaceTop = 82, spaceBottom = 0,
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className={`relative clip-bleed ${bg}`}>
      <div aria-hidden="true" style={{ height: spaceTop }} />

      <div className="u-container flex flex-col items-center text-center">
        {eyebrow && <Eyebrow className="reveal mb-[38px] leading-none">{eyebrow}</Eyebrow>}

        {title && (
          <TitleTag className={`reveal font-serif text-ink tracking-tightest ${TITLE_SIZE[titleSize] || TITLE_SIZE[54]}`}
                    style={{ '--reveal-delay': '80ms', maxWidth: titleWidth }}>
            {title}
          </TitleTag>
        )}

        {body && (
          <p className="reveal mt-6 text-[18px] leading-[21.6px] text-ink text-pretty"
             style={{ '--reveal-delay': '140ms', maxWidth: 520 }}>
            {body}
          </p>
        )}

        {link && <ArrowLink {...link} className="reveal mt-6" style={{ '--reveal-delay': '180ms' }} />}

        {ctas.length > 0 && (
          <CtaRow ctas={ctas} className="reveal mt-[25px] justify-center"
                  style={{ '--reveal-delay': '200ms' }} />
        )}
      </div>

      {media && <div className="u-container mt-[100px]">{media}</div>}

      <div aria-hidden="true" style={{ height: spaceBottom }} />
    </section>
  )
}
