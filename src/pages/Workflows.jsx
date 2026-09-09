import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'
import { Eyebrow, CtaRow } from '../components/blocks/primitives'
import FilterIndex from '../components/blocks/FilterIndex'
import { WORKFLOWS, WORKFLOW_FILTERS } from '../data/workflows'

/**
 * /workflows — rebuilt against the live page (4987px at 1440).
 *
 * Section order and heights from .scrape/plat-workflows.json:
 *   hero_vertical_wrap    639   mono eyebrow "Jasper Workflows", 80px h1,
 *                               a two-line lede, and the two hero buttons
 *   sticky_scroll_wrap   3173   "All Workflows" sticky rail (search + Clear
 *                               Filters + 27 filter chips) beside a 2-up grid
 *                               of 11 workflow cards, 439px wide and 461-523px
 *                               tall depending on body length
 *
 * Live has NO closing cta_main_wrap on this route — the footer follows the
 * grid directly.
 *
 * The card art is a 437x293 illustration on a white plate above a surface-2
 * copy block; the first two cards carry a green-400 "Featured Workflow" chip
 * where the others start straight at the title.
 */
export default function Workflows() {
  const heroRef = useReveal({ threshold: 0 })

  return (
    <>
      {/* 1 — hero_vertical_wrap, h=639 */}
      <section ref={heroRef} className="clip-bleed bg-surface">
        <div aria-hidden="true" className="h-[112px]" />

        <div className="u-container flex flex-col items-center text-center">
          <Eyebrow chip="bg-flame-200" className="reveal mb-[38px] bg-flame-200 px-1">
            Jasper Workflows
          </Eyebrow>

          <h1 className="reveal max-w-[20ch] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]"
              style={{ '--reveal-delay': '60ms' }}>
            AI marketing workflows for every use case in Jasper
          </h1>

          <p className="reveal mt-6 max-w-[52ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '120ms' }}>
            Step-by-step guides to help your team get more out of Jasper, from content
            creation to campaign execution.
          </p>

          <CtaRow className="reveal mt-8 justify-center"
                  style={{ '--reveal-delay': '180ms' }}
                  ctas={[
                    { label: 'Start Free Trial', variant: 'btn-secondary' },
                    { label: 'Get A Demo', variant: 'btn-primary' },
                  ]} />
        </div>

        <div aria-hidden="true" className="h-[80px]" />
      </section>

      {/* 2 — sticky_scroll_wrap, h=3173 — the 11-card workflow index */}
      <FilterIndex
        title="All Workflows"
        chips={WORKFLOW_FILTERS}
        railWidth={427}
        wellWidth={893}
        items={WORKFLOWS}
        empty="No workflows match that search."
        search={(w, q) =>
          w.title.toLowerCase().includes(q) || w.body.toLowerCase().includes(q)}
        render={(w) => (
          <article key={w.href} className="flex flex-col">
            <img src={w.img} alt="" aria-hidden="true" width={437} height={293}
                 loading="lazy"
                 className="aspect-[437/293] w-full border border-ink/10 border-b-0
                            bg-surface object-contain" />

            <div className="flex flex-1 flex-col bg-surface-2 p-6">
              {w.eyebrow && (
                <p className="mb-3 self-start bg-green-400 px-1 font-mono
                              text-text-tiny leading-none text-ink">
                  {w.eyebrow}
                </p>
              )}

              <h3 className="font-serif text-ink tracking-tighter leading-[1.1]
                             text-[clamp(1.5rem,1.95vw,1.75rem)]">
                <a href={w.href}
                   className="transition-opacity duration-300 ease-jasper hover:opacity-70">
                  {w.title}
                </a>
              </h3>

              <p className="mt-3 text-text-small text-ink text-pretty">{w.body}</p>

              <a href={w.href}
                 className="link-arrow mt-auto self-start pt-6 font-mono
                            text-text-small text-flame-600">
                {w.cta}<ArrowRight />
              </a>
            </div>
          </article>
        )} />
    </>
  )
}
