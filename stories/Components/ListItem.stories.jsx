import React from 'react';
import { fn, expect, userEvent, within } from 'storybook/test';
import { ListItem, Avatar, Badge } from '../../src/components';

export default {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A versatile row component for navigation lists, settings, and content browsing. Supports leading/trailing slots for avatars, badges, and other elements.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Primary text',
    },
    subtitle: {
      control: 'text',
      description: 'Secondary text',
    },
    showChevron: {
      control: 'boolean',
      description: 'Show right chevron arrow',
    },
    showDivider: {
      control: 'boolean',
      description: 'Show bottom divider line',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the list item',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    title: 'Meditation',
    subtitle: '10 min daily practice',
    showChevron: true,
    showDivider: true,
    disabled: false,
    onClick: fn(),
  },
  decorators: [(Story) => <div style={{ maxWidth: 420 }}><Story /></div>],
};


export const Basic = {
  args: { title: 'Breathing Exercise', subtitle: '4-7-8 technique', showChevron: true },
};

export const TitleOnly = {
  args: { title: 'Notification Preferences', subtitle: '', showChevron: true },
};

export const Disabled = {
  args: { title: 'Locked Item', subtitle: 'Requires premium', disabled: true, showChevron: true },
};

export const NoDivider = {
  args: { title: 'Last Item', subtitle: 'No divider below', showDivider: false },
};

export const HabitList = {
  render: () => (
    <div>
      <ListItem title="Meditation" subtitle="10 min daily practice" showChevron onClick={() => {}} />
      <ListItem title="Journaling" subtitle="Write for 5 minutes" showChevron onClick={() => {}} />
      <ListItem title="Breathing Exercise" subtitle="4-7-8 technique" showChevron onClick={() => {}} showDivider={false} />
    </div>
  ),
};

export const WithAvatars = {
  render: () => (
    <div>
      <ListItem
        title="Dr. Sarah Mitchell"
        subtitle="Clinical Psychologist"
        leading={<Avatar name="Sarah Mitchell" size="base" />}
        showChevron
        onClick={() => {}}
      />
      <ListItem
        title="Dr. James Chen"
        subtitle="Nutritionist"
        leading={<Avatar name="James Chen" size="base" />}
        showChevron
        onClick={() => {}}
        showDivider={false}
      />
    </div>
  ),
};

export const WithTrailingBadges = {
  render: () => (
    <div>
      <ListItem
        title="Cognitive Behavior Therapy"
        subtitle="6 modules"
        trailing={<Badge variant="success">Completed</Badge>}
        onClick={() => {}}
      />
      <ListItem
        title="Relaxation Techniques"
        subtitle="4 modules"
        trailing={<Badge variant="warning">In Progress</Badge>}
        onClick={() => {}}
        showDivider={false}
      />
    </div>
  ),
};

export const ClickInteraction = {
  args: { title: 'Click Me', subtitle: 'Clickable item', showChevron: true, onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const item = canvas.getByRole('button');
    await userEvent.click(item);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
