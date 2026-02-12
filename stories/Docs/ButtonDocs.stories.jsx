import React from 'react';
import { Button } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/Button',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Button"
        description="Buttons trigger actions. Use the right variant for the context: primary for the main CTA, secondary for supporting actions, and specialized variants for domain-specific UI like scheduling."
      />

      <Section title="Which button should I use?">
        <div style={{ fontSize: 13, lineHeight: 1.8, color: '#525252', marginBottom: 16, fontFamily: 'monospace', background: '#f9f9f9', padding: 16, borderRadius: 6 }}>
          Is this the primary action on the page?<br />
          ├─ YES → <strong>Primary</strong><br />
          └─ NO → Is this canceling or going back?<br />
          {'    '}├─ YES → <strong>Secondary</strong><br />
          {'    '}└─ NO → Is this selecting from options?<br />
          {'    '}{'    '}├─ YES → <strong>Time Slot</strong> or <strong>Date Selector</strong><br />
          {'    '}{'    '}└─ NO → <strong>Link</strong>
        </div>
      </Section>

      <Section title="Primary" description="Main CTA on a page. One per screen. Always dark background with Linen text.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 16 }}>
          <Button variant="primary">Book Appointment</Button>
          <Button variant="primary">Continue</Button>
          <Button variant="primary">Submit</Button>
        </div>
        <Guidelines
          doItems={[
            'Main action on a page (one per screen)',
            'Form submission or completing a flow',
            'High-priority actions',
            'Bottom of screen in sticky footer',
          ]}
          dontItems={[
            'Destructive actions (use danger or secondary with red text)',
            'Multiple CTAs of equal weight (use secondary for others)',
            'Navigation back',
          ]}
        />
        <Tip>Button text should be verb-based, 1-3 words maximum. Examples: "BOOK APPOINTMENT", "NEXT", "SUBMIT".</Tip>
      </Section>

      <Section title="Secondary" description="Alternative or supporting actions. Always white background with charcoal border.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 16 }}>
          <Button variant="secondary">Cancel</Button>
          <Button variant="secondary">I'll Do This Later</Button>
        </div>
        <Guidelines
          doItems={[
            'Alternative or cancel actions',
            'Paired with primary in button layouts',
            'Less important actions',
          ]}
          dontItems={[
            'As the only CTA on a page (use primary instead)',
            'For disabled states',
          ]}
        />
      </Section>

      <Section title="Ghost" description="Transparent background, no border. For skip or dismiss actions.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 16 }}>
          <Button variant="ghost">Skip for Now</Button>
        </div>
        <Guidelines
          doItems={[
            'Tertiary actions below a primary CTA',
            'Skip or dismiss actions in flows',
            'Stacked below primary in footer patterns',
          ]}
          dontItems={[
            'As a standalone CTA (insufficient visual weight)',
            'For destructive actions',
          ]}
        />
      </Section>

      <Section title="Danger" description="For destructive or irreversible actions.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 16 }}>
          <Button variant="danger">Delete Account</Button>
        </div>
        <Guidelines
          doItems={[
            'Destructive actions (delete, remove, cancel subscription)',
            'Actions that are hard to undo',
          ]}
          dontItems={[
            'Standard navigation or form submission',
            'When the action is easily reversible',
          ]}
        />
      </Section>

      <Section title="Link" description="Text-only button with no background, border, or padding. Same bold weight and uppercase as other buttons.">
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 16 }}>
          <Button variant="link">View Details</Button>
          <Button variant="link">Learn More</Button>
          <Button variant="link">None of These</Button>
        </div>
        <Guidelines
          doItems={[
            'Tertiary or optional actions',
            '"None of these work for me" style escape hatches',
            'Help links and "learn more" actions',
            'Inline supplementary actions',
          ]}
          dontItems={[
            'Primary or secondary actions',
            'Actions that change app state significantly',
          ]}
        />
      </Section>

      <Section title="Time Slot" description="Used in appointment scheduling for selecting available times. 42px height, 30px pill radius. Supports selected state.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
          <Button variant="timeSlot" selected>9:00 AM</Button>
          <Button variant="timeSlot">9:30 AM</Button>
          <Button variant="timeSlot">10:00 AM</Button>
          <Button variant="timeSlot">10:30 AM</Button>
          <Button variant="timeSlot">11:00 AM</Button>
        </div>
        <Guidelines
          doItems={[
            'Selecting from multiple time options',
            'Calendar/scheduling interfaces',
            'Any grid of selectable options',
            'Horizontal scrolling grids with 16px gap',
          ]}
          dontItems={[
            'General-purpose buttons',
            'Actions without a selectable state',
          ]}
        />
        <Tip>Use the <code>selected</code> prop to toggle the active slot. States required: default (white bg, dark border), selected (dark bg, Linen text), disabled (reduced opacity).</Tip>
      </Section>

      <Section title="Date Selector" description="Compact selectors for date picking UI. 3px radius, small square. Selected state uses accent color with shadow.">
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
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
        <Guidelines
          doItems={[
            'Selecting dates from a range',
            'Calendar navigation',
            'Compact date selection with day label above',
          ]}
          dontItems={[
            'Selecting non-date options (use time slot or chip instead)',
          ]}
        />
      </Section>

      <Section title="Sizes" description="Three sizes for standard button variants (primary, secondary, ghost, danger).">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button size="base">Base</Button>
          <Button size="lg">Large</Button>
        </div>
        <Tip>Time slot and date selector variants have fixed heights (42px and auto respectively) and ignore the size prop.</Tip>
      </Section>

      <Section title="Disabled State" description="50% opacity, cursor not-allowed. No hover effects.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Button disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="timeSlot" disabled>9:00 AM</Button>
        </div>
      </Section>

      <Section title="Button Pairing Patterns" description="Common layouts for combining buttons.">
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, marginTop: 0 }}>Single Primary (clear action)</h4>
        <div style={{ maxWidth: 360, marginBottom: 24 }}>
          <Button fullWidth>Book Appointment</Button>
        </div>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Primary + Ghost (stacked, mobile)</h4>
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          <Button fullWidth>Continue</Button>
          <Button variant="ghost" fullWidth>Skip for Now</Button>
        </div>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Primary + Secondary (side by side)</h4>
        <div style={{ maxWidth: 360, display: 'flex', gap: 12, marginBottom: 24 }}>
          <Button variant="secondary" style={{ flex: 1 }}>Cancel</Button>
          <Button style={{ flex: 1 }}>Confirm</Button>
        </div>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Two Equal Weight (choice)</h4>
        <div style={{ maxWidth: 360, display: 'flex', gap: 12 }}>
          <Button variant="secondary" style={{ flex: 1 }}>Option A</Button>
          <Button variant="secondary" style={{ flex: 1 }}>Option B</Button>
        </div>
      </Section>

      <Section title="Visual Rules">
        <Warning>
          All button text must be <strong>Bold (700)</strong>, <strong>UPPERCASE</strong>, with <strong>1.5px letter-spacing</strong>. No exceptions.
          Primary/secondary buttons are always <strong>50px height</strong> and <strong>full pill radius (100px)</strong>.
          Time slots are <strong>42px height</strong>, <strong>30px radius</strong>.
        </Warning>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Button } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`<Button variant="primary" onClick={handleClick}>Continue</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="timeSlot" selected={isSelected}>9:00 AM</Button>
<Button variant="dateSelector" selected={isToday}>15</Button>
<Button variant="link">View Details</Button>`}
        />
      </Section>
    </div>
  ),
};
