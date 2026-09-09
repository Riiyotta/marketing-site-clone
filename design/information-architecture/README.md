# Information architecture

Generated from `src/App.jsx`, `src/data/stubRoutes.js` and
`src/components/NavMenuData.js`. Regenerate with `node design/gen-ia.mjs`.

**54 pages cloned · 0 placeholders · 54 routes total**

A placeholder is an honest "Not cloned yet" page carrying that route's real
live headline — not a 404, and never the homepage. Before these existed, every
unbuilt nav link silently rendered the homepage, which reads as a finished page
and hides the gap.


## Top level — 4/4 cloned

| route | state | template | live height |
|---|---|---|---|
| `/` | **cloned** | `marketing.standard` | — |
| `/platform` | **cloned** | `marketing.standard` | — |
| `/pricing` | **cloned** | `marketing.standard` | — |
| `/resources` | **cloned** | `marketing.standard` | — |

## Platform — 22/22 cloned

| route | state | template | live height |
|---|---|---|---|
| `/agents` | **cloned** | `product.detail` | 14,264px |
| `/agents/optimization` | **cloned** | `product.detail` | 6,689px |
| `/agents/research` | **cloned** | `product.detail` | 6,016px |
| `/agents/translation` | **cloned** | `product.detail` | 6,150px |
| `/api` | **cloned** | `product.detail` | 8,223px |
| `/brand-iq` | **cloned** | `product.detail` | 6,764px |
| `/brand-voice` | **cloned** | `product.detail` | 6,267px |
| `/canvas` | **cloned** | `product.detail` | 26,937px |
| `/content-pipelines` | **cloned** | `product.detail` | 7,483px |
| `/geo` | **cloned** | `product.detail` | 12,858px |
| `/governance` | **cloned** | `product.detail` | 8,751px |
| `/grid` | **cloned** | `product.detail` | 9,886px |
| `/image/api` | **cloned** | `product.detail` | 6,985px |
| `/image/pipelines` | **cloned** | `product.detail` | 6,482px |
| `/jasper-iq` | **cloned** | `product.detail` | 8,809px |
| `/knowledge-base` | **cloned** | `product.detail` | 8,690px |
| `/marketing-iq` | **cloned** | `product.detail` | 7,211px |
| `/mcp` | **cloned** | `product.detail` | 6,433px |
| `/product-iq` | **cloned** | `product.detail` | 11,052px |
| `/studio` | **cloned** | `product.detail` | 6,805px |
| `/style-guide` | **cloned** | `product.detail` | 6,488px |
| `/visual-guidelines` | **cloned** | `product.detail` | 6,158px |

## Solutions — 14/14 cloned

| route | state | template | live height |
|---|---|---|---|
| `/solutions` | **cloned** | `marketing.standard` | — |
| `/solutions/by-industry/financial-services` | **cloned** | `industry` | 8,150px |
| `/solutions/by-industry/healthcare` | **cloned** | `industry` | 8,140px |
| `/solutions/by-industry/media-and-entertainment` | **cloned** | `industry` | 8,365px |
| `/solutions/by-industry/professional-services` | **cloned** | `industry` | 7,992px |
| `/solutions/by-industry/retail-and-consumer-goods` | **cloned** | `industry` | 8,055px |
| `/solutions/by-industry/tech` | **cloned** | `industry` | 8,007px |
| `/solutions/by-role/brand-marketers` | **cloned** | `role` | 4,567px |
| `/solutions/by-role/content-marketers` | **cloned** | `role` | 4,623px |
| `/solutions/by-role/field-marketers` | **cloned** | `role` | 4,595px |
| `/solutions/by-role/performance-marketers` | **cloned** | `role` | 4,617px |
| `/solutions/by-role/pr-and-communications` | **cloned** | `role` | 4,589px |
| `/solutions/by-role/product-marketers` | **cloned** | `role` | 4,601px |
| `/solutions/seo-aeo-geo` | **cloned** | `product.detail` | 6,943px |

## Resources — 7/7 cloned

| route | state | template | live height |
|---|---|---|---|
| `/blog` | **cloned** | `editorial.index` | 22,960px |
| `/contact-support` | **cloned** | `product.detail` | 2,366px |
| `/customer-stories` | **cloned** | `editorial.index` | 4,694px |
| `/customer-success` | **cloned** | `product.detail` | 7,686px |
| `/diagnostics/geo` | **cloned** | `product.detail` | 7,500px |
| `/webinars` | **cloned** | `editorial.index` | 17,312px |
| `/workflows` | **cloned** | `product.detail` | 4,987px |

## Company — 7/7 cloned

| route | state | template | live height |
|---|---|---|---|
| `/careers` | **cloned** | `product.detail` | 7,208px |
| `/company` | **cloned** | `marketing.standard` | — |
| `/legal` | **cloned** | `document` | 3,634px |
| `/llm-optimized` | **cloned** | `product.detail` | 5,650px |
| `/press` | **cloned** | `editorial.index` | 11,083px |
| `/security` | **cloned** | `document` | 10,939px |
| `/trust` | **cloned** | `product.detail` | 7,651px |

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
