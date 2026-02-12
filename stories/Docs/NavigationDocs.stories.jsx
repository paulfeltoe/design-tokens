import React from 'react';
import { BottomNav, IconButton, ListItem, ProgressSteps, Avatar } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/Navigation',
  parameters: { layout: 'padded' },
};

export const Docs = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Navigation Components"
        description="Components for wayfinding: bottom navigation tabs, icon buttons, list items with drill-down, and progress indicators for multi-step flows."
      />

      <Section title="BottomNav" description="Primary app navigation tab bar. Always at the bottom of the viewport.">
        <div style={{ maxWidth: 375, border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
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
        <Guidelines
          doItems={[
            'Primary app-level navigation (3-5 tabs)',
            'Always visible on main app screens',
            'Each tab represents a top-level section',
          ]}
          dontItems={[
            'Inside modals or bottom sheets',
            'In sub-flows or detail pages',
            'More than 5 tabs',
          ]}
        />
      </Section>

      <Section title="IconButton" description="Square buttons for icon-only actions. Must always have an aria-label.">
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 16 }}>
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
        <Guidelines
          doItems={[
            'ghost: Back/close buttons in headers, subtle icon actions',
            'filled: Prominent icon actions, FABs, highlighted controls',
            'outlined: Secondary icon actions with visible boundary',
            'Minimum 48x48px touch target regardless of icon size',
          ]}
          dontItems={[
            'Icons without aria-label (accessibility violation)',
            'Touch targets smaller than 48px',
            'Icon buttons as primary page actions (use Button instead)',
          ]}
        />
        <Warning>
          Icon buttons must always have a descriptive <code>label</code> prop (maps to <code>aria-label</code>).
          The icon can be 16-24px but the container must always be at least <strong>48x48px</strong> for touch accessibility.
        </Warning>
      </Section>

      <Section title="ListItem" description="Versatile row component for navigation lists, settings, and content browsing.">
        <div style={{ maxWidth: 420, marginBottom: 16 }}>
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
        <Guidelines
          doItems={[
            'Navigation to detail pages (with chevron)',
            'Settings rows with trailing controls (toggle, badge)',
            'Content lists with leading avatars or icons',
            'Tight lists with dividers between items',
          ]}
          dontItems={[
            'Primary content display (use Card instead)',
            'Actions that don\'t navigate (use Button)',
            'Complex multi-line content (use Card)',
          ]}
        />
        <Tip>Use <code>leading</code> for avatars/icons and <code>trailing</code> for badges/controls. The <code>showChevron</code> prop signals drill-down navigation. Remove divider on the last item with <code>showDivider={'{false}'}</code>.</Tip>
      </Section>

      <Section title="ProgressSteps" description="Linear step indicator for multi-step flows. Shows completed, current, and pending states.">
        <div style={{ maxWidth: 520, marginBottom: 16 }}>
          <ProgressSteps steps={['Profile', 'Health History', 'Preferences', 'Confirm']} currentStep={2} />
        </div>
        <Guidelines
          doItems={[
            'Multi-step intake flows or onboarding',
            'Forms broken into sections (3-6 steps)',
            'Showing progress through a linear process',
          ]}
          dontItems={[
            'Non-linear navigation (use tabs instead)',
            'More than 6 steps (reconsider flow design)',
            'Single-step processes',
          ]}
        />
        <Tip><code>currentStep</code> is 0-indexed. Steps before it show as completed with checkmarks. The current step shows as an outlined circle with its number.</Tip>
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

<ListItem
  title="Dr. Sarah Mitchell"
  subtitle="Clinical Psychologist"
  leading={<Avatar name="Sarah Mitchell" />}
  showChevron
  onClick={openProfile}
/>

<ProgressSteps steps={['Profile', 'History', 'Preferences']} currentStep={1} />`}
        />
      </Section>
    </div>
  ),
};
