import React from 'react';
import tokens from '../design-tokens.json';
import { PageHeader, Section, Tip, Warning, CodeBlock, UsageTable } from './shared/DocBlock';

export default {
  title: 'Design Tokens/Spacing',
};

export const SpacingScale = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Spacing Scale"
      description="All spacing values are multiples of 4 px. This keeps layouts aligned to a pixel grid and creates consistent visual rhythm."
    />

    <Tip>
      Use <strong>smaller values (1-4)</strong> to group related elements together.
      Use <strong>larger values (8-16)</strong> to separate distinct sections.
      The amount of space between elements communicates their relationship.
    </Tip>

    <UsageTable
      rows={[
        ['spacing-1 (4px)', 'Icon-to-text gap, tight badge padding'],
        ['spacing-2 (8px)', 'Inline element gaps, label-to-input margin'],
        ['spacing-3 (12px)', 'Button vertical padding, compact card padding'],
        ['spacing-4 (16px)', 'Default gap between elements, standard card padding'],
        ['spacing-6 (24px)', 'Comfortable card padding, grid gaps'],
        ['spacing-8 (32px)', 'Component-level separation, section starts'],
        ['spacing-12 ... spacing-16', 'Page section padding, major visual breaks'],
        ['spacing-20 ... spacing-32', 'Hero sections, landing page padding'],
      ]}
    />

    {Object.entries(tokens.spacing).map(([key, token]) => (
      <div
        key={key}
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}
      >
        <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 120 }}>spacing-{key}</div>
        <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 60 }}>{token.$value}</div>
        <div
          style={{
            width: parseInt(token.$value, 10),
            height: 24,
            backgroundColor: '#3b82f6',
            borderRadius: 3,
            minWidth: key === '0' ? 2 : undefined,
          }}
        />
      </div>
    ))}

    <Warning>
      Avoid arbitrary values like <code>15px</code> or <code>23px</code>. If the scale doesn't have what you need, pick the nearest value. Consistency is more important than pixel-perfection.
    </Warning>

    <Section title="Common patterns">
      <CodeBlock
        label="Button"
        code={`.button {
  padding: var(--spacing-3) var(--spacing-4);   /* 12px / 16px */
  gap: var(--spacing-2);                         /* icon + label */
}`}
      />
      <CodeBlock
        label="Card"
        code={`.card {
  padding: var(--spacing-6);          /* 24px */
  gap: var(--spacing-4);              /* between child elements */
  margin-bottom: var(--spacing-4);    /* between cards */
}`}
      />
      <CodeBlock
        label="Page section"
        code={`.section {
  padding: var(--spacing-16) var(--spacing-4);  /* mobile */
}
@media (min-width: 768px) {
  .section { padding: var(--spacing-20) var(--spacing-8); }
}`}
      />
    </Section>
  </div>
);

/* ------------------------------------------------------------------ */

export const SizingScale = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Sizing Scale"
      description="Use sizing tokens for explicit widths, heights, and min/max dimensions on components. For gaps and padding, use the spacing scale instead."
    />

    <Tip>
      <strong>Spacing vs. Sizing:</strong> Spacing is for the <em>space between</em> elements (padding, margin, gap). Sizing is for the <em>dimensions of</em> elements (width, height, min-width).
    </Tip>

    {Object.entries(tokens.sizing).map(([key, token]) => (
      <div
        key={key}
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}
      >
        <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 120 }}>sizing-{key}</div>
        <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 60 }}>{token.$value}</div>
        <div
          style={{
            width: Math.min(parseInt(token.$value, 10), 300),
            height: 24,
            backgroundColor: '#16a34a',
            borderRadius: 3,
            minWidth: key === '0' ? 2 : undefined,
          }}
        />
      </div>
    ))}

    <Section title="Usage">
      <CodeBlock
        code={`.avatar-sm  { width: var(--sizing-8);  height: var(--sizing-8);  }  /* 32px */
.avatar-md  { width: var(--sizing-10); height: var(--sizing-10); }  /* 40px */
.avatar-lg  { width: var(--sizing-12); height: var(--sizing-12); }  /* 48px */
.icon       { width: var(--sizing-5);  height: var(--sizing-5);  }  /* 20px */`}
      />
    </Section>
  </div>
);
