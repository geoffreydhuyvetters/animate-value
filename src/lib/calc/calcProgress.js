// @flow

import type {EasingFunction, Easing} from '../ease';
import namedEasings from '../ease/';

export default (start: number, duration: number, easing: Easing): number => {

  const prog: number = (Date.now() - start) / duration;
  const ease: EasingFunction = (typeof easing === `string`)
    ? namedEasings[easing] || ((t: number) => t)
    : easing;
  return ease(prog);

};
