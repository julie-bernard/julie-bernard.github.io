webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/globals.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n  background-color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n* {\\n  transition: background-color 200ms linear;\\n}\\n\\n.navbar-toggler-icon-bar {\\n  position: relative;\\n  width: 20px;\\n  height: 15px;\\n}\\n\\n.bar {\\n  position: absolute;\\n  height: 2px;\\n  width: 25px;\\n  border-radius: 10px;\\n  transform: rotate(0deg);\\n  transition: 0.25s ease-in-out;\\n  transition-property: transform, opacity;\\n  transform-origin: right center;\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(1) {\\n  transform: rotate(-45deg) translateY(-4px);\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(2) {\\n  opacity: 0;\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(3) {\\n  transform: rotate(45deg) translateY(4px);\\n}\\n\\n.bar:nth-child(2) {\\n  top: 6px;\\n}\\n\\n.bar:nth-child(3) {\\n  top: 12px;\\n}\\n\\n.hoverable:hover {\\n  filter: grayscale(100%);\\n  opacity: 0.9;\\n  cursor: pointer;\\n  transition: opacity 200ms linear;\\n}\\n\\n.text-hoverable:hover {\\n  border-bottom-width: 2px;\\n  border-bottom-style: solid;\\n  border-bottom-color: blue !important;\\n  border-bottom-left-radius: 15px;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;EACtE,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EAGE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,uCAAuC;EACvC,8BAA8B;AAChC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;EAIf,gCAAgC;AAClC;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,oCAAoC;EACpC,+BAA+B;AACjC\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n  background-color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n* {\\n  -webkit-transition: background-color 200ms linear;\\n  -ms-transition: background-color 200ms linear;\\n  transition: background-color 200ms linear;\\n}\\n\\n.navbar-toggler-icon-bar {\\n  position: relative;\\n  width: 20px;\\n  height: 15px;\\n}\\n\\n.bar {\\n  position: absolute;\\n  height: 2px;\\n  width: 25px;\\n  border-radius: 10px;\\n  transform: rotate(0deg);\\n  transition: 0.25s ease-in-out;\\n  transition-property: transform, opacity;\\n  transform-origin: right center;\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(1) {\\n  transform: rotate(-45deg) translateY(-4px);\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(2) {\\n  opacity: 0;\\n}\\n\\n.navbar-toggler:not(.collapsed) .bar:nth-child(3) {\\n  transform: rotate(45deg) translateY(4px);\\n}\\n\\n.bar:nth-child(2) {\\n  top: 6px;\\n}\\n\\n.bar:nth-child(3) {\\n  top: 12px;\\n}\\n\\n.hoverable:hover {\\n  filter: grayscale(100%);\\n  opacity: 0.9;\\n  cursor: pointer;\\n\\n  -webkit-transition: opacity 200ms linear;\\n  -ms-transition: opacity 200ms linear;\\n  transition: opacity 200ms linear;\\n}\\n\\n.text-hoverable:hover {\\n  border-bottom-width: 2px;\\n  border-bottom-style: solid;\\n  border-bottom-color: blue !important;\\n  border-bottom-left-radius: 15px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzE3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGdCQUFnQixlQUFlLGNBQWMsd0pBQXdKLDJCQUEyQixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sMkJBQTJCLEdBQUcsT0FBTyw4Q0FBOEMsR0FBRyw4QkFBOEIsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRyxVQUFVLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLHdCQUF3Qiw0QkFBNEIsa0NBQWtDLDRDQUE0QyxtQ0FBbUMsR0FBRyx1REFBdUQsK0NBQStDLEdBQUcsdURBQXVELGVBQWUsR0FBRyx1REFBdUQsNkNBQTZDLEdBQUcsdUJBQXVCLGFBQWEsR0FBRyx1QkFBdUIsY0FBYyxHQUFHLHNCQUFzQiw0QkFBNEIsaUJBQWlCLG9CQUFvQixxQ0FBcUMsR0FBRywyQkFBMkIsNkJBQTZCLCtCQUErQix5Q0FBeUMsb0NBQW9DLEdBQUcsU0FBUyxvRkFBb0YsVUFBVSxVQUFVLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsdUNBQXVDLGVBQWUsY0FBYyx3SkFBd0osMkJBQTJCLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxPQUFPLHNEQUFzRCxrREFBa0QsOENBQThDLEdBQUcsOEJBQThCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLEdBQUcsVUFBVSx1QkFBdUIsZ0JBQWdCLGdCQUFnQix3QkFBd0IsNEJBQTRCLGtDQUFrQyw0Q0FBNEMsbUNBQW1DLEdBQUcsdURBQXVELCtDQUErQyxHQUFHLHVEQUF1RCxlQUFlLEdBQUcsdURBQXVELDZDQUE2QyxHQUFHLHVCQUF1QixhQUFhLEdBQUcsdUJBQXVCLGNBQWMsR0FBRyxzQkFBc0IsNEJBQTRCLGlCQUFpQixvQkFBb0IsK0NBQStDLHlDQUF5QyxxQ0FBcUMsR0FBRywyQkFBMkIsNkJBQTZCLCtCQUErQix5Q0FBeUMsb0NBQW9DLEdBQUcscUJBQXFCO0FBQzcvRztBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlci1pY29uLWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuXFxuLmJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlcjpub3QoLmNvbGxhcHNlZCkgLmJhcjpudGgtY2hpbGQoMSkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC00cHgpO1xcbn1cXG5cXG4ubmF2YmFyLXRvZ2dsZXI6bm90KC5jb2xsYXBzZWQpIC5iYXI6bnRoLWNoaWxkKDIpIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlcjpub3QoLmNvbGxhcHNlZCkgLmJhcjpudGgtY2hpbGQoMykge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuLmJhcjpudGgtY2hpbGQoMikge1xcbiAgdG9wOiA2cHg7XFxufVxcblxcbi5iYXI6bnRoLWNoaWxkKDMpIHtcXG4gIHRvcDogMTJweDtcXG59XFxuXFxuLmhvdmVyYWJsZTpob3ZlciB7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyO1xcbn1cXG5cXG4udGV4dC1ob3ZlcmFibGU6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFVBQVU7RUFDVixTQUFTO0VBQ1Q7d0VBQ3NFO0VBQ3RFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFHRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFJZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQywrQkFBK0I7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XFxuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyLWljb24tYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyOm5vdCguY29sbGFwc2VkKSAuYmFyOm50aC1jaGlsZCgxKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoLTRweCk7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlcjpub3QoLmNvbGxhcHNlZCkgLmJhcjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyOm5vdCguY29sbGFwc2VkKSAuYmFyOm50aC1jaGlsZCgzKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4uYmFyOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDZweDtcXG59XFxuXFxuLmJhcjpudGgtY2hpbGQoMykge1xcbiAgdG9wOiAxMnB4O1xcbn1cXG5cXG4uaG92ZXJhYmxlOmhvdmVyIHtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyO1xcbn1cXG5cXG4udGV4dC1ob3ZlcmFibGU6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css\n");

/***/ })

})