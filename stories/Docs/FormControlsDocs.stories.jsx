import React from 'react';
import { TextInput, Toggle, RadioGroup, Checkbox, Chip } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/Form Controls',
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Form Controls"
        description="Input components for collecting user data. Choose the right control based on the type of data and number of options."
      />

      <Section title="Which form control should I use?">
        <div style={{ fontSize: 13, lineHeight: 1.8, color: '#525252', marginBottom: 16, fontFamily: 'monospace', background: '#f9f9f9', padding: 16, borderRadius: 6 }}>
          Is it free text entry?<br />
          ├─ YES → <strong>TextInput</strong><br />
          └─ NO → Is it a boolean on/off?<br />
          {'    '}├─ YES → <strong>Toggle</strong><br />
          {'    '}└─ NO → How many options?<br />
          {'    '}{'    '}├─ 2-5 (single select) → <strong>RadioGroup</strong><br />
          {'    '}{'    '}├─ 2-5 (multi-select) → <strong>Checkbox</strong><br />
          {'    '}{'    '}├─ 5-10 (multi-select, inline) → <strong>Chip</strong><br />
          {'    '}{'    '}└─ 5-20 (single select) → Use a select/dropdown
        </div>
      </Section>

      <Section title="TextInput" description="Standard text field with label, placeholder, error, and disabled states.">
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 16 }}>
          <TextInput label="Full Name" placeholder="Enter your name" />
          <TextInput label="Email" placeholder="you@example.com" type="email" />
          <TextInput label="Phone" placeholder="(555) 000-0000" error="Phone number is required" />
          <TextInput label="Notes" placeholder="Disabled field" disabled />
        </div>
        <Guidelines
          doItems={[
            'Free text entry: names, emails, phone numbers, search',
            'Always include a visible label above the input (8px gap)',
            'Use placeholder for format examples, not as a label',
          ]}
          dontItems={[
            'Replacing labels with placeholders (labels must be separate)',
            'Limited option selection (use radio/checkbox/chip instead)',
          ]}
        />
        <Warning>
          Input states: default (Smoke border), focus (Charcoal border), error (red border + error message below with 4px gap), disabled (Smoke background, DimGray text).
          Error messages must be specific and actionable (e.g., "Phone number is required" not "Invalid input").
        </Warning>
      </Section>

      <Section title="Toggle" description="On/off switch for boolean settings.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 16 }}>
          <Toggle label="Push notifications" />
          <Toggle label="Dark mode" checked />
          <Toggle label="Disabled toggle" disabled />
        </div>
        <Guidelines
          doItems={[
            'Binary on/off settings (notifications, preferences)',
            'Settings that take effect immediately',
            'Feature flags or mode switches',
          ]}
          dontItems={[
            'Yes/no questions in forms (use RadioGroup instead)',
            'Multi-select options',
            'Actions that require a save step (confusing UX)',
          ]}
        />
      </Section>

      <Section title="RadioGroup" description="Select one option from a group. Supports vertical and horizontal layouts.">
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', marginBottom: 16 }}>
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
        <Guidelines
          doItems={[
            'Very few options (2-5) where all need to be visible',
            'Single selection from mutually exclusive choices',
            'Yes/no questions, rating scales, frequency selectors',
            'Horizontal layout for scales (1-5), vertical for labeled options',
          ]}
          dontItems={[
            'More than 5-6 options (use select dropdown instead)',
            'Multi-select (use checkboxes or chips)',
          ]}
        />
      </Section>

      <Section title="Checkbox" description="Multi-select for lists of options.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
          <Checkbox label="Anxiety" checked onChange={() => {}} />
          <Checkbox label="Depression" onChange={() => {}} />
          <Checkbox label="Insomnia" checked onChange={() => {}} />
          <Checkbox label="Stress" onChange={() => {}} />
          <Checkbox label="Disabled option" disabled onChange={() => {}} />
        </div>
        <Guidelines
          doItems={[
            'Multiple selections from a list (health conditions, preferences)',
            'Options that need to be visible at all times',
            'Agreement checkboxes (terms, consent)',
          ]}
          dontItems={[
            'Single selection (use RadioGroup instead)',
            'More than 8-10 visible options (use search/filter)',
          ]}
        />
      </Section>

      <Section title="Chip" description="Selectable pills for filtering or tagging. Compact, inline layout.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          <Chip selected>Mental Health</Chip>
          <Chip>Physical Health</Chip>
          <Chip>Nutrition</Chip>
          <Chip>Finance</Chip>
          <Chip disabled>Disabled</Chip>
        </div>
        <Guidelines
          doItems={[
            'Category filters or tag selection',
            'Inline multi-select that needs to be compact',
            'Visual options that benefit from the pill shape',
            'When selected state needs to be clearly visible',
          ]}
          dontItems={[
            'Form fields requiring labels (use checkbox instead)',
            'Long text options (chips should be 1-3 words)',
            'Primary actions (use buttons)',
          ]}
        />
        <Tip>Chips use the <code>selected</code> prop to toggle active state. They work well for horizontal wrap layouts with 8px gap.</Tip>
      </Section>

      <Section title="Form Layout Rules">
        <Warning>
          Spacing between form fields: <strong>16px</strong>. Label above input: <strong>8px gap</strong>.
          Error/helper text below input: <strong>4px gap</strong>. Section header to first field: <strong>24px</strong>.
          All inputs use <strong>12px padding</strong>, <strong>8px border radius</strong>, and Smoke border.
        </Warning>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { TextInput, Toggle, RadioGroup, Checkbox, Chip } from '../components';`}
        />
        <CodeBlock
          label="Form layout"
          code={`<TextInput label="Name" placeholder="Enter name" />
<TextInput label="Email" placeholder="you@example.com" error={emailError} />
<Toggle label="Notifications" checked={on} onChange={setOn} />
<RadioGroup label="Frequency" options={options} value={val} onChange={setVal} />
<Checkbox label="I agree to the terms" checked={agreed} onChange={setAgreed} />`}
        />
      </Section>
    </div>
  ),
};
