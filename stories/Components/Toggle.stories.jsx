import React from 'react';
import { fn, expect, userEvent, within } from 'storybook/test';
import { Toggle } from '../../src/components';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the toggle is on',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle',
    },
    label: {
      control: 'text',
      description: 'Text label next to the toggle',
    },
    onChange: { action: 'changed' },
  },
  args: {
    checked: false,
    disabled: false,
    label: 'Enable reminders',
    onChange: fn(),
  },
};


export const Off = {
  args: { checked: false, label: 'Off' },
};

export const On = {
  args: { checked: true, label: 'On' },
};

export const DisabledOff = {
  args: { disabled: true, checked: false, label: 'Disabled off' },
};

export const DisabledOn = {
  args: { disabled: true, checked: true, label: 'Disabled on' },
};

export const SettingsList = {
  render: () => {
    const [settings, setSettings] = React.useState({
      reminders: true,
      notifications: false,
      darkMode: false,
    });
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 300 }}>
        <Toggle
          checked={settings.reminders}
          onChange={(v) => setSettings((s) => ({ ...s, reminders: v }))}
          label="Enable reminders"
        />
        <Toggle
          checked={settings.notifications}
          onChange={(v) => setSettings((s) => ({ ...s, notifications: v }))}
          label="Push notifications"
        />
        <Toggle
          checked={settings.darkMode}
          onChange={(v) => setSettings((s) => ({ ...s, darkMode: v }))}
          label="Dark mode"
        />
      </div>
    );
  },
};

export const ToggleInteraction = {
  args: { checked: false, label: 'Click to toggle', onChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch');
    await userEvent.click(toggle);
    await expect(args.onChange).toHaveBeenCalledWith(true);
  },
};
