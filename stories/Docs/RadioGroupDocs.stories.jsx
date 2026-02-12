import React from 'react';
import { RadioGroup } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/RadioGroup',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

const yesNoOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const frequencyOptions = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'A few times a week' },
  { value: 'monthly', label: 'A few times a month' },
  { value: 'rarely', label: 'Rarely' },
];

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="RadioGroup"
        description="Single selection from a list of options. Use when the user must pick exactly one item from 2-5 choices."
      />

      <Section title="When to use RadioGroup">
        <Guidelines
          doItems={[
            'Single selection from 2-5 mutually exclusive options',
            'Yes/No questions in forms and surveys',
            'Rating scales (horizontal layout)',
          ]}
          dontItems={[
            'Multi-select — use Checkbox instead',
            'More than 5 options — use a dropdown or list',
            'Binary on/off — use Toggle for settings',
            'Compact inline selection — use Chip instead',
          ]}
        />
      </Section>

      <Section title="Vertical layout (default)">
        <div style={{ marginBottom: 16 }}>
          <RadioGroup
            label="Do you have a primary care physician?"
            name="demo-vertical"
            options={yesNoOptions}
            value="yes"
            onChange={() => {}}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <RadioGroup
            label="How often do you exercise?"
            name="demo-frequency"
            options={frequencyOptions}
            value="weekly"
            onChange={() => {}}
          />
        </div>
        <Tip>Use vertical layout for options with longer labels or more than 3 choices.</Tip>
      </Section>

      <Section title="Horizontal layout">
        <div style={{ marginBottom: 16 }}>
          <RadioGroup
            label="How would you rate your overall health?"
            name="demo-horizontal"
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
        <Tip>Use horizontal layout only for short labels like numbers or single words.</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { RadioGroup } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`<RadioGroup
  label="Do you have a primary care physician?"
  name="physician"
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ]}
  value={selected}
  onChange={setSelected}
/>

{/* Horizontal rating */}
<RadioGroup
  label="Rate your health"
  direction="horizontal"
  options={[1, 2, 3, 4, 5].map(n => ({ value: String(n), label: String(n) }))}
  value={rating}
  onChange={setRating}
/>`}
        />
      </Section>
    </div>
  ),
};
