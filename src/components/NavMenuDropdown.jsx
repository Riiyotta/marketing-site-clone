import { HeadingCard, LinkRow, Rule, UseCaseCard, Chevron } from './NavMenuPanel'
import NavMenuSpotlight from './NavMenuSpotlight'

/* ---------------------------------------------------------------------------
   The panel body. Measured live geometry, reproduced exactly:

     .nav_dropdown        bg #fff, padding 24px, radius 0, margin-top 12px,
                          box-shadow none, display flex, gap 24px, y = 92.
     Platform   1326 x 634 @x 57 — spotlight 319.48 | inner grid 3 x ~295.48
                                    gap 16px 24px
     Resources  1326 x 473 @x 57 — same shape, spotlight 319.48
     Company    1001 x 489 @x219 — spotlight 304 | inner grid 2 x 300.656
     Solutions  1416 x 604 @x 12 — no spotlight; the inner 1368px block is
                                    three stacked rows separated by 1px rules,
                                    each row = 342px heading + 1026px 4-col grid

     .nav_dropdown_col    padding 0 24px 0 0; border-right 1px solid #f2f2f3
                          (last column has none); flex column gap 16px.
--------------------------------------------------------------------------- */

const DIVIDER = '1px solid #f2f2f3'

function Columns({ menu, onNavigate }) {
  const big = menu.columns.some((c) => c.img) // Platform uses the 28px title
  return (
    <div className="grid" style={{
      // measured: 16px row gap / 24px column gap on `.nav_dropdown_inner`
      flex: '1 1 auto',
      gridTemplateColumns: `repeat(${menu.columns.length}, minmax(0, 1fr))`,
      columnGap: 24, rowGap: 16,
    }}>
      {menu.columns.map((col, i) => (
        <div key={col.head}
             className="flex flex-col"
             style={{
               gap: 16,
               paddingRight: 24,
               borderRight: i < menu.columns.length - 1 ? DIVIDER : 'none',
             }}>
          <HeadingCard col={col} big={big} onNavigate={onNavigate} />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {col.items.map((item, j) => (
              item.rule
                ? <li key={`rule-${j}`}><Rule /></li>
                : <LinkRow key={item.t} item={item} tint={col.rowTint} onNavigate={onNavigate} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Rows({ menu, onNavigate }) {
  return (
    <div className="flex flex-col" style={{ flex: '1 1 auto' }}>
      {menu.rows.map((row, i) => (
        <div key={row.head}>
          {i > 0 && <Rule style={{ margin: '0 0 24px' }} />}
          <div className="flex" style={{ paddingBottom: i < menu.rows.length - 1 ? 24 : 0 }}>
            {/* left heading block — measured 342px wide */}
            <div style={{ flex: `0 0 ${menu.headWidth}px`, maxWidth: menu.headWidth }}>
              <div style={{ padding: '16px 12px' }}>
                {row.href ? (
                  <a href={row.href} onClick={onNavigate}
                     className="group inline-flex items-start" style={{ gap: 8 }}>
                    <span className="font-serif text-ink"
                          style={{ fontSize: 24, lineHeight: '26.4px', fontWeight: 450 }}>
                      {row.head}
                    </span>
                    <span style={{ marginTop: 10 }}><Chevron /></span>
                  </a>
                ) : (
                  <span className="block font-serif text-ink"
                        style={{ fontSize: 24, lineHeight: '26.4px', fontWeight: 450 }}>
                    {row.head}
                  </span>
                )}
                {row.desc && (
                  <span className="block text-ink"
                        style={{ marginTop: 16, fontSize: 14, lineHeight: '16.8px' }}>
                    {row.desc}
                  </span>
                )}
              </div>
            </div>

            {/* right grid — measured 4 columns, 16px gap on the card row */}
            <ul className="grid" style={{
              flex: '1 1 auto', listStyle: 'none', margin: 0, padding: 0,
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: row.cards ? 16 : 0,
            }}>
              {row.items.map((item) => (
                row.cards
                  ? <li key={item.t}><UseCaseCard item={item} onNavigate={onNavigate} /></li>
                  : <LinkRow key={item.t} item={item} tint="#fff7f5" onNavigate={onNavigate} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function NavMenuDropdown({ menu, onNavigate }) {
  // the spotlight stretches with the flex row, as the live panel does
  return (
    <div className="bg-surface flex"
         style={{
           width: menu.panelWidth, maxWidth: '100%',
           padding: 24, borderRadius: 0, gap: 24,
           boxShadow: 'none',
         }}>
      {menu.spotlight && (
        /* measured: the spotlight is a flex sibling that stretches to the
           panel's full inner height (Platform 585.72, Resources 425.25,
           Company 440.56 — all exactly panelHeight - 48px of padding). */
        <div className="flex flex-col self-stretch"
             style={{ flex: `0 0 ${menu.spotlightWidth}px`, maxWidth: menu.spotlightWidth }}>
          <NavMenuSpotlight spot={menu.spotlight} onNavigate={onNavigate} />
        </div>
      )}
      {menu.kind === 'rows'
        ? <Rows menu={menu} onNavigate={onNavigate} />
        : <Columns menu={menu} onNavigate={onNavigate} />}
    </div>
  )
}
