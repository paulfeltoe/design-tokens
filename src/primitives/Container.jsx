import React from 'react';
import {
  resolveToken,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Container — Centered, max-width layout primitive.
 *
 * Creates a width-constrained container using the container token scale
 * (sm: 640px, md: 768px, lg: 1024px, xl: 1280px). Centers itself
 * horizontally by default.
 *
 * @param {object} props
 * @param {string} [props.as='div']          HTML element to render
 * @param {string} [props.size='lg']         Container token key ("sm", "md", "lg", "xl")
 * @param {boolean} [props.center=true]      Center horizontally with auto margins
 * @param {string|number} [props.padding]    Spacing token for all sides
 * @param {string|number} [props.paddingX]   Spacing token for left and right
 * @param {string|number} [props.paddingY]   Spacing token for top and bottom
 * @param {object} [props.style]             Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Container({
  as: Component = 'div',
  size = 'lg',
  center = true,
  padding, paddingX, paddingY,
  style,
  children,
  ...rest
}) {
  const resolved = {
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: resolveToken('container', size),
    ...(center && { marginLeft: 'auto', marginRight: 'auto' }),
    ...resolveSpacingProps({ padding, paddingX, paddingY }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
