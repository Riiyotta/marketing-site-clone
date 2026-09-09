import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'
import { Eyebrow } from '../components/blocks/primitives'
import EditorialHero from '../components/blocks/EditorialHero'
import FilterIndex from '../components/blocks/FilterIndex'
import PageCta from '../components/PageCta'
import { FEATURED_POST, POPULAR_POSTS, BLOG_POSTS } from '../data/blog'

/**
 * /blog — rebuilt against the live page (22960px at 1440).
 *
 * Section order and heights from .scrape/plat-blog.json:
 *   hero_vertical_wrap     272   mono "The Jasper Blog" eyebrow + 80px h1,
 *                                centred on the page's flame-300 ground
 *   editorial_hero_wrap    865   832px lead card | "Popular posts" 3-up list
 *   sticky_scroll_wrap   19723   "All posts" sticky rail (search, Clear
 *                                Filters, a flame-200 community promo card)
 *                                beside a 2-up grid of 80 post cards
 *   cta_main_wrap          925   the shared closing CTA
 *
 * The 19723px index is almost entirely the 80-card grid — each card is 497px
 * wide with 497x280 art, and the live grid runs 40 rows deep. All 80 posts are
 * rendered here, with the real titles, summaries, dates, authors and images
 * captured from live (src/data/blog.js); none of it is padding.
 *
 * The hero band and the editorial band share one flame-300 ground on live, so
 * they are wrapped in a single tinted section rather than two.
 */
export default function Blog() {
  const heroRef = useReveal({ threshold: 0 })

  return (
    <>
      {/* 1 + 2 — hero_vertical_wrap over editorial_hero_wrap, one flame-300 ground */}
      <div ref={heroRef} className="clip-bleed bg-flame-300">
        <section>
          <div aria-hidden="true" className="h-[80px]" />

          <div className="u-container flex flex-col items-center text-center">
            <Eyebrow className="reveal mb-[38px]">The Jasper Blog</Eyebrow>

            <h1 className="reveal font-serif text-ink tracking-tightest leading-1
                           text-[clamp(2.5rem,5.55vw,5rem)]"
                style={{ '--reveal-delay': '60ms' }}>
              Resources for AI in Marketing
            </h1>
          </div>
        </section>

        <EditorialHero lead={FEATURED_POST} listLabel="Popular posts" items={POPULAR_POSTS} />
      </div>

      {/* 3 — sticky_scroll_wrap, h=19723 — the 80-post index */}
      <FilterIndex
        title="All posts"
        items={BLOG_POSTS}
        empty="No posts match that search."
        search={(p, q) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q)}
        promo={
          /* the flame-200 "Join the official Jasper community" card pinned
             under the rail's Clear Filters button */
          <div className="bg-flame-200 p-4">
            <h3 className="font-serif text-ink tracking-tighter leading-[1.1] text-h4">
              Join the official Jasper community
            </h3>
            <p className="mt-3 text-text-tiny text-ink text-pretty">
              Meet marketers, creators, &amp; more sharing tips for generating amazing
              content 10X faster using AI.
            </p>
            <a href="#"
               className="link-arrow mt-6 inline-flex font-mono text-text-small text-flame-600">
              Join Today<ArrowRight />
            </a>
          </div>
        }
        render={(p) => (
          /* MEASURED live: `.g_card` is a FIXED 497x465 — 280px of art over a
             186px copy block at 16px padding, on a surface-2 ground. A long
             summary simply overflows that box and is clipped, which is why the
             live grid is exactly 40 rows of 465 + 16px gutter and not taller. */
          <article key={p.href} className="flex h-[465px] flex-col overflow-hidden bg-surface-2">
            <img src={p.img} alt="" aria-hidden="true" width={497} height={280}
                 loading="lazy"
                 className="aspect-[497/280] w-full shrink-0 object-cover" />

            <div className="flex min-h-0 flex-1 flex-col p-4">
              <h3 className="font-serif text-ink tracking-tighter leading-[1.1]
                             text-[clamp(1.375rem,1.95vw,1.75rem)]">
                <a href={p.href}
                   className="transition-opacity duration-300 ease-jasper hover:opacity-70">
                  {p.title}
                </a>
              </h3>

              <p className="mt-2 min-h-0 flex-1 overflow-hidden text-text-small
                            text-ink text-pretty">
                {p.summary}
              </p>

              <p className="mt-2 flex shrink-0 flex-wrap items-center gap-2
                            font-mono text-text-small">
                <span className="text-flame-600">{p.date}</span>
                <span aria-hidden="true" className="text-ink/40">|</span>
                <span className="text-ink/70">{p.author}</span>
              </p>
            </div>
          </article>
        )} />

      {/* 4 — cta_main_wrap, h=925 */}
      <PageCta />
    </>
  )
}
