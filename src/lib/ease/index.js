// @flow

// based on these https://gist.github.com/gre/1650294#gistcomment-1806616
// all credit to @lindell

import easeInOut from './lib/easeInOut';
import easeOut from './lib/easeOut';
import easeIn from './lib/easeIn';

export type EasingFunction = (time: number) => number;
export type Easing = string | EasingFunction;

const namedEasings: {

  linear: EasingFunction,

  easeInQuad: EasingFunction,
  easeOutQuad: EasingFunction,
  easeInOutQuad: EasingFunction,

  easeInCubic: EasingFunction,
  easeOutCubic: EasingFunction,
  easeInOutCubic: EasingFunction,

  easeInQuart: EasingFunction,
  easeOutQuart: EasingFunction,
  easeInOutQuart: EasingFunction,

  easeInQuint: EasingFunction,
  easeOutQuint: EasingFunction,
  easeInOutQuint: EasingFunction

} = {

  linear: easeInOut(1),

  easeInQuad: easeIn(2),
  easeOutQuad: easeOut(2),
  easeInOutQuad: easeInOut(2),

  easeInCubic: easeIn(3),
  easeOutCubic: easeOut(3),
  easeInOutCubic: easeInOut(3),

  easeInQuart: easeIn(4),
  easeOutQuart: easeOut(4),
  easeInOutQuart: easeInOut(4),

  easeInQuint: easeIn(5),
  easeOutQuint: easeOut(5),
  easeInOutQuint: easeInOut(5)

};

export default namedEasings;
