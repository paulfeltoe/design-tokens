import React from 'react';
import { Card, Box, Text, Stack } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Card',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Card"
      description="A simple card surface primitive with sensible defaults: padding, rounded corners, and a subtle shadow. Use as a general-purpose content container."
    />

    <Tip>
      This is the <strong>layout primitive</strong> Card. For the full-featured Card component with variants, images, and structured content, see Components/Card.
    </Tip>

    <UsageTable
      rows={[
        ['(default)', 'White card with padding, md radius, sm shadow'],
        ['shadow="none"', 'Flat card without shadow'],
        ['shadow="lg"', 'High elevation card'],
        ['borderWidth="thin"', 'Card with visible border'],
        ['padding="6"', 'More spacious card'],
        ['background="gray.50"', 'Tinted card background'],
      ]}
    />

    <Section title="Default card">
      <CodeBlock code={`<Card>
  <Text variant="heading.h4">Card Title</Text>
  <Text color="gray.600">Card content goes here.</Text>
</Card>`} />
      <Card>
        <Text variant="heading.h4" style={{ marginBottom: 4 }}>Card Title</Text>
        <Text size="sm" color="gray.600">Card content goes here with default padding and subtle shadow.</Text>
      </Card>
    </Section>

    <Section title="Shadow variations">
      <Stack gap="4">
        {['none', 'sm', 'base', 'md', 'lg', 'xl'].map((s) => (
          <Card key={s} shadow={s}>
            <Text as="span" size="xs" color="gray.400" family="mono">shadow="{s}"</Text>
          </Card>
        ))}
      </Stack>
    </Section>

    <Section title="Bordered card">
      <Card borderWidth="thin" shadow="none">
        <Text variant="heading.h5" style={{ marginBottom: 4 }}>Outlined Card</Text>
        <Text size="sm" color="gray.600">A flat card with a border instead of shadow.</Text>
      </Card>
    </Section>

    <Section title="Card grid">
      <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {['Item A', 'Item B', 'Item C'].map((item) => (
          <Card key={item} padding="5">
            <Text weight="semibold" size="sm" style={{ marginBottom: 4 }}>{item}</Text>
            <Text size="xs" color="gray.500">Description text for this card.</Text>
          </Card>
        ))}
      </Box>
    </Section>
  </Box>
);
