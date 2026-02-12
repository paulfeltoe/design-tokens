import React from 'react';
import { Card, Avatar, Badge } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/Card',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Card"
        description="Cards group related content into containers. Use the right variant for the context: elevated for prominent content, outlined for lists, and specialized variants for appointments and providers."
      />

      <Section title="Which card should I use?">
        <div style={{ fontSize: 13, lineHeight: 1.8, color: '#525252', marginBottom: 16, fontFamily: 'monospace', background: '#f9f9f9', padding: 16, borderRadius: 6 }}>
          Is this an appointment?<br />
          ├─ YES → <strong>appointment</strong> variant<br />
          └─ NO → Is this a provider in a list?<br />
          {'    '}├─ YES → <strong>provider</strong> variant<br />
          {'    '}└─ NO → Does it need emphasis?<br />
          {'    '}{'    '}├─ YES → <strong>elevated</strong> (shadow)<br />
          {'    '}{'    '}└─ NO → On a white background?<br />
          {'    '}{'    '}{'    '}├─ YES → <strong>outlined</strong> (border)<br />
          {'    '}{'    '}{'    '}└─ NO → <strong>filled</strong> (background)
        </div>
      </Section>

      <Section title="Elevated" description="Default. White background with shadow for cards that need to stand out.">
        <div style={{ maxWidth: 320, marginBottom: 16 }}>
          <Card variant="elevated" title="Manage Stress" subtitle="Learn techniques to reduce daily stress." meta="5 min read" />
        </div>
        <Guidelines
          doItems={[
            'Cards on colored (Snow) backgrounds',
            'Floating/elevated content',
            'Interactive cards with important actions',
          ]}
          dontItems={[
            'Cards on white backgrounds (use outlined instead)',
            'Nested cards',
          ]}
        />
      </Section>

      <Section title="Outlined" description="White background with subtle border. For structured lists on white backgrounds.">
        <div style={{ maxWidth: 320, marginBottom: 16 }}>
          <Card variant="outlined" title="Outlined Card" subtitle="Card with border for structure" />
        </div>
        <Guidelines
          doItems={[
            'Cards on white backgrounds',
            'List items that don\'t need elevation',
            'Settings or form sections',
          ]}
          dontItems={[
            'Important standalone content (use elevated)',
          ]}
        />
      </Section>

      <Section title="Filled" description="Gray background fill. For grouping content without borders.">
        <div style={{ maxWidth: 320, marginBottom: 16 }}>
          <Card variant="filled" title="Filled Card" subtitle="Background fill for grouping" />
        </div>
        <Guidelines
          doItems={[
            'Non-critical information zones',
            'Sections within larger containers',
            'Background grouping without visual borders',
          ]}
          dontItems={[
            'Primary content or actions',
          ]}
        />
      </Section>

      <Section title="With Image" description="Cards support a hero image above the body content.">
        <div style={{ maxWidth: 320 }}>
          <Card
            image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
            imageAlt="Person meditating"
            title="Manage Stress"
            subtitle="Learn techniques to reduce daily stress."
            meta="5 min read"
          />
        </div>
      </Section>

      <Section title="Appointment Card" description="Two-column layout with a tinted date section (Pink Tint background) and an info section. 16px border radius.">
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
          <Card
            variant="appointment"
            dateLabel="Wed"
            dateNumber="14"
            dateMonth="Feb"
            title="Dr. Sarah Mitchell"
            subtitle="Clinical Psychologist"
            timeLabel="10:30 AM - 11:00 AM"
          />
          <Card
            variant="appointment"
            dateLabel="Thu"
            dateNumber="15"
            dateMonth="Feb"
            title="Dr. James Chen"
            subtitle="Nutritionist"
            timeLabel="2:00 PM - 2:30 PM"
          />
        </div>
        <Guidelines
          doItems={[
            'Displaying confirmed appointments',
            'Showing upcoming bookings',
            'Appointment summaries',
          ]}
          dontItems={[
            'General information cards',
            'Lists of items (use provider card)',
            'Selection interfaces',
          ]}
        />
        <Tip>Required elements: date section (dateLabel, dateNumber, dateMonth), provider name (title), specialty (subtitle), and time (timeLabel).</Tip>
      </Section>

      <Section title="Provider Card" description="Compact 73px horizontal card with avatar, name, time, and expand chevron. 12px radius, 8px padding.">
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 16 }}>
          <Card
            variant="provider"
            providerName="Dr. Sarah Mitchell"
            providerTime="10:30 AM"
            avatar={<Avatar name="Sarah Mitchell" size="base" />}
            onExpand={() => {}}
          />
          <Card
            variant="provider"
            providerName="Dr. James Chen"
            providerTime="11:00 AM"
            avatar={<Avatar name="James Chen" size="base" />}
            onExpand={() => {}}
          />
          <Card
            variant="provider"
            providerName="Dr. Lisa Park"
            providerTime="2:00 PM"
            avatar={<Avatar name="Lisa Park" size="base" />}
            onExpand={() => {}}
          />
        </div>
        <Guidelines
          doItems={[
            'Lists of providers to choose from',
            'Collapsed provider information in scheduling',
            'Quick provider details with expand action',
          ]}
          dontItems={[
            'Detailed provider profiles (use full page)',
            'Non-person entities',
          ]}
        />
        <Tip>Use 5px gap for tight provider lists. The chevron (via <code>onExpand</code>) indicates the card is expandable. Avatar should always be 40px (base size).</Tip>
      </Section>

      <Section title="Composable Content" description="Cards accept children for custom content like badges.">
        <div style={{ maxWidth: 320 }}>
          <Card
            image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
            title="Cognitive Behavior Therapy"
            subtitle="An introduction to CBT techniques."
          >
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              <Badge variant="primary">6 modules</Badge>
              <Badge variant="success">Beginner</Badge>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Shadow & Elevation Rules">
        <Warning>
          Cards must always have visual separation: either a shadow or a border. Never render a card without both.
          Use <strong>shadow</strong> on colored backgrounds and for interactive cards.
          Use <strong>border</strong> (outlined) on white backgrounds and for nested cards.
        </Warning>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { Card, Avatar } from '../components';`}
        />
        <CodeBlock
          label="Appointment"
          code={`<Card
  variant="appointment"
  dateLabel="Wed" dateNumber="14" dateMonth="Feb"
  title="Dr. Sarah Mitchell"
  subtitle="Clinical Psychologist"
  timeLabel="10:30 AM - 11:00 AM"
/>`}
        />
        <CodeBlock
          label="Provider"
          code={`<Card
  variant="provider"
  providerName="Dr. Sarah Mitchell"
  providerTime="10:30 AM"
  avatar={<Avatar name="Sarah Mitchell" />}
  onExpand={() => {}}
/>`}
        />
      </Section>
    </div>
  ),
};
