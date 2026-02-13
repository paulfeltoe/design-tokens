import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveSpacingProps,
} from '../tokens/resolveToken';

/**
 * Panel — Bordered section container primitive.
 *
 * A container with a visible border by default, suitable for sidebars,
 * settings sections, and content grouping. Unlike Surface where border
 * is opt-in, Panel always renders with a visible border.
 *
 * @param {object} props
 * @param {string} [props.as='div']                HTML element to render
 * @param {string|number} [props.padding='4']      Spacing token for all sides
 * @param {string|number} [props.paddingX]         Spacing token for left and right
 * @param {string|number} [props.paddingY]         Spacing token for top and bottom
 * @param {string} [props.borderColor='gray.200']  Color token for border
 * @param {string} [props.borderWidth='thin']      Border width token
 * @param {string} [props.borderRadius='base']     Border radius token
 * @param {string} [props.background='white']      Color token path
 * @param {object} [props.style]                   Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Panel({
  as: Component = 'div',
  padding = '4',
  paddingX, paddingY,
  borderColor = 'gray.200',
  borderWidth = 'thin',
  borderRadius = 'base',
  background = 'white',
  style,
  children,
  ...rest
}) {
  const resolved = {
    boxSizing: 'border-box',
    background: resolveColor(background),
    borderWidth: resolveToken('border.width', borderWidth),
    borderStyle: 'solid',
    borderColor: resolveColor(borderColor),
    borderRadius: resolveToken('border.radius', borderRadius),
    ...resolveSpacingProps({ padding, paddingX, paddingY }),
  };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
