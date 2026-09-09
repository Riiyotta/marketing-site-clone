/**
 * "The keys to building AI workflows that actually work" — the second
 * `.layout_cards_wrap`.
 *
 * Measured at 1440px on live /platform (section height 923):
 *   112px g_section_space above; no spacer below (the slider carries its own).
 *   header 1022px centred: eyebrow chip "Jasper Studio" on flame-300 (mono
 *   16/16, 2px pad, mb 24px); h2 Feature 80/80 ls -2.4px max 20ch mb 24px;
 *   one 514px 16/22.4 paragraph mb 24px; a mono flame-600 "Explore" link.
 *   48px (u-gap-7) below the header sits a 3-up row, space-between, each
 *   column 318 / 251 / 318px wide and 349px tall, flex column gap 48px:
 *     visual  118x106 image
 *     h3      Feature 24/26.4, max 14ch, centred, 20px below the visual
 *     body    16/22.4 ABC ROM centred
 *     button  .btn_main filled ink, 48px tall, 18px/500 capitalize label
 */
const CARDS = [
  { img: '/assets/studio-builder.webp', title: 'No-Code Agent Builder',
    body: 'Design and deploy context-rich AI agents and workflows that transform your marketing processes - no code required',
    cta: 'Explore the Agent Builder' },
  { img: '/assets/studio-integrations.webp', title: 'Integrations & Extensions',
    body: '1000+ integrations & extensions to extend the power of Jasper to the systems you already use.',
    cta: 'Explore Integrations' },
  { img: '/assets/studio-api.webp', title: 'The Jasper API',
    body: 'The Jasper API powers your tasks across platforms, simplifying and streamlining your entire marketing process',
    cta: 'Explore the API' },
]

export default function PlatformStudio() {
  return (
    <section className="bg-surface pt-[112px]">
      <div className="u-container flex flex-col items-center gap-12">
        <div className="flex max-w-[1022px] flex-col items-center text-center">
          <p className="reveal eyebrow bg-flame-300 px-[2px] py-[2px] leading-none">Jasper Studio</p>
          <h2 className="reveal mt-6 max-w-[20ch] font-serif text-ink tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
              style={{ '--reveal-delay': '80ms' }}>
            The keys to building AI workflows that actually work for your team
          </h2>
          <p className="reveal mt-6 max-w-[514px] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            Launch the AI workflows your team needs—with the full support of IT.
          </p>
          <a href="#" className="reveal link-arrow mt-6 font-mono text-text-main"
             style={{ '--reveal-delay': '200ms' }}>
            Explore
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M4.96 9.84834L3.968 8.84034L7.184 5.70434H0V4.31234H7.152L3.952 1.17634L4.96 0.152344L9.84 5.01634L4.96 9.84834Z"
                    fill="currentColor" />
            </svg>
          </a>
        </div>

        <div className="flex w-full flex-col items-stretch justify-between gap-12
                        md:flex-row md:gap-gutter">
          {CARDS.map((c, i) => (
            <article key={c.title}
                     className="reveal flex flex-col items-center justify-center gap-12
                                text-center md:max-w-[318px] md:flex-1"
                     style={{ '--reveal-delay': `${i * 100}ms` }}>
              <div className="flex flex-col items-center gap-s3-5">
                <img src={c.img} alt="" aria-hidden="true" loading="lazy"
                     className="h-[106px] w-[118px] object-contain" />
                <h3 className="max-w-[14ch] font-serif text-ink text-h4 leading-[1.1]">
                  {c.title}
                </h3>
                <p className="text-text-main text-ink text-pretty">{c.body}</p>
              </div>
              <a href="#" className="btn btn-tertiary mt-auto">{c.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
