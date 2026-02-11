import React from 'react';
import { expect, within } from 'storybook/test';
import { Badge } from '../../src/components';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Color variant',
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
  args: {
    variant: 'default',
    children: '5 min read',
  },
};

export const Playground = {};

export const Default = {
  args: { children: '3 articles' },
};

export const Primary = {
  args: { variant: 'primary', children: '5 min read' },
};

export const Success = {
  args: { variant: 'success', children: 'Completed' },
};

export const Warning = {
  args: { variant: 'warning', children: 'In Progress' },
};

export const Error = {
  args: { variant: 'error', children: 'Overdue' },
};

export const Info = {
  args: { variant: 'info', children: 'New' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const RendersContent = {
  args: { variant: 'success', children: 'Completed' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Completed')).toBeInTheDocument();
  },
};
