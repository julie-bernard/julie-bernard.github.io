webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/globals.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n  background-color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n* {\\n  transition: background-color 200ms linear;\\n}\\n\\n.navbar-toggler-icon-bar {\\n  position: relative;\\n  width: 20px;\\n  height: 15px;\\n}\\n\\n.bar {\\n  position: absolute;\\n  height: 2px;\\n  width: 25px;\\n  border-radius: 10px;\\n  transform: rotate(0deg);\\n  transition: 0.25s ease-in-out;\\n  transition-property: transform, opacity;\\n  transform-origin: right center;\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(1) {\\n  transform: rotate(-45deg) translateY(-4px);\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(2) {\\n  opacity: 0;\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(3) {\\n  transform: rotate(45deg) translateY(4px);\\n}\\n\\n.bar:nth-child(2) {\\n  top: 6px;\\n}\\n\\n.bar:nth-child(3) {\\n  top: 12px;\\n}\\n\\n.hoverable:hover {\\n  filter: grayscale(100%);\\n  opacity: 0.9;\\n  cursor: pointer;\\n  transition: opacity 200ms linear;\\n}\\n\\n.text-hoverable:hover {\\n  border-bottom-width: 2px;\\n  border-bottom-style: solid;\\n  border-bottom-color: blue !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;EACtE,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EAGE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,uCAAuC;EACvC,8BAA8B;AAChC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;EAIf,gCAAgC;AAClC;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,oCAAoC;AACtC\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n  background-color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n* {\\n  -webkit-transition: background-color 200ms linear;\\n  -ms-transition: background-color 200ms linear;\\n  transition: background-color 200ms linear;\\n}\\n\\n.navbar-toggler-icon-bar {\\n  position: relative;\\n  width: 20px;\\n  height: 15px;\\n}\\n\\n.bar {\\n  position: absolute;\\n  height: 2px;\\n  width: 25px;\\n  border-radius: 10px;\\n  transform: rotate(0deg);\\n  transition: 0.25s ease-in-out;\\n  transition-property: transform, opacity;\\n  transform-origin: right center;\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(1) {\\n  transform: rotate(-45deg) translateY(-4px);\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(2) {\\n  opacity: 0;\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(3) {\\n  transform: rotate(45deg) translateY(4px);\\n}\\n\\n.bar:nth-child(2) {\\n  top: 6px;\\n}\\n\\n.bar:nth-child(3) {\\n  top: 12px;\\n}\\n\\n.hoverable:hover {\\n  filter: grayscale(100%);\\n  opacity: 0.9;\\n  cursor: pointer;\\n\\n  -webkit-transition: opacity 200ms linear;\\n  -ms-transition: opacity 200ms linear;\\n  transition: opacity 200ms linear;\\n}\\n\\n.text-hoverable:hover {\\n  border-bottom-width: 2px;\\n  border-bottom-style: solid;\\n  border-bottom-color: blue !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzE3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGdCQUFnQixlQUFlLGNBQWMsd0pBQXdKLDJCQUEyQixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sMkJBQTJCLEdBQUcsT0FBTyw4Q0FBOEMsR0FBRyw4QkFBOEIsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRyxVQUFVLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLHdCQUF3Qiw0QkFBNEIsa0NBQWtDLDRDQUE0QyxtQ0FBbUMsR0FBRyx1REFBdUQsK0NBQStDLEdBQUcsdURBQXVELGVBQWUsR0FBRyx1REFBdUQsNkNBQTZDLEdBQUcsdUJBQXVCLGFBQWEsR0FBRyx1QkFBdUIsY0FBYyxHQUFHLHNCQUFzQiw0QkFBNEIsaUJBQWlCLG9CQUFvQixxQ0FBcUMsR0FBRywyQkFBMkIsNkJBQTZCLCtCQUErQix5Q0FBeUMsR0FBRyxTQUFTLG9GQUFvRixVQUFVLFVBQVUsS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsdUNBQXVDLGVBQWUsY0FBYyx3SkFBd0osMkJBQTJCLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxPQUFPLHNEQUFzRCxrREFBa0QsOENBQThDLEdBQUcsOEJBQThCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLEdBQUcsVUFBVSx1QkFBdUIsZ0JBQWdCLGdCQUFnQix3QkFBd0IsNEJBQTRCLGtDQUFrQyw0Q0FBNEMsbUNBQW1DLEdBQUcsdURBQXVELCtDQUErQyxHQUFHLHVEQUF1RCxlQUFlLEdBQUcsdURBQXVELDZDQUE2QyxHQUFHLHVCQUF1QixhQUFhLEdBQUcsdUJBQXVCLGNBQWMsR0FBRyxzQkFBc0IsNEJBQTRCLGlCQUFpQixvQkFBb0IsK0NBQStDLHlDQUF5QyxxQ0FBcUMsR0FBRywyQkFBMkIsNkJBQTZCLCtCQUErQix5Q0FBeUMsR0FBRyxxQkFBcUI7QUFDeDZHO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyLWljb24tYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyOm5vdCguY29sbGFwc2VkKSAuYmFyOm50aC1jaGlsZCgxKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoLTRweCk7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlcjpub3QoLmNvbGxhcHNlZCkgLmJhcjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyOm5vdCguY29sbGFwc2VkKSAuYmFyOm50aC1jaGlsZCgzKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4uYmFyOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDZweDtcXG59XFxuXFxuLmJhcjpudGgtY2hpbGQoMykge1xcbiAgdG9wOiAxMnB4O1xcbn1cXG5cXG4uaG92ZXJhYmxlOmhvdmVyIHtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBsaW5lYXI7XFxufVxcblxcbi50ZXh0LWhvdmVyYWJsZTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsdWUgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNUO3dFQUNzRTtFQUN0RSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBR0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3Qix1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBSWYsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XFxuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyLWljb24tYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyOm5vdCguY29sbGFwc2VkKSAuYmFyOm50aC1jaGlsZCgxKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoLTRweCk7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlcjpub3QoLmNvbGxhcHNlZCkgLmJhcjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyOm5vdCguY29sbGFwc2VkKSAuYmFyOm50aC1jaGlsZCgzKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4uYmFyOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDZweDtcXG59XFxuXFxuLmJhcjpudGgtY2hpbGQoMykge1xcbiAgdG9wOiAxMnB4O1xcbn1cXG5cXG4uaG92ZXJhYmxlOmhvdmVyIHtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyO1xcbn1cXG5cXG4udGV4dC1ob3ZlcmFibGU6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css\n");

/***/ })

})