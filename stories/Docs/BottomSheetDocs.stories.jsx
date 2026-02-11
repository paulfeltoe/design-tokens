import React from 'react';
import { BottomSheet, Button, ListItem } from '../../src/components';
import { PageHeader, Section, Tip, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Docs/BottomSheet',
  parameters: { layout: 'fullscreen' },
};

export const AllVariants = {
  render: () => (
    <div style={{ padding: 32, maxWidth: 720 }}>
      <PageHeader
        title="BottomSheet"
        description="A modal overlay that slides up from the bottom of the viewport. Used for focused tasks like selections, forms, or confirmations. Includes an optional header with back/close buttons."
      />

      <Section title="With Close Button" description="The most common pattern: a title and close action.">
        <div style={{ height: 400, position: 'relative', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
          <BottomSheet open title="Select a Provider" onClose={() => {}}>
            <p style={{ margin: 0, color: '#636362', fontSize: 14 }}>Content area with scrollable options.</p>
          </BottomSheet>
        </div>
      </Section>

      <Section title="With Back and Close" description="Use when the sheet has navigation depth (e.g., multi-step flows).">
        <div style={{ height: 400, position: 'relative', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
          <BottomSheet open title="Choose Time" onBack={() => {}} onClose={() => {}}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Button variant="timeSlot" selected>9:00 AM</Button>
              <Button variant="timeSlot">9:30 AM</Button>
              <Button variant="timeSlot">10:00 AM</Button>
              <Button variant="timeSlot">10:30 AM</Button>
            </div>
          </BottomSheet>
        </div>
      </Section>

      <Section title="With List Content" description="Sheets work well with ListItem components for selection interfaces.">
        <div style={{ height: 500, position: 'relative', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
          <BottomSheet open title="Health Topics" onClose={() => {}}>
            <div style={{ background: 'white', borderRadius: 8, overflow: 'hidden' }}>
              <ListItem title="Anxiety" subtitle="Learn coping strategies" showChevron onClick={() => {}} />
              <ListItem title="Depression" subtitle="Understanding and treatment" showChevron onClick={() => {}} />
              <ListItem title="Insomnia" subtitle="Improve your sleep" showChevron onClick={() => {}} />
              <ListItem title="Stress" subtitle="Daily stress management" showChevron onClick={() => {}} showDivider={false} />
            </div>
          </BottomSheet>
        </div>
      </Section>

      <Tip>The BottomSheet uses a semi-transparent overlay. The <code>open</code> prop controls visibility. Content area scrolls independently.</Tip>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { BottomSheet } from '../components';`}
        />
        <CodeBlock
          label="Basic"
          code={`<BottomSheet open={isOpen} title="Select a Provider" onClose={handleClose}>
  <ProviderList />
</BottomSheet>`}
        />
      </Section>
    </div>
  ),
};
