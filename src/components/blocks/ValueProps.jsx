import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, ArrowLink } from './primitives'

/**
 * `value_props_wrap` — an 80px display heading over a two-track band: a
 * column of flat tinted cards on the LEFT and one tall duotone photograph on
 * the RIGHT, with the "Pink Pattern" dot-lattice SVG rotated over the photo's
 * top-right corner.
 *
 * MEASURED on live /studio (section 1440 x 1275) and /api (1326):
 *   mono eyebrow, then h2 Feature 80/80 ls -2.4px in a ~22ch measure;
 *   below it a row: left track ~253px of stacked cards, each a flat tint
 *   with 24px padding, an h3 Feature 38px and a 16/22.4 body, 16px apart;
 *   right track a 941px-wide photo. The Pink Pattern (625x574) is absolutely
 *   placed over the photo's top-right, rotated ~-20deg.
 *   Card tints run flame-300 / green-300 / blue-300 top to bottom.
 *
 * MEASURED on live /grid (1487px) the block uses FOUR 28px cards and the
 * photo runs taller (941x1039), so the card list length drives the height.
 *
 * The rotation lives on a WRAPPER div, never on the `.reveal` element — the
 * reveal animation fills forwards and silently overrides an inline transform.
 *
 * Props
 *   eyebrow  string
 *   title    node
 *   items    [{title, body, tint}]
 *   photo    {src, alt}
 *   pattern  boolean  draw the Pink Pattern lattice (default true)
 *   tint     section background class
 *   cardTitleSize tailwind class for the card h3 (default 38px)
 *   children node    optional block rendered directly UNDER the heading and
 *                    above the card/photo row. Live /security puts its three
 *                    certification badges (AICPA SOC / PCI DSS / GDPR) there,
 *                    inside the same 1360 container as the h2.
 */
const DEFAULT_TINTS = ['bg-flame-300', 'bg-green-300', 'bg-blue-300', 'bg-violet-400']

export default function ValueProps({
  eyebrow, title, items = [], photo, pattern = true, tint = 'bg-surface',
  cardTitleSize = 'text-[clamp(1.5rem,2.65vw,2.375rem)]', children,
}) {
  const ref = useReveal()

  return (
    <section ref={ref} className={`clip-bleed ${tint} py-[80px] md:py-section-main`}>
      <div className="u-container">
        {eyebrow && <Eyebrow className="reveal">{eyebrow}</Eyebrow>}
        <h2 className="reveal mt-4 max-w-[22ch] font-serif text-ink tracking-tightest leading-1
                       text-[clamp(2.25rem,5.55vw,5rem)]"
            style={{ '--reveal-delay': '80ms' }}>
          {title}
        </h2>
        {children && (
          <div className="reveal" style={{ '--reveal-delay': '140ms' }}>{children}</div>
        )}
      </div>

      <div className="u-container mt-12 grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-gutter">
        <div className="flex flex-col gap-4">
          {items.map((it, i) => (
            <article key={it.title}
                     className={`reveal ${it.tint || DEFAULT_TINTS[i % DEFAULT_TINTS.length]} p-6`}
                     style={{ '--reveal-delay': `${i * 90}ms` }}>
              <h3 className={`max-w-[16ch] font-serif text-ink tracking-tightest leading-1.05 ${cardTitleSize}`}>
                {it.title}
              </h3>
              <p className="mt-3 text-text-small text-ink text-pretty">{it.body}</p>
              {/* live /security closes each of its three cards with a coral
                  mono "Learn More" arrow link; /studio and /api do not, so the
                  link is per-item rather than always drawn. */}
              {it.link && <ArrowLink {...it.link} className="mt-4 self-start" />}
            </article>
          ))}
        </div>

        {photo && (
          <div className="relative">
            {/* rotation on a WRAPPER — an inline transform on a .reveal element
                is overwritten by the reveal animation's forwards fill */}
            {pattern && (
              <div aria-hidden="true"
                   className="pointer-events-none absolute -top-24 right-0 z-10 hidden w-[38%] lg:block"
                   style={{ transform: 'rotate(-20deg)' }}>
                <img src="/assets/Pink-Pattern.svg" alt="" className="h-auto w-full" />
              </div>
            )}
            <img src={photo.src} alt={photo.alt || ''} loading="lazy"
                 className="reveal h-full w-full object-cover"
                 style={{ '--reveal-delay': '120ms' }} />
          </div>
        )}
      </div>
    </section>
  )
}
