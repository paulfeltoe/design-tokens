import React, { useState } from 'react';
import { Toggle } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/Toggle',
};

export const Overview = () => {
  const [reminder, setReminder] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 420 }}>
      <PageHeader
        title="Toggle"
        description="Toggles switch between on and off states. Use them for binary settings and preferences."
      />

      <Tip>
        In the Figma designs, toggles appear in the reminder settings modal and preference screens for enabling/disabling features.
      </Tip>

      <Section title="States">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Toggle checked={false} label="Off" />
          <Toggle checked={true} label="On" />
          <Toggle checked={false} disabled label="Disabled off" />
          <Toggle checked={true} disabled label="Disabled on" />
        </div>
      </Section>

      <Section title="Interactive settings">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Toggle checked={reminder} onChange={setReminder} label="Enable reminders" />
          <Toggle checked={notifications} onChange={setNotifications} label="Push notifications" />
          <Toggle checked={darkMode} onChange={setDarkMode} label="Dark mode" />
        </div>
      </Section>
    </div>
  );
};
