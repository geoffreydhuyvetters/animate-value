// @flow

import now from '../time/now';

type data = {
  start: number,
  end: number
};

export default (delay: number, duration: number): data => {

  const start: number = delay + now();
  const end: number = start + duration;

  return {start, end};

};
