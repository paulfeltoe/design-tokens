import React from 'react';
import { fn, expect, userEvent, within } from 'storybook/test';
import { Chip } from '../../src/components';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Compact selectable pills for filtering, tagging, or choosing from categories. Chips are inline and feel lighter than buttons.',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Whether the chip is in selected state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the chip',
    },
    children: {
      control: 'text',
      description: 'Chip label',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    selected: false,
    disabled: false,
    children: 'Mental Health',
    onClick: fn(),
  },
};


export const Default = {
  args: { children: 'Physical Health' },
};

export const Selected = {
  args: { selected: true, children: 'Nutrition' },
};

export const Disabled = {
  args: { disabled: true, children: 'Finance' },
};

export const CategoryFilters = {
  render: () => {
    const categories = [
      'Mental Health', 'Physical Health', 'Nutrition',
      'Finance', 'Work & Career', 'Relationships', 'Pregnancy',
    ];
    const [selected, setSelected] = React.useState({ 'Mental Health': true });
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            selected={!!selected[cat]}
            onClick={() => setSelected((prev) => ({ ...prev, [cat]: !prev[cat] }))}
          >
            {cat}
          </Chip>
        ))}
      </div>
    );
  },
};

export const ClickInteraction = {
  args: { children: 'Click Me', onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByRole('button');
    await userEvent.click(chip);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
