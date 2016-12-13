// @flow

import type {Easing} from './lib/ease';
import namedEasings from './lib/ease';
import tick from './lib/tick';
import calcStartEnd from './lib/calc/calcStartEnd';

type options = {

  from?: number,
  to?: number,

  easing?: Easing,

  duration?: number,
  delay?: number,
  loopDelay?: number,

  loop?: number | boolean,
  rewind? : boolean,

  done?: () => void,
  change?: () => number

};

const animateValue = (options: options = {}): Promise<any> => {

  return new Promise(resolve => {

    const {
      from = 0,
      to = 1,
      easing = `easeInQuad`,
      duration = 600,
      delay = 0,
      loopDelay = 0,
      rewind = false,
      change,
      done
    } = options;

    let {loop = 1} = options;
    if (loop === false) loop = 1;

    let data = {
      from,
      to,
      duration,
      delay,
      loopDelay,
      loop,
      easing,
      rewind,
      change,
      done
    };

    data = Object.assign({}, data, calcStartEnd(delay, duration));
    data.iteration = 1;

    const raf: number = requestAnimationFrame(() => tick(data, raf, resolve));

  });

};

animateValue.easings = Object.assign({}, namedEasings);

export default animateValue;
