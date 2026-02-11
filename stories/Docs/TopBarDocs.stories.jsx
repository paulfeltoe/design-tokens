import React from 'react';
import { TopBar } from '../../src/components';
import { PageHeader, Section, Tip, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Docs/TopBar',
  parameters: { layout: 'padded' },
};

export const AllVariants = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="TopBar"
        description="Header bar for pages and modals. Displays a centered title with optional back and close navigation actions. Matches the Figma top bar pattern at 65px height."
      />

      <Section title="Back + Close" description="Full navigation pattern for multi-step modal flows.">
        <div style={{ maxWidth: 375 }}>
          <TopBar title="Select Provider" onBack={() => {}} onClose={() => {}} />
        </div>
      </Section>

      <Section title="Back Only" description="For drill-down navigation within a flow.">
        <div style={{ maxWidth: 375 }}>
          <TopBar title="Appointment Details" onBack={() => {}} />
        </div>
      </Section>

      <Section title="Close Only" description="For standalone modals or sheets.">
        <div style={{ maxWidth: 375 }}>
          <TopBar title="Preferences" onClose={() => {}} />
        </div>
      </Section>

      <Section title="Title Only" description="For top-level pages without navigation.">
        <div style={{ maxWidth: 375 }}>
          <TopBar title="Dashboard" />
        </div>
      </Section>

      <Tip>TopBar uses 48px touch targets for navigation buttons, matching mobile accessibility guidelines. The title is always centered regardless of which actions are present.</Tip>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { TopBar } from '../components';`}
        />
        <CodeBlock
          label="Basic"
          code={`<TopBar title="Health Profile" onBack={goBack} onClose={close} />`}
        />
      </Section>
    </div>
  ),
};
