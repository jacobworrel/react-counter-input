import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import CounterInput from '../src';

export function generateRandomNum (a, b) {
  return Math.floor(Math.random() * b) + a;
}

class MockContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleBtnClick = () => {
    const rand = generateRandomNum(1, 5);
    this.setState({ count: rand });
  };

  syncCount = (count) => {
    this.setState({ count });
  };

  render () {
    return (
      <React.Fragment>
        <div>Container count: {this.state.count}</div>
        {this.props.renderCounter({
          count: this.state.count,
          syncCount: this.syncCount,
        })}
        <button onClick={this.handleBtnClick}>Change Container Count</button>
      </React.Fragment>
    );
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
  .add('count from props', () => (
    <div>
      <h4>props.count = 5</h4>
      <CounterInput count={5}/>
    </div>
  ))
  .add('with container', () => (
    <div>
      <MockContainer
        renderCounter={({ count }) => (
          <CounterInput count={count} />
        )}
      />
    </div>
  ))
  .add('with container + onCountChange', () => (
    <div>
      <MockContainer
        renderCounter={({ count }) => (
          <CounterInput
            count={count}
            onCountChange={action('count-change')}
          />
        )}
      />
    </div>
  ))
  .add('with container + onCountChange + synced count state', () => (
    <div>
      <MockContainer
        renderCounter={({ count, syncCount }) => (
          <CounterInput
            count={count}
            onCountChange={syncCount}
          />
        )}
      />
    </div>
  ));