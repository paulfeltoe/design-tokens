import React, { useState } from 'react';
import { RadioGroup } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/RadioGroup',
};

export const Overview = () => {
  const [yesNo, setYesNo] = useState('yes');
  const [rating, setRating] = useState(null);
  const [frequency, setFrequency] = useState('daily');

  return (
    <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 420 }}>
      <PageHeader
        title="RadioGroup"
        description="Radio groups let users select one option from a set. Use for mutually exclusive choices."
      />

      <Tip>
        In the Figma designs, radio buttons appear in health profile forms for yes/no questions, frequency selection, and single-choice questionnaires.
      </Tip>

      <Section title="Yes / No pattern">
        <RadioGroup
          label="Do you have any current medical conditions?"
          name="conditions"
          value={yesNo}
          onChange={setYesNo}
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ]}
        />
      </Section>

      <Section title="Multiple options">
        <RadioGroup
          label="How often do you exercise?"
          name="frequency"
          value={frequency}
          onChange={setFrequency}
          options={[
            { value: 'daily', label: 'Daily' },
            { value: 'weekly', label: 'A few times a week' },
            { value: 'monthly', label: 'A few times a month' },
            { value: 'rarely', label: 'Rarely or never' },
          ]}
        />
      </Section>

      <Section title="Horizontal layout">
        <RadioGroup
          label="Overall health rating"
          name="rating"
          direction="horizontal"
          value={rating}
          onChange={setRating}
          options={[
            { value: '1', label: 'Poor' },
            { value: '2', label: 'Fair' },
            { value: '3', label: 'Good' },
            { value: '4', label: 'Very Good' },
            { value: '5', label: 'Excellent' },
          ]}
        />
      </Section>
    </div>
  );
};
