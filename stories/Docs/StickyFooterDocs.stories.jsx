import React from 'react';
import { StickyFooter, Button } from '../../src/components';
import { PageHeader, Section, Tip, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Docs/StickyFooter',
  parameters: { layout: 'fullscreen' },
};

export const AllVariants = {
  render: () => (
    <div style={{ padding: 32, maxWidth: 720 }}>
      <PageHeader
        title="StickyFooter"
        description="A fixed or absolute-positioned footer with a gradient fade from transparent to white. Used for persistent CTA buttons at the bottom of pages and sheets."
      />

      <Section title="Single CTA" description="The simplest pattern: one primary action.">
        <div style={{ height: 300, position: 'relative', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', background: '#FFFCFA' }}>
          <div style={{ padding: 20 }}>
            <p style={{ color: '#212020', fontSize: 14 }}>Page content scrolls behind the footer.</p>
          </div>
          <StickyFooter position="absolute">
            <Button fullWidth>Book Appointment</Button>
          </StickyFooter>
        </div>
      </Section>

      <Section title="Primary + Ghost" description="Main action paired with a skip/cancel option.">
        <div style={{ height: 300, position: 'relative', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', background: '#FFFCFA' }}>
          <div style={{ padding: 20 }}>
            <p style={{ color: '#212020', fontSize: 14 }}>Intake flow content above.</p>
          </div>
          <StickyFooter position="absolute">
            <Button fullWidth>Continue</Button>
            <Button variant="ghost" fullWidth>Skip for Now</Button>
          </StickyFooter>
        </div>
      </Section>

      <Section title="Primary + Secondary" description="Two prominent actions of equal importance.">
        <div style={{ height: 300, position: 'relative', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', background: '#FFFCFA' }}>
          <div style={{ padding: 20 }}>
            <p style={{ color: '#212020', fontSize: 14 }}>Confirmation screen content.</p>
          </div>
          <StickyFooter position="absolute">
            <Button fullWidth>Confirm</Button>
            <Button variant="secondary" fullWidth>I'll Do This Later</Button>
          </StickyFooter>
        </div>
      </Section>

      <Tip>The gradient fades from fully transparent at the top to opaque white at the bottom, so content scrolling behind feels seamless. Use <code>position="absolute"</code> inside relative containers, or <code>position="fixed"</code> (default) for page-level footers.</Tip>

      <Section title="Usage">
        <CodeBlock
          label="Import"
          code={`import { StickyFooter, Button } from '../components';`}
        />
        <CodeBlock
          label="Basic"
          code={`<StickyFooter>
  <Button fullWidth>Continue</Button>
  <Button variant="ghost" fullWidth>Skip for Now</Button>
</StickyFooter>`}
        />
      </Section>
    </div>
  ),
};
