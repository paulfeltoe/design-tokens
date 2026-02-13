import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Clickable — Generic interactive element primitive.
 *
 * A div (or any element) with role="button", tabIndex, and keyboard
 * event handling (Enter and Space trigger onClick). Use for interactive
 * surfaces that are not semantically buttons.
 *
 * @param {object} props
 * @param {string} [props.as='div']          HTML element to render
 * @param {function} [props.onClick]         Click handler (also triggered by Enter/Space)
 * @param {boolean} [props.disabled=false]   Disabled state
 * @param {string} [props.cursor='pointer']  CSS cursor value
 * @param {string|number} [props.padding]    Spacing token for all sides
 * @param {string|number} [props.paddingX]   Spacing token for left and right
 * @param {string|number} [props.paddingY]   Spacing token for top and bottom
 * @param {string} [props.background]        Color token path
 * @param {string} [props.borderRadius]      Border radius token
 * @param {object} [props.style]             Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Clickable({
  as: Component = 'div',
  onClick,
  disabled = false,
  cursor = 'pointer',
  padding, paddingX, paddingY,
  background,
  borderRadius,
  style,
  children,
  ...rest
}) {
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(e);
    }
    rest.onKeyDown?.(e);
  };

  const resolved = {
    boxSizing: 'border-box',
    cursor: disabled ? 'not-allowed' : cursor,
    userSelect: 'none',
    ...resolveSpacingProps({ padding, paddingX, paddingY }),
    ...(background !== undefined && { background: resolveColor(background) }),
    ...(borderRadius !== undefined && { borderRadius: resolveToken('border.radius', borderRadius) }),
    ...(disabled && { opacity: resolveToken('opacity', '50') }),
  };

  return (
    <Component
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      style={{ ...resolved, ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
}
