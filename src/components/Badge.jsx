import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function Badge({
  variant = 'default',
  children,
  style,
  ...rest
}) {
  const variantMap = {
    default: {
      background: resolveColor('gray.200'),
      color: resolveColor('gray.600'),
    },
    primary: {
      background: resolveColor('primary.100'),
      color: resolveColor('primary.700'),
    },
    success: {
      background: resolveColor('success.100'),
      color: resolveColor('success.700'),
    },
    warning: {
      background: resolveColor('warning.100'),
      color: resolveColor('warning.700'),
    },
    error: {
      background: resolveColor('error.100'),
      color: resolveColor('error.700'),
    },
    info: {
      background: resolveColor('info.100'),
      color: resolveColor('info.700'),
    },
  };

  const variantStyles = variantMap[variant] || variantMap.default;

  const resolved = {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    gap: resolveToken('spacing', '1'),
    paddingTop: resolveToken('spacing', '1'),
    paddingBottom: resolveToken('spacing', '1'),
    paddingLeft: resolveToken('spacing', '2'),
    paddingRight: resolveToken('spacing', '2'),
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'xs'),
    fontWeight: resolveToken('font.weight', 'medium'),
    lineHeight: resolveToken('font.lineHeight', 'tight'),
    borderRadius: resolveToken('border.radius', 'full'),
    whiteSpace: 'nowrap',
    ...variantStyles,
  };

  return (
    <span style={{ ...resolved, ...style }} {...rest}>
      {children}
    </span>
  );
}
