webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animated-css */ \"./node_modules/react-animated-css/lib/index.js\");\n/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _BurgerButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BurgerButton */ \"./src/components/BurgerButton/index.tsx\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Typography */ \"./src/components/Typography/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ \"./src/components/Header/styles.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/simonbernard/Documents/work/workspace/julie-bernard-src/src/components/Header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  _s();\n\n  Object(_Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isScrolled = _useState[0],\n      setIsScrolled = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isMobile = _useState2[0],\n      setIsMobile = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isMenuOpen = _useState3[0],\n      setIsMenuOpen = _useState3[1];\n\n  var changeLang = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])(function () {\n    return i18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeLanguage(t(\"lng\"));\n  }, []);\n  var scrollTo = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])(function (elemId) {\n    setIsMenuOpen(false);\n    document.getElementById(elemId).scrollIntoView({\n      behavior: \"smooth\"\n    });\n  }, [setIsMenuOpen]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var onScroll = function onScroll() {\n      if (window.pageYOffset === 0) {\n        isScrolled && setIsScrolled(false);\n      } else if (!isScrolled) {\n        setIsScrolled(true);\n      }\n\n      isMenuOpen && setIsMenuOpen(false);\n    };\n\n    window.addEventListener(\"scroll\", onScroll);\n    return function () {\n      return window.removeEventListener(\"scroll\", onScroll);\n    };\n  }, [isScrolled]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var onResize = function onResize() {\n      if (window.innerWidth < 900) {\n        !isMobile && setIsMobile(true);\n      } else if (isMobile) {\n        setIsMobile(false);\n        setIsMenuOpen(false);\n      }\n    };\n\n    onResize();\n    window.addEventListener(\"resize\", onResize);\n    return function () {\n      return window.removeEventListener(\"resize\", onResize);\n    };\n  }, [isMobile]);\n  var styles = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n    return true ? _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].opacity), _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].header) : undefined;\n  }, [isScrolled]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_animated_css__WEBPACK_IMPORTED_MODULE_5__[\"Animated\"], {\n      style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].menu,\n      animationIn: \"slideInDown\",\n      animationOut: \"slideOutUp\",\n      animationInDuration: 750,\n      animationOutDuration: 600,\n      animateOnMount: false,\n      isVisible: isMenuOpen,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        variant: \"subtitle\",\n        style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].mobileLink,\n        value: t(\"about\"),\n        onClick: function onClick() {\n          return scrollTo(\"about-me\");\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        variant: \"subtitle\",\n        style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].mobileLink,\n        value: t(\"creations\"),\n        onClick: function onClick() {\n          return scrollTo(\"my-creations\");\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        variant: \"subtitle\",\n        style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].mobileLink,\n        value: t(\"contact\"),\n        onClick: function onClick() {\n          return scrollTo(\"contact-me\");\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        variant: \"subtitle\",\n        style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].mobileLink,\n        value: t(\"lang\"),\n        onClick: changeLang\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: styles,\n      children: [!isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n          variant: \"subtitle\",\n          style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].link,\n          value: t(\"about\"),\n          onClick: function onClick() {\n            return scrollTo(\"about-me\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n          variant: \"subtitle\",\n          style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].link,\n          value: t(\"creations\"),\n          onClick: function onClick() {\n            return scrollTo(\"my-creations\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        variant: \"title1\",\n        style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].link,\n        value: \"J\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, _this), !isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n          variant: \"subtitle\",\n          style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].link,\n          value: t(\"contact\"),\n          onClick: function onClick() {\n            return scrollTo(\"contact-me\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n          variant: \"subtitle\",\n          style: _styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].link,\n          value: t(\"lang\"),\n          onClick: changeLang\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_BurgerButton__WEBPACK_IMPORTED_MODULE_7__[\"BurgerButton\"], {\n        open: isMenuOpen,\n        onOpenChange: setIsMenuOpen\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Header, \"G9A0wyRkdRqKeV3Wcmpy5tX+6l4=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__[\"useTranslation\"]];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9hZWViIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVRyYW5zbGF0aW9uIiwidCIsInVzZVN0YXRlIiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJjaGFuZ2VMYW5nIiwidXNlQ2FsbGJhY2siLCJpMThuZXh0IiwiY2hhbmdlTGFuZ3VhZ2UiLCJzY3JvbGxUbyIsImVsZW1JZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidXNlRWZmZWN0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25SZXNpemUiLCJpbm5lcldpZHRoIiwic3R5bGVzIiwidXNlTWVtbyIsImNsYXNzZXMiLCJvcGFjaXR5IiwiaGVhZGVyIiwibWVudSIsIm1vYmlsZUxpbmsiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFlO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ3JCQyxvRUFBYyxFQURPO0FBQUEsTUFDM0JDLENBRDJCLG1CQUMzQkEsQ0FEMkI7O0FBQUEsa0JBRUNDLHNEQUFRLENBQVUsS0FBVixDQUZUO0FBQUEsTUFFNUJDLFVBRjRCO0FBQUEsTUFFaEJDLGFBRmdCOztBQUFBLG1CQUdIRixzREFBUSxDQUFVLEtBQVYsQ0FITDtBQUFBLE1BRzVCRyxRQUg0QjtBQUFBLE1BR2xCQyxXQUhrQjs7QUFBQSxtQkFJQ0osc0RBQVEsQ0FBVSxLQUFWLENBSlQ7QUFBQSxNQUk1QkssVUFK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QUlFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVksUUFBUSxDQUFDLGNBQUQsQ0FBZDtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBLHNCQUZKLGVBaUJFLHFFQUFDLHNEQUFEO0FBQVksZUFBTyxFQUFDLFFBQXBCO0FBQTZCLGFBQUssRUFBRWdCLCtDQUFPLENBQUNLLElBQTVDO0FBQWtELGFBQUssRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLEVBa0JHLENBQUM3QixRQUFELGlCQUNDO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQ7QUFDRSxpQkFBTyxFQUFDLFVBRFY7QUFFRSxlQUFLLEVBQUV3QiwrQ0FBTyxDQUFDSyxJQUZqQjtBQUdFLGVBQUssRUFBRWpDLENBQUMsQ0FBQyxTQUFELENBSFY7QUFJRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ZLFFBQVEsQ0FBQyxZQUFELENBQWQ7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSxxRUFBQyxzREFBRDtBQUNFLGlCQUFPLEVBQUMsVUFEVjtBQUVFLGVBQUssRUFBRWdCLCtDQUFPLENBQUNLLElBRmpCO0FBR0UsZUFBSyxFQUFFakMsQ0FBQyxDQUFDLE1BQUQsQ0FIVjtBQUlFLGlCQUFPLEVBQUVRO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBLHNCQW5CSixFQWtDR0osUUFBUSxpQkFDUCxxRUFBQywwREFBRDtBQUFjLFlBQUksRUFBRUUsVUFBcEI7QUFBZ0Msb0JBQVksRUFBRUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQ0Y7QUFBQSxrQkFERjtBQThFRCxDQTlITTs7R0FBTVQsTTtVQUNHQyw0RDs7O0tBREhELE0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG5leHQgZnJvbSBcImkxOG5leHRcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlZCB9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IEJ1cmdlckJ1dHRvbiB9IGZyb20gXCIuLi9CdXJnZXJCdXR0b25cIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiLi4vVHlwb2dyYXBoeVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7fTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2hhbmdlTGFuZyA9IHVzZUNhbGxiYWNrKCgpID0+IGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UodChcImxuZ1wiKSksIFtdKTtcblxuICBjb25zdCBzY3JvbGxUbyA9IHVzZUNhbGxiYWNrKFxuICAgIChlbGVtSWQ6IHN0cmluZykgPT4ge1xuICAgICAgc2V0SXNNZW51T3BlbihmYWxzZSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSWQpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgfSxcbiAgICBbc2V0SXNNZW51T3Blbl1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCkge1xuICAgICAgICBpc1Njcm9sbGVkICYmIHNldElzU2Nyb2xsZWQoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICghaXNTY3JvbGxlZCkge1xuICAgICAgICBzZXRJc1Njcm9sbGVkKHRydWUpO1xuICAgICAgfVxuICAgICAgaXNNZW51T3BlbiAmJiBzZXRJc01lbnVPcGVuKGZhbHNlKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICB9LCBbaXNTY3JvbGxlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5MDApIHtcbiAgICAgICAgIWlzTW9iaWxlICYmIHNldElzTW9iaWxlKHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChpc01vYmlsZSkge1xuICAgICAgICBzZXRJc01vYmlsZShmYWxzZSk7XG4gICAgICAgIHNldElzTWVudU9wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgb25SZXNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKTtcbiAgfSwgW2lzTW9iaWxlXSk7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlTWVtbyhcbiAgICAoKSA9PiAodHJ1ZSA/IHsgLi4uY2xhc3Nlcy5vcGFjaXR5LCAuLi5jbGFzc2VzLmhlYWRlciB9IDogY2xhc3Nlcy5oZWFkZXIpLFxuICAgIFtpc1Njcm9sbGVkXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc01vYmlsZSAmJiAoXG4gICAgICAgIDxBbmltYXRlZFxuICAgICAgICAgIHN0eWxlPXtjbGFzc2VzLm1lbnV9XG4gICAgICAgICAgYW5pbWF0aW9uSW49XCJzbGlkZUluRG93blwiXG4gICAgICAgICAgYW5pbWF0aW9uT3V0PVwic2xpZGVPdXRVcFwiXG4gICAgICAgICAgYW5pbWF0aW9uSW5EdXJhdGlvbj17NzUwfVxuICAgICAgICAgIGFuaW1hdGlvbk91dER1cmF0aW9uPXs2MDB9XG4gICAgICAgICAgYW5pbWF0ZU9uTW91bnQ9e2ZhbHNlfVxuICAgICAgICAgIGlzVmlzaWJsZT17aXNNZW51T3Blbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGVcIlxuICAgICAgICAgICAgc3R5bGU9e2NsYXNzZXMubW9iaWxlTGlua31cbiAgICAgICAgICAgIHZhbHVlPXt0KFwiYWJvdXRcIil9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhcImFib3V0LW1lXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZVwiXG4gICAgICAgICAgICBzdHlsZT17Y2xhc3Nlcy5tb2JpbGVMaW5rfVxuICAgICAgICAgICAgdmFsdWU9e3QoXCJjcmVhdGlvbnNcIil9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhcIm15LWNyZWF0aW9uc1wiKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGVcIlxuICAgICAgICAgICAgc3R5bGU9e2NsYXNzZXMubW9iaWxlTGlua31cbiAgICAgICAgICAgIHZhbHVlPXt0KFwiY29udGFjdFwiKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKFwiY29udGFjdC1tZVwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGVcIlxuICAgICAgICAgICAgc3R5bGU9e2NsYXNzZXMubW9iaWxlTGlua31cbiAgICAgICAgICAgIHZhbHVlPXt0KFwibGFuZ1wiKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZUxhbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbmltYXRlZD5cbiAgICAgICl9XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXN9PlxuICAgICAgICB7IWlzTW9iaWxlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgdmFsdWU9e3QoXCJhYm91dFwiKX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oXCJhYm91dC1tZVwiKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGVcIlxuICAgICAgICAgICAgICBzdHlsZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICB2YWx1ZT17dChcImNyZWF0aW9uc1wiKX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oXCJteS1jcmVhdGlvbnNcIil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGUxXCIgc3R5bGU9e2NsYXNzZXMubGlua30gdmFsdWU9XCJKXCIgLz5cbiAgICAgICAgeyFpc01vYmlsZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgIHZhbHVlPXt0KFwiY29udGFjdFwiKX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oXCJjb250YWN0LW1lXCIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgIHZhbHVlPXt0KFwibGFuZ1wiKX1cbiAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlTGFuZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtpc01vYmlsZSAmJiAoXG4gICAgICAgICAgPEJ1cmdlckJ1dHRvbiBvcGVuPXtpc01lbnVPcGVufSBvbk9wZW5DaGFuZ2U9e3NldElzTWVudU9wZW59IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ })

})