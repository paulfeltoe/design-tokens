import React from 'react';
import { Card } from '../../src/components';
import { Badge } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/Card',
};

export const Overview = () => (
  <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Card"
      description="Cards are surfaces that display content and actions about a single topic. They support images, titles, subtitles, and metadata."
    />

    <Tip>
      In the Figma designs, cards appear as content tiles in the browse section with hero images, article titles, and read time badges.
    </Tip>

    <Section title="Variants">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <Card
          title="Elevated card"
          subtitle="Default card with shadow elevation"
          variant="elevated"
        />
        <Card
          title="Outlined card"
          subtitle="Card with a subtle border"
          variant="outlined"
        />
        <Card
          title="Filled card"
          subtitle="Card with a gray background"
          variant="filled"
        />
      </div>
    </Section>

    <Section title="Content cards (browse pattern)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <Card
          image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
          imageAlt="Person meditating"
          title="Manage Stress"
          subtitle="Learn techniques to reduce daily stress and improve wellbeing."
          meta="5 min read"
        />
        <Card
          image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
          imageAlt="Person exercising"
          title="Physical Activity"
          subtitle="Simple exercises to boost your energy and mood."
          meta="8 min read"
        />
        <Card
          image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop"
          imageAlt="Healthy food"
          title="Healthy Eating"
          subtitle="Build better nutrition habits one meal at a time."
          meta="4 min read"
        />
      </div>
    </Section>

    <Section title="Card with custom content">
      <div style={{ maxWidth: 320 }}>
        <Card
          image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
          imageAlt="Mindfulness"
          title="Cognitive Behavior Therapy"
          subtitle="An introduction to CBT techniques for managing thoughts and behaviors."
        >
          <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
            <Badge variant="primary">6 modules</Badge>
            <Badge variant="success">Beginner</Badge>
          </div>
        </Card>
      </div>
    </Section>
  </div>
);
