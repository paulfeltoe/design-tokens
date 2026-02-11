import React, { useState } from 'react';
import { BottomNav } from '../../src/components';
import { PageHeader, Section, Tip } from '../shared/DocBlock';

export default {
  title: 'Components/BottomNav',
};

export const Overview = () => {
  const [active, setActive] = useState('today');

  const items = [
    { id: 'today', label: 'Today', icon: '\u2302' },
    { id: 'services', label: 'Services', icon: '\u2726' },
    { id: 'move', label: 'Move', icon: '\u2665' },
    { id: 'mind', label: 'Mind', icon: '\u263A' },
    { id: 'browse', label: 'Browse', icon: '\u2630' },
  ];

  return (
    <div style={{ fontFamily: 'Roboto, system-ui, sans-serif', maxWidth: 420 }}>
      <PageHeader
        title="BottomNav"
        description="Bottom navigation provides quick access to top-level destinations. It appears at the bottom of the screen with icon + label items."
      />

      <Tip>
        In the Figma designs, the bottom navigation appears on every main screen with tabs: Today, Services, Move, Mind, Browse.
      </Tip>

      <Section title="Interactive">
        <div style={{ border: '1px solid #E8E6E1', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAF5' }}>
            <span style={{ color: '#9E9A90', fontSize: 14 }}>
              Active tab: <strong>{active}</strong>
            </span>
          </div>
          <BottomNav items={items} activeItem={active} onChange={setActive} />
        </div>
      </Section>

      <Section title="Different active states">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ border: '1px solid #E8E6E1', borderRadius: 12, overflow: 'hidden' }}>
            <BottomNav items={items} activeItem="services" />
          </div>
          <div style={{ border: '1px solid #E8E6E1', borderRadius: 12, overflow: 'hidden' }}>
            <BottomNav items={items} activeItem="mind" />
          </div>
        </div>
      </Section>
    </div>
  );
};
