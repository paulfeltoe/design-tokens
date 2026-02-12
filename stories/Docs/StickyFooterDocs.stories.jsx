import React from 'react';
import { StickyFooter, Button } from '../../src/components';
import { PageHeader, Section, Tip, Warning, Guidelines, CodeBlock } from '../shared/DocBlock';

export default {
  title: 'Components/StickyFooter',
  parameters: { layout: 'fullscreen' },
};

export const Docs = {
  render: () => (
    <div style={{ padding: 32, maxWidth: 720 }}>
      <PageHeader
        title="StickyFooter"
        description="A fixed or absolute-positioned footer with a gradient fade from transparent to white. Used for persistent CTA buttons at the bottom of pages and sheets."
      />

      <Section title="When to use a Sticky Footer">
        <Guidelines
          doItems={[
            'Pages with a clear primary action (book, continue, submit)',
            'Multi-step flows where the CTA needs to be always visible',
            'Confirmation screens with one or two actions',
            'Any screen where scrolling content could push CTAs off-screen',
          ]}
          dontItems={[
            'Pages with no primary action',
            'Selection interfaces where the action is inline (e.g., tapping a provider card)',
            'Modals that already have their own footer',
          ]}
        />
      </Section>

      <Section title="Single CTA" description="Use when there is only one clear action and no alternative is needed.">
        <div style={{ height: 300, position: 'relative', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', background: '#FFFCFA' }}>
          <div style={{ padding: 20 }}>
            <p style={{ color: '#212020', fontSize: 14 }}>Page content scrolls behind the footer.</p>
          </div>
          <StickyFooter position="absolute">
            <Button fullWidth>Book Appointment</Button>
          </StickyFooter>
        </div>
      </Section>

      <Section title="Primary + Ghost (stacked)" description="Main action paired with a skip/cancel option. Most common pattern in intake flows.">
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

      <Section title="Primary + Secondary (stacked)" description="Two prominent actions of equal importance. Use when both options are valid next steps.">
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

      <Section title="Visual Rules">
        <Warning>
          The gradient fades from transparent to opaque white, transitioning at 28% from the top.
          Spacing: <strong>40px bottom</strong> padding (mobile safe area), <strong>20px top</strong>, <strong>20px horizontal</strong>.
          The footer is always <strong>375px max width</strong>, centered. Buttons inside should always be <strong>full width</strong>.
        </Warning>
        <Tip>Use <code>position="absolute"</code> inside relative containers (like in Storybook demos), or <code>position="fixed"</code> (default) for real page-level footers.</Tip>
      </Section>

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
