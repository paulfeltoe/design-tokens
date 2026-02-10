import React from 'react';
import tokens from '../design-tokens.json';
import { PageHeader, Section, Tip, Warning, CodeBlock } from './shared/DocBlock';

export default {
  title: 'Design Tokens/Transitions',
};

export const Durations = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Transition Durations"
      description="Duration tokens control how long an animation takes. Shorter durations feel snappy and responsive; longer durations feel smooth and dramatic."
    />

    <Tip>
      When in doubt, use <strong>duration-base (200ms)</strong>. It feels responsive without being jarring.
      Never go above 700ms for interactive UI &mdash; users will perceive it as sluggish.
    </Tip>

    {(() => {
      const usageNotes = {
        'instant': 'Immediate state changes, no animation (e.g. active/pressed)',
        'fast': 'Hover states, tooltips, small color changes, focus rings',
        'base': 'Default for most transitions: dropdowns, toggles, input focus',
        'medium': 'Panel slides, dropdown menus, tab switches',
        'slow': 'Page transitions, large modals, complex multi-step animations',
        'slower': 'Dramatic reveals, hero animations, onboarding flows',
      };
      return (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginBottom: 24 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px' }}>Token</th>
              <th style={{ padding: '8px 12px' }}>Value</th>
              <th style={{ padding: '8px 12px' }}>When to use</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(tokens.transition.duration).map(([key, token]) => (
              <tr key={key} style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13 }}>transition-duration-{key}</td>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13, color: '#737373' }}>{token.$value}</td>
                <td style={{ padding: '8px 12px', fontSize: 12, color: '#737373' }}>{usageNotes[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    })()}

    <Section title="Quick reference">
      <CodeBlock
        code={`/* Hover effect */
.button {
  transition: background var(--transition-duration-fast)
              var(--transition-easing-ease-out);
}

/* Dropdown open */
.dropdown {
  transition: opacity var(--transition-duration-base)
              var(--transition-easing-ease-out);
}

/* Modal entrance */
.modal {
  transition: transform var(--transition-duration-medium)
              var(--transition-easing-ease-out);
}`}
      />
    </Section>
  </div>
);

/* ------------------------------------------------------------------ */

export const EasingFunctions = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 720 }}>
    <PageHeader
      title="Easing Functions"
      description="Easing defines the acceleration curve of an animation. The right easing makes motion feel natural instead of mechanical."
    />

    <Tip>
      <strong>Rule of thumb:</strong> Use <code>ease-out</code> for entrances and <code>ease-in</code> for exits.
      Use <code>ease-in-out</code> when an element moves from one position to another while staying on screen.
    </Tip>

    {(() => {
      const usageNotes = {
        'linear': 'Constant speed. Use for progress bars, loading spinners, marquees',
        'ease': 'Gentle all-purpose curve. Good default for subtle transitions',
        'ease-in': 'Starts slow, ends fast. Use for elements leaving the screen',
        'ease-out': 'Starts fast, settles in. Use for elements entering the screen (most common)',
        'ease-in-out': 'Slow start and end. Use for position changes, toggles, accordions',
      };
      return (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginBottom: 24 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px' }}>Token</th>
              <th style={{ padding: '8px 12px' }}>Value</th>
              <th style={{ padding: '8px 12px' }}>When to use</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(tokens.transition.easing).map(([key, token]) => (
              <tr key={key} style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13 }}>transition-easing-{key}</td>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13, color: '#737373' }}>
                  cubic-bezier({token.$value.join(', ')})
                </td>
                <td style={{ padding: '8px 12px', fontSize: 12, color: '#737373' }}>{usageNotes[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    })()}

    <Section title="Accessibility: reduced motion">
      <p style={{ fontSize: 14, color: '#404040', marginBottom: 12 }}>
        Always respect the user's motion preferences. Wrap animations in a reduced-motion media query or collapse durations to near-zero.
      </p>
      <CodeBlock
        code={`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
      />
    </Section>

    <Warning>
      Avoid using <code>ease-in</code> for elements entering the screen &mdash; the slow start makes the UI feel sluggish. Use <code>ease-out</code> instead.
    </Warning>
  </div>
);
