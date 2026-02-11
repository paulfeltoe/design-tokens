import React, { useState } from 'react';
import { ProgressSteps } from '../../src/components';
import { Button } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/ProgressSteps',
};

export const Overview = () => {
  const [step, setStep] = useState(1);
  const steps = ['About You', 'Current Conditions', 'Current Treatments'];

  return (
    <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 520 }}>
      <PageHeader
        title="ProgressSteps"
        description="Progress steps indicate the user's position in a multi-step flow. Completed steps show a checkmark, the current step is highlighted, and future steps are dimmed."
      />

      <Tip>
        In the Figma designs, progress steps appear at the top of the health risk assessment (HRA) flow with sections like "About You", "Current Conditions", "Current Treatments".
      </Tip>

      <Section title="Step states">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <p style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>Step 1 of 3:</p>
            <ProgressSteps steps={steps} currentStep={0} />
          </div>
          <div>
            <p style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>Step 2 of 3:</p>
            <ProgressSteps steps={steps} currentStep={1} />
          </div>
          <div>
            <p style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>All completed:</p>
            <ProgressSteps steps={steps} currentStep={3} />
          </div>
        </div>
      </Section>

      <Section title="Interactive demo">
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
      </Section>
    </div>
  );
};
