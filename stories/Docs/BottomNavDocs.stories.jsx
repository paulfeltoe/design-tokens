import React from 'react';
import { BottomNav } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/BottomNav',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

const demoItems = [
  { id: 'today', label: 'Today', icon: '\u2302' },
  { id: 'services', label: 'Services', icon: '\u2726' },
  { id: 'move', label: 'Move', icon: '\u2665' },
  { id: 'mind', label: 'Mind', icon: '\u263A' },
  { id: 'browse', label: 'Browse', icon: '\u2630' },
];

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="BottomNav"
        description="Primary app navigation tab bar. Fixed at the bottom of the viewport. Use for top-level sections of the app."
      />

      <Section title="When to use BottomNav">
        <Guidelines
          doItems={[
            'Top-level app navigation between 3-5 sections',
            'Always visible at the bottom of the viewport',
            'One active tab at a time',
          ]}
          dontItems={[
            'More than 5 tabs — simplify your navigation',
            'Fewer than 3 tabs — consider a different pattern',
            'Secondary or contextual navigation — use ListItem instead',
            'Inside modals or bottom sheets',
          ]}
        />
      </Section>

      <Section title="Anatomy">
        <div style={{ position: 'relative', height: 80, border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
          <BottomNav items={demoItems} activeItem="today" onChange={() => {}} />
        </div>
        <Tip>Each tab has an icon and a label. The active tab is visually highlighted. Keep labels to one word when possible.</Tip>
      </Section>

      <Section title="Visual rules">
        <Warning>
          BottomNav is always <strong>fixed to the bottom of the viewport</strong>.
          It should never scroll with the page. Use <code>position: fixed</code> in your layout.
          When a StickyFooter is also present, the BottomNav sits below it.
        </Warning>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { BottomNav } from '../components';`}
        />
        <CodeBlock
          label="Example"
          code={`<BottomNav
  items={[
    { id: 'today', label: 'Today', icon: '⌂' },
    { id: 'services', label: 'Services', icon: '✦' },
    { id: 'move', label: 'Move', icon: '♥' },
    { id: 'mind', label: 'Mind', icon: '☺' },
    { id: 'browse', label: 'Browse', icon: '☰' },
  ]}
  activeItem={currentTab}
  onChange={setCurrentTab}
/>`}
        />
      </Section>
    </div>
  ),
};
