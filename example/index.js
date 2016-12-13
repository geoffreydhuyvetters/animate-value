require(`raf/polyfill`);

const av = require(`../`);

const {easings} = av;

const anim1 = av({

  to: 10,

  loop: 2, // loop: false, loop: 3
  rewind: true,

  delay: 1000,
  loopDelay: 500,
  duration: 500,
  easing: `linear`,

  change: value => console.log(`anim1: ${value}`)

});

const anim2 = av({

  to: 10,

  duration: 500,
  easing: t => t < 0.5 ? 0 : 1,

  change: value => console.log(`anim2: ${value}`)

});

const anim3 = av({

  to: 10,

  duration: 500,
  easing: easings.easeInQuad,

  change: value => console.log(`anim2: ${value}`)

});


Promise.all([anim1, anim2, anim3]).then(() => console.log(`finished`));
