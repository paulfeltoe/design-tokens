import React from 'react';
import tokens from '../design-tokens.json';
import { PageHeader, Section, Tip, Warning, CodeBlock } from './shared/DocBlock';

export default {
  title: 'Design Tokens/Colors',
};

/* ------------------------------------------------------------------ */
/*  Shared presentational helpers                                      */
/* ------------------------------------------------------------------ */

const SwatchRow = ({ name, hex, note }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 6,
        backgroundColor: hex,
        border: '1px solid #e5e5e5',
        flexShrink: 0,
      }}
    />
    <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 160 }}>{name}</div>
    <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 80 }}>{hex}</div>
    {note && <div style={{ fontSize: 12, color: '#a3a3a3' }}>{note}</div>}
  </div>
);

const ScaleSection = ({ title, description, scaleObj, prefix }) => (
  <div style={{ marginBottom: 32 }}>
    <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600 }}>{title}</h3>
    {description && <p style={{ color: '#525252', fontSize: 13, margin: '0 0 12px' }}>{description}</p>}
    {Object.entries(scaleObj).map(([key, token]) => (
      <SwatchRow key={key} name={`${prefix}-${key}`} hex={token.$value} />
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Stories                                                            */
/* ------------------------------------------------------------------ */

export const ColorPalette = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 700 }}>
    <PageHeader
      title="Color Palette"
      description="Every color has 11 shades (50 - 950). Lighter shades work for backgrounds and subtle UI; mid-range shades for interactive elements and icons; darker shades for text and strong emphasis."
    />

    <Tip>
      Use the <strong>600</strong> shade as the primary action color for each scale.
      Hover states should step one shade darker (700), active states two (800).
    </Tip>

    <div style={{ marginBottom: 32 }}>
      <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 600 }}>Base</h3>
      {Object.entries(tokens.color.base).map(([key, token]) => (
        <SwatchRow key={key} name={`base-${key}`} hex={token.$value} />
      ))}
    </div>

    {(() => {
      const grayUsage = (shade) => {
        const n = parseInt(shade, 10);
        if (n <= 200) return 'Backgrounds, cards, subtle borders';
        if (n <= 400) return 'Dividers, disabled text, placeholder icons';
        if (n <= 700) return 'Secondary text, labels, icons';
        return 'Primary text, headings';
      };
      return (
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600 }}>Gray</h3>
          <p style={{ color: '#525252', fontSize: 13, margin: '0 0 12px' }}>
            Your most-used scale. Reach for grays for text, backgrounds, borders, and disabled states.
          </p>
          {Object.entries(tokens.color.gray).map(([key, token]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
              <div
                style={{
                  width: 48, height: 48, borderRadius: 6,
                  backgroundColor: token.$value,
                  border: '1px solid #e5e5e5', flexShrink: 0,
                }}
              />
              <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 160 }}>gray-{key}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 80 }}>{token.$value}</div>
              <div style={{ fontSize: 12, color: '#a3a3a3' }}>{grayUsage(key)}</div>
            </div>
          ))}
        </div>
      );
    })()}

    <ScaleSection
      title="Primary (Blue)"
      description="Brand color. Use for primary actions, links, active states, and focus rings."
      scaleObj={tokens.color.primary}
      prefix="primary"
    />
    <ScaleSection
      title="Success (Green)"
      description="Positive outcomes: confirmations, success banners, valid form fields."
      scaleObj={tokens.color.success}
      prefix="success"
    />
    <ScaleSection
      title="Warning (Orange)"
      description="Caution states: warnings, items needing attention, approaching limits."
      scaleObj={tokens.color.warning}
      prefix="warning"
    />
    <ScaleSection
      title="Error (Red)"
      description="Errors and destructive actions: validation messages, delete confirmations, alerts."
      scaleObj={tokens.color.error}
      prefix="error"
    />
    <ScaleSection
      title="Info (Cyan)"
      description="Informational messages: tips, neutral notifications, help text."
      scaleObj={tokens.color.info}
      prefix="info"
    />

    <Section title="Accessibility">
      <p style={{ fontSize: 14, color: '#404040', marginBottom: 12 }}>
        All recommended text/background pairings meet <strong>WCAG 2.1 AA</strong> (4.5 : 1 for normal text, 3 : 1 for large text).
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
        {[
          ['white + gray-900', '21 : 1', 'Safe for any text size', '#ffffff', '#0a0a0a'],
          ['white + primary-600', '8.6 : 1', 'Safe for body text', '#ffffff', '#2563eb'],
          ['gray-100 + gray-900', '18.7 : 1', 'Safe on tinted backgrounds', '#f5f5f5', '#0a0a0a'],
          ['primary-600 + white', '8.6 : 1', 'Safe for button labels', '#2563eb', '#ffffff'],
        ].map(([pair, ratio, note, bg, fg]) => (
          <div key={pair} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 48, height: 32, borderRadius: 6, backgroundColor: bg,
                color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 600, border: '1px solid #e5e5e5',
              }}
            >
              Aa
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 200 }}>{pair}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 60 }}>{ratio}</div>
            <div style={{ fontSize: 12, color: '#a3a3a3' }}>{note}</div>
          </div>
        ))}
      </div>
      <Warning>
        Always test your specific pairings. Avoid placing text below <strong>gray-500</strong> on white backgrounds for body copy &mdash; it may not meet contrast requirements.
      </Warning>
    </Section>

    <Section title="Usage in CSS">
      <CodeBlock
        code={`.card {
  background: var(--color-base-white);
  border: 1px solid var(--semantic-color-border-default);
}

.button-primary {
  background: var(--color-primary-600);
  color: var(--color-base-white);
}
.button-primary:hover {
  background: var(--color-primary-700);
}`}
      />
    </Section>
  </div>
);

/* ------------------------------------------------------------------ */

const resolveRef = (value) => {
  if (typeof value !== 'string' || !value.startsWith('{')) return value;
  const path = value.slice(1, -1).split('.');
  let result = tokens;
  for (const key of path) result = result[key];
  return result.$value;
};

const SemanticRow = ({ name, value, ref: refPath }) => {
  const resolved = resolveRef(value);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 6,
          backgroundColor: resolved,
          border: '1px solid #e5e5e5',
          flexShrink: 0,
        }}
      />
      <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 200 }}>{name}</div>
      <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 80 }}>{resolved}</div>
      {typeof value === 'string' && value.startsWith('{') && (
        <div style={{ fontSize: 12, color: '#a3a3a3' }}>{value}</div>
      )}
    </div>
  );
};

export const SemanticColors = () => {
  const semantic = tokens.semantic.color;

  const categoryDescriptions = {
    text: 'Apply to text elements. Prefer these over raw gray values so text adapts to theme changes.',
    background: 'Apply to surfaces, cards, page backgrounds, and overlays.',
    border: 'Apply to borders, dividers, focus rings, and validation states.',
    interactive: 'Apply to buttons, links, toggles, and other clickable elements. Includes hover, active, and disabled variants.',
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
      <PageHeader
        title="Semantic Colors"
        description="Semantic tokens map to specific use cases rather than raw hex values. Always prefer semantic tokens in component styles &mdash; they keep your UI correct when switching themes."
      />

      <Tip>
        <strong>Rule of thumb:</strong> If a color describes <em>what something is</em> (text, background, border, interactive), use a semantic token. If you need a specific shade for a one-off decoration, use the base palette.
      </Tip>

      {Object.entries(semantic).map(([category, values]) => (
        <div key={category} style={{ marginBottom: 32 }}>
          <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600, textTransform: 'capitalize' }}>
            {category}
          </h3>
          {categoryDescriptions[category] && (
            <p style={{ color: '#525252', fontSize: 13, margin: '0 0 12px' }}>
              {categoryDescriptions[category]}
            </p>
          )}
          {Object.entries(values).map(([key, token]) => (
            <SemanticRow key={key} name={`${category}-${key}`} value={token.$value} />
          ))}
        </div>
      ))}

      <Section title="Usage example">
        <CodeBlock
          code={`/* Always reach for semantic tokens first */
h1     { color: var(--semantic-color-text-primary); }
p      { color: var(--semantic-color-text-secondary); }
a      { color: var(--semantic-color-text-link); }
.error { color: var(--semantic-color-text-error); }

.card {
  background: var(--semantic-color-background-tertiary);
  border: 1px solid var(--semantic-color-border-default);
}

.input:focus {
  border-color: var(--semantic-color-border-focus);
}`}
        />
      </Section>
    </div>
  );
};
