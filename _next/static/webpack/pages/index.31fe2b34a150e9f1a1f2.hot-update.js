webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MyCreations/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/MyCreations/index.tsx ***!
  \**********************************************/
/*! exports provided: MyCreations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyCreations\", function() { return MyCreations; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _creations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creations */ \"./src/components/MyCreations/creations.ts\");\n/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationBar */ \"./src/components/MyCreations/NavigationBar/index.tsx\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _Viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Viewer */ \"./src/components/MyCreations/Viewer/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./src/components/MyCreations/styles.ts\");\n\n\n\nvar _jsxFileName = \"/Users/simonbernard/Documents/work/workspace/julie-bernard-src/src/components/MyCreations/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar NavigationIndex;\n\n(function (NavigationIndex) {\n  NavigationIndex[NavigationIndex[\"SEWING\"] = 0] = \"SEWING\";\n  NavigationIndex[NavigationIndex[\"PAINTINGS\"] = 1] = \"PAINTINGS\";\n  NavigationIndex[NavigationIndex[\"DRAWINGS\"] = 2] = \"DRAWINGS\";\n  NavigationIndex[NavigationIndex[\"MU\"] = 3] = \"MU\";\n  NavigationIndex[NavigationIndex[\"DECORATION\"] = 4] = \"DECORATION\";\n})(NavigationIndex || (NavigationIndex = {}));\n\nvar MyCreations = function MyCreations(_ref) {\n  _s();\n\n  Object(_Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(0),\n      selectedIndex = _useState[0],\n      setSelectedIndex = _useState[1];\n\n  var navigationItems = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useMemo\"])(function () {\n    return [t(\"sewing\"), t(\"paintings\"), t(\"drawings\"), t(\"mu\"), t(\"decoration\")];\n  }, [t]);\n  var onNavigationItemClick = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useCallback\"])(function (index) {\n    setSelectedIndex(index);\n    document.getElementById(\"my-creations\").scrollIntoView({\n      behavior: \"smooth\"\n    });\n  }, []);\n  var creations = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useMemo\"])(function () {\n    switch (selectedIndex) {\n      case NavigationIndex.DECORATION:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"decos\"];\n\n      case NavigationIndex.DRAWINGS:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"dessins\"];\n\n      case NavigationIndex.PAINTINGS:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"peintures\"];\n\n      case NavigationIndex.SEWING:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"coutures\"];\n\n      case NavigationIndex.MU:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"mu\"];\n    }\n  }, [selectedIndex]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"my-creations\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"].myCreations,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavigationBar__WEBPACK_IMPORTED_MODULE_3__[\"NavigationBar\"], {\n      items: navigationItems,\n      selectedIndex: selectedIndex,\n      onItemClick: onNavigationItemClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Viewer__WEBPACK_IMPORTED_MODULE_5__[\"Viewer\"], {\n      creations: creations\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyCreations, \"lC3hW21jlFTIScpNLg0LWtAYtU8=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_4__[\"useTranslation\"]];\n});\n\n_c = MyCreations;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyCreations\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlDcmVhdGlvbnMvaW5kZXgudHN4PzA1YTQiXSwibmFtZXMiOlsiTmF2aWdhdGlvbkluZGV4IiwiTXlDcmVhdGlvbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwibmF2aWdhdGlvbkl0ZW1zIiwidXNlTWVtbyIsIm9uTmF2aWdhdGlvbkl0ZW1DbGljayIsInVzZUNhbGxiYWNrIiwiaW5kZXgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImNyZWF0aW9ucyIsIkRFQ09SQVRJT04iLCJkZWNvcyIsIkRSQVdJTkdTIiwiZGVzc2lucyIsIlBBSU5USU5HUyIsInBlaW50dXJlcyIsIlNFV0lORyIsImNvdXR1cmVzIiwiTVUiLCJtdSIsImNsYXNzZXMiLCJteUNyZWF0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUlLQSxlOztXQUFBQSxlO0FBQUFBLGlCLENBQUFBLGU7QUFBQUEsaUIsQ0FBQUEsZTtBQUFBQSxpQixDQUFBQSxlO0FBQUFBLGlCLENBQUFBLGU7QUFBQUEsaUIsQ0FBQUEsZTtHQUFBQSxlLEtBQUFBLGU7O0FBUUUsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZTtBQUFBOztBQUFBOztBQUFBLHdCQUMxQkMsb0VBQWMsRUFEWTtBQUFBLE1BQ2hDQyxDQURnQyxtQkFDaENBLENBRGdDOztBQUFBLGtCQUdFQyxzREFBUSxDQUFDLENBQUQsQ0FIVjtBQUFBLE1BR2pDQyxhQUhpQztBQUFBLE1BR2xCQyxnQkFIa0I7O0FBS3hDLE1BQU1DLGVBQWUsR0FBR0MscURBQU8sQ0FDN0I7QUFBQSxXQUFNLENBQ0pMLENBQUMsQ0FBQyxRQUFELENBREcsRUFFSkEsQ0FBQyxDQUFDLFdBQUQsQ0FGRyxFQUdKQSxDQUFDLENBQUMsVUFBRCxDQUhHLEVBSUpBLENBQUMsQ0FBQyxJQUFELENBSkcsRUFLSkEsQ0FBQyxDQUFDLFlBQUQsQ0FMRyxDQUFOO0FBQUEsR0FENkIsRUFRN0IsQ0FBQ0EsQ0FBRCxDQVI2QixDQUEvQjtBQVdBLE1BQU1NLHFCQUFxQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBbUI7QUFDM0RMLG9CQUFnQixDQUFDSyxLQUFELENBQWhCO0FBQ0FDLFlBQVEsQ0FDTEMsY0FESCxDQUNrQixjQURsQixFQUVHQyxjQUZILENBRWtCO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBRmxCO0FBR0QsR0FMd0MsRUFLdEMsRUFMc0MsQ0FBekM7QUFPQSxNQUFNQyxTQUFTLEdBQUdSLHFEQUFPLENBQUMsWUFBTTtBQUM5QixZQUFRSCxhQUFSO0FBQ0UsV0FBS0wsZUFBZSxDQUFDaUIsVUFBckI7QUFDRSxlQUFPQyxnREFBUDs7QUFDRixXQUFLbEIsZUFBZSxDQUFDbUIsUUFBckI7QUFDRSxlQUFPQyxrREFBUDs7QUFDRixXQUFLcEIsZUFBZSxDQUFDcUIsU0FBckI7QUFDRSxlQUFPQyxvREFBUDs7QUFDRixXQUFLdEIsZUFBZSxDQUFDdUIsTUFBckI7QUFDRSxlQUFPQyxtREFBUDs7QUFDRixXQUFLeEIsZUFBZSxDQUFDeUIsRUFBckI7QUFDRSxlQUFPQyw2Q0FBUDtBQVZKO0FBWUQsR0Fid0IsRUFhdEIsQ0FBQ3JCLGFBQUQsQ0Fic0IsQ0FBekI7QUFlQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxjQUFSO0FBQXVCLFNBQUssRUFBRXNCLCtDQUFPLENBQUNDLFdBQXRDO0FBQUEsNEJBQ0UscUVBQUMsNERBQUQ7QUFDRSxXQUFLLEVBQUVyQixlQURUO0FBRUUsbUJBQWEsRUFBRUYsYUFGakI7QUFHRSxpQkFBVyxFQUFFSTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLHFFQUFDLDhDQUFEO0FBQVEsZUFBUyxFQUFFTztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQWhETTs7R0FBTWYsVztVQUNHQyw0RDs7O0tBREhELFciLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NeUNyZWF0aW9ucy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3V0dXJlcywgcGVpbnR1cmVzLCBkZWNvcywgZGVzc2lucywgbXUgfSBmcm9tIFwiLi9jcmVhdGlvbnNcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25CYXIgfSBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyBWaWV3ZXIgfSBmcm9tIFwiLi9WaWV3ZXJcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuZW51bSBOYXZpZ2F0aW9uSW5kZXgge1xuICBTRVdJTkcgPSAwLFxuICBQQUlOVElOR1MgPSAxLFxuICBEUkFXSU5HUyA9IDIsXG4gIE1VID0gMyxcbiAgREVDT1JBVElPTiA9IDQsXG59XG5cbmV4cG9ydCBjb25zdCBNeUNyZWF0aW9ucyA9ICh7fTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG5hdmlnYXRpb25JdGVtcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAgdChcInNld2luZ1wiKSxcbiAgICAgIHQoXCJwYWludGluZ3NcIiksXG4gICAgICB0KFwiZHJhd2luZ3NcIiksXG4gICAgICB0KFwibXVcIiksXG4gICAgICB0KFwiZGVjb3JhdGlvblwiKSxcbiAgICBdLFxuICAgIFt0XVxuICApO1xuXG4gIGNvbnN0IG9uTmF2aWdhdGlvbkl0ZW1DbGljayA9IHVzZUNhbGxiYWNrKChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcIm15LWNyZWF0aW9uc1wiKVxuICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjcmVhdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBzd2l0Y2ggKHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIGNhc2UgTmF2aWdhdGlvbkluZGV4LkRFQ09SQVRJT046XG4gICAgICAgIHJldHVybiBkZWNvcztcbiAgICAgIGNhc2UgTmF2aWdhdGlvbkluZGV4LkRSQVdJTkdTOlxuICAgICAgICByZXR1cm4gZGVzc2lucztcbiAgICAgIGNhc2UgTmF2aWdhdGlvbkluZGV4LlBBSU5USU5HUzpcbiAgICAgICAgcmV0dXJuIHBlaW50dXJlcztcbiAgICAgIGNhc2UgTmF2aWdhdGlvbkluZGV4LlNFV0lORzpcbiAgICAgICAgcmV0dXJuIGNvdXR1cmVzO1xuICAgICAgY2FzZSBOYXZpZ2F0aW9uSW5kZXguTVU6XG4gICAgICAgIHJldHVybiBtdTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZEluZGV4XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibXktY3JlYXRpb25zXCIgc3R5bGU9e2NsYXNzZXMubXlDcmVhdGlvbnN9PlxuICAgICAgPE5hdmlnYXRpb25CYXJcbiAgICAgICAgaXRlbXM9e25hdmlnYXRpb25JdGVtc31cbiAgICAgICAgc2VsZWN0ZWRJbmRleD17c2VsZWN0ZWRJbmRleH1cbiAgICAgICAgb25JdGVtQ2xpY2s9e29uTmF2aWdhdGlvbkl0ZW1DbGlja31cbiAgICAgIC8+XG4gICAgICA8Vmlld2VyIGNyZWF0aW9ucz17Y3JlYXRpb25zfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MyCreations/index.tsx\n");

/***/ })

})