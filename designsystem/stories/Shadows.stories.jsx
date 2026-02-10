import React from 'react';
import tokens from '../design-tokens.json';
import { PageHeader, Section, Tip, Warning, CodeBlock, UsageTable } from './shared/DocBlock';

export default {
  title: 'Design Tokens/Shadows',
};

const shadowToCSS = (shadow) => {
  if (!shadow || typeof shadow !== 'object') return 'none';
  const inset = shadow.inset ? 'inset ' : '';
  return `${inset}${shadow.offsetX} ${shadow.offsetY} ${shadow.blur} ${shadow.spread} ${shadow.color}`;
};

export const ShadowScale = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Shadow Scale"
      description="Shadows communicate elevation and hierarchy. Higher elevation = more important or interactive. Use sparingly and increase on hover to indicate interactivity."
    />

    <UsageTable
      rows={[
        ['shadow-none', 'Flat elements, disabled states, outlined components'],
        ['shadow-sm', 'Subtle lift on hover, small cards, form inputs'],
        ['shadow-base', 'Default cards, contained buttons'],
        ['shadow-md', 'Dropdowns, tooltips, popovers, floating menus'],
        ['shadow-lg', 'Modals, drawers, sticky navigation'],
        ['shadow-xl', 'Dialogs, important overlays, sticky headers'],
        ['shadow-2xl', 'Maximum elevation: hero elements, dramatic layering'],
        ['shadow-inner', 'Inset/pressed states: active buttons, input wells'],
      ]}
    />

    <Tip>
      <strong>Interactive pattern:</strong> Start at <code>shadow-base</code>, increase to <code>shadow-lg</code> on hover, and drop to <code>shadow-sm</code> or <code>shadow-inner</code> on active/press.
    </Tip>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
      {Object.entries(tokens.shadow).map(([key, token]) => {
        const css = shadowToCSS(token.$value);
        return (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 140 }}>shadow-{key}</div>
            <div
              style={{
                width: 120,
                height: 64,
                backgroundColor: '#ffffff',
                borderRadius: 8,
                boxShadow: css,
                border: key === 'none' ? '1px solid #e5e5e5' : 'none',
              }}
            />
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a3a3a3', maxWidth: 320 }}>{css}</div>
          </div>
        );
      })}
    </div>

    <Section title="Interactive card pattern">
      <CodeBlock
        code={`.card {
  box-shadow: var(--shadow-base);
  transition: box-shadow var(--transition-duration-base)
              var(--transition-easing-ease-out),
              transform var(--transition-duration-base)
              var(--transition-easing-ease-out);
}
.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}`}
      />
    </Section>

    <Section title="Button states">
      <CodeBlock
        code={`.button {
  box-shadow: var(--shadow-sm);
}
.button:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
.button:active {
  box-shadow: var(--shadow-inner);
  transform: translateY(0);
}`}
      />
    </Section>

    <Warning>
      In dark mode, shadows may need higher opacity to be visible against dark backgrounds. Test your shadow tokens against both light and dark surfaces.
    </Warning>
  </div>
);
