import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Resolve a columns/rows value.
 * Numbers become `repeat(N, 1fr)`. Strings pass through as raw CSS.
 */
function resolveGridTemplate(value) {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return `repeat(${value}, 1fr)`;
  return value;
}

/**
 * Grid — CSS Grid layout primitive.
 *
 * Creates a grid container with token-based gap spacing.
 * Use Grid for card grids, dashboard layouts, and multi-column content.
 *
 * @param {object} props
 * @param {string} [props.as='div']          HTML element to render
 * @param {number|string} [props.columns]    Number of columns (3 → "repeat(3, 1fr)") or raw CSS template string
 * @param {number|string} [props.rows]       Number of rows or raw CSS template string
 * @param {string|number} [props.gap]        Spacing token key for both column and row gap
 * @param {string|number} [props.columnGap]  Spacing token key for column gap only
 * @param {string|number} [props.rowGap]     Spacing token key for row gap only
 * @param {string} [props.align]             CSS align-items ("start", "center", "end", "stretch")
 * @param {string} [props.justify]           CSS justify-items ("start", "center", "end", "stretch")
 * @param {string} [props.placeItems]        CSS place-items shorthand ("center", "start end", etc.)
 * @param {string|number} [props.padding]    Spacing token for all sides
 * @param {string|number} [props.paddingX]   Spacing token for left and right
 * @param {string|number} [props.paddingY]   Spacing token for top and bottom
 * @param {string} [props.background]        Color token path
 * @param {string} [props.borderRadius]      Border radius token
 * @param {object} [props.style]             Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Grid({
  as: Component = 'div',
  columns, rows,
  gap, columnGap, rowGap,
  align, justify, placeItems,
  padding, paddingX, paddingY,
  background, borderRadius,
  style,
  children,
  ...rest
}) {
  const resolved = {
    display: 'grid',
    boxSizing: 'border-box',
    ...(columns !== undefined && { gridTemplateColumns: resolveGridTemplate(columns) }),
    ...(rows !== undefined && { gridTemplateRows: resolveGridTemplate(rows) }),
    ...(gap !== undefined && { gap: resolveToken('spacing', String(gap)) }),
    ...(columnGap !== undefined && { columnGap: resolveToken('spacing', String(columnGap)) }),
    ...(rowGap !== undefined && { rowGap: resolveToken('spacing', String(rowGap)) }),
    ...(align !== undefined && { alignItems: align }),
    ...(justify !== undefined && { justifyItems: justify }),
    ...(placeItems !== undefined && { placeItems }),
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
