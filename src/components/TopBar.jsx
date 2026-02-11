import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function TopBar({
  title,
  onBack,
  onClose,
  trailing,
  style,
  ...rest
}) {
  const barStyles = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    padding: `0 ${resolveToken('spacing', '1')}`,
    position: 'relative',
    background: resolveColor('white'),
    borderBottom: `${resolveToken('border.width', 'thin')} solid ${resolveColor('gray.200')}`,
  };

  const titleStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'xs'),
    fontWeight: resolveToken('font.weight', 'medium'),
    color: resolveColor('base.charcoal'),
    margin: 0,
    textAlign: 'center',
    flex: 1,
  };

  const iconButtonStyles = {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: resolveToken('font.size', 'xl'),
    color: resolveColor('base.charcoal'),
    padding: 0,
    flexShrink: 0,
  };

  return (
    <header style={{ ...barStyles, ...style }} {...rest}>
      {onBack ? (
        <button onClick={onBack} aria-label="Back" style={iconButtonStyles}>
          {'\u2039'}
        </button>
      ) : (
        <div style={{ width: 48, flexShrink: 0 }} />
      )}
      {title && <h2 style={titleStyles}>{title}</h2>}
      {(onClose || trailing) ? (
        onClose ? (
          <button onClick={onClose} aria-label="Close" style={iconButtonStyles}>
            {'\u00D7'}
          </button>
        ) : (
          trailing
        )
      ) : (
        <div style={{ width: 48, flexShrink: 0 }} />
      )}
    </header>
  );
}
