!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("bs4",[],t):"object"==typeof exports?exports.bs4=t():e.bs4=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(1),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(){function e(t){n(this,e),this.selector=t,this.innerHeight=window.innerHeight}return r(e,[{key:"modal",value:function(){return new i.default(this.selector)}}]),e}();t.default=l,e.exports=t.default},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=function(){function e(t){var o=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,e),this.messages={dataTarget:"Você precisa setar um [data-target] com o seletor da modal."},this.selector=t,this.context=r,this.innerHeight=window.innerHeight,this.startModal();var a=document.querySelectorAll(".modal");a.length>0&&a.forEach(function(e){e.classList.contains("scrollable")&&(e.querySelector(".modal-body").style.overflow="auto",o.responsiveModal(e))}),this.onResizeWindow()}return r(e,[{key:"onResizeWindow",value:function(){var e=this;window.addEventListener("resize",function(t){e.innerHeight=t.target.innerHeight,e.getModals(function(t){t.forEach(function(t){e.responsiveModal(t)})})})}},{key:"getModals",value:function(e){var t=document.querySelectorAll(".modal.scrollable");if(t.length>0)return e(t)}},{key:"responsiveModal",value:function(e){e.querySelector(".modal-body").style.maxHeight=this.innerHeight-200+"px"}},{key:"startModal",value:function(){var e=this;(null==this.context?document:this.context).querySelectorAll(this.selector).forEach(function(t){t.addEventListener("click",function(t){var o=t.target.closest('[data-toggle="modal"]').dataset.target;if(o){document.body.classList.add("modal-open");var n=document.querySelector(o);n.style.display="block",n.removeAttribute("aria-hidden"),n.scrollTop=0,n.classList.add("show");var r=document.createElement("div");r.classList.add("modal-backdrop","fade"),document.body.insertAdjacentElement("beforeend",r),r.scrollTop=0,r.classList.add("show"),e.closeModal(n)}else console.info(e.messages.dataTarget,t)})})}},{key:"closeModal",value:function(e){var t=this;document.querySelectorAll('[data-dismiss="modal"]').forEach(function(o){o.addEventListener("click",function(o){t.hideModal(e)})})}},{key:"hideModal",value:function(e){e.classList.remove("show"),setTimeout(function(){e.style.display="none"},400),e.setAttribute("aria-hidden",!0);var t=document.querySelector(".modal-backdrop");t&&(t.classList.remove("show"),setTimeout(function(){t.parentNode&&t.parentNode.removeChild(t),document.body.classList.remove("modal-open")},400))}}]),e}();t.default=a,e.exports=t.default}])});
//# sourceMappingURL=bs4.js.map