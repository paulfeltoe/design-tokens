import React from 'react';
import { Card, Avatar, Badge } from '../../src/components';
import { PageHeader, Section, Tip, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Docs/Card',
  parameters: { layout: 'padded' },
};

export const AllVariants = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="Card"
        description="Cards group related content into containers. Use the right variant for the context: elevated for prominent content, outlined for lists, and specialized variants for appointments and providers."
      />

      <Section title="Standard Variants" description="Three surface treatments for general-purpose cards.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Card variant="elevated" title="Elevated" subtitle="Shadow for emphasis" meta="Default" />
          <Card variant="outlined" title="Outlined" subtitle="Border for structure" />
          <Card variant="filled" title="Filled" subtitle="Background fill" />
        </div>
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

      <Section title="Appointment Card" description="Two-column layout with a tinted date section and an info section. Used for displaying upcoming appointments.">
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
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
        <Tip>Appointment cards use the <code>dateLabel</code>, <code>dateNumber</code>, <code>dateMonth</code>, and <code>timeLabel</code> props for the date section.</Tip>
      </Section>

      <Section title="Provider Card" description="Compact horizontal card showing a provider's avatar, name, available time, and expand action. Used in provider selection flows.">
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 5 }}>
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

      <Section title="Content Grid" description="Cards work well in grid layouts.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Card title="Stress Management" subtitle="Reduce daily stress." meta="5 min" />
          <Card title="Physical Activity" subtitle="Boost your energy." meta="8 min" />
          <Card title="Healthy Eating" subtitle="Better nutrition habits." meta="4 min" />
        </div>
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
