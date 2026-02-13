import React from 'react';
import { Backdrop, Box, Text, Stack } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Backdrop',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Backdrop"
      description="A semi-transparent background layer for modals and dialogs. Renders a fixed, full-viewport overlay with configurable color and opacity. Pair with Overlay for the content layer."
    />

    <Tip>
      Backdrop is purely decorative (aria-hidden). It renders behind the Overlay content. Use onClick to handle dismiss behavior.
    </Tip>

    <UsageTable
      rows={[
        ['(default)', 'Black backdrop at 50% opacity, modal-backdrop z-index'],
        ['opacity="75"', 'Darker backdrop'],
        ['opacity="25"', 'Lighter backdrop'],
        ['color="primary.900"', 'Tinted backdrop'],
        ['onClick={onClose}', 'Dismiss on backdrop click'],
      ]}
    />

    <Section title="Opacity levels">
      <Box style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {['25', '50', '75'].map((op) => (
          <Box key={op} style={{ position: 'relative', width: 160, height: 100, borderRadius: 8, overflow: 'hidden', border: '1px solid #e5e5e5' }}>
            <Box padding="3" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text size="sm" color="gray.600">Content</Text>
            </Box>
            <Box style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              background: 'black',
              opacity: Number(op) / 100,
              borderRadius: 8,
            }} />
            <Box style={{ position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', zIndex: 1 }}>
              <Text as="span" size="xs" color="white" family="mono">opacity="{op}"</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Usage with Overlay">
      <CodeBlock code={`<>
  <Backdrop opacity="50" onClick={handleClose} />
  <Overlay>
    <ModalContent />
  </Overlay>
</>`} />
    </Section>
  </Box>
);
