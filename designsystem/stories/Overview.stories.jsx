import React from 'react';
import tokens from '../design-tokens.json';
import { PageHeader, Section, Tip } from './shared/DocBlock';

export default {
  title: 'Design Tokens/Overview',
};

export const TokenOverview = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Token Overview"
      description="A visual summary of every token category in the system. Click any category in the sidebar for detailed documentation, usage guidance, and code examples."
    />

    <Tip>
      Tokens are the single source of truth for all visual values. Use them everywhere instead of hard-coded values to keep your UI consistent and themeable.
    </Tip>

    {/* Colors */}
    <Section
      title="Colors"
      description="Six color scales (gray, primary, success, warning, error, info) plus semantic tokens for text, backgrounds, borders, and interactive states."
    >
      {['gray', 'primary', 'success', 'warning', 'error', 'info'].map((scale) => (
        <div key={scale} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4, textTransform: 'capitalize' }}>{scale}</div>
          <div style={{ display: 'flex', gap: 2 }}>
            {Object.entries(tokens.color[scale]).map(([shade, token]) => (
              <div
                key={shade}
                style={{
                  width: 36, height: 36,
                  backgroundColor: token.$value, borderRadius: 4,
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
                title={`${scale}-${shade}: ${token.$value}`}
              />
            ))}
          </div>
        </div>
      ))}
    </Section>

    {/* Spacing */}
    <Section
      title="Spacing"
      description="4 px grid system for padding, margin, and gap values. Smaller values group related elements; larger values separate sections."
    >
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, flexWrap: 'wrap' }}>
        {Object.entries(tokens.spacing).map(([key, token]) => {
          const px = parseInt(token.$value, 10);
          return (
            <div key={key} style={{ textAlign: 'center' }}>
              <div style={{ width: 24, height: Math.max(px, 2), backgroundColor: '#3b82f6', borderRadius: 2 }} />
              <div style={{ fontFamily: 'monospace', fontSize: 10, marginTop: 4 }}>{key}</div>
            </div>
          );
        })}
      </div>
    </Section>

    {/* Font Sizes */}
    <Section
      title="Font Sizes"
      description="Type scale from 12 px (xs) to 72 px (7xl). Use smaller sizes for metadata, base for body text, and larger sizes for headings."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {Object.entries(tokens.font.size).map(([key, token]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontFamily: 'monospace', fontSize: 11, minWidth: 80, color: '#737373' }}>{key} ({token.$value})</span>
            <span style={{ fontSize: token.$value }}>Aa</span>
          </div>
        ))}
      </div>
    </Section>

    {/* Border Radius */}
    <Section
      title="Border Radius"
      description="Corner rounding from sharp (none) to fully circular (full). Use base (8 px) as the default for buttons, cards, and inputs."
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        {Object.entries(tokens.border.radius).map(([key, token]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div style={{ width: 48, height: 48, backgroundColor: '#3b82f6', borderRadius: token.$value }} />
            <div style={{ fontFamily: 'monospace', fontSize: 10, marginTop: 4 }}>{key}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* Shadows */}
    <Section
      title="Shadows"
      description="Elevation scale from flat to dramatic. Higher shadows = more visual importance. Increase shadow on hover to signal interactivity."
    >
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {Object.entries(tokens.shadow)
          .filter(([key]) => key !== 'none')
          .map(([key, token]) => {
            const s = token.$value;
            const inset = s.inset ? 'inset ' : '';
            const css = `${inset}${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread} ${s.color}`;
            return (
              <div key={key} style={{ textAlign: 'center' }}>
                <div style={{ width: 64, height: 48, backgroundColor: '#fff', borderRadius: 6, boxShadow: css }} />
                <div style={{ fontFamily: 'monospace', fontSize: 10, marginTop: 8 }}>{key}</div>
              </div>
            );
          })}
      </div>
    </Section>

    {/* Opacity */}
    <Section
      title="Opacity"
      description="Transparency values from 0 (invisible) to 100 (fully opaque). Use for disabled states, overlays, and loading skeletons."
    >
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {Object.entries(tokens.opacity).map(([key, token]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 36, height: 36,
                backgroundColor: '#3b82f6', opacity: token.$value,
                borderRadius: 4, border: '1px solid rgba(0,0,0,0.08)',
              }}
            />
            <div style={{ fontFamily: 'monospace', fontSize: 10, marginTop: 4 }}>{key}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* Z-Index */}
    <Section
      title="Z-Index"
      description="Layering scale for stacking context. Use these instead of arbitrary z-index values to avoid conflicts."
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <tbody>
          {Object.entries(tokens['z-index']).map(([key, token]) => (
            <tr key={key} style={{ borderBottom: '1px solid #f5f5f5' }}>
              <td style={{ padding: '4px 8px', fontFamily: 'monospace' }}>z-index-{key}</td>
              <td style={{ padding: '4px 8px', fontFamily: 'monospace', color: '#737373' }}>{token.$value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>

    {/* Breakpoints */}
    <Section
      title="Breakpoints"
      description="Responsive design thresholds. Design mobile-first and layer on complexity at each breakpoint."
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <tbody>
          {Object.entries(tokens.breakpoint).map(([key, token]) => (
            <tr key={key} style={{ borderBottom: '1px solid #f5f5f5' }}>
              <td style={{ padding: '4px 8px', fontFamily: 'monospace' }}>breakpoint-{key}</td>
              <td style={{ padding: '4px 8px', fontFamily: 'monospace', color: '#737373' }}>{token.$value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  </div>
);
