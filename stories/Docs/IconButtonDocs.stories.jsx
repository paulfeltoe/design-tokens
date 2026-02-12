import React from 'react';
import { IconButton } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/IconButton',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="IconButton"
        description="Square buttons for icon-only actions. Three visual variants and three sizes. Every IconButton must have an aria-label."
      />

      <Section title="When to use IconButton">
        <Guidelines
          doItems={[
            'Navigation actions in headers (back, close)',
            'Compact toolbar actions (edit, delete, share)',
            'Icon-only actions where text would be redundant',
          ]}
          dontItems={[
            'Actions that need a text label — use Button instead',
            'Primary CTAs — use Button with text',
            'Navigation tabs — use BottomNav instead',
          ]}
        />
      </Section>

      <Section title="Variants">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <IconButton variant="ghost" label="Back">←</IconButton>
            <div style={{ fontSize: 12, color: '#636362', marginTop: 4 }}>Ghost</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton variant="filled" label="Add">+</IconButton>
            <div style={{ fontSize: 12, color: '#636362', marginTop: 4 }}>Filled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton variant="outlined" label="Settings">⚙</IconButton>
            <div style={{ fontSize: 12, color: '#636362', marginTop: 4 }}>Outlined</div>
          </div>
        </div>
        <Guidelines
          doItems={[
            'Ghost: header navigation (back, close), minimal UI',
            'Filled: prominent icon actions, FAB-style buttons',
            'Outlined: secondary icon actions, toolbars',
          ]}
          dontItems={[]}
        />
      </Section>

      <Section title="Sizes">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <IconButton size="sm" label="Small">←</IconButton>
            <div style={{ fontSize: 12, color: '#636362', marginTop: 4 }}>sm</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton size="base" label="Base">←</IconButton>
            <div style={{ fontSize: 12, color: '#636362', marginTop: 4 }}>base</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton size="lg" label="Large">←</IconButton>
            <div style={{ fontSize: 12, color: '#636362', marginTop: 4 }}>lg</div>
          </div>
        </div>
      </Section>

      <Section title="Header pattern">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#fafafa', borderRadius: 8, marginBottom: 16 }}>
          <IconButton variant="ghost" label="Back">←</IconButton>
          <span style={{ fontWeight: 600, fontSize: 16 }}>Page Title</span>
          <IconButton variant="ghost" label="Close">✕</IconButton>
        </div>
        <Tip>This is the most common pattern — ghost variant at base size in a TopBar header.</Tip>
      </Section>

      <Section title="Accessibility">
        <Warning>
          Every IconButton <strong>must</strong> have a <code>label</code> prop (renders as <code>aria-label</code>).
          Since there is no visible text, screen readers rely entirely on this label.
        </Warning>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { IconButton } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`<IconButton variant="ghost" label="Go back" onClick={goBack}>←</IconButton>
<IconButton variant="filled" label="Add item" onClick={addItem}>+</IconButton>
<IconButton variant="outlined" size="sm" label="Edit">✎</IconButton>`}
        />
      </Section>
    </div>
  ),
};
