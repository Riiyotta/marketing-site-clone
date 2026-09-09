import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ChevronDown } from './Icons'

/**
 * FAQ accordion.
 *
 * Measured from the live `.accordion_1`:
 *   grid      9 columns x 136.875px, 16px gutter, section height 604
 *   title col `.accordion_1_title` spans 2 (290px) at x=0
 *   items col `.accordion_1_cms_wrap` spans 7 (1054px) starting at column 3
 *   badge     "FAQs" — Feature 80px, colour #00063D, padding 0 4px,
 *             rotated -10deg (matrix 0.9848,-0.1736,0.1736,0.9848) on a
 *             coral ground
 *   heading   Feature 38px / lh 38px, #00063D
 *   card      background #ffe8e2, border 1px solid #fa7560
 *   question  ABC ROM 16px, #00063D, padding 32px 0
 *   icon      22 x 22 chevron, no background or border
 *
 * Questions match the original's set; answers are shortened summaries.
 */
const FAQS = [
  { q: 'How is Jasper different from ChatGPT, Claude, or Gemini?',
    a: 'General-purpose assistants have no built-in knowledge of your brand. This platform is marketing-specific: brand context is applied to every output, alongside task-specific agents, team-scale content pipelines, and governance controls.' },
  { q: 'Can Jasper keep brand voice consistent?',
    a: 'Yes. Brand voice, style guides, audience profiles, and product knowledge are stored centrally and applied to every generation across the team. Admins set the rules once, and multiple voices can be maintained per sub-brand or region.' },
  { q: 'Does Jasper have agents built for specific marketing tasks?',
    a: 'Yes. A library of purpose-built agents covers jobs such as SEO, campaign execution, email, social, personalization, and research — each executing end-to-end workflows rather than one-off responses.' },
  { q: 'Is Jasper a chatbot?',
    a: 'No. There is a chat interface, but it is one entry point into a broader system of agents, content pipelines, and a brand intelligence layer — not the product itself.' },
  { q: 'Is Jasper multimodal?',
    a: 'Yes. Both text and image generation are supported and scale across marketing workflows, with APIs for background removal, cleanup, upscaling, and decomposition.' },
  { q: 'Is Jasper an AI content platform?',
    a: 'It covers more than content generation. An intelligence layer embeds brand context automatically, and teams use it to run campaigns and scale pipelines with consistency built in.' },
]

/* Prop-driven so the Platform sub-pages can reuse the same accordion with
   their own question set. `items` entries take { q, a } where `a` is either a
   string or arbitrary JSX (live /jasper-iq's first answer is a multi-part
   answer with an ordered list, so it is passed as a node). Defaults reproduce
   the homepage set unchanged, so existing callers need no update. */
/* `headingTag` / `questionTag`: live tags BOTH the section heading and every
   question as <h3> on /jasper-iq's `.accordion_1`, while the homepage block
   uses <h2> + a plain span. Opt in per caller rather than changing the
   default, so the existing pages keep their outline. */
export default function Faq({ items = FAQS, heading = 'Frequently asked questions about Jasper',
                              spaceBottom = true, headingTag: HTag = 'h2',
                              questionTag: QTag = 'span' }) {
  const ref = useReveal()
  const [open, setOpen] = useState(0)

  return (
    <section ref={ref} className={`bg-surface ${spaceBottom ? 'pb-section-main' : ''}`}>
      <div className="u-container">
        <div className="grid gap-gutter lg:grid-cols-9">

          {/* Title column — spans 2 of 9 */}
          <div className="lg:col-span-2">
            {/* rotation lives on this wrapper: the .reveal keyframe animates
                `transform`, so a rotate() on the revealed node itself is
                overwritten when the animation lands. */}
            <div className="reveal inline-block">
              <span
                className="inline-block bg-flame-600 font-serif text-ink tracking-tightest
                           leading-1 text-[clamp(3rem,5.6vw,5rem)]"
                style={{ padding: '0 4px', transform: 'rotate(-10deg)' }}
              >
                FAQs
              </span>
            </div>

            <HTag className="reveal mt-8 font-serif text-ink tracking-tighter
                           text-[clamp(1.75rem,2.9vw,2.375rem)] leading-1"
                style={{ '--reveal-delay': '80ms' }}>
              {heading}
            </HTag>
          </div>

          {/* Items column — spans 7, starting at column 3 */}
          <div className="reveal lg:col-span-7 lg:col-start-3"
               style={{ '--reveal-delay': '140ms' }}>
            {items.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={item.q}
                  className="border border-flame-500 bg-flame-300 -mt-px first:mt-0"
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 px-6 text-left"
                    style={{ paddingTop: 30, paddingBottom: 30 }}
                  >
                    <QTag className="font-sans text-ink text-text-main font-book">
                      {item.q}
                    </QTag>
                    {/* measured: 22x22, no background, no border */}
                    <span
                      className="shrink-0 grid place-items-center text-flame-600
                                 transition-transform duration-300 ease-jasper"
                      style={{ width: 22, height: 22, marginTop: 0,
                               transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <div className="grid transition-[grid-template-rows] duration-500 ease-jasper"
                       style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-8 max-w-[74ch] text-text-main text-ink text-pretty">
                        {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
