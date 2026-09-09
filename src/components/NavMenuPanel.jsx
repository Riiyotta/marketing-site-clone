import { Link } from 'react-router-dom'
import { CARD_REST_OPACITY } from './NavMenuData'

/* ---------------------------------------------------------------------------
   Mega-menu panel primitives — every number below is measured off the live
   jasper.ai `.nav_dropdown` (Chrome 1440x1000, fresh page per item).

   .nav_dropdown          bg #fff, padding 24px, radius 0, margin-top 12px
                          (sits at y=92 under the 80px bar), no shadow.
   .nav_dropdown_col      padding 0 24px 0 0; border-right 1px solid #f2f2f3
                          on every column but the last; flex column, gap 16px.
   heading card
     .nav_card_img        16:9 ratio block, image object-fit cover
     .nav_card_wrap       padding 16px 12px, gap 12px, tint wash behind
     .nav_card_title      28px / 450 / 30.8px / -0.56px  Feature  (Platform)
                          24px / 450 / 26.4px / normal   Feature  (others)
     .nav_dropdown_card_text  14px / 450 / 16.8px / normal
   link row
     .nav_card_wrap       270.48 x 44.17, padding 16px 12px, gap 16px
     title                16px / 450 / 22.4px / -0.16px, #00063d, trimmed to a
                          12.17px text box (Webflow's ::before/::after trim)
     chevron              4 x 6.39 svg, viewBox 0 0 5 8, fill #00063d
     wash                 .nav_card_background opacity 0 -> 1 on hover
   sub-list
     .nav_card_list       padding-left 12px, gap 16px, rows 10.64px tall,
                          with a 2px vertical rule on the left
   separator
     .g_horizontal_rule   1px, rgba(31,29,30,.2), margin 12px 0
--------------------------------------------------------------------------- */

/* Webflow trims the half-leading on `.u-text-style-main`: the 22.4px line box
   collapses to a measured 12.17px. We reproduce the RESULT rather than the
   mechanism, because Inter's metrics differ from ABC ROM's. */
const TRIM = { display: 'block', height: 12.17, lineHeight: '12.17px' }

export const Chevron = ({ color = '#00063d' }) => (
  <svg width="4" height="6.4" viewBox="0 0 5 8" fill="none" aria-hidden="true"
       style={{ flex: '0 0 auto' }}>
    <path d="M1.03094 8L0.220937 7.17L3.38094 4L0.210938 0.84L1.03094 0L5.00094 4.01L1.03094 8Z"
          fill={color} />
  </svg>
)

/* .btn_link_arrow — measured 10x10, viewBox 0 0 10 10 */
export const LinkArrow = ({ color = 'currentColor' }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"
       style={{ flex: '0 0 auto' }}>
    <path d="M4.96 9.84834L3.968 8.84034L7.184 5.70434H0V4.31234H7.152L3.952 1.17634L4.96 0.152344L9.84 5.01634L4.96 9.84834Z"
          fill={color} />
  </svg>
)

/* Anything that may point off-site keeps working as a plain <a>; internal
   paths go through react-router so the SPA never does a full reload. */
function Nav({ href, external, className, style, children, onNavigate, ...rest }) {
  if (!href) return <div className={className} style={style} {...rest}>{children}</div>
  if (external || /^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}
         style={style} onClick={onNavigate} {...rest}>{children}</a>
    )
  }
  return (
    <Link to={href} className={className} style={style} onClick={onNavigate} {...rest}>
      {children}
    </Link>
  )
}

/* measured: `NEW` eyebrow — 14px mono, colour flame-600 on yellow-700 */
const Badge = ({ children }) => (
  <span style={{
    backgroundColor: '#fff133', color: '#fa4028', fontSize: 12, lineHeight: '12px',
    padding: '2px 3px', marginLeft: 6, letterSpacing: '-0.12px', fontWeight: 500,
  }} className="font-mono">{children}</span>
)

/* .g_horizontal_rule — 1px rgba(31,29,30,.2), margin 12px 0 */
export const Rule = ({ style }) => (
  <div aria-hidden="true"
       style={{ height: 1, backgroundColor: 'rgba(31,29,30,0.2)', margin: '12px 0', ...style }} />
)

/* One link row: 44.17px tall, padding 16px 12px, wash fades in on hover. */
export function LinkRow({ item, tint, onNavigate }) {
  return (
    <li style={{ listStyle: 'none' }}>
      <Nav href={item.href} external={item.external} onNavigate={onNavigate}
           className="group relative block"
           style={{ padding: '16px 12px' }}>
        <span aria-hidden="true"
              className="absolute inset-0 opacity-0 transition-opacity duration-200 ease-jasper group-hover:opacity-100 group-focus-visible:opacity-100"
              style={{ backgroundColor: tint }} />
        <span className="relative flex items-center justify-between" style={{ gap: 8 }}>
          <span className="flex items-center whitespace-nowrap"
                style={{ minWidth: 0, lineHeight: '12.17px' }}>
            <span style={TRIM}>{item.t}</span>
            {item.badge && <Badge>{item.badge}</Badge>}
          </span>
          <Chevron />
        </span>
      </Nav>

      {item.sub && item.sub.length > 0 && (
        /* .nav_card_list — padding-left 12px, gap 16px, 2px vertical rule */
        <ul style={{
          listStyle: 'none', margin: 0,
          padding: '0 12px 16px 24px', display: 'flex', flexDirection: 'column', gap: 16,
          position: 'relative',
        }}>
          <span aria-hidden="true" style={{
            position: 'absolute', left: 12, top: 0, bottom: 16, width: 2,
            backgroundColor: 'rgba(31,29,30,0.2)',
          }} />
          {item.sub.map((s) => (
            <li key={s.t}>
              <Nav href={s.href} external={s.external} onNavigate={onNavigate}
                   className="group flex items-center justify-between">
                <span style={{ ...TRIM, height: 10.64, lineHeight: '10.64px' }}
                      className="transition-colors duration-200 ease-jasper group-hover:text-flame-600">
                  {s.t}
                </span>
                <Chevron />
              </Nav>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

/* The heading block. `img` present -> `.nav_card_colorful` (16:9 image on top
   of a tinted text block, wash .5 -> 1). No image -> a plain title + body. */
export function HeadingCard({ col, big, onNavigate }) {
  const inner = (
    <>
      {col.img && (
        <span className="block relative overflow-hidden"
              style={{ aspectRatio: '16 / 9', width: '100%' }}>
          <img src={col.img} alt="" loading="lazy"
               className="absolute inset-0 w-full h-full transition-transform duration-[800ms] ease-out group-hover:scale-105"
               style={{ objectFit: 'cover' }} />
        </span>
      )}
      {/* .nav_card_wrap — padding 16px 12px, gap 12px */}
      <span className="relative block" style={{ padding: '16px 12px' }}>
        {col.tint && (
          <span aria-hidden="true"
                className="absolute inset-0 transition-opacity duration-300 ease-jasper group-hover:opacity-100"
                style={{ backgroundColor: col.tint, opacity: CARD_REST_OPACITY }} />
        )}
        <span className="relative block">
          <span className="flex items-start justify-between" style={{ gap: 8 }}>
            <span className="font-serif text-ink" style={
              /* Platform: 28px/30.8/-0.56  others: 24px/26.4/normal */
              big
                ? { fontSize: 28, lineHeight: '30.8px', letterSpacing: '-0.56px', fontWeight: 450 }
                : { fontSize: 24, lineHeight: '26.4px', letterSpacing: 'normal', fontWeight: 450 }
            }>{col.head}</span>
            {col.href && <span style={{ marginTop: big ? 12 : 10 }}><Chevron /></span>}
          </span>
          {col.desc && (
            <span className="block text-ink" style={{
              marginTop: 12, fontSize: 14, lineHeight: '16.8px', letterSpacing: 'normal',
            }}>{col.desc}</span>
          )}
        </span>
      </span>
    </>
  )

  return col.href
    ? <Nav href={col.href} external={col.external} onNavigate={onNavigate}
           className="group block relative">{inner}</Nav>
    : <div className="group block relative">{inner}</div>
}

/* A Solutions row-1 card: image on top, tinted text block below with a title,
   chevron and 14px description. Measured 244.5 x 264.95. */
export function UseCaseCard({ item, onNavigate }) {
  return (
    <Nav href={item.href} onNavigate={onNavigate} className="group relative block">
      <span className="block relative overflow-hidden"
            style={{ aspectRatio: '16 / 9', width: '100%' }}>
        <img src={item.img} alt="" loading="lazy"
             className="absolute inset-0 w-full h-full transition-transform duration-[800ms] ease-out group-hover:scale-105"
             style={{ objectFit: 'cover' }} />
      </span>
      <span className="relative block" style={{ padding: '16px 12px' }}>
        <span aria-hidden="true"
              className="absolute inset-0 transition-opacity duration-300 ease-jasper group-hover:opacity-100"
              style={{ backgroundColor: item.tint, opacity: CARD_REST_OPACITY }} />
        <span className="relative block">
          <span className="flex items-center justify-between">
            <span style={TRIM}>{item.t}</span>
            <Chevron />
          </span>
          <span className="block text-ink" style={{
            marginTop: 12, fontSize: 14, lineHeight: '16.8px', letterSpacing: 'normal',
          }}>{item.desc}</span>
        </span>
      </span>
    </Nav>
  )
}
