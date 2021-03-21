webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MyCreations/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/MyCreations/index.tsx ***!
  \**********************************************/
/*! exports provided: MyCreations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyCreations\", function() { return MyCreations; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _creations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creations */ \"./src/components/MyCreations/creations.ts\");\n/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationBar */ \"./src/components/MyCreations/NavigationBar/index.tsx\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _Viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Viewer */ \"./src/components/MyCreations/Viewer/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./src/components/MyCreations/styles.ts\");\n\n\n\nvar _jsxFileName = \"/Users/simonbernard/Documents/work/workspace/julie-bernard-src/src/components/MyCreations/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar NavigationIndex;\n\n(function (NavigationIndex) {\n  NavigationIndex[NavigationIndex[\"DECORATION\"] = 0] = \"DECORATION\";\n  NavigationIndex[NavigationIndex[\"DRAWING\"] = 1] = \"DRAWING\";\n  NavigationIndex[NavigationIndex[\"PAINTING\"] = 2] = \"PAINTING\";\n  NavigationIndex[NavigationIndex[\"SEWING\"] = 3] = \"SEWING\";\n  NavigationIndex[NavigationIndex[\"MU\"] = 4] = \"MU\";\n})(NavigationIndex || (NavigationIndex = {}));\n\nvar MyCreations = function MyCreations(_ref) {\n  _s();\n\n  Object(_Users_simonbernard_Documents_work_workspace_julie_bernard_src_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(0),\n      selectedIndex = _useState[0],\n      setSelectedIndex = _useState[1];\n\n  var navigationItems = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useMemo\"])(function () {\n    return [t(\"sewing\"), t(\"paintings\"), t(\"drawings\"), t(\"mu\"), t(\"decoration\")];\n  }, [t]);\n  var onNavigationItemClick = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useCallback\"])(function (index) {\n    return setSelectedIndex(index);\n  }, []);\n  var creations = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useMemo\"])(function () {\n    switch (selectedIndex) {\n      case NavigationIndex.DECORATION:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"decos\"];\n\n      case NavigationIndex.DRAWING:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"dessins\"];\n\n      case NavigationIndex.PAINTING:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"peintures\"];\n\n      case NavigationIndex.SEWING:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"coutures\"];\n\n      case NavigationIndex.MU:\n        return _creations__WEBPACK_IMPORTED_MODULE_2__[\"mu\"];\n    }\n  }, [selectedIndex]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"my-creations\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"].myCreations,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavigationBar__WEBPACK_IMPORTED_MODULE_3__[\"NavigationBar\"], {\n      items: navigationItems,\n      selectedIndex: selectedIndex,\n      onItemClick: onNavigationItemClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Viewer__WEBPACK_IMPORTED_MODULE_5__[\"Viewer\"], {\n      creations: creations\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyCreations, \"lC3hW21jlFTIScpNLg0LWtAYtU8=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_4__[\"useTranslation\"]];\n});\n\n_c = MyCreations;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyCreations\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlDcmVhdGlvbnMvaW5kZXgudHN4PzA1YTQiXSwibmFtZXMiOlsiTmF2aWdhdGlvbkluZGV4IiwiTXlDcmVhdGlvbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwibmF2aWdhdGlvbkl0ZW1zIiwidXNlTWVtbyIsIm9uTmF2aWdhdGlvbkl0ZW1DbGljayIsInVzZUNhbGxiYWNrIiwiaW5kZXgiLCJjcmVhdGlvbnMiLCJERUNPUkFUSU9OIiwiZGVjb3MiLCJEUkFXSU5HIiwiZGVzc2lucyIsIlBBSU5USU5HIiwicGVpbnR1cmVzIiwiU0VXSU5HIiwiY291dHVyZXMiLCJNVSIsIm11IiwiY2xhc3NlcyIsIm15Q3JlYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBSUtBLGU7O1dBQUFBLGU7QUFBQUEsaUIsQ0FBQUEsZTtBQUFBQSxpQixDQUFBQSxlO0FBQUFBLGlCLENBQUFBLGU7QUFBQUEsaUIsQ0FBQUEsZTtBQUFBQSxpQixDQUFBQSxlO0dBQUFBLGUsS0FBQUEsZTs7QUFRRSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFlO0FBQUE7O0FBQUE7O0FBQUEsd0JBQzFCQyxvRUFBYyxFQURZO0FBQUEsTUFDaENDLENBRGdDLG1CQUNoQ0EsQ0FEZ0M7O0FBQUEsa0JBR0VDLHNEQUFRLENBQUMsQ0FBRCxDQUhWO0FBQUEsTUFHakNDLGFBSGlDO0FBQUEsTUFHbEJDLGdCQUhrQjs7QUFLeEMsTUFBTUMsZUFBZSxHQUFHQyxxREFBTyxDQUM3QjtBQUFBLFdBQU0sQ0FDSkwsQ0FBQyxDQUFDLFFBQUQsQ0FERyxFQUVKQSxDQUFDLENBQUMsV0FBRCxDQUZHLEVBR0pBLENBQUMsQ0FBQyxVQUFELENBSEcsRUFJSkEsQ0FBQyxDQUFDLElBQUQsQ0FKRyxFQUtKQSxDQUFDLENBQUMsWUFBRCxDQUxHLENBQU47QUFBQSxHQUQ2QixFQVE3QixDQUFDQSxDQUFELENBUjZCLENBQS9CO0FBV0EsTUFBTU0scUJBQXFCLEdBQUdDLHlEQUFXLENBQ3ZDLFVBQUNDLEtBQUQ7QUFBQSxXQUFtQkwsZ0JBQWdCLENBQUNLLEtBQUQsQ0FBbkM7QUFBQSxHQUR1QyxFQUV2QyxFQUZ1QyxDQUF6QztBQUtBLE1BQU1DLFNBQVMsR0FBR0oscURBQU8sQ0FBQyxZQUFNO0FBQzlCLFlBQVFILGFBQVI7QUFDRSxXQUFLTCxlQUFlLENBQUNhLFVBQXJCO0FBQ0UsZUFBT0MsZ0RBQVA7O0FBQ0YsV0FBS2QsZUFBZSxDQUFDZSxPQUFyQjtBQUNFLGVBQU9DLGtEQUFQOztBQUNGLFdBQUtoQixlQUFlLENBQUNpQixRQUFyQjtBQUNFLGVBQU9DLG9EQUFQOztBQUNGLFdBQUtsQixlQUFlLENBQUNtQixNQUFyQjtBQUNFLGVBQU9DLG1EQUFQOztBQUNGLFdBQUtwQixlQUFlLENBQUNxQixFQUFyQjtBQUNFLGVBQU9DLDZDQUFQO0FBVko7QUFZRCxHQWJ3QixFQWF0QixDQUFDakIsYUFBRCxDQWJzQixDQUF6QjtBQWVBLHNCQUNFO0FBQUssTUFBRSxFQUFDLGNBQVI7QUFBdUIsU0FBSyxFQUFFa0IsK0NBQU8sQ0FBQ0MsV0FBdEM7QUFBQSw0QkFDRSxxRUFBQyw0REFBRDtBQUNFLFdBQUssRUFBRWpCLGVBRFQ7QUFFRSxtQkFBYSxFQUFFRixhQUZqQjtBQUdFLGlCQUFXLEVBQUVJO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsOENBQUQ7QUFBUSxlQUFTLEVBQUVHO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBOUNNOztHQUFNWCxXO1VBQ0dDLDREOzs7S0FESEQsVyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL015Q3JlYXRpb25zL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvdXR1cmVzLCBwZWludHVyZXMsIGRlY29zLCBkZXNzaW5zLCBtdSB9IGZyb20gXCIuL2NyZWF0aW9uc1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkJhciB9IGZyb20gXCIuL05hdmlnYXRpb25CYXJcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IFZpZXdlciB9IGZyb20gXCIuL1ZpZXdlclwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5lbnVtIE5hdmlnYXRpb25JbmRleCB7XG4gIERFQ09SQVRJT04gPSAwLFxuICBEUkFXSU5HID0gMSxcbiAgUEFJTlRJTkcgPSAyLFxuICBTRVdJTkcgPSAzLFxuICBNVSA9IDQsXG59XG5cbmV4cG9ydCBjb25zdCBNeUNyZWF0aW9ucyA9ICh7fTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG5hdmlnYXRpb25JdGVtcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAgdChcInNld2luZ1wiKSxcbiAgICAgIHQoXCJwYWludGluZ3NcIiksXG4gICAgICB0KFwiZHJhd2luZ3NcIiksXG4gICAgICB0KFwibXVcIiksXG4gICAgICB0KFwiZGVjb3JhdGlvblwiKSxcbiAgICBdLFxuICAgIFt0XVxuICApO1xuXG4gIGNvbnN0IG9uTmF2aWdhdGlvbkl0ZW1DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKSA9PiBzZXRTZWxlY3RlZEluZGV4KGluZGV4KSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IGNyZWF0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHN3aXRjaCAoc2VsZWN0ZWRJbmRleCkge1xuICAgICAgY2FzZSBOYXZpZ2F0aW9uSW5kZXguREVDT1JBVElPTjpcbiAgICAgICAgcmV0dXJuIGRlY29zO1xuICAgICAgY2FzZSBOYXZpZ2F0aW9uSW5kZXguRFJBV0lORzpcbiAgICAgICAgcmV0dXJuIGRlc3NpbnM7XG4gICAgICBjYXNlIE5hdmlnYXRpb25JbmRleC5QQUlOVElORzpcbiAgICAgICAgcmV0dXJuIHBlaW50dXJlcztcbiAgICAgIGNhc2UgTmF2aWdhdGlvbkluZGV4LlNFV0lORzpcbiAgICAgICAgcmV0dXJuIGNvdXR1cmVzO1xuICAgICAgY2FzZSBOYXZpZ2F0aW9uSW5kZXguTVU6XG4gICAgICAgIHJldHVybiBtdTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZEluZGV4XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibXktY3JlYXRpb25zXCIgc3R5bGU9e2NsYXNzZXMubXlDcmVhdGlvbnN9PlxuICAgICAgPE5hdmlnYXRpb25CYXJcbiAgICAgICAgaXRlbXM9e25hdmlnYXRpb25JdGVtc31cbiAgICAgICAgc2VsZWN0ZWRJbmRleD17c2VsZWN0ZWRJbmRleH1cbiAgICAgICAgb25JdGVtQ2xpY2s9e29uTmF2aWdhdGlvbkl0ZW1DbGlja31cbiAgICAgIC8+XG4gICAgICA8Vmlld2VyIGNyZWF0aW9ucz17Y3JlYXRpb25zfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MyCreations/index.tsx\n");

/***/ })

})