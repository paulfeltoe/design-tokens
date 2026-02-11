import React from 'react';
import {
  resolveToken,
  resolveColor,
} from '../tokens/resolveToken';

export function Toggle({
  checked = false,
  disabled = false,
  onChange,
  label,
  style,
  ...rest
}) {
  const trackWidth = 44;
  const trackHeight = 24;
  const thumbSize = 20;
  const thumbOffset = 2;

  const wrapperStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: resolveToken('spacing', '3'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
  };

  const trackStyles = {
    position: 'relative',
    width: trackWidth,
    height: trackHeight,
    borderRadius: resolveToken('border.radius', 'full'),
    background: checked ? resolveColor('primary.500') : resolveColor('gray.300'),
    transition: `background ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
    flexShrink: 0,
  };

  const thumbStyles = {
    position: 'absolute',
    top: thumbOffset,
    left: checked ? trackWidth - thumbSize - thumbOffset : thumbOffset,
    width: thumbSize,
    height: thumbSize,
    borderRadius: '50%',
    background: resolveColor('white'),
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    transition: `left ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
  };

  const labelStyles = {
    fontFamily: `'Roboto', system-ui, sans-serif`,
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
    <div style={{ ...wrapperStyles, ...style }} onClick={handleClick} role="switch" aria-checked={checked} {...rest}>
      <div style={trackStyles}>
        <div style={thumbStyles} />
      </div>
      {label && <span style={labelStyles}>{label}</span>}
    </div>
  );
}
