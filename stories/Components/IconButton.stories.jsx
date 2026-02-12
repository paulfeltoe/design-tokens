import React from 'react';
import { fn, expect, userEvent, within } from 'storybook/test';
import { IconButton } from '../../src/components';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Square buttons for icon-only actions. Three visual variants (ghost, filled, outlined) and three sizes. Every IconButton must have an aria-label.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['ghost', 'filled', 'outlined'],
      description: 'Visual style',
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    label: {
      control: 'text',
      description: 'Accessible label (aria-label)',
    },
    children: {
      control: 'text',
      description: 'Icon content (text/emoji/symbol)',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'ghost',
    size: 'base',
    disabled: false,
    label: 'Close',
    children: '\u00D7',
    onClick: fn(),
  },
};


export const Ghost = {
  args: { variant: 'ghost', label: 'Back', children: '\u2039' },
};

export const Filled = {
  args: { variant: 'filled', label: 'Menu', children: '\u2630' },
};

export const Outlined = {
  args: { variant: 'outlined', label: 'Close', children: '\u00D7' },
};

export const Small = {
  args: { size: 'sm', variant: 'filled', children: '\u00D7' },
};

export const Large = {
  args: { size: 'lg', variant: 'filled', children: '\u00D7' },
};

export const Disabled = {
  args: { disabled: true, variant: 'filled', children: '\u00D7' },
};

export const HeaderPattern = {
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 4px',
      borderBottom: '1px solid #E8E6E1',
      maxWidth: 360,
    }}>
      <IconButton variant="ghost" label="Back">{'\u2039'}</IconButton>
      <span style={{ fontWeight: 600, fontSize: 16 }}>Health Profile</span>
      <IconButton variant="ghost" label="Close">{'\u00D7'}</IconButton>
    </div>
  ),
};

export const ClickInteraction = {
  args: { label: 'Test click', children: '\u00D7', onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
