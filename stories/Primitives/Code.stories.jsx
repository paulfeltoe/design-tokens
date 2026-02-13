import React from 'react';
import { Code, Box, Text, Stack } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Code',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Code"
      description="An inline or block code text primitive. Uses the mono font family and code typography variants with sensible default colors for both modes."
    />

    <Tip>
      Use the default inline mode for code within sentences. Set <code>block</code> for multi-line code blocks with a dark background.
    </Tip>

    <UsageTable
      rows={[
        ['(default)', 'Inline <code> with light gray background'],
        ['block', 'Block <pre> with dark background'],
        ['background="primary.50"', 'Custom background color'],
        ['color="primary.700"', 'Custom text color'],
        ['borderRadius="base"', 'Override border radius'],
      ]}
    />

    <Section title="Inline code">
      <Text>
        Use the <Code>resolveToken()</Code> function to look up values from the design token system.
        You can also reference <Code>resolveColor()</Code> for color-specific resolution.
      </Text>
    </Section>

    <Section title="Block code">
      <CodeBlock code={`<Code block>
{\`function greet(name) {
  return \\\`Hello, \\\${name}!\\\`;
}\`}
</Code>`} />
      <Code block>
{`function greet(name) {
  return \`Hello, \${name}!\`;
}

// Usage
const message = greet('World');
console.log(message);`}
      </Code>
    </Section>

    <Section title="Custom colors">
      <Stack gap="3">
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
            Custom inline colors
          </Text>
          <Text>
            Status: <Code background="success.100" color="success.700">active</Code> or{' '}
            <Code background="error.100" color="error.700">inactive</Code>
          </Text>
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
            Custom block colors
          </Text>
          <Code block background="primary.900" color="primary.100">
{`const tokens = loadDesignTokens();
console.log(tokens.color.primary);`}
          </Code>
        </Box>
      </Stack>
    </Section>
  </Box>
);
