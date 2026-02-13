import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveTypographyVariant,
} from '../tokens/resolveToken';

/**
 * Label — Form label primitive.
 *
 * Renders a <label> element styled with the body.small typography variant
 * and medium font weight. Use for form field labels. The `required` prop
 * appends a visual asterisk indicator.
 *
 * @param {object} props
 * @param {string} [props.as='label']       HTML element to render
 * @param {string} [props.weight='medium']  Font weight token
 * @param {string} [props.size]             Font size token override
 * @param {string} [props.color]            Color token path
 * @param {boolean} [props.required=false]  Show a red asterisk after the label text
 * @param {object} [props.style]            Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Label({
  as: Component = 'label',
  weight = 'medium',
  size,
  color,
  required = false,
  style,
  children,
  ...rest
}) {
  const variantStyles = resolveTypographyVariant('body.small');

  const resolved = {
    margin: 0,
    display: 'inline-block',
    ...variantStyles,
    fontWeight: resolveToken('font.weight', weight),
    ...(size !== undefined && { fontSize: resolveToken('font.size', size) }),
    ...(color !== undefined && { color: resolveColor(color) }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
      {required && (
        <span style={{ color: resolveColor('error.500'), marginLeft: 2 }} aria-hidden="true"> *</span>
      )}
    </Component>
  );
}
