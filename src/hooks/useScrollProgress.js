import { useEffect, useRef, useState } from 'react'

/**
 * Scroll progress (0→1) for an element travelling through the viewport.
 * Mirrors the ScrollTrigger scrub the original uses for its parallax and
 * scroll-linked marquee. rAF-throttled and passive.
 */
export function useScrollProgress({ start = 'bottom', end = 'top' } = {}) {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const compute = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the element's top edge enters from below,
      // 1 when its bottom edge leaves past the top.
      const total = r.height + vh
      const travelled = vh - r.top
      const p = Math.min(1, Math.max(0, travelled / total))
      setProgress(p)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(compute) }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [start, end])

  return [ref, progress]
}
