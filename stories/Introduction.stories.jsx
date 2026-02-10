import React from 'react';
import { PageHeader, Section, Tip, CodeBlock } from './shared/DocBlock';

export default {
  title: 'Introduction',
};

export const GettingStarted = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Design System Tokens"
      description="A single source of truth for all visual design decisions. Design tokens store values like colors, spacing, typography, shadows, and more as named variables so your UI stays consistent, themeable, and easy to maintain."
    />

    <Section title="Why tokens?">
      <ul style={{ fontSize: 14, lineHeight: 2, color: '#404040', paddingLeft: 20 }}>
        <li><strong>Consistency</strong> &mdash; every component draws from the same palette and scale.</li>
        <li><strong>Single update</strong> &mdash; change a token once and the whole product updates.</li>
        <li><strong>Theming</strong> &mdash; swap a set of tokens to support dark mode or brand variants.</li>
        <li><strong>Shared language</strong> &mdash; designers and engineers reference the same names.</li>
      </ul>
    </Section>

    <Section title="How to use tokens">
      <Tip>
        Always prefer <strong>semantic tokens</strong> (e.g. <code>text-primary</code>) over raw values
        (e.g. <code>gray-900</code>). Semantic tokens stay correct when themes change.
      </Tip>

      <CodeBlock
        label="CSS custom properties"
        code={`.button {
  background-color: var(--color-primary-600);
  color: var(--color-base-white);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  transition: background var(--transition-duration-fast)
              var(--transition-easing-ease-out);
}`}
      />

      <CodeBlock
        label="JavaScript / React"
        code={`import tokens from './design-tokens.json';

const primary = tokens.color.primary['600'].$value; // "#2563eb"
const gap     = tokens.spacing['4'].$value;          // "16px"`}
      />
    </Section>

    <Section title="Token categories">
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <tbody>
          {[
            ['Colors', 'Brand palette, grays, semantic text/background/border colors'],
            ['Typography', 'Font families, sizes, weights, line heights, letter spacing'],
            ['Spacing', 'Layout gaps, padding, and margins on a 4 px grid'],
            ['Borders', 'Border widths and corner radii'],
            ['Shadows', 'Elevation scale from subtle to dramatic'],
            ['Transitions', 'Duration and easing values for animations'],
          ].map(([name, desc]) => (
            <tr key={name} style={{ borderBottom: '1px solid #f5f5f5' }}>
              <td style={{ padding: '10px 12px', fontWeight: 600 }}>{name}</td>
              <td style={{ padding: '10px 12px', color: '#525252' }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>

    <Section title="Design principles">
      <ol style={{ fontSize: 14, lineHeight: 2, color: '#404040', paddingLeft: 20 }}>
        <li><strong>Semantic naming</strong> &mdash; names describe purpose, not appearance.</li>
        <li><strong>Composability</strong> &mdash; tokens combine to build components.</li>
        <li><strong>Accessibility first</strong> &mdash; color pairings meet WCAG AA contrast ratios.</li>
        <li><strong>Flexibility</strong> &mdash; supports theming without breaking the system.</li>
      </ol>
    </Section>
  </div>
);
