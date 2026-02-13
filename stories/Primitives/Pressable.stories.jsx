import React from 'react';
import { Pressable, Box, Text, Stack, Inline } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Pressable',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Pressable"
      description="A button-like interactive primitive with all default button styles reset. Use as the foundation for custom buttons, icon buttons, and any pressable element."
    />

    <Tip>
      Pressable renders a <code>&lt;button&gt;</code> with <code>type="button"</code> by default, preventing accidental form submissions. Use the <code>as</code> prop for other elements.
    </Tip>

    <UsageTable
      rows={[
        ['(default)', 'Transparent button with reset styles'],
        ['padding="3" paddingX="5"', 'Add spacing with tokens'],
        ['background="primary.500"', 'Colored pressable'],
        ['borderRadius="base"', 'Rounded pressable'],
        ['disabled', 'Disabled state (50% opacity, not-allowed cursor)'],
      ]}
    />

    <Section title="Basic pressable">
      <CodeBlock code={`<Pressable
  paddingX="5" paddingY="2"
  background="primary.500"
  color="white"
  borderRadius="base"
  onClick={() => alert('Pressed!')}
>
  Press me
</Pressable>`} />
      <Inline gap="3">
        <Pressable
          paddingX="5" paddingY="2"
          background="primary.500"
          color="white"
          borderRadius="base"
          onClick={() => {}}
        >
          <Text as="span" size="sm" color="white" weight="medium">Press me</Text>
        </Pressable>
        <Pressable
          paddingX="5" paddingY="2"
          background="gray.900"
          color="white"
          borderRadius="base"
          onClick={() => {}}
        >
          <Text as="span" size="sm" color="white" weight="medium">Dark button</Text>
        </Pressable>
      </Inline>
    </Section>

    <Section title="Disabled state">
      <Inline gap="3">
        <Pressable
          paddingX="5" paddingY="2"
          background="primary.500"
          color="white"
          borderRadius="base"
          disabled
        >
          <Text as="span" size="sm" color="white" weight="medium">Disabled</Text>
        </Pressable>
        <Pressable
          paddingX="5" paddingY="2"
          background="gray.200"
          borderRadius="base"
          disabled
        >
          <Text as="span" size="sm" color="gray.500" weight="medium">Disabled</Text>
        </Pressable>
      </Inline>
    </Section>

    <Section title="Icon-style pressable">
      <Inline gap="3" align="center">
        <Pressable
          padding="2"
          borderRadius="full"
          onClick={() => {}}
        >
          <Text as="span" size="lg">+</Text>
        </Pressable>
        <Pressable
          padding="2"
          background="gray.100"
          borderRadius="full"
          onClick={() => {}}
        >
          <Text as="span" size="lg">x</Text>
        </Pressable>
      </Inline>
    </Section>
  </Box>
);
