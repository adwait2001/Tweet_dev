(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),o=(n(14),n(7)),i=n.n(o),s=(n(15),n(2)),u=n(1);function m(e,t,n,a){var c;a&&(c=JSON.stringify(a));var r=new XMLHttpRequest,l="http://localhost:8000/api".concat(t);r.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,l),r.setRequestHeader("Content-Type","application/json"),o&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",o)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(r.response,r.status)},r.onerror=function(e){n({message:"The request was an error"},400)},r.send(c)}function d(e,t,n){var a="/tweet/";e&&(a="/tweet/?username=".concat(e)),n&&(a=n.replace("http://localhost:8000/api","")),m("GET",a,t)}function f(e,t){var n="/tweet/feed";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),m("GET",n,e)}var w=n(8);function b(e){var t=e.tweet,n=e.action,a=e.didperformAction,r=e.className?e.className:"btn btn-primary btn-sm",l=t.likes?t.likes:0,o=n.display?n.display:"Action",i=function(e,t){console.log(e,t),200!=t&&201!=t||!a||a(e,t)},s="like"===n.type?"".concat(l," ").concat(o):o;return c.a.createElement("button",{className:r,onClick:function(e){e.preventDefault(),function(e,t,n){m("POST","/tweet/action/",n,{id:e,action:t})}(t.id,n.type,i)}},s)}function p(e){var t=e.username;return c.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)}},e.children)}function v(e){var t=e.user,n=e.includeFullname,a=e.hideLink,r=!0===n?"".concat(t.first_name," ").concat(t.last_name," "):null;return c.a.createElement(c.a.Fragment,null,r,!0===a?"@".concat(t.username):c.a.createElement(p,{username:t.username},"@",t.username))}function E(e){var t=e.user,n=e.hideLink,a=c.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]);return!0===n?a:c.a.createElement(p,{username:t.username},a)}function h(e){var t=e.user,n=e.didFollowToggle,a=e.profileLoading,r=t&&t.is_following?"Unfollow":"Follow";r=a?"Loading...":r;return t?c.a.createElement("div",null,c.a.createElement(E,{user:t,hideLink:!0}),c.a.createElement("p",null,c.a.createElement(v,{user:t,includeFullName:!0,hideLink:!0})),c.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!a&&n(r)}},r)):null}function O(e){var t=e.username,n=Object(a.useState)(!1),r=Object(u.a)(n,2),l=r[0],o=r[1],i=Object(a.useState)(null),s=Object(u.a)(i,2),d=s[0],f=s[1],w=Object(a.useState)(!1),b=Object(u.a)(w,2),p=b[0],v=b[1],E=function(e,t){200===t&&f(e)};Object(a.useEffect)((function(){!1===l&&(!function(e,t){m("GET","/profiles/".concat(e,"/"),t)}(t,E),o(!0))}),[t,l,o]);return!1===l?"Loading...":d?c.a.createElement(h,{user:d,didFollowToggle:function(e){!function(e,t,n){var a={action:"".concat(t&&t).toLowerCase()};m("POST","/profiles/".concat(e,"/follow"),n,a)}(t,e,(function(e,t){200===t&&(console.log(e),f(e)),v(!1)})),v(!0)},profileLoading:p}):null}function g(e){var t=e.tweet;return t.parent?c.a.createElement(j,{isRetweet:!0,retweeter:e.retweeter,HideActions:!0,className:" ",tweet:t.parent}):null}function j(e){var t=e.tweet,n=e.didRetweet,r=e.HideActions,l=e.isRetweet,o=e.retweeter,i=Object(a.useState)(e.tweet?e.tweet:null),s=Object(u.a)(i,2),m=s[0],d=s[1],f=e.className?e.className:"col-10 col-md-6";f=!0===l?"".concat(f," p-2 border rounded"):f;var p=window.location.pathname.match(Object(w.a)(/([0-9]+)/,{tweetid:1})),h=p?p.groups.tweetid:-1,O="".concat(t.id)==="".concat(h),j=function(e,t){200==t?d(e):201==t&&n&&n(e)};return c.a.createElement("div",{className:f},!0===l&&c.a.createElement("div",{className:"mb-2"},c.a.createElement("span",{className:"small text-muted"},"Retweet via ",c.a.createElement(v,{user:o}))),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:""},c.a.createElement(E,{user:t.user})),c.a.createElement("div",{className:"col-11"},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement(v,{includeFullname:!0,user:t.user})),c.a.createElement("p",null,t.content),c.a.createElement(g,{tweet:t,retweeter:t.user})),c.a.createElement("div",{className:"btn btn-group px-0"},m&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{tweet:m,didperformAction:j,action:{type:"like",display:"Likes"}}),c.a.createElement(b,{tweet:m,didperformAction:j,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(b,{tweet:m,didperformAction:j,action:{type:"retweet",display:"Retweet"}})),!0===O?null:c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))))}function N(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)([]),i=Object(u.a)(o,2),m=i[0],f=i[1],w=Object(a.useState)(null),b=Object(u.a)(w,2),p=b[0],v=b[1],E=Object(a.useState)(!1),h=Object(u.a)(E,2),O=h[0],g=h[1];Object(a.useEffect)((function(){var t=Object(s.a)(e.newTweets).concat(r);t.length!==m.length&&f(t)}),[e.newTweets,m,r]),Object(a.useEffect)((function(){if(!1===O){console.log(e.username),d(e.username,(function(e,t){200===t?(v(e.next),l(e.results),g(!0)):alert("There was an error")}))}}),[r,O,g,e.username]);var N=function(e){var t=Object(s.a)(r);t.unshift(e),l(t);var n=Object(s.a)(m);n.unshift(m),f(n)};return c.a.createElement(c.a.Fragment,null," ",m.map((function(e,t){return c.a.createElement(j,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==p&&c.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!=p){d(e.username,(function(e,t){if(200==t){v(e.next);var n=Object(s.a)(m).concat(e.results);l(n),f(n)}else alert("There was an error")}),p)}},className:"btn btn-outline-primary"},"Load Next"))}function y(e){var t=c.a.createRef(),n=e.didTweet,a=function(e,t){201==t?n(e):(console.log(e),alert("An error occured please try again"))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;m("POST","/tweet/create/",a,{content:n}),t.current.value=" "}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary mb-3 mt-3"}," Tweet ")))}function k(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)([]),i=Object(u.a)(o,2),m=i[0],d=i[1],w=Object(a.useState)(null),b=Object(u.a)(w,2),p=b[0],v=b[1],E=Object(a.useState)(!1),h=Object(u.a)(E,2),O=h[0],g=h[1];Object(a.useEffect)((function(){var t=Object(s.a)(e.newTweets).concat(r);t.length!==m.length&&d(t)}),[e.newTweets,m,r]),Object(a.useEffect)((function(){if(!1===O){f((function(e,t){200===t?(v(e.next),l(e.results),g(!0)):alert("There was an error")}))}}),[r,O,g,e.username]);var N=function(e){var t=Object(s.a)(r);t.unshift(e),l(t);var n=Object(s.a)(m);n.unshift(m),d(n)};return c.a.createElement(c.a.Fragment,null," ",m.map((function(e,t){return c.a.createElement(j,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==p&&c.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!=p){f((function(e,t){if(200==t){v(e.next);var n=Object(s.a)(m).concat(e.results);l(n),d(n)}else alert("There was an error")}),p)}},className:"btn btn-outline-primary"},"Load Next"))}function T(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},o&&c.a.createElement(y,{didTweet:function(e){var t=Object(s.a)(r);t.unshift(e),l(t)},className:"col-12 mb-3"}),c.a.createElement(N,Object.assign({newTweets:r},e)))}function S(e){var t=e.tweetId;console.log(e);var n=Object(a.useState)(!1),r=Object(u.a)(n,2),l=r[0],o=r[1],i=Object(a.useState)(null),s=Object(u.a)(i,2),d=s[0],f=s[1],w=function(e,t){200==t?f(e):alert("There was an error finding your tweet")};return Object(a.useEffect)((function(){var e;!1===l&&(e=w,m("GET","/tweet/".concat(t,"/"),e),o(!0))}),[t,l,o]),null===d?null:c.a.createElement(j,{tweet:d,className:e.className})}var x=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),c.a.createElement("div",null,c.a.createElement(T,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=document.getElementById("root");R&&l.a.render(c.a.createElement(x,null),R);var L=c.a.createElement,A=document.getElementById("tweetme-2");A&&l.a.render(L(T,A.dataset),A);var q=document.getElementById("tweetme-2-feed");q&&l.a.render(L((function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},o&&c.a.createElement(y,{didTweet:function(e){var t=Object(s.a)(r);t.unshift(e),l(t)},className:"col-12 mb-3"}),c.a.createElement(k,Object.assign({newTweets:r},e)))}),q.dataset),q),document.querySelectorAll(".tweetme-2-profile-badge").forEach((function(e){l.a.render(L(O,e.dataset),e)})),document.querySelectorAll(".tweetme-detail").forEach((function(e){l.a.render(L(S,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.13d2fb32.chunk.js.map