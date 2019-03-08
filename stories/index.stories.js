import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CounterInput from '../src';

class MockContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render () {
    return this.props.children({ count: this.state.count });
  }
}

storiesOf('Counter Input', module)
  .add('default', () => <CounterInput/>)
  .add('min/max', () => (
    <div>
      <h4>min = 0 & max = 5</h4>
      <CounterInput min={0} max={5}/>
    </div>
  ))
  .add('default count', () => (
    <div>
      <h4>default count = 5</h4>
      <CounterInput defaultCount={5}/>
    </div>
  ));