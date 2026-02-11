# Design System Context for V0

## How to use

1. Import `globals.css` at the root of the project (it's already included if the project was scaffolded from this repo).
2. Reference tokens as CSS variables: `var(--color-primary-600)`, `var(--spacing-4)`, etc.
3. Use semantic variables for anything user-facing (text, backgrounds, borders) so the UI stays consistent.
4. **Always use the CSS variables defined in `globals.css`** instead of hardcoded values.

## Color System

### Palette scales

Six color scales, each with steps 50–950. Use the **middle values (500–600)** as the default, lighter values for backgrounds, darker values for hover/active states.

| Scale       | Variable pattern            | Purpose                          |
|-------------|-----------------------------|----------------------------------|
| **Gray**    | `--color-gray-{50–950}`     | Neutral UI, text, borders        |
| **Primary** | `--color-primary-{50–950}`  | Brand, CTAs, links, focus rings  |
| **Success** | `--color-success-{50–950}`  | Confirmations, positive states   |
| **Warning** | `--color-warning-{50–950}`  | Cautions, pending states         |
| **Error**   | `--color-error-{50–950}`    | Errors, destructive actions      |
| **Info**    | `--color-info-{50–950}`     | Informational, help, tips        |

### Semantic colors — use these first

Instead of picking a raw palette value, prefer the semantic aliases. They ensure consistency and make future theming easier.

**Text colors:**
- `--color-text-primary` — Default body text (gray-900)
- `--color-text-secondary` — Supporting text (gray-600)
- `--color-text-tertiary` — Placeholder, hint text (gray-500)
- `--color-text-disabled` — Disabled state (gray-400)
- `--color-text-inverse` — Text on dark backgrounds (white)
- `--color-text-link` / `--color-text-link-hover` — Anchor links
- `--color-text-error` / `--color-text-success` / `--color-text-warning` — Status text

**Background colors:**
- `--color-bg-primary` — Page background (white)
- `--color-bg-secondary` — Subtle sections, cards (gray-50)
- `--color-bg-tertiary` — Stronger contrast areas (gray-100)
- `--color-bg-inverse` — Dark backgrounds (gray-900)
- `--color-bg-overlay` — Modal/dialog backdrops (black 50%)

**Border colors:**
- `--color-border-default` — Standard borders (gray-200)
- `--color-border-strong` — Emphasized borders (gray-300)
- `--color-border-subtle` — Light separators (gray-100)
- `--color-border-focus` — Focus rings (primary-500)
- `--color-border-error` — Validation error borders (error-500)

**Interactive colors:**
- `--color-interactive-primary` — Button/link default (primary-600)
- `--color-interactive-primary-hover` — Hover state (primary-700)
- `--color-interactive-primary-active` — Active/pressed (primary-800)
- `--color-interactive-primary-disabled` — Disabled (gray-300)
- `--color-interactive-secondary` — Secondary action default (gray-600)
- `--color-interactive-secondary-hover` / `--color-interactive-secondary-active`

## Spacing

A 4px base grid. Use these for all padding, margin, and gap values.

| Token          | Value  | Common use                     |
|----------------|--------|--------------------------------|
| `--spacing-0`  | 0px    | No spacing                     |
| `--spacing-1`  | 4px    | Tight inner padding            |
| `--spacing-2`  | 8px    | Small gaps, icon padding       |
| `--spacing-3`  | 12px   | Compact padding                |
| `--spacing-4`  | 16px   | Default padding, gaps          |
| `--spacing-5`  | 20px   | Medium padding                 |
| `--spacing-6`  | 24px   | Section padding, card padding  |
| `--spacing-8`  | 32px   | Large section gaps             |
| `--spacing-10` | 40px   | Page section spacing           |
| `--spacing-12` | 48px   | Hero/section spacing           |
| `--spacing-16` | 64px   | Major layout spacing           |
| `--spacing-20` | 80px   | Page-level spacing             |
| `--spacing-24` | 96px   | Large layout spacing           |
| `--spacing-32` | 128px  | Maximum spacing                |

## Typography

### Font families
- `--font-family-sans` — Inter + system fallbacks. Use for all UI text.
- `--font-family-serif` — Georgia stack. Use sparingly for editorial content.
- `--font-family-mono` — Fira Code + monospace fallbacks. Use for code, data, technical values.

### Font sizes
| Token               | Value | Use for                            |
|---------------------|-------|------------------------------------|
| `--font-size-xs`    | 12px  | Captions, badges, labels           |
| `--font-size-sm`    | 14px  | Secondary text, table cells        |
| `--font-size-base`  | 16px  | Body text (default)                |
| `--font-size-lg`    | 18px  | Lead paragraphs, subtitles         |
| `--font-size-xl`    | 20px  | H5, large body                     |
| `--font-size-2xl`   | 24px  | H4, section titles                 |
| `--font-size-3xl`   | 30px  | H3                                 |
| `--font-size-4xl`   | 36px  | H2                                 |
| `--font-size-5xl`   | 48px  | H1, hero text                     |
| `--font-size-6xl`   | 60px  | Display, marketing                 |
| `--font-size-7xl`   | 72px  | Display, marketing                 |

### Font weights
`--font-weight-thin` (100) through `--font-weight-black` (900). Most common:
- `--font-weight-normal` (400) — Body text
- `--font-weight-medium` (500) — Labels, nav items
- `--font-weight-semibold` (600) — Subheadings, card titles
- `--font-weight-bold` (700) — Headings

### Line heights
- `--line-height-tight` (1.25) — Headings
- `--line-height-snug` (1.375) — Subheadings
- `--line-height-normal` (1.5) — Body text
- `--line-height-relaxed` (1.625) — Large body, descriptions

### Typography presets

Use these combinations for heading and body text:

```css
/* H1 */
font-family: var(--font-family-sans);
font-size: var(--font-size-5xl);      /* 48px */
font-weight: var(--font-weight-bold);
line-height: var(--line-height-tight);
letter-spacing: var(--letter-spacing-tight);

/* H2 */
font-family: var(--font-family-sans);
font-size: var(--font-size-4xl);      /* 36px */
font-weight: var(--font-weight-bold);
line-height: var(--line-height-tight);
letter-spacing: var(--letter-spacing-tight);

/* H3 */
font-family: var(--font-family-sans);
font-size: var(--font-size-3xl);      /* 30px */
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-snug);

/* H4 */
font-family: var(--font-family-sans);
font-size: var(--font-size-2xl);      /* 24px */
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-snug);

/* H5 */
font-family: var(--font-family-sans);
font-size: var(--font-size-xl);       /* 20px */
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-normal);

/* H6 */
font-family: var(--font-family-sans);
font-size: var(--font-size-lg);       /* 18px */
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-normal);

/* Body large */
font-size: var(--font-size-lg);
line-height: var(--line-height-relaxed);

/* Body base (default) */
font-size: var(--font-size-base);
line-height: var(--line-height-normal);

/* Body small */
font-size: var(--font-size-sm);
line-height: var(--line-height-normal);

/* Code inline */
font-family: var(--font-family-mono);
font-size: var(--font-size-sm);

/* Code block */
font-family: var(--font-family-mono);
font-size: var(--font-size-sm);
line-height: var(--line-height-relaxed);
```

## Borders

### Widths
- `--border-width-none` (0px) — No border
- `--border-width-thin` (1px) — Default border (inputs, cards, dividers)
- `--border-width-medium` (2px) — Emphasized borders, active tabs
- `--border-width-thick` (4px) — Strong emphasis, left-border accents

### Radii
- `--border-radius-none` (0px) — Sharp corners
- `--border-radius-sm` (4px) — Badges, chips, small elements
- `--border-radius-base` (8px) — Buttons, inputs, cards (default)
- `--border-radius-md` (12px) — Larger cards, dialogs
- `--border-radius-lg` (16px) — Modals, panels
- `--border-radius-xl` (24px) — Large containers
- `--border-radius-full` (9999px) — Circles, pills

## Shadows

Use shadows to communicate elevation. Higher elevation = more prominent shadow.

| Token          | Use for                                      |
|----------------|----------------------------------------------|
| `--shadow-sm`  | Subtle cards, hover lift on flat elements     |
| `--shadow-base`| Default cards, dropdowns                      |
| `--shadow-md`  | Floating cards, raised sections               |
| `--shadow-lg`  | Dropdowns, popovers                           |
| `--shadow-xl`  | Modals, dialogs                               |
| `--shadow-2xl` | Toast notifications, high-emphasis overlays   |
| `--shadow-inner`| Inset effect for pressed/active inputs       |

## Transitions

### Durations
- `--duration-fast` (150ms) — Hover states, color changes
- `--duration-base` (200ms) — Default interactions
- `--duration-medium` (300ms) — Expanding panels, modals entering
- `--duration-slow` (500ms) — Page transitions, complex animations

### Easings
- `--easing-ease` — General purpose (default)
- `--easing-ease-out` — Elements entering (appearing)
- `--easing-ease-in` — Elements exiting (disappearing)
- `--easing-ease-in-out` — Elements moving position

```css
/* Example transition */
transition: background-color var(--duration-fast) var(--easing-ease),
            box-shadow var(--duration-base) var(--easing-ease);
```

## Z-Index

Layering system to avoid z-index conflicts:

| Token                     | Value | Use for              |
|---------------------------|-------|----------------------|
| `--z-index-base`          | 0     | Default stacking     |
| `--z-index-dropdown`      | 1000  | Dropdown menus       |
| `--z-index-sticky`        | 1100  | Sticky headers       |
| `--z-index-fixed`         | 1200  | Fixed elements       |
| `--z-index-modal-backdrop`| 1300  | Modal overlays       |
| `--z-index-modal`         | 1400  | Modal dialogs        |
| `--z-index-popover`       | 1500  | Popovers, tooltips   |
| `--z-index-tooltip`       | 1600  | Tooltips             |
| `--z-index-notification`  | 1700  | Toast notifications  |

## Breakpoints

| Token              | Value  | Devices              |
|--------------------|--------|----------------------|
| `--breakpoint-xs`  | 320px  | Small phones         |
| `--breakpoint-sm`  | 640px  | Large phones         |
| `--breakpoint-md`  | 768px  | Tablets              |
| `--breakpoint-lg`  | 1024px | Small laptops        |
| `--breakpoint-xl`  | 1280px | Desktops             |
| `--breakpoint-2xl` | 1536px | Large desktops       |

Use in media queries (mobile-first):
```css
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## Rules

1. **Always use CSS variables** — never hardcode colors, spacing, font sizes, shadows, or radii.
2. **Prefer semantic tokens** — use `--color-text-primary` over `--color-gray-900`. Use `--color-border-default` over `--color-gray-200`.
3. **Spacing is multiples of 4px** — stick to the spacing scale. Don't use arbitrary values like `13px` or `7px`.
4. **Border radius default is `--border-radius-base` (8px)** — use this for buttons, inputs, and cards unless a different size is explicitly needed.
5. **Shadows = elevation** — flat elements have no shadow, raised elements get `--shadow-sm` to `--shadow-md`, floating elements get `--shadow-lg` to `--shadow-xl`.
6. **Transitions always use token durations and easings** — don't use `0.3s ease`.
7. **Use `--font-family-sans` for all UI text** — only use mono for code and serif for editorial.
8. **Mobile-first responsive design** — start with the smallest breakpoint and add `min-width` media queries.
9. **Focus states use `--color-border-focus`** — every interactive element must have a visible focus indicator.
10. **Disabled states use the `*-disabled` tokens** — reduced opacity alone is not sufficient.
