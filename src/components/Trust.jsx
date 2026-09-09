import { useReveal } from '../hooks/useReveal'

/**
 * Trust Foundation.
 *
 * Measured from the live `.trust_wrap`:
 *   section   1440 x 829, background WHITE (not navy)
 *   frame     `trust.svg` at 1040 x 862, offset top -48 / left 200,
 *             absolutely positioned BEHIND the copy
 *   content   `.trust_layout` 1360 x 329 at y=252, text-align: center
 *   eyebrow   ABC ROM Mono 16px / lh 16px, colour #00063D
 *   headline  Feature 80px / lh 80px, weight 450, colour #00063D
 *   body      ABC ROM 16px / lh 22.4px
 *   CTA       "Explore Trust" — secondary (outline) button, label 18px / 500
 *
 * An earlier revision of this file invented a navy two-column layout with a
 * three-item feature list; none of that exists on the original.
 */
export default function Trust() {
  const ref = useReveal()

  return (
    <section ref={ref} className="relative bg-surface overflow-hidden" style={{ minHeight: 829 }}>
      {/* stepped pixel-art frame, sits behind the copy */}
      <div className="pointer-events-none absolute inset-0 flex justify-center" aria-hidden="true">
        <img
          src="/assets/trust.svg"
          alt=""
          className="reveal max-w-none"
          style={{ width: 1040, height: 862, marginTop: -48 }}
        />
      </div>

      {/* centred content well */}
      <div className="u-container relative flex h-full items-center justify-center"
           style={{ paddingTop: 225, paddingBottom: 221 }}>
        <div className="text-center">
          <p className="reveal eyebrow inline-block bg-flame-300 px-2 py-1 text-text-main leading-1">
            Trust Foundation
          </p>

          <h2 className="reveal mt-6 mx-auto max-w-[1022px] font-serif text-ink tracking-tightest
                         text-[clamp(2.25rem,5.6vw,5rem)] leading-1"
              style={{ '--reveal-delay': '80ms' }}>
            Enterprise-grade security, quality outputs
          </h2>

          <p className="reveal mt-6 mx-auto max-w-[52ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            Enterprise-grade security and an LLM-agnostic architecture prioritize your data
            protection &amp; privacy while providing superior quality marketing outputs.
          </p>

          <div className="reveal mt-8" style={{ '--reveal-delay': '200ms' }}>
            <a href="#" className="btn btn-secondary" style={{ fontSize: 18, fontWeight: 500 }}>
              Explore Trust
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
