webpackJsonp([0x67ef26645b2a,60335399758886],{97:function(e,t){e.exports={layoutContext:{}}},202:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(224),c=r(u),l=n(97),s=r(l);t.default=function(e){return i.default.createElement(c.default,o({},e,s.default))},e.exports=t.default},123:function(e,t,n){e.exports=n.p+"static/qrcode.27105558.svg"},234:function(e,t,n){e.exports={default:n(242),__esModule:!0}},77:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],o=function(){return n}.apply(t,r),!(void 0!==o&&(e.exports=o)))}()},242:function(e,t,n){n(268),e.exports=n(17).Object.keys},259:function(e,t,n){var r=n(26),o=n(17),a=n(33);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},268:function(e,t,n){var r=n(88),o=n(48);n(259)("keys",function(){return function(e){return o(r(e))}})},302:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=i.call(e),t=i.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),a=f.length-1;a>=0;a--)if(f[a]!=d[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!l(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(304),c=n(303),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},303:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},304:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},311:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},153:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a(g+e)}function a(e){return e.replace(/^\/\//g,"/")}function i(e,t){var n=(0,O.createLocation)(e,null,null,t.location);return n.pathname=o(n.pathname),n}t.__esModule=!0,t.navigateTo=void 0;var u=n(14),c=r(u),l=n(234),s=r(l),f=n(31),d=r(f),p=n(12),T=r(p),E=n(16),h=r(E),y=n(15),m=r(y);t.withPrefix=o;var v=n(1),_=r(v),b=n(75),A=n(5),S=r(A),O=n(157),g="/",M={activeClassName:S.default.string,activeStyle:S.default.object,exact:S.default.bool,strict:S.default.bool,isActive:S.default.func,location:S.default.object},w=function(e,t){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},P=function(e){function t(n,r){(0,T.default)(this,t);var o=(0,h.default)(this,e.call(this)),a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var u=r.router.history,c=i(n.to,u);return o.state={path:(0,O.createPath)(c),to:c,IOSupported:a},o.handleRef=o.handleRef.bind(o),o}return(0,m.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=i(e.to,history);this.setState({path:(0,O.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.path)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&w(e,function(){___loader.enqueue(t.state.path)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,d.default)(t,["onClick"]),o=void 0;return o=(0,s.default)(M).some(function(t){return e.props[t]})?b.NavLink:b.Link,_.default.createElement(o,(0,c.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.path;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),a=document.getElementById(o);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.path)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},t}(_.default.Component);P.propTypes=(0,c.default)({},M,{innerRef:S.default.func,onClick:S.default.func,to:S.default.oneOfType([S.default.string,S.default.object]).isRequired}),P.contextTypes={router:S.default.object},t.default=P;t.navigateTo=function(e){window.___navigateTo(e)}},158:function(e,t,n){var r=n(159),o=r.Symbol;e.exports=o},350:function(e,t,n){function r(e){return null==e?void 0===e?c:u:l&&l in Object(e)?a(e):i(e)}var o=n(158),a=n(352),i=n(353),u="[object Null]",c="[object Undefined]",l=o?o.toStringTag:void 0;e.exports=r},351:function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},352:function(e,t,n){function r(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=u.call(e);return r&&(t?e[c]=n:delete e[c]),o}var o=n(158),a=Object.prototype,i=a.hasOwnProperty,u=a.toString,c=o?o.toStringTag:void 0;e.exports=r},353:function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},159:function(e,t,n){var r=n(351),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},354:function(e,t,n){function r(e,t,n){function r(t){var n=m,r=v;return m=v=void 0,O=t,b=e.apply(r,n)}function s(e){return O=e,A=setTimeout(p,t),g?r(e):b}function f(e){var n=e-S,r=e-O,o=t-n;return M?l(o,_-r):o}function d(e){var n=e-S,r=e-O;return void 0===S||n>=t||n<0||M&&r>=_}function p(){var e=a();return d(e)?T(e):void(A=setTimeout(p,f(e)))}function T(e){return A=void 0,w&&m?r(e):(m=v=void 0,b)}function E(){void 0!==A&&clearTimeout(A),O=0,m=S=v=A=void 0}function h(){return void 0===A?b:T(a())}function y(){var e=a(),n=d(e);if(m=arguments,v=this,S=e,n){if(void 0===A)return s(S);if(M)return A=setTimeout(p,t),r(S)}return void 0===A&&(A=setTimeout(p,t)),b}var m,v,_,b,A,S,O=0,g=!1,M=!1,w=!0;if("function"!=typeof e)throw new TypeError(u);return t=i(t)||0,o(n)&&(g=!!n.leading,M="maxWait"in n,_=M?c(i(n.maxWait)||0,t):_,w="trailing"in n?!!n.trailing:w),y.cancel=E,y.flush=h,y}var o=n(98),a=n(357),i=n(359),u="Expected a function",c=Math.max,l=Math.min;e.exports=r},98:function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},355:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},356:function(e,t,n){function r(e){return"symbol"==typeof e||a(e)&&o(e)==i}var o=n(350),a=n(355),i="[object Symbol]";e.exports=r},357:function(e,t,n){var r=n(159),o=function(){return r.Date.now()};e.exports=o},358:function(e,t,n){function r(e,t,n){var r=!0,u=!0;if("function"!=typeof e)throw new TypeError(i);return a(n)&&(r="leading"in n?!!n.leading:r,u="trailing"in n?!!n.trailing:u),o(e,t,{leading:r,maxWait:t,trailing:u})}var o=n(354),a=n(98),i="Expected a function";e.exports=r},359:function(e,t,n){function r(e){if("number"==typeof e)return e;if(a(e))return i;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=l.test(e);return n||s.test(e)?f(e.slice(2),n?2:8):c.test(e)?i:+e}var o=n(98),a=n(356),i=NaN,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;e.exports=r},437:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(5),p=r(d),T=n(456),E=r(T),h=n(302),y=r(h),m=n(438),v=n(186),_=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case v.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=i,t.titleAttributes=c({},a),t));case v.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case v.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),c=(0,m.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case v.TAG_NAMES.LINK:case v.TAG_NAMES.META:case v.TAG_NAMES.NOSCRIPT:case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,m.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},A=(0,E.default)(m.reducePropsToState,m.handleClientStateChange,m.mapStateOnServer)(b),S=_(A);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},186:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},438:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),c=n(6),l=r(c),s=n(186),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=y(e,s.TAG_NAMES.TITLE),n=y(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return y(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},h=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:y(e,s.HELMET_PROPS.DEFER),encode:y(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:h(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:h(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:h(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},v=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){v(t)},0)}}(),_=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||v:e.requestAnimationFrame||v,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:e.cancelAnimationFrame||_,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,g=function(e){O&&A(O),e.defer?O=b(function(){M(e,function(){O=null})}):(M(e),O=null)},M=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;R(s.TAG_NAMES.BODY,r),R(s.TAG_NAMES.HTML,o),P(d,p);var T={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,a),metaTags:C(s.TAG_NAMES.META,i),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,u),scriptTags:C(s.TAG_NAMES.SCRIPT,l),styleTags:C(s.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=T[e].oldTags)}),t&&t(),c(e,E,h)},w=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=w(e)),R(s.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var f=a.indexOf(c);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=N(n),a=w(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=j(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},k=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:k(s.TAG_NAMES.BASE,t,r),bodyAttributes:k(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(s.ATTRIBUTE_NAMES.HTML,o,r),link:k(s.TAG_NAMES.LINK,a,r),meta:k(s.TAG_NAMES.META,i,r),noscript:k(s.TAG_NAMES.NOSCRIPT,u,r),script:k(s.TAG_NAMES.SCRIPT,c,r),style:k(s.TAG_NAMES.STYLE,l,r),title:k(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=x,t.handleClientStateChange=g,t.mapStateOnServer=U,t.reducePropsToState=m,t.requestAnimationFrame=b,t.warn=S}).call(t,function(){return this}())},456:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),c=r(u),l=n(311),s=r(l),f=n(475),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function f(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return c.default.createElement(l,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=s.default.canUseDOM,E}}},469:function(e,t){"use strict";t.__esModule=!0;var n=function(e){if("string"==typeof e)return e;if(e)return e.displayName||e.name||"Component"};t.default=n},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(472),a=r(o),i=n(471),u=r(i),c=n(196),l=(r(c),n(197)),s=(r(l),function(e){var t=(0,a.default)(function(e,t){return!(0,u.default)(e,t)});return t(e)});t.default=s},196:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(470),a=r(o),i=function(e){return(0,a.default)("displayName",e)};t.default=i},470:function(e,t){"use strict";t.__esModule=!0;var n=function(e,t){return function(n){return n[e]=t,n}};t.default=n},471:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(67),a=r(o);t.default=a.default},472:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=n(196),l=(r(c),n(197)),s=(r(l),function(e){return function(t){var n=(0,u.createFactory)(t),r=function(t){function r(){return o(this,r),a(this,t.apply(this,arguments))}return i(r,t),r.prototype.shouldComponentUpdate=function(t){return e(this.props,t)},r.prototype.render=function(){return n(this.props)},r}(u.Component);return r}});t.default=s},197:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(469),a=r(o),i=function(e,t){return t+"("+(0,a.default)(e)+")"};t.default=i},475:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var s=e[l],f=t[l];if(o=n?n.call(r,s,f,l):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},206:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(123),u=r(i),c=function(e){return a.default.createElement("footer",{id:"footer"},a.default.createElement("div",{className:"container"},a.default.createElement("div",{className:"row"},a.default.createElement("div",{id:"footer__store",className:"col-xs-12 col-sm-6"},a.default.createElement("p",{className:"ls-2 mb-5"},"APP Download"),a.default.createElement("a",{href:"#",className:"storeLink appStore mr-20"}),a.default.createElement("a",{href:"#",className:"storeLink googlePlay"})),a.default.createElement("div",{id:"footer__qrCode",className:"col-xs-12 col-sm-6 text-left"},a.default.createElement("div",{className:"pic"},a.default.createElement("img",{src:u.default,alt:""})),a.default.createElement("div",{className:"inline-block"},a.default.createElement("p",{className:"ls-2 mt-10 mb-5"},"www.lorem-example.com"),a.default.createElement("p",{className:"ls-2"},"Phasellus 0100-010-010"))),a.default.createElement("div",{className:"col-xs-12 mt-20"},a.default.createElement("p",{className:"ls-2 small"},"© Design by Vica Ho")))))};t.default=c,e.exports=t.default},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=void 0;var o=n(206),a=r(o);t.default=a.default,e.exports=t.default},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(195),u=r(i),c=n(40),l=r(c),s=n(153),f=r(s),d=n(77),p=r(d),T=n(127),E=(0,u.default)(function(e){var t=e.activePage,n=e.bgDeep,r=e.onHandleChange,o=e.isOpen;return a.default.createElement("header",{id:"header",className:(0,p.default)("mainHeader",{"bg-deep-grey":n,isOpen:o})},a.default.createElement("div",{className:"container h100"},a.default.createElement("div",{className:"row"},a.default.createElement(l.default,{key:"queueAnim_header2",type:"left",className:"h100 col-xs-12"},a.default.createElement("nav",{className:"left",id:"mobile_menu",key:"1"},a.default.createElement("a",{href:"#menu",onClick:r("menuVisible",!0)},a.default.createElement("span",null,"Menu"))),a.default.createElement(f.default,{to:"/"+T.index,className:"newLogo fw-900",key:"2"},"Lorem Ipsum"),a.default.createElement("div",{id:"top_menu_list",key:"3"},a.default.createElement("ul",null,Object.keys(T).length?Object.keys(T).map(function(e){return"index"!==e?a.default.createElement("li",{key:"headerList"+e,className:(0,p.default)({active:t==="/"+T[e]})},a.default.createElement(f.default,{to:"/"+T[e],className:"p ls-2"},e)):a.default.createElement("noscript",{key:"headerList"+e})}):null))))))});t.default=E,e.exports=t.default},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=void 0;var o=n(208),a=r(o);t.default=a.default,e.exports=t.default},210:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(195),u=r(i),c=n(126),l=n(77),s=r(l),f=n(153),d=r(f),p=n(127),T=(0,u.default)(function(e){var t=e.visible,n=e.activePage,r=e.onHandleChange;return a.default.createElement("nav",{id:"menu",className:(0,s.default)({visible:t})},a.default.createElement(c.Overlay,{visible:t},a.default.createElement("div",{onClick:r("menuVisible",!1),className:"overlayContent"})),a.default.createElement("ul",{className:"links"},Object.keys(p).length?Object.keys(p).map(function(e){return a.default.createElement("li",{key:"pageList_"+e,className:(0,s.default)({active:n==="/"+p[e]}),onClick:function(e){r("menuVisible",!1)(e)}},a.default.createElement(d.default,{to:"/"+p[e]},e))}):null))});t.default=T,e.exports=t.default},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=void 0;var o=n(210),a=r(o);t.default=a.default,e.exports=t.default},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=(r(u),n(41)),l=r(c),s=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},f=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},d=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.componentDidMount=function(){this.overlay=document.createElement("div"),s(this.overlay,"overlay"),document.body.appendChild(this.overlay),this._renderLayer()},t.prototype.componentDidUpdate=function(e,t){this._renderLayer()},t.prototype.componentWillReceiveProps=function(e){e.visible?s(this.overlay,"visible"):f(this.overlay,"visible")},t.prototype.componentWillUnmount=function(){l.default.unmountComponentAtNode(this.overlay),document.body.removeChild(this.overlay)},t.prototype._renderLayer=function(){l.default.render(this.props.children,this.overlay)},t.prototype.render=function(){return null},t}(u.Component);t.default=d,e.exports=t.default},213:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=void 0;var o=n(212),a=r(o);t.default=a.default,e.exports=t.default},214:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=(r(u),function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){var e=this.props.children;return null===e||e===!1?null:e},t}(u.Component));t.default=c,e.exports=t.default},215:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=void 0;var o=n(214),a=r(o);t.default=a.default,e.exports=t.default},126:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Footer=t.Nav=t.Overlay=t.Static=t.Header=void 0;var o=n(209),a=r(o),i=n(207),u=r(i),c=n(213),l=r(c),s=n(211),f=r(s),d=n(215),p=r(d);t.Header=a.default,t.Static=p.default,t.Overlay=l.default,t.Nav=f.default,t.Footer=u.default},224:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=r(u),l=n(5),s=r(l),f=n(126),d=n(437),p=r(d),T=n(40),E=r(T),h=n(358),y=r(h),m=n(77),v=r(m);n(361);var _={"/":"Page index","/service":"Page service","/contact":"Page contact","/about":"Page about"},b=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.onHandleChange=function(e,t){return function(n){var o;n&&n.preventDefault(),r.setState((o={},o[e]=t,o))}},r.handleScroll=function(e){var t=e.target.defaultView,n=t.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;!!(n<100)!==r.preSetBg&&(r.preSetBg=!!(n<100),r.setState({bgDeep:!!(n<100)}))},r.state={menuVisible:!1,bgDeep:!0},r}return i(t,e),t.prototype.componentDidMount=function(){this.throttle=(0,y.default)(this.handleScroll,150),window.addEventListener("scroll",this.throttle)},t.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.throttle)},t.prototype.componentWillReceiveProps=function(e){this.props.location.pathname!==e.location.pathname&&this.scrollToTop()},t.prototype.scrollToTop=function(){setTimeout(function(){window.scroll(0,0)},0)},t.prototype.render=function(){return c.default.createElement("div",{id:"root"},c.default.createElement(p.default,{htmlAttributes:{lang:"zh-hants"},title:_[this.props.location.pathname],meta:[{name:"description",content:"react gatsby sample"},{name:"keywords",content:"sample, website"}]}),c.default.createElement(f.Nav,{visible:this.state.menuVisible,activePage:this.props.location.pathname,onHandleChange:this.onHandleChange}),c.default.createElement(f.Header,{activePage:this.props.location.pathname,bgDeep:this.state.bgDeep,isOpen:this.state.menuVisible,onHandleChange:this.onHandleChange}),c.default.createElement("div",{id:"mainContent",className:(0,v.default)({menuOpen:this.state.menuVisible})},c.default.createElement(E.default,{key:"queueAnim",type:"left",duration:300,interval:300},this.props.children(),c.default.createElement(f.Footer,{key:"3"}))))},t}(u.Component);b.propTypes={children:s.default.func},t.default=b,e.exports=t.default},127:function(e,t){"use strict";e.exports={index:"",service:"service/",about:"about/",contact:"contact/"}},361:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-f849d0ce9910e8bdc4fc.js.map