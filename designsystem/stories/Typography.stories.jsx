import React from 'react';
import tokens from '../design-tokens.json';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from './shared/DocBlock';

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

    <UsageTable
      rows={[
        ['font-family-sans', 'Body text, headings, buttons, form controls, and all standard UI'],
        ['font-family-serif', 'Long-form editorial content, blog posts, marketing pages'],
        ['font-family-mono', 'Code snippets, technical values, terminal output'],
      ]}
    />

    {Object.entries(font.family).map(([key, token]) => {
      const stack = token.$value.join(', ');
      return (
        <div key={key} style={{ marginBottom: 24, padding: 16, border: '1px solid #e5e5e5', borderRadius: 8 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373', marginBottom: 8 }}>
            font-family-{key}
          </div>
          <div style={{ fontFamily: stack, fontSize: 20 }}>
            The quick brown fox jumps over the lazy dog
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a3a3a3', marginTop: 8 }}>
            {stack}
          </div>
        </div>
      );
    })}

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

    <UsageTable
      rows={[
        ['font-size-xs (12px)', 'Timestamps, fine print, badge labels'],
        ['font-size-sm (14px)', 'Captions, labels, secondary text'],
        ['font-size-base (16px)', 'Default body text'],
        ['font-size-lg ... font-size-xl', 'Lead paragraphs, sub-headings'],
        ['font-size-2xl ... font-size-4xl', 'Section headings (h2 - h4)'],
        ['font-size-5xl ... font-size-7xl', 'Page titles, hero text, marketing headlines'],
      ]}
    />

    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginBottom: 24 }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
          <th style={{ padding: '8px 12px' }}>Token</th>
          <th style={{ padding: '8px 12px' }}>Size</th>
          <th style={{ padding: '8px 12px' }}>Preview</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(font.size).map(([key, token]) => (
          <tr key={key} style={{ borderBottom: '1px solid #f5f5f5' }}>
            <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13 }}>font-size-{key}</td>
            <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13, color: '#737373' }}>{token.$value}</td>
            <td style={{ padding: '8px 12px', fontSize: token.$value }}>Aa</td>
          </tr>
        ))}
      </tbody>
    </table>
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

    {Object.entries(font.weight).map(([key, token]) => (
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
      </div>
    ))}

    <Section title="Common pairings">
      <UsageTable
        rows={[
          ['normal (400)', 'Body text, descriptions, form inputs'],
          ['medium (500)', 'Labels, nav items, subtle emphasis'],
          ['semibold (600)', 'Sub-headings, card titles, table headers'],
          ['bold (700)', 'Page headings, strong emphasis'],
        ]}
      />
    </Section>
  </div>
);

/* ------------------------------------------------------------------ */

export const LineHeights = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Line Heights"
      description="Controls vertical spacing within text blocks. Tighter values for headings, looser values for body text."
    />

    <UsageTable
      rows={[
        ['none (1.0)', 'Single-line display text, icons beside text'],
        ['tight (1.25)', 'Headings, compact card titles'],
        ['snug (1.375)', 'Sub-headings, large text'],
        ['normal (1.5)', 'Default body text (recommended)'],
        ['relaxed (1.625)', 'Long-form reading, editorial content'],
        ['loose (2.0)', 'Spaced-out small text, legal copy'],
      ]}
    />

    {Object.entries(font.lineHeight).map(([key, token]) => (
      <div key={key} style={{ marginBottom: 24, padding: 16, border: '1px solid #e5e5e5', borderRadius: 8 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 8 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 13 }}>lineHeight-{key}</span>
          <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#737373' }}>{token.$value}</span>
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
    ))}
  </div>
);

/* ------------------------------------------------------------------ */

export const LetterSpacing = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Letter Spacing"
      description="Adjust tracking to fine-tune readability at different sizes."
    />

    <UsageTable
      rows={[
        ['tighter (-0.05em)', 'Large display headlines'],
        ['tight (-0.025em)', 'Page headings (h1, h2)'],
        ['normal (0em)', 'Body text, default'],
        ['wide (0.025em)', 'Subtle emphasis on small text'],
        ['wider (0.05em)', 'Small-caps, overline labels'],
        ['widest (0.1em)', 'All-caps labels, category tags'],
      ]}
    />

    {Object.entries(font.letterSpacing).map(([key, token]) => (
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
      </div>
    ))}

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
