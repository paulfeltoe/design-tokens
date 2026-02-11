import React from 'react';
import { IconButton } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/IconButton',
};

export const Overview = () => (
  <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="IconButton"
      description="Icon buttons are compact buttons for icon-only actions. They support ghost, filled, and outlined variants."
    />

    <Tip>
      In the Figma designs, icon buttons appear as back arrows, close (X) buttons, filter icons, and action icons in headers and toolbars.
    </Tip>

    <Section title="Variants">
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <IconButton variant="ghost" label="Back">&#8249;</IconButton>
        <IconButton variant="filled" label="Filter">&#9776;</IconButton>
        <IconButton variant="outlined" label="Close">&times;</IconButton>
      </div>
    </Section>

    <Section title="Sizes">
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <IconButton size="sm" variant="filled" label="Small">&times;</IconButton>
        <IconButton size="base" variant="filled" label="Base">&times;</IconButton>
        <IconButton size="lg" variant="filled" label="Large">&times;</IconButton>
      </div>
    </Section>

    <Section title="Header pattern">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 4px',
        borderBottom: '1px solid #E8E6E1',
      }}>
        <IconButton variant="ghost" label="Back">&#8249;</IconButton>
        <span style={{ fontWeight: 600, fontSize: 16 }}>Health Profile</span>
        <IconButton variant="ghost" label="Close">&times;</IconButton>
      </div>
    </Section>

    <Section title="Disabled">
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <IconButton variant="ghost" disabled label="Disabled back">&#8249;</IconButton>
        <IconButton variant="filled" disabled label="Disabled filter">&#9776;</IconButton>
        <IconButton variant="outlined" disabled label="Disabled close">&times;</IconButton>
      </div>
    </Section>
  </div>
);
