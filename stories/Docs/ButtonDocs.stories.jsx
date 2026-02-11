import React from 'react';
import { Button } from '../../src/components';
import { PageHeader, Section, Tip, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Docs/Button',
  parameters: { layout: 'padded' },
};

export const AllVariants = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Button"
        description="Buttons trigger actions. Use the right variant for the context: primary for the main CTA, secondary for supporting actions, and specialized variants for domain-specific UI like scheduling."
      />

      <Section title="Standard Variants" description="Core button styles for general use.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="link">Link</Button>
        </div>
      </Section>

      <Section title="Sizes" description="Three sizes for standard button variants.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button size="base">Base</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      <Section title="Full Width" description="Buttons stretch to fill their container.">
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Button fullWidth>Continue</Button>
          <Button variant="secondary" fullWidth>I'll Do This Later</Button>
        </div>
      </Section>

      <Section title="Disabled" description="Reduced opacity and no pointer events.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Button disabled>Primary Disabled</Button>
          <Button variant="secondary" disabled>Secondary Disabled</Button>
          <Button variant="timeSlot" disabled>Slot Disabled</Button>
        </div>
      </Section>

      <Section title="Time Slot Buttons" description="Used in appointment scheduling for selecting available times. Supports a selected state.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Button variant="timeSlot" selected>9:00 AM</Button>
          <Button variant="timeSlot">9:30 AM</Button>
          <Button variant="timeSlot">10:00 AM</Button>
          <Button variant="timeSlot">10:30 AM</Button>
          <Button variant="timeSlot">11:00 AM</Button>
        </div>
        <Tip>Use the <code>selected</code> prop to toggle the active time slot.</Tip>
      </Section>

      <Section title="Date Selector Buttons" description="Compact selectors for date picking UI. The selected state uses the accent color with a subtle shadow.">
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { label: 'Mon', num: '12' },
            { label: 'Tue', num: '13' },
            { label: 'Wed', num: '14' },
            { label: 'Thu', num: '15', selected: true },
            { label: 'Fri', num: '16' },
          ].map((d) => (
            <div key={d.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 10, textTransform: 'uppercase', color: '#636362' }}>{d.label}</span>
              <Button variant="dateSelector" selected={d.selected}>{d.num}</Button>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Link Variant" description="Text-only button with no background, border, or padding. Use for inline or tertiary actions.">
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Button variant="link">View Details</Button>
          <Button variant="link">Skip for Now</Button>
          <Button variant="link">Learn More</Button>
        </div>
      </Section>

      <Section title="Common Patterns">
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, marginTop: 0 }}>CTA Pair (Vertical)</h4>
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          <Button fullWidth>Book Appointment</Button>
          <Button variant="ghost" fullWidth>Skip for Now</Button>
        </div>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Side by Side</h4>
        <div style={{ maxWidth: 360, display: 'flex', gap: 12 }}>
          <Button variant="secondary" style={{ flex: 1 }}>Cancel</Button>
          <Button style={{ flex: 1 }}>Confirm</Button>
        </div>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Button } from '../components';`}
        />
        <CodeBlock
          label="Basic"
          code={`<Button variant="primary" onClick={handleClick}>Continue</Button>
<Button variant="timeSlot" selected={isSelected}>9:00 AM</Button>
<Button variant="link">View Details</Button>`}
        />
      </Section>
    </div>
  ),
};
