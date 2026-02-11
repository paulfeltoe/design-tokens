import React from 'react';
import {
  resolveToken,
  resolveColor,
} from '../tokens/resolveToken';

export function IconButton({
  variant = 'ghost',
  size = 'base',
  disabled = false,
  label,
  children,
  style,
  ...rest
}) {
  const sizeMap = {
    sm: { dimension: 32, iconSize: resolveToken('font.size', 'sm') },
    base: { dimension: 40, iconSize: resolveToken('font.size', 'lg') },
    lg: { dimension: 48, iconSize: resolveToken('font.size', 'xl') },
  };

  const variantMap = {
    ghost: {
      background: 'transparent',
      color: resolveColor('base.charcoal'),
      border: 'none',
    },
    filled: {
      background: resolveColor('gray.100'),
      color: resolveColor('base.charcoal'),
      border: 'none',
    },
    outlined: {
      background: 'transparent',
      color: resolveColor('base.charcoal'),
      border: `${resolveToken('border.width', 'thin')} solid ${resolveColor('gray.300')}`,
    },
  };

  const { dimension, iconSize } = sizeMap[size] || sizeMap.base;
  const variantStyles = variantMap[variant] || variantMap.ghost;

  const resolved = {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dimension,
    height: dimension,
    borderRadius: resolveToken('border.radius', 'base'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: `background ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
    fontSize: iconSize,
    padding: 0,
    ...variantStyles,
  };

  return (
    <button
      style={{ ...resolved, ...style }}
      disabled={disabled}
      aria-label={label}
      {...rest}
    >
      {children}
    </button>
  );
}
