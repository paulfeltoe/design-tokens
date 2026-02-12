import React from 'react';
import { TopBar } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/TopBar',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="TopBar"
        description="Header bar for pages and modals. 65px height with centered title and optional back/close navigation actions. Every screen should have a TopBar."
      />

      <Section title="When to use each pattern">
        <Guidelines
          doItems={[
            'Top of every screen and modal',
            'Back button: any screen in a flow, any dismissible modal, multi-step forms',
            'Close button (X): standalone modals, bottom sheets, overlays',
            'Back + Close: multi-step modal flows with navigation depth',
            'Title only: top-level dashboard/home pages',
          ]}
          dontItems={[
            'Close button in flows where back is needed (use back instead)',
            'Dismissing a modal when data would be lost without warning',
            'Custom header heights (always 65px)',
          ]}
        />
      </Section>

      <Section title="Back + Close" description="Full navigation pattern for multi-step modal flows.">
        <div style={{ maxWidth: 375 }}>
          <TopBar title="Select Provider" onBack={() => {}} onClose={() => {}} />
        </div>
      </Section>

      <Section title="Back Only" description="For drill-down navigation within a flow. Back returns to previous screen and saves state if applicable.">
        <div style={{ maxWidth: 375 }}>
          <TopBar title="Appointment Details" onBack={() => {}} />
        </div>
      </Section>

      <Section title="Close Only" description="For standalone modals or sheets that dismiss to the previous context.">
        <div style={{ maxWidth: 375 }}>
          <TopBar title="Preferences" onClose={() => {}} />
        </div>
      </Section>

      <Section title="Title Only" description="For top-level pages without navigation.">
        <div style={{ maxWidth: 375 }}>
          <TopBar title="Dashboard" />
        </div>
      </Section>

      <Section title="Accessibility">
        <Warning>
          Navigation buttons use <strong>48x48px touch targets</strong> (minimum per accessibility rules).
          The title is always centered regardless of which actions are present.
          Back and close buttons have <code>aria-label</code> attributes for screen readers.
        </Warning>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { TopBar } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`// Modal with back and close
<TopBar title="Select Provider" onBack={goBack} onClose={dismiss} />

// Page with back only
<TopBar title="Appointment Details" onBack={goBack} />

// Standalone modal
<TopBar title="Preferences" onClose={close} />`}
        />
      </Section>
    </div>
  ),
};
