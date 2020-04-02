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

[![Edit react-counter-input](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/y35rw89wlx?fontsize=14)

For more examples, check out the [Storybook][storybook].

## Basic Props

### count
> `number` | optional, defaults to `0`

The initial count.

### max
> `number` | optional

The maximum count.

### min
> `number` | optional

The minimum count.

### onCountChange
> `function` | optional

Handler function that gets called with the current count anytime the count state changes.

### hideDisabledButtons
> `boolean` | optional, defaults to `false`

Hide the increment and decrement buttons when the input is at max or min.

## Style Props
Style props get merged in with the default styles, allowing you to override specific properties.

### wrapperStyle
> `object` | optional

Styles applied to the top level wrapper element.

### btnStyle
> `object` | optional

Styles applied to the increment and decrement buttons.

### inputStyle
> `object` | optional

Styles applied to the text input element.

## Render Prop

If you want to have more low level control over how the component looks and behaves, use the `children` [render prop API](https://reactjs.org/docs/render-props.html).

### children
>`function` | optional

[build-badge]: https://img.shields.io/travis/jacobworrel/react-counter-input/master.png?style=flat-square
[build]: https://travis-ci.org/jacobworrel/react-counter-input

[npm-badge]: https://img.shields.io/npm/v/react-counter-input.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-counter-input

[coveralls-badge]: https://img.shields.io/coveralls/jacobworrel/react-counter-input/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/jacobworrel/react-counter-input

[storybook-badge]: https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg
[storybook]: https://silly-saha-7183e3.netlify.com
