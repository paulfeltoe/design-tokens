import React from 'react';
import { expect, within } from 'storybook/test';
import { ProgressSteps, Button } from '../../src/components';

export default {
  title: 'Components/ProgressSteps',
  component: ProgressSteps,
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 0, max: 5 },
      description: 'Index of the current step (0-based)',
    },
  },
  args: {
    steps: ['About You', 'Current Conditions', 'Current Treatments'],
    currentStep: 1,
  },
  decorators: [(Story) => <div style={{ maxWidth: 520 }}><Story /></div>],
};

export const Playground = {};

export const StepOne = {
  args: { currentStep: 0 },
};

export const StepTwo = {
  args: { currentStep: 1 },
};

export const StepThree = {
  args: { currentStep: 2 },
};

export const AllCompleted = {
  args: { currentStep: 3 },
};

export const FourSteps = {
  args: {
    steps: ['Profile', 'Health', 'Goals', 'Review'],
    currentStep: 2,
  },
};

export const InteractiveDemo = {
  render: () => {
    const steps = ['About You', 'Current Conditions', 'Current Treatments'];
    const [step, setStep] = React.useState(1);
    return (
      <div>
        <ProgressSteps steps={steps} currentStep={step} />
        <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
          >
            Back
          </Button>
          <Button
            size="sm"
            onClick={() => setStep(Math.min(steps.length, step + 1))}
            disabled={step > steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export const RendersStepLabels = {
  args: {
    steps: ['Step A', 'Step B', 'Step C'],
    currentStep: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Step A')).toBeInTheDocument();
    await expect(canvas.getByText('Step B')).toBeInTheDocument();
    await expect(canvas.getByText('Step C')).toBeInTheDocument();
  },
};
