import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function Button({
  variant = 'primary',
  size = 'base',
  fullWidth = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const sizeMap = {
    sm: {
      fontSize: resolveToken('font.size', 'xs'),
      paddingTop: resolveToken('spacing', '2'),
      paddingBottom: resolveToken('spacing', '2'),
      paddingLeft: resolveToken('spacing', '4'),
      paddingRight: resolveToken('spacing', '4'),
      letterSpacing: resolveToken('font.letterSpacing', 'wide'),
    },
    base: {
      fontSize: resolveToken('font.size', 'sm'),
      paddingTop: resolveToken('spacing', '3'),
      paddingBottom: resolveToken('spacing', '3'),
      paddingLeft: resolveToken('spacing', '6'),
      paddingRight: resolveToken('spacing', '6'),
      letterSpacing: resolveToken('font.letterSpacing', 'wide'),
    },
    lg: {
      fontSize: resolveToken('font.size', 'base'),
      paddingTop: resolveToken('spacing', '4'),
      paddingBottom: resolveToken('spacing', '4'),
      paddingLeft: resolveToken('spacing', '8'),
      paddingRight: resolveToken('spacing', '8'),
      letterSpacing: resolveToken('font.letterSpacing', 'wide'),
    },
  };

  const variantMap = {
    primary: {
      background: resolveColor('base.charcoal'),
      color: resolveColor('white'),
      border: 'none',
    },
    secondary: {
      background: 'transparent',
      color: resolveColor('base.charcoal'),
      border: `${resolveToken('border.width', 'thin')} solid ${resolveColor('base.charcoal')}`,
    },
    ghost: {
      background: 'transparent',
      color: resolveColor('base.charcoal'),
      border: 'none',
    },
    danger: {
      background: resolveColor('error.600'),
      color: resolveColor('white'),
      border: 'none',
    },
  };

  const sizeStyles = sizeMap[size] || sizeMap.base;
  const variantStyles = variantMap[variant] || variantMap.primary;

  const resolved = {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: resolveToken('spacing', '2'),
    fontFamily: resolveFontFamily('sans'),
    fontWeight: resolveToken('font.weight', 'semibold'),
    textTransform: 'uppercase',
    borderRadius: resolveToken('border.radius', 'base'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: `background ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}, opacity ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
    width: fullWidth ? '100%' : undefined,
    ...sizeStyles,
    ...variantStyles,
  };

  return (
    <button style={{ ...resolved, ...style }} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
