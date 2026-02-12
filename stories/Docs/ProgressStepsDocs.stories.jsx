import React from 'react';
import { ProgressSteps } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/ProgressSteps',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

export const UsageGuide = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <PageHeader
        title="ProgressSteps"
        description="A linear step indicator for multi-step flows. Shows completed, current, and pending states to orient users within a process."
      />

      <Section title="When to use ProgressSteps">
        <Guidelines
          doItems={[
            'Multi-step forms (onboarding, intake, checkout)',
            'Flows where the user needs to know their position',
            'Sequential processes with 2-5 steps',
          ]}
          dontItems={[
            'Non-linear navigation — use tabs or BottomNav',
            'Single-step forms — no indicator needed',
            'More than 5 steps — consider breaking into sections',
          ]}
        />
      </Section>

      <Section title="Step states">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 13, color: '#636362', marginBottom: 8 }}>Step 1 of 3</div>
            <ProgressSteps steps={['About You', 'Conditions', 'Treatments']} currentStep={0} />
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#636362', marginBottom: 8 }}>Step 2 of 3</div>
            <ProgressSteps steps={['About You', 'Conditions', 'Treatments']} currentStep={1} />
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#636362', marginBottom: 8 }}>All completed</div>
            <ProgressSteps steps={['About You', 'Conditions', 'Treatments']} currentStep={3} />
          </div>
        </div>
        <Tip><code>currentStep</code> is 0-indexed. Setting it equal to the number of steps marks all as completed.</Tip>
      </Section>

      <Section title="Placement">
        <Warning>
          Place ProgressSteps at the top of the page, below the TopBar.
          It should span the full width of the content area.
          Do not place it inside cards or modals.
        </Warning>
      </Section>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { ProgressSteps } from '../components';`}
        />
        <CodeBlock
          label="Example"
          code={`<ProgressSteps
  steps={['About You', 'Current Conditions', 'Current Treatments']}
  currentStep={currentStep}
/>`}
        />
      </Section>
    </div>
  ),
};
