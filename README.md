# Design System — Design Tokens

A comprehensive design system built on [W3C Design Tokens Community Group (DTCG)](https://design-tokens.github.io/community-group/format/) format. All values originate from a single source of truth (`design-tokens.json`) and are exported as CSS custom properties for use in any project.

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

## Project structure

| Path | Purpose |
|------|---------|
| `design-tokens.json` | Single source of truth — all tokens in DTCG format |
| `v0/globals.css` | All design tokens as CSS custom properties, plus a minimal reset. Import this at the root of any project. |
| `v0/v0-context.md` | Instructions for AI tools explaining every token category, when to use each value, and the rules to follow. |
| `src/tokens/` | Token resolution utilities for JavaScript/React |
| `src/primitives/` | React primitives (Box, Grid, Stack, Inline, Text) that consume the tokens |
| `stories/` | Storybook stories for visualizing and documenting every token |

## Prompt for AI tools

Copy and paste the prompt below into V0, ChatGPT, Claude, or any AI coding assistant to give it full context on how to use these design tokens. Adjust the repo URL to match your own.

> ---
>
> **Use the design tokens from my design system for all UI you generate.**
>
> Here is how to find what you need:
>
> 1. **CSS variables file** — import `https://github.com/paulfeltoe/design-tokens/blob/main/v0/globals.css` at the root of the project. This file contains every design token as a CSS custom property (colors, spacing, typography, borders, shadows, transitions, z-index, breakpoints).
>
> 2. **Full usage guide** — read `https://github.com/paulfeltoe/design-tokens/blob/main/v0/v0-context.md` for detailed instructions on every token category, which values to use and when, typography presets, and the 10 rules you must follow.
>
> 3. **Token source (DTCG format)** — if you need raw token values or want to understand the structure, read `design-tokens.json` in the project root. It uses the W3C Design Tokens Community Group format.
>
> **Key rules to follow:**
> - Always use CSS variables (`var(--token-name)`) — never hardcode colors, spacing, font sizes, shadows, or radii.
> - Prefer semantic tokens (e.g. `--color-text-primary`) over raw palette values (e.g. `--color-gray-900`).
> - Spacing must be multiples of 4px using the spacing scale.
> - Use `--font-family-sans` (Inter) for all UI text. Only use mono for code and serif for editorial.
> - Every interactive element needs a visible focus state using `--color-border-focus`.
> - Use mobile-first responsive design with `min-width` media queries at the defined breakpoints.
>
> Read the files above before generating any code so you understand the full token set available.
>
> ---

## Token source

All values originate from `design-tokens.json` at the project root, which uses the [W3C Design Tokens Community Group (DTCG)](https://design-tokens.github.io/community-group/format/) format. The `v0/globals.css` file is a flattened CSS export of those tokens.
