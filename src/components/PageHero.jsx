import { useReveal } from '../hooks/useReveal'

/**
 * Shared interior-page hero.
 * Matches the original's `hero_main_wrap` rhythm: mono eyebrow, serif display
 * headline, supporting paragraph, then optional CTAs — all centred in the
 * 1360px well on the light-grey ground.
 */
export default function PageHero({ eyebrow, title, sub, ctas = [], tint = 'bg-surface-2' }) {
  const ref = useReveal({ threshold: 0.05 })

  return (
    <section ref={ref} className={`${tint} pt-section-page-top pb-section-main`}>
      <div className="u-container text-center">
        {eyebrow && (
          <p className="reveal eyebrow inline-block bg-flame-300 px-2 py-1 text-text-small">
            {eyebrow}
          </p>
        )}
        <h1 className="reveal mt-6 mx-auto max-w-[20ch] font-serif text-ink tracking-tightest
                       text-[clamp(2.375rem,5.2vw,3.375rem)] leading-1.05"
            style={{ '--reveal-delay': '80ms' }}>
          {title}
        </h1>
        {sub && (
          <p className="reveal mt-6 mx-auto max-w-[58ch] text-text-large text-ink/90 text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            {sub}
          </p>
        )}
        {ctas.length > 0 && (
          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3"
               style={{ '--reveal-delay': '200ms' }}>
            {ctas.map((c) => (
              <a key={c.label} href="#" className={`btn ${c.variant || 'btn-primary'}`}>
                {c.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
