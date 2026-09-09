import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Hero collage.
 *
 * The original renders this as a Rive state machine (`home_hero.riv`, served
 * from a third-party CDN) on a <canvas>. That file is licensed artwork, so the
 * behaviour is rebuilt natively here: a set of themed scenes that auto-cycle
 * with a wipe transition, each pairing a prompt bubble with a stat block over a
 * graph-paper field. Scene cadence and the pink/yellow/green theming match what
 * the live canvas cycles through.
 */
const SCENES = [
  {
    key: 'launch',
    field: '#ffb3de', grid: 'rgba(255,246,125,.95)',
    prompt: 'Scale a launch campaign into 8 markets, within days',
    stat: '+35%', statLabel: 'Pipeline',
    statBg: 'bg-flame-600', statText: 'text-pink-500',
    labelBg: 'bg-flame-800', labelText: 'text-flame-300',
    accent: '#fa4028', wedge: '#fffbb7', arc: '#a69f00',
    photo: '/assets/Closing_photo_1.avif', focus: '50% 12%',
  },
  {
    key: 'retail',
    field: '#fffbb7', grid: 'rgba(0,149,255,.55)',
    prompt: 'Bulk create 5,000 retail product pages',
    stat: '+22%', statLabel: 'ecommerce revenue',
    statBg: 'bg-pink-700', statText: 'text-pink-400',
    labelBg: 'bg-pink-800', labelText: 'text-pink-500',
    accent: '#ffb3de', wedge: '#ffb3de', arc: '#fa7560',
    photo: '/assets/content-person.webp', focus: '50% 18%',
  },
  {
    key: 'localize',
    field: '#96ff6f', grid: 'rgba(0,149,255,.55)',
    prompt: 'Localize one campaign into 14 languages',
    stat: '+3x', statLabel: 'content velocity',
    statBg: 'bg-blue-700', statText: 'text-green-500',
    labelBg: 'bg-blue-800', labelText: 'text-blue-400',
    accent: '#207a00', wedge: '#d2ffc1', arc: '#0043d3',
    photo: '/assets/performance-person.webp', focus: '50% 15%',
  },
]

const HOLD = 4200 // ms each scene rests before the wipe

export default function HeroScenes() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const wrapRef = useRef(null)
  // Pointer offset, normalised to -1..1 from the stage centre.
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const onMove = useCallback((e) => {
    const el = wrapRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPointer({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
    })
  }, [])
  const onLeave = useCallback(() => setPointer({ x: 0, y: 0 }), [])

  // Pause when off-screen — the original does the same via IntersectionObserver
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => setPaused(!e.isIntersecting),
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI((v) => (v + 1) % SCENES.length), HOLD)
    return () => clearTimeout(t)
  }, [i, paused])

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(300px, 36vw, 500px)' }}
    >
      {SCENES.map((s, idx) => (
        <Scene key={s.key} scene={s} active={idx === i} pointer={pointer} />
      ))}

      {/* scene dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {SCENES.map((s, idx) => (
          <button
            key={s.key}
            onClick={() => setI(idx)}
            aria-label={`Show scene ${idx + 1}`}
            aria-current={idx === i}
            className={`h-1.5 rounded-full transition-all duration-500 ease-jasper ${
              idx === i ? 'w-6 bg-ink' : 'w-1.5 bg-ink/30 hover:bg-ink/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function Scene({ scene: s, active, pointer }) {
  // Layered parallax. The live canvas reacts to pointer movement (verified:
  // ~238x more pixel change while moving vs. still), but the exact motion lives
  // inside a proprietary .riv binary and can't be read out — so these depths are
  // a restrained interpretation, not a measured match.
  const px = active ? pointer.x : 0
  const py = active ? pointer.y : 0
  const layer = (depth) => ({
    translate: `${px * depth}px ${py * depth * 0.5}px`,
    transition: 'translate 600ms cubic-bezier(0.625,0.05,0,1)',
  })
  return (
    <div
      className="absolute inset-0 transition-[clip-path,opacity] duration-[900ms] ease-jasper"
      style={{
        // wipe reveal, mirroring the canvas transition
        clipPath: active ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)',
        opacity: active ? 1 : 0,
        zIndex: active ? 10 : 1,
      }}
      aria-hidden={!active}
    >
      {/* stepped graph-paper field */}
      <div className="absolute inset-x-0 bottom-0 h-[78%] bg-grid"
           style={{ background: s.field, '--grid-color': s.grid, '--grid-size': '46px', ...layer(6) }} />
      <div className="absolute bottom-0 left-[12%] w-[22%] h-[92%] bg-grid"
           style={{ background: s.field, '--grid-color': s.grid, '--grid-size': '46px' }} />
      <div className="absolute bottom-0 right-[8%] w-[26%] h-[88%] bg-grid"
           style={{ background: s.field, '--grid-color': s.grid, '--grid-size': '46px' }} />

      {/* accent bars */}
      <div className="absolute bottom-[26%] left-[18%] w-[7%] h-[9%]" style={{ background: s.accent }} />
      <div className="absolute bottom-[8%]  left-[18%] w-[7%] h-[9%]" style={{ background: s.accent }} />
      {/* arrow wedge */}
      <div className="absolute bottom-[34%] right-[22%] w-[10%] h-[14%]"
           style={{ background: s.wedge,
                    clipPath: 'polygon(0 20%, 70% 20%, 70% 0, 100% 50%, 70% 100%, 70% 80%, 0 80%)' }} />
      {/* quarter arc */}
      <div className="absolute bottom-0 right-[4%] w-[9%] h-[26%]"
           style={{ background: s.arc, borderRadius: '100% 0 0 0' }} />

      {/* portrait cut-out */}
      <div className="absolute bottom-0 left-1/2 h-[96%] w-[clamp(180px,20vw,280px)] overflow-hidden"
           style={{ transform: 'translateX(-50%)', ...layer(12) }}>
        <img src={s.photo} alt="" aria-hidden="true" loading="lazy"
             className="h-full w-full object-cover" style={{ objectPosition: s.focus }} />
      </div>

      {/* prompt bubble */}
      <div className="absolute left-[6%] md:left-[14%] top-[26%] max-w-[19rem] hidden sm:block"
           style={layer(22)}>
        <div className="relative bg-surface border border-ink/10 shadow-[0_8px_30px_rgba(0,6,61,.10)] px-5 py-4 rounded-DEFAULT">
          <span className="absolute -top-2 -left-2 w-4 h-4 bg-ink"
                style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
          <p className="font-serif text-ink leading-1.1 tracking-tighter text-[clamp(1.1rem,1.7vw,1.6rem)]">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-flame-600 text-white font-sans text-[11px] mr-1.5 align-middle">j</span>
            {s.prompt}
          </p>
        </div>
      </div>

      {/* stat block */}
      <div className="absolute right-[10%] md:right-[18%] top-[28%] hidden sm:block"
           style={layer(18)}>
        <div className={`${s.statBg} px-5 py-2`}>
          <span className={`font-serif ${s.statText} leading-none text-[clamp(2rem,4.4vw,3.4rem)] tracking-tightest`}>
            {s.stat}
          </span>
        </div>
        <div className={`${s.labelBg} px-5 py-2 max-w-[12rem]`}>
          <span className={`font-sans ${s.labelText} text-text-main leading-1.2 block`}>
            {s.statLabel}
          </span>
        </div>
      </div>
    </div>
  )
}
