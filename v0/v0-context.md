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
| **Gray**    | `--color-gray-{50–950}`     | 50–200: backgrounds, cards, subtle borders. 300–400: dividers, disabled text, placeholder icons. 500–700: secondary text, labels, icons. 800–950: primary text, headings. |
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

| Token          | Value  | When to use                                        |
|----------------|--------|----------------------------------------------------|
| `--spacing-0`  | 0px    | No spacing                                         |
| `--spacing-1`  | 4px    | Icon-to-text gap, tight badge padding              |
| `--spacing-2`  | 8px    | Inline element gaps, label-to-input margin         |
| `--spacing-3`  | 12px   | Button vertical padding, compact card padding      |
| `--spacing-4`  | 16px   | Default gap between elements, standard card padding|
| `--spacing-5`  | 20px   | Medium padding                                     |
| `--spacing-6`  | 24px   | Comfortable card padding, grid gaps                |
| `--spacing-8`  | 32px   | Component-level separation, section starts         |
| `--spacing-10` | 40px   | Page section spacing                               |
| `--spacing-12` | 48px   | Page section padding, major visual breaks          |
| `--spacing-16` | 64px   | Page section padding, major visual breaks          |
| `--spacing-20` | 80px   | Hero sections, landing page padding                |
| `--spacing-24` | 96px   | Hero sections, landing page padding                |
| `--spacing-32` | 128px  | Hero sections, landing page padding                |

## Typography

### Font families
- `--font-family-sans` — Inter + system fallbacks. Body text, headings, buttons, form controls, and all standard UI.
- `--font-family-serif` — Georgia stack. Long-form editorial content, blog posts, marketing pages.
- `--font-family-mono` — Fira Code + monospace fallbacks. Code snippets, technical values, terminal output.

### Font sizes
| Token               | Value | When to use                                    |
|---------------------|-------|------------------------------------------------|
| `--font-size-xs`    | 12px  | Timestamps, fine print, badge labels           |
| `--font-size-sm`    | 14px  | Captions, labels, secondary text               |
| `--font-size-base`  | 16px  | Default body text                              |
| `--font-size-lg`    | 18px  | Lead paragraphs, sub-headings                  |
| `--font-size-xl`    | 20px  | Lead paragraphs, sub-headings                  |
| `--font-size-2xl`   | 24px  | Section headings (h2 - h4)                     |
| `--font-size-3xl`   | 30px  | Section headings (h2 - h4)                     |
| `--font-size-4xl`   | 36px  | Section headings (h2 - h4)                     |
| `--font-size-5xl`   | 48px  | Page titles, hero text, marketing headlines    |
| `--font-size-6xl`   | 60px  | Page titles, hero text, marketing headlines    |
| `--font-size-7xl`   | 72px  | Page titles, hero text, marketing headlines    |

### Font weights
`--font-weight-thin` (100) through `--font-weight-black` (900). Most common:
- `--font-weight-normal` (400) — Body text, descriptions, form inputs
- `--font-weight-medium` (500) — Labels, nav items, subtle emphasis
- `--font-weight-semibold` (600) — Sub-headings, card titles, table headers
- `--font-weight-bold` (700) — Page headings, strong emphasis

### Line heights
- `--line-height-none` (1.0) — Single-line display text, icons beside text
- `--line-height-tight` (1.25) — Headings, compact card titles
- `--line-height-snug` (1.375) — Sub-headings, large text
- `--line-height-normal` (1.5) — Default body text (recommended)
- `--line-height-relaxed` (1.625) — Long-form reading, editorial content
- `--line-height-loose` (2.0) — Spaced-out small text, legal copy

### Letter spacing
- `--letter-spacing-tighter` (-0.05em) — Large display headlines
- `--letter-spacing-tight` (-0.025em) — Page headings (h1, h2)
- `--letter-spacing-normal` (0em) — Body text, default
- `--letter-spacing-wide` (0.025em) — Subtle emphasis on small text
- `--letter-spacing-wider` (0.05em) — Small-caps, overline labels
- `--letter-spacing-widest` (0.1em) — All-caps labels, category tags

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
- `--border-width-none` (0px) — Remove borders entirely (e.g. elevated cards that rely on shadow)
- `--border-width-thin` (1px) — Default borders, dividers, form inputs, table cells
- `--border-width-medium` (2px) — Focus rings, active tab indicators, emphasized separators
- `--border-width-thick` (4px) — Decorative accents, left-border callouts, branding elements

### Radii
- `--border-radius-none` (0px) — Sharp corners, table cells, utility elements
- `--border-radius-sm` (4px) — Small elements: badges, chips, tags
- `--border-radius-base` (8px) — Default: buttons, cards, inputs, dropdowns
- `--border-radius-md` (12px) — Larger cards, image containers
- `--border-radius-lg` (16px) — Modals, dialogs, hero images
- `--border-radius-xl` (24px) — Feature cards, marketing sections
- `--border-radius-full` (9999px) — Pill buttons, avatars, status indicators

## Shadows

Use shadows to communicate elevation. Higher elevation = more prominent shadow.

| Token           | When to use                                       |
|-----------------|---------------------------------------------------|
| `--shadow-none` | Flat elements, disabled states, outlined components|
| `--shadow-sm`   | Subtle lift on hover, small cards, form inputs    |
| `--shadow-base` | Default cards, contained buttons                  |
| `--shadow-md`   | Dropdowns, tooltips, popovers, floating menus     |
| `--shadow-lg`   | Modals, drawers, sticky navigation                |
| `--shadow-xl`   | Dialogs, important overlays, sticky headers       |
| `--shadow-2xl`  | Maximum elevation: hero elements, dramatic layering|
| `--shadow-inner`| Inset/pressed states: active buttons, input wells |

## Transitions

### Durations
- `--duration-instant` (0ms) — Immediate state changes, no animation (e.g. active/pressed)
- `--duration-fast` (150ms) — Hover states, tooltips, small color changes, focus rings
- `--duration-base` (200ms) — Default for most transitions: dropdowns, toggles, input focus
- `--duration-medium` (300ms) — Panel slides, dropdown menus, tab switches
- `--duration-slow` (500ms) — Page transitions, large modals, complex multi-step animations
- `--duration-slower` (700ms) — Dramatic reveals, hero animations, onboarding flows

### Easings
- `--easing-linear` — Constant speed. Use for progress bars, loading spinners, marquees
- `--easing-ease` — Gentle all-purpose curve. Good default for subtle transitions
- `--easing-ease-in` — Starts slow, ends fast. Use for elements leaving the screen
- `--easing-ease-out` — Starts fast, settles in. Use for elements entering the screen (most common)
- `--easing-ease-in-out` — Slow start and end. Use for position changes, toggles, accordions

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
