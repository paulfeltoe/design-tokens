import React from 'react';
import {
  resolveToken,
  resolveColor,
} from '../tokens/resolveToken';

/**
 * Backdrop — Semi-transparent background primitive.
 *
 * Renders a fixed, full-viewport layer with a semi-transparent background.
 * Typically used behind modals and dialogs, paired with Overlay.
 * Renders with aria-hidden since it is purely decorative.
 *
 * @param {object} props
 * @param {string} [props.color='black']              Color token for the backdrop
 * @param {string|number} [props.opacity='50']        Opacity token (0–100 scale)
 * @param {string} [props.zIndex='modal-backdrop']    Z-index token
 * @param {object} [props.style]                      Additional inline styles (merged last)
 */
export function Backdrop({
  color = 'black',
  opacity = '50',
  zIndex = 'modal-backdrop',
  style,
  ...rest
}) {
  const resolved = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: resolveColor(color),
    opacity: resolveToken('opacity', String(opacity)),
    zIndex: resolveToken('z-index', zIndex),
  };

  return (
    <div aria-hidden="true" style={{ ...resolved, ...style }} {...rest} />
  );
}
