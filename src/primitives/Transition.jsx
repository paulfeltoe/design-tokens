import React from 'react';
import { resolveToken } from '../tokens/resolveToken';

/**
 * Transition — CSS transition wrapper primitive.
 *
 * Wraps children with token-resolved CSS transition properties. Use to
 * animate property changes like opacity, background, transform, etc.
 *
 * @param {object} props
 * @param {string} [props.as='div']          HTML element to render
 * @param {string} [props.property='all']    CSS transition-property ("all", "opacity", "transform", "background", etc.)
 * @param {string} [props.duration='base']   Transition duration token ("instant", "fast", "base", "medium", "slow", "slower")
 * @param {string} [props.easing='ease']     Transition easing token ("linear", "ease", "ease-in", "ease-out", "ease-in-out")
 * @param {string} [props.delay]             Transition duration token used as delay
 * @param {object} [props.style]             Additional inline styles (merged last)
 * @param {React.ReactNode} [props.children]
 */
export function Transition({
  as: Component = 'div',
  property = 'all',
  duration = 'base',
  easing = 'ease',
  delay,
  style,
  children,
  ...rest
}) {
  const resolvedDuration = resolveToken('transition.duration', duration);
  const resolvedEasing = resolveToken('transition.easing', easing);
  const resolvedDelay = delay ? resolveToken('transition.duration', delay) : undefined;

  const transition = resolvedDelay
    ? `${property} ${resolvedDuration} ${resolvedEasing} ${resolvedDelay}`
    : `${property} ${resolvedDuration} ${resolvedEasing}`;

  const resolved = { transition };

  return (
    <Component style={{ ...resolved, ...style }} {...rest}>
      {children}
    </Component>
  );
}
