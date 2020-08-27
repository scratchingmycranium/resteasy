/*! For license information please see 74.f99db764.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[74,161],{191:function(e,t,a){},305:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},306:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},307:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(4),a(336);var n=a(0),r=a.n(n),i=r.a.createContext({});i.Consumer,i.Provider;function o(e,t){var a=Object(n.useContext)(i);return e||a[t]||t}},336:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,i=a.defaultProps,o=a.allowFallback,s=void 0!==o&&o,l=a.displayName,c=void 0===l?e.name||e.displayName:l,u=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!s?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:n,defaultProps:i})};var n,r=(n=a(0))&&n.__esModule?n:{default:n}},356:function(e,t,a){"use strict";var n=a(4),r=a(306),i=a(305),o=a.n(i),s=a(0),l=a.n(s),c=a(307),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.as,d=void 0===s?"div":s,f=Object(r.a)(e,["bsPrefix","className","as"]),m=Object(c.a)(a,"col"),p=[],h=[];return u.forEach((function(e){var t,a,n,r=f[e];if(delete f[e],null!=r&&"object"===typeof r){var i=r.span;t=void 0===i||i,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+m+o:""+m+o+"-"+t),null!=n&&h.push("order"+o+"-"+n),null!=a&&h.push("offset"+o+"-"+a)})),p.length||p.push(m),l.a.createElement(d,Object(n.a)({},f,{ref:t,className:o.a.apply(void 0,[i].concat(p,h))}))}));d.displayName="Col",t.a=d},409:function(e,t,a){"use strict";var n=a(4),r=a(306),i=a(305),o=a.n(i),s=a(0),l=a.n(s),c=a(307),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.noGutters,d=e.as,f=void 0===d?"div":d,m=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(c.a)(a,"row"),h=p+"-cols",v=[];return u.forEach((function(e){var t,a=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&v.push(""+h+n+"-"+t)})),l.a.createElement(f,Object(n.a)({ref:t},m,{className:o.a.apply(void 0,[i,p,s&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},72:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(0),r=a.n(n),i=a(409),o=a(356),s=(a(191),a(24),{height:"100%",width:"100%",objectFit:"cover"}),l=600;function c(e){return console.log(e),"img"==e.item.type?r.a.createElement("img",{src:e.item.img,style:s}):"empty"==e.item.type?r.a.createElement("div",{className:"center",style:{height:"100%",width:"100%",backgroundColor:"green"}},"Insert photo or memory here."):r.a.createElement("div",{className:"center",style:{height:"100%",width:"100%",backgroundColor:"#E2FCD3"}},"Creator or contributor memory.")}function u(e){var t;return t=e.rownum%2?r.a.createElement(i.a,{className:"justify-content-md-center",style:{height:l}},r.a.createElement(o.a,{md:"7",style:{height:l,padding:"0px"}},r.a.createElement("div",{style:{height:"70%",padding:"10px"}},r.a.createElement(c,{item:e.rowinfo[1]})),r.a.createElement("div",{style:{height:"30%",padding:"10px"}},r.a.createElement(c,{item:e.rowinfo[2]}))),r.a.createElement(o.a,{md:"5",style:{height:l,padding:"10px"}},r.a.createElement(c,{item:e.rowinfo[0]}))):r.a.createElement(i.a,{className:"justify-content-md-center",style:{height:l}},r.a.createElement(o.a,{md:"5",style:{height:l,padding:"10px"}},r.a.createElement(c,{item:e.rowinfo[0]})),r.a.createElement(o.a,{md:"7",style:{height:l,padding:"0px"}},r.a.createElement("div",{style:{height:"70%",padding:"10px"}},r.a.createElement(c,{item:e.rowinfo[1]})),r.a.createElement("div",{style:{height:"30%",padding:"10px"}},r.a.createElement(c,{item:e.rowinfo[2]})))),r.a.createElement(i.a,{className:"justify-content-md-center"},r.a.createElement(o.a,{md:"2"}),r.a.createElement(o.a,{md:"8"},t),r.a.createElement(o.a,{md:"2"}))}}}]);
//# sourceMappingURL=74.f99db764.chunk.js.map