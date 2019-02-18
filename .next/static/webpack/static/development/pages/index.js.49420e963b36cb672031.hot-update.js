webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Deck.js":
/*!****************************!*\
  !*** ./components/Deck.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/darkphoton/Documents/Web/Projects/React Projects/blackjack/components/Deck.js";


var Deck = function Deck(_ref) {
  var deck = _ref.deck;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Deck"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "deck",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, deck ? deck.map(function (card) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "deck-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "".concat(card.suit, " ").concat(card.value));
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Deck);

/***/ })

})
//# sourceMappingURL=index.js.49420e963b36cb672031.hot-update.js.map