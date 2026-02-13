import React from 'react';
import { Heading, Box, Text } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Heading',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Heading"
      description="A semantic heading primitive that maps a numeric level to both the correct HTML element and typography variant. Simplifies heading usage by removing the need to pair as='h2' with variant='heading.h2'."
    />

    <Tip>
      Use the <strong>level</strong> prop instead of manually setting <code>as</code> and <code>variant</code> on Text.
      Override <code>as</code> when you need to decouple visual style from semantic level.
    </Tip>

    <UsageTable
      rows={[
        ['level={1}', 'Renders <h1> with heading.h1 variant'],
        ['level={3}', 'Renders <h3> with heading.h3 variant'],
        ['level={2} as="h3"', 'Visually h2, semantically <h3>'],
        ['color="primary.600"', 'Custom heading color'],
        ['truncate', 'Truncate with ellipsis on overflow'],
      ]}
    />

    <Section title="All heading levels">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[1, 2, 3, 4, 5, 6].map((lvl) => (
          <Box key={lvl}>
            <Text as="span" size="xs" color="gray.400" family="mono">level={'{'}{ lvl }{'}'}</Text>
            <Heading level={lvl}>Heading Level {lvl}</Heading>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Custom colors">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Heading level={3} color="primary.600">Primary heading</Heading>
        <Heading level={3} color="success.600">Success heading</Heading>
        <Heading level={3} color="text.secondary">Secondary heading</Heading>
      </Box>
    </Section>

    <Section title="Semantic override">
      <CodeBlock code={`{/* Looks like h1 but renders <h2> for accessibility */}
<Heading level={1} as="h2">Visually large, semantically h2</Heading>`} />
      <Heading level={1} as="h2">Visually large, semantically h2</Heading>
    </Section>

    <Section title="Truncation">
      <Box style={{ maxWidth: 300, border: '1px dashed #d4d4d4', borderRadius: 4, padding: 8 }}>
        <Heading level={4} truncate>
          This heading is really long and will be truncated with an ellipsis
        </Heading>
      </Box>
    </Section>
  </Box>
);
