import React from 'react';
import { Caption, Box, Text, Stack } from '../../src/primitives';
import { PageHeader, Section, Tip, CodeBlock, UsageTable } from '../shared/DocBlock';

export default {
  title: 'Primitives/Caption',
};

/* ------------------------------------------------------------------ */

export const Overview = () => (
  <Box style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Caption"
      description="A small descriptive text primitive for captions, helper text, metadata, and secondary descriptions. Defaults to the body.small variant with text.secondary color."
    />

    <Tip>
      Caption is a convenience for the common pattern of small, muted text. For full typography control, use Text directly.
    </Tip>

    <UsageTable
      rows={[
        ['(default)', 'Small secondary text'],
        ['color="text.tertiary"', 'Even more subtle text'],
        ['color="error.600"', 'Error helper text'],
        ['as="p"', 'Render as a paragraph element'],
        ['align="center"', 'Center-aligned caption'],
      ]}
    />

    <Section title="Basic usage">
      <CodeBlock code={`<Caption>Last updated 2 hours ago</Caption>`} />
      <Stack gap="2">
        <Text variant="heading.h4">Article Title</Text>
        <Text>This is the main content of the article.</Text>
        <Caption>Last updated 2 hours ago</Caption>
      </Stack>
    </Section>

    <Section title="Form helper text">
      <Stack gap="1">
        <Text as="label" size="sm" weight="medium">Password</Text>
        <input type="password" style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #d4d4d4', fontSize: 14 }} />
        <Caption>Must be at least 8 characters long</Caption>
      </Stack>
    </Section>

    <Section title="Error helper text">
      <Stack gap="1">
        <Text as="label" size="sm" weight="medium">Email</Text>
        <input type="email" value="invalid" readOnly style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #ef4444', fontSize: 14 }} />
        <Caption color="error.600">Please enter a valid email address</Caption>
      </Stack>
    </Section>

    <Section title="Image caption">
      <Box style={{ maxWidth: 300 }}>
        <Box background="gray.200" borderRadius="base" style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Text color="gray.400" size="sm">Image placeholder</Text>
        </Box>
        <Caption as="p" align="center" style={{ marginTop: 8 }}>
          Fig 1. A placeholder image with a centered caption below it.
        </Caption>
      </Box>
    </Section>
  </Box>
);
