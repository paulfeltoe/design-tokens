import React from 'react';
import { fn, expect, userEvent, within } from 'storybook/test';
import { BottomNav } from '../../src/components';

const defaultItems = [
  { id: 'today', label: 'Today', icon: '\u2302' },
  { id: 'services', label: 'Services', icon: '\u2726' },
  { id: 'move', label: 'Move', icon: '\u2665' },
  { id: 'mind', label: 'Mind', icon: '\u263A' },
  { id: 'browse', label: 'Browse', icon: '\u2630' },
];

export default {
  title: 'Components/BottomNav',
  component: BottomNav,
  tags: ['autodocs'],
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['today', 'services', 'move', 'mind', 'browse'],
      description: 'Currently active tab ID',
    },
    onChange: { action: 'tab-changed' },
  },
  args: {
    items: defaultItems,
    activeItem: 'today',
    onChange: fn(),
  },
  decorators: [(Story) => <div style={{ maxWidth: 420 }}><Story /></div>],
};

export const Playground = {};

export const Today = {
  args: { activeItem: 'today' },
};

export const Services = {
  args: { activeItem: 'services' },
};

export const Move = {
  args: { activeItem: 'move' },
};

export const Mind = {
  args: { activeItem: 'mind' },
};

export const Browse = {
  args: { activeItem: 'browse' },
};

export const InPhoneFrame = {
  render: () => {
    const [active, setActive] = React.useState('today');
    return (
      <div style={{ border: '1px solid #E8E6E1', borderRadius: 12, overflow: 'hidden', maxWidth: 375 }}>
        <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAF5' }}>
          <span style={{ color: '#9E9A90', fontSize: 14 }}>
            Active tab: <strong>{active}</strong>
          </span>
        </div>
        <BottomNav items={defaultItems} activeItem={active} onChange={setActive} />
      </div>
    );
  },
};

export const TabSwitchInteraction = {
  args: { activeItem: 'today', onChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const servicesTab = canvas.getByText('Services');
    await userEvent.click(servicesTab);
    await expect(args.onChange).toHaveBeenCalledWith('services');
  },
};
