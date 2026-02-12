import React from 'react';
import { Badge } from '../../src/components';
import { PageHeader, Section, Tip, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/Badge',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Badge"
        description="Small labels for status, categories, or metadata. Six semantic color variants that each map to a specific meaning."
      />

      <Section title="When to use each variant">
        <Guidelines
          doItems={[
            'default: Neutral labels, categories, counts',
            'primary: Brand-colored highlights, module counts',
            'success: Completed states, positive outcomes, "Beginner" difficulty',
            'warning: In-progress items, needs attention',
            'error: Urgent items, failures, overdue',
            'info: New items, informational labels',
          ]}
          dontItems={[
            'Long text (badges should be 1-3 words)',
            'Primary actions (use buttons instead)',
            'Standalone elements without context (always inside cards/lists)',
          ]}
        />
      </Section>

      <Section title="All Variants">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Completed</Badge>
          <Badge variant="warning">In Progress</Badge>
          <Badge variant="error">Urgent</Badge>
          <Badge variant="info">New</Badge>
        </div>
      </Section>

      <Section title="In Context" description="Badges are commonly used inside cards and list items to show status or metadata.">
        <div style={{ display: 'flex', gap: 8 }}>
          <Badge variant="primary">6 modules</Badge>
          <Badge variant="success">Beginner</Badge>
        </div>
        <Tip>Badge text uses UPPERCASE with wide letter spacing for readability at small sizes. Keep badge text short and scannable.</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Badge } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`// Status badge in a list item
<ListItem title="CBT Course" trailing={<Badge variant="success">Completed</Badge>} />

// Metadata badges in a card
<Card title="Mindfulness">
  <Badge variant="primary">6 modules</Badge>
  <Badge variant="success">Beginner</Badge>
</Card>`}
        />
      </Section>
    </div>
  ),
};
