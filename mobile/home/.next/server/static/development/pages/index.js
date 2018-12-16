module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/revskill/work/kms/kms-2/mobile/home/pages/index.js";

 //import ListView from '../components/list-view'

var ListView = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/list-view */ "./components/list-view.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/list-view */ "./components/list-view.js")];
    },
    modules: ['../components/list-view']
  }
}); //import Drawer from '../components/drawer'

var TabBar = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/tab-bar */ "./components/tab-bar.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/tab-bar */ "./components/tab-bar.js")];
    },
    modules: ['../components/tab-bar']
  }
}); //import TabBar from '../components/tab-bar'
//import Layout from '../components/layout2'

var Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/layout3 */ "./components/layout3.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/layout3 */ "./components/layout3.js")];
    },
    modules: ['../components/layout3']
  }
});
/*
/*const ListView = dynamic(import('../components/list-view'))
const Drawer = dynamic(import('../components/drawer'))
*/

var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabBar, {
  life: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListView, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })),
  koubei: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Koubei"),
  friend: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Friend"),
  my: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "My"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
});
var tabs = [{
  title: '1st Tab',
  content: content
}, {
  title: '2nd Tab',
  content: content
}, {
  title: '3rd Tab',
  content: content
}, {
  title: '3rd Tab',
  content: content
}, {
  title: '3rd Tab',
  content: content
}, {
  title: '3rd Tab',
  content: content
}, {
  title: '3rd Tab',
  content: content
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, {
    title: "Index",
    tabs: tabs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  });
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd-mobile/lib/icon":
/*!***************************************!*\
  !*** external "antd-mobile/lib/icon" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/icon");

/***/ }),

/***/ "antd-mobile/lib/icon/style/css":
/*!*************************************************!*\
  !*** external "antd-mobile/lib/icon/style/css" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/icon/style/css");

/***/ }),

/***/ "antd-mobile/lib/list-view":
/*!********************************************!*\
  !*** external "antd-mobile/lib/list-view" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/list-view");

/***/ }),

/***/ "antd-mobile/lib/list-view/style/css":
/*!******************************************************!*\
  !*** external "antd-mobile/lib/list-view/style/css" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/list-view/style/css");

/***/ }),

/***/ "antd-mobile/lib/nav-bar":
/*!******************************************!*\
  !*** external "antd-mobile/lib/nav-bar" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/nav-bar");

/***/ }),

/***/ "antd-mobile/lib/nav-bar/style/css":
/*!****************************************************!*\
  !*** external "antd-mobile/lib/nav-bar/style/css" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/nav-bar/style/css");

/***/ }),

/***/ "antd-mobile/lib/tab-bar":
/*!******************************************!*\
  !*** external "antd-mobile/lib/tab-bar" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/tab-bar");

/***/ }),

/***/ "antd-mobile/lib/tab-bar/style/css":
/*!****************************************************!*\
  !*** external "antd-mobile/lib/tab-bar/style/css" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/tab-bar/style/css");

/***/ }),

/***/ "antd-mobile/lib/tabs":
/*!***************************************!*\
  !*** external "antd-mobile/lib/tabs" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/tabs");

/***/ }),

/***/ "antd-mobile/lib/tabs/style/css":
/*!*************************************************!*\
  !*** external "antd-mobile/lib/tabs/style/css" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/tabs/style/css");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map