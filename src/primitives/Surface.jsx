import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveShadow,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Surface — Themed container primitive.
 *
 * A styled container with background, border, shadow, and padding — the
 * semantic "I am a surface" layer. Use Surface for content areas, panels,
 * and any container that needs a visible background or elevation.
 *
 * @param {object} props
 * @param {string} [props.as='div']              HTML element to render
 * @param {string} [props.background='white']    Color token path
 * @param {string} [props.borderColor]           Color token for border (only applied when borderWidth is set)
 * @param {string} [props.borderWidth]           Border width token ("thin", "medium", "thick")
 * @param {string} [props.borderStyle='solid']   CSS border-style (only applied when borderWidth is set)
 * @param {string} [props.borderRadius='base']   Border radius token
 * @param {string} [props.shadow]                Shadow token ("sm", "base", "md", "lg", etc.)
 * @param {string|number} [props.padding]        Spacing token for all sides
 * @param {string|number} [props.paddingX]       Spacing token for left and right
 * @param {string|number} [props.paddingY]       Spacing token for top and bottom
 * @param {object} [props.style]                 Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Surface({
  as: Component = 'div',
  background = 'white',
  borderColor,
  borderWidth,
  borderStyle = 'solid',
  borderRadius = 'base',
  shadow,
  padding, paddingX, paddingY,
  style,
  children,
  ...rest
}) {
  const resolved = {
    boxSizing: 'border-box',
    background: resolveColor(background),
    borderRadius: resolveToken('border.radius', borderRadius),
    ...(borderWidth !== undefined && {
      borderWidth: resolveToken('border.width', borderWidth),
      borderStyle,
      borderColor: resolveColor(borderColor || 'gray.200'),
    }),
    ...(shadow !== undefined && { boxShadow: resolveShadow(shadow) }),
    ...resolveSpacingProps({ padding, paddingX, paddingY }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
