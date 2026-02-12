import React from 'react';
import { Chip } from '../../src/components';
import { PageHeader, Section, Tip, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/Chip',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Chip"
        description="Compact selectable pills for filtering, tagging, or choosing from categories. Chips are inline and feel lighter than buttons."
      />

      <Section title="When to use Chips">
        <Guidelines
          doItems={[
            'Category filters (e.g. "Mental Health", "Nutrition", "Finance")',
            'Tag selection where multiple can be active',
            'Compact inline selectors in tight layouts',
          ]}
          dontItems={[
            'Primary or secondary actions — use Button instead',
            'Single selection from a short list — use RadioGroup instead',
            'Status indicators — use Badge instead',
          ]}
        />
      </Section>

      <Section title="States">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          <Chip>Default</Chip>
          <Chip selected>Selected</Chip>
          <Chip disabled>Disabled</Chip>
        </div>
      </Section>

      <Section title="Filter grid pattern">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          <Chip selected>Mental Health</Chip>
          <Chip>Physical Health</Chip>
          <Chip selected>Nutrition</Chip>
          <Chip>Finance</Chip>
          <Chip>Work & Career</Chip>
          <Chip>Relationships</Chip>
        </div>
        <Tip>Use 8px gap between chips. Chips wrap naturally — no need for a fixed grid.</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Chip } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`<Chip selected={isActive} onClick={toggle}>Mental Health</Chip>

{/* Filter grid */}
{categories.map(cat => (
  <Chip
    key={cat.id}
    selected={filters.includes(cat.id)}
    onClick={() => toggleFilter(cat.id)}
  >
    {cat.label}
  </Chip>
))}`}
        />
      </Section>
    </div>
  ),
};
