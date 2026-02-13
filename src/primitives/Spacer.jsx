import React from 'react';
import { resolveToken } from '../tokens/resolveToken';

/**
 * Spacer — Empty spacing primitive.
 *
 * Inserts empty space between elements. Use inside flex or stack layouts
 * as an explicit spacing element, or set `grow` to fill remaining space.
 * Renders aria-hidden since it is purely presentational. Does not accept children.
 *
 * @param {object} props
 * @param {string|number} [props.size]       Spacing token key for both width and height
 * @param {string|number} [props.width]      Spacing token key for horizontal space only (overrides size)
 * @param {string|number} [props.height]     Spacing token key for vertical space only (overrides size)
 * @param {boolean} [props.grow=false]       Apply flex: 1 to fill remaining space
 * @param {object} [props.style]             Additional inline styles (merged last)
 */
export function Spacer({
  size,
  width,
  height,
  grow = false,
  style,
  ...rest
}) {
  const resolved = {
    ...(size !== undefined && {
      width: resolveToken('spacing', String(size)),
      height: resolveToken('spacing', String(size)),
    }),
    ...(width !== undefined && { width: resolveToken('spacing', String(width)) }),
    ...(height !== undefined && { height: resolveToken('spacing', String(height)) }),
    ...(grow && { flex: 1 }),
  };

  return (
    <div aria-hidden="true" style={{ ...resolved, ...style }} {...rest} />
  );
}
