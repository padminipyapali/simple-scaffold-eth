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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar ConnectorComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)(), 2), ref1 = ref[0], data = ref1.data, error = ref1.error, connect = ref[1];\n    var ref2;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().connectorContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerPadding),\n            children: [\n                data.connectors.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().connectorButton),\n                        disabled: !x.ready,\n                        onClick: function() {\n                            return connect(x);\n                        },\n                        children: [\n                            x.name,\n                            !x.ready && \" (unsupported)\"\n                        ]\n                    }, x.id, true, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this1);\n                }),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: (ref2 = error === null || error === void 0 ? void 0 : error.message) !== null && ref2 !== void 0 ? ref2 : \"Failed to connect\"\n                }, void 0, false, {\n                    fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 19\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_s(ConnectorComponent, \"TTOe8+Eu0FX5Uq9y85tvYLg7iCY=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect\n    ];\n});\n_c = ConnectorComponent;\n//@ts-ignore\nvar AccountComponent = function(param) {\n    var accountData = param.accountData, disconnect = param.disconnect;\n    var ref, ref3, ref4;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: (ref = accountData.ens) === null || ref === void 0 ? void 0 : ref.avatar,\n                alt: \"ENS Avatar\"\n            }, void 0, false, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    ((ref3 = accountData.ens) === null || ref3 === void 0 ? void 0 : ref3.name) ? \"\".concat((ref4 = accountData.ens) === null || ref4 === void 0 ? void 0 : ref4.name, \" \").concat(accountData.address) : accountData.address,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Connected to \",\n                            accountData.connector.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().cta),\n                        onClick: function() {\n                            disconnect();\n                        },\n                        children: \"Disconnect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = AccountComponent;\nvar Home = function() {\n    _s1();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)({\n        fetchEns: true\n    }), 2), ref5 = ref[0], accountData = ref5.data, error = ref5.error, loading = ref5.loading, disconnect = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"Welcome to your new DApp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    accountData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountComponent, {\n                        accountData: accountData,\n                        disconnect: disconnect\n                    }, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectorComponent, {}, void 0, false, {\n                        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/next-dapp/pages/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this));\n};\n_s1(Home, \"RaKew+MwruJrzAFO9GSWC+GaSiI=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ConnectorComponent\");\n$RefreshReg$(_c1, \"AccountComponent\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBRTtnQ0FBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUUsQ0FBQztJQXBDS2xCLElBQUk7O1FBQ29EakMsNkNBQVU7OztNQURsRWlDLElBQUk7QUFzQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJvc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb25uZWN0LCB1c2VBY2NvdW50LCBDb25uZWN0b3IgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQ29ubmVjdG9yQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbeyBkYXRhLCBlcnJvciB9LCBjb25uZWN0XSA9IHVzZUNvbm5lY3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29ubmVjdG9yQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyUGFkZGluZ30+XG4gICAgICAgIHtkYXRhLmNvbm5lY3RvcnMubWFwKCh4KSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29ubmVjdG9yQnV0dG9ufVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF4LnJlYWR5fVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdCh4KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eC5uYW1lfVxuICAgICAgICAgICAgeyF4LnJlYWR5ICYmIFwiICh1bnN1cHBvcnRlZClcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG5cbiAgICAgICAge2Vycm9yICYmIDxwPntlcnJvcj8ubWVzc2FnZSA/PyBcIkZhaWxlZCB0byBjb25uZWN0XCJ9PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbi8vQHRzLWlnbm9yZVxuY29uc3QgQWNjb3VudENvbXBvbmVudCA9ICh7IGFjY291bnREYXRhLCBkaXNjb25uZWN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9e2FjY291bnREYXRhLmVucz8uYXZhdGFyfSBhbHQ9XCJFTlMgQXZhdGFyXCIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIHthY2NvdW50RGF0YS5lbnM/Lm5hbWVcbiAgICAgICAgICA/IGAke2FjY291bnREYXRhLmVucz8ubmFtZX0gJHthY2NvdW50RGF0YS5hZGRyZXNzfWBcbiAgICAgICAgICA6IGFjY291bnREYXRhLmFkZHJlc3N9XG4gICAgICAgIDxwPkNvbm5lY3RlZCB0byB7YWNjb3VudERhdGEuY29ubmVjdG9yLm5hbWV9PC9wPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3RhfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRGlzY29ubmVjdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt7IGRhdGE6IGFjY291bnREYXRhLCBlcnJvciwgbG9hZGluZyB9LCBkaXNjb25uZWN0XSA9IHVzZUFjY291bnQoe1xuICAgIGZldGNoRW5zOiB0cnVlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8geW91ciBuZXcgREFwcDwvaDE+XG4gICAgICAgIHthY2NvdW50RGF0YSA/IChcbiAgICAgICAgICA8QWNjb3VudENvbXBvbmVudCBhY2NvdW50RGF0YT17YWNjb3VudERhdGF9IGRpc2Nvbm5lY3Q9e2Rpc2Nvbm5lY3R9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENvbm5lY3RvckNvbXBvbmVudCAvPlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VDb25uZWN0IiwidXNlQWNjb3VudCIsInN0eWxlcyIsIkNvbm5lY3RvckNvbXBvbmVudCIsImRhdGEiLCJlcnJvciIsImNvbm5lY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJjb25uZWN0b3JDb250YWluZXIiLCJjb250YWluZXJQYWRkaW5nIiwiY29ubmVjdG9ycyIsIm1hcCIsIngiLCJidXR0b24iLCJjb25uZWN0b3JCdXR0b24iLCJkaXNhYmxlZCIsInJlYWR5Iiwib25DbGljayIsIm5hbWUiLCJpZCIsInAiLCJtZXNzYWdlIiwiQWNjb3VudENvbXBvbmVudCIsImFjY291bnREYXRhIiwiZGlzY29ubmVjdCIsImltZyIsInNyYyIsImVucyIsImF2YXRhciIsImFsdCIsImFkZHJlc3MiLCJjb25uZWN0b3IiLCJjdGEiLCJIb21lIiwiZmV0Y2hFbnMiLCJsb2FkaW5nIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiZm9vdGVyIiwiYSIsInRhcmdldCIsInNwYW4iLCJsb2dvIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});