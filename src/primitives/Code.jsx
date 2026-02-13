import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveTypographyVariant,
} from '../tokens/resolveToken';

/**
 * Code — Inline or block code text primitive.
 *
 * Renders code with the mono font family and code typography variants.
 * In inline mode (default), renders a <code> element with light background.
 * In block mode, renders a <pre> element with dark background.
 *
 * @param {object} props
 * @param {boolean} [props.block=false]       Block mode: renders <pre> with code.block variant and dark bg
 * @param {string} [props.as]                Override HTML element
 * @param {string} [props.color]             Color token path (overrides variant default)
 * @param {string} [props.background]        Background color token (overrides variant default)
 * @param {string} [props.borderRadius='sm'] Border radius token
 * @param {string|number} [props.padding]    Spacing token (overrides variant default)
 * @param {object} [props.style]             Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Code({
  block = false,
  as,
  color,
  background,
  borderRadius = 'sm',
  padding,
  style,
  children,
  ...rest
}) {
  const variant = block ? 'code.block' : 'code.inline';
  const Component = as || (block ? 'pre' : 'code');
  const variantStyles = resolveTypographyVariant(variant);

  const defaultBg = block ? 'gray.900' : 'gray.100';
  const defaultColor = block ? 'gray.100' : 'gray.700';
  const defaultPadding = block
    ? resolveToken('spacing', '4')
    : `${resolveToken('spacing', '1') || '4px'} ${resolveToken('spacing', '2') || '8px'}`;

  const resolved = {
    margin: 0,
    ...variantStyles,
    borderRadius: resolveToken('border.radius', borderRadius),
    background: resolveColor(background !== undefined ? background : defaultBg),
    color: resolveColor(color !== undefined ? color : defaultColor),
    padding: padding !== undefined ? resolveToken('spacing', String(padding)) : defaultPadding,
    ...(block && { overflow: 'auto', display: 'block' }),
    ...(!block && { display: 'inline' }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
