import { useReveal } from '../../hooks/useReveal'

/**
 * `window_wrap u-width-full` — the short navy closing band used by the two
 * /image/* pages, and by /studio as a media frame.
 *
 * MEASURED on live /image/api and /image/pipelines (section 1440 x 350):
 *   a full-bleed ink (#00063d) band, a 54px Feature heading in WHITE centred
 *   in the 1360px container, and one filled CTA below it. On /studio the same
 *   wrapper is 860px and holds a Wistia embed over the flame-circles SVG —
 *   that use passes `media` instead of a title.
 *
 * Props
 *   title  node    the white heading
 *   cta    {label, variant}
 *   media  {src, alt}   still frame used in place of a third-party embed
 *   height px      section height when used as a media frame
 */
export default function WindowCta({ title, cta, media, height }) {
  const ref = useReveal()

  if (media) {
    return (
      <section ref={ref} className="clip-bleed relative bg-flame-200"
               style={height ? { minHeight: height } : undefined}>
        <img src="/assets/bg_flame_circles.svg" alt="" aria-hidden="true"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <div className="u-container relative flex h-full items-center justify-center py-16">
          <img src={media.src} alt={media.alt || ''} loading="lazy"
               className="reveal w-full max-w-[1200px] border border-dark-150 object-contain" />
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="bg-ink py-[80px] md:py-[104px]">
      <div className="u-container flex flex-col items-center gap-8 text-center">
        <h2 className="reveal max-w-[22ch] font-serif text-white tracking-tightest leading-1.05
                       text-[clamp(2rem,3.75vw,3.375rem)]">
          {title}
        </h2>
        {cta && (
          <a href="#" className={`reveal btn ${cta.variant || 'btn-primary'}`}
             style={{ '--reveal-delay': '120ms' }}>{cta.label}</a>
        )}
      </div>
    </section>
  )
}
