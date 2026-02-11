import React from 'react';
import {
  resolveToken,
  resolveColor,
} from '../tokens/resolveToken';

export function StickyFooter({
  children,
  position = 'fixed',
  style,
  ...rest
}) {
  const footerStyles = {
    boxSizing: 'border-box',
    position,
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: 375,
    padding: `${resolveToken('spacing', '5')} ${resolveToken('spacing', '5')} ${resolveToken('spacing', '10')} ${resolveToken('spacing', '5')}`,
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 28%, rgba(255,255,255,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    gap: resolveToken('spacing', '3'),
    zIndex: 1100,
  };

  return (
    <div style={{ ...footerStyles, ...style }} {...rest}>
      {children}
    </div>
  );
}
