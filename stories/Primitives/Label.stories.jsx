import React from 'react';
import { Label, Box, Text, Stack } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Label',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Label"
      description="A form label primitive that renders a <label> element styled with the body.small variant and medium weight. Use for form field labels with optional required indicator."
    />

    <Tip>
      Label pairs naturally with form inputs. Pass <code>htmlFor</code> to associate it with an input's id, and <code>required</code> to show a red asterisk.
    </Tip>

    <UsageTable
      rows={[
        ['htmlFor="email"', 'Associates label with an input by id'],
        ['required', 'Appends a red asterisk (*)'],
        ['weight="bold"', 'Override font weight'],
        ['size="base"', 'Override font size'],
        ['color="text.primary"', 'Custom label color'],
      ]}
    />

    <Section title="Basic usage">
      <CodeBlock code={`<Label htmlFor="email">Email address</Label>
<Label htmlFor="name" required>Full name</Label>`} />
      <Stack gap="4">
        <Stack gap="1">
          <Label htmlFor="demo-email">Email address</Label>
          <input id="demo-email" type="email" placeholder="you@example.com" style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #d4d4d4', fontSize: 14 }} />
        </Stack>
        <Stack gap="1">
          <Label htmlFor="demo-name" required>Full name</Label>
          <input id="demo-name" type="text" placeholder="Jane Doe" style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #d4d4d4', fontSize: 14 }} />
        </Stack>
      </Stack>
    </Section>

    <Section title="Weights">
      <Stack gap="2">
        <Label weight="normal">Normal weight label</Label>
        <Label weight="medium">Medium weight label (default)</Label>
        <Label weight="semibold">Semibold weight label</Label>
        <Label weight="bold">Bold weight label</Label>
      </Stack>
    </Section>

    <Section title="Custom colors">
      <Stack gap="2">
        <Label color="text.primary">Primary color label</Label>
        <Label color="text.secondary">Secondary color label</Label>
        <Label color="error.600">Error color label</Label>
      </Stack>
    </Section>
  </Box>
);
