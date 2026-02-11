import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function Checkbox({
  checked = false,
  disabled = false,
  onChange,
  label,
  style,
  ...rest
}) {
  const boxSize = 20;

  const wrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: resolveToken('spacing', '3'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
  };

  const checkboxStyles = {
    width: boxSize,
    height: boxSize,
    borderRadius: resolveToken('border.radius', 'sm'),
    border: `${resolveToken('border.width', 'medium')} solid ${checked ? resolveColor('primary.500') : resolveColor('gray.400')}`,
    background: checked ? resolveColor('primary.500') : resolveColor('white'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: `all ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
  };

  const checkmarkStyles = {
    width: 10,
    height: 6,
    borderLeft: `2px solid ${resolveColor('white')}`,
    borderBottom: `2px solid ${resolveColor('white')}`,
    transform: 'rotate(-45deg)',
    marginTop: -2,
    opacity: checked ? 1 : 0,
  };

  const labelStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'sm'),
    color: resolveColor('base.charcoal'),
    margin: 0,
  };

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label style={{ ...wrapperStyles, ...style }} {...rest}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => handleClick()}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <div style={checkboxStyles}>
        <div style={checkmarkStyles} />
      </div>
      {label && <span style={labelStyles}>{label}</span>}
    </label>
  );
}
