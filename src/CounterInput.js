import React from 'react';

/**
 * todo:
 * - add onCountChange handler to lift state out of CounterInput
 * ->  invoke onCountChange anytime count is changed
 *
 * - enzyme unit tests
 * - set up travis/coveralls
 */

class CounterInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
      inputValue: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  increment () {
    const { count } = this.state;
    const { max } = this.props;

    if (count >= max) {
      return;
    }

    this.setState(state => {
      const count = state.count + 1;

      return {
        count,
        inputValue: count,
      };
    });
  }

  decrement () {
    const { count } = this.state;
    const { min } = this.props;

    if (count <= min) {
      return;
    }

    this.setState(state => {
      const count = state.count - 1;
      return {
        count,
        inputValue: count,
      };
    });
  }

  handleBlur () {
    const { inputValue, count } = this.state;
    let num = parseInt(inputValue);
    num = num > this.props.max ? this.props.max : num;
    num = num < this.props.min ? this.props.min : num;

    if (isNaN(num) === true) {
      this.setState({ inputValue: count });
    }
    else {
      this.setState({ count: num, inputValue: num });
    }
  }

  handleChange ({ target: { value: inputValue }}) {
    this.setState({ inputValue });
  }

  render() {
    return this.props.children({
      decrement: this.decrement,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      increment: this.increment,
      state: this.state,
    })
  }
}

const wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
};

const btnStyle = {
  cursor: 'pointer',
  padding: 10,
};

const inputStyle = {
  width: 40,
  height: 20,
  background: 'none',
  border: 'none',
  padding: 5,
  textAlign: 'center',
  fontSize: '1em',
};

const renderChildren = ({
  decrement,
  handleChange,
  handleBlur,
  increment,
  state: { inputValue, isDisabledDecrement, isDisabledIncrement }
}) => (
  <div style={wrapperStyle}>
    <div style={btnStyle} onClick={decrement}>&#8722;</div>
    <input
      style={inputStyle}
      type="text"
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <div style={btnStyle} onClick={increment}>&#43;</div>
  </div>
);

CounterInput.defaultProps = {
  children: renderChildren,
  min: -Infinity,
  max: Infinity,
};

export default CounterInput;