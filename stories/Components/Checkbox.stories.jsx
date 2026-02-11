import React, { useState } from 'react';
import { Checkbox } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/Checkbox',
};

export const Overview = () => {
  const [items, setItems] = useState({
    anxiety: true,
    depression: false,
    insomnia: false,
    stress: true,
    fatigue: false,
  });

  const toggle = (key) => setItems((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 420 }}>
      <PageHeader
        title="Checkbox"
        description="Checkboxes allow users to select one or more items from a set, or toggle a single option on/off."
      />

      <Tip>
        In the Figma designs, checkboxes appear in health profile multi-select lists for conditions, treatments, and preference selection.
      </Tip>

      <Section title="States">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Unchecked" checked={false} />
          <Checkbox label="Checked" checked={true} />
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" checked disabled />
        </div>
      </Section>

      <Section title="Multi-select list (interactive)">
        <p style={{ fontSize: 14, fontWeight: 500, color: '#212020', marginBottom: 8 }}>
          Select any conditions that apply:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Anxiety" checked={items.anxiety} onChange={() => toggle('anxiety')} />
          <Checkbox label="Depression" checked={items.depression} onChange={() => toggle('depression')} />
          <Checkbox label="Insomnia" checked={items.insomnia} onChange={() => toggle('insomnia')} />
          <Checkbox label="Stress management" checked={items.stress} onChange={() => toggle('stress')} />
          <Checkbox label="Fatigue" checked={items.fatigue} onChange={() => toggle('fatigue')} />
        </div>
      </Section>
    </div>
  );
};
