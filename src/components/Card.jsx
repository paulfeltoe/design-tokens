import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
  resolveShadow,
} from '../tokens/resolveToken';

export function Card({
  image,
  imageAlt = '',
  title,
  subtitle,
  meta,
  children,
  variant = 'elevated',
  style,
  ...rest
}) {
  const variantMap = {
    elevated: {
      background: resolveColor('white'),
      boxShadow: resolveShadow('sm'),
      border: 'none',
    },
    outlined: {
      background: resolveColor('white'),
      boxShadow: 'none',
      border: `${resolveToken('border.width', 'thin')} solid ${resolveColor('gray.200')}`,
    },
    filled: {
      background: resolveColor('gray.100'),
      boxShadow: 'none',
      border: 'none',
    },
  };

  const variantStyles = variantMap[variant] || variantMap.elevated;

  const containerStyles = {
    boxSizing: 'border-box',
    borderRadius: resolveToken('border.radius', 'md'),
    overflow: 'hidden',
    transition: `box-shadow ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
    ...variantStyles,
  };

  const imageStyles = {
    width: '100%',
    height: 180,
    objectFit: 'cover',
    display: 'block',
  };

  const bodyStyles = {
    padding: resolveToken('spacing', '4'),
    display: 'flex',
    flexDirection: 'column',
    gap: resolveToken('spacing', '1'),
  };

  const titleStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'base'),
    fontWeight: resolveToken('font.weight', 'semibold'),
    color: resolveColor('base.charcoal'),
    margin: 0,
    lineHeight: resolveToken('font.lineHeight', 'snug'),
  };

  const subtitleStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'sm'),
    color: resolveColor('gray.500'),
    margin: 0,
    lineHeight: resolveToken('font.lineHeight', 'normal'),
  };

  const metaStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'xs'),
    color: resolveColor('gray.400'),
    margin: 0,
  };

  return (
    <div style={{ ...containerStyles, ...style }} {...rest}>
      {image && <img src={image} alt={imageAlt} style={imageStyles} />}
      <div style={bodyStyles}>
        {title && <h3 style={titleStyles}>{title}</h3>}
        {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
        {meta && <p style={metaStyles}>{meta}</p>}
        {children}
      </div>
    </div>
  );
}
