import React from 'react';
import { fn } from 'storybook/test';
import { BottomSheet, Button, ListItem } from '../../src/components';

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the sheet is visible',
    },
    title: {
      control: 'text',
      description: 'Header title text',
    },
    onClose: { action: 'closed' },
    onBack: { action: 'back' },
  },
  args: {
    open: true,
    title: 'Select a Provider',
    onClose: fn(),
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A modal overlay that slides up from the bottom of the viewport. Used for focused tasks like selections, forms, or confirmations. Includes a 65px header with optional back/close buttons.',
      },
    },
  },
};

export const Playground = {
  render: (args) => (
    <div style={{ height: 500, position: 'relative' }}>
      <BottomSheet {...args}>
        <p style={{ margin: 0, color: '#636362', fontSize: 14 }}>Sheet content goes here.</p>
      </BottomSheet>
    </div>
  ),
};

export const WithBackButton = {
  args: {
    title: 'Choose Time',
    onBack: fn(),
    onClose: fn(),
  },
  render: (args) => (
    <div style={{ height: 500, position: 'relative' }}>
      <BottomSheet {...args}>
        <p style={{ margin: 0, color: '#636362', fontSize: 14 }}>Select an available time slot.</p>
      </BottomSheet>
    </div>
  ),
};

export const WithListContent = {
  render: () => (
    <div style={{ height: 600, position: 'relative' }}>
      <BottomSheet open title="Health Topics" onClose={() => {}}>
        <div style={{ background: 'white', borderRadius: 8, overflow: 'hidden' }}>
          <ListItem title="Anxiety" subtitle="Learn coping strategies" showChevron onClick={() => {}} />
          <ListItem title="Depression" subtitle="Understanding and treatment" showChevron onClick={() => {}} />
          <ListItem title="Insomnia" subtitle="Improve your sleep" showChevron onClick={() => {}} />
          <ListItem title="Stress" subtitle="Daily stress management" showChevron onClick={() => {}} showDivider={false} />
        </div>
      </BottomSheet>
    </div>
  ),
};

export const Closed = {
  args: { open: false },
  render: (args) => (
    <div style={{ height: 300, position: 'relative' }}>
      <p>The sheet is closed. Toggle the <code>open</code> control to show it.</p>
      <BottomSheet {...args}>
        <p>Content</p>
      </BottomSheet>
    </div>
  ),
};
