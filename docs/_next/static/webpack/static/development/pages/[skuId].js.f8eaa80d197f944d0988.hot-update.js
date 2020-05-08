webpackHotUpdate("static/development/pages/[skuId].js",{

/***/ "./pages/[skuId].tsx":
/*!***************************!*\
  !*** ./pages/[skuId].tsx ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_checkoutButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/checkoutButton */ "./components/checkoutButton.tsx");
var _this = undefined,
    _jsxFileName = "/workspace/mini-ecommerce-with-nextjs/app/nextstore/pages/[skuId].tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ProductPage = function ProductPage(_ref) {
  var sku = _ref.sku;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, sku.attributes.name), sku.image && __jsx("img", {
    src: sku.image,
    style: {
      width: 100
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, (sku.price / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: sku.currency.toUpperCase()
  })), __jsx(_components_checkoutButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    skuId: sku.id,
    itemName: sku.attributes.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, "Go back"));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

/***/ })

})
//# sourceMappingURL=[skuId].js.f8eaa80d197f944d0988.hot-update.js.map