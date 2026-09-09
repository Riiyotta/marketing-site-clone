import { Link, useLocation } from 'react-router-dom'
import { STUB_ROUTES } from '../data/stubRoutes'
import { useReveal } from '../hooks/useReveal'

/**
 * Placeholder for a real jasper.ai route that this clone has not built yet.
 *
 * Previously every one of these ~45 nav destinations fell through the `*` route
 * to the homepage, so clicking "Canvas" or "Trust" in the mega-menu silently
 * rendered "Put AI agents to work for marketing". That reads as a finished page
 * and hides the gap; this says plainly what is missing and what the real page
 * looks like, and keeps the nav honest.
 *
 * The headline shown is the live <h1> for that route, captured from jasper.ai.
 */
export default function Stub() {
  const { pathname } = useLocation()
  const ref = useReveal({ threshold: 0.05 })
  const match = STUB_ROUTES.find((r) => r.path === pathname)

  return (
    <section ref={ref} className="bg-surface-2 pt-section-page-top pb-section-main">
      <div className="u-container text-center">
        <p className="reveal eyebrow inline-block bg-flame-300 px-2 py-1 text-text-small">
          Not cloned yet
        </p>

        <h1 className="reveal mt-6 mx-auto max-w-[20ch] font-serif text-ink tracking-tightest
                       text-[clamp(2.375rem,5.2vw,3.375rem)] leading-1.05"
            style={{ '--reveal-delay': '80ms' }}>
          {match ? match.title : 'This page has not been cloned'}
        </h1>

        <p className="reveal mt-6 mx-auto max-w-[56ch] text-text-large text-ink/90 text-pretty"
           style={{ '--reveal-delay': '140ms' }}>
          {match ? (
            <>
              <code className="font-mono text-text-main">{pathname}</code> is a route in the
              reference design, about {match.liveHeight.toLocaleString()}px tall. It has not
              been rebuilt here yet.
            </>
          ) : (
            <>
              No route matches <code className="font-mono text-text-main">{pathname}</code> in
              this clone.
            </>
          )}
        </p>

        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3"
             style={{ '--reveal-delay': '200ms' }}>
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/platform" className="btn btn-secondary">Browse the platform</Link>
        </div>

        <p className="reveal mt-12 text-text-small text-ink/60"
           style={{ '--reveal-delay': '260ms' }}>
          Every other route in the top nav is built — use the menu to browse.
        </p>
      </div>
    </section>
  )
}
