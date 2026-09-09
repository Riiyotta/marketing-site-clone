# Type, space and motion

Generated from `tailwind.config.js` — do not hand-edit.

## Font families

| token | stack | substitutes for |
|---|---|---|
| `font-sans` | "ABC ROM", Inter, Arial, sans-serif | ABC ROM (licensed) |
| `font-serif` | Feature, "Playfair Display", Georgia, serif | Feature (licensed) |
| `font-mono` | "ABC ROM Mono", "JetBrains Mono", monospace | ABC ROM Mono (licensed) |

> The substitutes set ~9% wider than the licensed faces. That is the single
> largest source of remaining per-section height deltas against live, and it is
> why a measured font size must never be shrunk to close a height gap — that
> breaks a verified value to fix a derived one.


## Font size

| token | value |
|---|---|
| `display` | `["clamp(2.5rem, 1.5284rem + 3.8573vw, 5rem)",{"lineHeight":"1","letterSpacing":"-0.03em"}]` |
| `h1` | `["clamp(2.375rem, 1.9864rem + 1.5429vw, 3.375rem)",{"lineHeight":"1.05","letterSpacing":"-0.03em"}]` |
| `h2` | `["2.375rem",{"lineHeight":"1.05","letterSpacing":"-0.03em"}]` |
| `h3` | `["1.75rem",{"lineHeight":"1.1","letterSpacing":"-0.02em"}]` |
| `h4` | `["1.5rem",{"lineHeight":"1.1","letterSpacing":"-0.02em"}]` |
| `h5` | `["1.25rem",{"lineHeight":"1.2","letterSpacing":"-0.01em"}]` |
| `h6` | `["1rem",{"lineHeight":"1.2","letterSpacing":"-0.01em"}]` |
| `text-large` | `["1.125rem",{"lineHeight":"1.4"}]` |
| `text-main` | `["1rem",{"lineHeight":"1.4"}]` |
| `text-small` | `["0.875rem",{"lineHeight":"1.4"}]` |
| `text-tiny` | `["0.75rem",{"lineHeight":"1.4"}]` |

## Letter spacing

| token | value |
|---|---|
| `tightest` | `-0.03em` |
| `tighter` | `-0.02em` |
| `tight` | `-0.01em` |
| `none` | `0em` |

## Line height

| token | value |
|---|---|
| `1` | `1` |
| `1.05` | `1.05` |
| `1.1` | `1.1` |
| `1.2` | `1.2` |
| `1.3` | `1.3` |
| `1.4` | `1.4` |

## Spacing

| token | value |
|---|---|
| `s1` | `clamp(0.5rem, 0.5rem + 0vw, 0.5rem)` |
| `s2` | `0.75rem` |
| `s3` | `1rem` |
| `s3-5` | `1.25rem` |
| `s4` | `1.5rem` |
| `s5` | `2rem` |
| `s6` | `clamp(2rem, 1.8057rem + 0.7715vw, 2.5rem)` |
| `s7` | `3rem` |
| `s8` | `4rem` |
| `s9` | `5rem` |
| `section-xxs` | `clamp(1rem, 0.4171rem + 2.3144vw, 2.5rem)` |
| `section-small` | `clamp(3rem, 2.1429rem + 4.2857vw, 6rem)` |
| `section-xsmall` | `5rem` |
| `section-main` | `clamp(4rem, 3.1429rem + 4.2857vw, 7rem)` |
| `section-large` | `clamp(7rem, 5.7857rem + 6.0714vw, 11.25rem)` |
| `section-page-top` | `clamp(6.25rem, 5.5357rem + 3.5714vw, 8.75rem)` |

## Max width

| token | value |
|---|---|

## Radius

| token | value |
|---|---|
| `DEFAULT` | `4px` |
| `sm` | `2px` |

## Gap

| token | value |
|---|---|

## Height

| token | value |
|---|---|

## Easing

| token | value |
|---|---|
| `jasper` | `cubic-bezier(0.625, 0.05, 0, 1)` |

## Grid

12 columns in a 1360px container with a 16px gutter, so one column is
98.667px. The container carries `padding-inline: 0` — the page gutter sits
OUTSIDE the well. Adding padding shrinks every track and was an early bug.

Section rhythm is NOT section padding: sections carry `padding: 0` and the
rhythm lives in standalone `g_section_space` divs (commonly 80px or 112px)
plus per-section internal gaps.
