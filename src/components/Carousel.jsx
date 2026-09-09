import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Horizontal card rail used by the three `slider_main_wrap` sections on
 * /resources. The live site drives these with Swiper; this is a dependency-free
 * equivalent built on native scroll-snap, which keeps trackpad/touch momentum
 * and keyboard focus scrolling working for free.
 *
 * Measured on live: cards are 368px wide with a 16px gutter, so one arrow press
 * advances 384px. The rail clips internally (`overflow-x:auto` + `min-w-0`) so
 * it never widens `document.documentElement.scrollWidth`.
 */
const STEP = 384

export default function Carousel({ label, children }) {
  const rail = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback(() => {
    const el = rail.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setAtStart(el.scrollLeft <= 1)
    setAtEnd(el.scrollLeft >= max - 1)
  }, [])

  useEffect(() => {
    const el = rail.current
    if (!el) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    const ro = new ResizeObserver(sync)
    ro.observe(el)
    return () => { el.removeEventListener('scroll', sync); ro.disconnect() }
  }, [sync])

  const nudge = (dir) => {
    rail.current?.scrollBy({ left: dir * STEP, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Live sits the pair above the rail, flush right. */}
      <div className="mb-6 flex justify-end gap-4">
        <RailButton dir={-1} disabled={atStart} onClick={() => nudge(-1)}
                    label={`Previous — ${label}`} />
        <RailButton dir={1} disabled={atEnd} onClick={() => nudge(1)}
                    label={`Next — ${label}`} />
      </div>

      <div
        ref={rail}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="no-scrollbar flex min-w-0 gap-gutter overflow-x-auto pb-2
                   [scroll-snap-type:x_mandatory] focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-ink/40"
      >
        {children}
      </div>
    </div>
  )
}

function RailButton({ dir, disabled, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="grid h-8 w-8 place-items-center rounded-DEFAULT text-ink
                 transition-colors duration-300 ease-jasper hover:text-flame-600
                 disabled:cursor-not-allowed disabled:text-ink/25
                 disabled:hover:text-ink/25"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"
           className="h-6 w-6" aria-hidden="true"
           style={dir === -1 ? { transform: 'scaleX(-1)' } : undefined}>
        <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
