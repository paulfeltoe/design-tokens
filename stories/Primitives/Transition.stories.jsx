import React, { useState } from 'react';
import { Transition, Box, Text, Stack, Inline } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Transition',
};

/* ------------------------------------------------------------------ */

const HoverDemo = ({ duration, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Transition
      duration={duration}
      property="background, transform"
      style={{
        background: hovered ? '#212020' : '#f5f5f5',
        padding: '12px 16px',
        borderRadius: 8,
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Text as="span" size="sm" color={hovered ? 'white' : 'gray.700'} family="mono">
        {label}
      </Text>
    </Transition>
  );
};

const OpacityDemo = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Stack gap="3">
      <button
        onClick={() => setVisible(!visible)}
        style={{
          padding: '8px 16px', borderRadius: 8, border: '1px solid #d4d4d4',
          background: '#fff', cursor: 'pointer', fontSize: 14, alignSelf: 'flex-start',
        }}
      >
        Toggle visibility
      </button>
      <Transition duration="medium" property="opacity">
        <Box
          padding="4"
          background="primary.100"
          borderRadius="base"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <Text size="sm" color="primary.700">I fade in and out</Text>
        </Box>
      </Transition>
    </Stack>
  );
};

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Transition"
      description="A CSS transition wrapper that resolves duration and easing from design tokens. Wraps children to animate property changes like opacity, background, and transform."
    />

    <Tip>
      Transition only sets the CSS <code>transition</code> property. Combine it with state changes (hover, toggle) to trigger the actual animation.
    </Tip>

    <UsageTable
      rows={[
        ['duration="fast"', '150ms transition'],
        ['duration="base"', '200ms transition (default)'],
        ['duration="slow"', '500ms transition'],
        ['property="opacity"', 'Only animate opacity changes'],
        ['easing="ease-in-out"', 'Custom easing curve'],
        ['delay="fast"', 'Add a 150ms delay before starting'],
      ]}
    />

    <Section title="Duration comparison">
      <Text size="sm" color="gray.500" style={{ marginBottom: 8 }}>Hover each to see the transition speed:</Text>
      <Stack gap="3">
        <HoverDemo duration="fast" label='duration="fast" (150ms)' />
        <HoverDemo duration="base" label='duration="base" (200ms)' />
        <HoverDemo duration="medium" label='duration="medium" (300ms)' />
        <HoverDemo duration="slow" label='duration="slow" (500ms)' />
      </Stack>
    </Section>

    <Section title="Opacity toggle">
      <OpacityDemo />
    </Section>

    <Section title="Usage">
      <CodeBlock code={`<Transition duration="fast" property="background">
  <Box
    padding="4"
    background={isActive ? 'primary.500' : 'gray.100'}
    borderRadius="base"
  >
    Content
  </Box>
</Transition>`} />
    </Section>
  </Box>
);
