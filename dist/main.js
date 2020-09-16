(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chenweitools"] = factory();
	else
		root["chenweitools"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./arrFlat/index.js":
/*!**************************!*\
  !*** ./arrFlat/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var arrFlat = function arrFlat(arr, result) {
  result = result || [];
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      arrFlat(item, result);
    } else {
      result.push(item);
    }
  });
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (arrFlat);

/***/ }),

/***/ "./arrNoRepeat/index.js":
/*!******************************!*\
  !*** ./arrNoRepeat/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var arrNoRepeat = function arrNoRepeat(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error");
    return;
  }

  return arr.filter(function (value, index, self) {
    return self.indexOf(value) == index;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (arrNoRepeat);

/***/ }),

/***/ "./debounce/index.js":
/*!***************************!*\
  !*** ./debounce/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _arguments = arguments,
    _this = undefined;

var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = _this;
    var args = _arguments;
    if (timeout) clearTimeout(timeout);

    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (debounce);

/***/ }),

/***/ "./deepClone/index.js":
/*!****************************!*\
  !*** ./deepClone/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var deepClone = function deepClone(obj) {
  if (_typeof(obj) !== "object" || obj == null) {
    return obj;
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  var result = Array.isArray(obj) ? [] : {};

  for (var key in obj) {
    if (obj.hasOwnProperty[key]) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (deepClone);

/***/ }),

/***/ "./getCurrentPlatformType/index.js":
/*!*****************************************!*\
  !*** ./getCurrentPlatformType/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getCurrentPlatformType = function getCurrentPlatformType() {
  var agent = navigator.userAgent.toLocaleLowerCase();
  var isMac = /macintosh|mac os x/i.test(navigator.userAgent);

  if (agent.indexOf("win32") >= 0) {
    return "win32";
  }

  if (agent.indexOf("win64") >= 0) {
    return "win64";
  }

  if (isMac) {
    return "mac";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getCurrentPlatformType);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: maxItemOfArr, debounce, myinstanceof, type, quickSort, arrNoRepeat, deepClone, arrFlat, getCurrentPlatformType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maxItemOfArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maxItemOfArr */ "./maxItemOfArr/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxItemOfArr", function() { return _maxItemOfArr__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ "./debounce/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _instanceof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceof */ "./instanceof/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "myinstanceof", function() { return _instanceof__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./type/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "type", function() { return _type__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _quickSort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quickSort */ "./quickSort/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickSort", function() { return _quickSort__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _arrNoRepeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrNoRepeat */ "./arrNoRepeat/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrNoRepeat", function() { return _arrNoRepeat__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _deepClone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deepClone */ "./deepClone/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return _deepClone__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _arrFlat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arrFlat */ "./arrFlat/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrFlat", function() { return _arrFlat__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _getCurrentPlatformType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getCurrentPlatformType */ "./getCurrentPlatformType/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentPlatformType", function() { return _getCurrentPlatformType__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "./instanceof/index.js":
/*!*****************************!*\
  !*** ./instanceof/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var myinstanceof = function myinstanceof(leftValue, rightValue) {
  if (_typeof(leftValue) !== "object" || leftValue === null) return false;
  var rightProto = rightValue.prototype;
  var leftProto = leftValue.__proto__;

  while (true) {
    if (leftProto === null) {
      return false;
    }

    if (leftProto === rightProto) {
      return true;
    }

    leftProto = leftProto.__proto__;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (myinstanceof);

/***/ }),

/***/ "./maxItemOfArr/index.js":
/*!*******************************!*\
  !*** ./maxItemOfArr/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var maxItemOfArr = function maxItemOfArr(arr) {
  return arr.sort(function (a, b) {
    return b - a;
  })[0];
};

/* harmony default export */ __webpack_exports__["default"] = (maxItemOfArr);

/***/ }),

/***/ "./quickSort/index.js":
/*!****************************!*\
  !*** ./quickSort/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var quickSort = function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var midValue = arr.splice(Math.floor(arr.length / 2), 1)[0];
  var Arrleft = [];
  var Arrright = [];

  for (var i = 0; i < arr.length; i++) {
    arr[i] < midValue ? Arrleft.push(arr[i]) : Arrright.push(arr[i]);
  }

  return quickSort(Arrleft).concat(midValue, quickSort(Arrright));
};

/* harmony default export */ __webpack_exports__["default"] = (quickSort);

/***/ }),

/***/ "./type/index.js":
/*!***********************!*\
  !*** ./type/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var type = function type(obj) {
  return _typeof(obj) !== "object" ? _typeof(obj) : Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

/* harmony default export */ __webpack_exports__["default"] = (type);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVud2VpdG9vbHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NoZW53ZWl0b29scy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGVud2VpdG9vbHMvLi9hcnJGbGF0L2luZGV4LmpzIiwid2VicGFjazovL2NoZW53ZWl0b29scy8uL2Fyck5vUmVwZWF0L2luZGV4LmpzIiwid2VicGFjazovL2NoZW53ZWl0b29scy8uL2RlYm91bmNlL2luZGV4LmpzIiwid2VicGFjazovL2NoZW53ZWl0b29scy8uL2RlZXBDbG9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaGVud2VpdG9vbHMvLi9nZXRDdXJyZW50UGxhdGZvcm1UeXBlL2luZGV4LmpzIiwid2VicGFjazovL2NoZW53ZWl0b29scy8uL2luZGV4LmpzIiwid2VicGFjazovL2NoZW53ZWl0b29scy8uL2luc3RhbmNlb2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hlbndlaXRvb2xzLy4vbWF4SXRlbU9mQXJyL2luZGV4LmpzIiwid2VicGFjazovL2NoZW53ZWl0b29scy8uL3F1aWNrU29ydC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaGVud2VpdG9vbHMvLi90eXBlL2luZGV4LmpzIl0sIm5hbWVzIjpbImFyckZsYXQiLCJhcnIiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsInB1c2giLCJhcnJOb1JlcGVhdCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJ2YWx1ZSIsImluZGV4Iiwic2VsZiIsImluZGV4T2YiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xlYXJUaW1lb3V0IiwiY2FsbE5vdyIsInNldFRpbWVvdXQiLCJhcHBseSIsImRlZXBDbG9uZSIsIm9iaiIsIlJlZ0V4cCIsIkRhdGUiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImdldEN1cnJlbnRQbGF0Zm9ybVR5cGUiLCJhZ2VudCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG9jYWxlTG93ZXJDYXNlIiwiaXNNYWMiLCJ0ZXN0IiwibXlpbnN0YW5jZW9mIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsInJpZ2h0UHJvdG8iLCJwcm90b3R5cGUiLCJsZWZ0UHJvdG8iLCJfX3Byb3RvX18iLCJtYXhJdGVtT2ZBcnIiLCJzb3J0IiwiYSIsImIiLCJxdWlja1NvcnQiLCJsZW5ndGgiLCJtaWRWYWx1ZSIsInNwbGljZSIsIk1hdGgiLCJmbG9vciIsIkFycmxlZnQiLCJBcnJyaWdodCIsImkiLCJjb25jYXQiLCJ0eXBlIiwiT2JqZWN0IiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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Q0FBRCxDQUFoQixDQUFwQixHQUEyQ0QsUUFBUSxDQUFDcEQsSUFBVCxDQUFjTixHQUFHLENBQUMyRCxDQUFELENBQWpCLENBQTNDO0FBQ0Q7O0FBQ0QsU0FBT1IsU0FBUyxDQUFDTSxPQUFELENBQVQsQ0FBbUJHLE1BQW5CLENBQTBCUCxRQUExQixFQUFvQ0YsU0FBUyxDQUFDTyxRQUFELENBQTdDLENBQVA7QUFDRCxDQVpEOztBQWFlUCx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUNiQSxJQUFNVSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDakMsR0FBRDtBQUFBLFNBQ1gsUUFBT0EsR0FBUCxNQUFlLFFBQWYsV0FDV0EsR0FEWCxJQUVJa0MsTUFBTSxDQUFDbEIsU0FBUCxDQUFpQm1CLFFBQWpCLENBQTBCQyxJQUExQixDQUErQnBDLEdBQS9CLEVBQW9DcUMsS0FBcEMsQ0FBMEMsQ0FBMUMsRUFBNkMsQ0FBQyxDQUE5QyxFQUFpREMsV0FBakQsRUFITztBQUFBLENBQWI7O0FBSWVMLG1FQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNoZW53ZWl0b29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjaGVud2VpdG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJjb25zdCBhcnJGbGF0ID0gKGFyciwgcmVzdWx0KSA9PiB7XHJcbiAgcmVzdWx0ID0gcmVzdWx0IHx8IFtdO1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xyXG4gICAgICBhcnJGbGF0KGl0ZW0sIHJlc3VsdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBhcnJGbGF0O1xyXG4iLCJjb25zdCBhcnJOb1JlcGVhdCA9IChhcnIpID0+IHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0eXBlIGVycm9yXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICByZXR1cm4gYXJyLmZpbHRlcigodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XHJcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PSBpbmRleDtcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgYXJyTm9SZXBlYXQ7XHJcbiIsImNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xyXG4gIGxldCB0aW1lb3V0O1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XHJcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcclxuICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICBpZiAoaW1tZWRpYXRlKSB7XHJcbiAgICAgIGxldCBjYWxsTm93ID0gIXRpbWVvdXQ7XHJcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgfSwgd2FpdCk7XHJcbiAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgIH0sIHdhaXQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWJvdW5jZTtcclxuIiwiY29uc3QgZGVlcENsb25lID0gKG9iaikgPT4ge1xyXG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiIHx8IG9iaiA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuICBpZiAob2JqIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChvYmopO1xyXG4gIH1cclxuICBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKG9iaik7XHJcbiAgfVxyXG4gIGNvbnN0IHJlc3VsdCA9IEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDoge307XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eVtrZXldKSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcENsb25lKG9ialtrZXldKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZGVlcENsb25lO1xyXG4iLCJjb25zdCBnZXRDdXJyZW50UGxhdGZvcm1UeXBlID0gKCkgPT4ge1xyXG4gIGxldCBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICBsZXQgaXNNYWMgPSAvbWFjaW50b3NofG1hYyBvcyB4L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICBpZiAoYWdlbnQuaW5kZXhPZihcIndpbjMyXCIpID49IDApIHtcclxuICAgIHJldHVybiBcIndpbjMyXCI7XHJcbiAgfVxyXG4gIGlmIChhZ2VudC5pbmRleE9mKFwid2luNjRcIikgPj0gMCkge1xyXG4gICAgcmV0dXJuIFwid2luNjRcIjtcclxuICB9XHJcbiAgaWYgKGlzTWFjKSB7XHJcbiAgICByZXR1cm4gXCJtYWNcIjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDdXJyZW50UGxhdGZvcm1UeXBlO1xyXG4iLCJpbXBvcnQgbWF4SXRlbU9mQXJyIGZyb20gXCIuL21heEl0ZW1PZkFyclwiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vZGVib3VuY2VcIjtcclxuaW1wb3J0IG15aW5zdGFuY2VvZiBmcm9tIFwiLi9pbnN0YW5jZW9mXCI7XHJcbmltcG9ydCB0eXBlIGZyb20gXCIuL3R5cGVcIjtcclxuaW1wb3J0IHF1aWNrU29ydCBmcm9tIFwiLi9xdWlja1NvcnRcIjtcclxuaW1wb3J0IGFyck5vUmVwZWF0IGZyb20gXCIuL2Fyck5vUmVwZWF0XCI7XHJcbmltcG9ydCBkZWVwQ2xvbmUgZnJvbSBcIi4vZGVlcENsb25lXCI7XHJcbmltcG9ydCBhcnJGbGF0IGZyb20gXCIuL2FyckZsYXRcIjtcclxuaW1wb3J0IGdldEN1cnJlbnRQbGF0Zm9ybVR5cGUgZnJvbSBcIi4vZ2V0Q3VycmVudFBsYXRmb3JtVHlwZVwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBtYXhJdGVtT2ZBcnIsXHJcbiAgZGVib3VuY2UsXHJcbiAgbXlpbnN0YW5jZW9mLFxyXG4gIHR5cGUsXHJcbiAgcXVpY2tTb3J0LFxyXG4gIGFyck5vUmVwZWF0LFxyXG4gIGRlZXBDbG9uZSxcclxuICBhcnJGbGF0LFxyXG4gIGdldEN1cnJlbnRQbGF0Zm9ybVR5cGUsXHJcbn07XHJcbiIsImNvbnN0IG15aW5zdGFuY2VvZiA9IChsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUpID0+IHtcclxuICBpZiAodHlwZW9mIGxlZnRWYWx1ZSAhPT0gXCJvYmplY3RcIiB8fCBsZWZ0VmFsdWUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICBsZXQgcmlnaHRQcm90byA9IHJpZ2h0VmFsdWUucHJvdG90eXBlO1xyXG4gIGxldCBsZWZ0UHJvdG8gPSBsZWZ0VmFsdWUuX19wcm90b19fO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpZiAobGVmdFByb3RvID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChsZWZ0UHJvdG8gPT09IHJpZ2h0UHJvdG8pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBsZWZ0UHJvdG8gPSBsZWZ0UHJvdG8uX19wcm90b19fO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbXlpbnN0YW5jZW9mO1xyXG4iLCJjb25zdCBtYXhJdGVtT2ZBcnIgPSAoYXJyKSA9PiB7XHJcbiAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBiIC0gYSlbMF07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG1heEl0ZW1PZkFycjtcclxuIiwiY29uc3QgcXVpY2tTb3J0ID0gKGFycikgPT4ge1xyXG4gIGlmIChhcnIubGVuZ3RoIDw9IDEpIHtcclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG4gIGxldCBtaWRWYWx1ZSA9IGFyci5zcGxpY2UoTWF0aC5mbG9vcihhcnIubGVuZ3RoIC8gMiksIDEpWzBdO1xyXG4gIGxldCBBcnJsZWZ0ID0gW107XHJcbiAgbGV0IEFycnJpZ2h0ID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcnJbaV0gPCBtaWRWYWx1ZSA/IEFycmxlZnQucHVzaChhcnJbaV0pIDogQXJycmlnaHQucHVzaChhcnJbaV0pO1xyXG4gIH1cclxuICByZXR1cm4gcXVpY2tTb3J0KEFycmxlZnQpLmNvbmNhdChtaWRWYWx1ZSwgcXVpY2tTb3J0KEFycnJpZ2h0KSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHF1aWNrU29ydDtcclxuIiwiY29uc3QgdHlwZSA9IChvYmopID0+XHJcbiAgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIlxyXG4gICAgPyB0eXBlb2Ygb2JqXHJcbiAgICA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpO1xyXG5leHBvcnQgZGVmYXVsdCB0eXBlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9