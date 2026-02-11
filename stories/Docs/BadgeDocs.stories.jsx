import React from 'react';
import { Badge } from '../../src/components';
import { PageHeader, Section, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Docs/Badge',
  parameters: { layout: 'padded' },
};

export const AllVariants = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Badge"
        description="Small labels for status, categories, or metadata. Six semantic color variants."
      />

      <Section title="Variants" description="Each variant maps to a semantic meaning.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Completed</Badge>
          <Badge variant="warning">In Progress</Badge>
          <Badge variant="error">Urgent</Badge>
          <Badge variant="info">New</Badge>
        </div>
      </Section>

      <Section title="In Context" description="Badges are commonly used inside cards and list items.">
        <div style={{ display: 'flex', gap: 8 }}>
          <Badge variant="primary">6 modules</Badge>
          <Badge variant="success">Beginner</Badge>
        </div>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Badge } from '../components';`}
        />
        <CodeBlock
          label="Basic"
          code={`<Badge variant="success">Completed</Badge>
<Badge variant="warning">In Progress</Badge>`}
        />
      </Section>
    </div>
  ),
};
