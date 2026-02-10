# Claude Code Session Instructions

## Branch & Push Rules

- You are authorized to push directly to `main`.
- Pushes to `main` trigger the Storybook deploy to GitHub Pages via `.github/workflows/deploy-storybook.yml`.

## Install Dependencies

- Run `npm ci` before doing any build or Storybook work. Dependencies are not pre-installed.

## Storybook Verification

- After any change to tokens, primitives, or stories, run `npm run build-storybook` and confirm it exits cleanly (exit code 0).
- Story files live in `stories/` and primitives in `src/primitives/`. The Storybook config is in `.storybook/`.

## Keep V0 Instructions in Sync

- When tokens are added, removed, or renamed in `design-tokens.json`, update **both**:
  - `v0/globals.css` — the flattened CSS custom properties export
  - `v0/v0-context.md` — the AI instruction document (sections: Color System, Spacing, Typography, Borders, Shadows, Transitions, Z-Index, Breakpoints, and the Rules list)
- These two files are the external-facing contract for AI tools (like V0) consuming the design system.

## Source of Truth

- `design-tokens.json` is the canonical DTCG-format source. All other files (`v0/globals.css`, `src/tokens/tokens.js`, stories) are derived from it.

## Verification

- There is currently no test runner or linter configured. The only verification step is `npm run build-storybook`.
