// @flow

import ease from '../ease/';

export default (start: number, duration: number, easing: string): number => {

  const prog: number = (Date.now() - start) / duration;
  return ease[easing](prog);

};
