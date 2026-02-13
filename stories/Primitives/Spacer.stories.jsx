import React from 'react';
import { Spacer, Box, Text, Stack, Inline } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Spacer',
};

const DemoBox = ({ children }) => (
  <Box padding="3" background="primary.500" borderRadius="sm">
    <Text as="span" size="xs" color="white" family="mono">{children}</Text>
  </Box>
);

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Spacer"
      description="An empty spacing primitive that inserts explicit space between elements. Use inside flex or stack layouts, or set grow to fill remaining space."
    />

    <Tip>
      Spacer is purely presentational (aria-hidden) and accepts no children. Use it when you need asymmetric spacing that gap alone can't express.
    </Tip>

    <UsageTable
      rows={[
        ['size="4"', 'Fixed 16px square spacer'],
        ['height="6"', 'Vertical-only 24px spacer'],
        ['width="8"', 'Horizontal-only 32px spacer'],
        ['grow', 'Flex-grow spacer that fills remaining space'],
      ]}
    />

    <Section title="Fixed spacer in a stack">
      <CodeBlock code={`<Stack>
  <DemoBox>Item 1</DemoBox>
  <Spacer height="6" />
  <DemoBox>Item 2</DemoBox>
</Stack>`} />
      <Stack padding="3" background="gray.50" borderRadius="base">
        <DemoBox>Item 1</DemoBox>
        <Box style={{ background: '#dbeafe', height: 24, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Text as="span" size="xs" color="info.600" family="mono">Spacer height="6"</Text>
        </Box>
        <DemoBox>Item 2</DemoBox>
      </Stack>
    </Section>

    <Section title="Grow spacer">
      <CodeBlock code={`<Inline>
  <DemoBox>Left</DemoBox>
  <Spacer grow />
  <DemoBox>Right</DemoBox>
</Inline>`} />
      <Inline padding="3" background="gray.50" borderRadius="base">
        <DemoBox>Left</DemoBox>
        <Spacer grow />
        <DemoBox>Right</DemoBox>
      </Inline>
    </Section>

    <Section title="Spacing scale">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['2', '4', '6', '8', '12'].map((s) => (
          <Inline key={s} align="center" gap="3">
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ minWidth: 60 }}>
              size="{s}"
            </Text>
            <Box background="primary.100" borderRadius="sm" style={{ display: 'inline-flex' }}>
              <Spacer size={s} style={{ background: '#93c5fd', borderRadius: 4 }} />
            </Box>
          </Inline>
        ))}
      </Box>
    </Section>
  </Box>
);
