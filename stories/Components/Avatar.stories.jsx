import React from 'react';
import { Avatar } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/Avatar',
};

export const Overview = () => (
  <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Avatar"
      description="Avatars represent users or practitioners with an image or initials fallback. Available in multiple sizes."
    />

    <Tip>
      In the Figma designs, avatars appear on practitioner profiles, chat interfaces, and appointment booking screens.
    </Tip>

    <Section title="Sizes (with initials fallback)">
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Avatar name="Jane Doe" size="sm" />
        <Avatar name="Jane Doe" size="base" />
        <Avatar name="Jane Doe" size="lg" />
        <Avatar name="Jane Doe" size="xl" />
      </div>
    </Section>

    <Section title="With images">
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Avatar src="https://i.pravatar.cc/72?img=1" name="Dr. Smith" size="sm" />
        <Avatar src="https://i.pravatar.cc/72?img=2" name="Dr. Jones" size="base" />
        <Avatar src="https://i.pravatar.cc/72?img=3" name="Dr. Williams" size="lg" />
        <Avatar src="https://i.pravatar.cc/112?img=4" name="Dr. Brown" size="xl" />
      </div>
    </Section>

    <Section title="Initials from names">
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Avatar name="Alice" size="base" />
        <Avatar name="Bob Chen" size="base" />
        <Avatar name="Dr. Maria Santos" size="base" />
        <Avatar size="base" />
      </div>
    </Section>
  </div>
);
