import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveTypographyVariant,
} from '../tokens/resolveToken';

/**
 * Caption — Small descriptive text primitive.
 *
 * Renders small, secondary-colored text for captions, helper text,
 * metadata, and descriptions. Based on the body.small typography variant
 * with text.secondary as the default color.
 *
 * @param {object} props
 * @param {string} [props.as='span']              HTML element to render
 * @param {string} [props.color='text.secondary']  Color token path
 * @param {string} [props.size]                    Font size token override
 * @param {string} [props.align]                   CSS text-align
 * @param {object} [props.style]                   Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Caption({
  as: Component = 'span',
  color = 'text.secondary',
  size,
  align,
  style,
  children,
  ...rest
}) {
  const variantStyles = resolveTypographyVariant('body.small');

  const resolved = {
    margin: 0,
    ...variantStyles,
    color: resolveColor(color),
    ...(size !== undefined && { fontSize: resolveToken('font.size', size) }),
    ...(align !== undefined && { textAlign: align }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
