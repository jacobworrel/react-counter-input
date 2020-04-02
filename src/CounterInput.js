import React from 'react';
import PropTypes from 'prop-types';

/**
 * todo
 * - set up flow?
 * - snapshot tests
 */

class CounterInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      count: this.props.count,
      inputValue: this.props.count,
      hideDec: this.hideDec(this.props.count),
      hideInc: this.hideInc(this.props.count),
    };
  }

  componentDidUpdate (prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState(
        {
          count: this.props.count,
          inputValue: this.props.count.toString(),
        },
        this.handleChangeCount
      );
    }
  }

  hideDec(count){
    return this.props.hideDisabledButtons && count === this.props.min
  }

  hideInc(count){
    return this.props.hideDisabledButtons && count === this.props.max
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
          inputValue: count.toString(),
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
          inputValue: count.toString(),
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
          inputValue: num.toString(),
        },
        this.handleChangeCount
      );
    }
  };

  handleChangeCount = () => {

    this.setState({
      hideInc: this.hideInc(this.state.count),
      hideDec: this.hideDec(this.state.count),
    })

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

const hiddenBtnStyle = {
  ...{visibility:'hidden'},
  ...btnStyle
}

const renderChildren = ({
  decrement,
  handleChangeInput,
  handleBlur,
  increment,
  state: { inputValue, hideInc, hideDec },
  style,
}) => (
  <div style={style.wrapperStyle}>
    <div style={hideDec ? hiddenBtnStyle : style.btnStyle} onClick={decrement}>&#8722;</div>
    <input
      style={style.inputStyle}
      type="text"
      value={inputValue}
      onChange={handleChangeInput}
      onBlur={handleBlur}
    />
    <div style={hideInc ? hiddenBtnStyle : style.btnStyle} onClick={increment}>&#43;</div>
  </div>
);

CounterInput.defaultProps = {
  children: renderChildren,
  count: 0,
  hideDisabledButtons: false,
  max: Infinity,
  min: -Infinity,
};

CounterInput.propTypes = {
  count: PropTypes.number,
  hideDisabledButtons: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  onCountChange: PropTypes.func,
};

export default CounterInput;
