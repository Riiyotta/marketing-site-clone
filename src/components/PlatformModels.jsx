import { useState } from 'react'

/**
 * "Jasper is AI built to execute marketing end to end" — `.models_wrap`.
 *
 * Measured at 1440px on the live /platform:
 *   section        1440 x 353, flex row, centre-aligned, no padding.
 *   .models_layout 1360 (u-container), space-between, padding-right 80px.
 *   left column    557px — h1 54/56.7 Feature ls -1.62px, max-width 12ch,
 *                  mb 24px; two 16/22.4 ABC ROM paragraphs (514px, mb 24px).
 *   right column   499px, flex column, gap 16px, three `.models_item`
 *                  (84px tall, overflow:hidden, padding-left 32px) so the
 *                  248/332/385px detail panel below the header is clipped
 *                  until the item is opened.
 *   header band    84px tall, padding-top 2px, title Feature 80/80 ls -2.4px.
 *                  Backgrounds ramp flame-800 / flame-500 / flame-400 with
 *                  the label in flame-500 / white / flame-200.
 *   icon           29px square plus-mark, sits in the 32px left inset.
 *   detail panel   277px wide, margin-left 40px, bg flame-300, padding
 *                  24px 12px; h4 Feature 20/22, body 16/22.4, then 20px
 *                  mono chips on flame-700 with 4px padding and 8px gaps.
 *   decoration     826 x 594 absolute image, left 614px, top -120px.
 */
const ITEMS = [
  {
    label: 'Agents',
    band: 'bg-flame-800', text: 'text-flame-500',
    iconBg: '#410d07', iconStroke: '#fa7560',
    title: 'Agents execute real marketing work',
    body: 'Jasper Agents handle tasks like research, creation, and optimization with precision. They ensure outputs are consistent, compliant, and high-quality.',
    chips: ['Agents Library'],
  },
  {
    label: 'Content Pipelines',
    band: 'bg-flame-500', text: 'text-white',
    iconBg: '#fa7560', iconStroke: '#fff7f5',
    title: 'Content Pipelines define how work flows',
    body: 'Pipelines structure marketing workflows, connecting planning to execution. They ensure consistency, scalability, and predictable results.',
    chips: ['Canvas', 'Grid', 'Marketing Editor', 'Chat', 'AI Image Suite', 'Jasper Studio'],
  },
  {
    label: 'Jasper IQ',
    band: 'bg-flame-400', text: 'text-flame-800',
    iconBg: '#ffb3a3', iconStroke: '#410d07',
    title: 'IQ embeds governance, context, and trust from the start',
    body: 'Jasper IQ aligns every action with your brand, audience, and business standards. It ensures work is efficient, compliant, and context-driven.',
    chips: ['Marketing IQ', 'Audiences', 'Style Guide', 'Brand Voice', 'Visual Guidelines', 'Knowledge Base'],
  },
]

/* measured: 29px square, 28.33 rect + a 2px square-cap plus */
const PlusMark = ({ bg, stroke }) => (
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true"
       className="shrink-0">
    <rect width="28.3333" height="28.3333" fill={bg} />
    <path d="M14.1667 8.16602V20.166M8.16669 14.166H20.1667"
          stroke={stroke} strokeWidth="2" strokeLinecap="square" />
  </svg>
)

export default function PlatformModels() {
  const [open, setOpen] = useState(null)

  return (
    <section className="clip-bleed relative flex items-center bg-surface">
      {/* .models_decoration — 826x594 bleeding past the section on both edges */}
      <img
        src="/assets/models-decoration.webp"
        alt="" aria-hidden="true" loading="lazy"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[594px] w-[826px]
                   max-w-none -translate-y-1/2 object-cover lg:block"
      />

      {/* .models_layout — 1360px, padding-right 80px, NO vertical padding: the
          measured 353px section height is exactly the left column's content
          (h2 167 + 24 + two 57px paragraphs + 24), so a section spacer here
          would push the band ~160px taller than live. */}
      <div className="u-container relative flex flex-wrap items-center justify-between
                      gap-12 py-12 lg:flex-nowrap lg:gap-0 lg:py-0 lg:pr-[80px]">
        <div className="reveal w-full lg:w-[557px] lg:shrink-0">
          <h2 className="max-w-[12ch] font-serif text-ink tracking-tightest
                         text-[clamp(2rem,3.75vw,3.375rem)] leading-1.05">
            Jasper is AI built to execute marketing end to end
          </h2>
          <div className="mt-6 max-w-[514px] space-y-6 text-text-main text-ink text-pretty">
            <p>
              Jasper is the platform that connects your team, your content, and your AI
              agents—so marketing work can be executed as a system, not a collection of tools.
            </p>
            <p>
              By combining agent execution, content pipelines, shared governance, and human
              orchestration in a single workspace, Jasper helps teams execute marketing with
              AI agents, at scale.
            </p>
          </div>
        </div>

        <div className="reveal flex w-full flex-col gap-gutter lg:w-[499px] lg:shrink-0"
             style={{ '--reveal-delay': '120ms' }}>
          {ITEMS.map((it, i) => {
            const isOpen = open === i
            return (
              <div key={it.label} className="flex flex-col items-start pl-8">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="relative -ml-8 flex h-[84px] shrink-0 items-center pl-8 text-left"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2">
                    <PlusMark bg={it.iconBg} stroke={it.iconStroke} />
                  </span>
                  {/* the band is a fixed 84px box; the 80px display type is
                      clipped to it exactly as on the live site */}
                  <span className={`${it.band} ${it.text} flex h-[84px] items-center
                                    overflow-hidden whitespace-nowrap font-serif
                                    tracking-tightest text-[clamp(2.25rem,4.7vw,4.25rem)]
                                    leading-[84px]`}>
                    {it.label}
                  </span>
                </button>

                <div className={`ml-10 w-[277px] max-w-full overflow-hidden bg-flame-300
                                 transition-[grid-template-rows] duration-500 ease-jasper
                                 grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="min-h-0">
                    <div className="px-3 py-6">
                      <h3 className="max-w-[20ch] font-serif text-flame-800 text-h5 leading-[1.1]">
                        {it.title}
                      </h3>
                      <p className="mt-3 text-text-main text-flame-800 text-pretty">{it.body}</p>
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        {it.chips.map(c => (
                          <a key={c} href="#"
                             className="inline-flex items-center gap-2 bg-flame-700 p-1
                                        font-mono text-text-main leading-none text-white">
                            {c}
                            <span className="text-text-small">→</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
