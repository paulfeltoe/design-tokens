import React from 'react';
import { Box } from '../../src/primitives';
import { Text } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Box',
};

const DemoLabel = ({ children }) => (
  <Text as="span" size="xs" color="gray.500" family="mono">{children}</Text>
);

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Box"
      description="The foundational container primitive. Box is a div (or any HTML element) that maps its props directly to design tokens — spacing, colors, borders, shadows, and sizing. Every other primitive and component is built on top of Box."
    />

    <Tip>
      Box is your go-to for any container that needs token-backed styles. Reach for Stack, Inline, or Grid when you need a specific layout direction.
    </Tip>

    <UsageTable
      rows={[
        ['padding="4"', 'Spacing token "4" → 16px on all sides'],
        ['paddingX="6" paddingY="3"', 'Horizontal 24px, vertical 12px'],
        ['background="primary.50"', 'Light blue background from color scale'],
        ['borderRadius="base"', 'Default 8px rounded corners'],
        ['shadow="md"', 'Medium elevation shadow'],
        ['as="section"', 'Render as a <section> element'],
      ]}
    />

    <Section title="Basic usage">
      <CodeBlock code={`<Box padding="6" background="gray.50" borderRadius="base">
  <Text>Content inside a box</Text>
</Box>`} />
      <Box padding="6" background="gray.50" borderRadius="base">
        <Text color="gray.700">Content inside a box</Text>
      </Box>
    </Section>

    <Section title="Spacing">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {['1', '2', '3', '4', '6', '8'].map((key) => (
          <Box key={key} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <DemoLabel>padding="{key}"</DemoLabel>
            <Box padding={key} background="primary.100" borderRadius="sm">
              <Box background="primary.500" borderRadius="sm" style={{ height: 20, width: 60 }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Colors">
      <Box style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['primary.500', 'success.500', 'warning.500', 'error.500', 'info.500', 'gray.900'].map((c) => (
          <Box
            key={c}
            padding="4"
            background={c}
            borderRadius="base"
            style={{ minWidth: 100, textAlign: 'center' }}
          >
            <Text as="span" size="xs" color="white" family="mono">{c}</Text>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Borders & shadows">
      <Box style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Box padding="4" borderWidth="thin" borderStyle="solid" borderColor="gray.200" borderRadius="base">
          <DemoLabel>thin border</DemoLabel>
        </Box>
        <Box padding="4" borderWidth="medium" borderStyle="solid" borderColor="primary.500" borderRadius="base">
          <DemoLabel>medium border</DemoLabel>
        </Box>
        <Box padding="4" shadow="md" borderRadius="base" background="white">
          <DemoLabel>shadow="md"</DemoLabel>
        </Box>
        <Box padding="4" shadow="xl" borderRadius="lg" background="white">
          <DemoLabel>shadow="xl"</DemoLabel>
        </Box>
      </Box>
    </Section>

    <Section title="Border radius">
      <Box style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        {['none', 'sm', 'base', 'md', 'lg', 'xl', 'full'].map((r) => (
          <Box key={r} style={{ textAlign: 'center' }}>
            <Box background="primary.500" borderRadius={r} style={{ width: 48, height: 48 }} />
            <Text as="span" size="xs" color="gray.500" family="mono">{r}</Text>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Polymorphic rendering">
      <CodeBlock code={`<Box as="section" padding="6" background="gray.50">
  <Box as="article" padding="4" background="white" borderRadius="base" shadow="sm">
    <Text as="h2" variant="heading.h4">Article title</Text>
    <Text color="gray.600">Article content goes here.</Text>
  </Box>
</Box>`} />
      <Box as="section" padding="6" background="gray.50" borderRadius="base">
        <Box as="article" padding="4" background="white" borderRadius="base" shadow="sm">
          <Text as="h2" variant="heading.h4">Article title</Text>
          <Text color="gray.600" size="sm">Article content goes here.</Text>
        </Box>
      </Box>
    </Section>
  </Box>
);
