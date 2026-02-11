import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function ListItem({
  title,
  subtitle,
  leading,
  trailing,
  showChevron = false,
  showDivider = true,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const containerStyles = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    gap: resolveToken('spacing', '3'),
    background: 'transparent',
    cursor: onClick && !disabled ? 'pointer' : 'default',
    opacity: disabled ? 0.4 : 1,
    transition: `background ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
    width: '100%',
    border: 'none',
    textAlign: 'left',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    paddingTop: resolveToken('spacing', '4'),
    paddingBottom: resolveToken('spacing', '4'),
    paddingLeft: resolveToken('spacing', '4'),
    paddingRight: resolveToken('spacing', '4'),
    borderBottom: showDivider ? `${resolveToken('border.width', 'thin')} solid ${resolveColor('gray.200')}` : 'none',
  };

  const contentStyles = {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: resolveToken('spacing', '0'),
  };

  const titleStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'base'),
    fontWeight: resolveToken('font.weight', 'medium'),
    color: resolveColor('base.charcoal'),
    margin: 0,
    lineHeight: resolveToken('font.lineHeight', 'snug'),
  };

  const subtitleStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'sm'),
    color: resolveColor('gray.500'),
    margin: 0,
    marginTop: resolveToken('spacing', '1'),
    lineHeight: resolveToken('font.lineHeight', 'normal'),
  };

  const chevronStyles = {
    color: resolveColor('gray.400'),
    fontSize: resolveToken('font.size', 'base'),
    flexShrink: 0,
  };

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      style={{ ...containerStyles, ...style }}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...rest}
    >
      {leading && <div style={{ flexShrink: 0 }}>{leading}</div>}
      <div style={contentStyles}>
        {title && <p style={titleStyles}>{title}</p>}
        {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
      </div>
      {trailing && <div style={{ flexShrink: 0 }}>{trailing}</div>}
      {showChevron && <span style={chevronStyles}>&#8250;</span>}
    </Component>
  );
}
