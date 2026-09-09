import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from './Icons'

const CARDS = [
  { title: 'The Jasper Blog',        body: 'Stories, insights, and best practices for AI powered marketing.', img: '/assets/Jasper-Blog.avif',      cta: 'Learn More' },
  { title: 'Watch Jasper Foundations', body: 'The foundational knowledge your team needs to get productive fast.', img: '/assets/Foundations.avif',   cta: 'Learn More' },
  { title: 'Customer Stories',       body: 'How businesses like yours are putting Jasper agents to work.',       img: '/assets/Customer-Stories.avif', cta: 'Learn More' },
  { title: 'Get Support',            body: 'Get in touch about your account, plan, or anything else you need.',  img: '/assets/Get-Support.avif',     cta: 'Learn More' },
  { title: 'Connect with community', body: 'Self-paced guides, courses, and a community of AI-forward marketers.', img: '/assets/Community.avif', cta: 'Learn More' },
  { title: 'Search Knowledge Center',body: 'Learn how to use generative AI across every part of your workflow.',  img: '/assets/Knowledge-Center.avif',      cta: 'Learn More' },
]

export default function Resources() {
  const ref = useReveal()

  return (
    <section ref={ref} className="bg-surface pt-[40px] pb-[112px]">
      <div className="u-container">
        <p className="reveal eyebrow text-text-small text-ink/70">Resources</p>

        <div className="reveal mt-5 flex flex-wrap items-end justify-between gap-6"
             style={{ '--reveal-delay': '80ms' }}>
          <h2 className="font-serif text-ink tracking-tightest max-w-[30ch]
                         text-[clamp(2rem,4.4vw,3.375rem)] leading-1.05">
            Your AI success starts here
          </h2>
          <a href="#" className="btn btn-secondary shrink-0">Explore All Resources</a>
        </div>

        {/* measured: layout_cards_grid = 12-col, 16px gutter, span-4 each */}
        <div className="mt-12 md:mt-16 grid gap-gutter sm:grid-cols-2 lg:grid-cols-12">
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className="reveal group lg:col-span-4 flex flex-col overflow-hidden rounded-DEFAULT
                         border border-ink/10 bg-surface"
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              {/* measured: 443x249 image => 16/9 */}
                  <div className="aspect-[16/9] overflow-hidden bg-surface-2">
                <img src={card.img} alt="" aria-hidden="true" loading="lazy"
                     className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-serif text-ink tracking-tighter leading-1.1
                               text-[clamp(1.35rem,2vw,1.75rem)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-text-main text-ink/85 text-pretty">{card.body}</p>
                <a href="#" className="link-arrow mt-6 text-text-main self-start">
                  {card.cta}
                  <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
