import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
  resolveShadow,
} from '../tokens/resolveToken';

export function BottomNav({
  items = [],
  activeItem,
  onChange,
  style,
  ...rest
}) {
  const containerStyles = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: resolveColor('white'),
    boxShadow: resolveShadow('lg'),
    paddingTop: resolveToken('spacing', '2'),
    paddingBottom: resolveToken('spacing', '2'),
    borderTop: `${resolveToken('border.width', 'thin')} solid ${resolveColor('gray.200')}`,
    width: '100%',
  };

  return (
    <nav style={{ ...containerStyles, ...style }} {...rest}>
      {items.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          isActive={activeItem === item.id}
          onClick={() => onChange && onChange(item.id)}
        />
      ))}
    </nav>
  );
}

function NavItem({ item, isActive, onClick }) {
  const itemStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: resolveToken('spacing', '1'),
    padding: resolveToken('spacing', '1'),
    paddingLeft: resolveToken('spacing', '3'),
    paddingRight: resolveToken('spacing', '3'),
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: isActive ? resolveColor('primary.500') : resolveColor('gray.500'),
    transition: `color ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
  };

  const iconStyles = {
    fontSize: 20,
    lineHeight: 1,
  };

  const labelStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'xs'),
    fontWeight: isActive ? resolveToken('font.weight', 'semibold') : resolveToken('font.weight', 'normal'),
    margin: 0,
  };

  return (
    <button style={itemStyles} onClick={onClick}>
      <span style={iconStyles}>{item.icon}</span>
      <span style={labelStyles}>{item.label}</span>
    </button>
  );
}
