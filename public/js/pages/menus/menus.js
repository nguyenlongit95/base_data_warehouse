/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/menus.js":
/*!*************************************!*\
  !*** ./resources/js/pages/menus.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  /**
   * change menu name to slug on update section
   */
  $('#menu-name-update').on('keyup', function (evt) {
    var _menuNameVal = changeToSlug($(this).val());

    $('#menu-slug-update').val(_menuNameVal);
  });
  /**
   * change sub menu name on create section
   */

  $('#sub-menu-name-create').on('keyup', function () {
    var _menuNameVal = changeToSlug($(this).val());

    $('#sub-menu-slug-update').val(_menuNameVal);
  });
  /**
   * ben change sub menu
   */

  $('#btn-add-submenu').on('click', function () {
    $.ajax({
      url: '/admin/menus/create',
      type: 'get',
      data: {},
      success: function success(result) {
        $('#show-sub-menu').html(result.data);
      }
    });
  });
});
/**
 * function get and show submenu and render view table
 *
 * @param idMenu
 */

window.showSubMenu = function (idMenu) {
  $.ajax({
    url: '/admin/menus/show/' + idMenu,
    type: 'get',
    data: {},
    beforeSend: function beforeSend() {// show overloading
    },
    success: function success(result) {
      if (result.code === 200) {
        $('#show-sub-menu').html(result.data);
      }

      return null;
    }
  });
};
/**
 * function change text to slug
 *
 * @param title
 * @returns {string}
 * @constructor
 */


window.changeToSlug = function (title) {
  var slug; //?????i ch??? hoa th??nh ch??? th?????ng

  slug = title.toLowerCase(); //?????i k?? t??? c?? d???u th??nh kh??ng d???u

  slug = slug.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/gi, 'a');
  slug = slug.replace(/??|??|???|???|???|??|???|???|???|???|???/gi, 'e');
  slug = slug.replace(/i|??|??|???|??|???/gi, 'i');
  slug = slug.replace(/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???/gi, 'o');
  slug = slug.replace(/??|??|???|??|???|??|???|???|???|???|???/gi, 'u');
  slug = slug.replace(/??|???|???|???|???/gi, 'y');
  slug = slug.replace(/??/gi, 'd'); //X??a c??c k?? t??? ?????t bi???t

  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, ''); //?????i kho???ng tr???ng th??nh k?? t??? g???ch ngang

  slug = slug.replace(/ /gi, "-"); //?????i nhi???u k?? t??? g???ch ngang li??n ti???p th??nh 1 k?? t??? g???ch ngang
  //Ph??ng tr?????ng h???p ng?????i nh???p v??o qu?? nhi???u k?? t??? tr???ng

  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-'); //X??a c??c k?? t??? g???ch ngang ??? ?????u v?? cu???i

  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, ''); //In slug ra textbox c?? id ???slug???

  return slug;
};

/***/ }),

/***/ 2:
/*!*******************************************!*\
  !*** multi ./resources/js/pages/menus.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\wamp\www\base_app_v5\resources\js\pages\menus.js */"./resources/js/pages/menus.js");


/***/ })

/******/ });