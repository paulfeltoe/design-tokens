import React from 'react';
import { fn, expect, userEvent, within } from 'storybook/test';
import { Checkbox } from '../../src/components';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    onChange: { action: 'changed' },
  },
  args: {
    checked: false,
    disabled: false,
    label: 'I agree to the terms',
    onChange: fn(),
  },
};


export const Unchecked = {
  args: { checked: false, label: 'Unchecked' },
};

export const Checked = {
  args: { checked: true, label: 'Checked' },
};

export const DisabledUnchecked = {
  args: { disabled: true, checked: false, label: 'Disabled unchecked' },
};

export const DisabledChecked = {
  args: { disabled: true, checked: true, label: 'Disabled checked' },
};

export const MultiSelectList = {
  render: () => {
    const [items, setItems] = React.useState({
      anxiety: true,
      depression: false,
      insomnia: false,
      stress: true,
      fatigue: false,
    });
    const toggle = (key) => setItems((prev) => ({ ...prev, [key]: !prev[key] }));
    return (
      <div style={{ maxWidth: 300 }}>
        <p style={{ fontSize: 14, fontWeight: 500, color: '#212020', marginBottom: 8 }}>
          Select any conditions that apply:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Anxiety" checked={items.anxiety} onChange={() => toggle('anxiety')} />
          <Checkbox label="Depression" checked={items.depression} onChange={() => toggle('depression')} />
          <Checkbox label="Insomnia" checked={items.insomnia} onChange={() => toggle('insomnia')} />
          <Checkbox label="Stress management" checked={items.stress} onChange={() => toggle('stress')} />
          <Checkbox label="Fatigue" checked={items.fatigue} onChange={() => toggle('fatigue')} />
        </div>
      </div>
    );
  },
};

export const CheckInteraction = {
  args: { checked: false, label: 'Click me', onChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);
    await expect(args.onChange).toHaveBeenCalled();
  },
};
