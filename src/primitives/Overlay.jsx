import React from 'react';
import {
  resolveToken,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Overlay — Full-screen positioning primitive.
 *
 * A fixed, full-viewport container that centers its children using flexbox.
 * Use for modals, drawers, and full-screen takeovers. Overlay handles
 * positioning and z-index only — pair with Backdrop for the dimmed background.
 *
 * Note: Overlay does not lock body scroll. Consumers should handle scroll
 * locking separately when needed.
 *
 * @param {object} props
 * @param {string} [props.zIndex='modal']    Z-index token
 * @param {string|number} [props.padding]    Spacing token for content padding
 * @param {string} [props.align='center']    CSS align-items for centering content
 * @param {string} [props.justify='center']  CSS justify-content for centering content
 * @param {object} [props.style]             Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Overlay({
  zIndex = 'modal',
  padding,
  align = 'center',
  justify = 'center',
  style,
  children,
  ...rest
}) {
  const resolved = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: align,
    justifyContent: justify,
    zIndex: resolveToken('z-index', zIndex),
    ...resolveSpacingProps({ padding }),
  };

  return (
    <div style={{ ...resolved, ...style }} {...rest}>
      {children}
    </div>
  );
}
