(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=(a(13),a(7)),s=a.n(l),i=(a(14),a(5)),m=a(3);function u(e){var t=c.a.createRef(),a=Object(n.useState)([]),r=Object(m.a)(a,2),o=r[0],l=r[1];return c.a.createElement("div",{className:e.className},c.a.createElement("div",{className:"col-12 mb-3"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value,n=Object(i.a)(o);n.unshift({content:a,likes:0,id:12313}),l(n),t.current.value=" "}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary mb-3 mt-3"}," Tweet "))),c.a.createElement(p,{newTweets:o}))}function p(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),u=s[0],p=s[1];return Object(n.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==u.length&&p(t)}),[e.newTweets,u,r]),Object(n.useEffect)((function(){!function(e){var t=new XMLHttpRequest;t.responseType="json",t.open("GET","http://127.0.0.1:8000/api/tweet/"),t.onload=function(){e(t.response,t.status)},t.onerror=function(t){console.log(t),e({message:"The request was an error"},400)},t.send()}((function(e,t){200===t?o(e):alert("There was an error")}))}),[r]),u.map((function(e,t){return c.a.createElement(f,{tweet:e,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}))}function d(e){var t=e.tweet,a=e.action,n=e.className?e.className:"btn btn-primary btn-sm",r=a.display?a.display:"Action",o=t.likes,l="like"===a.type?"".concat(o," ").concat(r):r;return c.a.createElement("button",{className:n,onClick:function(e){e.preventDefault(),"like"===a.type&&(console.log(t.likes+1),o=t.likes+1)}},l)}function f(e){var t=e.tweet,a=e.className?e.className:"col-10 mx-auto col-md-6";return c.a.createElement("div",{className:a},c.a.createElement("p",null,t.id," - ",t.content),c.a.createElement("div",{className:"btn btn-group"},c.a.createElement(d,{tweet:t,action:{type:"like",display:"Likes"}}),c.a.createElement(d,{tweet:t,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(d,{tweet:t,action:{type:"retweet",display:""}})))}var w=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement("div",null,c.a.createElement(u,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=document.getElementById("root");b&&o.a.render(c.a.createElement(w,null),b);var v=document.getElementById("tweetme-2");v&&o.a.render(c.a.createElement(u,null),v),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.47737d56.chunk.js.map