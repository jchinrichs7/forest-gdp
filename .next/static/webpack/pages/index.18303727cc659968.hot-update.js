"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_runtime_dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-runtime-dotenv */ \"./node_modules/next-runtime-dotenv/index.js\");\n/* harmony import */ var next_runtime_dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_runtime_dotenv__WEBPACK_IMPORTED_MODULE_2__);\n//https://www.chartjs.org/\n\n\n\n\nfunction Home(_ref) {\n  var forestData = _ref.forestData,\n      gdpData = _ref.gdpData;\n  console.log(\"process env\", \"\\\"mongodb+srv://campbell-mongodb:nYLUlIKbZGnlChK1@countrycluster.dso4dww.mongodb.net/?retryWrites=true&w=majority\\\";\");\n  var countries = [];\n\n  for (var i = 0; i < forestData.length; i++) {\n    countries.push(forestData[i].Country);\n  }\n\n  var indexedCountries = [];\n  var notable = [\"Low income\", \"Middle income\", \"High income\", \"World\"];\n\n  for (var _i2 = 0; _i2 < notable.length; _i2++) {\n    for (var j = 0; j < countries.length; j++) {\n      if (countries[j] == notable[_i2]) {\n        indexedCountries.push({\n          country: countries[j],\n          index: j\n        });\n      }\n    }\n  } //const indexedCountries = countries.map((country, index) => ({ country, index }));\n\n\n  var notableCountries = indexedCountries.filter(function (item) {\n    return notable.includes(item.country);\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Welcome !\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"This app seeks to explore how countries' forest areas relates to their GDP per capita (PPP) over time. I had the idea for this app when I heard the claim that developing countries tend to have net deforestation but as they develop, the trend reverses and they plant more trees. My conclusion from this project is that the claim appears to be true, which you can explore for yourself using the links below (Note that some areas have limited data).\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \"This data is taken from https://data.worldbank.org/ which defines Forest Area and GDP per capita (PPP) as follows:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", null, \"GDP per Capita (PPP): This indicator provides per capita values for gross domestic product (GDP) expressed in current international dollars converted by purchasing power parity (PPP) conversion factor. GDP is the sum of gross value added by all resident producers in the country plus any product taxes and minus any subsidies not included in the value of the products. conversion factor is a spatial price deflator and currency converter that controls for price level differences between countries. Total population is a mid-year population based on the de facto definition of population, which counts all residents regardless of legal status or citizenship.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \"Forest Area: land under natural or planted stands of trees of at least 5 meters in situ [that is, without having been moved], whether productive or not, and excludes tree stands in agricultural production systems (for example, in fruit plantations and agroforestry systems) and trees in urban parks and gardens.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Countries, Categories, and Regions\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, notableCountries.map(function (_ref2) {\n    var country = _ref2.country,\n        index = _ref2.index;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: country\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: {\n        pathname: \"/\".concat(country),\n        query: {\n          index: index,\n          countries: JSON.stringify(countries),\n          forestData: JSON.stringify(forestData),\n          gdpData: JSON.stringify(gdpData)\n        }\n      },\n      passHref: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, country)));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ol\", null, countries.map(function (country, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: country\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: {\n        pathname: \"/\".concat(country),\n        query: {\n          index: index,\n          countries: JSON.stringify(countries),\n          forestData: JSON.stringify(forestData),\n          gdpData: JSON.stringify(gdpData)\n        }\n      },\n      passHref: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \" \", country, \" \")));\n  }))));\n}\n\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDVk8sUUFBUSxhQUFNUCxPQUFOLENBREU7UUFFVlEsS0FBSyxFQUFFO1VBQ0xQLEtBQUssRUFBTEEsS0FESztVQUVMVCxTQUFTLEVBQUVpQixJQUFJLENBQUNDLFNBQUwsQ0FBZWxCLFNBQWYsQ0FGTjtVQUdMUCxVQUFVLEVBQUV3QixJQUFJLENBQUNDLFNBQUwsQ0FBZXpCLFVBQWYsQ0FIUDtVQUlMQyxPQUFPLEVBQUV1QixJQUFJLENBQUNDLFNBQUwsQ0FBZXhCLE9BQWY7UUFKSjtNQUZHLENBQVo7TUFRRyxRQUFRO0lBUlgsZ0JBVUUsdUVBQUksR0FBSixFQUFNYyxPQUFOLEVBQWMsR0FBZCxDQVZGLENBREYsQ0FEYTtFQUFBLENBQWQsQ0FESCxDQW5CRixDQXhCRixDQURGO0FBaUVEOztLQXJGUWhCOztBQWtLVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cHM6Ly93d3cuY2hhcnRqcy5vcmcvXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgeyB3aXRoUnVudGltZUVudiB9IGZyb20gJ25leHQtcnVudGltZS1kb3RlbnYnO1xuXG5mdW5jdGlvbiBIb21lKHsgZm9yZXN0RGF0YSwgZ2RwRGF0YSB9KSB7XG5cbiAgY29uc29sZS5sb2coXCJwcm9jZXNzIGVudlwiLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URVNUKTtcbiAgY29uc3QgY291bnRyaWVzID0gW107XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVzdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb3VudHJpZXMucHVzaChmb3Jlc3REYXRhW2ldLkNvdW50cnkpO1xuICB9XG4gIGxldCBpbmRleGVkQ291bnRyaWVzID0gW107XG4gIGNvbnN0IG5vdGFibGUgPSBbXCJMb3cgaW5jb21lXCIsIFwiTWlkZGxlIGluY29tZVwiLCBcIkhpZ2ggaW5jb21lXCIsIFwiV29ybGRcIl1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub3RhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudHJpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChjb3VudHJpZXNbal0gPT0gbm90YWJsZVtpXSkge1xuICAgICAgICBpbmRleGVkQ291bnRyaWVzLnB1c2goe2NvdW50cnk6IGNvdW50cmllc1tqXSwgaW5kZXg6IGp9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9jb25zdCBpbmRleGVkQ291bnRyaWVzID0gY291bnRyaWVzLm1hcCgoY291bnRyeSwgaW5kZXgpID0+ICh7IGNvdW50cnksIGluZGV4IH0pKTtcbiAgY29uc3Qgbm90YWJsZUNvdW50cmllcyA9IGluZGV4ZWRDb3VudHJpZXMuZmlsdGVyKGl0ZW0gPT4gbm90YWJsZS5pbmNsdWRlcyhpdGVtLmNvdW50cnkpKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgPGgxPldlbGNvbWUgITwvaDE+XG4gICAgICAgIDxoMz5cbiAgICAgICAgVGhpcyBhcHAgc2Vla3MgdG8gZXhwbG9yZSBob3cgY291bnRyaWVzJyBmb3Jlc3QgYXJlYXMgcmVsYXRlcyB0byB0aGVpciBHRFAgcGVyIGNhcGl0YSAoUFBQKSBvdmVyIHRpbWUuIFxuICAgICAgICBJIGhhZCB0aGUgaWRlYSBmb3IgdGhpcyBhcHAgd2hlbiBJIGhlYXJkIHRoZSBjbGFpbSB0aGF0IGRldmVsb3BpbmcgY291bnRyaWVzIHRlbmQgdG8gaGF2ZSBuZXQgZGVmb3Jlc3RhdGlvbiBidXQgYXMgdGhleSBkZXZlbG9wLCB0aGUgdHJlbmQgcmV2ZXJzZXMgYW5kIHRoZXkgcGxhbnQgbW9yZSB0cmVlcy4gXG4gICAgICAgIE15IGNvbmNsdXNpb24gZnJvbSB0aGlzIHByb2plY3QgaXMgdGhhdCB0aGUgY2xhaW0gYXBwZWFycyB0byBiZSB0cnVlLCB3aGljaCB5b3UgY2FuIGV4cGxvcmUgZm9yIHlvdXJzZWxmIHVzaW5nIHRoZSBsaW5rcyBiZWxvdyAoTm90ZSB0aGF0IHNvbWUgYXJlYXMgaGF2ZSBsaW1pdGVkIGRhdGEpLlxuICAgICAgICA8YnI+PC9icj48YnI+PC9icj5cbiAgICAgICAgVGhpcyBkYXRhIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9kYXRhLndvcmxkYmFuay5vcmcvIHdoaWNoIGRlZmluZXMgRm9yZXN0IEFyZWEgYW5kIEdEUCBwZXIgY2FwaXRhIChQUFApIGFzIGZvbGxvd3M6XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICA8aT5HRFAgcGVyIENhcGl0YSAoUFBQKTogVGhpcyBpbmRpY2F0b3IgcHJvdmlkZXMgcGVyIGNhcGl0YSB2YWx1ZXMgZm9yIGdyb3NzIGRvbWVzdGljIHByb2R1Y3QgKEdEUCkgZXhwcmVzc2VkIGluIGN1cnJlbnQgaW50ZXJuYXRpb25hbCBcbiAgICAgICAgZG9sbGFycyBjb252ZXJ0ZWQgYnkgcHVyY2hhc2luZyBwb3dlciBwYXJpdHkgKFBQUCkgY29udmVyc2lvbiBmYWN0b3IuIEdEUCBpcyB0aGUgc3VtIG9mIGdyb3NzIHZhbHVlIGFkZGVkIGJ5IGFsbCByZXNpZGVudCBwcm9kdWNlcnMgXG4gICAgICAgIGluIHRoZSBjb3VudHJ5IHBsdXMgYW55IHByb2R1Y3QgdGF4ZXMgYW5kIG1pbnVzIGFueSBzdWJzaWRpZXMgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZSBvZiB0aGUgcHJvZHVjdHMuIGNvbnZlcnNpb24gZmFjdG9yIGlzIGEgc3BhdGlhbCBcbiAgICAgICAgcHJpY2UgZGVmbGF0b3IgYW5kIGN1cnJlbmN5IGNvbnZlcnRlciB0aGF0IGNvbnRyb2xzIGZvciBwcmljZSBsZXZlbCBkaWZmZXJlbmNlcyBiZXR3ZWVuIGNvdW50cmllcy4gVG90YWwgcG9wdWxhdGlvbiBpcyBhIG1pZC15ZWFyIHBvcHVsYXRpb24gXG4gICAgICAgIGJhc2VkIG9uIHRoZSBkZSBmYWN0byBkZWZpbml0aW9uIG9mIHBvcHVsYXRpb24sIHdoaWNoIGNvdW50cyBhbGwgcmVzaWRlbnRzIHJlZ2FyZGxlc3Mgb2YgbGVnYWwgc3RhdHVzIG9yIGNpdGl6ZW5zaGlwLlxuICAgICAgICA8YnI+PC9icj48YnI+PC9icj5cbiAgICAgICAgRm9yZXN0IEFyZWE6IGxhbmQgdW5kZXIgbmF0dXJhbCBvciBwbGFudGVkIHN0YW5kcyBvZiB0cmVlcyBvZiBhdCBsZWFzdCA1IG1ldGVycyBpbiBzaXR1IFt0aGF0IGlzLCB3aXRob3V0IGhhdmluZyBiZWVuIG1vdmVkXSwgd2hldGhlciBwcm9kdWN0aXZlIG9yIG5vdCwgYW5kIFxuICAgICAgICBleGNsdWRlcyB0cmVlIHN0YW5kcyBpbiBhZ3JpY3VsdHVyYWwgcHJvZHVjdGlvbiBzeXN0ZW1zIChmb3IgZXhhbXBsZSwgaW4gZnJ1aXQgcGxhbnRhdGlvbnMgYW5kIGFncm9mb3Jlc3RyeSBzeXN0ZW1zKSBhbmQgdHJlZXMgaW4gdXJiYW4gcGFya3MgXG4gICAgICAgIGFuZCBnYXJkZW5zLlxuICAgICAgICA8L2k+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyPkNvdW50cmllcywgQ2F0ZWdvcmllcywgYW5kIFJlZ2lvbnM8L2gyPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bm90YWJsZUNvdW50cmllcy5tYXAoKHsgY291bnRyeSwgaW5kZXggfSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjb3VudHJ5fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvJHtjb3VudHJ5fWAsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgY291bnRyaWVzOiBKU09OLnN0cmluZ2lmeShjb3VudHJpZXMpLFxuICAgICAgICAgICAgICAgIGZvcmVzdERhdGE6IEpTT04uc3RyaW5naWZ5KGZvcmVzdERhdGEpLFxuICAgICAgICAgICAgICAgIGdkcERhdGE6IEpTT04uc3RyaW5naWZ5KGdkcERhdGEpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8bGk+e2NvdW50cnl9PC9saT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICB7Y291bnRyaWVzLm1hcCgoY291bnRyeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtjb3VudHJ5fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgLyR7Y291bnRyeX1gLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgIGNvdW50cmllczogSlNPTi5zdHJpbmdpZnkoY291bnRyaWVzKSxcbiAgICAgICAgICAgICAgICAgIGZvcmVzdERhdGE6IEpTT04uc3RyaW5naWZ5KGZvcmVzdERhdGEpLFxuICAgICAgICAgICAgICAgICAgZ2RwRGF0YTogSlNPTi5zdHJpbmdpZnkoZ2RwRGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgIHsvKiBUaGlzIGlzIHRoZSB0ZXh0IHRoYXQgdGhlIGxpbmsgd2lsbCBkaXNwbGF5Ki99XG4gICAgICAgICAgICAgICAgPGxpPiB7Y291bnRyeX0gPC9saT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvb2w+XG4gICAgICA8L3NwYW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG5cbiAgY29uc3QgdXJpID0gYG1vbmdvZGIrc3J2Oi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URVNUfTpuWUxVbElLYlpHbmxDaEsxQGNvdW50cnljbHVzdGVyLmRzbzRkd3cubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIHsgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlIH0pO1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBjb25zdCBkYk5hbWUgPSAndGVzdCc7XG4gICAgY29uc3QgZm9yZXN0Q29sbGVjdGlvbk5hbWUgPSAnZ2RwLWpzb24nO1xuICAgIGNvbnN0IGdkcENvbGxlY3Rpb25OYW1lID0gJ2NvdW50cnktanNvbic7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoZGJOYW1lKTtcblxuICAgIC8vIEdldCBmb3Jlc3QgZGF0YVxuICAgIGNvbnN0IGZvcmVzdENvbGxlY3Rpb24gPSBkYXRhYmFzZS5jb2xsZWN0aW9uKGZvcmVzdENvbGxlY3Rpb25OYW1lKTtcbiAgICBjb25zdCBmb3Jlc3RDdXJzb3IgPSBmb3Jlc3RDb2xsZWN0aW9uLmZpbmQoe30sIHsgcHJvamVjdGlvbjogeyBfaWQ6IDAgfSB9KTtcbiAgICBjb25zdCBmb3Jlc3REYXRhID0gW107XG5cbiAgICBhd2FpdCBmb3Jlc3RDdXJzb3IuZm9yRWFjaCgoZG9jdW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50cnlEYXRhID0ge1xuICAgICAgICBDb3VudHJ5OiBkb2N1bWVudFsnQ291bnRyeSBOYW1lJ10sXG4gICAgICAgIENvdW50cnlDb2RlOiBkb2N1bWVudFsnQ291bnRyeSBDb2RlJ10sXG4gICAgICAgIFllYXJzOiB7fSxcbiAgICAgIH07XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGRvY3VtZW50KSB7XG4gICAgICAgIGlmIChrZXkgIT09ICdDb3VudHJ5IE5hbWUnICYmIGtleSAhPT0gJ0NvdW50cnkgQ29kZScpIHtcbiAgICAgICAgICBjb3VudHJ5RGF0YS5ZZWFyc1trZXldID0gZG9jdW1lbnRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3Jlc3REYXRhLnB1c2goY291bnRyeURhdGEpO1xuICAgIH0pO1xuXG4gICAgLy8gR2V0IEdEUCBkYXRhXG4gICAgY29uc3QgZ2RwQ29sbGVjdGlvbiA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oZ2RwQ29sbGVjdGlvbk5hbWUpO1xuICAgIGNvbnN0IGdkcEN1cnNvciA9IGdkcENvbGxlY3Rpb24uZmluZCh7fSwgeyBwcm9qZWN0aW9uOiB7IF9pZDogMCB9IH0pO1xuICAgIGNvbnN0IGdkcERhdGEgPSBbXTtcblxuICAgIGF3YWl0IGdkcEN1cnNvci5mb3JFYWNoKChkb2N1bWVudCkgPT4ge1xuICAgICAgY29uc3QgY291bnRyeURhdGEgPSB7XG4gICAgICAgIENvdW50cnk6IGRvY3VtZW50WydDb3VudHJ5IE5hbWUnXSxcbiAgICAgICAgQ291bnRyeUNvZGU6IGRvY3VtZW50WydDb3VudHJ5IENvZGUnXSxcbiAgICAgICAgWWVhcnM6IHt9LFxuICAgICAgfTtcblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ0NvdW50cnkgTmFtZScgJiYga2V5ICE9PSAnQ291bnRyeSBDb2RlJykge1xuICAgICAgICAgIGNvdW50cnlEYXRhLlllYXJzW2tleV0gPSBkb2N1bWVudFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGdkcERhdGEucHVzaChjb3VudHJ5RGF0YSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZm9yZXN0RGF0YSxcbiAgICAgICAgZ2RwRGF0YVxuICAgICAgfSxcbiAgICB9O1xuICB9IFxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdlbnQgd3Jvbmc6JywgZXJyKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZm9yZXN0RGF0YTogW10sXG4gICAgICAgIGdkcERhdGE6IFtdXG4gICAgICB9LFxuICAgIH07XG4gIH0gXG4gIGZpbmFsbHkge1xuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwid2l0aFJ1bnRpbWVFbnYiLCJIb21lIiwiZm9yZXN0RGF0YSIsImdkcERhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RFU1QiLCJjb3VudHJpZXMiLCJpIiwibGVuZ3RoIiwicHVzaCIsIkNvdW50cnkiLCJpbmRleGVkQ291bnRyaWVzIiwibm90YWJsZSIsImoiLCJjb3VudHJ5IiwiaW5kZXgiLCJub3RhYmxlQ291bnRyaWVzIiwiZmlsdGVyIiwiaXRlbSIsImluY2x1ZGVzIiwibWFwIiwicGF0aG5hbWUiLCJxdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});