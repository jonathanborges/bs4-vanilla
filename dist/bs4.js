!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("bs4",[],t):"object"==typeof exports?exports.bs4=t():e.bs4=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(){function e(t){o(this,e),this.selector=t}return r(e,[{key:"modal",value:function(){return new c.default(this.selector)}}]),e}();t.default=l,e.exports=t.default},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;o(this,e),this.messages={dataTarget:"Você precisa setar um [data-target] com o seletor da modal."},this.selector=t,this.context=n,this.openModal()}return r(e,[{key:"openModal",value:function(){var e=this;console.log("modal opened!"),(null==this.context?document:this.context).querySelectorAll(this.selector).forEach(function(t){t.addEventListener("click",function(t){var n=t.target.dataset.target;if(n){document.body.classList.add("modal-open");var o=document.querySelector(n);o.style.display="block",o.removeAttribute("aria-hidden"),o.scrollTop=0,o.classList.add("show");var r=document.createElement("div");r.classList.add("modal-backdrop","fade"),document.body.insertAdjacentElement("beforeend",r),r.scrollTop=0,r.classList.add("show"),e.closeModal(o)}else console.info(e.messages.dataTarget)})})}},{key:"closeModal",value:function(e){var t=this;document.querySelectorAll('[data-dismiss="modal"]').forEach(function(n){n.addEventListener("click",function(n){t.hideModal(e)})})}},{key:"hideModal",value:function(e){e.classList.remove("show")}}]),e}();t.default=a,e.exports=t.default}])});
//# sourceMappingURL=bs4.js.map