import React from 'react';
import { fn, expect, within } from 'storybook/test';
import { Card, Badge, Avatar } from '../../src/components';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Cards group related content into containers. Use the right variant for the context: elevated for prominent content, outlined for lists, and specialized variants for appointments and providers.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled', 'appointment', 'provider'],
      description: 'Card surface style',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle / description',
    },
    meta: {
      control: 'text',
      description: 'Metadata text (e.g. read time)',
    },
    image: {
      control: 'text',
      description: 'Hero image URL',
    },
    imageAlt: {
      control: 'text',
      description: 'Image alt text',
    },
  },
  args: {
    variant: 'elevated',
    title: 'Manage Stress',
    subtitle: 'Learn techniques to reduce daily stress and improve wellbeing.',
    meta: '5 min read',
    image: '',
    imageAlt: '',
  },
  decorators: [(Story) => <div style={{ maxWidth: 320 }}><Story /></div>],
};


export const Elevated = {
  args: { variant: 'elevated', title: 'Elevated Card', subtitle: 'Default with shadow' },
};

export const Outlined = {
  args: { variant: 'outlined', title: 'Outlined Card', subtitle: 'Card with border' },
};

export const Filled = {
  args: { variant: 'filled', title: 'Filled Card', subtitle: 'Card with background' },
};

export const WithImage = {
  args: {
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    imageAlt: 'Person meditating',
    title: 'Manage Stress',
    subtitle: 'Learn techniques to reduce daily stress.',
    meta: '5 min read',
  },
};

export const Appointment = {
  args: {
    variant: 'appointment',
    dateLabel: 'Wed',
    dateNumber: '14',
    dateMonth: 'Feb',
    title: 'Dr. Sarah Mitchell',
    subtitle: 'Clinical Psychologist',
    timeLabel: '10:30 AM - 11:00 AM',
  },
};

export const AppointmentList = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
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
  ),
};

export const Provider = {
  args: {
    variant: 'provider',
    providerName: 'Dr. Sarah Mitchell',
    providerTime: '10:30 AM',
    avatar: <Avatar name="Sarah Mitchell" size="base" />,
    onExpand: fn(),
  },
};

export const ProviderList = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, maxWidth: 360 }}>
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
  ),
};

export const ContentGrid = {
  decorators: [(Story) => <div style={{ maxWidth: 720 }}><Story /></div>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      <Card
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
        imageAlt="Meditating"
        title="Manage Stress"
        subtitle="Reduce daily stress and improve wellbeing."
        meta="5 min read"
      />
      <Card
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
        imageAlt="Exercising"
        title="Physical Activity"
        subtitle="Simple exercises to boost energy."
        meta="8 min read"
      />
      <Card
        image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop"
        imageAlt="Healthy food"
        title="Healthy Eating"
        subtitle="Build better nutrition habits."
        meta="4 min read"
      />
    </div>
  ),
};

export const WithBadges = {
  render: (args) => (
    <Card {...args}>
      <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
        <Badge variant="primary">6 modules</Badge>
        <Badge variant="success">Beginner</Badge>
      </div>
    </Card>
  ),
  args: {
    title: 'Cognitive Behavior Therapy',
    subtitle: 'An introduction to CBT techniques.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
  },
};

export const RendersTitle = {
  args: { title: 'Test Title', subtitle: 'Test subtitle' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Test Title')).toBeInTheDocument();
    await expect(canvas.getByText('Test subtitle')).toBeInTheDocument();
  },
};
