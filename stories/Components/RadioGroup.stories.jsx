import React from 'react';
import { fn, expect, userEvent, within } from 'storybook/test';
import { RadioGroup } from '../../src/components';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Group label / question',
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction of the options',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all options',
    },
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
    onChange: { action: 'changed' },
  },
  args: {
    label: 'Do you have any current medical conditions?',
    direction: 'vertical',
    disabled: false,
    name: 'demo',
    value: 'yes',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    onChange: fn(),
  },
};


export const YesNo = {
  args: {
    label: 'Do you have any allergies?',
    name: 'allergies',
    value: 'no',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
};

export const MultipleOptions = {
  args: {
    label: 'How often do you exercise?',
    name: 'frequency',
    value: 'weekly',
    options: [
      { value: 'daily', label: 'Daily' },
      { value: 'weekly', label: 'A few times a week' },
      { value: 'monthly', label: 'A few times a month' },
      { value: 'rarely', label: 'Rarely or never' },
    ],
  },
};

export const Horizontal = {
  args: {
    label: 'Overall health rating',
    name: 'rating',
    direction: 'horizontal',
    value: '3',
    options: [
      { value: '1', label: 'Poor' },
      { value: '2', label: 'Fair' },
      { value: '3', label: 'Good' },
      { value: '4', label: 'Very Good' },
      { value: '5', label: 'Excellent' },
    ],
  },
};

export const Disabled = {
  args: {
    label: 'This group is disabled',
    disabled: true,
    value: 'yes',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
};

export const SelectInteraction = {
  args: {
    label: 'Pick one',
    name: 'interaction-test',
    value: '',
    options: [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
    ],
    onChange: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const optionB = canvas.getByLabelText('Option B');
    await userEvent.click(optionB);
    await expect(args.onChange).toHaveBeenCalledWith('b');
  },
};
