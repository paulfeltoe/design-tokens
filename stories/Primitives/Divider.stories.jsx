import React from 'react';
import { Box, Text, Stack, Inline } from '../../src/primitives';
import { Divider } from '../../src/primitives/Divider';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Divider',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Divider"
      description="A visual separator for breaking content into sections. Supports horizontal and vertical orientations, and maps directly to border color and width tokens."
    />

    <Tip>
      Use Divider between logical groups of content — between form sections, list items,
      or sidebar navigation groups. Prefer semantic spacing (Stack with gap) over dividers when
      whitespace alone is enough to separate content.
    </Tip>

    <UsageTable
      rows={[
        ['orientation="horizontal"', 'Default — full-width horizontal line'],
        ['orientation="vertical"', 'Vertical separator (parent must be flex)'],
        ['color="border.strong"', 'Stronger visual weight'],
        ['width="medium"', 'Thicker line (2px)'],
        ['spacing="4"', 'Adds 16px margin above and below (or left/right for vertical)'],
      ]}
    />

    <Section title="Horizontal (default)">
      <CodeBlock code={`<Stack gap="4">
  <Text>Section one content</Text>
  <Divider />
  <Text>Section two content</Text>
</Stack>`} />
      <Stack gap="4" padding="4" background="white" borderRadius="base">
        <Text color="text.primary">Section one content</Text>
        <Divider />
        <Text color="text.primary">Section two content</Text>
      </Stack>
    </Section>

    <Section title="With spacing">
      <Stack padding="4" background="white" borderRadius="base">
        <Text color="text.primary">Above the divider</Text>
        <Divider spacing="4" />
        <Text color="text.primary">Below the divider — 16px gap on each side</Text>
      </Stack>
    </Section>

    <Section title="Color & width variants">
      <Stack gap="6" padding="4" background="white" borderRadius="base">
        <Box>
          <Text as="span" size="xs" color="gray.500" family="mono">border.default + thin</Text>
          <Divider spacing="2" />
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.500" family="mono">border.strong + medium</Text>
          <Divider color="border.strong" width="medium" spacing="2" />
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.500" family="mono">primary.300 + thick</Text>
          <Divider color="primary.300" width="thick" spacing="2" />
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.500" family="mono">error.500 + thin</Text>
          <Divider color="error.500" spacing="2" />
        </Box>
      </Stack>
    </Section>

    <Section title="Vertical orientation">
      <CodeBlock code={`<Inline gap="4" align="stretch">
  <Text>Left</Text>
  <Divider orientation="vertical" />
  <Text>Right</Text>
</Inline>`} />
      <Inline gap="4" align="stretch" padding="4" background="white" borderRadius="base">
        <Text color="text.primary">Left content</Text>
        <Divider orientation="vertical" />
        <Text color="text.primary">Right content</Text>
      </Inline>
    </Section>

    <Section title="Real-world: card with sections">
      <Box padding="6" background="white" borderRadius="base" shadow="sm" style={{ maxWidth: 400 }}>
        <Text as="h3" variant="heading.h4" color="text.primary">Account settings</Text>
        <Text size="sm" color="text.secondary">Manage your preferences</Text>
        <Divider spacing="4" />
        <Stack gap="2">
          <Text size="sm" color="text.primary" weight="medium">Email</Text>
          <Text size="sm" color="text.secondary">user@example.com</Text>
        </Stack>
        <Divider spacing="4" />
        <Stack gap="2">
          <Text size="sm" color="text.primary" weight="medium">Language</Text>
          <Text size="sm" color="text.secondary">English (US)</Text>
        </Stack>
      </Box>
    </Section>
  </Box>
);
