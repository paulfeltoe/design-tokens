import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function Chip({
  selected = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const resolved = {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    gap: resolveToken('spacing', '1'),
    paddingTop: resolveToken('spacing', '2'),
    paddingBottom: resolveToken('spacing', '2'),
    paddingLeft: resolveToken('spacing', '4'),
    paddingRight: resolveToken('spacing', '4'),
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'xs'),
    fontWeight: resolveToken('font.weight', 'semibold'),
    textTransform: 'uppercase',
    letterSpacing: resolveToken('font.letterSpacing', 'wide'),
    borderRadius: resolveToken('border.radius', 'full'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: `all ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
    background: selected ? resolveColor('primary.100') : 'transparent',
    color: selected ? resolveColor('primary.700') : resolveColor('gray.600'),
    border: `${resolveToken('border.width', 'thin')} solid ${selected ? resolveColor('primary.400') : resolveColor('gray.300')}`,
  };

  return (
    <button style={{ ...resolved, ...style }} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
