(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[169],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var r=a(11),n=a(12),l=a(14),i=a(13),s=a(0),c=a.n(s),o=a(648),m=a(439),p=a(393),d=(a(188),function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).saveData=function(t){localStorage.setItem("start_date",t.start_date),localStorage.setItem("end_date",t.end_date),e.props.next()},e}return Object(n.a)(a,[{key:"render",value:function(){var e={borderRadius:"12px",textAlign:"center",fontSize:"17px",border:"1px solid #578C3D",width:"235px",height:"40px",margin:"20px 10px"},t={borderRadius:"10px",margin:"10px",width:"100px"};return c.a.createElement("div",{style:{width:"100%",textAlign:"center"}},c.a.createElement("div",{className:"create-text",style:{fontSize:"1.5em",marginBottom:"0.5em"}},"Share some important dates"),c.a.createElement(o.a,{onFinish:this.saveData,scrollToFirstError:!0},c.a.createElement("div",{className:"create-text",style:{fontsize:"15px"}},"Enter dates manually"),c.a.createElement("br",null),c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement(o.a.Item,{name:"start_date"},c.a.createElement(m.a,{placeholder:"Birthday",style:e})),c.a.createElement(o.a.Item,{name:"end_date"},c.a.createElement(m.a,{placeholder:"Enter day of passing",style:e}))),c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement(p.a,{type:"primary",onClick:this.props.prev,style:t},"Previous"),c.a.createElement(o.a.Item,null,c.a.createElement(p.a,{type:"primary",htmlType:"submit",style:t},"Skip/Next")))))}}]),a}(c.a.Component))}}]);
//# sourceMappingURL=169.29604738.chunk.js.map