import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveShadow,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Box — Generic container primitive.
 *
 * The foundational layout element. Use Box for any container that needs
 * spacing, color, borders, shadows, or sizing from the design token system.
 *
 * @param {object} props
 * @param {string} [props.as='div']           HTML element to render ("section", "article", "nav", etc.)
 * @param {string|number} [props.padding]     Spacing token key for all sides (e.g. "4" for 16px)
 * @param {string|number} [props.paddingX]    Spacing token key for left and right
 * @param {string|number} [props.paddingY]    Spacing token key for top and bottom
 * @param {string|number} [props.paddingTop]  Spacing token key for top only
 * @param {string|number} [props.paddingRight] Spacing token key for right only
 * @param {string|number} [props.paddingBottom] Spacing token key for bottom only
 * @param {string|number} [props.paddingLeft] Spacing token key for left only
 * @param {string|number} [props.margin]      Spacing token key for all sides
 * @param {string|number} [props.marginX]     Spacing token key for left and right
 * @param {string|number} [props.marginY]     Spacing token key for top and bottom
 * @param {string|number} [props.marginTop]   Spacing token key for top only
 * @param {string|number} [props.marginRight] Spacing token key for right only
 * @param {string|number} [props.marginBottom] Spacing token key for bottom only
 * @param {string|number} [props.marginLeft]  Spacing token key for left only
 * @param {string|number} [props.width]       Sizing token key (e.g. "16" for 64px)
 * @param {string|number} [props.height]      Sizing token key
 * @param {string|number} [props.minWidth]    Sizing token key
 * @param {string|number} [props.minHeight]   Sizing token key
 * @param {string|number} [props.maxWidth]    Sizing token key
 * @param {string|number} [props.maxHeight]   Sizing token key
 * @param {string} [props.background]         Color token path ("primary.500", "white", "background.secondary")
 * @param {string} [props.color]              Color token path for text color
 * @param {string} [props.borderColor]        Color token path for border
 * @param {string} [props.borderWidth]        Border width token ("none", "thin", "medium", "thick")
 * @param {string} [props.borderStyle]        Raw CSS border-style ("solid", "dashed", etc.)
 * @param {string} [props.borderRadius]       Border radius token ("none", "sm", "base", "md", "lg", "xl", "full")
 * @param {string} [props.shadow]             Shadow token ("none", "sm", "base", "md", "lg", "xl", "2xl", "inner")
 * @param {string|number} [props.opacity]     Opacity token key ("0"-"100")
 * @param {string} [props.zIndex]             Z-index token ("base", "dropdown", "modal", etc.)
 * @param {string} [props.overflow]           Raw CSS overflow value
 * @param {string} [props.display]            Raw CSS display value
 * @param {string} [props.position]           Raw CSS position value
 * @param {object} [props.style]              Additional inline styles (merged last, overrides tokens)
 * @param {React.ReactNode} [props.children]
 */
export function Box({
  as: Component = 'div',
  padding, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft,
  margin, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft,
  width, height, minWidth, minHeight, maxWidth, maxHeight,
  background, color, borderColor, borderWidth, borderStyle, borderRadius,
  shadow, opacity, zIndex, overflow, display, position,
  style,
  children,
  ...rest
}) {
  const resolveSizing = (key) => {
    if (key === undefined) return undefined;
    return resolveToken('sizing', String(key));
  };

  const resolved = {
    boxSizing: 'border-box',
    ...resolveSpacingProps({
      padding, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft,
      margin, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft,
    }),
    ...(width !== undefined && { width: resolveSizing(width) }),
    ...(height !== undefined && { height: resolveSizing(height) }),
    ...(minWidth !== undefined && { minWidth: resolveSizing(minWidth) }),
    ...(minHeight !== undefined && { minHeight: resolveSizing(minHeight) }),
    ...(maxWidth !== undefined && { maxWidth: resolveSizing(maxWidth) }),
    ...(maxHeight !== undefined && { maxHeight: resolveSizing(maxHeight) }),
    ...(background !== undefined && { background: resolveColor(background) }),
    ...(color !== undefined && { color: resolveColor(color) }),
    ...(borderColor !== undefined && { borderColor: resolveColor(borderColor) }),
    ...(borderWidth !== undefined && { borderWidth: resolveToken('border.width', borderWidth) }),
    ...(borderStyle !== undefined && { borderStyle }),
    ...(borderRadius !== undefined && { borderRadius: resolveToken('border.radius', borderRadius) }),
    ...(shadow !== undefined && { boxShadow: resolveShadow(shadow) }),
    ...(opacity !== undefined && { opacity: resolveToken('opacity', String(opacity)) }),
    ...(zIndex !== undefined && { zIndex: resolveToken('z-index', zIndex) }),
    ...(overflow !== undefined && { overflow }),
    ...(display !== undefined && { display }),
    ...(position !== undefined && { position }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
