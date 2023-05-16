(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Mt=/([:*])(\w+)/g,zt="([^/]+)",Jt=/\*/g,Wt="?(?:.*)",Vt=/\/\?/g,Gt="/?([^/]+|)",Kt="(?:/^|^)",Xt="";function ot(e){return e===void 0&&(e="/"),Ce()?location.pathname+location.search+location.hash:e}function O(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function se(e){return typeof e=="string"}function Yt(e){return typeof e=="function"}function ie(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Qt(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(n,r,o){return n===null&&(n={}),n[t[o]]=decodeURIComponent(r),n},null)}function ae(e){var t=O(e).split(/\?(.*)?$/);return[O(t[0]),t.slice(1).join("")]}function Ne(e){for(var t={},n=e.split("&"),r=0;r<n.length;r++){var o=n[r].split("=");if(o[0]!==""){var i=decodeURIComponent(o[0]);t[i]?(Array.isArray(t[i])||(t[i]=[t[i]]),t[i].push(decodeURIComponent(o[1]||""))):t[i]=decodeURIComponent(o[1]||"")}}return t}function st(e,t){var n=ae(O(e.currentLocationPath)),r=n[0],o=n[1],i=o===""?null:Ne(o),s=[],c;if(se(t.path)){if(c=Kt+O(t.path).replace(Mt,function(f,h,v){return s.push(v),zt}).replace(Jt,Wt).replace(Vt,Gt)+"$",O(t.path)===""&&O(r)==="")return{url:r,queryString:o,hashString:ie(e.to),route:t,data:null,params:i}}else c=t.path;var p=new RegExp(c,Xt),a=r.match(p);if(a){var u=se(t.path)?Qt(a,s):a.groups?a.groups:a.slice(1);return{url:O(r.replace(new RegExp("^"+e.instance.root),"")),queryString:o,hashString:ie(e.to),route:t,data:u,params:i}}return!1}function it(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function J(e,t){return typeof e[t]>"u"||e[t]===!0}function Zt(e){if(!e)return{};var t=e.split(","),n={},r;return t.forEach(function(o){var i=o.split(":").map(function(s){return s.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":n.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":r||(r={}),r.strategy=i[1];break;case"resolveOptionsHash":r||(r={}),r.hash=i[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[i[0]]=i[1]==="true";break}}),r&&(n.resolveOptions=r),n}function Ce(){return typeof window<"u"}function en(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(r){n[r]&&(t[r]||(t[r]=[]),t[r].push(n[r]))})}),t}function q(e,t,n){var r=t||{},o=0;(function i(){if(!e[o]){n&&n(r);return}Array.isArray(e[o])?(e.splice.apply(e,[o,1].concat(e[o][0](r)?e[o][1]:e[o][2])),i()):e[o](r,function(s){typeof s>"u"||s===!0?(o+=1,i()):n&&n(r)})})()}q.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};function Me(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=ot(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function ye(e,t){for(var n=0;n<e.instance.routes.length;n++){var r=e.instance.routes[n],o=st(e,r);if(o&&(e.matches||(e.matches=[]),e.matches.push(o),e.resolveOptions.strategy==="ONE")){t();return}}t()}function tn(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function nn(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var ze=Ce(),rn=it();function on(e,t){if(J(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),r=ze&&e.resolveOptions&&e.resolveOptions.hash===!0;rn?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",r?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!r){var o=location.hash;location.hash="",location.hash=o}e.instance.__freezeListening=!1},1))):ze&&(window.location.href=e.to)}t()}function at(e,t){var n=e.instance;if(!n.lastResolved()){t();return}q(n.lastResolved().map(function(r){return function(o,i){if(!r.route.hooks||!r.route.hooks.leave){i();return}var s=!1,c=e.instance.matchLocation(r.route.path,e.currentLocationPath,!1);if(r.route.path!=="*")s=!c;else{var p=e.matches?e.matches.find(function(a){return r.route.path===a.route.path}):!1;s=!p}if(J(e.navigateOptions,"callHooks")&&s){q(r.route.hooks.leave.map(function(a){return function(u,f){return a(function(h){h===!1?e.instance.__markAsClean(e):f()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return i()}]));return}else i()}}),{},function(){return t()})}function sn(e,t){e.match.route.hooks&&e.match.route.hooks.before&&J(e.navigateOptions,"callHooks")?q(e.match.route.hooks.before.map(function(n){return function(o,i){return n(function(s){s===!1?e.instance.__markAsClean(e):i()},e.match)}}).concat([function(){return t()}])):t()}function an(e,t){J(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function cn(e,t){e.match.route.hooks&&e.match.route.hooks.after&&J(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(n){return n(e.match)}),t()}function ln(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString){n.forEach(function(r){r.route.hooks&&r.route.hooks.already&&J(e.navigateOptions,"callHooks")&&r.route.hooks.already.forEach(function(o){return o(e.match)})}),t(!1);return}t()}function un(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var r=ae(e.currentLocationPath),o=r[0],i=r[1],s=ie(e.to);n.path=O(o);var c={url:n.path,queryString:i,hashString:s,data:null,route:n,params:i!==""?Ne(i):null};e.matches=[c],e.match=c}t()}function dn(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function pn(e,t){e.instance._setCurrent(null),t()}function ct(e,t){J(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var lt=[ln,sn,an,cn],Je=[at,un,q.if(function(e){var t=e.notFoundHandled;return t},lt.concat([ct]),[dn,pn])];function Oe(){return Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oe.apply(this,arguments)}function We(e,t){var n=0;function r(){if(n===e.matches.length){ct(e,t);return}q(lt,Oe({},e,{match:e.matches[n]}),function(){n+=1,r()})}at(e,r)}function be(e){e.instance.__markAsClean(e)}function Re(){return Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}var Ve="[data-navigo]";function fn(e,t){var n=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Ve},r=this,o="/",i=null,s=[],c=!1,p,a=it(),u=Ce();e?o=O(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function f(d){return d.indexOf("#")>=0&&(n.hash===!0?d=d.split("#")[1]||"/":d=d.split("#")[0]),d}function h(d){return O(o+"/"+O(d))}function v(d,g,b,E){return d=se(d)?h(d):d,{name:E||O(String(d)),path:d,handler:g,hooks:en(b)}}function m(d,g,b){var E=this;return typeof d=="object"&&!(d instanceof RegExp)?(Object.keys(d).forEach(function(_){if(typeof d[_]=="function")E.on(_,d[_]);else{var j=d[_],K=j.uses,Bt=j.as,Ht=j.hooks;s.push(v(_,K,[p,Ht],Bt))}}),this):(typeof d=="function"&&(b=g,g=d,d=o),s.push(v(d,g,[p,b])),this)}function y(d,g){if(r.__dirty){r.__waiting.push(function(){return r.resolve(d,g)});return}else r.__dirty=!0;d=d?O(o)+"/"+O(d):void 0;var b={instance:r,to:d,currentLocationPath:d,navigateOptions:{},resolveOptions:Re({},n,g)};return q([Me,ye,q.if(function(E){var _=E.matches;return _&&_.length>0},We,Je)],b,be),b.matches?b.matches:!1}function R(d,g){if(r.__dirty){r.__waiting.push(function(){return r.navigate(d,g)});return}else r.__dirty=!0;d=O(o)+"/"+O(d);var b={instance:r,to:d,navigateOptions:g||{},resolveOptions:g&&g.resolveOptions?g.resolveOptions:n,currentLocationPath:f(d)};q([tn,nn,ye,q.if(function(E){var _=E.matches;return _&&_.length>0},We,Je),on,be],b,be)}function L(d,g,b){var E=Ue(d,g);return E!==null?(R(E.replace(new RegExp("^/?"+o),""),b),!0):!1}function B(d){return this.routes=s=s.filter(function(g){return se(d)?O(g.path)!==O(d):Yt(d)?d!==g.handler:String(g.path)!==String(d)}),this}function W(){a&&(this.__popstateListener=function(){r.__freezeListening||y()},window.addEventListener("popstate",this.__popstateListener))}function ve(){this.routes=s=[],a&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=c=!0}function Tt(d,g){return r._notFoundRoute=v("*",d,[p,g],"__NOT_FOUND__"),this}function Ie(){if(u)return Nt().forEach(function(d){if(d.getAttribute("data-navigo")==="false"||d.getAttribute("target")==="_blank"){d.hasListenerAttached&&d.removeEventListener("click",d.navigoHandler);return}d.hasListenerAttached||(d.hasListenerAttached=!0,d.navigoHandler=function(g){if((g.ctrlKey||g.metaKey)&&g.target.tagName.toLowerCase()==="a")return!1;var b=d.getAttribute("href");if(typeof b>"u"||b===null)return!1;if(b.match(/^(http|https)/)&&typeof URL<"u")try{var E=new URL(b);b=E.pathname+E.search}catch{}var _=Zt(d.getAttribute("data-navigo-options"));c||(g.preventDefault(),g.stopPropagation(),r.navigate(O(b),_))},d.addEventListener("click",d.navigoHandler))}),r}function Nt(){return u?[].slice.call(document.querySelectorAll(n.linksSelector||Ve)):[]}function Ct(d){return"/"+o+"/"+O(d)}function jt(d){return p=d,this}function qt(){return i}function Ue(d,g,b){var E=s.find(function(K){return K.name===d}),_=null;if(E){if(_=E.path,g)for(var j in g)_=_.replace(":"+j,g[j]);_=_.match(/^\//)?_:"/"+_}return _&&b&&!b.includeRoot&&(_=_.replace(new RegExp("^/"+o),"")),_}function Ft(d){return d.getAttribute("href")}function Be(d){var g=ae(O(d)),b=g[0],E=g[1],_=E===""?null:Ne(E),j=ie(d),K=v(b,function(){},[p],b);return{url:b,queryString:E,hashString:j,route:K,data:null,params:_}}function $t(){return Be(O(ot(o)).replace(new RegExp("^"+o),""))}function Dt(d){var g={instance:r,currentLocationPath:d,to:d,navigateOptions:{},resolveOptions:n};return ye(g,function(){}),g.matches?g.matches:!1}function It(d,g,b){typeof g<"u"&&(typeof b>"u"||b)&&(g=h(g));var E={instance:r,to:g,currentLocationPath:g};Me(E,function(){}),typeof d=="string"&&(d=typeof b>"u"||b?h(d):d);var _=st(E,{name:String(d),path:d,handler:function(){},hooks:{}});return _||!1}function ee(d,g,b){return typeof g=="string"&&(g=He(g)),g?(g.hooks[d]||(g.hooks[d]=[]),g.hooks[d].push(b),function(){g.hooks[d]=g.hooks[d].filter(function(E){return E!==b})}):(console.warn("Route doesn't exists: "+g),function(){})}function He(d){return typeof d=="string"?s.find(function(g){return g.name===h(d)}):s.find(function(g){return g.handler===d})}function Ut(d){d.instance.__dirty=!1,d.instance.__waiting.length>0&&d.instance.__waiting.shift()()}this.root=o,this.routes=s,this.destroyed=c,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Ut,this.on=m,this.off=B,this.resolve=y,this.navigate=R,this.navigateByName=L,this.destroy=ve,this.notFound=Tt,this.updatePageLinks=Ie,this.link=Ct,this.hooks=jt,this.extractGETParameters=function(d){return ae(f(d))},this.lastResolved=qt,this.generate=Ue,this.getLinkPath=Ft,this.match=Dt,this.matchLocation=It,this.getCurrentLocation=$t,this.addBeforeHook=ee.bind(this,"before"),this.addAfterHook=ee.bind(this,"after"),this.addAlreadyHook=ee.bind(this,"already"),this.addLeaveHook=ee.bind(this,"leave"),this.getRoute=He,this._pathToMatchObject=Be,this._clean=O,this._checkForAHash=f,this._setCurrent=function(d){return i=r.current=d},W.call(this),Ie.call(this)}const k=new fn("/",{linksSelector:"a",hash:!0});let z=[],ce=0,ut=null,dt=null,M=[],le=0;const mn=(e,t=100)=>{let n=null;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}},N=(e,t)=>{t.innerHTML=e(),ut=e,dt=t,z.forEach(n=>{n.cb()})},P=e=>{let t,n=le;M[n]!==void 0?t=M[n]:t=M[n]=e;const r=o=>{if(o===void 0)throw new Error("New state must not be undefined");typeof o=="function"?M[n]=o(M[n]):M[n]=o,hn()};return le++,[t,r]},hn=mn(()=>{le=0,ce=0,dt.innerHTML=ut(),z.forEach(e=>{var n;(!e.nextDeps||((n=e.nextDeps)==null?void 0:n.some((r,o)=>{var i;return r!==((i=e==null?void 0:e.prevDeps)==null?void 0:i[o])})))&&e.cb()})}),S=(e,t)=>{let n=ce;z[n]?z[n]={cb:e,prevDeps:z[n].nextDeps,nextDeps:t}:z.push({cb:e,prevDeps:null,nextDeps:t}),ce++};k.on("/*",()=>{},{before(e,t){M=[],le=0,z=[],ce=0,e()}});const gn=`<div class="flex space-x-1 iconLog">
  <img class="w-6" src="../image/enter.png"/>
  <p class="text-sm ">Sign-in / Sign-up</p>
</div>`,xe=JSON.parse(localStorage.getItem("checkState")),Ae=[],vn=[{name:"Home",path:"##/home"},{name:"Portfolio",path:"##/porfolio"},{name:"Contact",path:"##/contact"},{name:"Projects",path:"/category"},{name:"Admin",path:"/admin"}],yn=[{name:"Home",path:"##/home"},{name:"Portfolio",path:"##/porfolio"},{name:"Contact",path:"##/contact"},{name:"Projects",path:"/category"},{name:`${gn}`,path:"/sign-in-up"}];(xe==null?void 0:xe.role)==!0?vn.map(e=>{Ae.push(e)}):yn.map(e=>{Ae.push(e)});const D=()=>`
    <div class="fixed z-10 w-full grid grid-cols-5 bg_menu">
        <div class="ml-10 col-span-3">
            <h1 class="text-6xl font-bold shell_brand"><a href="#" class="hover:text-gray-700">𝓥.𝓥</a></h1>
        </div>
        <div class="flex space-x-10 col-span-2 text-lg mr-10 ">
            ${Ae.map(e=>`<a class="hover:scale-105 hover:text-white my-auto" href="${e.path}">${e.name}</a>`).join("")}
        </div>
    </div><br><br><br>
    <div class=""></div>
  `,bn=()=>(S(()=>{document.querySelector(".signin").addEventListener("submit",n=>{n.preventDefault();const r=document.querySelector("#email1").value,o=document.querySelector("#pass1").value,i=JSON.parse(localStorage.getItem("Account_vite"));r==i.email&&o==i.pass?(window.location.href="/admin",alert("Đăng nhập thành công ."),localStorage.setItem("checkState",JSON.stringify({role:!0}))):alert("Email hoặc Pass nhập sai ? Hãy kiểm tra lại .")}),document.querySelector(".signup").addEventListener("submit",n=>{n.preventDefault();const r=document.querySelector("#name").value,o=document.querySelector("#email2").value,i=document.querySelector("#pass2").value,s=document.querySelector("#repass").value;i!=s?alert("Passwork không trùng khớp !"):(localStorage.setItem("Account_vite",JSON.stringify({name:r,email:o,pass:i})),alert(`Đăng kí thành công Account (email: ${o} - pass: ${i})`))})}),`
    ${D()}
        <h1 class="text-center text-sky-500 text-4xl font-bold mt-5">Entry to management</h1>
        <div class="w-[1200px] mx-auto h-[500px] flex space-x-14">
            <div class="w-[572px] hover:shadow-2xl shadow-md duration-100 shadow-gray-500 h-[350px] my-auto rounded-xl text-black">
                <div class="text-center rounded-t-md shadow shadow-b-white text-xl"><h3 class="leading-10">Log-in</h3></div>
                <form action="" class="mt-10 signin">
                    <p class="ml-[80px]">Email:</p>
                    <input required class=" w-[300px] ml-[140px] h-9 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-600 rounded-sm" type="email" placeholder="...The email" id="email1">
                    <p class="ml-[80px]">Pass:</p>
                    <input required class=" w-[300px] ml-[140px] h-9 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-600 rounded-sm" type="text" placeholder="...The password" id="pass1">
                    <br>
                    <div class="mt-5 flex justify-center">
                        <button class="border w-32 h-10 rounded-md font-bold hover:bg-black hover:text-white duration-200">Sign-In</button>
                    </div>
                </form>
            </div>
            <div class="w-[572px] hover:shadow-2xl shadow-md duration-100 shadow-gray-500 h-[350px] my-auto rounded-xl">
                <div class="text-center rounded-t-md shadow shadow-b-white text-xl"><h3 class="leading-10">Register</h3></div>
                <form action="" class="mt-3 signup">
                    <p class="ml-[80px]">Name:</p>
                    <input required class="w-[300px] ml-[140px] h-8 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-400 rounded-sm" type="text" placeholder="...The name" id="name">
                    <p class="ml-[80px]">Email:</p>
                    <input required class="w-[300px] ml-[140px] h-8 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-400 rounded-sm" type="email" placeholder="...The email" id="email2">
                    <p class="ml-[80px]">Pass:</p>
                    <input required class="w-[300px] ml-[140px] h-8 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-400 rounded-sm" type="password" placeholder="...The pass" id="pass2">
                    <p class="ml-[80px]">Repass:</p>
                    <input required class="w-[300px] ml-[140px] h-8 text-gray-600 outline-0 pl-3 focus:shadow-lg focus:shadow-gray-400 rounded-sm" type="password" placeholder="...The repass" id="repass">
                    <br>
                    <div class="mt-3 flex justify-center">
                        <button class="border w-32 h-10 rounded-md font-bold hover:bg-white hover:text-black duration-200">Sign-Up</button>
                    </div>
                </form>
            </div>
        </div>
        <script>
            function signin(){
                alert("ok")
            }
        <\/script>
    `);function pt(e,t){return function(){return e.apply(t,arguments)}}const{toString:xn}=Object.prototype,{getPrototypeOf:je}=Object,de=(e=>t=>{const n=xn.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),I=e=>(e=e.toLowerCase(),t=>de(t)===e),pe=e=>t=>typeof t===e,{isArray:G}=Array,Y=pe("undefined");function wn(e){return e!==null&&!Y(e)&&e.constructor!==null&&!Y(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ft=I("ArrayBuffer");function _n(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ft(e.buffer),t}const Sn=pe("string"),T=pe("function"),mt=pe("number"),fe=e=>e!==null&&typeof e=="object",En=e=>e===!0||e===!1,te=e=>{if(de(e)!=="object")return!1;const t=je(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},On=I("Date"),Rn=I("File"),An=I("Blob"),kn=I("FileList"),Pn=e=>fe(e)&&T(e.pipe),Ln=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=de(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},Tn=I("URLSearchParams"),Nn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Q(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),G(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let c;for(r=0;r<s;r++)c=i[r],t.call(null,e[c],c,e)}}function ht(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const gt=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),vt=e=>!Y(e)&&e!==gt;function ke(){const{caseless:e}=vt(this)&&this||{},t={},n=(r,o)=>{const i=e&&ht(t,o)||o;te(t[i])&&te(r)?t[i]=ke(t[i],r):te(r)?t[i]=ke({},r):G(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Q(arguments[r],n);return t}const Cn=(e,t,n,{allOwnKeys:r}={})=>(Q(t,(o,i)=>{n&&T(o)?e[i]=pt(o,n):e[i]=o},{allOwnKeys:r}),e),jn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),qn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Fn=(e,t,n,r)=>{let o,i,s;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!c[s]&&(t[s]=e[s],c[s]=!0);e=n!==!1&&je(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$n=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Dn=e=>{if(!e)return null;if(G(e))return e;let t=e.length;if(!mt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},In=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&je(Uint8Array)),Un=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Bn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Hn=I("HTMLFormElement"),Mn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),zn=I("RegExp"),yt=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Q(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},Jn=e=>{yt(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Wn=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return G(e)?r(e):r(String(e).split(t)),n},Vn=()=>{},Gn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),we="abcdefghijklmnopqrstuvwxyz",Ke="0123456789",bt={DIGIT:Ke,ALPHA:we,ALPHA_DIGIT:we+we.toUpperCase()+Ke},Kn=(e=16,t=bt.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Xn(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Yn=e=>{const t=new Array(10),n=(r,o)=>{if(fe(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=G(r)?[]:{};return Q(r,(s,c)=>{const p=n(s,o+1);!Y(p)&&(i[c]=p)}),t[o]=void 0,i}}return r};return n(e,0)},Qn=I("AsyncFunction"),Zn=e=>e&&(fe(e)||T(e))&&T(e.then)&&T(e.catch),l={isArray:G,isArrayBuffer:ft,isBuffer:wn,isFormData:Ln,isArrayBufferView:_n,isString:Sn,isNumber:mt,isBoolean:En,isObject:fe,isPlainObject:te,isUndefined:Y,isDate:On,isFile:Rn,isBlob:An,isRegExp:zn,isFunction:T,isStream:Pn,isURLSearchParams:Tn,isTypedArray:In,isFileList:kn,forEach:Q,merge:ke,extend:Cn,trim:Nn,stripBOM:jn,inherits:qn,toFlatObject:Fn,kindOf:de,kindOfTest:I,endsWith:$n,toArray:Dn,forEachEntry:Un,matchAll:Bn,isHTMLForm:Hn,hasOwnProperty:Ge,hasOwnProp:Ge,reduceDescriptors:yt,freezeMethods:Jn,toObjectSet:Wn,toCamelCase:Mn,noop:Vn,toFiniteNumber:Gn,findKey:ht,global:gt,isContextDefined:vt,ALPHABET:bt,generateString:Kn,isSpecCompliantForm:Xn,toJSONObject:Yn,isAsyncFn:Qn,isThenable:Zn};function w(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}l.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xt=w.prototype,wt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{wt[e]={value:e}});Object.defineProperties(w,wt);Object.defineProperty(xt,"isAxiosError",{value:!0});w.from=(e,t,n,r,o,i)=>{const s=Object.create(xt);return l.toFlatObject(e,s,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),w.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const er=null;function Pe(e){return l.isPlainObject(e)||l.isArray(e)}function _t(e){return l.endsWith(e,"[]")?e.slice(0,-2):e}function Xe(e,t,n){return e?e.concat(t).map(function(o,i){return o=_t(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function tr(e){return l.isArray(e)&&!e.some(Pe)}const nr=l.toFlatObject(l,{},null,function(t){return/^is[A-Z]/.test(t)});function me(e,t,n){if(!l.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=l.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,R){return!l.isUndefined(R[y])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&l.isSpecCompliantForm(t);if(!l.isFunction(o))throw new TypeError("visitor must be a function");function a(m){if(m===null)return"";if(l.isDate(m))return m.toISOString();if(!p&&l.isBlob(m))throw new w("Blob is not supported. Use a Buffer instead.");return l.isArrayBuffer(m)||l.isTypedArray(m)?p&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,y,R){let L=m;if(m&&!R&&typeof m=="object"){if(l.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(l.isArray(m)&&tr(m)||(l.isFileList(m)||l.endsWith(y,"[]"))&&(L=l.toArray(m)))return y=_t(y),L.forEach(function(W,ve){!(l.isUndefined(W)||W===null)&&t.append(s===!0?Xe([y],ve,i):s===null?y:y+"[]",a(W))}),!1}return Pe(m)?!0:(t.append(Xe(R,y,i),a(m)),!1)}const f=[],h=Object.assign(nr,{defaultVisitor:u,convertValue:a,isVisitable:Pe});function v(m,y){if(!l.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(m),l.forEach(m,function(L,B){(!(l.isUndefined(L)||L===null)&&o.call(t,L,l.isString(B)?B.trim():B,y,h))===!0&&v(L,y?y.concat(B):[B])}),f.pop()}}if(!l.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Ye(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function qe(e,t){this._pairs=[],e&&me(e,this,t)}const St=qe.prototype;St.append=function(t,n){this._pairs.push([t,n])};St.toString=function(t){const n=t?function(r){return t.call(this,r,Ye)}:Ye;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function rr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Et(e,t,n){if(!t)return e;const r=n&&n.encode||rr,o=n&&n.serialize;let i;if(o?i=o(t,n):i=l.isURLSearchParams(t)?t.toString():new qe(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class or{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){l.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Qe=or,Ot={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},sr=typeof URLSearchParams<"u"?URLSearchParams:qe,ir=typeof FormData<"u"?FormData:null,ar=typeof Blob<"u"?Blob:null,cr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),lr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),F={isBrowser:!0,classes:{URLSearchParams:sr,FormData:ir,Blob:ar},isStandardBrowserEnv:cr,isStandardBrowserWebWorkerEnv:lr,protocols:["http","https","file","blob","url","data"]};function ur(e,t){return me(e,new F.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return F.isNode&&l.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function dr(e){return l.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pr(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Rt(e){function t(n,r,o,i){let s=n[i++];const c=Number.isFinite(+s),p=i>=n.length;return s=!s&&l.isArray(o)?o.length:s,p?(l.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!c):((!o[s]||!l.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&l.isArray(o[s])&&(o[s]=pr(o[s])),!c)}if(l.isFormData(e)&&l.isFunction(e.entries)){const n={};return l.forEachEntry(e,(r,o)=>{t(dr(r),o,n,0)}),n}return null}const fr={"Content-Type":void 0};function mr(e,t,n){if(l.isString(e))try{return(t||JSON.parse)(e),l.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const he={transitional:Ot,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=l.isObject(t);if(i&&l.isHTMLForm(t)&&(t=new FormData(t)),l.isFormData(t))return o&&o?JSON.stringify(Rt(t)):t;if(l.isArrayBuffer(t)||l.isBuffer(t)||l.isStream(t)||l.isFile(t)||l.isBlob(t))return t;if(l.isArrayBufferView(t))return t.buffer;if(l.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ur(t,this.formSerializer).toString();if((c=l.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return me(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),mr(t)):t}],transformResponse:[function(t){const n=this.transitional||he.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&l.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(s)throw c.name==="SyntaxError"?w.from(c,w.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:F.classes.FormData,Blob:F.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};l.forEach(["delete","get","head"],function(t){he.headers[t]={}});l.forEach(["post","put","patch"],function(t){he.headers[t]=l.merge(fr)});const Fe=he,hr=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gr=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&hr[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ze=Symbol("internals");function X(e){return e&&String(e).trim().toLowerCase()}function ne(e){return e===!1||e==null?e:l.isArray(e)?e.map(ne):String(e)}function vr(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const yr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _e(e,t,n,r,o){if(l.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!l.isString(t)){if(l.isString(r))return t.indexOf(r)!==-1;if(l.isRegExp(r))return r.test(t)}}function br(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function xr(e,t){const n=l.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class ge{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(c,p,a){const u=X(p);if(!u)throw new Error("header name must be a non-empty string");const f=l.findKey(o,u);(!f||o[f]===void 0||a===!0||a===void 0&&o[f]!==!1)&&(o[f||p]=ne(c))}const s=(c,p)=>l.forEach(c,(a,u)=>i(a,u,p));return l.isPlainObject(t)||t instanceof this.constructor?s(t,n):l.isString(t)&&(t=t.trim())&&!yr(t)?s(gr(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=X(t),t){const r=l.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return vr(o);if(l.isFunction(n))return n.call(this,o,r);if(l.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=X(t),t){const r=l.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||_e(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=X(s),s){const c=l.findKey(r,s);c&&(!n||_e(r,r[c],c,n))&&(delete r[c],o=!0)}}return l.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||_e(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return l.forEach(this,(o,i)=>{const s=l.findKey(r,i);if(s){n[s]=ne(o),delete n[i];return}const c=t?br(i):String(i).trim();c!==i&&delete n[i],n[c]=ne(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return l.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&l.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Ze]=this[Ze]={accessors:{}}).accessors,o=this.prototype;function i(s){const c=X(s);r[c]||(xr(o,s),r[c]=!0)}return l.isArray(t)?t.forEach(i):i(t),this}}ge.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);l.freezeMethods(ge.prototype);l.freezeMethods(ge);const U=ge;function Se(e,t){const n=this||Fe,r=t||n,o=U.from(r.headers);let i=r.data;return l.forEach(e,function(c){i=c.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function At(e){return!!(e&&e.__CANCEL__)}function Z(e,t,n){w.call(this,e??"canceled",w.ERR_CANCELED,t,n),this.name="CanceledError"}l.inherits(Z,w,{__CANCEL__:!0});function wr(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new w("Request failed with status code "+n.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const _r=F.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,s,c){const p=[];p.push(n+"="+encodeURIComponent(r)),l.isNumber(o)&&p.push("expires="+new Date(o).toGMTString()),l.isString(i)&&p.push("path="+i),l.isString(s)&&p.push("domain="+s),c===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Sr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Er(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function kt(e,t){return e&&!Sr(t)?Er(e,t):t}const Or=F.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const c=l.isString(s)?o(s):s;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Rr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ar(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(p){const a=Date.now(),u=r[i];s||(s=a),n[o]=p,r[o]=a;let f=i,h=0;for(;f!==o;)h+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),a-s<t)return;const v=u&&a-u;return v?Math.round(h*1e3/v):void 0}}function et(e,t){let n=0;const r=Ar(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,c=i-n,p=r(c),a=i<=s;n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:c,rate:p||void 0,estimated:p&&s&&a?(s-i)/p:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const kr=typeof XMLHttpRequest<"u",Pr=kr&&function(e){return new Promise(function(n,r){let o=e.data;const i=U.from(e.headers).normalize(),s=e.responseType;let c;function p(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}l.isFormData(o)&&(F.isStandardBrowserEnv||F.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let a=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+m))}const u=kt(e.baseURL,e.url);a.open(e.method.toUpperCase(),Et(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function f(){if(!a)return;const v=U.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),y={data:!s||s==="text"||s==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:v,config:e,request:a};wr(function(L){n(L),p()},function(L){r(L),p()},y),a=null}if("onloadend"in a?a.onloadend=f:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(f)},a.onabort=function(){a&&(r(new w("Request aborted",w.ECONNABORTED,e,a)),a=null)},a.onerror=function(){r(new w("Network Error",w.ERR_NETWORK,e,a)),a=null},a.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||Ot;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new w(m,y.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,a)),a=null},F.isStandardBrowserEnv){const v=(e.withCredentials||Or(u))&&e.xsrfCookieName&&_r.read(e.xsrfCookieName);v&&i.set(e.xsrfHeaderName,v)}o===void 0&&i.setContentType(null),"setRequestHeader"in a&&l.forEach(i.toJSON(),function(m,y){a.setRequestHeader(y,m)}),l.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),s&&s!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",et(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",et(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=v=>{a&&(r(!v||v.type?new Z(null,e,a):v),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const h=Rr(u);if(h&&F.protocols.indexOf(h)===-1){r(new w("Unsupported protocol "+h+":",w.ERR_BAD_REQUEST,e));return}a.send(o||null)})},re={http:er,xhr:Pr};l.forEach(re,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Lr={getAdapter:e=>{e=l.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=l.isString(n)?re[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new w(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(l.hasOwnProp(re,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!l.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:re};function Ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Z(null,e)}function tt(e){return Ee(e),e.headers=U.from(e.headers),e.data=Se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Lr.getAdapter(e.adapter||Fe.adapter)(e).then(function(r){return Ee(e),r.data=Se.call(e,e.transformResponse,r),r.headers=U.from(r.headers),r},function(r){return At(r)||(Ee(e),r&&r.response&&(r.response.data=Se.call(e,e.transformResponse,r.response),r.response.headers=U.from(r.response.headers))),Promise.reject(r)})}const nt=e=>e instanceof U?e.toJSON():e;function V(e,t){t=t||{};const n={};function r(a,u,f){return l.isPlainObject(a)&&l.isPlainObject(u)?l.merge.call({caseless:f},a,u):l.isPlainObject(u)?l.merge({},u):l.isArray(u)?u.slice():u}function o(a,u,f){if(l.isUndefined(u)){if(!l.isUndefined(a))return r(void 0,a,f)}else return r(a,u,f)}function i(a,u){if(!l.isUndefined(u))return r(void 0,u)}function s(a,u){if(l.isUndefined(u)){if(!l.isUndefined(a))return r(void 0,a)}else return r(void 0,u)}function c(a,u,f){if(f in t)return r(a,u);if(f in e)return r(void 0,a)}const p={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c,headers:(a,u)=>o(nt(a),nt(u),!0)};return l.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=p[u]||o,h=f(e[u],t[u],u);l.isUndefined(h)&&f!==c||(n[u]=h)}),n}const Pt="1.4.0",$e={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{$e[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const rt={};$e.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Pt+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,c)=>{if(t===!1)throw new w(o(s," has been removed"+(n?" in "+n:"")),w.ERR_DEPRECATED);return n&&!rt[s]&&(rt[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,c):!0}};function Tr(e,t,n){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const c=e[i],p=c===void 0||s(c,i,e);if(p!==!0)throw new w("option "+i+" must be "+p,w.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new w("Unknown option "+i,w.ERR_BAD_OPTION)}}const Le={assertOptions:Tr,validators:$e},H=Le.validators;class ue{constructor(t){this.defaults=t,this.interceptors={request:new Qe,response:new Qe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=V(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Le.assertOptions(r,{silentJSONParsing:H.transitional(H.boolean),forcedJSONParsing:H.transitional(H.boolean),clarifyTimeoutError:H.transitional(H.boolean)},!1),o!=null&&(l.isFunction(o)?n.paramsSerializer={serialize:o}:Le.assertOptions(o,{encode:H.function,serialize:H.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=i&&l.merge(i.common,i[n.method]),s&&l.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=U.concat(s,i);const c=[];let p=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(p=p&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const a=[];this.interceptors.response.forEach(function(y){a.push(y.fulfilled,y.rejected)});let u,f=0,h;if(!p){const m=[tt.bind(this),void 0];for(m.unshift.apply(m,c),m.push.apply(m,a),h=m.length,u=Promise.resolve(n);f<h;)u=u.then(m[f++],m[f++]);return u}h=c.length;let v=n;for(f=0;f<h;){const m=c[f++],y=c[f++];try{v=m(v)}catch(R){y.call(this,R);break}}try{u=tt.call(this,v)}catch(m){return Promise.reject(m)}for(f=0,h=a.length;f<h;)u=u.then(a[f++],a[f++]);return u}getUri(t){t=V(this.defaults,t);const n=kt(t.baseURL,t.url);return Et(n,t.params,t.paramsSerializer)}}l.forEach(["delete","get","head","options"],function(t){ue.prototype[t]=function(n,r){return this.request(V(r||{},{method:t,url:n,data:(r||{}).data}))}});l.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,c){return this.request(V(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}ue.prototype[t]=n(),ue.prototype[t+"Form"]=n(!0)});const oe=ue;class De{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(c=>{r.subscribe(c),i=c}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,c){r.reason||(r.reason=new Z(i,s,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new De(function(o){t=o}),cancel:t}}}const Nr=De;function Cr(e){return function(n){return e.apply(null,n)}}function jr(e){return l.isObject(e)&&e.isAxiosError===!0}const Te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Te).forEach(([e,t])=>{Te[t]=e});const qr=Te;function Lt(e){const t=new oe(e),n=pt(oe.prototype.request,t);return l.extend(n,oe.prototype,t,{allOwnKeys:!0}),l.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Lt(V(e,o))},n}const A=Lt(Fe);A.Axios=oe;A.CanceledError=Z;A.CancelToken=Nr;A.isCancel=At;A.VERSION=Pt;A.toFormData=me;A.AxiosError=w;A.Cancel=A.CanceledError;A.all=function(t){return Promise.all(t)};A.spread=Cr;A.isAxiosError=jr;A.mergeConfig=V;A.AxiosHeaders=U;A.formToJSON=e=>Rt(l.isHTMLForm(e)?new FormData(e):e);A.HttpStatusCode=qr;A.default=A;const x=A,Fr=()=>{S(function(){document.querySelector("#idForm").addEventListener("submit",async o=>{const i=document.querySelector("#name"),s=document.querySelector("#img");o.preventDefault();const c=await e(s.files),p={name:i.value,img:c};x.post("http://localhost:3000/category",p),k.navigate("/admin")});const n=document.getElementById("img"),r=document.getElementById("idImg");n.onchange=o=>{r.src=URL.createObjectURL(n.files[0])}});const e=async t=>{const n="darnprw0q",r="vole_2k",o="img_assigment",i=[],s=`https://api.cloudinary.com/v1_1/${n}/image/upload`,c=new FormData;c.append("upload_preset",r),c.append("folder",o);for(const p of t){console.log(p),c.append("file",p);const a=await x.post(s,c,{headers:{"Content-Type":"multipart/form-data"}});i.push(a.data.secure_url)}return i};return`
        ${D()}
        <br>
        <h1 class="text-4xl ml-8 mb-5">Add Category more</h1>
        <div class="w-[1100px] space-x-20 mx-auto flex">
            <div class="">
                <img class="h-[250px] w-[250px] border-4 rounded-lg" id="idImg" src="" alt="Waitting....">
            </div>
            <form id="idForm" class="w-[700px]">
                <div class="">
                    <div class="mb-3">
                        <input required class="form-control bg-gray-100" type="file" id="img">
                    </div>
                    <p class="text-white">Name Category:</p>
                    <div class="mb-2">
                        <input required type="text" class="form-control bg-gray-100" placeholder="name category" id="name">
                    </div>
                </div>
                <div class="text-center button_shell_control mt-16">
                    <button type="submit" class="button_control w-44">Continue</button>
                </div>
            </form>
        </div>
    `},$r=()=>{const[e,t]=P([]);S(function(){x.get("http://localhost:3000/category").then(({data:r})=>t(r))},[]),S(function(){document.querySelector("#idForm").addEventListener("submit",async s=>{s.preventDefault();const c=document.querySelector("#name"),p=document.querySelector("#img"),a=document.querySelector("#author"),u=document.querySelector("#content"),f=document.querySelector("#select");s.preventDefault();const h=await n(p.files),v=new Date;let m=v.getMonth();m+=1;const y={name:c.value,img:h,author:a.value,content:u.value,select:f.value,time:v.getHours()+":"+v.getMinutes()+"`:"+v.getSeconds()+"____"+v.getDate()+"/"+m+"/"+v.getFullYear()};x.post("http://localhost:3000/projects",y),k.navigate("/admin")});const o=document.getElementById("img"),i=document.getElementById("idImg");o.onchange=s=>{i.src=URL.createObjectURL(o.files[0])}});const n=async r=>{const o="darnprw0q",i="vole_2k",s="img_assigment",c=[],p=`https://api.cloudinary.com/v1_1/${o}/image/upload`,a=new FormData;a.append("upload_preset",i),a.append("folder",s);for(const u of r){console.log(u),a.append("file",u);const f=await x.post(p,a,{headers:{"Content-Type":"multipart/form-data"}});c.push(f.data.secure_url)}return c};return`
        ${D()}
        <br>
        <h1 class="text-4xl ml-8 mb-5">Add new Project</h1>
        <div class="w-[1100px] mx-auto">
            <form id="idForm" class="">
                <div class="flex space-x-5">
                    <div class="mb-3">
                        <input required class="form-control mt-[20px] bg-gray-100 h-[156px] w-56 vo" type="file" multiple id="img">
                        <img class="h-[156px] w-56 mt-[24px] border-4 rounded-lg" id="idImg" src="" alt="Waitting....">
                    </div>
                    <div class="w-[810px]">
                        <p class="text-white">Name Project:</p>
                        <div class="mb-1">
                            <input required type="text" class="form-control bg-gray-100" placeholder="name project" id="name">
                        </div>
                        <p class="text-white">Name Author:</p>
                        <div class="mb-1">
                            <input required type="text" class="form-control bg-gray-100" placeholder="author ?" id="author">
                        </div>
                        <p class="text-white">Content:</p>
                        <div class="mb-1">
                            <textarea  required class="form-control bg-gray-100" rows="5" placeholder="content..." id="content"></textarea>
                        </div>
                        <p class="text-white">Categories:</p>
                        <select class="form-select bg-gray-100" aria-label="Default select example" id="select"  required>
                            ${e.map(r=>`<option value="${r.id}">${r.name}</option>`)}
                        </select>
                    </div>
                </div>
                <div class="text-center button_shell_control">
                    <button type="submit" class="button_control w-44">Continue</button>
                </div>
            </form>
        </div>
    `},Dr=({data:{id:e}})=>{const[t,n]=P({});S(function(){x.get("http://localhost:3000/category/"+e).then(({data:o})=>n(o))},[]),S(function(){document.querySelector("#idForm").addEventListener("submit",async c=>{const p=document.querySelector("#name"),a=document.querySelector("#img");c.preventDefault();const u=await r(a.files),f={id:e,name:p.value,img:u};x.put("http://localhost:3000/category/"+e,f),k.navigate("/admin")});const i=document.getElementById("img"),s=document.getElementById("idImg");i.onchange=c=>{s.src=URL.createObjectURL(i.files[0])}});const r=async o=>{const i="darnprw0q",s="vole_2k",c="img_assigment",p=[],a=`https://api.cloudinary.com/v1_1/${i}/image/upload`,u=new FormData;u.append("upload_preset",s),u.append("folder",c);for(const f of o){console.log(f),u.append("file",f);const h=await x.post(a,u,{headers:{"Content-Type":"multipart/form-data"}});p.push(h.data.secure_url)}return p};return`
        ${D()}
        <br>
        <h1 class="text-4xl ml-8 mb-5">Update Category</h1>
        <div class="w-[1100px] mx-auto flex space-x-20 ">
          <div class="">
            <img class="h-[250px] w-[250px] border-4 rounded-lg" id="idImg" src="" alt="Waitting....">
          </div>
          <form id="idForm" class="w-[700px]">
            <div class="">
                <div class="mb-3">
                    <input required class="form-control bg-gray-100" type="file" id="img">
                </div>
                <p class="text-white">Name Category:</p>
                <div class="mb-2">
                    <input required type="text" class="form-control bg-gray-100" placeholder="name category" value="${t.name}" id="name">
                </div>
            </div>
            <div class="text-center button_shell_control">
                <button type="submit" class="button_control w-44">Continue</button>
            </div>
          </form>
        </div>
    `},Ir=()=>{const[e,t]=P({});S(function(){x.get("http://localhost:3000/profile").then(r=>t(r.data))},[]),console.log(e),S(function(){document.querySelector("#idForm").addEventListener("submit",async o=>{const i=document.querySelector("#name_profile"),s=document.querySelector("#sdt_profile"),c=document.querySelector("#email_profile"),p=document.querySelector("#img_profile"),a=document.querySelector("#majors_profile"),u=document.querySelector("#content_profile");o.preventDefault();const f=await n(p.files),h={name:i.value,sdt:s.value,email:c.value,image:f,majors:a.value,introduce:u.value};x.put("http://localhost:3000/profile",h),k.navigate("/admin")})});const n=async r=>{const o="darnprw0q",i="vole_2k",s="img_assigment",c=[],p=`https://api.cloudinary.com/v1_1/${o}/image/upload`,a=new FormData;a.append("upload_preset",i),a.append("folder",s);for(const u of r){console.log(u),a.append("file",u);const f=await x.post(p,a,{headers:{"Content-Type":"multipart/form-data"}});c.push(f.data.secure_url)}return c};return`
    
        ${D()}
        <br>
        <h1 class="text-4xl ml-8 mb-5">Update Profile</h1>
        <div class="w-[1100px] mx-auto">
            <form id="idForm" class="">
                <div class="flex justify-center space-x-5">
                    <div>
                        <div class="mb-3 w-[310px]">
                            <input required class="form-control bg-gray-100 w-[310px] h-[310px] rounded-xl" type="file" id="img_profile">
                        </div>
                    </div>
                    <div>
                        <div class="flex space-x-5">
                            <div>
                                <p class="text-white ml-2 text-sm">Your name:</p>
                                <div class="mb-2">
                                    <input required type="text" class="form-control text-center w-[340px]  bg-gray-100" value="${e.name}" placeholder="...Your name..." id="name_profile">
                                </div>
                            </div>
                            <div>
                                <p class="text-white ml-2 text-sm">Sđt:</p>
                                <div class="mb-2">
                                    <input required type="text" class="form-control text-center w-[340px]  bg-gray-100" value="${e.sdt}" placeholder="...Sđt..." id="sdt_profile">
                                </div>
                            </div>
                        </div>
                        <p class="text-white ml-2 text-sm">Your Email:</p>
                        <div class="mb-2">
                            <input required type="email" class="form-control text-center w-[700px]  bg-gray-100" value="${e.email}" placeholder="...Email..." id="email_profile">
                        </div>
                        <p class="text-white ml-2 text-sm">Your majors:</p>
                        <div class="mb-2">
                            <input required type="text" class="form-control text-center w-[700px] bg-gray-100" value="${e.majors}" placeholder="...Your majors..." id="majors_profile">
                        </div>
                        <p class="text-white ml-2 text-sm">Introduce yourself:</p>
                        <div class="mb-2">
                        <textarea required class="form-control text-center bg-gray-100 h-[93px]" placeholder="...content..." id="content_profile">${e.introduce}</textarea>
                        </div>
                    </div>
                </div>
                <div class="text-center button_shell_control">
                    <button type="submit" class="button_control w-44">Accept</button>
                </div>
            </form>
        </div>
        
    `},Ur=({data:{id:e}})=>{const[t,n]=P([]);S(function(){x.get("http://localhost:3000/category").then(({data:s})=>n(s))},[]);const[r,o]=P({});console.log(e),S(function(){x.get("http://localhost:3000/projects/"+e).then(({data:s})=>o(s))},[]),S(function(){document.querySelector("#idForm").addEventListener("submit",async a=>{const u=document.querySelector("#name"),f=document.querySelector("#img"),h=document.querySelector("#author"),v=document.querySelector("#content"),m=document.querySelector("#select");a.preventDefault();const y=await i(f.files),R=new Date,L={id:e,name:u.value,img:y,author:h.value,content:v.value,select:m.value,time:R.getHours()+":"+R.getMinutes()+"`:"+R.getSeconds()+"____"+R.getDate()+"/"+R.getMonth()*2+"/"+R.getFullYear()};x.put("http://localhost:3000/projects/"+e,L),k.navigate("/admin")});const c=document.getElementById("img"),p=document.getElementById("idImg");c.onchange=a=>{p.src=URL.createObjectURL(c.files[0])}});const i=async s=>{const c="darnprw0q",p="vole_2k",a="img_assigment",u=[],f=`https://api.cloudinary.com/v1_1/${c}/image/upload`,h=new FormData;h.append("upload_preset",p),h.append("folder",a);for(const v of s){console.log(v),h.append("file",v);const m=await x.post(f,h,{headers:{"Content-Type":"multipart/form-data"}});u.push(m.data.secure_url)}return u};return`
        ${D()}
        <br>
        <h1 class="text-4xl ml-8 mb-5">Update Project</h1>
        <div class="w-[1100px] mx-auto">
            <form id="idForm" class="">
                <div class="flex space-x-5">
                    <div class="">
                        <div class="mb-3">
                            <input required class="form-control mt-[20px] bg-gray-100 h-[156px] w-56 vo" type="file" multiple id="img">
                            <img class="h-[156px] w-56 mt-[24px] border-4 rounded-lg" id="idImg" src="" alt="Waitting....">
                        </div>
                    </div>
                    <div class="w-[810px]">
                        <p class="text-white">Name Project:</p>
                        <div class="mb-1">
                            <input required value="${r.name}" type="text" class="form-control bg-gray-100" placeholder="name project" id="name">
                        </div>
                        <p class="text-white">Name Author:</p>
                        <div class="mb-1">
                            <input required value="${r.author}" type="text" class="form-control bg-gray-100" placeholder="author ?" id="author">
                        </div>
                        <p class="text-white">Content:</p>
                        <div class="mb-1">
                            <textarea required class="form-control bg-gray-100" rows="5" placeholder="content..." id="content">${r.content}</textarea>
                        </div>
                        <p class="text-white">Categories:</p>
                        <select required class="form-select bg-gray-100" aria-label="Default select example" id="select">
                            ${t.map(s=>`<option value="${s.id}">${s.name}</option>`)}
                        </select>
                    </div>
                </div>
                <div class="text-center button_shell_control">
                    <button type="submit" class="button_control w-44">Continue</button>
                </div>
            </form>
        </div>
    `},Br=()=>{const[e,t]=P([]),[n,r]=P([]);S(async()=>{await x.get("http://localhost:3000/projects").then(({data:s})=>t(s))},[]),console.log(e),S(function(){const s=document.querySelectorAll(".remove_pr");for(let c of s)c.addEventListener("click",function(){if(window.confirm("You sure remove this project !")){const a=c.dataset.id;x.delete("http://localhost:3000/projects/"+a);const u=e.filter(f=>f.id!=a);t(u)}})}),S(async()=>{await x.get("http://localhost:3000/category").then(({data:s})=>r(s))},[]),S(function(){const s=document.querySelectorAll(".remove_ct");for(let c of s)c.addEventListener("click",function(){if(window.confirm("You sure !, products related to this category will be removed")){const a=c.dataset.id,u=n.filter(f=>f.id!=a);r(u),x.delete("http://localhost:3000/category/"+a),e.map(f=>{if(f.select==a){const h=e.filter(v=>v.id!=f.id);t(h),x.delete("http://localhost:3000/projects/"+f.id)}})}})});const[o,i]=P({});return S(function(){x.get("http://localhost:3000/profile").then(s=>i(s.data))},[]),S(function(){const s=document.querySelectorAll(".btn_show");for(let u of s){const f=u.dataset.id;u.addEventListener("click",function(){const h=document.querySelector(".profile"),v=document.querySelector(".categories"),m=document.querySelector(".projects"),y=document.querySelector(".background");f==0?(v.style.position="absolute",v.style.top="-1000px",m.style.position="absolute",m.style.top="-1000px",y.style.position="absolute",y.style.top="-1000px",h.style.position="relative",h.style.top="0px"):f==1?(m.style.position="absolute",m.style.top="-1000px",h.style.position="absolute",h.style.top="-1000px",v.style.position="absolute",v.style.top="-1000px",y.style.position="relative",y.style.top="0px"):f==2?(m.style.position="absolute",m.style.top="-1000px",h.style.position="absolute",h.style.top="-1000px",y.style.position="absolute",y.style.top="-1000px",v.style.position="relative",v.style.top="0px"):f==3?(v.style.position="absolute",v.style.top="-1000px",h.style.position="absolute",h.style.top="-1000px",y.style.position="absolute",y.style.top="-1000px",m.style.position="relative",m.style.top="0px"):document.querySelector("#show").innerHTML=`
            <div class="w-[900px] ml-2 profile">
              <h1 class="text-4xl">No Data</h1>
            </div>
          `})}document.querySelector(".btn_background").addEventListener("click",function(){const u=document.querySelector("#color1"),f=document.querySelector("body");f.style.background=u.value;const h={bg_name:u.value};x.post("http://localhost:3000/background",h)}),document.querySelector(".btn_color").addEventListener("click",function(){const u=document.querySelector("#color2"),f=document.querySelector("body");f.style.color=u.value;const h={cl_name:u.value};x.post("http://localhost:3000/color",h)}),document.querySelector(".btn_optimize").addEventListener("click",async function(){const u=await x.get("http://localhost:3000/background").then(({data:h})=>h.map(v=>v)),f=await x.get("http://localhost:3000/color").then(({data:h})=>h.map(v=>v.id));console.log(u),console.log(f),u.map(h=>x.delete("http://localhost:3000/background/"+h.id));for(let h=0;h<f.length;h++)x.delete("http://localhost:3000/color/"+f[h]);alert("Your web had optimized !! Go back to the homepage to see a new interface")}),$(function(){$(window).scroll(function(){$(this).scrollTop()>200?$("#top-up").fadeIn(1e3):$("#top-up").fadeOut(1e3)}),$("#top-up").click(function(){$("body,html").animate({scrollTop:0},1e3)})})}),S(()=>{document.querySelector(".sign_out").addEventListener("click",c=>{window.confirm("Bạn có chắc đăng xuất ?")&&(localStorage.setItem("checkState",JSON.stringify({role:!1})),window.location.href="/",alert("Bạn đã đăng xuất thành công"))})}),`
      ${D()}
        <div class="flex justify-center">
          <div class="w-[300px]"><br>
            <div class="w-[290px] flex relative">
              <img class="w-[80px] h-[80px] my-auto rounded-full object-cover image_profile" src="${o.image}" alt="...">
              <div class="add_image_profile">
                <a href="/admin/edit_content_profile"><img title="Change avatar" class="w-7 h-7 hover:scale-110" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/camera_cpziti.png"></a>
              </div>
              <div class="w-[210px]">
                <p class="text-center border-b border-black -ml-1 font-medium">${o.name}</p>
                <p class="text-center text-xs font-normal mb-1">${o.majors}</p>
                <p class="text-center text-xs text-gray-800 font-normal">Email: ${o.email}</p>
                <p class="text-center text-xs text-gray-800 font-normal">Sđt: ${o.sdt}</p>
              </div>
            </div>
            <button class="text-sm mb-5 mt-3 shadow shadow-gray-500 hover:scale-100 duration-100 hover:text-white text-gray-700 scale-90 h-7 w-[300px] sign_out">Đăng xuất</button>
            <div class="flex justify-between w-[280px] mx-auto siu">
               <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748242/dashboard_sn5l1q.png">
              <a href="/admin" class=" w-[250px] -ml-4"><button type="button" class="font-bold w-[250px] hover:scale-105 focus:scale-125 text-gray-900 btn_show">Dash board</button></a>
            </div><br>
            <div class="flex justify-between w-[280px] mx-auto siu">
              <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/user_kuv3o4.png">
              <button type="button" class="font-bold w-[290px] focus:scale-125 text-gray-900 hover:scale-105 btn_show" data-id="0">Profile</button>
            </div><br>
            <div class="flex justify-between w-[280px] mx-auto siu">
              <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/categories_uial9z.png">
              <button type="button" class="font-bold w-[290px] focus:scale-125 text-gray-900 hover:scale-105 btn_show" data-id="2">Manager categories</button>
            </div><br>
            <div class="flex justify-between w-[280px] mx-auto siu">
              <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748242/layer_a8mepb.png">
              <button type="button" class="font-bold w-[290px] focus:scale-125 text-gray-900 hover:scale-105 btn_show" data-id="3">Manager projects</button>
            </div><br>
            <div class="flex justify-between w-[280px] mx-auto siu">
              <img class="w-7 h-7 my-auto" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/color_d0eqjo.png">
              <button type="button" class="font-bold w-[290px] focus:scale-125 text-gray-900 hover:scale-105 btn_show" data-id="1">Change website color</button>
            </div><br>
          </div>
          <div id="show">
          <h1 class="text-4xl text-center mb-2 colorful_ad">Management</h1><br>
            <div class="w-[900px] ml-2 profile">
              
              <div class="all_profile w-[900px] mx-auto rounded-md pf_personality">
                <div class="flex space-x-5 ml-5 mr-5 h-[280px] relative">
                  <div class="w-[260px] h-[260px] my-auto overflow-hidden rounded-full image_profile_2">
                    <img class="w-[260px] h-[260px] object-cover my-auto hover:scale-150 duration-500 rounded-full" src="${o.image}" alt="...">
                  </div>
                  <div class="add_content_profile">
                    <a href="/admin/edit_content_profile"><img title="Update profile" class="w-10 h-7" src="https://res.cloudinary.com/darnprw0q/image/upload/v1681748243/update_profile_ul4ql8.png" alt="error"></a>
                  </div>
                  <div class="w-[600px] ">
                    <p class="text-center text-2xl font-bold text-white">-- ${o.name} --</p>
                    <p class="text-center text-lg text-blue-500 mt-2 mb-4">Majors: ${o.majors}</p>
                    <p class=" text-xl font-medium text-orange-500">Introduce:</p>
                    <textarea class="form-control bg-gray-100 text-gray-600" rows="5" placeholder="content..." id="content_profile" disabled>${o.introduce}</textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-[900px] ml-2 rounded-md mt-10 categories">
              <div class=" mt-2">
                <a href="/admin/add_ct" class="click_one"><button type="button" class="click_two">Add Category</button></a>
              </div>
              <table class="table table-dark table-sm w-[895px] mx-auto text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">List name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                  ${n.map((s,c)=>`
                      <tr class="h-[80px]">
                        <th scope="row"><p class="mt-[23px]"></p>${c+1}</th>
                        <td><p class="mt-[23px]"></p>${s.name}</td>
                        <td><img class="w-[200px] h-[80px] rounded-md mx-auto" src="${s.img[0]}"></td>
                        <td class="">
                          <p class="mt-[18px]"></p>
                          <button type="button" class="btn btn-danger remove_ct" data-id="${s.id}">Remove</button>
                          <a href="/admin/edit_ct/${s.id}"><button type="button" class="btn btn-primary">Update</button></a>
                        </td>
                      </tr>
                    `).join("")}
                </tbody>
              </table>
            </div>
            
            <div class="w-[900px] ml-2 rounded-md mt-10 projects">
              <div class=" mt-2">
              <a href="/admin/add_pr" class="click_one"><button type="button" class="click_two">Add Project</button></a>
              </div>
              <table class="table table-dark table-sm w-[895px] mx-auto text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name-PR</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                  ${e.map((s,c)=>`
                      <tr class="h-[80px]">
                        <th scope="row"><p class="mt-[23px]"></p>${c+1}</th>
                        <td><p class="mt-[23px] w-[150px]"></p>${s.name}</td>
                        <td><img class="w-[170px] h-[80px] rounded-md mx-auto" src="${s.img[0]}"></td>
                        <td><p class="mt-[23px] w-[330px]"></p>${s.content.slice(0,30)}...</td>
                        <td class="">
                          <p class="mt-[27px]"></p>
                          <button type="button" class="btn btn-danger remove_pr" data-id="${s.id}">Remove</button>
                          <a href="/admin/edit_pr/${s.id}"><button type="button" class="btn btn-primary">Update</button></a>
                        </td>
                      </tr>
                    `).join("")}
                </tbody>
              </table>
            </div>

            <div class="w-[900px] text-center ml-2 rounded-md mt-10 background">
              <div class="flex justify-center space-x-10">
                <div>
                  <h1 class="text-xl">Choose background-color that u like:</h1>
                  <input class="form-control mb-2 mt-2 w-52 h-14 mx-auto" type="color" id="color1">
                  <button class="btn btn-primary w-44 btn_background">Okay</button>
                </div>
                <div class="w-[2px] bg-white"></div>
                <div>
                  <h1 class="text-xl">Choose Text-color that u like:</h1>
                  <input class="form-control mb-2 mt-2 w-52 h-14 mx-auto" type="color" id="color2">
                  <button class="btn btn-primary w-44 btn_color">Okay</button>
                </div>
              </div>
              <p class="text-center text-xs text-white mt-16">Note that: <span class="text-red-500">Optimize your website faster and avoid filling up your color archive.</span></p>
              <div class="flex justify-center mb-4">
                <button title="Set colorful back to default" class="btn btn-danger w-80 mt-2 btn_optimize">Set to default</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div title="Về đầu trang" id="top-up">
        <img class="w-16 h-16 float-right mb-5 mt-3 mr-10" src="../image/arrow_up.png">
      </div>
    `},Hr=()=>{const[e,t]=P([]);S(function(){x.get("http://localhost:3000/category").then(({data:c})=>t(c))},[]);const[n,r]=P([]);S(function(){x.get("http://localhost:3000/projects").then(({data:c})=>r(c))},[]);const[o,i]=P([]);S(function(){const c=document.querySelectorAll(".click_category");for(let p of c)p.addEventListener("click",function(a){a.preventDefault();const u=p.dataset.id,f=n.filter(h=>h.select==u);i(f)});document.querySelector(".search").addEventListener("click",p=>{p.preventDefault();const a=document.querySelector("#valueSearch").value;n.map(u=>{u.name.toUpperCase()==a.toUpperCase()&&(window.location.href=`/post_detail/${u.id}`)})})}),console.log(o);const s=({get_data:c})=>{if(c.length>0){const p=Number(c[0].select);return`
                ${e.map(a=>{if(a.id==p)return`
                            <div class="text-lg text-white absolute h-[40px] top-[112px] bg_title_category">
                            <h1 class="leading-9 ml-5">List: <span class="colorful_title_ct">${a.name}</span></h1>
                        `}).join("")}
            <div class="show_data grid grid-cols-3 mt-10">
                ${c.map(a=>`
                        <a href="post_detail/${a.id}" class="w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md"><div class="bg-gray-200 w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md text-gray-600 show_box">
                            <p class="text-center font-medium">${a.name}</p>
                            <div class="flex space-x-5 mt-2">
                                <img class="w-14 h-14 rounded-md ml-1" src="${a.img[0]}">
                                <p class="text-xs">${a.content.slice(0,70)}...</p>
                            </div>
                            <p class="float-right mr-3 text-xs mt-3">________${a.time}</p>
                        </div></a>
                    `).join("")}
            </div>`}else return`
            <div class="mb-3">
                <form>
                    <input class="w-[700px] h-[36px] rounded-l-md outline-0 pl-2 text-black inputSearch" type="text" placeholder=" ...input Search" id="valueSearch">
                    <button class="w-[140px] h-[35px]  rounded-r-md search">Search</button>
                </form>
            </div>
            <div class=" grid grid-cols-3">
                ${n.map(p=>`
                        <a href="post_detail/${p.id}" class="w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md"><div class="bg-gray-200 w-[250px] h-32 col-span-1 mb-4 mx-auto rounded-md text-gray-600 show_box">
                            <p class="text-center font-medium">${p.name}</p>
                            <div class="flex space-x-5 mt-2">
                                <img class="w-14 h-14 rounded-md ml-1" src="${p.img[0]}">
                                <p class="text-xs">${p.content.slice(0,70)}...</p>
                            </div>
                            <p class="float-right mr-3 text-xs mt-3">________${p.time}</p>
                        </div></a>
                    `).join("")}
            </div>`};return`
        ${D()}
        <div class="mb-10"></div>
        <div class="flex justify-center space-x-5 mt-2">
            <div class="w-[337px] h-[500px] relative package_scroll">
                <div class="w-[320px] -ml-[1px] h-10 shell_ct absolute"><h2 class="text-center text-white text-2xl font-bold underline">Categories</h2></div><br><br><br>
                <div class="font-medium text-center h-8 leading-8 w-[220px] hover:text-black bg-white text-gray-500 rounded-md mx-auto hover:scale-x-105 duration-75 text-gray-600 mb-3 ml-1 click_category"><a class="w-[220px] hover:text-black text_CT mx-auto" href="#">Show All</a></div>
                
                    ${e.map(c=>`
                            <div class="font-medium text-center h-8 leading-8 w-[220px] hover:text-black bg-white text-gray-500 rounded-md mx-auto hover:scale-x-105 duration-75 text-gray-600 mb-3 ml-1 click_category" data-id="${c.id}"><a class="w-[220px] hover:text-black text_CT mx-auto" href="#">${c.name}</a></div>
                        `).join("")}
                
            </div>
            <div class="w-[850px] ">
                ${s({get_data:o})}
            </div>
        </div>
        
    `},Mr=()=>{const[e,t]=P({});return S(function(){x.get("http://localhost:3000/profile").then(({data:n})=>t(n))},[]),`
        ${D()}
        <div id="#/home"></div>
        <div class="w-[1200px] mx-auto relative mb-44 mt-32">
            <div class="w-[1200px] h-[500px] mt-10 rounded-2xl flex justify-between" id="bg_homePage">
                <div class="">
                    <div class="w-[800px] h-[200px]  text-white">
                        <h2 class="text-4xl text-center">${e.name}</h2>
                        <div class="h-[1px] w-[700px] bg-gray-400"></div><br>
                        <h3 class="text-sm text-gray-700 text-center">______________ ${e.majors} ______________</h3>
                        <p class="ml-4 mt-2 mr-1">${e.introduce}</p>
                    </div>
                    <div class=" h-[390px] ">
                        <h1 class="text-center text-2xl underline">Skills</h1>
                        <div class="isometriccontainer">
                            <div class="isometric isometric-col-1">
                                <div class="isometric-item">HTML/CSS</div>
                                <div class="isometric-item">PHP</div>
                                <div class="isometric-item">JavaScript</div>
                            </div>
                            <div class="isometric isometric-col-2">
                                <div class="isometric-item">MySQL</div>
                                <div class="isometric-item">Node-JS</div>
                                <div class="isometric-item">TypeScript</div>
                            </div>
                            <div class="isometric isometric-col-3">
                                <div class="isometric-item">Git</div>
                                <div class="isometric-item">Bootstrap</div>
                                <div class="isometric-item">Jquery</div>
                            </div>
                            <div class="isometric isometric-col-4">
                                <div class="isometric-item">API</div>
                                <div class="isometric-item">React</div>
                                <div class="isometric-item">PHP</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class=" rounded-full mt-[26px] text-black mr-[25px] relative box_image">
                    <div class="img_profile_home"><img class="w-[280px]  h-[380px] top-[25px] left-[35px] absolute" src="${e.image}"></div>
                </div>
            </div>
        </div>

        
        <div id="#/porfolio" class="h-20"></div>
        <div class="text-gray-200 text-4xl text-center">Portfolio</div>
        <div class="w-[1200px] h-96 mt-14 mx-auto flex justify-center space-x-20 ">
            <a class="w-[200px] h-52" href="https://fptcloud.com/javascript/">
                <div class="w-[220px] h-[330px] hover:text-black border siu2 rounded-xl hover:scale-110 duration-200 my-auto">
                    <img class="w-[200px] h-52 rounded-xl mt-2 mx-auto" src="https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/kienthuccoban/jav16012625211108.jpg">
                    <div class="ml-1 mr-1 mt-2">
                        <p>Javascript chính là một ngôn ngữ lập trình web rất phổ biến ngày nay ...</p>
                    </div>
                </div>
            </a>
            <a class="w-[200px] h-52" href="https://topdev.vn/blog/reactjs-nhung-dieu-ban-can-phai-biet/">
                <div class="w-[220px] h-[330px] hover:text-black border siu2 rounded-xl hover:scale-110 duration-200 my-auto">
                    <img class="w-[200px] h-52 rounded-xl mt-2 mx-auto" src="https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg">
                    <div class="ml-1 mr-1 mt-2 text-sm">
                        <p>ReactJS là một thư viện JavaScript mã nguồn mở được thiết kế bởi Facebook để tạo ra những ứng dụng web hấp dẫn ...</p>
                    </div>
                </div>
            </a>
            <a class="w-[200px] h-52" href="https://vietnix.vn/nodejs-la-gi/">
                <div class="w-[220px] h-[330px] hover:text-black border siu2 rounded-xl hover:scale-110 duration-200 my-auto">
                    <img class="w-[200px] h-52 rounded-xl mt-2 mx-auto" src="https://wiki.tino.org/wp-content/uploads/2021/07/word-image-1155.png">
                    <div class="ml-1 mr-1 mt-2">
                        <p>Node.js® là môi trường thời gian chạy JavaScript đa nền tảng, mã nguồn mở ...</p>
                    </div>
                </div>
            </a>
            <a class="w-[200px] h-52" href="https://angular.io/guide/setup-local">
                <div class="w-[220px] h-[330px] hover:text-black border siu2 rounded-xl hover:scale-110 duration-200 my-auto">
                    <img class="w-[200px] h-52 rounded-xl mt-2 mx-auto" src="https://d2ms8rpfqc4h24.cloudfront.net/whats_new_in_angular15_9af012d463.jpg">
                    <div class="ml-1 mr-1 mt-2">
                        <p>Angular là một nền tảng để xây dựng các ứng dụng web dành cho thiết bị di động và máy tính để bàn ...</p>
                    </div>
                </div>
            </a>
        </div>
        
        <div id="#/contact" class="h-24"></div>
        <div id="#/contact" class="text-gray-200 text-4xl text-center">Contact</div>
        <div class="w-[1200px] mt-14 h-96 mx-auto crust">
            <a class="w-20 h-20 inside_shell" title="email" href="mailto:vole543215@gmail.com"><img class="w-20 h-20" src="../image/contact/email.png"></a>
            <a class="w-20 h-20 inside_shell" title="facebook" href="https://www.facebook.com/"><img class="w-20 h-20" src="../image/contact/facebook.png"></a>
            <a class="w-20 h-20 inside_shell" title="github" href="https://github.com/levanvo"><img class="w-20 h-20" src="../image/contact/github (1).png"></a>
            <a class="w-20 h-20 inside_shell" title="telephone-call" href="tel:0961556217"><img class="w-20 h-20" src="../image/contact/telephone-call.png"></a>
            <a class="w-20 h-20 inside_shell" title="web-link" href="web-link"><img class="w-20 h-20" src="../image/contact/web-link.png"></a>
            <a class="w-20 h-20 inside_shell" title="zalo" href="http://zalo.me/0961556217"><img class="w-20 h-20" src="../image/contact/zalo.png"></a>
        </div>




        <div class="h-20 w-4"></div>
    `},zr=({data:e})=>{e.id;const[t,n]=P({});S(()=>{x.get("http://localhost:3000/projects/"+e.id).then(({data:a})=>n(a))},[]);const[r,o]=P({});S(()=>{x.get("http://localhost:3000/category/").then(({data:a})=>{a.map(u=>{u.id==t.select&&o(u)})})},[t]);const[i,s]=P([]);S(()=>{x.get("http://localhost:3000/projects").then(({data:a})=>s(a))},[]);const[c,p]=P([]);return S(()=>{const a=i.filter(u=>u.select==r.id);p(a)},[r]),console.log(c),`
        ${D()}
        
        <div class="">
            <h1 class="text-4xl mt-1 ml-5 mb-10">PostDetail Page</h1>
            <div class="flex space-x-10 w-[1000px] justify-center mx-auto rounded-xl">
                <div class="border-2 border-white rounded-xl">
                     <img class="w-80 h-80 rounded-xl" src="${t==null?void 0:t.img}" alt="">
                </div>
                <div class="w-[640px] bg-white rounded-xl">
                    <h2 class="text-center font-bold text-gray-700 text-xl underline text-details">${t==null?void 0:t.name}</h2>
                    <div class="w-[620px] rounded-xl h-[250px] mx-auto mt-4 text-gray-500 bg-gray-300">
                        <p class="h-2"></p>
                        <p class="text-sm ml-3">Author: <span>${t==null?void 0:t.author}</span></p>
                        <p class="text-sm ml-3 mt-1">List: <span>${r==null?void 0:r.name}</span></p>

                        <p class="text-sm ml-3 mt-1">Content:</span></p>
                        <textarea class="bg-gray-400 w-[560px] h-[130px] ml-10 rounded-sm disabled"> ${t==null?void 0:t.content}</textarea>
                        <p class="text-sm ml-3 mt-1">Date: <span>${t==null?void 0:t.time}</span></p>
                    </div>
                </div>
            </div>
            <div class="w-[1000px] mx-auto">
                <h3 class="text-xl text-red-500 mt-1 mb-[2px]">Related items:</h3>
            </div>
            <div class="w-[1000px] h-44 mx-auto  flex box-shell">
                ${c.map(a=>`
                        <a href="/post_detail/${a.id}" class="w-[250px] my-auto h-32 mx-auto rounded-md"><div class="bg-gray-200 my-auto w-[250px] hover:scale-100 scale-90 duration-200 h-32 mx-auto rounded-md text-gray-600 ">
                            <h2 class="text-center font-bold">${a==null?void 0:a.name}</h2>
                            <img class="w-[220px] h-[90px] rounded-md mt-2 mx-auto" src="${a.img}" alt="Error image !">
                        </div></a>
                    `).join("")}
            </div>
        </div>
    `},C=document.querySelector("#app");k.on("/admin/**",()=>{},{before:e=>{const t=JSON.parse(localStorage.getItem("checkState"));(t==null?void 0:t.role)==!0?e():(alert("Chạy ngay đi trước khi ...."),window.location.href="/")}});k.on("/",()=>N(Mr,C));k.on("/sign-in-up",()=>N(bn,C));k.on("/post_detail/:id",e=>N(()=>zr(e),C));k.on("/category",()=>N(Hr,C));k.on("/admin",()=>N(Br,C));k.on("/admin/add_pr",()=>N($r,C));k.on("/admin/add_ct",()=>N(Fr,C));k.on("/admin/edit_content_profile",()=>N(Ir,C));k.on("/admin/edit_ct/:id",e=>N(()=>Dr(e),C));k.on("/admin/edit_pr/:id",e=>N(()=>Ur(e),C));const Jr=function(){return`
        <h1 class="text-center text-4xl text-green-500 notfound">Not find anythings !!</h1>
    `};k.notFound(N(Jr,C));k.resolve();
