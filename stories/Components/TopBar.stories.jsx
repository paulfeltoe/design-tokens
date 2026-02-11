import React from 'react';
import { fn } from 'storybook/test';
import { TopBar } from '../../src/components';

export default {
  title: 'Components/TopBar',
  component: TopBar,
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

export const Playground = {};

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
