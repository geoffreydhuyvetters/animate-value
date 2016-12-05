# animate-value

> 🏃 animates a numeric value

![Node](https://img.shields.io/node/v/animate-value.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/animate-value.svg?style=flat-square)](https://www.npmjs.com/package/animate-value)
[![David](https://img.shields.io/david/duivvv/animate-value.svg?style=flat-square)](https://david-dm.org/duivvv/animate-value)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add animate-value (--dev)

or npm

	npm install animate-value (--save-dev)


If you don't use a package manager, you can [access `animate-value` via unpkg (CDN)](https://unpkg.com/animate-value/), download the source, or point your package manager to the url.

`animate-value` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `animate-value` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/animate-value/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/animate-value) on your page. The UMD builds make `animate-value` available as a `window.animateValue` global variable.

### Usage

### setup

```js
import av from 'animate-value';

av({
  from: 0,
  to: 10,
  duration: 2000,
  change: value => console.log(value)
});

```

### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import av from 'animate-value';

av({
  from: 0,
  to: 20,
  easing: 'linear',
  duration: 1000,
  delay: 1000,
  loopDelay: 500,
  loop: true,
  reverse: true
});
```

➖ **from** ( Number ) ` ✏️ 0 `
<br/> 📝 start value

➖ **to** ( Number ) ` ✏️ 1 `
<br/> 📝 end value

➖ **easing** ( String ) ` ✏️ 'easeInQuad' `
<br/> 📝 easing function (see below in for more info)

➖ **duration** ( Number ) ` ✏️ 600 `
<br/> 📝 duration (in ms)

➖ **delay** ( Number ) ` ✏️ 0 `
<br/> 📝 delay (in ms)

➖ **loop** ( Boolean | Number ) ` ✏️ 1 `
<br/> 📝 loop the animation, `loop: true` creates an inifinite loop
<br/> ℹ️ looping with `reverse: true` creates a back- and forwards animation

➖ **loopDelay** ( Number ) ` ✏️ 0 `
<br/> 📝 delay between each loop (back- and forwards in case of `rewind: true`)

➖ **rewind** ( Boolean ) ` ✏️ false `
<br/> 📝 play the animation backwards when finished


### easing

You can choose one of these easing functions (default is `easeInOutQuad`)

- linear
- easeInQuad
- easeOutQuad
- easeInOutQuad
- easeInCubic
- easeOutCubic
- easeInOutCubic
- easeInQuart
- easeOutQuart
- easeInOutQuart
- easeInQuint
- easeOutQuint
- easeInOutQuint

based on [https://gist.github.com/gre/1650294#gistcomment-1806616](https://gist.github.com/gre/1650294#gistcomment-1806616)
<br/>all credit to [@lindell](https://github.com/lindell)


### events

#### change

📝 triggered on each change of the value, passes the value as parameter

```js
import av from 'animate-value';

av({
  from: 0,
  to: 20,
  duration: 2000,
  loop: true
  change: value => console.log(value)
});
```

#### done

📝 triggered at the end of the 'animation'
<br/>❗️ never triggered when `loop: true`

```js
import av from 'animate-value';

av({
  from: 0,
  to: 10,
  duration: 1500,
  done: () => console.log('done')
});
```

### Examples

See [`example`](example).

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
