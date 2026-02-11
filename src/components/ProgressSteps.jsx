import React from 'react';
import {
  resolveToken,
  resolveColor,
  resolveFontFamily,
} from '../tokens/resolveToken';

export function ProgressSteps({
  steps = [],
  currentStep = 0,
  style,
  ...rest
}) {
  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: 0,
  };

  return (
    <div style={{ ...containerStyles, ...style }} {...rest}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <StepIndicator
              label={step}
              number={index + 1}
              isCompleted={isCompleted}
              isCurrent={isCurrent}
            />
            {!isLast && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background: isCompleted ? resolveColor('primary.500') : resolveColor('gray.200'),
                  transition: `background ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function StepIndicator({ label, number, isCompleted, isCurrent }) {
  const dotSize = 32;

  const wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: resolveToken('spacing', '1'),
    flexShrink: 0,
  };

  const dotStyles = {
    width: dotSize,
    height: dotSize,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'xs'),
    fontWeight: resolveToken('font.weight', 'semibold'),
    transition: `all ${resolveToken('transition.duration', 'fast')} ${resolveToken('transition.easing', 'ease-out')}`,
    ...(isCompleted
      ? {
          background: resolveColor('primary.500'),
          color: resolveColor('white'),
        }
      : isCurrent
      ? {
          background: resolveColor('white'),
          color: resolveColor('primary.500'),
          border: `${resolveToken('border.width', 'medium')} solid ${resolveColor('primary.500')}`,
          boxSizing: 'border-box',
        }
      : {
          background: resolveColor('gray.200'),
          color: resolveColor('gray.500'),
        }),
  };

  const labelStyles = {
    fontFamily: resolveFontFamily('sans'),
    fontSize: resolveToken('font.size', 'xs'),
    color: isCurrent || isCompleted ? resolveColor('primary.600') : resolveColor('gray.400'),
    margin: 0,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };

  return (
    <div style={wrapperStyles}>
      <div style={dotStyles}>
        {isCompleted ? '\u2713' : number}
      </div>
      {label && <span style={labelStyles}>{label}</span>}
    </div>
  );
}
