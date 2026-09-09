import { useEffect, useRef } from 'react'

/**
 * Scroll-reveal observer. Mirrors the ScrollTrigger batch the original uses to
 * fade + rise sections as they enter the viewport.
 *
 * Three bugs this fixes (all caused content to stay permanently at opacity:0):
 *   1. `threshold: 0.15` never fires for a target taller than the viewport —
 *      15% of it can never be on screen at once. Use threshold 0 plus a
 *      rootMargin so any sliver entering counts.
 *   2. The `.reveal` set was queried once on mount, so anything rendered later
 *      (conditional branches, tab panels, images that change layout) was never
 *      observed. A MutationObserver now picks up late arrivals.
 *   3. `options` is a fresh object each render, so the effect re-ran and tore
 *      down the observer; primitives are read into locals instead.
 *
 * A final safety net marks everything visible on unmount-free fallback, so a
 * missing IntersectionObserver can never leave the page blank.
 *
 *   4. On very tall pages the document GROWS as images decode, so content that
 *      was below the last scroll stop when the observer ran can end up never
 *      intersecting at all — it is pushed past the bottom of the scroll range
 *      after the observer has already been through. This stranded the whole
 *      closing block on /canvas (an 8300px page) at opacity 0. A scroll/resize
 *      listener re-checks the remaining targets and reveals anything at or
 *      past the bottom of the document, so nothing can be left permanently
 *      invisible by a late reflow.
 *
 * Once the entrance animation has played, `.is-settled` is added so the CSS can
 * drop `animation` altogether. A finished animation that stays attached keeps
 * the element on its own compositor layer (it animates `transform`), and
 * Chrome intermittently fails to composite those layers into a FULL-PAGE
 * screenshot — the element is in the DOM at opacity 1 and paints correctly in
 * a viewport capture, but rasterises blank in fullPage. Clearing the animation
 * returns the element to normal paint and makes captures deterministic.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const threshold = options.threshold ?? 0
  const rootMargin = options.rootMargin ?? '0px 0px -5% 0px'

  useEffect(() => {
    const root = ref.current
    if (!root) return

    // No IntersectionObserver (or reduced motion): show everything immediately.
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (typeof IntersectionObserver === 'undefined' || reduce) {
      root.querySelectorAll('.reveal').forEach((el) =>
        el.classList.add('is-visible', 'is-settled'))
      root.classList.add('is-visible', 'is-settled')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            el.classList.add('is-visible')
            el.addEventListener('animationend', () => el.classList.add('is-settled'),
                                { once: true })
            io.unobserve(el)
          }
        })
      },
      { threshold, rootMargin }
    )

    const observe = () => {
      const targets = root.hasAttribute('data-reveal-self')
        ? [root]
        : root.querySelectorAll('.reveal:not(.is-visible)')
      targets.forEach((t) => io.observe(t))
    }

    observe()

    // Catch `.reveal` nodes added after mount (tab panels, conditional blocks).
    const mo = new MutationObserver(observe)
    mo.observe(root, { childList: true, subtree: true })

    /* Late-reflow safety net: once the viewport is within a screen of the
       document's end, reveal anything still hidden. A tall page that grows
       while images decode can otherwise strand its last block forever. */
    const sweep = () => {
      const nearEnd = window.innerHeight + window.scrollY >=
                      document.documentElement.scrollHeight - window.innerHeight
      if (!nearEnd) return
      root.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.5) {
          el.classList.add('is-visible')
          io.unobserve(el)
        }
      })
    }
    window.addEventListener('scroll', sweep, { passive: true })
    window.addEventListener('resize', sweep)

    return () => {
      io.disconnect(); mo.disconnect()
      window.removeEventListener('scroll', sweep)
      window.removeEventListener('resize', sweep)
    }
  }, [threshold, rootMargin])

  return ref
}
