(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/src/components/map.jsx":
/*!***************************************!*\
  !*** ./client/src/components/map.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config.js */ \"../config.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import  GoogleMapReact from 'google-map-react';\n\n\n\n\n\nvar MapContainer = function (_React$Component) {\n  _inherits(MapContainer, _React$Component);\n\n  function MapContainer(props) {\n    _classCallCheck(this, MapContainer);\n\n    return _possibleConstructorReturn(this, (MapContainer.__proto__ || Object.getPrototypeOf(MapContainer)).call(this, props));\n  }\n\n  // returns simple google map \n\n\n  _createClass(MapContainer, [{\n    key: \"render\",\n    value: function render() {\n      var coords = this.props.location;\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\n        \"div\",\n        { className: \"mapContainer\" },\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          bootstrapURLKeys: { key: _config_js__WEBPACK_IMPORTED_MODULE_0__[\"key\"] }\n\n          // default is neccessary for it to work \n          , defaultCenter: { lat: 21.1744336, lng: 72.7954677 },\n          center: coords,\n          zoom: 13,\n          yesIWantToUseGoogleMapApiInternals: true\n        }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\n          \"span\",\n          null,\n          \" \",\n          \"Exact location information is provided after a booking is confirmed.\",\n          \" \"\n        )\n      );\n    }\n  }]);\n\n  return MapContainer;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbWFwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvbWFwLmpzeD84ZTNmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XG5pbXBvcnQgeyBrZXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnLmpzXCIgXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSBcImdvb2dsZS1tYXAtcmVhY3RcIjtcbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5cbmNsYXNzIE1hcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgLy8gcmV0dXJucyBzaW1wbGUgZ29vZ2xlIG1hcCBcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb29yZHMgPSB0aGlzLnByb3BzLmxvY2F0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcENvbnRhaW5lclwiPlxuICAgICAgICA8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleToga2V5IH19XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gZGVmYXVsdCBpcyBuZWNjZXNzYXJ5IGZvciBpdCB0byB3b3JrIFxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiAyMS4xNzQ0MzM2LCBsbmc6IDcyLjc5NTQ2NzcgfX1cbiAgICAgICAgICBjZW50ZXI9e2Nvb3Jkc31cbiAgICAgICAgICB6b29tPXsxM31cbiAgICAgICAgICB5ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgRXhhY3QgbG9jYXRpb24gaW5mb3JtYXRpb24gaXMgcHJvdmlkZWQgYWZ0ZXIgYSBib29raW5nIGlzIGNvbmZpcm1lZC57XCIgXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwQ29udGFpbmVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQVZBO0FBZ0JBOzs7O0FBekJBO0FBQ0E7QUEyQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/map.jsx\n");

/***/ })

}]);