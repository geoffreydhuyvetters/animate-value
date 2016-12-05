// @flow

import calcStartEnd from './calc/calcStartEnd';
import calcProgress from './calc/calcProgress';

import now from './time/now';

type data = {
  to: number,
  from: number,
  easing: string,
  duration: number,
  loop: number | boolean,
  rewind: boolean,
  delay: number,
  loopDelay: number,
  start?: number,
  iteration?: number,
  end?: number,
  value?: number,
  change?: () => number,
  done?: Function
}

const tick = (data: data, label: number, resolve: Function): void => {

  const {
    start, end,
    easing, to,
    from, duration,
    change, done,
    loop, rewind,
    loopDelay
  } = data;

  if (start && end) {

    const prog: number = calcProgress(start, duration, easing);
    data.value = from + ((to - from) * prog);

    if (now() <= end) {

      if (change && now() >= start) change(data.value);

      label = requestAnimationFrame(() => tick(data, label, resolve));

    } else {

      if (loop) {

        if (rewind) {

          const {from, to} = data;

          data.from = to;
          data.to = from;

        }

        const delay = loopDelay;

        data = Object.assign({}, data, calcStartEnd(delay, duration));

        if (data.iteration) {

          data.iteration += 1;

          let {iteration} = data;

          if (rewind) iteration = iteration / 2;

          if (loop === true || iteration <= loop) {
            label = requestAnimationFrame(() => tick(data, label, resolve));
          } else {
            if (done) done();
            resolve();
          }

        }

      } else {
        if (done) done();
      }

    }

  }


};

export default tick;
