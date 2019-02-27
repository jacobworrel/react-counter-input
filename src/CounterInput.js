import React from 'react'

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
    return(
      <div>
        <div>
          <span onClick={this.decrement}>-</span>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <span onClick={this.increment}>+</span>
        </div>
      </div>
    );
  }
}

export default CounterInput;