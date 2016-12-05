// @flow

export default (power: number) => (t: number) => 1 - Math.abs(Math.pow(t - 1, power));
