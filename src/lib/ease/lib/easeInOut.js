// @flow

import easeIn from './easeIn';
import easeOut from './easeOut';

export default (power: number) => (t: number) => {

  if (t < .5) {
    return easeIn(power)(t * 2) / 2;
  } else {
    return easeOut(power)(t * 2 - 1) / 2 + 0.5;
  }

};
