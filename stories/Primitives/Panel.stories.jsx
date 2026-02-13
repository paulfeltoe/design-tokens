import React from 'react';
import { Panel, Box, Text, Stack, Divider } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Panel',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Panel"
      description="A bordered section container for sidebars, settings panels, and content grouping. Unlike Surface where border is opt-in, Panel always renders with a visible border."
    />

    <Tip>
      Panel is ideal for grouping related content with a clear visual boundary. Use Card for elevated content and Surface for custom combinations.
    </Tip>

    <UsageTable
      rows={[
        ['(default)', 'White panel with thin gray border and base radius'],
        ['borderColor="primary.200"', 'Custom border color'],
        ['borderWidth="medium"', 'Thicker border'],
        ['background="gray.50"', 'Tinted background'],
        ['padding="6"', 'More spacious padding'],
      ]}
    />

    <Section title="Basic panel">
      <CodeBlock code={`<Panel>
  <Text weight="semibold">Settings</Text>
  <Text size="sm" color="gray.600">Manage your preferences here.</Text>
</Panel>`} />
      <Panel>
        <Text weight="semibold" style={{ marginBottom: 4 }}>Settings</Text>
        <Text size="sm" color="gray.600">Manage your preferences here.</Text>
      </Panel>
    </Section>

    <Section title="Panel with sections">
      <Panel padding="0">
        <Box padding="4" style={{ borderBottom: '1px solid #e5e5e5' }}>
          <Text weight="semibold" size="sm">Account</Text>
        </Box>
        <Box padding="4" style={{ borderBottom: '1px solid #e5e5e5' }}>
          <Text size="sm" color="gray.600">Email: user@example.com</Text>
        </Box>
        <Box padding="4">
          <Text size="sm" color="gray.600">Plan: Pro</Text>
        </Box>
      </Panel>
    </Section>

    <Section title="Custom borders">
      <Stack gap="4">
        <Panel borderColor="primary.300" borderWidth="medium">
          <Text size="sm" color="primary.700">Primary accented panel</Text>
        </Panel>
        <Panel borderColor="warning.300" background="warning.50">
          <Text size="sm" color="warning.700">Warning panel</Text>
        </Panel>
        <Panel borderColor="success.300" background="success.50">
          <Text size="sm" color="success.700">Success panel</Text>
        </Panel>
      </Stack>
    </Section>

    <Section title="Sidebar layout">
      <Box style={{ display: 'flex', gap: 16 }}>
        <Panel style={{ width: 200, flexShrink: 0 }}>
          <Stack gap="2">
            <Text size="sm" weight="semibold">Navigation</Text>
            <Text size="sm" color="gray.600">Dashboard</Text>
            <Text size="sm" color="gray.600">Settings</Text>
            <Text size="sm" color="gray.600">Profile</Text>
          </Stack>
        </Panel>
        <Box style={{ flex: 1 }}>
          <Text size="sm" color="gray.500">Main content area</Text>
        </Box>
      </Box>
    </Section>
  </Box>
);
