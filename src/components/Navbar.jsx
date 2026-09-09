import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo, ChevronDown } from './Icons'
import { MENUS } from './NavMenuData'
import NavMenuDropdown from './NavMenuDropdown'

/* ---------------------------------------------------------------------------
   Measured from the live jasper.ai `.nav_wrap` (Chrome, 1440x1000):

   .nav_wrap      position:fixed; top:0; left:0; right:0; z-index:1000;
                  background transparent; pointer-events:none (so the
                  full-height overlay layer never eats clicks).
   .nav_contain   height 80px; background #fff; padding 16px 20px;
                  display:grid; grid-template-columns:456px 456px 456px;
                  gap:16px; align-items:center; width:100vw (NOT the 1360px
                  .u-container used elsewhere — the nav spans the full
                  viewport and the columns are (100vw - 40 - 32)/3).
                  No shadow, no border, no blur, and NO scroll behaviour:
                  measured identical at scrollY 0 / 600 / 2000 / back-up.

   logo           98.72 x 37.02, colour #fa4028, flush to the 20px pad.
   .nav_menu      col 2, flex, justify-content:center, no gap.
   .nav_menu_link padding 8px 12px (that padding *is* the item spacing);
                  16px / 450 / -0.16px / 22.4px, colour #00063d; NO chevron
                  (measured svgCount 0 on every item).
                  Hover: a per-item tint block behind the label wipes in as
                  THREE segments (measured .nav_menu_link_color):
                    left border  9.88px  opacity .1s
                    centre      65.94px  opacity .3s  delay .15s
                    right border 9.88px  opacity .1s  delay .3s
                  Colour is per-item (Webflow variant): Platform blue-300,
                  Solutions flame-300, Resources green-300, Company pink-400.
                  Pricing has no dropdown and no block.
   .nav_cta_list  col 3, justify-self:end, flex, gap 12px, align-items:center.
   Log In / Free Trial  padding 8px 0; same 16px/450 type as nav links.
   Get A Demo     .btn_main_wrap 140.75 x 47.69; padding 16px 20px;
                  bg + border #fa4028 1px solid; radius 0;
                  label 18px / 500 / line-height 18px / capitalize / #fff.

   MEGA-MENUS (measured 2026-09-09, fresh page per item, hover + 2200ms):
     Trigger      hover on `.nav_menu_link` (a DIV carrying data-nav-btn) —
                  the real navigation is an overlaid <a href> plus a <button>.
                  Measured: NO open delay, and no close delay either — the
                  panel opacity is driven straight off pointer enter/leave.
     Open         `.nav_dropdown_wrap` display none -> flex, and the panel's
                  opacity ramps 0 -> 1 in ~120ms (sampled 0.01 @50ms,
                  0.52 @100ms, 1 @150ms). GSAP-driven, so no CSS transition
                  string is exposed; ~120ms ease is the measured result.
     Backdrop     `.nav_overlay` — full viewport, rgba(0,0,0,0.6), z-index 1,
                  reaches opacity 1 within ~40ms of the panel starting.
     Swap         hovering a sibling trigger swaps the panel content with no
                  cross-fade (measured: the outgoing panel is already at
                  opacity 0 on the first sample after the pointer moves).
     Position     panel y = 92 (80px bar + 12px margin-top), horizontally
                  centred in the viewport; `.nav_dropdown` padding 24px.
     Escape       measured: the live site does NOT close on Escape and does
                  NOT open on keyboard focus. We add both, because the brief
                  requires keyboard access — this is a deliberate a11y
                  improvement over the original, not a mis-measurement.

   Breakpoints (measured by stepping the viewport):
     <= 991px  .nav_menu display:none, hamburger shows, Get A Demo hides
     <= 767px  Free Trial hides (Log In + hamburger remain)
   Hamburger  36 x 53 box, padding 18px 8px, 3 lines 20x3 #00063d, gap 4px.
   Drawer     opens under the 80px bar, padding 20px, gap 4px, body locked;
              rows are Feature-serif 28px/30.8px/-0.56px with a chevron on the
              four items that have mega-menus, Pricing plain; then a 24px-top
              button stack, gap 12px: outlined "Start A Free Trial" then
              solid flame "Get A Demo", both full width, 16px 20px padding.
--------------------------------------------------------------------------- */

/* Webflow trims the half-leading on nav labels: `.u-text-style-main` gets
   ::before/::after `display:table` with margin-bottom -5.115px each, which
   collapses a 22.4px line-height down to a measured 12.17px box. That value is
   derived from ABC ROM's metrics; we substitute Inter, so reproduce the
   RESULT (a 12.17px text box -> 28.17px link with 8px padding) by setting the
   block height explicitly and centring the glyphs inside it. */
const TRIM = {
  display: 'block',
  height: 12.17,
  lineHeight: '12.17px',
  overflow: 'visible',
}

const NAV_ITEMS = [
  { label: 'Platform',  to: '/platform',  tint: '#ceebff' },
  { label: 'Solutions', to: '/solutions', tint: '#ffe8e2' },
  { label: 'Resources', to: '/resources', tint: '#e6ffd9' },
  { label: 'Company',   to: '/company',   tint: '#ffe6f3' },
  { label: 'Pricing',   to: '/pricing',   tint: null      },
]

/* The measured 3-segment wipe. The border segments are 9.88px wide and the
   centre fills the rest; each has its own duration + delay. */
function TintWipe({ color, open }) {
  const seg = (extra) => ({
    backgroundColor: color,
    opacity: open ? 1 : 0,
    transitionProperty: 'opacity',
    ...extra,
  })
  return (
    <span aria-hidden="true" className="absolute inset-0 flex">
      <span style={seg({ flex: '0 0 9.88px', transitionDuration: '100ms', transitionDelay: open ? '0ms' : '300ms' })} />
      <span style={seg({ flex: '1 1 auto', transitionDuration: '300ms', transitionDelay: open ? '150ms' : '0ms' })} />
      <span style={seg({ flex: '0 0 9.88px', transitionDuration: '100ms', transitionDelay: open ? '300ms' : '0ms' })} />
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)              // mobile drawer
  const [openRow, setOpenRow] = useState(null)         // mobile accordion
  const [active, setActive] = useState(null)           // desktop mega-menu
  const idBase = useId()
  const closeTimer = useRef(null)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // measured: the drawer is dismissed when the viewport returns to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 991) { setOpen(false); setOpenRow(null) } }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // any route change dismisses both surfaces
  useEffect(() => { setActive(null); setOpen(false); setOpenRow(null) }, [location.pathname])

  // Escape closes the mega-menu (added for keyboard users; the live site does
  // not do this, but the panel is otherwise unreachable/undismissable by key).
  useEffect(() => {
    if (!active) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active])

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  const openMenu = useCallback((label) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
    setActive(MENUS[label] ? label : null)
  }, [])

  /* Measured: no close delay on the live site. We keep a 120ms grace so the
     pointer can cross the 12px gap between the bar and the panel without the
     menu flickering shut — the live site avoids that by making the whole
     overlay a hover surface, which we reproduce with the same effect. */
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setActive(null), 120)
  }, [])

  /* Focus leaving the entire header (bar + panel) closes the menu. Menus are
     NOT focus traps: Tab walks out of the panel and on down the page, and the
     panel simply closes behind it. */
  const onBlurRegion = useCallback((e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setActive(null)
  }, [])

  /* The panel is a single shared surface rendered after the bar (exactly as
     the live site does it), so it cannot live inside each trigger's <li> and
     Tab would otherwise skip past it to the CTAs. This ref + handler give
     every trigger an explicit way in: ArrowDown / Tab from an OPEN trigger
     moves focus to the panel's first link. Shift+Tab out of the panel's first
     link returns to the trigger. Nothing is trapped either way. */
  const panelRef = useRef(null)
  const focusPanel = useCallback(() => {
    const first = panelRef.current?.querySelector('a[href], button:not([disabled])')
    if (first) { first.focus(); return true }
    return false
  }, [])

  const menu = active ? MENUS[active] : null

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none"
            onBlur={onBlurRegion}>
      {/* .nav_contain — 80px white bar, 3 equal columns, 16px 20px padding */}
      <div
        className="pointer-events-auto relative z-[3] grid items-center bg-surface"
        style={{
          height: 80,
          padding: '16px 20px',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 16,
        }}
        onMouseLeave={scheduleClose}
      >
        {/* col 1 — logo */}
        <div className="flex items-center">
          <Link
            to="/"
            aria-label="Jasper home"
            onClick={() => { setOpen(false); setActive(null) }}
            onMouseEnter={() => setActive(null)}
            className="flex items-center text-flame-600"
            style={{ width: 98.72, height: 37.02 }}
          >
            <Logo className="w-full" />
          </Link>
        </div>

        {/* col 2 — centred nav. Hidden at <=991px (measured). */}
        <ul className="hidden min-[992px]:flex items-center justify-center">
          {NAV_ITEMS.map((item) => {
            const hasMenu = Boolean(MENUS[item.label])
            const isOpen = active === item.label
            return (
              <li key={item.label}
                  onMouseEnter={() => (hasMenu ? openMenu(item.label) : setActive(null))}>
                <Link
                  to={item.to}
                  className="group relative block"
                  style={{ padding: '8px 12px' }}
                  aria-expanded={hasMenu ? isOpen : undefined}
                  aria-controls={hasMenu ? `${idBase}-${item.label}` : undefined}
                  aria-haspopup={hasMenu ? 'true' : undefined}
                  onFocus={() => (hasMenu ? openMenu(item.label) : setActive(null))}
                  /* ArrowDown opens the panel and steps into it; a plain Tab
                     from an already-open trigger does the same, so the panel's
                     links sit in the natural reading order for a keyboard user
                     even though the panel is a shared surface further down the
                     DOM. ArrowUp / Escape dismiss it. */
                  onKeyDown={(e) => {
                    if (!hasMenu) return
                    if (e.key === 'ArrowDown') {
                      e.preventDefault()
                      if (isOpen) focusPanel(); else openMenu(item.label)
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault(); setActive(null)
                    } else if (e.key === 'Tab' && !e.shiftKey && isOpen) {
                      if (focusPanel()) e.preventDefault()
                    }
                  }}
                  onClick={() => setActive(null)}
                >
                  {item.tint && (
                    <TintWipe color={item.tint} open={isOpen} />
                  )}
                  {/* the hover-only wipe for items that are not currently open */}
                  {item.tint && !isOpen && (
                    <span aria-hidden="true"
                          className="absolute inset-0 opacity-0 transition-opacity duration-100 ease-linear group-hover:opacity-100"
                          style={{ backgroundColor: item.tint }} />
                  )}
                  <span className="relative" style={TRIM}>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* col 3 — CTA cluster, justify-self:end, gap 12px */}
        <ul className="flex items-center justify-self-end" style={{ gap: 12 }}>
          <li>
            <a href="#" className="block" style={{ padding: '8px 0' }}>
              <span style={TRIM}>Log In</span>
            </a>
          </li>
          <li className="hidden min-[768px]:block">
            <a href="#" className="block" style={{ padding: '8px 0' }}>
              <span style={TRIM}>Free Trial</span>
            </a>
          </li>
          <li className="hidden min-[992px]:block">
            <a
              href="#"
              className="inline-flex items-center justify-center whitespace-nowrap capitalize"
              style={{
                padding: '16px 20px',
                backgroundColor: '#fa4028',
                border: '1px solid #fa4028',
                borderRadius: 0,
                color: '#ffffff',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: '18px',
                letterSpacing: 'normal',
                transition: 'background-color .3s var(--ease-jasper), border-color .3s var(--ease-jasper)',
              }}
            >
              <span style={{ display: 'block', height: 13.69, lineHeight: '13.69px' }}>
                Get A Demo
              </span>
            </a>
          </li>
          <li className="min-[992px]:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex flex-col items-start justify-center"
              style={{ width: 36, height: 53, padding: '18px 8px', gap: 4 }}
            >
              <span
                className="block transition-transform duration-300 ease-jasper"
                style={{ width: 20, height: 3, backgroundColor: '#00063d',
                         transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}
              />
              <span
                className="block transition-opacity duration-300 ease-jasper"
                style={{ width: 20, height: 3, backgroundColor: '#00063d',
                         opacity: open ? 0 : 1 }}
              />
              <span
                className="block transition-transform duration-300 ease-jasper"
                style={{ width: 20, height: 3, backgroundColor: '#00063d',
                         transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
              />
            </button>
          </li>
        </ul>
      </div>

      {/* --- desktop mega-menu ------------------------------------------- */}
      {/* .nav_overlay — full viewport rgba(0,0,0,.6), z-index 1, ~40ms fade */}
      <div
        aria-hidden="true"
        className="hidden min-[992px]:block fixed inset-0 z-[1] transition-opacity duration-150 ease-out"
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          opacity: menu ? 1 : 0,
          pointerEvents: menu ? 'auto' : 'none',
        }}
        onMouseEnter={scheduleClose}
      />

      {/* .nav_dropdown_wrap — padding-top 80px, panel margin-top 12px (y=92) */}
      <div
        className="hidden min-[992px]:flex absolute inset-x-0 top-0 z-[2] justify-center transition-opacity duration-[120ms] ease-out"
        style={{
          paddingTop: 92,
          opacity: menu ? 1 : 0,
          visibility: menu ? 'visible' : 'hidden',
          pointerEvents: menu ? 'auto' : 'none',
        }}
        onMouseEnter={() => openMenu(active)}
        onMouseLeave={scheduleClose}
        onBlur={onBlurRegion}
      >
        {menu && (
          <div id={`${idBase}-${active}`} role="group" aria-label={`${active} menu`}
               ref={panelRef} className="pointer-events-auto">
            <NavMenuDropdown menu={menu} onNavigate={() => setActive(null)} />
          </div>
        )}
      </div>

      {/* --- mobile drawer ------------------------------------------------ */}
      {open && (
        <div
          className="pointer-events-auto min-[992px]:hidden flex flex-col bg-surface overflow-y-auto relative z-[4]"
          style={{ height: 'calc(100vh - 80px)', padding: 20, gap: 4 }}
        >
          {NAV_ITEMS.map((item) => {
            const m = MENUS[item.label]
            const expanded = openRow === item.label
            return (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center font-serif text-ink flex-1"
                    style={{ minHeight: 52, fontSize: 28, lineHeight: '30.8px', letterSpacing: '-0.56px' }}
                  >
                    <span>{item.label}</span>
                  </Link>
                  {m && (
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`${idBase}-m-${item.label}`}
                      aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.label} links`}
                      onClick={() => setOpenRow(expanded ? null : item.label)}
                      className="flex items-center justify-center"
                      style={{ width: 44, height: 44, marginLeft: 8 }}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ease-jasper ${expanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {m && expanded && (
                  <MobileAccordion id={`${idBase}-m-${item.label}`} menu={m}
                                   onNavigate={() => setOpen(false)} />
                )}
              </div>
            )
          })}

          <div className="flex flex-col" style={{ paddingTop: 24, gap: 12 }}>
            <a
              href="#"
              className="flex items-center justify-center w-full capitalize"
              style={{ padding: '16px 20px', border: '1px solid #00063d', color: '#00063d',
                       borderRadius: 0, fontSize: 18, fontWeight: 500, lineHeight: '18px' }}
            >
              <span style={{ display: 'block', height: 13.69, lineHeight: '13.69px' }}>
                Start A Free Trial
              </span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-full capitalize"
              style={{ padding: '16px 20px', backgroundColor: '#fa4028', border: '1px solid #fa4028',
                       color: '#ffffff', borderRadius: 0, fontSize: 18, fontWeight: 500, lineHeight: '18px' }}
            >
              <span style={{ display: 'block', height: 13.69, lineHeight: '13.69px' }}>
                Get A Demo
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

/* The drawer accordion body. It reuses the SAME measured content as the
   desktop panel — the live site does exactly this (the mobile markup is the
   `.nav_dropdown_mobile_*` siblings inside the very same `.nav_dropdown`) —
   but renders it as a flat, single-column link list, which is what the live
   mobile view collapses to. */
function MobileAccordion({ id, menu, onNavigate }) {
  const groups = menu.kind === 'rows' ? menu.rows : menu.columns
  return (
    <div id={id} style={{ paddingBottom: 12 }}>
      {groups.map((g) => (
        <div key={g.head} style={{ paddingBottom: 12 }}>
          <div className="font-serif text-ink"
               style={{ fontSize: 18, lineHeight: '21.6px', paddingBottom: 4 }}>
            {g.head}
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {g.items.filter((i) => !i.rule).map((item) => (
              <li key={item.t}>
                <MobileLink item={item} onNavigate={onNavigate} />
                {item.sub && item.sub.map((s) => (
                  <div key={s.t} style={{ paddingLeft: 16 }}>
                    <MobileLink item={s} onNavigate={onNavigate} />
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function MobileLink({ item, onNavigate }) {
  const style = { minHeight: 40, fontSize: 16, lineHeight: '22.4px', letterSpacing: '-0.16px' }
  const body = (
    <>
      <span>{item.t}</span>
      <ChevronDown className="w-4 h-4 -rotate-90" />
    </>
  )
  return item.external || /^https?:/.test(item.href || '')
    ? <a href={item.href} target="_blank" rel="noreferrer" onClick={onNavigate}
         className="flex items-center justify-between text-ink" style={style}>{body}</a>
    : <Link to={item.href} onClick={onNavigate}
            className="flex items-center justify-between text-ink" style={style}>{body}</Link>
}
