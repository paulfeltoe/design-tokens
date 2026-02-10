import React from 'react';
import { Box, Text, Stack } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Stack',
};

const Placeholder = ({ label, height = 40 }) => (
  <Box
    padding="3"
    paddingX="4"
    background="primary.100"
    borderRadius="sm"
    style={{ height, display: 'flex', alignItems: 'center' }}
  >
    <Text as="span" size="xs" color="primary.700" family="mono">{label || 'Item'}</Text>
  </Box>
);

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Stack"
      description="Vertical flex layout primitive. Arranges children in a column with consistent gap spacing from the spacing token scale. Use Stack for any vertical list: form fields, card content, sidebar navigation, page sections."
    />

    <Tip>
      Stack is a convenience over <code>{'<Box display="flex">'}</code> with <code>flexDirection: column</code>.
      Use it whenever you need vertical rhythm. For the full Box API (shadows, sizing, etc.), wrap Stack inside a Box.
    </Tip>

    <UsageTable
      rows={[
        ['gap="4"', 'Spacing token "4" → 16px between each child'],
        ['align="center"', 'Center-align children horizontally'],
        ['justify="space-between"', 'Spread children vertically'],
        ['padding="6"', 'Add padding inside the stack'],
        ['as="section"', 'Render as a <section> element'],
      ]}
    />

    <Section title="Gap scale">
      <Box style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {['1', '2', '4', '6', '8'].map((g) => (
          <Box key={g}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
              gap="{g}"
            </Text>
            <Stack gap={g} padding="3" background="gray.50" borderRadius="sm" style={{ width: 100 }}>
              <Box background="primary.400" borderRadius="sm" style={{ height: 20 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 20 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 20 }} />
            </Stack>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Alignment">
      <Box style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {['flex-start', 'center', 'flex-end', 'stretch'].map((a) => (
          <Box key={a}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
              align="{a}"
            </Text>
            <Stack gap="2" align={a} padding="3" background="gray.50" borderRadius="sm" style={{ width: 140, minHeight: 120 }}>
              <Box background="primary.400" borderRadius="sm" style={{ height: 20, width: 60 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 20, width: 100 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 20, width: 40 }} />
            </Stack>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Real-world: form layout">
      <CodeBlock code={`<Stack gap="4">
  <Stack gap="1">
    <Text as="label" size="sm" weight="medium">Email</Text>
    <Box as="input" padding="3" borderWidth="thin" borderStyle="solid"
         borderColor="gray.300" borderRadius="base" />
  </Stack>
  <Stack gap="1">
    <Text as="label" size="sm" weight="medium">Password</Text>
    <Box as="input" padding="3" borderWidth="thin" borderStyle="solid"
         borderColor="gray.300" borderRadius="base" />
  </Stack>
</Stack>`} />
      <Box style={{ maxWidth: 320 }}>
        <Stack gap="4">
          <Stack gap="1">
            <Text as="label" size="sm" weight="medium">Email</Text>
            <Box
              as="input"
              padding="3"
              borderWidth="thin"
              borderStyle="solid"
              borderColor="gray.300"
              borderRadius="base"
              style={{ fontSize: 14, outline: 'none' }}
            />
          </Stack>
          <Stack gap="1">
            <Text as="label" size="sm" weight="medium">Password</Text>
            <Box
              as="input"
              padding="3"
              borderWidth="thin"
              borderStyle="solid"
              borderColor="gray.300"
              borderRadius="base"
              style={{ fontSize: 14, outline: 'none' }}
            />
          </Stack>
        </Stack>
      </Box>
    </Section>
  </Box>
);
