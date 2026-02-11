import React from 'react';
import { fn, expect, userEvent, within } from 'storybook/test';
import { Button } from '../../src/components';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to fill container width',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    size: 'base',
    fullWidth: false,
    disabled: false,
    children: 'Button',
    onClick: fn(),
  },
};

export const Playground = {};

export const Primary = {
  args: { variant: 'primary', children: 'Continue' },
};

export const Secondary = {
  args: { variant: 'secondary', children: "I'll Do This Later" },
};

export const Ghost = {
  args: { variant: 'ghost', children: 'Skip for Now' },
};

export const Danger = {
  args: { variant: 'danger', children: 'Delete Account' },
};

export const Small = {
  args: { size: 'sm', children: 'Small' },
};

export const Large = {
  args: { size: 'lg', children: 'Large' },
};

export const FullWidth = {
  args: { fullWidth: true, children: 'Track Habit' },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}><Story /></div>],
};

export const Disabled = {
  args: { disabled: true, children: 'Disabled' },
};

export const ButtonPair = {
  render: () => (
    <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Button fullWidth>Continue</Button>
      <Button variant="ghost" fullWidth>Skip for Now</Button>
    </div>
  ),
};

export const SideBySide = {
  render: () => (
    <div style={{ maxWidth: 360, display: 'flex', gap: 12 }}>
      <Button variant="secondary" style={{ flex: 1 }}>Cancel</Button>
      <Button style={{ flex: 1 }}>Apply Preferences</Button>
    </div>
  ),
};

export const ClickInteraction = {
  args: { children: 'Click Me', onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const DisabledNoClick = {
  args: { children: 'Disabled', disabled: true, onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
