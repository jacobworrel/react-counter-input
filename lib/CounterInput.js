'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * todo
 * - set up flow?
 * - snapshot tests
 */

var CounterInput = function (_React$Component) {
  _inherits(CounterInput, _React$Component);

  function CounterInput(props) {
    _classCallCheck(this, CounterInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.decrement = function () {
      var count = _this.state.count;
      var min = _this.props.min;


      if (count <= min) {
        return;
      }

      _this.setState(function (state) {
        var count = state.count - 1;
        return {
          count: count,
          inputValue: count.toString()
        };
      }, _this.handleChangeCount);
    };

    _this.increment = function () {
      var count = _this.state.count;
      var max = _this.props.max;


      if (count >= max) {
        return;
      }

      _this.setState(function (state) {
        var count = state.count + 1;

        return {
          count: count,
          inputValue: count.toString()
        };
      }, _this.handleChangeCount);
    };

    _this.handleBlur = function () {
      var _this$state = _this.state,
          inputValue = _this$state.inputValue,
          count = _this$state.count;

      var num = parseInt(inputValue);
      num = num > _this.props.max ? _this.props.max : num;
      num = num < _this.props.min ? _this.props.min : num;

      if (isNaN(num) === true) {
        _this.setState({ inputValue: count });
      } else {
        _this.setState({
          count: num,
          inputValue: num.toString()
        }, _this.handleChangeCount);
      }
    };

    _this.handleChangeCount = function () {

      _this.setState({
        hideInc: _this.hideInc(_this.state.count),
        hideDec: _this.hideDec(_this.state.count)
      });

      if (_this.props.onCountChange !== undefined) {
        _this.props.onCountChange(_this.state.count);
      }
    };

    _this.handleChangeInput = function (_ref) {
      var inputValue = _ref.target.value;

      _this.setState({ inputValue: inputValue });
    };

    _this.state = {
      count: _this.props.count,
      inputValue: _this.props.count,
      hideDec: _this.hideDec(_this.props.count),
      hideInc: _this.hideInc(_this.props.count)
    };
    return _this;
  }

  CounterInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState({
        count: this.props.count,
        inputValue: this.props.count.toString()
      }, this.handleChangeCount);
    }
  };

  CounterInput.prototype.hideDec = function hideDec(count) {
    return this.props.hideDisabledButtons && count === this.props.min;
  };

  CounterInput.prototype.hideInc = function hideInc(count) {
    return this.props.hideDisabledButtons && count === this.props.max;
  };

  CounterInput.prototype.render = function render() {
    return this.props.children({
      style: {
        wrapperStyle: _extends({}, wrapperStyle, this.props.wrapperStyle),
        btnStyle: _extends({}, btnStyle, this.props.btnStyle),
        inputStyle: _extends({}, inputStyle, this.props.inputStyle)
      },
      decrement: this.decrement,
      handleChangeInput: this.handleChangeInput,
      handleBlur: this.handleBlur,
      increment: this.increment,
      state: this.state
    });
  };

  return CounterInput;
}(_react2.default.Component);

var wrapperStyle = {
  display: 'flex',
  alignItems: 'center'
};

var btnStyle = {
  cursor: 'pointer',
  padding: 10
};

var inputStyle = {
  width: 40,
  height: 20,
  background: 'none',
  border: 'none',
  padding: 5,
  textAlign: 'center',
  fontSize: '1em'
};

var hiddenBtnStyle = _extends({ visibility: 'hidden' }, btnStyle);

var renderChildren = function renderChildren(_ref2) {
  var decrement = _ref2.decrement,
      handleChangeInput = _ref2.handleChangeInput,
      handleBlur = _ref2.handleBlur,
      increment = _ref2.increment,
      _ref2$state = _ref2.state,
      inputValue = _ref2$state.inputValue,
      hideInc = _ref2$state.hideInc,
      hideDec = _ref2$state.hideDec,
      style = _ref2.style;
  return _react2.default.createElement(
    'div',
    { style: style.wrapperStyle },
    _react2.default.createElement(
      'div',
      { style: hideDec ? hiddenBtnStyle : style.btnStyle, onClick: decrement },
      '\u2212'
    ),
    _react2.default.createElement('input', {
      style: style.inputStyle,
      type: 'text',
      value: inputValue,
      onChange: handleChangeInput,
      onBlur: handleBlur
    }),
    _react2.default.createElement(
      'div',
      { style: hideInc ? hiddenBtnStyle : style.btnStyle, onClick: increment },
      '+'
    )
  );
};

CounterInput.defaultProps = {
  children: renderChildren,
  count: 0,
  hideDisabledButtons: false,
  max: Infinity,
  min: -Infinity
};

CounterInput.propTypes = process.env.NODE_ENV !== "production" ? {
  count: _propTypes2.default.number,
  hideDisabledButtons: _propTypes2.default.bool,
  max: _propTypes2.default.number,
  min: _propTypes2.default.number,
  onCountChange: _propTypes2.default.func
} : {};

exports.default = CounterInput;
module.exports = exports['default'];