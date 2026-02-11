import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
  resolveShadow,
} from '../tokens/resolveToken';

export function BottomSheet({
  open = true,
  title,
  onClose,
  onBack,
  children,
  style,
  ...rest
}) {
  if (!open) return null;

  const overlayStyles = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 1400,
  };

  const sheetStyles = {
    boxSizing: 'border-box',
    background: resolveColor('white'),
    borderRadius: `${resolveToken('border.radius', 'md')} ${resolveToken('border.radius', 'md')} 0 0`,
    boxShadow: resolveShadow('lg'),
    width: '100%',
    maxWidth: 375,
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  const headerStyles = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    padding: `0 ${resolveToken('spacing', '4')}`,
    position: 'relative',
    flexShrink: 0,
    borderBottom: `${resolveToken('border.width', 'thin')} solid ${resolveColor('gray.200')}`,
  };

  const titleStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'xs'),
    fontWeight: resolveToken('font.weight', 'medium'),
    color: resolveColor('base.charcoal'),
    margin: 0,
    textAlign: 'center',
  };

  const iconButtonStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
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
  };

  const contentStyles = {
    flex: 1,
    overflow: 'auto',
    background: resolveColor('gray.100'),
    padding: resolveToken('spacing', '6'),
  };

  return (
    <div style={overlayStyles} {...rest}>
      <div style={{ ...sheetStyles, ...style }}>
        <div style={headerStyles}>
          {onBack && (
            <button
              onClick={onBack}
              aria-label="Back"
              style={{ ...iconButtonStyles, left: resolveToken('spacing', '1') }}
            >
              {'\u2039'}
            </button>
          )}
          {title && <h2 style={titleStyles}>{title}</h2>}
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close"
              style={{ ...iconButtonStyles, right: resolveToken('spacing', '1') }}
            >
              {'\u00D7'}
            </button>
          )}
        </div>
        <div style={contentStyles}>
          {children}
        </div>
      </div>
    </div>
  );
}
