# Design System — V0 Context

This folder contains the files you need to give [V0](https://v0.dev) access to your design system tokens so it generates UI in your style.

## What's in here

| File | Purpose |
|------|---------|
| `globals.css` | All design tokens as CSS custom properties, plus a minimal reset. Import this at the root of any project. |
| `v0-context.md` | Instructions for V0 explaining every token category, when to use each value, and the rules to follow. |

## Setup

1. Push this folder (or the whole repo) to GitHub.
2. In your V0 project, go to **Settings > Design System** and point it at this repo.
3. V0 will read `v0-context.md` for instructions and include `globals.css` in generated code.

## What's included

- **Colors** — 6 palette scales (gray, primary, success, warning, error, info) with 50–950 steps, plus semantic aliases for text, backgrounds, borders, and interactive states
- **Spacing** — 4px base grid from 0 to 128px
- **Sizing** — 0 to 256px
- **Typography** — Inter (sans), Georgia (serif), Fira Code (mono) with full size, weight, line-height, and letter-spacing scales, plus heading/body/code presets
- **Borders** — Width (thin/medium/thick) and radius (sm through full)
- **Shadows** — 8 elevation levels from sm to 2xl plus inner
- **Transitions** — Duration (fast/base/medium/slow) and easing curves
- **Z-Index** — Layered stacking from base (0) to notification (1700)
- **Breakpoints** — xs (320px) through 2xl (1536px)

## Token source

All values originate from `design-tokens.json` at the project root, which uses the [W3C Design Tokens Community Group (DTCG)](https://design-tokens.github.io/community-group/format/) format. The `globals.css` file in this folder is a flattened CSS export of those tokens.
