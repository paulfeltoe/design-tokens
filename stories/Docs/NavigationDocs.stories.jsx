import React from 'react';
import { BottomNav, IconButton, ListItem, ProgressSteps, Avatar } from '../../src/components';
import { PageHeader, Section, Tip, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Docs/Navigation',
  parameters: { layout: 'padded' },
};

export const AllVariants = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Navigation Components"
        description="Components for wayfinding: bottom navigation tabs, icon buttons, list items, and progress indicators."
      />

      <Section title="BottomNav" description="Tab bar for primary app navigation. Shows icons and labels.">
        <div style={{ maxWidth: 375, border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
          <BottomNav
            items={[
              { id: 'today', label: 'Today', icon: '\u2302' },
              { id: 'services', label: 'Services', icon: '\u2726' },
              { id: 'move', label: 'Move', icon: '\u2665' },
              { id: 'mind', label: 'Mind', icon: '\u263A' },
              { id: 'browse', label: 'Browse', icon: '\u2630' },
            ]}
            activeItem="today"
            onChange={() => {}}
          />
        </div>
      </Section>

      <Section title="IconButton" description="Square buttons for icon-only actions. Three variants and three sizes.">
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#636362', marginTop: 0, marginBottom: 8 }}>Variants</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <IconButton variant="ghost" label="Back">{'\u2039'}</IconButton>
              <IconButton variant="filled" label="Menu">{'\u2630'}</IconButton>
              <IconButton variant="outlined" label="Close">{'\u00D7'}</IconButton>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#636362', marginTop: 0, marginBottom: 8 }}>Sizes</p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <IconButton size="sm" variant="filled" label="Small">{'\u00D7'}</IconButton>
              <IconButton size="base" variant="filled" label="Base">{'\u00D7'}</IconButton>
              <IconButton size="lg" variant="filled" label="Large">{'\u00D7'}</IconButton>
            </div>
          </div>
        </div>
      </Section>

      <Section title="ListItem" description="Versatile row component with leading/trailing slots, chevron, and divider.">
        <div style={{ maxWidth: 420 }}>
          <ListItem title="Meditation" subtitle="10 min daily practice" showChevron onClick={() => {}} />
          <ListItem
            title="Dr. Sarah Mitchell"
            subtitle="Clinical Psychologist"
            leading={<Avatar name="Sarah Mitchell" size="base" />}
            showChevron
            onClick={() => {}}
          />
          <ListItem title="Disabled Item" subtitle="Requires premium" disabled showChevron showDivider={false} />
        </div>
      </Section>

      <Section title="ProgressSteps" description="Linear step indicator for multi-step flows. Shows completed, current, and pending states.">
        <div style={{ maxWidth: 520 }}>
          <ProgressSteps steps={['Profile', 'Health History', 'Preferences', 'Confirm']} currentStep={2} />
        </div>
        <Tip>Use <code>currentStep</code> (0-indexed) to indicate progress. Steps before it show as completed with checkmarks.</Tip>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { BottomNav, IconButton, ListItem, ProgressSteps } from '../components';`}
        />
        <CodeBlock
          label="Examples"
          code={`<BottomNav items={tabs} activeItem="today" onChange={setTab} />
<IconButton variant="ghost" label="Back" onClick={goBack}>‹</IconButton>
<ListItem title="Settings" showChevron onClick={openSettings} />
<ProgressSteps steps={['Step 1', 'Step 2', 'Step 3']} currentStep={1} />`}
        />
      </Section>
    </div>
  ),
};
