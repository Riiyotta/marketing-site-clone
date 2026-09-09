import { Link } from 'react-router-dom'

/* -----------------------------------------------------------------------
   Footer — rebuilt from measurements of the live .footer_wrap (1440px).

   Structure on the original is NOT "brand block + 5 link columns". It is:
     .footer_contain   1360px well, padding 80px 0, column flex, gap 112px
       .footer_layout  grid, auto-fit 304px tracks -> 4 up at 1440,
                       2 up at 768, 1 up at 390. gap 64px row / 48px column
         .footer_column  flex column, gap 40px
           heading link   24px Feature serif, weight 450, lh 26.4px + 12px arrow
           divider        1px full-track rule, margin -16px top / -12px bottom
           list groups    gap 12px inside, subtitle 18px ABC ROM weight 500
                          lh 21.6px, links 16px/22.4px at opacity .6
       .footer_bottom  flex row, space-between, align center, wraps
         logo (186x69.8, flame) | social 5 icons + legal list

   Every value below carries the measurement it came from.
   Route map: only 6 routes exist in this clone, so deep links resolve to
   the nearest real page rather than inventing 60 dead URLs.
----------------------------------------------------------------------- */

/* measured: footer_link_icon — 12x12 viewBox, currentColor arrow */
const ArrowIcon = () => (
  <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M6.03252 10L5.22602 9.16832L7.84064 6.58088H2V5.43234H7.81464L5.21301 2.84488L6.03252 2L10 6.0132L6.03252 10Z" fill="currentColor" />
  </svg>
)

/* measured: .footer_logo svg — viewBox 0 0 232 87, rendered 186x69.75, flame */
/* measured: .footer_logo — 186x69.75 at 1440/768, 358x134.25 at 390.
   The live mark is an SVG that fills its track up to 186px, so the wordmark
   is sized off the same box rather than a fixed font-size. */
const FooterLogo = () => (
  <span
    className="font-serif text-flame-600 leading-none select-none block"
    style={{ letterSpacing: '-0.03em' }}
  >
    jasper
  </span>
)

// Each column: a serif heading link, then groups. A group with `to` renders an
// 18px arrow link as its title (live .footer_link_large); without one it renders
// a plain 18px label (live .link_text_title).
const COLUMNS = [
  {
    head: 'Platform', to: '/platform',
    groups: [
      { title: 'GEO & AI Optimization', to: '/platform', links: [] },
      { title: 'Agents', to: '/platform', links: [
        ['Optimization', '/platform'], ['Research', '/platform'], ['Translation', '/platform'],
      ] },
      { title: 'Content Pipelines', to: '/platform', links: [
        ['AI Studio', '/platform'], ['Jasper Grid', '/platform'], ['Canvas', '/platform'],
        ['Marketing AI Editor', '/platform'], ['Jasper Chat', '/platform'],
        ['Image Pipelines', '/platform'], ['Jasper APIs', '/platform'],
        ['Jasper MCP', '/platform'], ['Image APIs', '/platform'],
      ] },
      { title: 'Jasper IQ', to: '/platform', links: [
        ['Marketing IQ', '/platform'], ['Product IQ', '/platform'],
        ['Knowledge Base', '/platform'], ['Brand IQ', '/platform'],
        ['Brand Voice', '/platform'], ['Visual Guidelines', '/platform'],
        ['Style Guide', '/platform'],
      ] },
    ],
  },
  {
    head: 'Solutions', to: '/solutions',
    groups: [
      { title: 'Solutions by Use Case', to: '/solutions', links: [
        ['GEO', '/solutions'], ['SEO & AEO', '/solutions'],
        ['Personalization', '/solutions'], ['Campaigns', '/solutions'],
      ] },
      { title: 'Solutions by Role', to: '/solutions', links: [
        ['Product Marketing', '/solutions'], ['Content Marketing', '/solutions'],
        ['Performance Marketing', '/solutions'], ['Field & Events Marketing', '/solutions'],
        ['Brand Marketing', '/solutions'], ['PR & Communications', '/solutions'],
      ] },
      { title: 'Solutions by Industry', to: '/solutions', links: [
        ['Financial Services', '/solutions'], ['Healthcare & Life Sciences', '/solutions'],
        ['Technology', '/solutions'], ['Retail & Consumer Goods', '/solutions'],
        ['Media & Entertainment', '/solutions'], ['Professional Services', '/solutions'],
      ] },
    ],
  },
  {
    head: 'Resources', to: '/resources',
    groups: [
      { title: 'Diagnostics & Tools', links: [
        ['GEO Diagnostic', '/resources'], ['Brand Compliance', '/resources'],
        ['Jasper ROI Calculator', '/resources'],
      ] },
      { title: 'Discover', links: [
        ['Blog', '/resources'], ['Customer Stories', '/resources'],
        ['Events & Webinars', '/resources'], ['Prompt Library', '/resources'],
        ['The State of AI in Marketing 2026', '/resources'],
      ] },
      { title: 'Learn', links: [
        ['Courses', '/resources'], ['The Jasper Community', '/resources'],
        ['Explore Jasper Workflows', '/resources'],
      ] },
      { title: 'Get Support', links: [
        ['Contact Support', '/company'], ['FAQs & Help Center', '/resources'],
        ['Customer Success', '/resources'], ['Hire a Professional Partner', '/company'],
      ] },
    ],
  },
  {
    head: 'Company', to: '/company',
    groups: [
      { title: 'Information', links: [
        ['About Jasper', '/company'], ['Newsroom', '/company'],
        ['Careers at Jasper', '/company'], ['Legal Information', '/company'],
        ['Company Logos', '/company'], ['Browser Extensions', '/platform'],
        ['Integrations', '/platform'],
      ] },
      { title: 'Trust Foundation', to: '/company', links: [
        ['LLM-Optimized Architecture', '/platform'], ['Security', '/company'],
        ['Governance', '/company'], ['Compliance', '/company'],
        ['Ethics at Jasper', '/company'],
      ] },
      { title: 'Become a Partner', links: [
        ['Become a Solutions Partner', '/company'], ['Become a Tech Partner', '/company'],
      ] },
      { title: 'Pricing', to: '/pricing', links: [] },
      { title: 'Enterprise', to: '/pricing', links: [], standalone: true },
    ],
  },
]

/* measured: .footer_social_link — 5 icons, 20px wide, 16px gap */
const SOCIAL = [
  { label: 'X / Twitter', d: 'M16.0113 2H18.9237L12.5292 9.21402L20 19H14.1373L9.54715 13.0531L4.29223 19H1.37987L8.15429 11.2841L1 2H7.00833L11.1553 7.43247L16.0113 2ZM14.992 17.3063H16.6065L6.15414 3.60451H4.42183L14.992 17.3063Z' },
  { label: 'Facebook', d: 'M12.8493 19V12.4662H14.9778L15.2956 9.93063H12.8493V8.28859C12.8493 7.54 13.0406 7.03289 14.0629 7.03289H15.4V4.69659C15.1743 4.66469 14.3798 4.5 13.4552 4.5C11.5245 4.5 10.2036 5.72056 10.2036 7.96401V9.93063H8V12.4662H10.2036V19H1.99C1.44 19 1 18.56 1 18.01V1.99C1 1.44 1.44 1 1.99 1H18.01C18.56 1 19 1.44 19 1.99V18.01C19 18.56 18.56 19 18.01 19H12.8493Z' },
  { label: 'Instagram', d: 'M14.1249 19H5.8751C3.18645 19 1 16.8137 1 14.1251V5.87487C1 3.18635 3.18733 1 5.8751 1H14.1249C16.8135 1 19 3.18635 19 5.87487V14.1251C19 16.8137 16.8135 19 14.1249 19ZM10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.5 7.51472 12.4853 5.5 10 5.5ZM10 12.7C8.50883 12.7 7.3 11.4912 7.3 10C7.3 8.50883 8.50883 7.3 10 7.3C11.4912 7.3 12.7 8.50883 12.7 10C12.7 11.4912 11.4912 12.7 10 12.7ZM15.0625 5.9375C15.0625 6.49669 14.6092 6.95 14.05 6.95C13.4908 6.95 13.0375 6.49669 13.0375 5.9375C13.0375 5.37831 13.4908 4.925 14.05 4.925C14.6092 4.925 15.0625 5.37831 15.0625 5.9375Z' },
  { label: 'LinkedIn', d: 'M4.80607 18H1.27964V6.64384H4.80607V18ZM3.04425 5.09326C1.91276 5.09326 1 4.17605 1 3.04616C1 1.91629 1.91183 1 3.04425 1C4.17666 1 5.08572 1.91721 5.08572 3.04616C5.08572 4.17605 4.17573 5.09326 3.04425 5.09326ZM18.9963 18H15.4776V12.4726C15.4776 11.1548 15.4512 9.46495 13.6437 9.46495C11.8098 9.46495 11.5288 10.8963 11.5288 12.3776V18H8.00594V6.64384H11.3878V8.19342H11.4371C11.9081 7.30171 13.0585 6.36055 14.7754 6.36055C18.3444 6.36055 19 8.71014 19 11.7627V18H18.9963Z' },
  { label: 'YouTube', d: 'M19.5166 5.51712C19.4385 5.20148 19.2859 4.90962 19.0717 4.66657C18.8576 4.4235 18.5882 4.23651 18.2866 4.12158C15.3857 3 10.7545 3 10.5 3C10.2455 3 5.61429 3 2.71339 4.12158C2.41184 4.23651 2.14239 4.4235 1.92827 4.66657C1.71415 4.90962 1.56152 5.20148 1.48343 5.51712C1.25 6.75 1 8.5 1 10.5C1 12.5 1.25 14.25 1.48343 15.4829C1.56152 15.7985 1.71415 16.0904 1.92827 16.3334C2.14239 16.5765 2.41184 16.7635 2.71339 16.8784C5.61429 18 10.2455 18 10.5 18C10.7545 18 15.3857 18 18.2866 16.8784C18.5882 16.7635 18.8576 16.5765 19.0717 16.3334C19.2859 16.0904 19.4385 15.7985 19.5166 15.4829C19.75 14.25 20 12.5 20 10.5C20 8.5 19.75 6.75 19.5166 5.51712ZM8.6 13.7V7.3L14.1 10.5L8.6 13.7Z' },
]

/* measured: .legal_list — 16px gap, 16px links at opacity .6 */
const LEGAL = [
  ['Privacy Policy', '/company'],
  ['Terms of Service', '/company'],
  ['Legal Center', '/company'],
]

// measured: .footer_link — 16px / 22.4px lh / -0.16px tracking / opacity .6
const linkCls =
  'block text-white/60 hover:text-white transition-colors duration-300'
const linkStyle = { fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.16px', fontWeight: 450 }

// measured: .link_text_title — 18px ABC ROM, weight 500, lh 21.6px, white, no transform
const titleStyle = { fontSize: '18px', lineHeight: '21.6px', fontWeight: 500, letterSpacing: 'normal' }

function Group({ group }) {
  const title = group.to ? (
    <Link
      to={group.to}
      data-f="subtitle"
      className="inline-flex items-center gap-2 font-sans text-white hover:text-flame-500 transition-colors duration-300"
      style={titleStyle}
    >
      {group.title}
      <ArrowIcon />
    </Link>
  ) : (
    <div data-f="subtitle" className="font-sans text-white" style={titleStyle}>
      {group.title}
    </div>
  )

  return (
    // measured: .footer_list_wrap — flex column, gap 12px
    <div className="flex flex-col gap-3">
      {title}
      {group.links.length > 0 && (
        // measured: .footer_list — flex column, row-gap 3.2px
        <ul className="flex flex-col" style={{ rowGap: '3.2px' }}>
          {group.links.map(([label, to]) => (
            <li key={label}>
              <Link to={to} data-f="link" className={linkCls} style={linkStyle}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    // measured: .footer_wrap background rgb(28,28,28), no padding of its own
    <footer className="bg-ink-950 text-white">
      {/* measured: .footer_contain — 1360px well, padding 80px 0, gap 112px */}
      <div className="u-container flex flex-col" style={{ padding: '80px 0', gap: '112px' }}>
        {/* measured: .footer_layout — auto-fit 304px tracks, 64px row / 48px column gap */}
        <div
          data-f="layout"
          className="footer-layout grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(304px, 100%), 1fr))',
            // measured: 48px column-gap multi-up, 12px once it drops to one-up
            columnGap: 'var(--footer-col-gap, 48px)',
            rowGap: '64px',
          }}
        >
          {COLUMNS.map((col) => (
            // measured: .footer_column — flex column, gap 40px
            <div
              key={col.head}
              data-f="col"
              className="flex flex-col items-start justify-start"
              // measured: 40px @1440, 34.82px @768, 32px @390 — a fluid clamp
              style={{ gap: 'clamp(2rem, 1.8057rem + 0.7714vw, 2.5rem)' }}
            >
              {/* measured: .u-text-style-h4 — 24px Feature serif, weight 450, lh 26.4px */}
              <Link
                to={col.to}
                data-f="head"
                className="flex w-full items-center gap-4 font-serif text-white hover:text-flame-500 transition-colors duration-300"
                style={{ fontSize: '24px', lineHeight: '26.4px', fontWeight: 450, letterSpacing: 'normal' }}
              >
                {col.head}
                <ArrowIcon />
              </Link>

              {/* measured: .footer_column_divider — 1px, full track, -16px/-12px margins */}
              <div
                data-f="divider"
                className="w-full bg-white/25"
                style={{ height: '1px', marginTop: '-16px', marginBottom: '-12px' }}
              />

              {col.groups.map((g) => <Group key={g.title} group={g} />)}

              {/* measured: .footer_btn_wrap — flex column, gap 12px, 164.1px wide, Company column only */}
              {col.head === 'Company' && (
                <div data-f="btns" className="flex flex-col items-stretch justify-center gap-3">
                  <Link to="/pricing" data-f="btn1" className="btn-footer btn-footer-primary">
                    Get A Demo
                  </Link>
                  <Link to="/pricing" data-f="btn2" className="btn-footer btn-footer-outline">
                    Start Free Trial
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* measured: .footer_bottom — flex row, wrap, space-between, align center */}
        <div data-f="bottom" className="flex flex-wrap items-center justify-between">
          <Link to="/" data-f="logo" aria-label="Jasper home" className="footer-logo-link block shrink-0">
            <FooterLogo />
          </Link>

          {/* measured: .footer_bottom_content — flex column, gap 16px, aligned right */}
          {/* measured: .footer_bottom_content — gap 16px right-aligned at >=768,
              gap 20px left-aligned and full-width at 390 */}
          <div className="footer-bottom-content flex flex-col">
            {/* measured: .footer_social — flex row, gap 16px, 20px icons */}
            <div data-f="social" className="flex items-center gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  // measured: .footer_social_link — 20px icon in a 22.4px box
                  className="flex w-5 items-center text-white/60 hover:text-white transition-colors duration-300"
                  style={{ height: '22.4px' }}
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                    <path d={s.d} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>

            {/* measured: .legal_list — flex row, wrap, 16px gap, 16px type */}
            <ul data-f="legal" className="flex flex-wrap items-center gap-4">
              {/* Deliberate clone disclaimer — replaces the live "© 2026 Jasper AI, INC." */}
              <li data-f="legaltext" className="text-white" style={linkStyle}>
                © {new Date().getFullYear()} Jasper clone — educational replica. Not affiliated with Jasper AI, Inc.
              </li>
              {LEGAL.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} data-f="legallink" className={linkCls} style={linkStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
