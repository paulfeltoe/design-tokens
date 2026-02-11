import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function TextInput({
  label,
  error,
  disabled = false,
  style,
  inputStyle,
  ...rest
}) {
  const wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: resolveToken('spacing', '1'),
    width: '100%',
  };

  const labelStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'sm'),
    fontWeight: resolveToken('font.weight', 'medium'),
    color: disabled ? resolveColor('gray.400') : resolveColor('base.charcoal'),
    margin: 0,
  };

  const inputStyles = {
    boxSizing: 'border-box',
    width: '100%',
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'base'),
    fontWeight: resolveToken('font.weight', 'normal'),
    color: resolveColor('base.charcoal'),
    background: disabled ? resolveColor('gray.100') : resolveColor('white'),
    paddingTop: resolveToken('spacing', '3'),
    paddingBottom: resolveToken('spacing', '3'),
    paddingLeft: resolveToken('spacing', '4'),
    paddingRight: resolveToken('spacing', '4'),
    border: `${resolveToken('border.width', 'thin')} solid ${error ? resolveColor('error.500') : resolveColor('gray.300')}`,
    borderRadius: resolveToken('border.radius', 'base'),
    outline: 'none',
    transition: `border-color ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
  };

  const errorStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'xs'),
    color: resolveColor('error.600'),
    margin: 0,
  };

  return (
    <div style={{ ...wrapperStyles, ...style }}>
      {label && <label style={labelStyles}>{label}</label>}
      <input style={{ ...inputStyles, ...inputStyle }} disabled={disabled} {...rest} />
      {error && <p style={errorStyles}>{error}</p>}
    </div>
  );
}
