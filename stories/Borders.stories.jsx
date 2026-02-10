import React from 'react';
import tokens from '../design-tokens.json';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from './shared/DocBlock';

export default {
  title: 'Design Tokens/Borders',
};

export const BorderWidths = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 700 }}>
    <PageHeader
      title="Border Widths"
      description="A small set of border widths keeps your UI consistent. Thin for most cases, medium for emphasis and focus, thick for strong visual anchors."
    />

    <UsageTable
      rows={[
        ['border-width-none (0px)', 'Remove borders entirely (e.g. elevated cards that rely on shadow)'],
        ['border-width-thin (1px)', 'Default borders, dividers, form inputs, table cells'],
        ['border-width-medium (2px)', 'Focus rings, active tab indicators, emphasized separators'],
        ['border-width-thick (4px)', 'Decorative accents, left-border callouts, branding elements'],
      ]}
    />

    {Object.entries(tokens.border.width).map(([key, token]) => (
      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 180 }}>border-width-{key}</div>
        <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 40 }}>{token.$value}</div>
        <div style={{ width: 120, height: 48, border: `${token.$value} solid #171717`, borderRadius: 4 }} />
      </div>
    ))}

    <Section title="Usage">
      <CodeBlock
        code={`.input {
  border: var(--border-width-thin) solid var(--semantic-color-border-default);
}
.input:focus {
  border-width: var(--border-width-medium);
  border-color: var(--semantic-color-border-focus);
}
.callout {
  border-left: var(--border-width-thick) solid var(--color-primary-600);
}`}
      />
    </Section>
  </div>
);

/* ------------------------------------------------------------------ */

export const BorderRadius = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 700 }}>
    <PageHeader
      title="Border Radius"
      description="Corner rounding values from sharp to fully circular. Pick a default (usually base) and stay consistent across similar components."
    />

    <Tip>
      Use <strong>base (8px)</strong> as your default for buttons, cards, and inputs.
      Reserve <strong>full (9999px)</strong> for pills, avatars, and circular icons.
    </Tip>

    <UsageTable
      rows={[
        ['border-radius-none (0px)', 'Sharp corners, table cells, utility elements'],
        ['border-radius-sm (4px)', 'Small elements: badges, chips, tags'],
        ['border-radius-base (8px)', 'Default: buttons, cards, inputs, dropdowns'],
        ['border-radius-md (12px)', 'Larger cards, image containers'],
        ['border-radius-lg (16px)', 'Modals, dialogs, hero images'],
        ['border-radius-xl (24px)', 'Feature cards, marketing sections'],
        ['border-radius-full (9999px)', 'Pill buttons, avatars, status indicators'],
      ]}
    />

    {Object.entries(tokens.border.radius).map(([key, token]) => (
      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 180 }}>border-radius-{key}</div>
        <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 60 }}>{token.$value}</div>
        <div style={{ width: 64, height: 64, backgroundColor: '#3b82f6', borderRadius: token.$value }} />
      </div>
    ))}

    <Section title="Usage">
      <CodeBlock
        code={`.button      { border-radius: var(--border-radius-base); }
.button-pill { border-radius: var(--border-radius-full); }
.avatar      { border-radius: var(--border-radius-full); }
.modal       { border-radius: var(--border-radius-lg); }
.badge       { border-radius: var(--border-radius-sm); }`}
      />
    </Section>
  </div>
);
