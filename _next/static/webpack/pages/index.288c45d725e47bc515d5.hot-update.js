webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MyCreations/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/MyCreations/index.tsx ***!
  \**********************************************/
/*! exports provided: MyCreations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyCreations\", function() { return MyCreations; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _creations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creations */ \"./src/components/MyCreations/creations.ts\");\n/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationBar */ \"./src/components/MyCreations/NavigationBar/index.tsx\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _Viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Viewer */ \"./src/components/MyCreations/Viewer/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./src/components/MyCreations/styles.ts\");\n\n\n\nvar _jsxFileName = \"/Users/simonbernard/Documents/work/workspace/julie-bernard-src/src/components/MyCreations/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar NavigationIndex;\n\n(function (NavigationIndex) {\n  NavigationIndex[NavigationIndex[\"SEWING\"] = 0] = \"SEWING\";\n  NavigationIndex[NavigationIndex[\"PAINTINGS\"] = 1] = \"PAINTINGS\";\n  NavigationIndex[NavigationIndex[\"DRAWINGS\"] = 2] = \"DRAWINGS\";\n  NavigationIndex[NavigationIndex[\"MU\"] = 3] = \"MU\";\n  NavigationIndex[NavigationIndex[\"DECORATION\"] = 4] = \"DECORATION\";\n})(NavigationIndex || (NavigationIndex = {}));\n\nvar MyCreations = function MyCreations(_ref) {\n  _s();\n\n  Object(_Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(0),\n      selectedIndex = _useState[0],\n      setSelectedIndex = _useState[1];\n\n  var navigationItems = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useMemo\"])(function () {\n    return [t(\"sewing\"), t(\"paintings\"), t(\"drawings\"), t(\"mu\"), t(\"decoration\")];\n  }, [t]);\n  var onNavigationItemClick = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useCallback\"])(function (index) {\n    setSelectedIndex(index);\n    document.getElementById(\"viewer\").scrollIntoView({\n      behavior: \"smooth\"\n    });\n  }, []);\n  var creations = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useMemo\"])(function () {\n    switch (selectedIndex) {\n      case NavigationIndex.DECORATION:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"decos\"];\n\n      case NavigationIndex.DRAWINGS:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"dessins\"];\n\n      case NavigationIndex.PAINTINGS:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"peintures\"];\n\n      case NavigationIndex.SEWING:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"coutures\"];\n\n      case NavigationIndex.MU:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"mu\"];\n    }\n  }, [selectedIndex]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"my-creations\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"].myCreations,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavigationBar__WEBPACK_IMPORTED_MODULE_3__[\"NavigationBar\"], {\n      items: navigationItems,\n      selectedIndex: selectedIndex,\n      onItemClick: onNavigationItemClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Viewer__WEBPACK_IMPORTED_MODULE_5__[\"Viewer\"], {\n      creations: creations\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyCreations, \"lC3hW21jlFTIScpNLg0LWtAYtU8=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_4__[\"useTranslation\"]];\n});\n\n_c = MyCreations;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyCreations\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlDcmVhdGlvbnMvaW5kZXgudHN4PzA1YTQiXSwibmFtZXMiOlsiTmF2aWdhdGlvbkluZGV4IiwiTXlDcmVhdGlvbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwibmF2aWdhdGlvbkl0ZW1zIiwidXNlTWVtbyIsIm9uTmF2aWdhdGlvbkl0ZW1DbGljayIsInVzZUNhbGxiYWNrIiwiaW5kZXgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImNyZWF0aW9ucyIsIkRFQ09SQVRJT04iLCJkZWNvcyIsIkRSQVdJTkdTIiwiZGVzc2lucyIsIlBBSU5USU5HUyIsInBlaW50dXJlcyIsIlNFV0lORyIsImNvdXR1cmVzIiwiTVUiLCJtdSIsImNsYXNzZXMiLCJteUNyZWF0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUlLQSxlOztXQUFBQSxlO0FBQUFBLGlCLENBQUFBLGU7QUFBQUEsaUIsQ0FBQUEsZTtBQUFBQSxpQixDQUFBQSxlO0FBQUFBLGlCLENBQUFBLGU7QUFBQUEsaUIsQ0FBQUEsZTtHQUFBQSxlLEtBQUFBLGU7O0FBUUUsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZTtBQUFBOztBQUFBOztBQUFBLHdCQUMxQkMsb0VBQWMsRUFEWTtBQUFBLE1BQ2hDQyxDQURnQyxtQkFDaENBLENBRGdDOztBQUFBLGtCQUdFQyxzREFBUSxDQUFDLENBQUQsQ0FIVjtBQUFBLE1BR2pDQyxhQUhpQztBQUFBLE1BR2xCQyxnQkFIa0I7O0FBS3hDLE1BQU1DLGVBQWUsR0FBR0MscURBQU8sQ0FDN0I7QUFBQSxXQUFNLENBQ0pMLENBQUMsQ0FBQyxRQUFELENBREcsRUFFSkEsQ0FBQyxDQUFDLFdBQUQsQ0FGRyxFQUdKQSxDQUFDLENBQUMsVUFBRCxDQUhHLEVBSUpBLENBQUMsQ0FBQyxJQUFELENBSkcsRUFLSkEsQ0FBQyxDQUFDLFlBQUQsQ0FMRyxDQUFOO0FBQUEsR0FENkIsRUFRN0IsQ0FBQ0EsQ0FBRCxDQVI2QixDQUEvQjtBQVdBLE1BQU1NLHFCQUFxQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBbUI7QUFDM0RMLG9CQUFnQixDQUFDSyxLQUFELENBQWhCO0FBQ0FDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsY0FBbEMsQ0FBaUQ7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBakQ7QUFDRCxHQUh3QyxFQUd0QyxFQUhzQyxDQUF6QztBQUtBLE1BQU1DLFNBQVMsR0FBR1IscURBQU8sQ0FBQyxZQUFNO0FBQzlCLFlBQVFILGFBQVI7QUFDRSxXQUFLTCxlQUFlLENBQUNpQixVQUFyQjtBQUNFLGVBQU9DLGdEQUFQOztBQUNGLFdBQUtsQixlQUFlLENBQUNtQixRQUFyQjtBQUNFLGVBQU9DLGtEQUFQOztBQUNGLFdBQUtwQixlQUFlLENBQUNxQixTQUFyQjtBQUNFLGVBQU9DLG9EQUFQOztBQUNGLFdBQUt0QixlQUFlLENBQUN1QixNQUFyQjtBQUNFLGVBQU9DLG1EQUFQOztBQUNGLFdBQUt4QixlQUFlLENBQUN5QixFQUFyQjtBQUNFLGVBQU9DLDZDQUFQO0FBVko7QUFZRCxHQWJ3QixFQWF0QixDQUFDckIsYUFBRCxDQWJzQixDQUF6QjtBQWVBLHNCQUNFO0FBQUssTUFBRSxFQUFDLGNBQVI7QUFBdUIsU0FBSyxFQUFFc0IsK0NBQU8sQ0FBQ0MsV0FBdEM7QUFBQSw0QkFDRSxxRUFBQyw0REFBRDtBQUNFLFdBQUssRUFBRXJCLGVBRFQ7QUFFRSxtQkFBYSxFQUFFRixhQUZqQjtBQUdFLGlCQUFXLEVBQUVJO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsOENBQUQ7QUFBUSxlQUFTLEVBQUVPO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBOUNNOztHQUFNZixXO1VBQ0dDLDREOzs7S0FESEQsVyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL015Q3JlYXRpb25zL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvdXR1cmVzLCBwZWludHVyZXMsIGRlY29zLCBkZXNzaW5zLCBtdSB9IGZyb20gXCIuL2NyZWF0aW9uc1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkJhciB9IGZyb20gXCIuL05hdmlnYXRpb25CYXJcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IFZpZXdlciB9IGZyb20gXCIuL1ZpZXdlclwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5lbnVtIE5hdmlnYXRpb25JbmRleCB7XG4gIFNFV0lORyA9IDAsXG4gIFBBSU5USU5HUyA9IDEsXG4gIERSQVdJTkdTID0gMixcbiAgTVUgPSAzLFxuICBERUNPUkFUSU9OID0gNCxcbn1cblxuZXhwb3J0IGNvbnN0IE15Q3JlYXRpb25zID0gKHt9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgbmF2aWdhdGlvbkl0ZW1zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB0KFwic2V3aW5nXCIpLFxuICAgICAgdChcInBhaW50aW5nc1wiKSxcbiAgICAgIHQoXCJkcmF3aW5nc1wiKSxcbiAgICAgIHQoXCJtdVwiKSxcbiAgICAgIHQoXCJkZWNvcmF0aW9uXCIpLFxuICAgIF0sXG4gICAgW3RdXG4gICk7XG5cbiAgY29uc3Qgb25OYXZpZ2F0aW9uSXRlbUNsaWNrID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXdlclwiKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY3JlYXRpb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgc3dpdGNoIChzZWxlY3RlZEluZGV4KSB7XG4gICAgICBjYXNlIE5hdmlnYXRpb25JbmRleC5ERUNPUkFUSU9OOlxuICAgICAgICByZXR1cm4gZGVjb3M7XG4gICAgICBjYXNlIE5hdmlnYXRpb25JbmRleC5EUkFXSU5HUzpcbiAgICAgICAgcmV0dXJuIGRlc3NpbnM7XG4gICAgICBjYXNlIE5hdmlnYXRpb25JbmRleC5QQUlOVElOR1M6XG4gICAgICAgIHJldHVybiBwZWludHVyZXM7XG4gICAgICBjYXNlIE5hdmlnYXRpb25JbmRleC5TRVdJTkc6XG4gICAgICAgIHJldHVybiBjb3V0dXJlcztcbiAgICAgIGNhc2UgTmF2aWdhdGlvbkluZGV4Lk1VOlxuICAgICAgICByZXR1cm4gbXU7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRJbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm15LWNyZWF0aW9uc1wiIHN0eWxlPXtjbGFzc2VzLm15Q3JlYXRpb25zfT5cbiAgICAgIDxOYXZpZ2F0aW9uQmFyXG4gICAgICAgIGl0ZW1zPXtuYXZpZ2F0aW9uSXRlbXN9XG4gICAgICAgIHNlbGVjdGVkSW5kZXg9e3NlbGVjdGVkSW5kZXh9XG4gICAgICAgIG9uSXRlbUNsaWNrPXtvbk5hdmlnYXRpb25JdGVtQ2xpY2t9XG4gICAgICAvPlxuICAgICAgPFZpZXdlciBjcmVhdGlvbnM9e2NyZWF0aW9uc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MyCreations/index.tsx\n");

/***/ })

})