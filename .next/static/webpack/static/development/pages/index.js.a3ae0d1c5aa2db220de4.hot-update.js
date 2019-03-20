webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.jsx":
/*!*****************************!*\
  !*** ./components/Card.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var Card =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Card, _Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      checked: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFlipCheck", function () {
      _this.setState({
        checked: !_this.state.checked
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Card, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.index <= this.props.largestRoom) {
        this.setState({
          checked: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.largestRoom > this.props.largestRoom) {
        this.setState({
          checked: false
        });
      }

      if (this.props.largestRoom > this.props.index && !this.state.checked) {
        this.setState({
          checked: true
        });
      }

      if (this.props.largestRoom === this.props.index && !this.state.checked) {
        this.setState({
          checked: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleChange = _this$props.handleChange,
          index = _this$props.index,
          values = _this$props.values;
      var checked = this.state.checked;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: cardStyles
      }, index > 0 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: {
          position: "absolute",
          margin: "35px",
          transform: "scale(1.5)"
        },
        onClick: this.handleFlipCheck,
        onChange: function onChange(e) {
          return handleChange(e, "largestRoom", index, !checked);
        },
        type: "checkbox",
        name: "largestRoom",
        value: index,
        checked: checked
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        style: {
          justifyContent: "center",
          display: "flex"
        }
      }, "Room ", index + 1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: checked ? activeStyle : disabledStyle
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: childrenStyle
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Adults (18+)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        onChange: function onChange(e) {
          return handleChange(e, "adults", index);
        },
        name: "adults",
        value: values.adults
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: 1,
        disabled: !checked && index > 0
      }, "1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: 2,
        disabled: !checked && index > 0
      }, "2")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: childrenStyle
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Children (0-17)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        onChange: function onChange(e) {
          return handleChange(e, "children", index);
        },
        name: "chidren"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        selected: true,
        default: true,
        value: values.children,
        disabled: true
      }, values.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: 0,
        disabled: !checked && index > 0
      }, "0"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: 1,
        disabled: !checked && index > 0
      }, "1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: 2,
        disabled: !checked && index > 0
      }, "2"))))));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var cardStyles = {
  backgroundColor: "lightGrey",
  border: "1px solid #979797",
  borderRadius: "0.5rem",
  boxShadow: "1px 1px 1px 1px #cbc",
  height: "300px",
  width: "300px",
  padding: "10px"
};
var activeStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  backgroundColor: "white",
  height: "200px"
};
var disabledStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  backgroundColor: "lightGrey"
};
var childrenStyle = {
  display: "flex",
  padding: "5px"
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.a3ae0d1c5aa2db220de4.hot-update.js.map