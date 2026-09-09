import { useReveal } from '../../hooks/useReveal'

/* ---------------------------------------------------------------------------
   `.g_slot u-container` — a full-bleed patterned backdrop with one product
   screenshot floated on top of it. Alternates with `horizontal_content_wrap`
   3x on live /knowledge-base and 3x on live /product-iq.

   MEASURED on live /knowledge-base at 1440px (all three slots h=1053):
     backdrop  1564 x 1083 avif/png, overflowing the 1440 viewport by 62px on
               each side (x = -62), so the section MUST clip.
     shot      1230 x 811 centred over it at x=105, y = slot top + 136.
     A small mono caption sits under the backdrop's bottom-left on slot 1
     ("Give Jasper's Agents context to inform generations").

   PROPS
     bg      {src, w, h}   the oversize patterned plate
     shot    {src, alt, w, h}
     caption string        optional mono line at the plate's foot
     height  px            measured slot height (1053)
--------------------------------------------------------------------------- */

export default function ProductSlot({ bg, shot, caption, height = 1053 }) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="clip-bleed relative bg-surface">
      <div className="relative mx-auto" style={{ minHeight: height, maxWidth: 1440 }}>
        {bg && (
          <img src={bg.src} alt="" aria-hidden="true" loading="lazy"
               className="pointer-events-none absolute left-1/2 top-0 max-w-none -translate-x-1/2
                          object-contain"
               style={{ width: bg.w || 1564, height: bg.h || 1083 }} />
        )}

        {shot && (
          <img src={shot.src} alt={shot.alt || ''} loading="lazy"
               className="reveal relative mx-auto block h-auto w-[85%] object-contain"
               style={{ maxWidth: shot.w || 1230, top: 136 }} />
        )}

        {caption && (
          <p className="absolute bottom-8 left-4 font-mono text-text-small text-ink lg:left-10">
            {caption}
          </p>
        )}
      </div>
    </section>
  )
}
