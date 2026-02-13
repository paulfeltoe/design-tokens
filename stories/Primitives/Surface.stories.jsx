import React from 'react';
import { Surface, Box, Text, Stack } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Surface',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Surface"
      description="A themed container primitive with background, border, shadow, and padding. The semantic layer for 'this is a content surface' — use it for content areas, panels, and any container that needs a visible background or elevation."
    />

    <Tip>
      Surface is the base abstraction for visual containers. Card and Panel are more opinionated versions. Reach for Surface when you need custom combinations.
    </Tip>

    <UsageTable
      rows={[
        ['(default)', 'White background with base border radius'],
        ['shadow="md"', 'Elevated surface with medium shadow'],
        ['borderWidth="thin"', 'Surface with visible border'],
        ['background="gray.50"', 'Tinted surface background'],
        ['padding="6"', 'Add inner spacing'],
      ]}
    />

    <Section title="Basic surfaces">
      <Stack gap="4">
        <Surface padding="4">
          <Text size="sm" color="gray.600">Plain surface (white bg, base radius)</Text>
        </Surface>
        <Surface padding="4" shadow="md">
          <Text size="sm" color="gray.600">Elevated surface (medium shadow)</Text>
        </Surface>
        <Surface padding="4" borderWidth="thin">
          <Text size="sm" color="gray.600">Bordered surface (thin gray border)</Text>
        </Surface>
        <Surface padding="4" shadow="sm" borderWidth="thin">
          <Text size="sm" color="gray.600">Bordered + elevated surface</Text>
        </Surface>
      </Stack>
    </Section>

    <Section title="Custom backgrounds">
      <Stack gap="4">
        <Surface padding="4" background="gray.50">
          <Text size="sm" color="gray.600">Subtle gray background</Text>
        </Surface>
        <Surface padding="4" background="primary.50" borderWidth="thin" borderColor="primary.200">
          <Text size="sm" color="primary.700">Primary tinted surface</Text>
        </Surface>
        <Surface padding="4" background="success.50" borderWidth="thin" borderColor="success.200">
          <Text size="sm" color="success.700">Success tinted surface</Text>
        </Surface>
      </Stack>
    </Section>

    <Section title="Nested surfaces">
      <CodeBlock code={`<Surface padding="6" background="gray.50">
  <Surface padding="4" shadow="sm">
    Nested content area
  </Surface>
</Surface>`} />
      <Surface padding="6" background="gray.50">
        <Surface padding="4" shadow="sm">
          <Text size="sm" color="gray.700">Nested content on a raised surface</Text>
        </Surface>
      </Surface>
    </Section>
  </Box>
);
