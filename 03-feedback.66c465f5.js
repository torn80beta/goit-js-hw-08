!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var r,o,a,u,l,f,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,l=setTimeout(j,t),s?y(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=a}function j(){var e=p();if(O(e))return x(e);l=setTimeout(j,function(e){var n=t-(e-f);return m?g(n,a-(e-c)):n}(e))}function x(e){return l=void 0,d&&r?y(e):(r=o=void 0,u)}function h(){var e=p(),n=O(e);if(r=arguments,o=this,f=e,n){if(void 0===l)return S(f);if(m)return l=setTimeout(j,t),y(f)}return void 0===l&&(l=setTimeout(j,t)),u}return t=E(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(E(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=o=l=void 0},h.flush=function(){return void 0===l?u:x(p())},h}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||l.test(e)?f(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})},mailEl=document.querySelector('input[type="email"]'),textAreaEl=document.querySelector('textarea[name="message"]'),formEl=document.querySelector("form.feedback-form");var S,O,j="feedback-form-state",x={email:"",message:""};null===JSON.parse(localStorage.getItem(j))?(S=x.email,O=x.message):(S=JSON.parse(localStorage.getItem(j)).email,O=JSON.parse(localStorage.getItem(j)).message,mailEl.value=S,textAreaEl.value=O,x.email=S,x.message=O),formEl.addEventListener("input",n((function(){x.email=mailEl.value,x.message=textAreaEl.value,localStorage.setItem(j,JSON.stringify(x))}),500)),formEl.addEventListener("submit",(function(e){return function(e){e.preventDefault(),console.log(x),x.email="",x.message="",localStorage.clear(),mailEl.value="",textAreaEl.value=""}(e)}))}();
//# sourceMappingURL=03-feedback.66c465f5.js.map
