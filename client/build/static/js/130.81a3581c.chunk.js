(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[130,179],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(11),a=n(12),o=n(14),c=n(13),i=n(0),l=n.n(i),s=n(705),u=n(890),f=n(393),p=(n(188),function(e){Object(o.a)(i,e);var t=Object(c.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={name:localStorage.getItem("first_name"),story:localStorage.getItem("relation_info"),birth_date:localStorage.getItem("start_date"),d_date:localStorage.getItem("end_date")},e.onNameChange=function(t){e.setState({name:t})},e.onStoryChange=function(t){e.setState({story:t})},e}return Object(a.a)(i,[{key:"setImage",value:function(){var e=localStorage.getItem("template_no");console.log(e);var t="";switch(e){case"1":t=n(198);break;default:t="/img/diamond.jpg"}return t}},{key:"render",value:function(){var e={borderRadius:"10px",margin:"10px",width:"100px"};return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("div",{className:"create-text",style:{textAlign:"center"}},"See below for a sneak peak of what your Digital Memory will look like. You can modify as you wish after you publish and receieve a custom URL"),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(s.a,null,l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement(u.a.Paragraph,{style:{fontSize:"2em",textAlign:"center"},editable:{onChange:this.onNameChange}},"In Loving Memory of ",this.state.name),l.a.createElement(u.a.Paragraph,{style:{fontSize:"1em",textAlign:"center"},editable:{onChange:this.onStoryChange}},this.state.story)),l.a.createElement("div",{style:{paddingLeft:"2em",width:"500px",height:"300px",display:"flex",justifyContent:"center"}},l.a.createElement("img",{id:"template-select",src:this.setImage(),style:{maxWidth:"100%",maxHeight:"100%"}}))))),l.a.createElement("br",null),l.a.createElement("div",{style:{fontWeight:"bold",textAlign:"center",fontSize:"1.5em"}},this.state.name,"'s Registry in Memory of ",this.state.name,l.a.createElement("div",{style:{height:"300px"}},"Coming Soon")),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(f.a,{type:"primary",onClick:this.props.prev,style:e},"Previous"),l.a.createElement(f.a,{type:"primary",onClick:this.props.next,style:e},"Continue")))}}]),i}(l.a.Component))},198:function(e,t,n){e.exports=n.p+"static/media/TemplateTwoSample.e83cf825.PNG"},381:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({});t.a=a},408:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(0),a=n(305),o=n.n(a),c=n(381),i=n(662);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function g(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(h,e);var t,n,a,d=m(h);function h(){var e;return f(this,h),(e=d.apply(this,arguments)).renderCol=function(t){var n,a=t.getPrefixCls,i=t.direction,f=b(e).props,p=f.prefixCls,y=f.span,m=f.order,d=f.offset,h=f.push,O=f.pull,x=f.className,E=f.children,j=f.flex,w=f.style,P=v(f,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),C=a("col",p),S={};["xs","sm","md","lg","xl","xxl"].forEach((function(e){var t,n={},r=f[e];"number"===typeof r?n.span=r:"object"===u(r)&&(n=r||{}),delete P[e],S=s(s({},S),(l(t={},"".concat(C,"-").concat(e,"-").concat(n.span),void 0!==n.span),l(t,"".concat(C,"-").concat(e,"-order-").concat(n.order),n.order||0===n.order),l(t,"".concat(C,"-").concat(e,"-offset-").concat(n.offset),n.offset||0===n.offset),l(t,"".concat(C,"-").concat(e,"-push-").concat(n.push),n.push||0===n.push),l(t,"".concat(C,"-").concat(e,"-pull-").concat(n.pull),n.pull||0===n.pull),l(t,"".concat(C,"-rtl"),"rtl"===i),t))}));var N=o()(C,(l(n={},"".concat(C,"-").concat(y),void 0!==y),l(n,"".concat(C,"-order-").concat(m),m),l(n,"".concat(C,"-offset-").concat(d),d),l(n,"".concat(C,"-push-").concat(h),h),l(n,"".concat(C,"-pull-").concat(O),O),n),x,S);return r.createElement(c.a.Consumer,null,(function(e){var t=e.gutter,n=s({},w);return t&&(n=s(s(s({},t[0]>0?{paddingLeft:t[0]/2,paddingRight:t[0]/2}:{}),t[1]>0?{paddingTop:t[1]/2,paddingBottom:t[1]/2}:{}),n)),j&&(n.flex=g(j)),r.createElement("div",s({},P,{style:n,className:N}),E)}))},e}return t=h,(n=[{key:"render",value:function(){return r.createElement(i.a,null,this.renderCol)}}])&&p(t.prototype,n),a&&p(t,a),h}(r.Component)},440:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(0),a=n(305),o=n.n(a),c=n(662),i=n(381),l=n(340);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=["xxl","xl","lg","md","sm","xs"],f={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},p=[],y=-1,m={},d={matchHandlers:{},dispatch:function(e){return m=e,p.forEach((function(e){e.func(m)})),p.length>=1},subscribe:function(e){0===p.length&&this.register();var t=(++y).toString();return p.push({token:t,func:e}),e(m),t},unsubscribe:function(e){0===(p=p.filter((function(t){return t.token!==e}))).length&&this.unregister()},unregister:function(){var e=this;Object.keys(f).forEach((function(t){var n=f[t],r=e.matchHandlers[n];r&&r.mql&&r.listener&&r.mql.removeListener(r.listener)}))},register:function(){var e=this;Object.keys(f).forEach((function(t){var n=f[t],r=function(n){var r,a,o,c=n.matches;e.dispatch(s(s({},m),(o=c,(a=t)in(r={})?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r)))},a=window.matchMedia(n);a.addListener(r),e.matchHandlers[n]={mql:a,listener:r},r(a)}))}};function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},C=(Object(l.a)("top","middle","bottom","stretch"),Object(l.a)("start","end","center","space-around","space-between"),function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(s,e);var t,n,a,l=E(s);function s(){var e;return g(this,s),(e=l.apply(this,arguments)).state={screens:{xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}},e.renderRow=function(t){var n,a=t.getPrefixCls,c=t.direction,l=e.props,s=l.prefixCls,u=l.justify,f=l.align,p=l.className,y=l.style,m=l.children,d=P(l,["prefixCls","justify","align","className","style","children"]),b=a("row",s),g=e.getGutter(),O=o()(b,(v(n={},"".concat(b,"-").concat(u),u),v(n,"".concat(b,"-").concat(f),f),v(n,"".concat(b,"-rtl"),"rtl"===c),n),p),x=h(h(h({},g[0]>0?{marginLeft:g[0]/-2,marginRight:g[0]/-2}:{}),g[1]>0?{marginTop:g[1]/-2,marginBottom:g[1]/2}:{}),y),E=h({},d);return delete E.gutter,r.createElement(i.a.Provider,{value:{gutter:g}},r.createElement("div",h({},E,{className:O,style:x}),m))},e}return t=s,(n=[{key:"componentDidMount",value:function(){var e=this;this.token=d.subscribe((function(t){var n=e.props.gutter;(!Array.isArray(n)&&"object"===b(n)||Array.isArray(n)&&("object"===b(n[0])||"object"===b(n[1])))&&e.setState({screens:t})}))}},{key:"componentWillUnmount",value:function(){d.unsubscribe(this.token)}},{key:"getGutter",value:function(){var e=[0,0],t=this.props.gutter,n=this.state.screens;return(Array.isArray(t)?t:[t,0]).forEach((function(t,r){if("object"===b(t))for(var a=0;a<u.length;a++){var o=u[a];if(n[o]&&void 0!==t[o]){e[r]=t[o];break}}else e[r]=t||0})),e}},{key:"render",value:function(){return r.createElement(c.a,null,this.renderRow)}}])&&O(t.prototype,n),a&&O(t,a),s}(r.Component));C.defaultProps={gutter:0}},588:function(e,t,n){"use strict";var r=n(440);t.a=r.a},589:function(e,t,n){"use strict";var r=n(408);t.a=r.a},705:function(e,t,n){"use strict";var r=n(0),a=n(305),o=n.n(a),c=n(320),i=n(662);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=function(e){return r.createElement(i.a,null,(function(t){var n,a,c,i=t.getPrefixCls,u=e.prefixCls,f=e.className,p=e.hoverable,y=void 0===p||p,m=s(e,["prefixCls","className","hoverable"]),d=i("card",u),b=o()("".concat(d,"-grid"),f,(n={},a="".concat(d,"-grid-hoverable"),c=y,a in n?Object.defineProperty(n,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[a]=c,n));return r.createElement("div",l({},m,{className:b}))}))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=function(e){return r.createElement(i.a,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,c=e.className,i=e.avatar,l=e.title,s=e.description,u=p(e,["prefixCls","className","avatar","title","description"]),y=n("card",a),m=o()("".concat(y,"-meta"),c),d=i?r.createElement("div",{className:"".concat(y,"-meta-avatar")},i):null,b=l?r.createElement("div",{className:"".concat(y,"-meta-title")},l):null,h=s?r.createElement("div",{className:"".concat(y,"-meta-description")},s):null,v=b||h?r.createElement("div",{className:"".concat(y,"-meta-detail")},b,h):null;return r.createElement("div",f({},u,{className:m}),d,v)}))},m=n(647),d=n(588),b=n(589),h=n(335);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var x=function(e){var t,n,a,l=r.useContext(i.b),s=l.getPrefixCls,f=l.direction,p=r.useContext(h.b),y=e.prefixCls,x=e.className,E=e.extra,j=e.headStyle,w=void 0===j?{}:j,P=e.bodyStyle,C=void 0===P?{}:P,S=e.title,N=e.loading,k=e.bordered,_=void 0===k||k,R=e.size,T=e.type,A=e.cover,I=e.actions,L=e.tabList,D=e.children,z=e.activeTabKey,K=e.defaultActiveTabKey,M=e.tabBarExtraContent,B=e.hoverable,G=e.tabProps,H=void 0===G?{}:G,q=O(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),W=s("card",y),J=0===C.padding||"0px"===C.padding?{padding:24}:void 0,U=r.createElement("div",{className:"".concat(W,"-loading-block")}),Y=r.createElement("div",{className:"".concat(W,"-loading-content"),style:J},r.createElement(d.a,{gutter:8},r.createElement(b.a,{span:22},U)),r.createElement(d.a,{gutter:8},r.createElement(b.a,{span:8},U),r.createElement(b.a,{span:15},U)),r.createElement(d.a,{gutter:8},r.createElement(b.a,{span:6},U),r.createElement(b.a,{span:18},U)),r.createElement(d.a,{gutter:8},r.createElement(b.a,{span:13},U),r.createElement(b.a,{span:9},U)),r.createElement(d.a,{gutter:8},r.createElement(b.a,{span:4},U),r.createElement(b.a,{span:3},U),r.createElement(b.a,{span:16},U))),$=void 0!==z,F=g(g({},H),(v(t={},$?"activeKey":"defaultActiveKey",$?z:K),v(t,"tabBarExtraContent",M),t)),Q=L&&L.length?r.createElement(m.a,g({size:"large"},F,{className:"".concat(W,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),L.map((function(e){return r.createElement(m.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(S||E||Q)&&(a=r.createElement("div",{className:"".concat(W,"-head"),style:w},r.createElement("div",{className:"".concat(W,"-head-wrapper")},S&&r.createElement("div",{className:"".concat(W,"-head-title")},S),E&&r.createElement("div",{className:"".concat(W,"-extra")},E)),Q));var V=A?r.createElement("div",{className:"".concat(W,"-cover")},A):null,X=r.createElement("div",{className:"".concat(W,"-body"),style:C},N?Y:D),Z=I&&I.length?r.createElement("ul",{className:"".concat(W,"-actions")},function(e){return e.map((function(t,n){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},r.createElement("span",null,t))}))}(I)):null,ee=Object(c.a)(q,["onTabChange"]),te=R||p,ne=o()(W,x,(v(n={},"".concat(W,"-loading"),N),v(n,"".concat(W,"-bordered"),_),v(n,"".concat(W,"-hoverable"),B),v(n,"".concat(W,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===u&&(t=!0)})),t}()),v(n,"".concat(W,"-contain-tabs"),L&&L.length),v(n,"".concat(W,"-").concat(te),te),v(n,"".concat(W,"-type-").concat(T),!!T),v(n,"".concat(W,"-rtl"),"rtl"===f),n));return r.createElement("div",g({},ee,{className:ne}),a,V,X,Z)};x.Grid=u,x.Meta=y;t.a=x}}]);
//# sourceMappingURL=130.81a3581c.chunk.js.map