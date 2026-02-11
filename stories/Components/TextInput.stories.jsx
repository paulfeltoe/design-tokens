import React from 'react';
import { TextInput } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/TextInput',
};

export const Overview = () => (
  <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 420 }}>
    <PageHeader
      title="TextInput"
      description="Text inputs let users enter and edit text. They include a label, input field, and optional error message."
    />

    <Tip>
      In the Figma designs, text inputs appear in health profile forms, registration flows, and appointment booking with labeled fields and validation states.
    </Tip>

    <Section title="Default">
      <TextInput label="First Name" placeholder="Enter your first name" />
    </Section>

    <Section title="With value">
      <TextInput label="Email Address" type="email" defaultValue="user@example.com" />
    </Section>

    <Section title="Error state">
      <TextInput label="Date of Birth" placeholder="MM/DD/YYYY" error="Please enter a valid date" />
    </Section>

    <Section title="Disabled">
      <TextInput label="Username" defaultValue="johndoe" disabled />
    </Section>

    <Section title="Form layout">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TextInput label="First Name" placeholder="Enter first name" />
        <TextInput label="Last Name" placeholder="Enter last name" />
        <TextInput label="Date of Birth" placeholder="MM/DD/YYYY" />
        <TextInput label="Email" type="email" placeholder="Enter email address" />
      </div>
    </Section>
  </div>
);
