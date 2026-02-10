import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
  resolveTypographyVariant,
} from '../tokens/resolveToken';

/**
 * Text — Typography primitive.
 *
 * Renders text with design token values for font size, weight, family,
 * line height, letter spacing, and color. Use the `variant` prop to apply
 * a complete typography preset, or set individual props for fine control.
 *
 * @param {object} props
 * @param {string} [props.as='p']              HTML element ("h1"-"h6", "span", "label", "p", etc.)
 * @param {string} [props.variant]             Typography variant path ("heading.h1", "body.base", "code.inline")
 * @param {string} [props.size]                Font size token ("xs", "sm", "base", "lg", "xl", "2xl"..."7xl")
 * @param {string} [props.weight]              Font weight token ("normal", "medium", "semibold", "bold", etc.)
 * @param {string} [props.family]              Font family token ("sans", "serif", "mono")
 * @param {string} [props.lineHeight]          Line height token ("none", "tight", "snug", "normal", "relaxed", "loose")
 * @param {string} [props.letterSpacing]       Letter spacing token ("tighter", "tight", "normal", "wide", "wider", "widest")
 * @param {string} [props.color]               Color token path ("gray.700", "text.primary", "white", etc.)
 * @param {string} [props.align]               CSS text-align ("left", "center", "right", "justify")
 * @param {string} [props.decoration]          CSS text-decoration ("underline", "line-through", "none")
 * @param {string} [props.transform]           CSS text-transform ("uppercase", "lowercase", "capitalize")
 * @param {string} [props.whiteSpace]          CSS white-space ("nowrap", "pre", "pre-wrap")
 * @param {boolean} [props.truncate=false]     Truncate text with ellipsis (sets overflow, whiteSpace, textOverflow)
 * @param {object} [props.style]               Additional inline styles (merged last, overrides tokens)
 * @param {React.ReactNode} [props.children]
 */
export function Text({
  as: Component = 'p',
  variant,
  size, weight, family, lineHeight, letterSpacing,
  color,
  align, decoration, transform, whiteSpace,
  truncate = false,
  style,
  children,
  ...rest
}) {
  const variantStyles = resolveTypographyVariant(variant);

  const resolved = {
    margin: 0, // reset browser defaults on p, h1, etc.
    ...variantStyles,
    // Individual props override variant values
    ...(size !== undefined && { fontSize: resolveToken('font.size', size) }),
    ...(weight !== undefined && { fontWeight: resolveToken('font.weight', weight) }),
    ...(family !== undefined && { fontFamily: resolveFontFamily(family) }),
    ...(lineHeight !== undefined && { lineHeight: resolveToken('font.lineHeight', lineHeight) }),
    ...(letterSpacing !== undefined && { letterSpacing: resolveToken('font.letterSpacing', letterSpacing) }),
    ...(color !== undefined && { color: resolveColor(color) }),
    ...(align !== undefined && { textAlign: align }),
    ...(decoration !== undefined && { textDecoration: decoration }),
    ...(transform !== undefined && { textTransform: transform }),
    ...(whiteSpace !== undefined && { whiteSpace }),
    ...(truncate && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
