# react-counter-input

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]
[![Storybook][storybook-badge]][storybook]

## Installation and Usage

The easiest way to use `react-counter-input` is to install it from npm:

```
npm install react-counter-input
```

Then use it in your app:

```javascript
import React from "react";
import CounterInput from "react-counter-input";

class App extends React.Component {
  render() {
    return (
      <CounterInput
        min={0}
        max={10}
        onCountChange={count => console.log(count)}
      />
    );
  }
}
```

For more examples, check out the [Storybook][storybook].

## Props

### children
>`function` | optional

### count
> `number` | optional, defaults to `0`

### max
> `number` | optional

### min
> `number` | optional

### onCountChange
> `function` | optional

### wrapperStyle
> `object` | optional

### btnStyle
> `object` | optional

### inputStyle
> `object` | optional

[build-badge]: https://img.shields.io/travis/jacobworrel/react-counter-input/master.png?style=flat-square
[build]: https://travis-ci.org/jacobworrel/react-counter-input

[npm-badge]: https://img.shields.io/npm/v/react-counter-input.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-counter-input

[coveralls-badge]: https://img.shields.io/coveralls/jacobworrel/react-counter-input/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/jacobworrel/react-counter-input

[storybook-badge]: https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg
[storybook]: https://silly-saha-7183e3.netlify.com
