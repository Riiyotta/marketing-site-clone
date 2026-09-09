/**
 * "Governance, context, and control—built in" — the first `.layout_cards_wrap`.
 *
 * Measured at 1440px on live /platform (section height 707):
 *   112px g_section_space above, 80px below.
 *   .layout_cards_layout — flex column, gap 48px, centred.
 *   header 918px: eyebrow chip "Jasper IQ" on green-400 (mono 16/16, 2px pad,
 *   mb 24px); h2 Feature 54/56.7 ls -1.62px max 30ch mb 24px; one 616px
 *   16/22.4 paragraph mb 24px; then a mono flame-600 arrow link.
 *   .layout_cards_grid — 4 x 328px, 16px gutter, one 242px row.
 *   Each card: 328x242, padding 32px 12px, tint background, contents centred,
 *   title lines are individually-boxed Feature 54/56.7 runs with a solid
 *   highlight ground and 3.2px horizontal padding, stacked with an 8px gap.
 */
const CARDS = [
  { tint: 'bg-green-300',  chip: 'bg-[#207a00]', text: 'text-green-500',
    lines: ['Brand', 'Guidelines', 'and Voice'] },
  { tint: 'bg-blue-300',   chip: 'bg-blue-700',  text: 'text-blue-300',
    lines: ['Audiences', 'and', 'Personas'] },
  { tint: 'bg-flame-400',  chip: 'bg-flame-600', text: 'text-flame-300',
    lines: ['Company', 'and product', 'Knowledge'] },
  { tint: 'bg-pink-400',   chip: 'bg-pink-700',  text: 'text-pink-400',
    lines: ['Controls,', 'permissions,', '& policies'] },
]

export default function PlatformIQ() {
  return (
    <section className="bg-surface pb-[80px] pt-[112px]">
      <div className="u-container flex flex-col items-center gap-12">
        <div className="flex max-w-[918px] flex-col items-center text-center">
          <p className="reveal eyebrow bg-green-400 px-[2px] py-[2px] leading-none">Jasper IQ</p>
          <h2 className="reveal mt-6 max-w-[30ch] font-serif text-ink tracking-tightest
                         text-[clamp(2rem,3.75vw,3.375rem)] leading-1.05"
              style={{ '--reveal-delay': '80ms' }}>
            Governance, context, and control—built in
          </h2>
          <p className="reveal mt-6 max-w-[616px] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            Jasper IQ is the shared intelligence layer that powers everything on the platform.
            It centralizes the brand, audience, and business context that agents and pipelines
            rely on to execute work correctly from the start.
          </p>
          <a href="#" className="reveal link-arrow mt-6 font-mono text-text-main"
             style={{ '--reveal-delay': '200ms' }}>
            Explore Jasper IQ
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M4.96 9.84834L3.968 8.84034L7.184 5.70434H0V4.31234H7.152L3.952 1.17634L4.96 0.152344L9.84 5.01634L4.96 9.84834Z"
                    fill="currentColor" />
            </svg>
          </a>
        </div>

        {/* measured: 4 x 328px, 16px gutter, 242px tall */}
        <div className="grid w-full gap-gutter sm:grid-cols-2 lg:grid-cols-12">
          {CARDS.map((c, i) => (
            <article key={c.lines.join()}
                     className={`reveal ${c.tint} flex min-h-[242px] flex-col items-center
                                 justify-center gap-2 px-3 py-8 lg:col-span-3`}
                     style={{ '--reveal-delay': `${i * 90}ms` }}>
              {c.lines.map(l => (
                <span key={l}
                      className={`${c.chip} ${c.text} px-[3.2px] font-serif tracking-tightest
                                  text-[clamp(1.75rem,3.75vw,3.375rem)] leading-1.05`}>
                  {l}
                </span>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
