import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from './Icons'

/**
 * "Structured systems for repeatable execution" — `.value_props_wrap`
 * (the `.u-zindex-2` block on live /platform).
 *
 * Measured at 1440px on the live page (section height 1613):
 *   112px g_section_space top and bottom.
 *   `.value_props_intro` — 1360px u-container, margin-bottom 64px:
 *     eyebrow "Content Pipelines" (mono 16/16) mb 24px; h2 Feature 80/80
 *     ls -2.4px max 20ch mb 12px; a 16/22.4 paragraph in a 50ch measure that
 *     ends with a blank line and the bold "Explore Content Pipelines" link.
 *   `.value_props_breakout` — a full-bleed 1440px grid, 931px tall, 16px gap:
 *     left  443px  the lifecycle column
 *     right 941px  the KB Hero photograph, object-cover, full height
 *   `.value_props_cards_wrap` — flex column, 16px gap:
 *     h3 Feature 28/29.4 ls -0.84px max 10ch, then five 443x154 stage cards.
 *   Each stage card is a flat tint with no radius and no border:
 *     padding 12px 0 0; header pad 0 12px with the h4 (Feature 24/26.4,
 *     letter-spacing normal) in the stage colour; body pad 24px 12px 12px.
 *   `.value_props_pattern` — the 627x576 pink dot SVG, rotated 20deg, at
 *     left 983 / top -75 relative to the section. Pinned here off the RIGHT
 *     edge (-170px) so it lands in the same place at 1440 without a fixed
 *     left offset outrunning the box on wider viewports.
 *
 * Tints and heading colours read off the live computed styles:
 *   01 yellow-500  / olive-700     02 green-400  / green-700
 *   03 blue-300    / ink           04 flame-300  / flame-800
 *   05 violet-400  / violet-800
 */
const STAGES = [
  ['01. Plan', 'bg-yellow-500', 'text-olive-700',
   'Agents gather insights and data to inform smarter strategies, ensuring every plan is grounded in actionable intelligence.'],
  ['02. Create', 'bg-green-400', 'text-green-700',
   'Agents generate high-quality, on-brand content tailored for multi-channel use, aligned to defined strategy and audience context.'],
  ['03. Adapt', 'bg-blue-300', 'text-ink',
   'Agents localize and personalize content for different audiences and markets, maintaining consistency while increasing relevance.'],
  ['04. Activate', 'bg-flame-300', 'text-flame-800',
   'Agents push content into systems of record for effective execution, ensuring campaigns launch efficiently and reach the right channels on time.'],
  ['05. Optimize', 'bg-violet-400', 'text-violet-800',
   'Performance data and search best practices guide ongoing refinement to improve visibility, engagement, and overall impact'],
]

export default function PlatformPipelines() {
  const ref = useReveal()

  return (
    <section ref={ref} className="clip-bleed relative bg-surface py-section-main">
      {/* .value_props_pattern — 627x576, rotate(20deg); right -170 == left 983 at 1440 */}
      <img
        src="/assets/pipeline-pink-pattern.svg"
        alt="" aria-hidden="true" loading="lazy"
        className="pointer-events-none absolute right-[-170px] top-[-75px] hidden h-[576px]
                   w-[627px] max-w-none rotate-[20deg] lg:block"
      />

      <div className="u-container relative mb-16">
        <p className="reveal eyebrow text-text-main text-ink">Content Pipelines</p>
        <h2 className="reveal mt-6 max-w-[20ch] font-serif text-ink tracking-tightest
                       text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
            style={{ '--reveal-delay': '80ms' }}>
          Structured systems for repeatable execution
        </h2>
        <p className="reveal mt-3 max-w-[50ch] text-text-main text-ink text-pretty"
           style={{ '--reveal-delay': '140ms' }}>
          Content Pipelines are the system that connects strategy to execution. They define
          how marketing work moves from planning to activation and continuous
          optimization—consistently, predictably, and at scale.
        </p>
        <a href="#" className="reveal link-arrow mt-6 text-text-main"
           style={{ '--reveal-delay': '200ms' }}>
          Explore Content Pipelines
          <ArrowRight />
        </a>
      </div>

      {/* .value_props_breakout — full-bleed 443 / 941 split on a 16px gutter */}
      {/* .value_props_breakout — 931px tall on live, set by the five stage
          cards. Playfair/Inter wrap each 50ch body one line short of the
          original, so the column is pinned to the measured height and the
          cards stretch into it rather than leaving the photo short. */}
      <div className="relative grid gap-gutter px-5 lg:h-[931px]
                      lg:grid-cols-[443px_minmax(0,1fr)]">
        <div className="flex flex-col gap-gutter">
          <h3 className="reveal font-serif text-ink tracking-tighter
                         text-[clamp(1.5rem,2.4vw,1.75rem)] leading-1.05">
            Every Jasper Content Pipeline follows a shared lifecycle:
          </h3>

          {STAGES.map(([step, tint, tone, body], i) => (
            <article key={step}
                     className={`reveal ${tint} flex flex-1 flex-col pt-3`}
                     style={{ '--reveal-delay': `${i * 80}ms` }}>
              <div className="px-3">
                <h4 className={`${tone} max-w-[20ch] font-serif tracking-none
                                text-[clamp(1.25rem,1.9vw,1.5rem)] leading-1.1`}>
                  {step}
                </h4>
              </div>
              <div className="flex-1 px-3 pb-3 pt-6">
                <p className="max-w-[50ch] text-text-main text-ink text-pretty">{body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal min-h-[320px] lg:min-h-0 lg:h-full"
             style={{ '--reveal-delay': '160ms' }}>
          <img
            src="/assets/pipeline-kb-hero.avif"
            alt="Two people sitting at a table collaborating, one shows a phone screen while the other holds a pencil over documents and colored pencils, with a laptop and drinks on the table."
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
