/*!
 * react-counter-input v0.2.1
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["reactCounterInput"] = factory(require("react"));
	else
		root["reactCounterInput"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(3)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(4);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/CounterInput.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

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

var CounterInput_renderChildren = function renderChildren(_ref2) {
  var decrement = _ref2.decrement,
      handleChangeInput = _ref2.handleChangeInput,
      handleBlur = _ref2.handleBlur,
      increment = _ref2.increment,
      _ref2$state = _ref2.state,
      inputValue = _ref2$state.inputValue,
      hideInc = _ref2$state.hideInc,
      hideDec = _ref2$state.hideDec,
      style = _ref2.style;
  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    'div',
    { style: style.wrapperStyle },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      'div',
      { style: hideDec ? hiddenBtnStyle : style.btnStyle, onClick: decrement },
      '\u2212'
    ),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('input', {
      style: style.inputStyle,
      type: 'text',
      value: inputValue,
      onChange: handleChangeInput,
      onBlur: handleBlur
    }),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      'div',
      { style: hideInc ? hiddenBtnStyle : style.btnStyle, onClick: increment },
      '+'
    )
  );
};

CounterInput.defaultProps = {
  children: CounterInput_renderChildren,
  count: 0,
  hideDisabledButtons: false,
  max: Infinity,
  min: -Infinity
};

CounterInput.propTypes = {
  count: prop_types_default.a.number,
  hideDisabledButtons: prop_types_default.a.bool,
  max: prop_types_default.a.number,
  min: prop_types_default.a.number,
  onCountChange: prop_types_default.a.func
};

/* harmony default export */ var src_CounterInput = (CounterInput);
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src = __webpack_exports__["default"] = (src_CounterInput);

/***/ })
/******/ ])["default"];
});