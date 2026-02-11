import React from 'react';
import { TextInput, Toggle, RadioGroup, Checkbox, Chip } from '../../src/components';
import { PageHeader, Section, Tip, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Docs/Form Controls',
  parameters: { layout: 'padded' },
};

export const AllVariants = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Form Controls"
        description="Input components for collecting user data. Includes text fields, toggles, radio groups, checkboxes, and chips."
      />

      <Section title="TextInput" description="Standard text field with label and error state.">
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <TextInput label="Full Name" placeholder="Enter your name" />
          <TextInput label="Email" placeholder="you@example.com" type="email" />
          <TextInput label="Phone" placeholder="(555) 000-0000" error="Phone number is required" />
          <TextInput label="Notes" placeholder="Disabled field" disabled />
        </div>
      </Section>

      <Section title="Toggle" description="On/off switch for boolean settings.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Toggle label="Push notifications" />
          <Toggle label="Dark mode" checked />
          <Toggle label="Disabled toggle" disabled />
        </div>
      </Section>

      <Section title="RadioGroup" description="Select one option from a group. Vertical or horizontal layout.">
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          <div>
            <RadioGroup
              label="Frequency"
              name="freq"
              options={[
                { value: 'daily', label: 'Daily' },
                { value: 'weekly', label: 'Weekly' },
                { value: 'monthly', label: 'Monthly' },
              ]}
              value="weekly"
              onChange={() => {}}
            />
          </div>
          <div>
            <RadioGroup
              label="Rating"
              name="rating"
              direction="horizontal"
              options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
                { value: '5', label: '5' },
              ]}
              value="3"
              onChange={() => {}}
            />
          </div>
        </div>
      </Section>

      <Section title="Checkbox" description="Multi-select for lists of options.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Anxiety" checked onChange={() => {}} />
          <Checkbox label="Depression" onChange={() => {}} />
          <Checkbox label="Insomnia" checked onChange={() => {}} />
          <Checkbox label="Stress" onChange={() => {}} />
          <Checkbox label="Disabled option" disabled onChange={() => {}} />
        </div>
      </Section>

      <Section title="Chip" description="Selectable pills for filtering or tagging. Supports selected and disabled states.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Chip selected>Mental Health</Chip>
          <Chip>Physical Health</Chip>
          <Chip>Nutrition</Chip>
          <Chip>Finance</Chip>
          <Chip disabled>Disabled</Chip>
        </div>
        <Tip>Chips use the <code>selected</code> prop to toggle active state and work well for multi-select filter patterns.</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { TextInput, Toggle, RadioGroup, Checkbox, Chip } from '../components';`}
        />
        <CodeBlock
          label="Form layout"
          code={`<TextInput label="Name" placeholder="Enter name" />
<Toggle label="Notifications" checked={on} onChange={setOn} />
<RadioGroup label="Frequency" options={options} value={val} onChange={setVal} />
<Checkbox label="I agree" checked={agreed} onChange={setAgreed} />`}
        />
      </Section>
    </div>
  ),
};
