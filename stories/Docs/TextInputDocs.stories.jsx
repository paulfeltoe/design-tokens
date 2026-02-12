import React from 'react';
import { TextInput } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/TextInput',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="TextInput"
        description="A labeled text field for collecting free-form user input. Supports multiple HTML input types and inline error messaging."
      />

      <Section title="When to use TextInput">
        <Guidelines
          doItems={[
            'Free-form text entry (names, emails, phone numbers)',
            'Numeric input (age, quantities)',
            'Date entry via native date picker',
            'Password fields',
          ]}
          dontItems={[
            'Choosing from a fixed set of options — use RadioGroup, Checkbox, or Chip',
            'Binary yes/no — use Toggle or RadioGroup',
            'Long-form text — consider a textarea (not included in this system)',
          ]}
        />
      </Section>

      <Section title="Variants">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360, marginBottom: 16 }}>
          <TextInput label="Full name" placeholder="Jane Doe" />
          <TextInput label="Email" type="email" placeholder="jane@example.com" />
          <TextInput label="Email" type="email" error="Please enter a valid email" defaultValue="not-an-email" />
          <TextInput label="Phone" type="tel" placeholder="(555) 123-4567" disabled />
        </div>
      </Section>

      <Section title="Error states">
        <Warning>
          Error messages appear below the input in red. The input border also turns red.
          Always provide a specific, actionable message — not just "Invalid input".
        </Warning>
        <div style={{ maxWidth: 360, marginBottom: 16 }}>
          <TextInput label="Email address" type="email" error="Please enter a valid email address" defaultValue="bad" />
        </div>
      </Section>

      <Section title="Form layout pattern">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360, marginBottom: 16 }}>
          <TextInput label="First name" placeholder="Jane" />
          <TextInput label="Last name" placeholder="Doe" />
          <TextInput label="Email" type="email" placeholder="jane@example.com" />
          <TextInput label="Date of birth" type="date" />
        </div>
        <Tip>Stack inputs vertically with 16px gap. Each input includes its own label — no need for external labels.</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { TextInput } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`<TextInput label="Email" type="email" placeholder="you@example.com" />

<TextInput
  label="Password"
  type="password"
  error={errors.password}
/>

<TextInput label="Date of birth" type="date" disabled={isLocked} />`}
        />
      </Section>
    </div>
  ),
};
