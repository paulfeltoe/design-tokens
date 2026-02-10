import React from 'react';
import { Box } from '../../src/primitives';
import { Text } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Text',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Text"
      description="The typography primitive. Renders text with token-backed font size, weight, family, line height, letter spacing, and color. Use the variant prop for preset styles, or set individual props for fine control."
    />

    <Tip>
      Use the <strong>variant</strong> prop to apply a full typography preset (like "heading.h1" or "body.base").
      Individual props like <code>size</code> and <code>weight</code> override the variant when you need to customize.
    </Tip>

    <UsageTable
      rows={[
        ['variant="heading.h1"', 'Apply the H1 preset (48px, bold, tight line height)'],
        ['size="lg" weight="semibold"', 'Individual token props for font size and weight'],
        ['color="text.primary"', 'Semantic color token for primary text'],
        ['family="mono"', 'Monospace font family'],
        ['truncate', 'Truncate with ellipsis when text overflows'],
        ['as="h1"', 'Render as an <h1> element'],
      ]}
    />

    <Section title="Typography variants">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="heading.h1"</Text>
          <Text as="h1" variant="heading.h1">Heading 1</Text>
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="heading.h2"</Text>
          <Text as="h2" variant="heading.h2">Heading 2</Text>
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="heading.h3"</Text>
          <Text as="h3" variant="heading.h3">Heading 3</Text>
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="heading.h4"</Text>
          <Text as="h4" variant="heading.h4">Heading 4</Text>
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="heading.h5"</Text>
          <Text as="h5" variant="heading.h5">Heading 5</Text>
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="heading.h6"</Text>
          <Text as="h6" variant="heading.h6">Heading 6</Text>
        </Box>
      </Box>
    </Section>

    <Section title="Body variants">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="body.large"</Text>
          <Text variant="body.large">Large body text for introductions and lead paragraphs.</Text>
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="body.base"</Text>
          <Text variant="body.base">Base body text for standard paragraphs and content.</Text>
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="body.small"</Text>
          <Text variant="body.small">Small body text for captions, labels, and metadata.</Text>
        </Box>
      </Box>
    </Section>

    <Section title="Code variants">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono">variant="code.inline"</Text>
          <Text>Use <Text as="code" variant="code.inline" style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: 4 }}>resolveToken()</Text> to look up values.</Text>
        </Box>
        <Box padding="4" background="gray.900" borderRadius="base">
          <Text as="pre" variant="code.block" color="gray.100">
{`function hello() {
  return "world";
}`}
          </Text>
        </Box>
      </Box>
    </Section>

    <Section title="Font sizes">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'].map((s) => (
          <Box key={s} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ minWidth: 60 }}>
              {s}
            </Text>
            <Text as="span" size={s}>The quick brown fox</Text>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Font weights">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'].map((w) => (
          <Box key={w} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ minWidth: 80 }}>
              {w}
            </Text>
            <Text as="span" size="lg" weight={w}>The quick brown fox</Text>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Colors">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {[
          ['text.primary', 'Primary text'],
          ['text.secondary', 'Secondary text'],
          ['text.tertiary', 'Tertiary text'],
          ['text.disabled', 'Disabled text'],
          ['text.link', 'Link text'],
          ['text.error', 'Error text'],
          ['text.success', 'Success text'],
        ].map(([c, label]) => (
          <Box key={c} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ minWidth: 120 }}>
              {c}
            </Text>
            <Text as="span" color={c}>{label}</Text>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Truncation">
      <CodeBlock code={`<Text truncate style={{ maxWidth: 300 }}>
  This text is really long and will be truncated with an ellipsis.
</Text>`} />
      <Box style={{ maxWidth: 300, border: '1px dashed #d4d4d4', borderRadius: 4 }}>
        <Text truncate padding="2">
          This text is really long and will be truncated with an ellipsis when it overflows.
        </Text>
      </Box>
    </Section>

    <Section title="Text styling">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text transform="uppercase" letterSpacing="widest" size="xs" weight="semibold" color="gray.500">
          Overline label
        </Text>
        <Text decoration="underline" color="text.link">Underlined link text</Text>
        <Text align="center" color="gray.600" style={{ background: '#f5f5f5', padding: 12, borderRadius: 4 }}>
          Center-aligned text
        </Text>
      </Box>
    </Section>
  </Box>
);
