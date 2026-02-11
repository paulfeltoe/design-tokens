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
  // Appointment card props
  dateLabel,
  dateNumber,
  dateMonth,
  timeLabel,
  // Provider card props
  avatar,
  providerName,
  providerTime,
  onExpand,
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
    appointment: {
      background: resolveColor('white'),
      boxShadow: resolveShadow('sm'),
      border: 'none',
    },
    provider: {
      background: resolveColor('white'),
      boxShadow: resolveShadow('sm'),
      border: `${resolveToken('border.width', 'thin')} solid ${resolveColor('gray.200')}`,
    },
  };

  const variantStyles = variantMap[variant] || variantMap.elevated;

  // Appointment card layout
  if (variant === 'appointment') {
    const appointmentContainer = {
      boxSizing: 'border-box',
      borderRadius: resolveToken('border.radius', 'lg'),
      overflow: 'hidden',
      display: 'flex',
      transition: `box-shadow ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
      ...variantStyles,
    };

    const dateSectionStyles = {
      background: resolveColor('primary.100'),
      padding: `${resolveToken('spacing', '5')} ${resolveToken('spacing', '4')}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minWidth: 90,
    };

    const infoSectionStyles = {
      background: resolveColor('white'),
      padding: resolveToken('spacing', '4'),
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: resolveToken('spacing', '1'),
    };

    return (
      <div style={{ ...appointmentContainer, ...style }} {...rest}>
        <div style={dateSectionStyles}>
          {dateLabel && (
            <span style={{
              fontFamily: resolveFontFamily('sans'),
              fontSize: resolveToken('font.size', 'xs'),
              fontWeight: resolveToken('font.weight', 'medium'),
              color: resolveColor('base.charcoal'),
              textTransform: 'uppercase',
            }}>
              {dateLabel}
            </span>
          )}
          {dateNumber && (
            <span style={{
              fontFamily: resolveFontFamily('serif'),
              fontSize: resolveToken('font.size', '3xl'),
              fontWeight: resolveToken('font.weight', 'semibold'),
              color: resolveColor('base.charcoal'),
              lineHeight: resolveToken('font.lineHeight', 'tight'),
            }}>
              {dateNumber}
            </span>
          )}
          {dateMonth && (
            <span style={{
              fontFamily: resolveFontFamily('sans'),
              fontSize: resolveToken('font.size', 'xs'),
              color: resolveColor('gray.500'),
            }}>
              {dateMonth}
            </span>
          )}
        </div>
        <div style={infoSectionStyles}>
          {title && (
            <h3 style={{
              fontFamily: resolveFontFamily('serif'),
              fontSize: resolveToken('font.size', 'lg'),
              fontWeight: resolveToken('font.weight', 'semibold'),
              color: resolveColor('base.charcoal'),
              margin: 0,
              lineHeight: resolveToken('font.lineHeight', 'tight'),
            }}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p style={{
              fontFamily: resolveFontFamily('sans'),
              fontSize: resolveToken('font.size', 'sm'),
              color: resolveColor('gray.500'),
              margin: 0,
              lineHeight: resolveToken('font.lineHeight', 'normal'),
            }}>
              {subtitle}
            </p>
          )}
          {timeLabel && (
            <span style={{
              fontFamily: resolveFontFamily('sans'),
              fontSize: resolveToken('font.size', 'xs'),
              color: resolveColor('gray.400'),
              display: 'flex',
              alignItems: 'center',
              gap: resolveToken('spacing', '1'),
            }}>
              {timeLabel}
            </span>
          )}
          {children}
        </div>
      </div>
    );
  }

  // Provider preview card layout
  if (variant === 'provider') {
    const providerContainer = {
      boxSizing: 'border-box',
      borderRadius: resolveToken('border.radius', 'md'),
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: resolveToken('spacing', '2'),
      gap: resolveToken('spacing', '3'),
      height: 73,
      transition: `box-shadow ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
      ...variantStyles,
    };

    return (
      <div style={{ ...providerContainer, ...style }} {...rest}>
        {avatar}
        <div style={{ flex: 1, minWidth: 0 }}>
          {providerName && (
            <p style={{
              fontFamily: resolveFontFamily('sans'),
              fontSize: resolveToken('font.size', 'sm'),
              fontWeight: resolveToken('font.weight', 'medium'),
              color: resolveColor('base.charcoal'),
              margin: 0,
              lineHeight: resolveToken('font.lineHeight', 'snug'),
            }}>
              {providerName}
            </p>
          )}
          {providerTime && (
            <span style={{
              fontFamily: resolveFontFamily('sans'),
              fontSize: resolveToken('font.size', 'xs'),
              color: resolveColor('gray.400'),
              display: 'flex',
              alignItems: 'center',
              gap: resolveToken('spacing', '1'),
            }}>
              {providerTime}
            </span>
          )}
          {children}
        </div>
        {onExpand && (
          <button
            onClick={onExpand}
            aria-label="Expand"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: resolveToken('spacing', '2'),
              fontSize: resolveToken('font.size', 'lg'),
              color: resolveColor('base.charcoal'),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {'\u203A'}
          </button>
        )}
      </div>
    );
  }

  // Default card layout (elevated, outlined, filled)
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
