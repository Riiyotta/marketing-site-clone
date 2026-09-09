import { useReveal } from '../../hooks/useReveal'

/* ---------------------------------------------------------------------------
   `.careers-photo-marquee-wrapper` — the two-row photo rail on live /careers
   (section 1440 x 704).

   MEASURED at 1440px off .scrape/plat-careers.png:
     two full-bleed rows of 500 x 320 photographs on a 16px gutter, the TOP row
     drifting left and the BOTTOM row drifting right, the bottom row offset by
     roughly half a tile so the seams never line up. Rows are 320px tall with a
     ~24px gap; the block ends flush with the last photo.

   The whole rail is horizontally scrolling, so `.reveal` goes on the SECTION,
   never on the tiles — an item parked off-viewport never intersects and would
   stay permanently invisible.

   `variant="columns"` is the same idea turned 90 degrees, which is what the
   /careers HERO uses: two vertical columns of 356 x 356 circular portraits on
   flat colour grounds, one drifting up and the other down, clipped by a
   fixed-height stage.

   PROPS
     rows      [[{src,alt}]]   one array per horizontal row
     variant   'rows'|'columns'
     columns   [{ tint, items:[{src,alt}], dir:'up'|'down' }]
     tileW / tileH  px         measured tile box (500x320 rows, 356x356 cols)
     duration  css time        per-track drift duration
     height    px              stage height for the `columns` variant
--------------------------------------------------------------------------- */

export default function PhotoMarquee({
  rows = [], columns = [], variant = 'rows',
  tileW = 500, tileH = 320, duration = '60s', height = 1000,
}) {
  const ref = useReveal({ threshold: 0 })

  if (variant === 'columns') {
    /* The stage is the measured 1000px on desktop, where it sits BESIDE the
       copy. Below `lg` it stacks under the copy instead, and a full 1000px of
       portraits there is a dead scroll — so the stage halves on small screens
       (`--pm-h` drives the height, overridden by the media query in the style
       attribute's custom property). */
    return (
      <div ref={ref} className="reveal marquee-track clip-bleed relative flex gap-0
                                h-[var(--pm-h-sm)] lg:h-[var(--pm-h)]"
           style={{ '--pm-h': `${height}px`, '--pm-h-sm': `${Math.round(height * 0.46)}px` }}
           aria-hidden="true">
        {columns.map((col, ci) => (
          <div key={ci} className={`relative h-full flex-1 overflow-hidden ${col.tint || ''}`}>
            <div className={`flex flex-col ${col.dir === 'down' ? 'animate-marquee-down' : 'animate-marquee-up'}`}
                 style={{ '--marquee-duration': duration }}>
              {[0, 1].map((dup) => (
                <div key={dup} className="flex flex-col">
                  {col.items.map((it, i) => (
                    <img key={`${dup}-${i}`} src={it.src} alt="" loading="lazy"
                         width={tileW} height={tileH}
                         className="block w-full object-cover"
                         style={{ aspectRatio: '1 / 1' }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  /* live's block measures 704px: two 320px rows on a 16px gutter plus 24px of
     breathing room above and below (320*2 + 16 + 48 = 704). */
  return (
    <section ref={ref} className="reveal marquee-track clip-bleed bg-surface py-6">
      <div className="flex flex-col gap-gutter">
        {rows.map((row, ri) => (
          <div key={ri} className="flex w-max"
               style={{ '--marquee-duration': duration }}>
            <div className={`flex ${ri % 2 ? 'animate-marquee-reverse' : 'animate-marquee'}`}
                 style={{ '--marquee-duration': duration }}>
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 gap-gutter pr-gutter">
                  {row.map((it, i) => (
                    <img key={`${dup}-${i}`} src={it.src} alt={dup === 0 ? it.alt : ''}
                         aria-hidden={dup === 1} loading="lazy"
                         width={tileW} height={tileH}
                         className="block shrink-0 object-cover"
                         style={{ width: tileW, height: tileH }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
