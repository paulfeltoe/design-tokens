import React from 'react';
import { fn, expect, userEvent, within } from 'storybook/test';
import { Button } from '../../src/components';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Buttons trigger actions. Use the right variant for the context: primary for the main CTA, secondary for supporting actions, and specialized variants for domain-specific UI like scheduling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'link', 'timeSlot', 'dateSelector'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Button size (primary, secondary, ghost, danger only)',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to fill container width',
    },
    selected: {
      control: 'boolean',
      description: 'Selected state (timeSlot, dateSelector only)',
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
    selected: false,
    disabled: false,
    children: 'Button',
    onClick: fn(),
  },
};


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

export const Link = {
  args: { variant: 'link', children: 'View Details' },
};

export const TimeSlotDefault = {
  args: { variant: 'timeSlot', children: '9:00 AM', selected: false },
};

export const TimeSlotSelected = {
  args: { variant: 'timeSlot', children: '9:00 AM', selected: true },
};

export const DateSelectorDefault = {
  args: { variant: 'dateSelector', children: '15', selected: false },
};

export const DateSelectorSelected = {
  args: { variant: 'dateSelector', children: '15', selected: true },
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

export const TimeSlotGrid = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, maxWidth: 360 }}>
      <Button variant="timeSlot" selected>9:00 AM</Button>
      <Button variant="timeSlot">9:30 AM</Button>
      <Button variant="timeSlot">10:00 AM</Button>
      <Button variant="timeSlot">10:30 AM</Button>
      <Button variant="timeSlot">11:00 AM</Button>
      <Button variant="timeSlot">11:30 AM</Button>
    </div>
  ),
};

export const DateSelectorRow = {
  render: () => {
    const days = [
      { label: 'Mon', num: '12' },
      { label: 'Tue', num: '13' },
      { label: 'Wed', num: '14' },
      { label: 'Thu', num: '15', selected: true },
      { label: 'Fri', num: '16' },
    ];
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        {days.map((d) => (
          <div key={d.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 10, textTransform: 'uppercase', color: '#636362' }}>{d.label}</span>
            <Button variant="dateSelector" selected={d.selected}>{d.num}</Button>
          </div>
        ))}
      </div>
    );
  },
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
