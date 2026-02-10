import React from 'react';
import tokens from '../design-tokens.json';
import { PageHeader, Section, Tip, CodeBlock } from './shared/DocBlock';

export default {
  title: 'Design Tokens/Typography',
};

const font = tokens.font;

/* ------------------------------------------------------------------ */

export const FontFamilies = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Font Families"
      description="Three stacks cover every need: sans for UI and body text, serif for editorial content, and mono for code."
    />

    {(() => {
      const usageNotes = {
        'sans': 'Body text, headings, buttons, form controls, and all standard UI',
        'serif': 'Long-form editorial content, blog posts, marketing pages',
        'mono': 'Code snippets, technical values, terminal output',
      };
      return Object.entries(font.family).map(([key, token]) => {
        const stack = token.$value.join(', ');
        return (
          <div key={key} style={{ marginBottom: 24, padding: 16, border: '1px solid #e5e5e5', borderRadius: 8 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373' }}>
                font-family-{key}
              </div>
              {usageNotes[key] && (
                <div style={{ fontSize: 12, color: '#a3a3a3' }}>{usageNotes[key]}</div>
              )}
            </div>
            <div style={{ fontFamily: stack, fontSize: 20 }}>
              The quick brown fox jumps over the lazy dog
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a3a3a3', marginTop: 8 }}>
              {stack}
            </div>
          </div>
        );
      });
    })()}

    <Section title="Usage">
      <CodeBlock
        code={`body { font-family: var(--font-family-sans); }
code { font-family: var(--font-family-mono); }
.editorial { font-family: var(--font-family-serif); }`}
      />
    </Section>
  </div>
);

/* ------------------------------------------------------------------ */

export const FontSizes = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Font Sizes"
      description="A type scale from 12 px to 72 px. Use smaller sizes for captions and metadata, mid-range for body text, and larger sizes for headings and hero text."
    />

    {(() => {
      const usageNotes = {
        'xs': 'Timestamps, fine print, badge labels',
        'sm': 'Captions, labels, secondary text',
        'base': 'Default body text',
        'lg': 'Lead paragraphs, sub-headings',
        'xl': 'Lead paragraphs, sub-headings',
        '2xl': 'Section headings (h2 - h4)',
        '3xl': 'Section headings (h2 - h4)',
        '4xl': 'Section headings (h2 - h4)',
        '5xl': 'Page titles, hero text, marketing headlines',
        '6xl': 'Page titles, hero text, marketing headlines',
        '7xl': 'Page titles, hero text, marketing headlines',
      };
      return (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginBottom: 24 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px' }}>Token</th>
              <th style={{ padding: '8px 12px' }}>Size</th>
              <th style={{ padding: '8px 12px' }}>Preview</th>
              <th style={{ padding: '8px 12px' }}>When to use</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(font.size).map(([key, token]) => (
              <tr key={key} style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13 }}>font-size-{key}</td>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13, color: '#737373' }}>{token.$value}</td>
                <td style={{ padding: '8px 12px', fontSize: token.$value }}>Aa</td>
                <td style={{ padding: '8px 12px', fontSize: 12, color: '#737373' }}>{usageNotes[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    })()}
  </div>
);

/* ------------------------------------------------------------------ */

export const FontWeights = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Font Weights"
      description="Nine weights from thin (100) to black (900). Most UIs only need normal (400), medium (500), semibold (600), and bold (700)."
    />

    <Tip>
      Stick to <strong>2-3 weights</strong> per page to maintain a clean hierarchy. Use normal for body, semibold for sub-headings, and bold for headings.
    </Tip>

    {(() => {
      const usageNotes = {
        'normal': 'Body text, descriptions, form inputs',
        'medium': 'Labels, nav items, subtle emphasis',
        'semibold': 'Sub-headings, card titles, table headers',
        'bold': 'Page headings, strong emphasis',
      };
      return Object.entries(font.weight).map(([key, token]) => (
        <div
          key={key}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            marginBottom: 8,
            padding: '8px 0',
            borderBottom: '1px solid #f5f5f5',
          }}
        >
          <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 200 }}>font-weight-{key}</div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 40 }}>{token.$value}</div>
          <div style={{ fontWeight: token.$value, fontSize: 18 }}>The quick brown fox</div>
          {usageNotes[key] && (
            <div style={{ fontSize: 12, color: '#a3a3a3' }}>{usageNotes[key]}</div>
          )}
        </div>
      ));
    })()}
  </div>
);

/* ------------------------------------------------------------------ */

export const LineHeights = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Line Heights"
      description="Controls vertical spacing within text blocks. Tighter values for headings, looser values for body text."
    />

    {(() => {
      const usageNotes = {
        'none': 'Single-line display text, icons beside text',
        'tight': 'Headings, compact card titles',
        'snug': 'Sub-headings, large text',
        'normal': 'Default body text (recommended)',
        'relaxed': 'Long-form reading, editorial content',
        'loose': 'Spaced-out small text, legal copy',
      };
      return Object.entries(font.lineHeight).map(([key, token]) => (
        <div key={key} style={{ marginBottom: 24, padding: 16, border: '1px solid #e5e5e5', borderRadius: 8 }}>
          <div style={{ display: 'flex', gap: 16, marginBottom: 8, alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'monospace', fontSize: 13 }}>lineHeight-{key}</span>
            <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373' }}>{token.$value}</span>
            {usageNotes[key] && (
              <span style={{ fontSize: 12, color: '#a3a3a3' }}>{usageNotes[key]}</span>
            )}
          </div>
          <div
            style={{
              lineHeight: token.$value,
              fontSize: 14,
              backgroundColor: '#f5f5f5',
              padding: 12,
              borderRadius: 4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam.
          </div>
        </div>
      ));
    })()}
  </div>
);

/* ------------------------------------------------------------------ */

export const LetterSpacing = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Letter Spacing"
      description="Adjust tracking to fine-tune readability at different sizes."
    />

    {(() => {
      const usageNotes = {
        'tighter': 'Large display headlines',
        'tight': 'Page headings (h1, h2)',
        'normal': 'Body text, default',
        'wide': 'Subtle emphasis on small text',
        'wider': 'Small-caps, overline labels',
        'widest': 'All-caps labels, category tags',
      };
      return Object.entries(font.letterSpacing).map(([key, token]) => (
        <div
          key={key}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 8,
            padding: '8px 0',
            borderBottom: '1px solid #f5f5f5',
          }}
        >
          <div style={{ fontFamily: 'monospace', fontSize: 13, minWidth: 220 }}>letterSpacing-{key}</div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', minWidth: 60 }}>{token.$value}</div>
          <div style={{ letterSpacing: token.$value, fontSize: 16 }}>LETTER SPACING</div>
          {usageNotes[key] && (
            <div style={{ fontSize: 12, color: '#a3a3a3' }}>{usageNotes[key]}</div>
          )}
        </div>
      ));
    })()}

    <Section title="Usage">
      <CodeBlock
        code={`h1 {
  font-size: var(--font-size-5xl);
  letter-spacing: var(--font-letterSpacing-tight);
}

.overline {
  font-size: var(--font-size-xs);
  letter-spacing: var(--font-letterSpacing-widest);
  text-transform: uppercase;
}`}
      />
    </Section>
  </div>
);
