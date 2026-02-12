import React from 'react';
import { ListItem, Avatar, Badge } from '../../src/components';
import { PageHeader, Section, Tip, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/ListItem',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="ListItem"
        description="A versatile row component for navigation lists, settings, and content browsing. Supports leading/trailing slots for avatars, badges, and other elements."
      />

      <Section title="When to use ListItem">
        <Guidelines
          doItems={[
            'Navigation lists with drill-down (chevron)',
            'Settings rows with controls in the trailing slot',
            'Content lists with avatars and metadata',
            'Selectable lists of options',
          ]}
          dontItems={[
            'Top-level app navigation — use BottomNav instead',
            'Grid layouts — use Card instead',
            'Simple text lists without interactivity',
          ]}
        />
      </Section>

      <Section title="Basic patterns">
        <div style={{ background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px solid #e5e5e5', marginBottom: 16 }}>
          <ListItem title="Basic item" showChevron onClick={() => {}} />
          <ListItem title="With subtitle" subtitle="Supporting description" showChevron onClick={() => {}} />
          <ListItem title="No chevron" subtitle="Non-navigational item" />
          <ListItem title="Disabled" subtitle="Cannot interact" disabled showDivider={false} />
        </div>
      </Section>

      <Section title="With leading content (avatars)">
        <div style={{ background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px solid #e5e5e5', marginBottom: 16 }}>
          <ListItem
            title="Dr. Sarah Chen"
            subtitle="Next available: Tomorrow"
            leading={<Avatar name="Sarah Chen" size="base" />}
            showChevron
            onClick={() => {}}
          />
          <ListItem
            title="Dr. James Wilson"
            subtitle="Next available: Friday"
            leading={<Avatar name="James Wilson" size="base" />}
            showChevron
            showDivider={false}
            onClick={() => {}}
          />
        </div>
        <Tip>Use the <code>leading</code> slot for avatars or icons. The slot is vertically centered with the text.</Tip>
      </Section>

      <Section title="With trailing content (badges)">
        <div style={{ background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px solid #e5e5e5', marginBottom: 16 }}>
          <ListItem
            title="Meditation"
            subtitle="5 min daily"
            trailing={<Badge variant="success">Active</Badge>}
            showChevron
            onClick={() => {}}
          />
          <ListItem
            title="Journaling"
            subtitle="Weekly reflection"
            trailing={<Badge variant="warning">Paused</Badge>}
            showChevron
            showDivider={false}
            onClick={() => {}}
          />
        </div>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { ListItem } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`<ListItem title="Settings" showChevron onClick={goToSettings} />

<ListItem
  title="Dr. Sarah Chen"
  subtitle="Next available: Tomorrow"
  leading={<Avatar name="Sarah Chen" />}
  trailing={<Badge variant="success">Available</Badge>}
  showChevron
  onClick={() => selectProvider(id)}
/>`}
        />
      </Section>
    </div>
  ),
};
