import React from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { TextInput } from '../../src/components';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A labeled text field for collecting free-form user input. Supports multiple HTML input types and inline error messaging.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    error: {
      control: 'text',
      description: 'Error message below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'date'],
      description: 'HTML input type',
    },
  },
  args: {
    label: 'First Name',
    placeholder: 'Enter your first name',
    error: '',
    disabled: false,
    type: 'text',
  },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}><Story /></div>],
};


export const Default = {
  args: { label: 'Email Address', placeholder: 'you@example.com', type: 'email' },
};

export const WithError = {
  args: { label: 'Date of Birth', placeholder: 'MM/DD/YYYY', error: 'Please enter a valid date' },
};

export const Disabled = {
  args: { label: 'Username', disabled: true, defaultValue: 'johndoe' },
};

export const FormLayout = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <TextInput label="First Name" placeholder="Enter first name" />
      <TextInput label="Last Name" placeholder="Enter last name" />
      <TextInput label="Date of Birth" placeholder="MM/DD/YYYY" />
      <TextInput label="Email" type="email" placeholder="Enter email address" />
    </div>
  ),
};

export const TypeInteraction = {
  args: { label: 'Search', placeholder: 'Type something...' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');
  },
};
