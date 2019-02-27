import React from 'react';

/**
 * todo
 * 1) implement min/max
 * 2) enzyme unit tests
 * 3) set up travis/coveralls
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
    this.setState(state => {
      const count = state.count + 1;

      return {
        count,
        inputValue: count,
      };
    });
  }

  decrement () {
    this.setState(state => {
      const count = state.count - 1;
      return {
        count,
        inputValue: count,
      };
    });
  }

  handleBlur () {
    const { inputValue } = this.state;
    const num = parseInt(inputValue);

    if (isNaN(num) === false) {
      this.setState({ count: num });
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
      inputValue: this.state.inputValue,
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
  inputValue
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
};

export default CounterInput;