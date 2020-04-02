import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactCounterInput from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-counter-input Demo</h1>
      <ReactCounterInput hideDisabledButtons min={0} max={10}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
