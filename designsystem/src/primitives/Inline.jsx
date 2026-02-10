import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Inline — Horizontal flex layout primitive.
 *
 * Arranges children in a horizontal row with consistent gap spacing.
 * Use Inline for toolbars, button groups, navigation items, icon + text pairs.
 *
 * @param {object} props
 * @param {string} [props.as='div']          HTML element to render
 * @param {string|number} [props.gap]        Spacing token key for gap between children ("2", "4", "6", etc.)
 * @param {string} [props.align]             CSS align-items ("stretch", "center", "flex-start", "flex-end")
 * @param {string} [props.justify]           CSS justify-content ("flex-start", "center", "space-between", etc.)
 * @param {boolean} [props.wrap=false]       Allow wrapping to multiple rows
 * @param {string|number} [props.padding]    Spacing token for all sides
 * @param {string|number} [props.paddingX]   Spacing token for left and right
 * @param {string|number} [props.paddingY]   Spacing token for top and bottom
 * @param {string} [props.background]        Color token path
 * @param {string} [props.borderRadius]      Border radius token
 * @param {object} [props.style]             Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Inline({
  as: Component = 'div',
  gap, align, justify, wrap = false,
  padding, paddingX, paddingY,
  background, borderRadius,
  style,
  children,
  ...rest
}) {
  const resolved = {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    ...(gap !== undefined && { gap: resolveToken('spacing', String(gap)) }),
    ...(align !== undefined && { alignItems: align }),
    ...(justify !== undefined && { justifyContent: justify }),
    ...(wrap && { flexWrap: 'wrap' }),
    ...resolveSpacingProps({ padding, paddingX, paddingY }),
    ...(background !== undefined && { background: resolveColor(background) }),
    ...(borderRadius !== undefined && { borderRadius: resolveToken('border.radius', borderRadius) }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
