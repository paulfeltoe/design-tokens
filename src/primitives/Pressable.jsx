import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Pressable — Button-like interactive primitive.
 *
 * Renders a <button> (or any element) with all default button styles reset,
 * providing a clean interactive base for custom buttons. Automatically adds
 * type="button" when rendering a button element to prevent form submission.
 *
 * @param {object} props
 * @param {string} [props.as='button']             HTML element to render
 * @param {boolean} [props.disabled=false]          Disabled state
 * @param {string|number} [props.padding]           Spacing token for all sides
 * @param {string|number} [props.paddingX]          Spacing token for left and right
 * @param {string|number} [props.paddingY]          Spacing token for top and bottom
 * @param {string} [props.background='transparent'] Color token path
 * @param {string} [props.color]                    Text color token
 * @param {string} [props.borderRadius]             Border radius token
 * @param {string} [props.cursor='pointer']         CSS cursor value
 * @param {object} [props.style]                    Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Pressable({
  as: Component = 'button',
  disabled = false,
  padding, paddingX, paddingY,
  background = 'transparent',
  color,
  borderRadius,
  cursor = 'pointer',
  style,
  children,
  ...rest
}) {
  const resolved = {
    border: 'none',
    background: resolveColor(background),
    font: 'inherit',
    cursor: disabled ? 'not-allowed' : cursor,
    padding: 0,
    margin: 0,
    textAlign: 'inherit',
    appearance: 'none',
    WebkitAppearance: 'none',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...resolveSpacingProps({ padding, paddingX, paddingY }),
    ...(color !== undefined && { color: resolveColor(color) }),
    ...(borderRadius !== undefined && { borderRadius: resolveToken('border.radius', borderRadius) }),
    ...(disabled && { opacity: resolveToken('opacity', '50') }),
  };

  const buttonProps = Component === 'button' ? { type: 'button' } : {};

  return (
    <Component
      disabled={disabled}
      style={{ ...resolved, ...style }}
      {...buttonProps}
      {...rest}
    >
      {children}
    </Component>
  );
}
