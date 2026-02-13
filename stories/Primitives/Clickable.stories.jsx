import React from 'react';
import { Clickable, Box, Text, Stack, Inline } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Clickable',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Clickable"
      description="A generic interactive element with role='button', tabIndex, and keyboard handling. Use for interactive surfaces that are not semantically buttons — cards, list items, custom controls."
    />

    <Tip>
      Clickable adds <code>role="button"</code> and handles Enter/Space key presses automatically. Use Pressable for actual buttons; use Clickable for interactive divs.
    </Tip>

    <UsageTable
      rows={[
        ['onClick={handler}', 'Click handler (also fires on Enter/Space)'],
        ['disabled', 'Disabled state (no click, tabIndex -1, opacity 50%)'],
        ['padding="4"', 'Add padding with spacing tokens'],
        ['background="gray.50"', 'Background color token'],
        ['borderRadius="base"', 'Rounded corners'],
      ]}
    />

    <Section title="Clickable card">
      <CodeBlock code={`<Clickable
  onClick={() => navigate('/detail')}
  padding="4"
  background="white"
  borderRadius="base"
  style={{ border: '1px solid #e5e5e5' }}
>
  <Text weight="semibold">Click this card</Text>
  <Text size="sm" color="gray.600">It responds to mouse and keyboard.</Text>
</Clickable>`} />
      <Stack gap="3">
        <Clickable
          onClick={() => {}}
          padding="4"
          background="white"
          borderRadius="base"
          style={{ border: '1px solid #e5e5e5' }}
        >
          <Text weight="semibold" style={{ marginBottom: 2 }}>Clickable card</Text>
          <Text size="sm" color="gray.600">Responds to click, Enter, and Space keys.</Text>
        </Clickable>
        <Clickable
          onClick={() => {}}
          padding="4"
          background="white"
          borderRadius="base"
          style={{ border: '1px solid #e5e5e5' }}
          disabled
        >
          <Text weight="semibold" style={{ marginBottom: 2 }}>Disabled clickable</Text>
          <Text size="sm" color="gray.600">Cannot be interacted with.</Text>
        </Clickable>
      </Stack>
    </Section>

    <Section title="Interactive list items">
      <Box style={{ border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
        {['Dashboard', 'Settings', 'Profile'].map((item, i) => (
          <Clickable
            key={item}
            onClick={() => {}}
            padding="3"
            paddingX="4"
            style={{ borderBottom: i < 2 ? '1px solid #f5f5f5' : undefined }}
          >
            <Text size="sm">{item}</Text>
          </Clickable>
        ))}
      </Box>
    </Section>
  </Box>
);
