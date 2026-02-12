import React from 'react';
import { expect, within } from 'storybook/test';
import { Avatar } from '../../src/components';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a user or provider photo, falling back to initials when no image is available. Always circular, always has a fixed size.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg', 'xl'],
      description: 'Avatar size',
    },
    name: {
      control: 'text',
      description: 'Full name (used for initials fallback)',
    },
    src: {
      control: 'text',
      description: 'Image URL',
    },
    alt: {
      control: 'text',
      description: 'Image alt text',
    },
  },
  args: {
    size: 'base',
    name: 'Jane Doe',
    src: '',
    alt: '',
  },
};

export const Playground = {};

export const Small = {
  args: { size: 'sm', name: 'Jane Doe' },
};

export const Base = {
  args: { size: 'base', name: 'Jane Doe' },
};

export const Large = {
  args: { size: 'lg', name: 'Jane Doe' },
};

export const ExtraLarge = {
  args: { size: 'xl', name: 'Jane Doe' },
};

export const WithImage = {
  args: { src: 'https://i.pravatar.cc/112?img=3', name: 'Dr. Williams', size: 'lg' },
};

export const NoName = {
  args: { name: '', size: 'base' },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar name="Jane Doe" size="sm" />
      <Avatar name="Jane Doe" size="base" />
      <Avatar name="Jane Doe" size="lg" />
      <Avatar name="Jane Doe" size="xl" />
    </div>
  ),
};

export const InitialsFallback = {
  args: { name: 'Bob Chen', size: 'lg' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('BC')).toBeInTheDocument();
  },
};
