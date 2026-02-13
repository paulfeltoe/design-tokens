import React from 'react';
import { Flex, Box, Text } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Flex',
};

const DemoBox = ({ children, color = 'primary.500' }) => (
  <Box padding="3" background={color} borderRadius="sm">
    <Text as="span" size="xs" color="white" family="mono">{children}</Text>
  </Box>
);

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Flex"
      description="A general-purpose flex layout primitive with configurable direction. Use Flex when you need full flex control; use Stack or Inline for opinionated vertical or horizontal layouts."
    />

    <Tip>
      Flex is the escape hatch when Stack (vertical) or Inline (horizontal) feel too opinionated. It exposes direction, wrap, and flex as first-class props.
    </Tip>

    <UsageTable
      rows={[
        ['direction="column"', 'Vertical layout (same as Stack)'],
        ['direction="row"', 'Horizontal layout (same as Inline, and the default)'],
        ['wrap', 'Allow children to wrap to new lines'],
        ['flex="1"', 'Fill remaining space in a parent flex container'],
        ['gap="4"', 'Spacing token "4" → 16px between children'],
      ]}
    />

    <Section title="Direction variants">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {['row', 'column', 'row-reverse', 'column-reverse'].map((dir) => (
          <Box key={dir}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ marginBottom: 4, display: 'block' }}>
              direction="{dir}"
            </Text>
            <Flex direction={dir} gap="3" padding="3" background="gray.50" borderRadius="base">
              <DemoBox>1</DemoBox>
              <DemoBox>2</DemoBox>
              <DemoBox>3</DemoBox>
            </Flex>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Wrapping">
      <CodeBlock code={`<Flex gap="3" wrap>
  {items.map(item => <DemoBox key={item}>{item}</DemoBox>)}
</Flex>`} />
      <Flex gap="3" wrap padding="3" background="gray.50" borderRadius="base">
        {Array.from({ length: 12 }, (_, i) => (
          <DemoBox key={i}>{i + 1}</DemoBox>
        ))}
      </Flex>
    </Section>

    <Section title="Alignment">
      <Flex gap="4" direction="row" align="center" justify="space-between" padding="4" background="gray.50" borderRadius="base">
        <DemoBox>Left</DemoBox>
        <DemoBox color="success.500">Center</DemoBox>
        <DemoBox>Right</DemoBox>
      </Flex>
    </Section>

    <Section title="Flex grow">
      <CodeBlock code={`<Flex gap="3">
  <Box>Fixed</Box>
  <Flex flex="1">Grows to fill</Flex>
  <Box>Fixed</Box>
</Flex>`} />
      <Flex gap="3" padding="3" background="gray.50" borderRadius="base">
        <DemoBox>Fixed</DemoBox>
        <Flex flex="1" padding="3" background="info.500" borderRadius="sm" align="center" justify="center">
          <Text as="span" size="xs" color="white" family="mono">flex="1"</Text>
        </Flex>
        <DemoBox>Fixed</DemoBox>
      </Flex>
    </Section>
  </Box>
);
