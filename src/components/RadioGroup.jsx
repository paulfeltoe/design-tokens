import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function RadioGroup({
  options = [],
  value,
  onChange,
  name,
  label,
  direction = 'vertical',
  disabled = false,
  style,
  ...rest
}) {
  const groupStyles = {
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    gap: resolveToken('spacing', '3'),
  };

  const labelStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'sm'),
    fontWeight: resolveToken('font.weight', 'medium'),
    color: resolveColor('base.charcoal'),
    margin: 0,
    marginBottom: resolveToken('spacing', '2'),
  };

  return (
    <fieldset style={{ border: 'none', padding: 0, margin: 0, ...style }} {...rest}>
      {label && <legend style={labelStyles}>{label}</legend>}
      <div style={groupStyles}>
        {options.map((option) => (
          <RadioOption
            key={option.value}
            option={option}
            selected={value === option.value}
            disabled={disabled || option.disabled}
            name={name}
            onChange={onChange}
          />
        ))}
      </div>
    </fieldset>
  );
}

function RadioOption({ option, selected, disabled, name, onChange }) {
  const outerSize = 20;
  const innerSize = 10;

  const itemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: resolveToken('spacing', '3'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
  };

  const circleStyles = {
    width: outerSize,
    height: outerSize,
    borderRadius: '50%',
    border: `${resolveToken('border.width', 'medium')} solid ${selected ? resolveColor('primary.500') : resolveColor('gray.400')}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: resolveColor('white'),
    transition: `border-color ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
  };

  const dotStyles = {
    width: innerSize,
    height: innerSize,
    borderRadius: '50%',
    background: selected ? resolveColor('primary.500') : 'transparent',
    transition: `background ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
  };

  const textStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'sm'),
    color: resolveColor('base.charcoal'),
    margin: 0,
  };

  return (
    <label style={itemStyles}>
      <input
        type="radio"
        name={name}
        value={option.value}
        checked={selected}
        disabled={disabled}
        onChange={() => onChange && onChange(option.value)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <div style={circleStyles}>
        <div style={dotStyles} />
      </div>
      <span style={textStyles}>{option.label}</span>
    </label>
  );
}
