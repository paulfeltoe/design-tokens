import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
  resolveShadow,
} from '../tokens/resolveToken';

export function Button({
  variant = 'primary',
  size = 'base',
  fullWidth = false,
  selected = false,
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
      letterSpacing: resolveToken('font.letterSpacing', 'widest'),
    },
    base: {
      fontSize: resolveToken('font.size', 'sm'),
      paddingTop: resolveToken('spacing', '3'),
      paddingBottom: resolveToken('spacing', '3'),
      paddingLeft: resolveToken('spacing', '6'),
      paddingRight: resolveToken('spacing', '6'),
      letterSpacing: resolveToken('font.letterSpacing', 'widest'),
    },
    lg: {
      fontSize: resolveToken('font.size', 'base'),
      paddingTop: resolveToken('spacing', '4'),
      paddingBottom: resolveToken('spacing', '4'),
      paddingLeft: resolveToken('spacing', '8'),
      paddingRight: resolveToken('spacing', '8'),
      letterSpacing: resolveToken('font.letterSpacing', 'widest'),
    },
  };

  const variantMap = {
    primary: {
      background: resolveColor('base.charcoal'),
      color: resolveColor('cream'),
      border: 'none',
      borderRadius: resolveToken('border.radius', 'full'),
      height: 50,
    },
    secondary: {
      background: resolveColor('white'),
      color: resolveColor('base.charcoal'),
      border: `${resolveToken('border.width', 'thin')} solid ${resolveColor('base.charcoal')}`,
      borderRadius: resolveToken('border.radius', 'full'),
      height: 50,
    },
    ghost: {
      background: 'transparent',
      color: resolveColor('base.charcoal'),
      border: 'none',
      borderRadius: resolveToken('border.radius', 'base'),
    },
    danger: {
      background: resolveColor('error.600'),
      color: resolveColor('cream'),
      border: 'none',
      borderRadius: resolveToken('border.radius', 'full'),
      height: 50,
    },
    link: {
      background: 'transparent',
      color: resolveColor('base.charcoal'),
      border: 'none',
      borderRadius: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
    timeSlot: {
      background: selected ? resolveColor('base.charcoal') : resolveColor('white'),
      color: selected ? resolveColor('cream') : resolveColor('base.charcoal'),
      border: `${resolveToken('border.width', 'thin')} solid ${resolveColor('base.charcoal')}`,
      borderRadius: resolveToken('border.radius', 'xl'),
      height: 42,
      paddingTop: resolveToken('spacing', '3'),
      paddingBottom: resolveToken('spacing', '3'),
      paddingLeft: resolveToken('spacing', '4'),
      paddingRight: resolveToken('spacing', '4'),
    },
    dateSelector: {
      background: selected ? resolveColor('primary.500') : resolveColor('white'),
      color: selected ? resolveColor('cream') : resolveColor('base.charcoal'),
      border: 'none',
      borderRadius: resolveToken('border.radius', 'sm'),
      paddingTop: resolveToken('spacing', '3'),
      paddingBottom: resolveToken('spacing', '3'),
      paddingLeft: resolveToken('spacing', '4'),
      paddingRight: resolveToken('spacing', '4'),
      boxShadow: selected ? resolveShadow('sm') : 'none',
      fontWeight: resolveToken('font.weight', 'medium'),
      fontSize: resolveToken('font.size', 'xs'),
      textTransform: 'none',
    },
  };

  const isCustomSize = variant === 'timeSlot' || variant === 'dateSelector' || variant === 'link';
  const sizeStyles = isCustomSize ? {} : (sizeMap[size] || sizeMap.base);
  const variantStyles = variantMap[variant] || variantMap.primary;

  const resolved = {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: resolveToken('spacing', '2'),
    fontFamily: resolveFontFamily('sans'),
    fontWeight: resolveToken('font.weight', 'bold'),
    lineHeight: '16px',
    textTransform: 'uppercase',
    borderRadius: resolveToken('border.radius', 'base'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
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
