import React from 'react';
import { StickyFooter, Button } from '../../src/components';

export default {
  title: 'Components/StickyFooter',
  component: StickyFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A fixed or absolute-positioned footer with a gradient fade from transparent to white. Used for persistent CTA buttons at the bottom of pages and sheets.',
      },
    },
  },
};

export const Playground = {
  render: () => (
    <div style={{ height: 400, position: 'relative', background: '#FFFCFA' }}>
      <div style={{ padding: 20 }}>
        <p style={{ color: '#212020' }}>Page content above the footer.</p>
      </div>
      <StickyFooter position="absolute">
        <Button fullWidth>Continue</Button>
      </StickyFooter>
    </div>
  ),
};

export const SingleButton = {
  render: () => (
    <div style={{ height: 400, position: 'relative', background: '#FFFCFA' }}>
      <div style={{ padding: 20 }}>
        <p style={{ color: '#212020' }}>Scroll content here.</p>
      </div>
      <StickyFooter position="absolute">
        <Button fullWidth>Book Appointment</Button>
      </StickyFooter>
    </div>
  ),
};

export const TwoButtons = {
  render: () => (
    <div style={{ height: 400, position: 'relative', background: '#FFFCFA' }}>
      <div style={{ padding: 20 }}>
        <p style={{ color: '#212020' }}>Confirmation screen content.</p>
      </div>
      <StickyFooter position="absolute">
        <Button fullWidth>Confirm</Button>
        <Button variant="ghost" fullWidth>Cancel</Button>
      </StickyFooter>
    </div>
  ),
};

export const PrimarySecondaryPair = {
  render: () => (
    <div style={{ height: 400, position: 'relative', background: '#FFFCFA' }}>
      <div style={{ padding: 20 }}>
        <p style={{ color: '#212020' }}>Choose your next step.</p>
      </div>
      <StickyFooter position="absolute">
        <Button fullWidth>Continue</Button>
        <Button variant="secondary" fullWidth>I'll Do This Later</Button>
      </StickyFooter>
    </div>
  ),
};
