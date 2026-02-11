# Design System Context for V0

## How to use

1. Import `globals.css` at the root of the project (it's already included if the project was scaffolded from this repo).
2. Reference tokens as CSS variables: `var(--color-primary-500)`, `var(--spacing-4)`, etc.
3. Use semantic variables for anything user-facing (text, backgrounds, borders) so the UI stays consistent across light and dark modes.
4. **Always use the CSS variables defined in `globals.css`** instead of hardcoded values.

## Color System

### Base palette

The brand foundation. These are the core neutrals and accent tones used throughout the system.

| Variable                    | Value                    | Description                                      |
|-----------------------------|--------------------------|--------------------------------------------------|
| `--color-base-white`        | #FFFFFF                  | Pure white                                       |
| `--color-base-cream`        | #FFFCFA                  | Warm near-white (Snow). Light mode app background |
| `--color-base-warm`         | #FFEFE2                  | Warm accent tint (Linen). Accent backgrounds     |
| `--color-base-sandstone`    | #DCBFB4                  | Muted warm tone (Dirty Linen). Dark mode text    |
| `--color-base-charcoal`     | #212020                  | Brand black. Light mode text, dark mode background |
| `--color-base-transparent`  | rgba(0, 0, 0, 0)        | Fully transparent                                |
| `--color-base-overlay`      | rgba(55, 55, 54, 0.6)   | Dark Slate at 60% opacity                        |

### Palette scales

Six color scales. Use the **middle values (400–600)** as the default, lighter values for backgrounds, darker values for hover/active states.

| Scale       | Variable pattern             | Steps   | Purpose                          |
|-------------|------------------------------|---------|----------------------------------|
| **Gray**    | `--color-gray-{100–600}`     | 100, 150, 200, 300, 400, 500, 600 | 100–150: backgrounds, hover fills. 200: borders, disabled. 300–400: contrast, dividers. 500: secondary text. 600: dark mode surfaces. |
| **Primary** | `--color-primary-{100–800}`  | 100–800 | Warm orange brand, CTAs, links, focus rings. 500 (Pumpkin) = light mode accent, 300 (Peach) = dark mode accent. |
| **Success** | `--color-success-{50–800}`   | 50–800  | Confirmations, positive states. 500 (Peppermint) = primary success. |
| **Warning** | `--color-warning-{50–800}`   | 50–800  | Cautions, pending states         |
| **Error**   | `--color-error-{50–800}`     | 50–800  | Errors, destructive actions. 500 (Alarm) = light mode, 300 (Alert) = dark mode. |
| **Info**    | `--color-info-{50–800}`      | 50–800  | Informational, help, tips. 200 (Sky) = banner/tag backgrounds. |

### Semantic colors — use these first

Instead of picking a raw palette value, prefer the semantic aliases. They auto-switch between light and dark mode via `prefers-color-scheme`.

**Text colors:**
- `--color-text-primary` — Default body text (light: charcoal, dark: warm)
- `--color-text-secondary` — Supporting text (light: gray-500, dark: sandstone)
- `--color-text-tertiary` — Placeholder, hint text (light: gray-400, dark: gray-300)
- `--color-text-disabled` — Disabled state (light: gray-200, dark: gray-500)
- `--color-text-inverse` — Text on inverted backgrounds (light: white, dark: charcoal)
- `--color-text-link` / `--color-text-link-hover` — Anchor links (light: primary-500/600, dark: primary-300/200)
- `--color-text-error` / `--color-text-success` / `--color-text-warning` — Status text

**Background colors:**
- `--color-bg-primary` — Page background (light: cream, dark: charcoal)
- `--color-bg-secondary` — Subtle sections, alternating rows (light: gray-100, dark: gray-600)
- `--color-bg-tertiary` — Accent background (light: warm/Linen, dark: warm)
- `--color-bg-surface` — Card/panel surface (light: white, dark: gray-600)
- `--color-bg-inverse` — Inverted background (light: charcoal, dark: cream)
- `--color-bg-hover` — Hover fill (light: gray-100, dark: gray-500)
- `--color-bg-overlay` — Modal/dialog backdrops (Dark Slate 60%)

**Border colors:**
- `--color-border-default` — Standard borders (light: gray-200, dark: gray-500)
- `--color-border-strong` — Emphasized borders (light: gray-400, dark: gray-400)
- `--color-border-subtle` — Light separators (light: gray-100, dark: gray-600)
- `--color-border-disabled` — Disabled borders (light: gray-200, dark: gray-500)
- `--color-border-focus` — Focus rings (light: primary-500, dark: primary-300)
- `--color-border-error` — Validation error borders (light: error-500, dark: error-300)

**Interactive colors:**
- `--color-interactive-primary` — Button/link default (light: primary-500, dark: primary-300)
- `--color-interactive-primary-hover` — Hover state (light: primary-600, dark: primary-200)
- `--color-interactive-primary-active` — Active/pressed (light: primary-700, dark: primary-100)
- `--color-interactive-primary-disabled` — Disabled (light: gray-200, dark: gray-500)
- `--color-interactive-secondary` — Secondary action default (light: gray-500, dark: gray-300)
- `--color-interactive-secondary-hover` / `--color-interactive-secondary-active`

### Gradient

- `--gradient-oomph` — Peach-to-Sky brand gradient (`linear-gradient(90deg, primary-300 0%, info-200 100%)`)

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
- `--font-family-sans` — Roboto + system fallbacks. Body text, headings, buttons, form controls, and all standard UI.
- `--font-family-serif` — Poynter + Georgia stack. Long-form editorial content, blog posts, marketing pages.
- `--font-family-mono` — Roboto Mono + Fira Code fallbacks. Code snippets, technical values, terminal output.

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
font-family: var(--font-family-serif);
font-size: var(--font-size-5xl);      /* 48px */
font-weight: var(--font-weight-bold);
line-height: var(--line-height-tight);
letter-spacing: var(--letter-spacing-tight);

/* H2 */
font-family: var(--font-family-serif);
font-size: var(--font-size-4xl);      /* 36px */
font-weight: var(--font-weight-bold);
line-height: var(--line-height-tight);
letter-spacing: var(--letter-spacing-tight);

/* H3 */
font-family: var(--font-family-serif);
font-size: var(--font-size-3xl);      /* 30px */
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-snug);

/* H4 */
font-family: var(--font-family-serif);
font-size: var(--font-size-2xl);      /* 24px */
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-snug);

/* H5 */
font-family: var(--font-family-serif);
font-size: var(--font-size-xl);       /* 20px */
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-normal);

/* H6 */
font-family: var(--font-family-serif);
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

Use shadows to communicate elevation. Higher elevation = more prominent shadow. Shadow color is based on charcoal (#212020).

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
2. **Prefer semantic tokens** — use `--color-text-primary` over `--color-base-charcoal`. Use `--color-border-default` over `--color-gray-200`. Semantic tokens auto-switch for dark mode.
3. **Spacing is multiples of 4px** — stick to the spacing scale. Don't use arbitrary values like `13px` or `7px`.
4. **Border radius default is `--border-radius-base` (8px)** — use this for buttons, inputs, and cards unless a different size is explicitly needed.
5. **Shadows = elevation** — flat elements have no shadow, raised elements get `--shadow-sm` to `--shadow-md`, floating elements get `--shadow-lg` to `--shadow-xl`. Shadow color is brand charcoal, not pure black.
6. **Transitions always use token durations and easings** — don't use `0.3s ease`.
7. **Use `--font-family-serif` (Poynter) for all headings** and `--font-family-sans` (Roboto) for body/UI text — only use mono (Roboto Mono) for code.
8. **Mobile-first responsive design** — start with the smallest breakpoint and add `min-width` media queries.
9. **Focus states use `--color-border-focus`** — every interactive element must have a visible focus indicator.
10. **Disabled states use the `*-disabled` tokens** — reduced opacity alone is not sufficient.
11. **Dark mode is automatic** — semantic tokens switch via `prefers-color-scheme: dark`. Use semantic tokens and dark mode works for free.
12. **Use `--gradient-oomph`** for brand gradient accents (Peach-to-Sky).
