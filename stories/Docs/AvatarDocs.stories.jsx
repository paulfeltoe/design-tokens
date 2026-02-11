import React from 'react';
import { Avatar } from '../../src/components';
import { PageHeader, Section, Tip, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Docs/Avatar',
  parameters: { layout: 'padded' },
};

export const AllVariants = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Avatar"
        description="Displays a user or provider photo, falling back to initials when no image is available. Four sizes from compact lists to profile headers."
      />

      <Section title="Sizes" description="sm (32px), base (40px), lg (56px), xl (72px)">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Avatar name="Sarah Mitchell" size="sm" />
          <Avatar name="Sarah Mitchell" size="base" />
          <Avatar name="Sarah Mitchell" size="lg" />
          <Avatar name="Sarah Mitchell" size="xl" />
        </div>
      </Section>

      <Section title="With Image" description="When an image URL is provided, it fills the circle.">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" name="Sarah" size="base" />
          <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" name="James" size="base" />
          <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" name="Lisa" size="base" />
        </div>
      </Section>

      <Section title="Initials Fallback" description="When no image is available, initials are generated from the name prop.">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Avatar name="Sarah Mitchell" size="base" />
          <Avatar name="James Chen" size="base" />
          <Avatar name="Lisa Park" size="base" />
          <Avatar size="base" />
        </div>
        <Tip>Without a <code>name</code> prop, the avatar shows a "?" placeholder.</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Avatar } from '../components';`}
        />
        <CodeBlock
          label="Basic"
          code={`<Avatar name="Sarah Mitchell" size="base" />
<Avatar src="/photo.jpg" name="Sarah Mitchell" size="lg" />`}
        />
      </Section>
    </div>
  ),
};
