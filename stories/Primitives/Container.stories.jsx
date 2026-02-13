import React from 'react';
import { Container, Box, Text } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Container',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Container"
      description="A centered, max-width layout primitive. Uses the container token scale to constrain content width, keeping layouts readable on large screens."
    />

    <Tip>
      Container is your go-to for page-level width constraints. Wrap your main content in a Container to keep it centered and comfortably sized.
    </Tip>

    <UsageTable
      rows={[
        ['size="sm"', 'Max width 640px'],
        ['size="md"', 'Max width 768px'],
        ['size="lg"', 'Max width 1024px (default)'],
        ['size="xl"', 'Max width 1280px'],
        ['center={false}', 'Disable auto centering'],
        ['paddingX="4"', 'Add horizontal gutter padding'],
      ]}
    />

    <Section title="Container sizes">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {['sm', 'md', 'lg', 'xl'].map((s) => (
          <Box key={s}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ marginBottom: 4, display: 'block' }}>
              size="{s}"
            </Text>
            <Container size={s} padding="4" style={{ background: '#f5f5f5', borderRadius: 8, border: '1px dashed #d4d4d4' }}>
              <Text size="sm" color="gray.600">Content constrained to {s} width</Text>
            </Container>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Basic usage">
      <CodeBlock code={`<Container size="md" paddingX="4">
  <Text variant="heading.h2">Page Title</Text>
  <Text>Content stays centered and readable.</Text>
</Container>`} />
    </Section>
  </Box>
);
