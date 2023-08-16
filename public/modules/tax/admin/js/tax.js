(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,i=void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,r||"default");if("object"!==t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(o,"string"),"symbol"===t(i)?i:String(i)),a)}var o,i}var r=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rateId=e,this.rate=r}var r,n,a;return r=t,(n=[{key:"html",value:function(){return this.html=this.template({rateId:this.rateId,rate:this.rate}),this.eventListeners(),this.html}},{key:"updateState",value:function(){this.html.find(".country select").trigger("change")}},{key:"template",value:function(t){var e=_.template($("#tax-rate-template").html());return $(e(t))}},{key:"eventListeners",value:function(t){var e=this;this.html.find(".country select").on("change",(function(t){t.currentTarget.value&&e.changeState(t.currentTarget.value)})),this.html.on("click",".delete-row",this.delete)}},{key:"changeState",value:function(t){var e=this;this.getStateField().prop("disabled",!0);var r=this.getStateField().val();$.getJSON(route("countries.states.index",t),(function(t){e.getStateField().replaceWith(e.getStateTemplate(t)).prop("disabled",!1),r&&e.getStateField().val(r)}))}},{key:"getStateField",value:function(){var t=$.escapeSelector("rates.".concat(this.rateId,".state"));return $("#".concat(t))}},{key:"getStateTemplate",value:function(t){return $.isEmptyObject(t)?this.getInputStateTemplate():this.getSelectStateTemplate(t)}},{key:"getInputStateTemplate",value:function(){return _.template($("#state-input-template").html())({rateId:this.rateId})}},{key:"getSelectStateTemplate",value:function(t){return _.template($("#state-select-template").html())({rateId:this.rateId,states:t})}},{key:"delete",value:function(t){$(t.currentTarget).closest(".tax-rate").remove()}}])&&e(r.prototype,n),a&&e(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){u=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,(o=a.key,i=void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===n(i)?i:String(i)),a)}var o,i}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rateCount=0,this.addTaxRates(FleetCart.data.tax_rates),0===this.rateCount&&this.addTaxRate(),this.addTaxRatesErrors(FleetCart.errors.tax_rates),this.eventListeners(),this.sortable()}var e,n,o;return e=t,n=[{key:"addTaxRates",value:function(t){var e,r=a(t);try{for(r.s();!(e=r.n()).done;){var n=e.value;this.addTaxRate(n)}}catch(t){r.e(t)}finally{r.f()}}},{key:"addTaxRate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new r(this.rateCount++,t);$("#tax-rates").append(e.html()),e.updateState(),window.admin.tooltip()}},{key:"addTaxRatesErrors",value:function(t){for(var e in t){var r=$.escapeSelector(e),n=$("#".concat(r)).parent();n.addClass("has-error"),n.append('<span class="help-block">'.concat(t[e][0],"</span>"))}}},{key:"eventListeners",value:function(){var t=this;$("#add-new-rate").on("click",(function(){return t.addTaxRate()}))}},{key:"sortable",value:function(){Sortable.create(document.getElementById("tax-rates"),{handle:".drag-icon",animation:150})}}],n&&i(e.prototype,n),o&&i(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();window.admin.removeSubmitButtonOffsetOn("#rates"),new l})();
//# sourceMappingURL=tax.js.map