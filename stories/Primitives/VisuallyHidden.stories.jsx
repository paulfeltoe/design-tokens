import React from 'react';
import { Box, Text, Inline } from '../../src/primitives';
import { VisuallyHidden } from '../../src/primitives/VisuallyHidden';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/VisuallyHidden',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="VisuallyHidden"
      description="An accessibility primitive that hides content visually while keeping it available to screen readers. Essential for making interactive elements accessible without cluttering the visual UI."
    />

    <Tip>
      Use VisuallyHidden for skip navigation links, icon-only button labels,
      form labels that are visually redundant, or any content that only
      assistive technology should announce.
    </Tip>

    <UsageTable
      rows={[
        ['<VisuallyHidden>Label</VisuallyHidden>', 'Hides "Label" visually, screen readers still read it'],
        ['as="label"', 'Render as a <label> element instead of the default <span>'],
      ]}
    />

    <Section title="Icon button with hidden label">
      <CodeBlock code={`<button>
  <svg aria-hidden="true">...</svg>
  <VisuallyHidden>Close dialog</VisuallyHidden>
</button>`} />
      <Inline gap="4" align="center">
        <button
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 8,
            border: '1px solid #BCBCBA',
            background: 'white',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M15 5L5 15M5 5l10 10" stroke="#212020" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <VisuallyHidden>Close dialog</VisuallyHidden>
        </button>
        <Text size="sm" color="text.secondary">
          This button has no visible label, but screen readers announce "Close dialog"
        </Text>
      </Inline>
    </Section>

    <Section title="Skip navigation link">
      <CodeBlock code={`<VisuallyHidden as="a" href="#main-content">
  Skip to main content
</VisuallyHidden>`} />
      <Box padding="4" background="gray.100" borderRadius="base">
        <Text size="sm" color="text.secondary">
          A skip link is present above this box (invisible). Tab into the preview
          to reveal it via focus styles in a real implementation.
        </Text>
        <VisuallyHidden as="a" href="#main-content">
          Skip to main content
        </VisuallyHidden>
      </Box>
    </Section>

    <Section title="How it works">
      <Box padding="4" background="gray.100" borderRadius="base">
        <CodeBlock code={`/* The VisuallyHidden CSS technique */
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;`} />
        <Text size="sm" color="text.secondary">
          This technique clips the element to a 1x1 pixel area positioned off-flow.
          Unlike <code>display: none</code> or <code>visibility: hidden</code>, the content
          remains in the accessibility tree and is announced by screen readers.
        </Text>
      </Box>
    </Section>
  </Box>
);
