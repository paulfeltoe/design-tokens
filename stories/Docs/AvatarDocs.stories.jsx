import React from 'react';
import { Avatar } from '../../src/components';
import { PageHeader, Section, Tip, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/Avatar',
  parameters: { layout: 'padded' },
};

export const Docs = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Avatar"
        description="Displays a user or provider photo, falling back to initials when no image is available. Always circular, always has a fixed size."
      />

      <Section title="When to use each size">
        <Guidelines
          doItems={[
            'sm (32px): compact lists, inline mentions, tight layouts',
            'base (40px): provider cards, list items, standard UI (this is the default)',
            'lg (56px): profile headers, prominent user displays',
            'xl (72px): profile pages, onboarding, large feature areas',
          ]}
          dontItems={[
            'Custom sizes outside the scale (32, 40, 56, 72)',
            'Non-circular avatars',
            'Avatars without a name fallback',
          ]}
        />
      </Section>

      <Section title="Sizes" description="sm (32px), base (40px), lg (56px), xl (72px)">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Avatar name="Sarah Mitchell" size="sm" />
            <div style={{ fontSize: 11, color: '#636362', marginTop: 4 }}>sm</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar name="Sarah Mitchell" size="base" />
            <div style={{ fontSize: 11, color: '#636362', marginTop: 4 }}>base</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar name="Sarah Mitchell" size="lg" />
            <div style={{ fontSize: 11, color: '#636362', marginTop: 4 }}>lg</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar name="Sarah Mitchell" size="xl" />
            <div style={{ fontSize: 11, color: '#636362', marginTop: 4 }}>xl</div>
          </div>
        </div>
      </Section>

      <Section title="With Image" description="When an image URL is provided, it fills the circle with object-fit: cover.">
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
        <Tip>Always provide a <code>name</code> prop even when an image is available — it's used for <code>alt</code> text and as a fallback if the image fails to load. Without a name, the avatar shows "?".</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Avatar } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`// In a provider card (always base size)
<Avatar name="Sarah Mitchell" size="base" />

// With image
<Avatar src="/photo.jpg" name="Sarah Mitchell" size="lg" />

// In a list item leading slot
<ListItem
  title="Dr. Sarah Mitchell"
  leading={<Avatar name="Sarah Mitchell" size="base" />}
/>`}
        />
      </Section>
    </div>
  ),
};
