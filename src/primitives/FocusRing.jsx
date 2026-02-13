import React, { useState } from 'react';
import {
  resolveToken,
  resolveColor,
} from '../tokens/resolveToken';

/**
 * FocusRing — Focus indicator primitive.
 *
 * Wraps its children with a visible focus outline when focused. Uses
 * React state to track focus since inline styles cannot express :focus-visible.
 *
 * Note: This is the only primitive that uses useState. The focus/blur handlers
 * fire on all focus events (keyboard and mouse), not just keyboard focus.
 *
 * @param {object} props
 * @param {string} [props.color='primary.500']  Color token for the focus ring
 * @param {string} [props.width='medium']       Border width token for ring thickness
 * @param {string|number} [props.offset='2']    Spacing token for outline-offset
 * @param {string} [props.borderRadius]         Border radius token for the ring shape
 * @param {object} [props.style]                Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function FocusRing({
  color = 'primary.500',
  width = 'medium',
  offset = '2',
  borderRadius,
  style,
  children,
  ...rest
}) {
  const [focused, setFocused] = useState(false);

  const resolved = {
    display: 'inline-flex',
    ...(borderRadius !== undefined && { borderRadius: resolveToken('border.radius', borderRadius) }),
    outline: focused
      ? `${resolveToken('border.width', width)} solid ${resolveColor(color)}`
      : 'none',
    outlineOffset: focused ? resolveToken('spacing', String(offset)) : undefined,
  };

  return (
    <div
      style={{ ...resolved, ...style }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...rest}
    >
      {children}
    </div>
  );
}
