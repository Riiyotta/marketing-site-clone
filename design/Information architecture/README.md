# Information architecture

Generated from `src/App.jsx`, `src/data/stubRoutes.js` and
`src/components/NavMenuData.js`. Regenerate with `node design/gen-ia.mjs`.

**54 pages cloned · 0 placeholders · 54 routes total**

A placeholder is an honest "Not cloned yet" page carrying that route's real
live headline — not a 404, and never the homepage. Before these existed, every
unbuilt nav link silently rendered the homepage, which reads as a finished page
and hides the gap.


## Top level — 4/4 cloned

| route | state | live height |
|---|---|---|
| `/` | **cloned** | — |
| `/platform` | **cloned** | — |
| `/pricing` | **cloned** | — |
| `/resources` | **cloned** | — |

## Platform — 22/22 cloned

| route | state | live height |
|---|---|---|
| `/agents` | **cloned** | 14,264px |
| `/agents/optimization` | **cloned** | 6,689px |
| `/agents/research` | **cloned** | 6,016px |
| `/agents/translation` | **cloned** | 6,150px |
| `/api` | **cloned** | 8,223px |
| `/brand-iq` | **cloned** | 6,764px |
| `/brand-voice` | **cloned** | 6,267px |
| `/canvas` | **cloned** | 26,937px |
| `/content-pipelines` | **cloned** | 7,483px |
| `/geo` | **cloned** | 12,858px |
| `/governance` | **cloned** | 8,751px |
| `/grid` | **cloned** | 9,886px |
| `/image/api` | **cloned** | 6,985px |
| `/image/pipelines` | **cloned** | 6,482px |
| `/jasper-iq` | **cloned** | 8,809px |
| `/knowledge-base` | **cloned** | 8,690px |
| `/marketing-iq` | **cloned** | 7,211px |
| `/mcp` | **cloned** | 6,433px |
| `/product-iq` | **cloned** | 11,052px |
| `/studio` | **cloned** | 6,805px |
| `/style-guide` | **cloned** | 6,488px |
| `/visual-guidelines` | **cloned** | 6,158px |

## Solutions — 14/14 cloned

| route | state | live height |
|---|---|---|
| `/solutions` | **cloned** | — |
| `/solutions/by-industry/financial-services` | **cloned** | 8,150px |
| `/solutions/by-industry/healthcare` | **cloned** | 8,140px |
| `/solutions/by-industry/media-and-entertainment` | **cloned** | 8,365px |
| `/solutions/by-industry/professional-services` | **cloned** | 7,992px |
| `/solutions/by-industry/retail-and-consumer-goods` | **cloned** | 8,055px |
| `/solutions/by-industry/tech` | **cloned** | 8,007px |
| `/solutions/by-role/brand-marketers` | **cloned** | 4,567px |
| `/solutions/by-role/content-marketers` | **cloned** | 4,623px |
| `/solutions/by-role/field-marketers` | **cloned** | 4,595px |
| `/solutions/by-role/performance-marketers` | **cloned** | 4,617px |
| `/solutions/by-role/pr-and-communications` | **cloned** | 4,589px |
| `/solutions/by-role/product-marketers` | **cloned** | 4,601px |
| `/solutions/seo-aeo-geo` | **cloned** | 6,943px |

## Resources — 7/7 cloned

| route | state | live height |
|---|---|---|
| `/blog` | **cloned** | 22,960px |
| `/contact-support` | **cloned** | 2,366px |
| `/customer-stories` | **cloned** | 4,694px |
| `/customer-success` | **cloned** | 7,686px |
| `/diagnostics/geo` | **cloned** | 7,500px |
| `/webinars` | **cloned** | 17,312px |
| `/workflows` | **cloned** | 4,987px |

## Company — 7/7 cloned

| route | state | live height |
|---|---|---|
| `/careers` | **cloned** | 7,208px |
| `/company` | **cloned** | — |
| `/legal` | **cloned** | 3,634px |
| `/llm-optimized` | **cloned** | 5,650px |
| `/press` | **cloned** | 11,083px |
| `/security` | **cloned** | 10,939px |
| `/trust` | **cloned** | 7,651px |

## Navigation model

Only one `.nav_dropdown_wrap` exists; the mega-menu swaps its contents per
hover rather than mounting four panels. That is why capturing the live menus
needed a fresh page load per item. Panel content lives in
`src/components/NavMenuData.js`, measured from the live DOM.

| menu | shape | links |
|---|---|---|
| Platform | column grid + spotlight | 23 |
| Solutions | three stacked rows | 18 |
| Resources | column grid + spotlight | 11 |
| Company | column grid + spotlight | 8 |
