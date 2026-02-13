import React, { useState } from 'react';
import { Overlay, Backdrop, Box, Text, Stack } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Overlay',
};

/* ------------------------------------------------------------------ */

const OverlayDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '8px 16px', borderRadius: 8, border: '1px solid #d4d4d4',
          background: '#fff', cursor: 'pointer', fontSize: 14,
        }}
      >
        Open overlay demo
      </button>
      {open && (
        <>
          <Backdrop onClick={() => setOpen(false)} />
          <Overlay>
            <Box
              padding="6"
              background="white"
              borderRadius="lg"
              shadow="xl"
              style={{ minWidth: 300, maxWidth: 400, textAlign: 'center' }}
            >
              <Text variant="heading.h4" style={{ marginBottom: 8 }}>Overlay Content</Text>
              <Text size="sm" color="gray.600" style={{ marginBottom: 16 }}>
                This content is centered within the Overlay.
              </Text>
              <button
                onClick={() => setOpen(false)}
                style={{
                  padding: '8px 16px', borderRadius: 8, border: 'none',
                  background: '#212020', color: '#fff', cursor: 'pointer', fontSize: 14,
                }}
              >
                Close
              </button>
            </Box>
          </Overlay>
        </>
      )}
    </Box>
  );
};

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Overlay"
      description="A fixed, full-viewport positioning container for modals, drawers, and full-screen takeovers. Centers its children using flexbox. Pair with Backdrop for the dimmed background."
    />

    <Tip>
      Overlay handles positioning and z-index only. It does not render a backdrop or lock body scroll — use Backdrop for the dimmed background and handle scroll locking separately.
    </Tip>

    <UsageTable
      rows={[
        ['(default)', 'Fixed, centered overlay at z-index "modal"'],
        ['zIndex="popover"', 'Custom z-index layer'],
        ['align="flex-start"', 'Align content to top'],
        ['justify="flex-end"', 'Align content to right'],
        ['padding="6"', 'Add padding around centered content'],
      ]}
    />

    <Section title="Interactive demo">
      <OverlayDemo />
    </Section>

    <Section title="Usage pattern">
      <CodeBlock code={`<>
  <Backdrop onClick={onClose} />
  <Overlay>
    <Box padding="6" background="white" borderRadius="lg" shadow="xl">
      <Text>Modal content here</Text>
    </Box>
  </Overlay>
</>`} />
    </Section>
  </Box>
);
