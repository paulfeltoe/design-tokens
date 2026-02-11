import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function Avatar({
  src,
  alt = '',
  name,
  size = 'base',
  style,
  ...rest
}) {
  const sizeMap = {
    sm: 32,
    base: 40,
    lg: 56,
    xl: 72,
  };

  const fontSizeMap = {
    sm: resolveToken('font.size', 'xs'),
    base: resolveToken('font.size', 'sm'),
    lg: resolveToken('font.size', 'lg'),
    xl: resolveToken('font.size', 'xl'),
  };

  const dimension = sizeMap[size] || sizeMap.base;

  const getInitials = (n) => {
    if (!n) return '?';
    return n
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const containerStyles = {
    width: dimension,
    height: dimension,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: src ? 'transparent' : resolveColor('primary.200'),
    color: resolveColor('primary.700'),
    fontFamily: resolveFontFamily('sans'),
    fontSize: fontSizeMap[size] || fontSizeMap.base,
    fontWeight: resolveToken('font.weight', 'semibold'),
  };

  if (src) {
    return (
      <div style={{ ...containerStyles, ...style }} {...rest}>
        <img
          src={src}
          alt={alt || name || ''}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div style={{ ...containerStyles, ...style }} {...rest}>
      {getInitials(name)}
    </div>
  );
}
