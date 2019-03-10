import React from 'react';
import PropTypes from 'prop-types';

/**
 * todo
 * - enzyme unit tests
 * - snapshot tests
 * - set up travis
 * - set up coveralls
 */

class CounterInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      count: this.props.count,
      inputValue: this.props.count,
    };
  }

  componentDidUpdate (prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState(
        {
          count: this.props.count,
          inputValue: this.props.count,
        },
        this.handleChangeCount
      );
    }
  }

  decrement = () => {
    const { count } = this.state;
    const { min } = this.props;

    if (count <= min) {
      return;
    }

    this.setState(
      state => {
        const count = state.count - 1;
        return {
          count,
          inputValue: count,
        };
      },
      this.handleChangeCount
    );
  };

  increment = () => {
    const { count } = this.state;
    const { max } = this.props;

    if (count >= max) {
      return;
    }

    this.setState(
      state => {
        const count = state.count + 1;

        return {
          count,
          inputValue: count,
        };
      },
      this.handleChangeCount
    );
  };

  handleBlur  = () => {
    const { inputValue, count } = this.state;
    let num = parseInt(inputValue);
    num = num > this.props.max ? this.props.max : num;
    num = num < this.props.min ? this.props.min : num;

    if (isNaN(num) === true) {
      this.setState({ inputValue: count });
    }
    else {
      this.setState(
        {
          count: num,
          inputValue: num,
        },
        this.handleChangeCount
      );
    }
  };

  handleChangeCount = () => {
    if (this.props.onCountChange !== undefined) {
      this.props.onCountChange(this.state.count);
    }
  };

  handleChangeInput = ({ target: { value: inputValue }}) => {
    this.setState({ inputValue });
  };

  render() {
    return this.props.children({
      style: {
        wrapperStyle: {
          ...wrapperStyle,
          ...this.props.wrapperStyle,
        },
        btnStyle: {
          ...btnStyle,
          ...this.props.btnStyle,
        },
        inputStyle: {
          ...inputStyle,
          ...this.props.inputStyle,
        },
      },
      decrement: this.decrement,
      handleChangeInput: this.handleChangeInput,
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
  handleChangeInput,
  handleBlur,
  increment,
  state: { inputValue },
  style = {},
}) => (
  <div style={style.wrapperStyle}>
    <div style={style.btnStyle} onClick={decrement}>&#8722;</div>
    <input
      style={style.inputStyle}
      type="text"
      value={inputValue}
      onChange={handleChangeInput}
      onBlur={handleBlur}
    />
    <div style={style.btnStyle} onClick={increment}>&#43;</div>
  </div>
);

CounterInput.defaultProps = {
  children: renderChildren,
  count: 0,
  max: Infinity,
  min: -Infinity,
};

CounterInput.propTypes = {
  count: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onCountChange: PropTypes.func,
};

export default CounterInput;