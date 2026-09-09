/* ---------------------------------------------------------------------------
   Shared primitives for the Platform-family Webflow blocks.

   Every value here is MEASURED off live jasper.ai at 1440px (see
   .scrape/txt-*.json and .scrape/bg-*.json). They are the small pieces that
   repeat inside horizontal_vis_wrap / hero_vertical_wrap / simple_layout_wrap
   / layout_cards_wrap / catalog_wrap, so each block does not re-invent them.
--------------------------------------------------------------------------- */

/* `.g_eyebrow_text` — mono 16px / lh 16px, colour #00063d (ink) on every
   Platform page measured. Most of the IQ family renders it as a bare label on
   the section ground; two pages chip it, and the tint differs per page —
   sampled off the live pixels:
     /jasper-iq    flame-400 (rgb 255,179,163) on the flame-200 hero
     /style-guide  flame-300 (rgb 255,232,226) on the flame-400 hero
   so `chip` takes the Tailwind class rather than hardcoding one tint. */
export function Eyebrow({ children, chip = false, className = '', as: Tag = 'p' }) {
  if (!children) return null
  // `as` matters: on a few routes (/mcp) the page's only <h1> IS this mono
  // eyebrow — live marks it up that way at 16px — so callers pass as="h1".
  // Hardcoding <p> here silently dropped the tag and left those pages with no h1.
  return (
    <Tag className={`eyebrow leading-none text-ink ${chip ? 'inline-block bg-flame-300 px-[2px] py-[2px]' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

/* `.btn_link_text` — the coral mono "Explore X →" text link.
   Measured: 18px / lh 25.2px, ABC ROM Mono, rgb(250,64,40) = flame-600,
   with a 1px underline that wipes on hover (`.link-arrow` in index.css). */
export function ArrowLink({ label, href = '#', className = '', style }) {
  if (!label) return null
  return (
    <a href={href} className={`link-arrow font-mono text-[18px] leading-[25.2px] ${className}`} style={style}>
      {label}
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M4.96 9.84834L3.968 8.84034L7.184 5.70434H0V4.31234H7.152L3.952 1.17634L4.96 0.152344L9.84 5.01634L4.96 9.84834Z"
              fill="currentColor" />
      </svg>
    </a>
  )
}

/* `.btn_main_wrap` pairs. Measured on every IQ hero: a 48px-tall outline
   "Start Free Trial" (`btn-secondary`) beside a filled flame "Get a Demo"
   (`btn-primary`), 16px apart. Labels vary per page ("Start a Free Trial",
   "Get A Demo") so they are always passed in verbatim from the capture. */
export function CtaRow({ ctas = [], className = '', style }) {
  if (!ctas.length) return null
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`} style={style}>
      {ctas.map((c) => (
        <a key={c.label} href={c.href || '#'} className={`btn ${c.variant || 'btn-primary'}`}>
          {c.label}
        </a>
      ))}
    </div>
  )
}

/* `.g_section_space` variants seen on the IQ pages, in px:
     40 / 80 / 112 / 140 / 180.
   They are real divs in the live DOM, not section padding, so blocks emit
   them explicitly rather than folding them into py-*. */
export const SPACE = { 40: 'h-[40px]', 80: 'h-[80px]', 112: 'h-[112px]', 140: 'h-[140px]', 180: 'h-[180px]' }

export function Space({ size = 112 }) {
  return <div aria-hidden="true" className={SPACE[size] || SPACE[112]} />
}

/* The `.g_background` colour layer that sits behind a block, full-bleed to
   1440px. Measured tints across the IQ family map 1:1 onto existing tokens:
     rgb(255,179,163) -> flame-400   (brand-iq / brand-voice / style-guide hero)
     rgb(255,232,226) -> flame-300   (visual-guidelines hero + no-code section)
     rgb(255,247,245) -> flame-200   (jasper-iq hero)
     rgb(255,253,217) -> yellow-400  (marketing-iq hero)
     rgb(206,235,255) -> blue-300    (brand-voice chrome_hero)
     rgb(129,203,255) -> blue-400    (brand-voice chrome panel)
     rgb(242,242,243) -> surface-2   (simple_layout media tiles, brand-iq band)
     rgb(255,255,255) -> surface
   Pass the Tailwind class, never a hex. */
export const BG = {
  flame400: 'bg-flame-400', flame300: 'bg-flame-300', flame200: 'bg-flame-200',
  yellow400: 'bg-yellow-400', blue300: 'bg-blue-300', blue400: 'bg-blue-400',
  surface2: 'bg-surface-2', surface: 'bg-surface',
}
