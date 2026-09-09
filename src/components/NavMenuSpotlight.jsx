import { useMemo } from 'react'
import { LinkArrow } from './NavMenuPanel'
import { Link } from 'react-router-dom'

/* ---------------------------------------------------------------------------
   Spotlight blocks — measured from the live `.nav_dropdown_spotlight`.

   Platform  .nav_geo_wrap  319.48 x 585.72, padding 24px, flex column centred.
             Background is a live <iframe src=scatter-bg.jasperpreview.app>
             rendering a red pixel-scatter; reproduced below as a deterministic
             CSS grid of flame-tinted squares (see ScatterBg).
             .nav_geo_card 271.48 x 324.31, padding 12px, background #fff:
               eyebrow  .g_eyebrow_layout padding 2px, bg #fa4028, text 16px
                        mono / 16px line / #fff, margin-bottom 16px
               title    38px / 450 / 38px / -0.38px  Feature, mb 16px
               body     16px / 450 / 19.2px / -0.16px, mb 24px
               cta      .btn_link_text 18px / 25.2px mono, #fa4028 + 10px arrow

   Resources 319.48 x 425.25 — a 24px-tall "Diagnostics & Tools" heading card
             (title 24px Feature, padding 16px 12px, margin-bottom 64px) then
             two 319.48 x 144.63 cards, padding 16px, 1px border, mb 16px:
               #fa4028 bg/border, cta text #ffe8e2
               #0043d3 bg/border, cta text #81cbff
             card title 20px Feature (u-text-style-h5), body 14px, both white.

   Company   .g_card 304 x 440.56, border 1px solid #5e5d5f, bg #0011a7,
             flex-direction column-reverse so the 302x302 image renders ABOVE
             the 302x136.56 text block (padding 16px):
               heading 38px / 450 / 38px / -0.76px Feature, white
               body    16px / 450 / 22.4px, white
               cta     .btn_link_text mono, #fa4028 + arrow
--------------------------------------------------------------------------- */

/* The live background is an iframe of a randomised red pixel field. We can't
   embed that (cross-origin + not part of this clone), so we regenerate an
   equivalent field deterministically: a 24-column grid whose opacity ramps
   from the bottom-left corner outward, matching the measured gradient. */
function ScatterBg() {
  const cells = useMemo(() => {
    /* Measured on the live iframe render (see .scrape/live-menu-Platform.png):
       a ~26 x 40 field of flame-tinted squares over white, densest and most
       saturated at the bottom-left, thinning out toward the top-right. */
    const COLS = 26, ROWS = 40
    const out = []
    let seed = 20260909
    const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        // 0 at the top-right corner, 1 at the bottom-left
        const t = ((1 - c / (COLS - 1)) + (r / (ROWS - 1))) / 2
        const p = Math.min(1, Math.max(0, t * 1.5 - 0.12))
        if (rnd() < p) out.push({ r, c, a: 0.06 + rnd() * 0.28 + p * 0.5 })
      }
    }
    return { COLS, ROWS, out }
  }, [])

  return (
    <span aria-hidden="true" className="absolute inset-0 overflow-hidden"
          style={{ backgroundColor: '#ffffff' }}>
      <span className="absolute inset-0 grid" style={{
        gridTemplateColumns: `repeat(${cells.COLS}, 1fr)`,
        gridTemplateRows: `repeat(${cells.ROWS}, 1fr)`,
      }}>
        {cells.out.map(({ r, c, a }) => (
          <span key={`${r}-${c}`} style={{
            gridRow: r + 1, gridColumn: c + 1,
            backgroundColor: `rgba(250,64,40,${Math.min(1, a).toFixed(3)})`,
          }} />
        ))}
      </span>
    </span>
  )
}

const A = ({ href, className, style, children, onNavigate }) =>
  /^https?:/.test(href)
    ? <a href={href} target="_blank" rel="noreferrer" className={className} style={style} onClick={onNavigate}>{children}</a>
    : <Link to={href} className={className} style={style} onClick={onNavigate}>{children}</Link>

/* .btn_link_wrap — 10px gap, mono label, arrow; background wash on hover */
function BtnLink({ label, color, fontSize = 18, lineHeight = '25.2px' }) {
  return (
    <span className="inline-flex items-center" style={{ gap: 10, color }}>
      <span className="font-mono" style={{ fontSize, lineHeight, letterSpacing: '-0.16px' }}>
        {label}
      </span>
      <LinkArrow color={color} />
    </span>
  )
}

export default function NavMenuSpotlight({ spot, height, onNavigate }) {
  if (!spot) return null

  if (spot.kind === 'geo') {
    return (
      <div className="relative flex flex-col items-center justify-center overflow-hidden group flex-1"
           style={{ padding: 24, height }}>
        <ScatterBg />
        {/* .nav_geo_card — 271.48 x 324.31, padding 12px, solid white */}
        <A href={spot.href} onNavigate={onNavigate}
           className="relative block"
           style={{ padding: 12, width: 271.48, backgroundColor: '#ffffff' }}>
          {/* .g_eyebrow_layout — padding 2px, bg flame-600, mono 16px/16px */}
          <span className="inline-block" style={{ backgroundColor: '#fa4028', padding: 2, marginBottom: 16 }}>
            <span className="block font-mono text-white"
                  style={{ fontSize: 16, lineHeight: '12.19px', letterSpacing: '-0.16px' }}>
              {spot.eyebrow}
            </span>
          </span>
          <span className="block font-serif text-ink" style={{
            fontSize: 38, lineHeight: '38px', letterSpacing: '-0.38px', fontWeight: 450, marginBottom: 16,
          }}>{spot.title}</span>
          <span className="block text-ink" style={{
            fontSize: 16, lineHeight: '19.2px', letterSpacing: '-0.16px', marginBottom: 24,
          }}>{spot.body}</span>
          <span className="relative inline-block">
            <span aria-hidden="true"
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-jasper group-hover:opacity-100"
                  style={{ backgroundColor: '#ffe8e2' }} />
            <span className="relative"><BtnLink label={spot.cta} color="#fa4028" /></span>
          </span>
        </A>
      </div>
    )
  }

  if (spot.kind === 'cards') {
    return (
      <div className="flex flex-col flex-1" style={{ height }}>
        {/* heading card: padding 16px 12px, 24px Feature, margin-bottom 64px */}
        <div style={{ padding: '16px 12px', marginBottom: 64 }}>
          <span className="block font-serif text-ink"
                style={{ fontSize: 24, lineHeight: '26.4px', fontWeight: 450 }}>
            {spot.head}
          </span>
        </div>
        {spot.cards.map((c, i) => (
          <A key={c.title} href={c.href} onNavigate={onNavigate}
             className="group block relative text-white"
             style={{
               backgroundColor: c.bg, border: `1px solid ${c.border}`,
               padding: 16, marginBottom: i < spot.cards.length - 1 ? 16 : 0,
             }}>
            {/* measured: sans 20px / 450 / 22px / normal, margin-bottom 12px */}
            <span className="block" style={{
              fontSize: 20, lineHeight: '22px', letterSpacing: 'normal', fontWeight: 450, marginBottom: 12,
            }}>{c.title}</span>
            <span className="block" style={{
              fontSize: 14, lineHeight: '16.8px', letterSpacing: '-0.14px', marginBottom: 12,
            }}>{c.body}</span>
            <span className="relative inline-block">
              <span aria-hidden="true"
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-jasper group-hover:opacity-100"
                    style={{ backgroundColor: 'rgba(255,255,255,0.16)' }} />
              <span className="relative">
                <BtnLink label={c.cta} color={c.ctaColor} fontSize={16} lineHeight="22.4px" />
              </span>
            </span>
          </A>
        ))}
      </div>
    )
  }

  /* kind === 'card' — Company. column-reverse so the image sits on top. */
  return (
    <A href={spot.href} onNavigate={onNavigate}
       className="group relative flex flex-col-reverse text-white overflow-hidden flex-1"
       style={{ backgroundColor: spot.bg, border: `1px solid ${spot.border}`, height }}>
      <span className="block relative overflow-hidden" style={{ aspectRatio: '1 / 1', flex: '0 0 auto' }}>
        <img src={spot.img} alt="" loading="lazy"
             className="absolute inset-0 w-full h-full transition-transform duration-[800ms] ease-out group-hover:scale-105"
             style={{ objectFit: 'cover' }} />
      </span>
      <span className="block" style={{ padding: 16 }}>
        <span className="block font-serif" style={{
          fontSize: 38, lineHeight: '38px', letterSpacing: '-0.76px', fontWeight: 450, marginBottom: 16,
        }}>{spot.title}</span>
        <span className="block" style={{
          fontSize: 16, lineHeight: '22.4px', letterSpacing: '-0.16px', marginBottom: 16,
        }}>{spot.body}</span>
        <span className="relative inline-block">
          <span aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-jasper group-hover:opacity-100"
                style={{ backgroundColor: '#ffe8e2' }} />
          <span className="relative">
            <BtnLink label={spot.cta} color="#fa4028" fontSize={16} lineHeight="22.4px" />
          </span>
        </span>
      </span>
    </A>
  )
}
