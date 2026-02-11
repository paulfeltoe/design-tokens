import React from 'react';
import { resolveToken, resolveColor } from '../tokens/resolveToken';

/**
 * Divider — Visual separator primitive.
 *
 * Renders a horizontal or vertical rule using border tokens.
 *
 * @param {object} props
 * @param {'horizontal'|'vertical'} [props.orientation='horizontal'] Direction of the divider
 * @param {string} [props.color='border.default']  Color token path for the divider line
 * @param {string} [props.width='thin']             Border width token ("none", "thin", "medium", "thick")
 * @param {string|number} [props.spacing='0']       Spacing token key for margin on both sides
 * @param {object} [props.style]                    Additional inline styles
 */
export function Divider({
  orientation = 'horizontal',
  color = 'border.default',
  width = 'thin',
  spacing = '0',
  style,
  ...rest
}) {
  const resolvedColor = resolveColor(color);
  const resolvedWidth = resolveToken('border.width', width);
  const resolvedSpacing = resolveToken('spacing', String(spacing));

  const isHorizontal = orientation === 'horizontal';

  const resolved = {
    border: 'none',
    ...(isHorizontal
      ? {
          borderBottom: `${resolvedWidth} solid ${resolvedColor}`,
          width: '100%',
          marginTop: resolvedSpacing,
          marginBottom: resolvedSpacing,
        }
      : {
          borderRight: `${resolvedWidth} solid ${resolvedColor}`,
          alignSelf: 'stretch',
          marginLeft: resolvedSpacing,
          marginRight: resolvedSpacing,
        }),
  };

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={{ ...resolved, ...style }}
      {...rest}
    />
  );
}
