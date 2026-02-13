import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveShadow,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Card — Simple card surface primitive.
 *
 * A container with card-appropriate defaults: padding, rounded corners,
 * and a subtle shadow. This is a layout primitive — for the full-featured
 * Card component with variants, images, and structured content, see
 * `src/components/Card.jsx`.
 *
 * @param {object} props
 * @param {string} [props.as='div']            HTML element to render
 * @param {string|number} [props.padding='4']  Spacing token (default 16px)
 * @param {string} [props.borderRadius='md']   Border radius token
 * @param {string} [props.shadow='sm']         Shadow token
 * @param {string} [props.background='white']  Color token path
 * @param {string} [props.borderColor]         Optional border color token
 * @param {string} [props.borderWidth]         Optional border width token
 * @param {object} [props.style]               Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Card({
  as: Component = 'div',
  padding = '4',
  borderRadius = 'md',
  shadow = 'sm',
  background = 'white',
  borderColor,
  borderWidth,
  style,
  children,
  ...rest
}) {
  const resolved = {
    boxSizing: 'border-box',
    background: resolveColor(background),
    borderRadius: resolveToken('border.radius', borderRadius),
    boxShadow: resolveShadow(shadow),
    ...resolveSpacingProps({ padding }),
    ...(borderWidth !== undefined && {
      borderWidth: resolveToken('border.width', borderWidth),
      borderStyle: 'solid',
      borderColor: resolveColor(borderColor || 'gray.200'),
    }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
