import React from 'react';
import { Button } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/Button',
};

export const Overview = () => (
  <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Button"
      description="Buttons trigger actions. Use primary for the main call-to-action, secondary for alternative actions, and ghost for subtle interactions."
    />

    <Tip>
      In the Figma designs, primary buttons appear as dark filled, full-width, uppercase CTAs (e.g. "TRACK HABIT", "CONTINUE", "SAVE"). Secondary buttons are outlined (e.g. "I'LL DO THIS LATER").
    </Tip>

    <Section title="Variants">
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </Section>

    <Section title="Sizes">
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="sm">Small</Button>
        <Button size="base">Base</Button>
        <Button size="lg">Large</Button>
      </div>
    </Section>

    <Section title="Full width">
      <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Button fullWidth>Track Habit</Button>
        <Button variant="secondary" fullWidth>I'll Do This Later</Button>
      </div>
    </Section>

    <Section title="Disabled">
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
      </div>
    </Section>

    <Section title="Button pair (form pattern)">
      <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Button fullWidth>Continue</Button>
        <Button variant="ghost" fullWidth>Skip for Now</Button>
      </div>
    </Section>

    <Section title="Side-by-side pattern">
      <div style={{ maxWidth: 360, display: 'flex', gap: 12 }}>
        <Button variant="secondary" style={{ flex: 1 }}>Cancel</Button>
        <Button style={{ flex: 1 }}>Apply Preferences</Button>
      </div>
    </Section>
  </div>
);
