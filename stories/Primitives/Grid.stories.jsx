import React from 'react';
import { Box, Text, Stack, Grid } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Grid',
};

const GridCell = ({ children, label }) => (
  <Box padding="4" background="primary.50" borderRadius="base" borderWidth="thin" borderStyle="solid" borderColor="primary.200">
    <Text as="span" size="xs" color="primary.700" family="mono">{label || children}</Text>
  </Box>
);

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Grid"
      description="CSS Grid layout primitive. Creates grid containers with token-based gap spacing. Use Grid for card grids, dashboard layouts, multi-column content, and responsive layouts."
    />

    <Tip>
      Pass a number to <code>columns</code> for equal-width columns (e.g. <code>columns={'{3}'}</code> for three columns).
      Pass a string for custom templates (e.g. <code>columns="200px 1fr 1fr"</code>).
    </Tip>

    <UsageTable
      rows={[
        ['columns={3}', 'Three equal columns → repeat(3, 1fr)'],
        ['columns="200px 1fr"', 'Fixed sidebar + flexible content'],
        ['gap="4"', 'Spacing token "4" → 16px between cells'],
        ['columnGap="6" rowGap="4"', 'Different horizontal and vertical gaps'],
        ['as="section"', 'Render as a <section> element'],
      ]}
    />

    <Section title="Column counts">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {[2, 3, 4].map((cols) => (
          <Box key={cols}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
              columns={'{' + cols + '}'}
            </Text>
            <Grid columns={cols} gap="3">
              {Array.from({ length: cols * 2 }, (_, i) => (
                <GridCell key={i} label={`Cell ${i + 1}`} />
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Custom templates">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
            columns="200px 1fr"  (sidebar + content)
          </Text>
          <Grid columns="200px 1fr" gap="4">
            <GridCell label="Sidebar" />
            <GridCell label="Content" />
          </Grid>
        </Box>
        <Box>
          <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
            columns="1fr 2fr 1fr"  (holy grail)
          </Text>
          <Grid columns="1fr 2fr 1fr" gap="4">
            <GridCell label="Left" />
            <GridCell label="Center" />
            <GridCell label="Right" />
          </Grid>
        </Box>
      </Box>
    </Section>

    <Section title="Gap variations">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {['2', '4', '6', '8'].map((g) => (
          <Box key={g}>
            <Text as="span" size="xs" color="gray.400" family="mono" style={{ display: 'block', marginBottom: 4 }}>
              gap="{g}"
            </Text>
            <Grid columns={3} gap={g}>
              <GridCell label="1" />
              <GridCell label="2" />
              <GridCell label="3" />
              <GridCell label="4" />
              <GridCell label="5" />
              <GridCell label="6" />
            </Grid>
          </Box>
        ))}
      </Box>
    </Section>

    <Section title="Real-world: card grid">
      <CodeBlock code={`<Grid columns={3} gap="6">
  {cards.map(card => (
    <Box padding="6" background="white" borderRadius="base" shadow="sm">
      <Stack gap="3">
        <Text as="h3" variant="heading.h4">{card.title}</Text>
        <Text size="sm" color="gray.600">{card.description}</Text>
      </Stack>
    </Box>
  ))}
</Grid>`} />
      <Grid columns={3} gap="6">
        {[
          { title: 'Analytics', desc: 'Track and visualize key metrics across your product.' },
          { title: 'Integrations', desc: 'Connect with your favorite tools and services.' },
          { title: 'Security', desc: 'Enterprise-grade security and compliance features.' },
        ].map((card) => (
          <Box key={card.title} padding="6" background="white" borderRadius="base" shadow="sm"
            borderWidth="thin" borderStyle="solid" borderColor="gray.100">
            <Stack gap="2">
              <Text as="h3" variant="heading.h4">{card.title}</Text>
              <Text size="sm" color="gray.600">{card.desc}</Text>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Section>

    <Section title="Responsive pattern">
      <CodeBlock code={`// Use a CSS template string for responsive grids
<Grid columns="repeat(auto-fill, minmax(250px, 1fr))" gap="4">
  {items.map(item => <Card key={item.id} {...item} />)}
</Grid>`} />
      <Grid columns="repeat(auto-fill, minmax(180px, 1fr))" gap="4">
        {Array.from({ length: 6 }, (_, i) => (
          <GridCell key={i} label={`Auto ${i + 1}`} />
        ))}
      </Grid>
    </Section>
  </Box>
);
