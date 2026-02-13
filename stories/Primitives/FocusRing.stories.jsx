import React from 'react';
import { FocusRing, Pressable, Box, Text, Stack, Inline } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/FocusRing',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="FocusRing"
      description="A focus indicator wrapper that renders a visible outline when its children receive focus. Uses React state since inline styles cannot express :focus-visible."
    />

    <Tip>
      Tab into the examples below to see the focus ring appear. FocusRing wraps its children and tracks focus/blur events.
    </Tip>

    <UsageTable
      rows={[
        ['(default)', 'Primary blue ring with medium width'],
        ['color="error.500"', 'Custom ring color'],
        ['width="thick"', 'Thicker ring'],
        ['offset="3"', 'Larger offset from element'],
        ['borderRadius="full"', 'Rounded ring shape'],
      ]}
    />

    <Section title="Basic usage">
      <CodeBlock code={`<FocusRing>
  <Pressable paddingX="5" paddingY="2" background="primary.500" borderRadius="base">
    Focus me
  </Pressable>
</FocusRing>`} />
      <Inline gap="4">
        <FocusRing borderRadius="base">
          <Pressable paddingX="5" paddingY="2" background="primary.500" borderRadius="base">
            <Text as="span" size="sm" color="white" weight="medium">Tab to focus</Text>
          </Pressable>
        </FocusRing>
        <FocusRing borderRadius="base">
          <Pressable paddingX="5" paddingY="2" background="gray.900" borderRadius="base">
            <Text as="span" size="sm" color="white" weight="medium">Another button</Text>
          </Pressable>
        </FocusRing>
      </Inline>
    </Section>

    <Section title="Custom colors">
      <Inline gap="4">
        <FocusRing color="error.500" borderRadius="base">
          <Pressable paddingX="4" paddingY="2" background="error.50" borderRadius="base">
            <Text as="span" size="sm" color="error.700" weight="medium">Error ring</Text>
          </Pressable>
        </FocusRing>
        <FocusRing color="success.500" borderRadius="base">
          <Pressable paddingX="4" paddingY="2" background="success.50" borderRadius="base">
            <Text as="span" size="sm" color="success.700" weight="medium">Success ring</Text>
          </Pressable>
        </FocusRing>
      </Inline>
    </Section>

    <Section title="Ring around input">
      <FocusRing borderRadius="base" width="medium" offset="1">
        <input
          type="text"
          placeholder="Focus this input"
          style={{
            padding: '8px 12px', borderRadius: 8,
            border: '1px solid #d4d4d4', fontSize: 14,
            outline: 'none',
          }}
        />
      </FocusRing>
    </Section>
  </Box>
);
