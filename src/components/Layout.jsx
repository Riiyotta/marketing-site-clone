import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useReveal } from '../hooks/useReveal'

/**
 * Shared chrome for every route, plus scroll-reset on navigation.
 *
 * The reveal observer is mounted HERE, on <main>, rather than per-section.
 * Several pages declared one `useReveal()` but rendered multiple <section>
 * elements, so only the first ever received `ref={ref}` — every `.reveal`
 * inside the others stayed at opacity:0 permanently (10 sections across 6
 * files). Observing from the page root covers them all, and the hook's
 * MutationObserver picks up anything that mounts later.
 */
export default function Layout({ children }) {
  const { pathname } = useLocation()
  const revealRef = useReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="page_wrap">
      <Navbar />
      {/* keyed on pathname so the observer re-binds on route change */}
      <main ref={revealRef} key={pathname}>{children}</main>
      <Footer />
    </div>
  )
}
