# Professional Developer-fu

## Polyfill
- A JavaScript file that patches a hole by replicating some missing native feature.

```js
// a polyfill for the new ES6 String method, startsWith()
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}
```

- Different types of polyfills
  - SVG
  - Canvas
  - Web Storage (local storage / session storage)
  - Video
  - HTML5 elements
  - Accessibility
  - Web Sockets

## Transpiling
- It takes source code and converts it into target code.
- The source and target code are at the same level of abstraction.

### Babel
- Babel is the most popular JavaScript transpiler.
- Conversion
  - ES6 to ES5
  - JSX to JavaScript
  - Flow to JavaScript
- Babel performs code transformation through plugins.
- Presets are groups of plugins.
  - `@babel/preset-es2015` converts ES6 to ES5.
- `.babelrc` specifies plugins or presets.
  - `presets: ['es2015']`
- Babel uses both `Node` and `NPM` to distribute its plugins. Both of them are needed to use Babel.
