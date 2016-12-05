require(`raf/polyfill`);

const av = require(`../`);

av({

  to: 10,

  loop: 2, // loop: false, loop: 3
  rewind: true,

  delay: 1000,
  loopDelay: 500,
  duration: 500,

  change: value => console.log(value),
  done: () => console.log(`DONE`)

});
