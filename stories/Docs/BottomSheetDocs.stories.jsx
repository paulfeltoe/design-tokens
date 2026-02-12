import React from 'react';
import { BottomSheet, Button, ListItem } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/BottomSheet',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ padding: 32, maxWidth: 720 }}>
      <PageHeader
        title="BottomSheet"
        description="A modal overlay that slides up from the bottom of the viewport. Used for focused tasks like selections, forms, or confirmations. Includes a 65px header with optional back/close buttons."
      />

      <Section title="When to use a Bottom Sheet">
        <Guidelines
          doItems={[
            'Quick selections (date, time, provider)',
            'Temporary overlays that don\'t need full screen',
            'Forms that are short enough to not scroll much',
            'Contextual actions triggered from a page',
            'Secondary flows within a primary flow',
          ]}
          dontItems={[
            'Multi-step flows (use full page instead)',
            'Complex forms that need full focus',
            'Primary app content',
            'When the user needs the context behind the sheet',
          ]}
        />
      </Section>

      <Section title="With Close Button" description="The most common pattern: a title and close action. Use for standalone modals.">
        <div style={{ height: 400, position: 'relative', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
          <BottomSheet open title="Select a Provider" onClose={() => {}}>
            <p style={{ margin: 0, color: '#636362', fontSize: 14 }}>Content area with scrollable options.</p>
          </BottomSheet>
        </div>
      </Section>

      <Section title="With Back and Close" description="Use when the sheet has navigation depth (e.g., drill-down within a selection flow).">
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
        <Tip>Use back + close when the user can navigate deeper within the sheet. Use close-only for single-level overlays.</Tip>
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

      <Section title="Structure">
        <Warning>
          Bottom sheets always have: white background, rounded top corners (8px), 65px header height, and a semi-transparent overlay behind.
          The content area uses the Smoke (#F4F4F4) background with 24px padding. The header uses white background with a bottom border.
        </Warning>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { BottomSheet } from '../components';`}
        />
        <CodeBlock
          label="Basic"
          code={`<BottomSheet open={isOpen} title="Select a Provider" onClose={handleClose}>
  <ProviderList />
</BottomSheet>

// With back navigation
<BottomSheet open={isOpen} title="Choose Time" onBack={goBack} onClose={handleClose}>
  <TimeSlotGrid />
</BottomSheet>`}
        />
      </Section>
    </div>
  ),
};
