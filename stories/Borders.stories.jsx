import React from 'react';
import tokens from '../design-tokens.json';
import { PageHeader, Section, Tip, CodeBlock } from './shared/DocBlock';

export default {
  title: 'Design Tokens/Borders',
};

export const BorderWidths = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 700 }}>
    <PageHeader
      title="Border Widths"
      description="A small set of border widths keeps your UI consistent. Thin for most cases, medium for emphasis and focus, thick for strong visual anchors."
    />

    {(() => {
      const usageNotes = {
        'none': 'Remove borders entirely (e.g. elevated cards that rely on shadow)',
        'thin': 'Default borders, dividers, form inputs, table cells',
        'medium': 'Focus rings, active tab indicators, emphasized separators',
        'thick': 'Decorative accents, left-border callouts, branding elements',
      };
      return Object.entries(tokens.border.width).map(([key, token]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 180 }}>border-width-{key}</div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 40 }}>{token.$value}</div>
          <div style={{ width: 120, height: 48, border: `${token.$value} solid #171717`, borderRadius: 4 }} />
          {usageNotes[key] && (
            <div style={{ fontSize: 12, color: '#a3a3a3' }}>{usageNotes[key]}</div>
          )}
        </div>
      ));
    })()}

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

    {(() => {
      const usageNotes = {
        'none': 'Sharp corners, table cells, utility elements',
        'sm': 'Small elements: badges, chips, tags',
        'base': 'Default: buttons, cards, inputs, dropdowns',
        'md': 'Larger cards, image containers',
        'lg': 'Modals, dialogs, hero images',
        'xl': 'Feature cards, marketing sections',
        'full': 'Pill buttons, avatars, status indicators',
      };
      return Object.entries(tokens.border.radius).map(([key, token]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 180 }}>border-radius-{key}</div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 60 }}>{token.$value}</div>
          <div style={{ width: 64, height: 64, backgroundColor: '#3b82f6', borderRadius: token.$value }} />
          {usageNotes[key] && (
            <div style={{ fontSize: 12, color: '#a3a3a3' }}>{usageNotes[key]}</div>
          )}
        </div>
      ));
    })()}

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
