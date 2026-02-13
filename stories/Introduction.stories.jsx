import React from 'react';
import { PageHeader, Section, Tip, CodeBlock } from './shared/DocBlock';

export default {
  title: 'Introduction',
};

const linkStyle = {
  color: '#2563eb',
  textDecoration: 'none',
  fontWeight: 500,
};

const cardStyle = {
  padding: '16px 20px',
  borderRadius: 8,
  border: '1px solid #e5e5e5',
  marginBottom: 12,
};

export const GettingStarted = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Design System"
      description="Everything you need to build consistent UI: design tokens, layout primitives, and production-ready components. This Storybook is the single source of truth for the design system."
    />

    <Section title="What's inside">
      <div style={cardStyle}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Design Tokens</div>
        <p style={{ fontSize: 14, color: '#525252', margin: 0, lineHeight: 1.6 }}>
          Named values for colors, spacing, typography, borders, shadows, and transitions.
          Tokens are the foundation &mdash; every component and primitive uses them.
          Browse them starting from <strong>Colors</strong> in the sidebar.
        </p>
      </div>
      <div style={cardStyle}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Primitives</div>
        <p style={{ fontSize: 14, color: '#525252', margin: 0, lineHeight: 1.6 }}>
          Low-level building blocks across four categories:
          <strong> Layout</strong> (Box, Flex, Stack, Inline, Grid, Container, Spacer, Divider),
          <strong> Typography</strong> (Text, Heading, Label, Caption, Code),
          <strong> Surface</strong> (Surface, Card, Panel, Overlay, Backdrop), and
          <strong> Interaction</strong> (Pressable, Clickable, FocusRing, Transition, VisuallyHidden).
          Use these to compose layouts without writing custom CSS.
        </p>
      </div>
      <div style={cardStyle}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Components</div>
        <p style={{ fontSize: 14, color: '#525252', margin: 0, lineHeight: 1.6 }}>
          Production UI components like <strong>Button</strong>, <strong>Card</strong>, <strong>TextInput</strong>, <strong>BottomSheet</strong>, and more.
          Each component has an auto-generated <strong>Docs</strong> page (props, controls, examples) and a <strong>Usage Guide</strong> with design guidelines.
        </p>
      </div>
    </Section>

    <Section title="Quick start">
      <CodeBlock
        label="Import a component"
        code={`import { Button, Card, TextInput } from './components';`}
      />
      <CodeBlock
        label="Use tokens as CSS custom properties"
        code={`.my-element {
  color: var(--color-text-primary);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-base);
}`}
      />
      <CodeBlock
        label="Use tokens in JavaScript"
        code={`import tokens from './design-tokens.json';

const primary = tokens.color.primary['600'].$value; // "#2563eb"
const gap     = tokens.spacing['4'].$value;          // "16px"`}
      />
    </Section>

    <Section title="How this Storybook is organized">
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <tbody>
          {[
            ['Design Tokens', 'Token reference pages (Colors, Spacing, Typography, Borders, Shadows, Transitions) with visual previews and copy-ready values'],
            ['Primitives', 'Layout, typography, surface, and interaction building blocks with prop examples'],
            ['Components > Docs', 'Auto-generated API reference: props table, controls, all story variants'],
            ['Components > Usage Guide', 'Design guidelines: when to use each variant, do\'s and don\'ts, pairing patterns'],
            ['Components > Stories', 'Interactive playground and individual variant stories'],
          ].map(([name, desc]) => (
            <tr key={name} style={{ borderBottom: '1px solid #f5f5f5' }}>
              <td style={{ padding: '10px 12px', fontWeight: 600, whiteSpace: 'nowrap' }}>{name}</td>
              <td style={{ padding: '10px 12px', color: '#525252' }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>

    <Section title="Key principles">
      <ul style={{ fontSize: 14, lineHeight: 2, color: '#404040', paddingLeft: 20 }}>
        <li><strong>Tokens first</strong> &mdash; never hard-code colors, spacing, or font values.</li>
        <li><strong>Semantic naming</strong> &mdash; use <code>text-primary</code> not <code>gray-900</code>. Semantic tokens stay correct across themes.</li>
        <li><strong>Composability</strong> &mdash; combine primitives and components to build screens.</li>
        <li><strong>Accessibility</strong> &mdash; color pairings meet WCAG AA contrast ratios.</li>
      </ul>
    </Section>

    <Tip>
      Use the theme switcher in the toolbar above to preview light and dark mode.
      Every token and component supports both themes.
    </Tip>

    <Section title="Source of truth">
      <p style={{ fontSize: 14, color: '#525252', lineHeight: 1.6 }}>
        <code>design-tokens.json</code> is the canonical token file (DTCG format).
        All other files &mdash; <code>v0/globals.css</code>, <code>src/tokens/tokens.js</code>, and this Storybook &mdash; are derived from it.
      </p>
    </Section>
  </div>
);
