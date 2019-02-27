import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CounterInput from '../src';

storiesOf('Counter Input', module)
  .add('default', () => <CounterInput/>)
  .add('min/max', () => (
    <div>
      <h4>min = 0 & max = 5</h4>
      <CounterInput min={0} max={5}/>
    </div>
  ));