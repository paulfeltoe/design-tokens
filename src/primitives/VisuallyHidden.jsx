import React from 'react';

/**
 * VisuallyHidden — Accessibility primitive.
 *
 * Hides content visually while keeping it accessible to screen readers.
 * Use for skip links, form labels that are visually redundant, or any
 * content that only assistive technology should read.
 *
 * @param {object} props
 * @param {string} [props.as='span']           HTML element to render
 * @param {React.ReactNode} props.children     Content for screen readers
 */
export function VisuallyHidden({ as: Component = 'span', children, ...rest }) {
  return (
    <Component
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
