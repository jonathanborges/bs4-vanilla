(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bs4", [], factory);
	else if(typeof exports === 'object')
		exports["bs4"] = factory();
	else
		root["bs4"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modal = __webpack_require__(1);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bs4 = function () {
    function bs4(selector) {
        _classCallCheck(this, bs4);

        this.selector = selector;
        this.innerHeight = window.innerHeight;
    }

    _createClass(bs4, [{
        key: 'modal',
        value: function modal() {
            return new _modal2.default(this.selector);
        }
    }]);

    return bs4;
}();

exports.default = bs4;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
    function Modal(selector) {
        var _this = this;

        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Modal);

        this.messages = {
            dataTarget: 'Você precisa setar um [data-target] com o seletor da modal.'
        };
        this.selector = selector;
        this.context = context;
        this.innerHeight = window.innerHeight;
        this.startModal();

        var modals = document.querySelectorAll('.modal.scrollable');
        if (modals.length > 0) {
            modals.forEach(function (modal) {
                modal.querySelector('.modal-body').style.overflow = 'auto';
                _this.responsiveModal(modal);
            });
        }
        this.onResizeWindow();
    }

    _createClass(Modal, [{
        key: 'onResizeWindow',
        value: function onResizeWindow() {
            var _this2 = this;

            window.addEventListener('resize', function (ev) {
                _this2.innerHeight = ev.target.innerHeight;

                _this2.getModals(function (modals) {
                    modals.forEach(function (modal) {
                        _this2.responsiveModal(modal);
                    });
                });
            });
        }
    }, {
        key: 'getModals',
        value: function getModals(callback) {
            var modals = document.querySelectorAll('.modal.scrollable');
            if (modals.length > 0) {
                return callback(modals);
            }
        }
    }, {
        key: 'responsiveModal',
        value: function responsiveModal(modal) {
            var modalBody = modal.querySelector('.modal-body');
            modalBody.style.maxHeight = this.innerHeight - 200 + 'px';
        }
    }, {
        key: 'startModal',
        value: function startModal() {
            var _this3 = this;

            var context = this.context == null ? document : this.context;
            context.querySelectorAll(this.selector).forEach(function (modalButton) {
                modalButton.addEventListener('click', function (ev) {
                    var target = ev.target.closest('[data-toggle="modal"]').dataset['target'];
                    if (target) {

                        document.body.classList.add('modal-open');

                        var modal = document.querySelector(target);
                        modal.style.display = 'block';
                        modal.removeAttribute('aria-hidden');
                        modal.scrollTop = 0;
                        modal.classList.add('show');

                        var backdrop = document.createElement('div');
                        backdrop.classList.add('modal-backdrop', 'fade');
                        document.body.insertAdjacentElement('beforeend', backdrop);
                        backdrop.scrollTop = 0;
                        backdrop.classList.add('show');

                        // modal.focus();
                        _this3.closeModal(modal);
                    } else {
                        console.info(_this3.messages['dataTarget'], ev);
                    }
                });
            });
        }
    }, {
        key: 'closeModal',
        value: function closeModal(modal) {
            var _this4 = this;

            document.querySelectorAll('[data-dismiss="modal"]').forEach(function (dismiss) {
                dismiss.addEventListener('click', function (ev) {
                    _this4.hideModal(modal);
                });
            });
        }
    }, {
        key: 'hideModal',
        value: function hideModal(modal) {
            modal.classList.remove('show');
            setTimeout(function () {
                modal.style.display = 'none';
            }, 400);
            modal.setAttribute('aria-hidden', true);

            var backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.classList.remove('show');
                setTimeout(function () {
                    if (backdrop.parentNode) {
                        backdrop.parentNode.removeChild(backdrop);
                    }
                    document.body.classList.remove('modal-open');
                }, 400);
            }
        }
    }]);

    return Modal;
}();

exports.default = Modal;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=bs4.js.map