import React from 'react';
import { Box, Text, Inline } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Inline',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Inline"
      description="Horizontal flex layout primitive. Arranges children in a row with consistent gap spacing. Use Inline for toolbars, button groups, navigation items, tags, and icon + text pairs."
    />

    <Tip>
      Inline is identical to Stack except the direction is horizontal (row). Use <code>wrap</code> to allow
      items to flow onto the next line when they run out of space.
    </Tip>

    <UsageTable
      rows={[
        ['gap="2"', 'Spacing token "2" → 8px between each child'],
        ['align="center"', 'Vertically center children'],
        ['justify="space-between"', 'Spread children to edges'],
        ['wrap', 'Allow items to wrap to the next line'],
        ['as="nav"', 'Render as a <nav> element'],
      ]}
    />

    <Section title="Gap scale">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {['1', '2', '4', '6', '8'].map((g) => (
          <Box key={g} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ minWidth: 60 }}>
              gap="{g}"
            </Text>
            <Inline gap={g} padding="2" background="gray.50" borderRadius="sm">
              <Box background="primary.400" borderRadius="sm" style={{ height: 28, width: 60 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 28, width: 60 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 28, width: 60 }} />
            </Inline>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Alignment">
      <Box style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {['flex-start', 'center', 'flex-end'].map((a) => (
          <Box key={a}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
              align="{a}"
            </Text>
            <Inline gap="2" align={a} padding="3" background="gray.50" borderRadius="sm" style={{ height: 80 }}>
              <Box background="primary.400" borderRadius="sm" style={{ height: 20, width: 40 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 40, width: 40 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 30, width: 40 }} />
            </Inline>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Justify">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {['flex-start', 'center', 'flex-end', 'space-between'].map((j) => (
          <Box key={j}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
              justify="{j}"
            </Text>
            <Inline gap="2" justify={j} align="center" padding="3" background="gray.50" borderRadius="sm">
              <Box background="primary.400" borderRadius="sm" style={{ height: 28, width: 60 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 28, width: 60 }} />
              <Box background="primary.400" borderRadius="sm" style={{ height: 28, width: 60 }} />
            </Inline>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Real-world: toolbar">
      <CodeBlock code={`<Inline gap="3" align="center" justify="space-between" padding="4"
       background="white" borderRadius="base" shadow="sm">
  <Text weight="semibold">Dashboard</Text>
  <Inline gap="2">
    <Box padding="2" paddingX="4" background="primary.600"
         borderRadius="base">
      <Text as="span" size="sm" color="white">Save</Text>
    </Box>
    <Box padding="2" paddingX="4" borderWidth="thin" borderStyle="solid"
         borderColor="gray.300" borderRadius="base">
      <Text as="span" size="sm" color="gray.700">Cancel</Text>
    </Box>
  </Inline>
</Inline>`} />
      <Inline
        gap="3"
        align="center"
        justify="space-between"
        padding="4"
        background="white"
        borderRadius="base"
        style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1)' }}
      >
        <Text as="span" weight="semibold">Dashboard</Text>
        <Inline gap="2">
          <Box padding="2" paddingX="4" background="primary.600" borderRadius="base">
            <Text as="span" size="sm" color="white">Save</Text>
          </Box>
          <Box padding="2" paddingX="4" borderWidth="thin" borderStyle="solid" borderColor="gray.300" borderRadius="base">
            <Text as="span" size="sm" color="gray.700">Cancel</Text>
          </Box>
        </Inline>
      </Inline>
    </Section>

    <Section title="Wrapping">
      <CodeBlock code={`<Inline gap="2" wrap>
  {tags.map(tag => (
    <Box padding="1" paddingX="3" background="gray.100" borderRadius="full">
      <Text as="span" size="xs">{tag}</Text>
    </Box>
  ))}
</Inline>`} />
      <Inline gap="2" wrap>
        {['React', 'TypeScript', 'Design System', 'Tokens', 'Storybook', 'Primitives', 'Components', 'Figma', 'Accessibility'].map((tag) => (
          <Box key={tag} padding="1" paddingX="3" background="gray.100" borderRadius="full">
            <Text as="span" size="xs" color="gray.700">{tag}</Text>
          </Box>
        ))}
      </Inline>
    </Section>
  </Box>
);
