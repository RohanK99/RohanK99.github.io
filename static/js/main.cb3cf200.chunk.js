(this["webpackJsonprohan-universe"]=this["webpackJsonprohan-universe"]||[]).push([[0],{23:function(e,t,n){e.exports=n(38)},32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=(n(32),n(9)),i=n(10),s=n(12),u=n(11),m=n(13),h=n(14),f=(n(33),function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"".concat(t?"url(":"","https://awv3node-homepage.surge.sh/build/assets/").concat(e,".svg").concat(t?")":"")}),d=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={top:"30%",left:"40%"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({top:Math.floor(100*Math.random()).toString()+"%",left:Math.floor(100*Math.random()).toString()+"%"})}),2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("span",{className:"star "+this.props.colour,style:this.state})}}]),t}(a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{onScroll:this.handleScroll,ref:function(t){return e.parallax=t},pages:1,style:{background:"#21292C"}},r.a.createElement(h.a.Layer,{offset:1,speed:1}),r.a.createElement(h.a.Layer,{offset:0,speed:0,factor:3,style:{backgroundImage:f("stars",!0),backgroundSize:"cover",animation:"shine 10s infinite"}}),r.a.createElement(h.a.Layer,{offset:0,speed:0},r.a.createElement(d,{colour:"pink"}),r.a.createElement(d,{colour:"blue"}),r.a.createElement(d,{colour:"yellow"}),r.a.createElement(d,{colour:"green"}),r.a.createElement("div",{className:"vertical-center"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"text-group text-white"},r.a.createElement("h1",null,r.a.createElement("span",{style:{color:"#F4B447"}},"R"),r.a.createElement("span",{style:{color:"#F69233"}},"O"),r.a.createElement("span",{style:{color:"#F26E54"}},"H"),r.a.createElement("span",{style:{color:"#EE4C7A"}},"A"),r.a.createElement("span",{style:{color:"#A066A8"}},"N"),r.a.createElement("span",null," "),r.a.createElement("span",{style:{color:"#4E71B7"}},"K"),r.a.createElement("span",{style:{color:"#0B97AC"}},"U"),r.a.createElement("span",{style:{color:"#00B199"}},"M"),r.a.createElement("span",{style:{color:"#6CB980"}},"A"),r.a.createElement("span",{style:{color:"#8CC66A"}},"R")),r.a.createElement("hr",{className:"hr-gradient"}),r.a.createElement("h2",null,"3A uwaterloo computer engineering"),r.a.createElement("br",null),r.a.createElement("p",null,"I have an interest in embedded systems, autonomous cars, ai and quant"),r.a.createElement("p",null,"In my spare time, you can find me playing guitar or at the climbing gym"),r.a.createElement("br",null),r.a.createElement("div",{className:"social-buttons"},r.a.createElement("a",{href:"https://rohankce.gitbook.io/lexicon/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{id:"blog"},"blog")),r.a.createElement("div",{className:"divider"}),r.a.createElement("a",{href:"https://github.com/RohanK99",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{id:"github"},"Github")),r.a.createElement("div",{className:"divider"}),r.a.createElement("a",{href:"mailto:rohank.ce@gmail.com"},r.a.createElement("button",{id:"email"},"email"))))))))}}]),t}(a.Component),g=n(41),v=n(42),E=n(40),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-intro"},r.a.createElement(g.a,null,r.a.createElement(v.a,{exact:!0,path:"/",component:p}),r.a.createElement(E.a,{to:"/"})))}}]),t}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=n(39);c.a.render(r.a.createElement(k.a,null,r.a.createElement(b,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");y?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):w(e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.cb3cf200.chunk.js.map