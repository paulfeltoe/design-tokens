import React from 'react';
import { Checkbox } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/Checkbox',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Checkbox"
        description="A toggle for selecting one or more options from a list. Use checkboxes when users can pick multiple items or need to opt in/out of a single setting."
      />

      <Section title="When to use a Checkbox vs other controls">
        <Guidelines
          doItems={[
            'Multi-select from a list (e.g. "Select your health conditions")',
            'Single opt-in/out (e.g. "I agree to terms")',
            'Settings where multiple can be active simultaneously',
          ]}
          dontItems={[
            'Binary on/off settings — use Toggle instead',
            'Single selection from a group — use RadioGroup instead',
            'Compact filter selections — use Chip instead',
          ]}
        />
      </Section>

      <Section title="States">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 16 }}>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" checked />
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" checked disabled />
        </div>
        <Tip>Disabled checkboxes retain their checked state visually at reduced opacity.</Tip>
      </Section>

      <Section title="Multi-select list pattern">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
          <Checkbox label="Anxiety" checked />
          <Checkbox label="Depression" />
          <Checkbox label="Insomnia" checked />
          <Checkbox label="Chronic pain" />
        </div>
        <Tip>Stack checkboxes vertically with 12px gap. Always provide a clear group label above the list (outside the component).</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Checkbox } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`<Checkbox label="I agree to the terms" checked={agreed} onChange={setAgreed} />

{/* Multi-select list */}
{conditions.map(c => (
  <Checkbox
    key={c.id}
    label={c.name}
    checked={selected.includes(c.id)}
    onChange={() => toggle(c.id)}
  />
))}`}
        />
      </Section>
    </div>
  ),
};
