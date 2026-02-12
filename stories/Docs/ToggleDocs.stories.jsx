import React from 'react';
import { Toggle } from '../../src/components';
import { PageHeader, Section, Tip, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/Toggle',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Toggle"
        description="A switch for binary on/off settings. The effect should be immediate — no form submission required."
      />

      <Section title="When to use Toggle">
        <Guidelines
          doItems={[
            'Binary on/off settings (e.g. "Enable notifications")',
            'Preferences that take effect immediately',
            'Settings lists with multiple independent switches',
          ]}
          dontItems={[
            'Opt-in checkboxes in forms — use Checkbox instead',
            'Choosing between two named options — use RadioGroup instead',
            'Actions that require confirmation or submission',
          ]}
        />
      </Section>

      <Section title="States">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 16 }}>
          <Toggle label="Off" checked={false} onChange={() => {}} />
          <Toggle label="On" checked onChange={() => {}} />
          <Toggle label="Disabled off" disabled checked={false} onChange={() => {}} />
          <Toggle label="Disabled on" disabled checked onChange={() => {}} />
        </div>
      </Section>

      <Section title="Settings list pattern">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 16 }}>
          <Toggle label="Daily reminders" checked onChange={() => {}} />
          <Toggle label="Push notifications" checked onChange={() => {}} />
          <Toggle label="Dark mode" checked={false} onChange={() => {}} />
        </div>
        <Tip>In a settings list, stack toggles vertically with 16px gap. The label appears to the left, the switch to the right.</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Toggle } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`<Toggle
  label="Enable notifications"
  checked={enabled}
  onChange={setEnabled}
/>

<Toggle label="Dark mode" disabled checked={false} onChange={() => {}} />`}
        />
      </Section>
    </div>
  ),
};
