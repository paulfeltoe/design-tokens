import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Flex — General-purpose flex layout primitive.
 *
 * A flex container where direction is configurable via props. Use Flex when
 * you need full flex control; use Stack or Inline for opinionated vertical
 * or horizontal layouts.
 *
 * @param {object} props
 * @param {string} [props.as='div']          HTML element to render
 * @param {string} [props.direction='row']   Flex direction ("row", "column", "row-reverse", "column-reverse")
 * @param {string|number} [props.gap]        Spacing token key for gap between children
 * @param {string} [props.align]             CSS align-items ("stretch", "center", "flex-start", "flex-end")
 * @param {string} [props.justify]           CSS justify-content ("flex-start", "center", "space-between", etc.)
 * @param {boolean|string} [props.wrap=false] true becomes "wrap", or pass "wrap-reverse"
 * @param {string|number} [props.flex]       CSS flex shorthand (raw passthrough)
 * @param {string|number} [props.padding]    Spacing token for all sides
 * @param {string|number} [props.paddingX]   Spacing token for left and right
 * @param {string|number} [props.paddingY]   Spacing token for top and bottom
 * @param {string} [props.background]        Color token path
 * @param {string} [props.borderRadius]      Border radius token
 * @param {object} [props.style]             Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Flex({
  as: Component = 'div',
  direction = 'row',
  gap, align, justify, wrap = false, flex,
  padding, paddingX, paddingY,
  background, borderRadius,
  style,
  children,
  ...rest
}) {
  const resolvedWrap = wrap === true ? 'wrap' : wrap || undefined;

  const resolved = {
    display: 'flex',
    flexDirection: direction,
    boxSizing: 'border-box',
    ...(gap !== undefined && { gap: resolveToken('spacing', String(gap)) }),
    ...(align !== undefined && { alignItems: align }),
    ...(justify !== undefined && { justifyContent: justify }),
    ...(resolvedWrap && { flexWrap: resolvedWrap }),
    ...(flex !== undefined && { flex }),
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
