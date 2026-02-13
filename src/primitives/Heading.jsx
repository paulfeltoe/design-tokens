import React from 'react';
import {
  resolveColor,
  resolveTypographyVariant,
} from '../tokens/resolveToken';

/**
 * Heading — Semantic heading primitive.
 *
 * Convenience wrapper that maps a numeric level to both the correct HTML
 * element (h1–h6) and the corresponding typography variant (heading.h1–heading.h6).
 * Use the `as` prop to decouple visual style from semantic level.
 *
 * @param {object} props
 * @param {number} [props.level=2]           Heading level 1–6, maps to element and variant
 * @param {string} [props.as]               Override HTML element (e.g. render as h2 visually but h3 semantically)
 * @param {string} [props.color]            Color token path
 * @param {string} [props.align]            CSS text-align ("left", "center", "right", "justify")
 * @param {boolean} [props.truncate=false]  Truncate with ellipsis
 * @param {object} [props.style]            Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Heading({
  level = 2,
  as,
  color,
  align,
  truncate = false,
  style,
  children,
  ...rest
}) {
  const Component = as || `h${level}`;
  const variantStyles = resolveTypographyVariant(`heading.h${level}`);

  const resolved = {
    margin: 0,
    ...variantStyles,
    ...(color !== undefined && { color: resolveColor(color) }),
    ...(align !== undefined && { textAlign: align }),
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
