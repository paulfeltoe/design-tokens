import React, { useState } from 'react';
import { Chip } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/Chip',
};

export const Overview = () => {
  const [selected, setSelected] = useState({ 'Mental Health': true });

  const categories = [
    'Mental Health', 'Physical Health', 'Nutrition',
    'Finance', 'Work & Career', 'Relationships', 'Pregnancy',
  ];

  const toggle = (cat) => setSelected((prev) => ({ ...prev, [cat]: !prev[cat] }));

  return (
    <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 720 }}>
      <PageHeader
        title="Chip"
        description="Chips are compact elements used for filtering, selecting categories, or displaying tags. They have outlined and selected states."
      />

      <Tip>
        In the Figma designs, chips appear as horizontal scrolling category filters (e.g. MENTAL HEALTH, PHYSICAL HEALTH, NUTRITION) used to filter browse content and habits.
      </Tip>

      <Section title="Default vs Selected">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Chip>Default</Chip>
          <Chip selected>Selected</Chip>
          <Chip disabled>Disabled</Chip>
        </div>
      </Section>

      <Section title="Category filter (interactive)">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              selected={!!selected[cat]}
              onClick={() => toggle(cat)}
            >
              {cat}
            </Chip>
          ))}
        </div>
      </Section>
    </div>
  );
};
