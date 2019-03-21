webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Reservations.jsx":
/*!*************************************!*\
  !*** ./components/Reservations.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Card */ "./components/Card.jsx");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");















var Reservation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Reservation, _Component);

  function Reservation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Reservation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Reservation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      largestRoom: 0,
      rooms: [{
        adults: 1,
        children: 0
      }, {
        adults: 1,
        children: 0
      }, {
        adults: 1,
        children: 0
      }, {
        adults: 1,
        children: 0
      }]
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange", function (e, name, index, checked) {
      //if a room is unchecked for whatever reason from that index on will get reset in the state back to the initial values
      if (name === "largestRoom" && !checked) {
        var _this$setState;

        var reamaining = _this.state.rooms.slice(Number(index), 4);

        reamaining.forEach(function (object) {
          object.adults = 1;
          object.children = 0;
        });

        _this.setState((_this$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this$setState, name, e.target.value - 1), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this$setState, "rooms", [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.rooms.slice(0, index)), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(reamaining))), _this$setState));
      } //this gets the value of the largest room


      if (name === "largestRoom" && checked) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, Number(e.target.value)));
      } //this gets the value of children and adults and spreads it into state


      if (name === "children" || name === "adults") {
        _this.setState({
          rooms: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.rooms.slice(0, index)), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.rooms[index], Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, Number(e.target.value)))], Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.rooms.slice(index + 1)))
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSubmit", function () {
      alert("you have just booked ".concat(_this.state.largestRoom + 1, " rooms, refresh the page to see saved changes"));
      window.localStorage.clear();
      var results = {}; //this is unnecessary for this application but if it was a realworld app you would only want to save the data of the rooms booked
      // to the database

      results.rooms = _this.state.rooms.slice(0, Number(_this.state.largestRoom) + 1);
      results.largestRoom = _this.state.largestRoom;
      window.localStorage.setItem("results", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(results));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Reservation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //typically this would be done in a saga and this would be done inside of a constructor function as componentDidMount is causing a second rerendering
      //however in this instance we need to
      var results = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_13__["getResults"])();
      console.log("results:", results); //if it does exsist we will spread in the results up to the index of the largest room selected and add the default values of the remaining rooms back to state

      if (results !== null) {
        var remainingRooms = this.state.rooms.slice(Number(results.largestRoom), 3);
        this.setState({
          largestRoom: results.largestRoom,
          rooms: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(results.rooms), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(remainingRooms))
        });
      }
    } //this will grab our data from localstorage if it exsists

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: "flex",
          width: "100%",
          justifyContent: "space-between"
        }
      }, lodash_range__WEBPACK_IMPORTED_MODULE_12___default()(4).map(function (roomId) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: roomId,
          checked: _this2.state.largestRoom >= roomId,
          values: _this2.state.rooms[roomId],
          largestRoom: _this2.state.largestRoom,
          index: roomId,
          handleChange: _this2.handleChange
        });
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        style: buttonStyle,
        onClick: this.handleSubmit
      }, "Submit"));
    }
  }]);

  return Reservation;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var buttonStyle = {
  backgroundColor: "blue",
  height: "50px",
  width: "150px",
  margin: "10px",
  color: "white",
  display: "flex",
  justifyContent: "center",
  borderRadius: "5px",
  cursor: "pointer"
};
/* harmony default export */ __webpack_exports__["default"] = (Reservation);

/***/ })

})
//# sourceMappingURL=index.js.10fe75e24825e8fb3cd2.hot-update.js.map