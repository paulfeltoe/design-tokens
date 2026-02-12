import React from 'react';
import { fn } from 'storybook/test';
import { TopBar } from '../../src/components';

export default {
  title: 'Components/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Header bar for pages and modals. 65px height with centered title and optional back/close navigation actions. Every screen should have a TopBar.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Center title text',
    },
    onBack: { action: 'back' },
    onClose: { action: 'close' },
  },
  args: {
    title: 'Health Profile',
    onBack: fn(),
    onClose: fn(),
  },
  decorators: [(Story) => <div style={{ maxWidth: 375 }}><Story /></div>],
};


export const BackAndClose = {
  args: {
    title: 'Select Provider',
    onBack: fn(),
    onClose: fn(),
  },
};

export const BackOnly = {
  args: {
    title: 'Appointment Details',
    onBack: fn(),
    onClose: undefined,
  },
};

export const CloseOnly = {
  args: {
    title: 'Preferences',
    onBack: undefined,
    onClose: fn(),
  },
};

export const TitleOnly = {
  args: {
    title: 'Dashboard',
    onBack: undefined,
    onClose: undefined,
  },
};
