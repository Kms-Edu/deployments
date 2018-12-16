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

/***/ "./components/drawer.js":
/*!******************************!*\
  !*** ./components/drawer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/drawer/style/css */ "antd-mobile/lib/drawer/style/css");
/* harmony import */ var antd_mobile_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/drawer */ "antd-mobile/lib/drawer");
/* harmony import */ var antd_mobile_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/list/style/css */ "antd-mobile/lib/list/style/css");
/* harmony import */ var antd_mobile_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile/lib/list */ "antd-mobile/lib/list");
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "/Users/revskill/work/kms/kms-2/mobile/home/components/drawer.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var sidebar = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(function (i, index) {
  if (index === 0) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      key: index,
      thumb: "https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png",
      multipleLine: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "Category");
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: index,
    thumb: "https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Category", index);
}));

var App = function App(_ref) {
  var title = _ref.title;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var onOpenChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    setOpen(!open);
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, title, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "my-drawer",
    enableDragHandle: true,
    contentStyle: {
      color: '#A6A6A6',
      textAlign: 'center',
      paddingTop: 42
    },
    sidebar: sidebar,
    open: open,
    onOpenChange: onOpenChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
/*
class App1 extends React.Component {
  state = {
    open: true,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {
    // fix in codepen
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    return (<div>
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
      <Drawer
        className="my-drawer"
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        Click upper-left corner
      </Drawer>
    </div>);
  }
}

export default App1
*/

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_wing_blank_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/wing-blank/style/css */ "antd-mobile/lib/wing-blank/style/css");
/* harmony import */ var antd_mobile_lib_wing_blank_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_wing_blank_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_wing_blank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/wing-blank */ "antd-mobile/lib/wing-blank");
/* harmony import */ var antd_mobile_lib_wing_blank__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_wing_blank__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/nav-bar/style/css */ "antd-mobile/lib/nav-bar/style/css");
/* harmony import */ var antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile/lib/nav-bar */ "antd-mobile/lib/nav-bar");
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd-mobile/lib/icon/style/css */ "antd-mobile/lib/icon/style/css");
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd-mobile/lib/icon */ "antd-mobile/lib/icon");
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/revskill/work/kms/kms-2/mobile/home/components/layout.js";




/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(function (_ref) {
  var router = _ref.router,
      children = _ref.children,
      title = _ref.title,
      drawer = _ref.drawer;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-4148926091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
    className: "jsx-4148926091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    mode: "light",
    icon: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }),
    onLeftClick: function onLeftClick() {
      return router.back();
    },
    rightContent: [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: "0",
      type: "search",
      style: {
        marginRight: '16px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: "1",
      type: "ellipsis",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, drawer), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    styleId: "4148926091",
    css: "html.jsx-4148926091,body.jsx-4148926091{box-sizing:border-box;}*.jsx-4148926091,*.jsx-4148926091:before,*.jsx-4148926091:after{box-sizing:inherit;}html.jsx-4148926091{height:100%;width:100%;}body.jsx-4148926091{min-height:100%;margin:0;padding:0;background-color:gray;}h1.jsx-4148926091{padding:15px 0 9px 15px;color:#000;font-size:16px;line-height:16px;height:16px;font-weight:bolder;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZXZza2lsbC93b3JrL2ttcy9rbXMtMi9tb2JpbGUvaG9tZS9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBRzZCLEFBRWlCLEFBSzNCLEFBT0ksQUFVVSxZQWRmLElBT0YsR0FmK0IsR0FEMUMsQ0FVQSxDQWNlLENBUEgsVUFHWSxBQUtMLGVBQ0UsT0FMckIsVUFNZ0IsWUFDTyxtQkFDRCxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3JldnNraWxsL3dvcmsva21zL2ttcy0yL21vYmlsZS9ob21lL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2QmFyLCBJY29uLCBXaW5nQmxhbmsgfSBmcm9tICdhbnRkLW1vYmlsZSdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcigoeyByb3V0ZXIsIGNoaWxkcmVuLCB0aXRsZSwgZHJhd2VyIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPE5hdkJhclxuICAgICAgbW9kZT0nbGlnaHQnXG4gICAgICBpY29uPXs8SWNvbiB0eXBlPSdsZWZ0JyAvPn1cbiAgICAgIG9uTGVmdENsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfVxuICAgICAgcmlnaHRDb250ZW50PXtbXG4gICAgICAgIDxJY29uIGtleT1cIjBcIiB0eXBlPVwic2VhcmNoXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxNnB4JyB9fSAvPixcbiAgICAgICAgPEljb24ga2V5PVwiMVwiIHR5cGU9XCJlbGxpcHNpc1wiIC8+LFxuICAgICAgXX1cbiAgICA+XG4gICAgICB7ZHJhd2VyfVxuICAgIDwvTmF2QmFyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBodG1sLGJvZHkge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIgeyBib3gtc2l6aW5nOiBpbmhlcml0OyB9XG4gICAgIFxuICAgIC8qIFNldCBmdWxsIGhlaWdodDogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82NjU0OTU4L21ha2UtYm9keS1oYXZlLTEwMC1vZi10aGUtYnJvd3Nlci1oZWlnaHQgKi9cbiAgICBodG1sIHtcbiAgICAgIC8qIGJvZHkgd2lsbCBzZXQgaXQncyBoZWlnaHQgYmFzZWQgb24gaXRzIHBhcmVudCwgd2hpY2ggaXMgaHRtbCAqL1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICBcbiAgICAgIC8qIHNldCBmdWxsIHdpZHRoIGFzIHdlbGwgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBib2R5IHtcbiAgICAgIC8qIG1pbi1oZWlnaHQgaXMgbmVlZGVkIGZvciBwYWdlcyB0aGF0IG1pZ2h0IHNjcm9sbCwgaWUgdGhleSBtYXkgY29udGFpbiBfbW9yZV8gdGhhbiAxMDAlIG9mIHZpZXdwb3J0IGhlaWdodCAqL1xuICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgXG4gICAgICAvKiBuZWVkZWQgdG8gcHJldmVudCB1bndhbnRlZCBzY3JvbGwtYmFycyAqL1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIFxuICAgICAgLyogVGhpcyBpcyBqdXN0IHNvIHdlIGNhbiB0ZWxsIHRoZSBib2R5IGJsb2NrIGFwYXJ0IGZyb20gdGhlIGFwcCBjb250YWluZXIgKi9cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgfVxuICAgICAgaDEge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDAgOXB4IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPFdpbmdCbGFuaz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1dpbmdCbGFuaz5cbiAgPC9kaXY+XG4pKVxuIl19 */\n/*@ sourceURL=/Users/revskill/work/kms/kms-2/mobile/home/components/layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile_lib_wing_blank__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, children));
}));

/***/ }),

/***/ "./components/list-view.js":
/*!*********************************!*\
  !*** ./components/list-view.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_list_view_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/list-view/style/css */ "antd-mobile/lib/list-view/style/css");
/* harmony import */ var antd_mobile_lib_list_view_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_view_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/list-view */ "antd-mobile/lib/list-view");
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/revskill/work/kms/kms-2/mobile/home/components/list-view.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */



function MyBody(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "am-list-body my-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      display: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "you can custom body wrap element"), props.children);
}

var data = [{
  img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
  title: 'Meet hotel',
  des: '不是所有的兼职汪都需要风吹日晒'
}, {
  img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
  title: 'McDonald\'s invites you',
  des: '不是所有的兼职汪都需要风吹日晒'
}, {
  img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
  title: 'Eat the week',
  des: '不是所有的兼职汪都需要风吹日晒'
}];
var NUM_SECTIONS = 5;
var NUM_ROWS_PER_SECTION = 5;
var pageIndex = 0;
var dataBlobs = {};
var sectionIDs = [];
var rowIDs = [];

function genData() {
  var pIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  for (var i = 0; i < NUM_SECTIONS; i++) {
    var ii = pIndex * NUM_SECTIONS + i;
    var sectionName = "Section ".concat(ii);
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (var jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      var rowName = "S".concat(ii, ", R").concat(jj);
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }

  sectionIDs = _toConsumableArray(sectionIDs);
  rowIDs = _toConsumableArray(rowIDs);
}

var Demo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo(props) {
    var _this;

    _classCallCheck(this, Demo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Demo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEndReached", function (event) {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      if (_this.state.isLoading && !_this.state.hasMore) {
        return;
      }

      console.log('reach end', event);

      _this.setState({
        isLoading: true
      });

      setTimeout(function () {
        genData(++pageIndex);

        _this.setState({
          dataSource: _this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          isLoading: false
        });
      }, 1000);
    });

    var getSectionData = function getSectionData(dataBlob, sectionID) {
      return dataBlob[sectionID];
    };

    var getRowData = function getRowData(dataBlob, sectionID, rowID) {
      return dataBlob[rowID];
    };

    var dataSource = new antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default.a.DataSource({
      getRowData: getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: function rowHasChanged(row1, row2) {
        return row1 !== row2;
      },
      sectionHeaderHasChanged: function sectionHeaderHasChanged(s1, s2) {
        return s1 !== s2;
      }
    });
    _this.state = {
      dataSource: dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4
    };
    return _this;
  }

  _createClass(Demo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // you can scroll to the specified position
      // setTimeout(() => this.lv.scrollTo(0, 120), 800);
      var hei = document.documentElement.clientHeight - react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.findDOMNode(this.lv).parentNode.offsetTop; // simulate initial Ajax

      setTimeout(function () {
        genData();

        _this2.setState({
          dataSource: _this2.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          isLoading: false,
          height: hei
        });
      }, 600);
    } // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
    //     });
    //   }
    // }

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var separator = function separator(sectionID, rowID) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: "".concat(sectionID, "-").concat(rowID),
          style: {
            backgroundColor: '#F5F5F9',
            height: 8,
            borderTop: '1px solid #ECECED',
            borderBottom: '1px solid #ECECED'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        });
      };

      var index = data.length - 1;

      var row = function row(rowData, sectionID, rowID) {
        var _ref;

        if (index < 0) {
          index = data.length - 1;
        }

        var obj = data[index--];
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: rowID,
          style: {
            padding: '0 15px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            lineHeight: '50px',
            color: '#888',
            fontSize: 18,
            borderBottom: '1px solid #F6F6F6'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, obj.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: (_ref = {
            display: '-webkit-box'
          }, _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, "padding", '15px 0'), _ref),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          style: {
            height: '64px',
            marginRight: '15px'
          },
          src: obj.img,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            lineHeight: 1
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            marginBottom: '8px',
            fontWeight: 'bold'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, obj.des), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          style: {
            fontSize: '30px',
            color: '#FF6E27'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, "35"), "\xA5 ", rowID))));
      };

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default.a, {
        ref: function ref(el) {
          return _this3.lv = el;
        },
        dataSource: this.state.dataSource,
        renderHeader: function renderHeader() {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          });
        },
        renderFooter: function renderFooter() {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            style: {
              padding: 30,
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }, _this3.state.isLoading ? 'Loading...' : 'Loaded');
        },
        renderSectionHeader: function renderSectionHeader(sectionData) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, "Task ".concat(sectionData.split(' ')[1]));
        },
        renderBodyComponent: function renderBodyComponent() {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MyBody, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          });
        },
        renderRow: row,
        renderSeparator: separator,
        style: {
          height: this.state.height,
          overflow: 'auto'
        },
        pageSize: 4,
        onScroll: function onScroll() {
          console.log('scroll');
        },
        scrollRenderAheadDistance: 500,
        onEndReached: this.onEndReached,
        onEndReachedThreshold: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      });
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_list_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/list-view */ "./components/list-view.js");
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/drawer */ "./components/drawer.js");
var _jsxFileName = "/Users/revskill/work/kms/kms-2/mobile/home/pages/index.js";






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
});
/*const Layout = dynamic(import('../components/layout'))

/*const ListView = dynamic(import('../components/list-view'))
const Drawer = dynamic(import('../components/drawer'))
*/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    drawer: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: 'Testing',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }),
    title: 'Testing',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "Put your description here.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabBar, {
    life: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_view__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }),
    koubei: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Koubei"),
    friend: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Friend"),
    my: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "My"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
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

/***/ "antd-mobile/lib/drawer":
/*!*****************************************!*\
  !*** external "antd-mobile/lib/drawer" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/drawer");

/***/ }),

/***/ "antd-mobile/lib/drawer/style/css":
/*!***************************************************!*\
  !*** external "antd-mobile/lib/drawer/style/css" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/drawer/style/css");

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

/***/ "antd-mobile/lib/list":
/*!***************************************!*\
  !*** external "antd-mobile/lib/list" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/list");

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

/***/ "antd-mobile/lib/list/style/css":
/*!*************************************************!*\
  !*** external "antd-mobile/lib/list/style/css" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/list/style/css");

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

/***/ "antd-mobile/lib/wing-blank":
/*!*********************************************!*\
  !*** external "antd-mobile/lib/wing-blank" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/wing-blank");

/***/ }),

/***/ "antd-mobile/lib/wing-blank/style/css":
/*!*******************************************************!*\
  !*** external "antd-mobile/lib/wing-blank/style/css" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/wing-blank/style/css");

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

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map