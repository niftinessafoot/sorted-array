!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((t="undefined"!=typeof globalThis?globalThis:t||self).bundle=t.bundle||{},t.bundle.js=e())}(this,(function(){"use strict";function t(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,n(t,e,"get"))}function e(t,e,i){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,n(t,e,"set"),i),i}function n(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function i(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function a(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function r(t,e,n){a(t,e),e.set(t,n)}function s(t,e){a(t,e),e.add(t)}var o=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakSet,f=new WeakSet;function c(t,e){return t===e?0:t>e?1:-1}function d(){t(this,o).sort(t(this,l))}return class{constructor(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,f),s(this,h),r(this,o,{writable:!0,value:void 0}),r(this,l,{writable:!0,value:void 0}),r(this,u,{writable:!0,value:{data:[],sortCallback:i(this,h,c)}}),Array.isArray(n)&&(n={data:n});const{data:a,sortCallback:p}={...t(this,u),...n},w="function"==typeof p;e(this,o,a),e(this,l,w?p:i(this,h,c)),t(this,o).length&&i(this,f,d).call(this)}add(e){t(this,o).push(e),i(this,f,d).call(this)}edit(e,n){t(this,o)[e]=n,i(this,f,d).call(this)}delete(e){t(this,o).splice(e,1)}get list(){return t(this,o)}}}));
//# sourceMappingURL=index.js.map
