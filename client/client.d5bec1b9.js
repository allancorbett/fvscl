function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}function i(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function _(t){return E(t," ")}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function w(t,e,n){t.classList[n?"add":"remove"](e)}function A(t,e=document.body){return Array.from(e.querySelectorAll(t))}let P;function L(t){P=t}function R(){if(!P)throw new Error("Function called outside component initialization");return P}function k(t){R().$$.on_mount.push(t)}const C=[],j=[],N=[],O=[],q=Promise.resolve();let U=!1;function I(t){N.push(t)}let D=!1;const H=new Set;function B(){if(!D){D=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];L(e),T(e.$$)}for(C.length=0;j.length;)j.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];H.has(e)||(H.add(e),e())}N.length=0}while(C.length);for(;O.length;)O.pop()();U=!1,D=!1,H.clear()}}function T(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const J=new Set;let V;function K(){V={r:0,c:[],p:V}}function M(){V.r||s(V.c),V=V.p}function z(t,e){t&&t.i&&(J.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),V.c.push(()=>{J.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const G="undefined"!=typeof window?window:global;function W(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function Q(t,e){t&&t.l(e)}function Z(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),I(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(I)}function tt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(C.push(t),U||(U=!0,q.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,o,a,c,i,l=[-1]){const u=P;L(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),d&&et(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=y(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&z(e.$$.fragment),Z(e,n.target,n.anchor),B()}L(u)}class rt{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const st=[];function ot(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!st.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const at={},ct=()=>({});function it(e){let n,r,s,o,a,c,i,l,u,$,x,S,w,A,P,L,R,k,C,j,N,O,q,U,I,D,H,B,T,J,V;return{c(){n=d("nav"),r=d("ul"),s=d("li"),o=d("a"),a=m("home"),i=g(),l=d("li"),u=d("a"),$=m("typography"),S=g(),w=d("li"),A=d("a"),P=m("spacing"),R=g(),k=d("li"),C=d("a"),j=m("button"),O=g(),q=d("li"),U=d("a"),I=m("input"),H=g(),B=d("li"),T=d("a"),J=m("in-use"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=y(n);r=b(e,"UL",{class:!0});var c=y(r);s=b(c,"LI",{class:!0});var f=y(s);o=b(f,"A",{"aria-current":!0,href:!0,class:!0});var p=y(o);a=E(p,"home"),p.forEach(h),f.forEach(h),i=_(c),l=b(c,"LI",{class:!0});var d=y(l);u=b(d,"A",{"aria-current":!0,href:!0,class:!0});var m=y(u);$=E(m,"typography"),m.forEach(h),d.forEach(h),S=_(c),w=b(c,"LI",{class:!0});var g=y(w);A=b(g,"A",{"aria-current":!0,href:!0,class:!0});var v=y(A);P=E(v,"spacing"),v.forEach(h),g.forEach(h),R=_(c),k=b(c,"LI",{class:!0});var x=y(k);C=b(x,"A",{"aria-current":!0,href:!0,class:!0});var L=y(C);j=E(L,"button"),L.forEach(h),x.forEach(h),O=_(c),q=b(c,"LI",{class:!0});var N=y(q);U=b(N,"A",{"aria-current":!0,href:!0,class:!0});var D=y(U);I=E(D,"input"),D.forEach(h),N.forEach(h),H=_(c),B=b(c,"LI",{class:!0});var V=y(B);T=b(V,"A",{"aria-current":!0,href:!0,class:!0});var K=y(T);J=E(K,"in-use"),K.forEach(h),V.forEach(h),c.forEach(h),e.forEach(h),this.h()},h(){v(o,"aria-current",c=void 0===e[0]?"page":void 0),v(o,"href","."),v(o,"class","svelte-18k4x53"),v(s,"class","svelte-18k4x53"),v(u,"aria-current",x="typography"===e[0]?"page":void 0),v(u,"href","typography"),v(u,"class","svelte-18k4x53"),v(l,"class","svelte-18k4x53"),v(A,"aria-current",L="spacing"===e[0]?"page":void 0),v(A,"href","spacing"),v(A,"class","svelte-18k4x53"),v(w,"class","svelte-18k4x53"),v(C,"aria-current",N="button"===e[0]?"page":void 0),v(C,"href","button"),v(C,"class","svelte-18k4x53"),v(k,"class","svelte-18k4x53"),v(U,"aria-current",D="input"===e[0]?"page":void 0),v(U,"href","input"),v(U,"class","svelte-18k4x53"),v(q,"class","svelte-18k4x53"),v(T,"aria-current",V="in-use"===e[0]?"page":void 0),v(T,"href","in-use"),v(T,"class","svelte-18k4x53"),v(B,"class","svelte-18k4x53"),v(r,"class","svelte-18k4x53"),v(n,"class","svelte-18k4x53")},m(t,e){p(t,n,e),f(n,r),f(r,s),f(s,o),f(o,a),f(r,i),f(r,l),f(l,u),f(u,$),f(r,S),f(r,w),f(w,A),f(A,P),f(r,R),f(r,k),f(k,C),f(C,j),f(r,O),f(r,q),f(q,U),f(U,I),f(r,H),f(r,B),f(B,T),f(T,J)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&v(o,"aria-current",c),1&e&&x!==(x="typography"===t[0]?"page":void 0)&&v(u,"aria-current",x),1&e&&L!==(L="spacing"===t[0]?"page":void 0)&&v(A,"aria-current",L),1&e&&N!==(N="button"===t[0]?"page":void 0)&&v(C,"aria-current",N),1&e&&D!==(D="input"===t[0]?"page":void 0)&&v(U,"aria-current",D),1&e&&V!==(V="in-use"===t[0]?"page":void 0)&&v(T,"aria-current",V)},i:t,o:t,d(t){t&&h(n)}}}function lt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ut extends rt{constructor(t){super(),nt(this,t,lt,it,a,{segment:0})}}function ft(t){let e,n,r;const s=new ut({props:{segment:t[0]}}),o=t[2].default,a=c(o,t,t[1],null);return{c(){Y(s.$$.fragment),e=g(),n=d("main"),a&&a.c(),this.h()},l(t){Q(s.$$.fragment,t),e=_(t),n=b(t,"MAIN",{class:!0});var r=y(n);a&&a.l(r),r.forEach(h),this.h()},h(){v(n,"class","svelte-1hdk33b")},m(t,o){Z(s,t,o),p(t,e,o),p(t,n,o),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),a&&a.p&&2&e&&a.p(i(o,t,t[1],null),l(o,t[1],e,null))},i(t){r||(z(s.$$.fragment,t),z(a,t),r=!0)},o(t){F(s.$$.fragment,t),F(a,t),r=!1},d(t){tt(s,t),t&&h(e),t&&h(n),a&&a.d(t)}}}function pt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class ht extends rt{constructor(t){super(),nt(this,t,pt,ft,a,{segment:0})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=b(t,"PRE",{});var s=y(e);n=E(s,r),s.forEach(h)},m(t,r){p(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&h(e)}}}function mt(e){let n,r,s,o,a,c,i,l,u,S=e[1].message+"";document.title=n=e[0];let w=e[2]&&e[1].stack&&dt(e);return{c(){r=g(),s=d("h1"),o=m(e[0]),a=g(),c=d("p"),i=m(S),l=g(),w&&w.c(),u=$(),this.h()},l(t){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),r=_(t),s=b(t,"H1",{class:!0});var n=y(s);o=E(n,e[0]),n.forEach(h),a=_(t),c=b(t,"P",{class:!0});var f=y(c);i=E(f,S),f.forEach(h),l=_(t),w&&w.l(t),u=$(),this.h()},h(){v(s,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6")},m(t,e){p(t,r,e),p(t,s,e),f(s,o),p(t,a,e),p(t,c,e),f(c,i),p(t,l,e),w&&w.m(t,e),p(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(o,t[0]),2&e&&S!==(S=t[1].message+"")&&x(i,S),t[2]&&t[1].stack?w?w.p(t,e):(w=dt(t),w.c(),w.m(u.parentNode,u)):w&&(w.d(1),w=null)},i:t,o:t,d(t){t&&h(r),t&&h(s),t&&h(a),t&&h(c),t&&h(l),w&&w.d(t),t&&h(u)}}}function gt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class $t extends rt{constructor(t){super(),nt(this,t,gt,mt,a,{status:0,error:1})}}function vt(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&Y(c.$$.fragment),n=$()},l(t){c&&Q(c.$$.fragment,t),n=$()},m(t,e){c&&Z(c,t,e),p(t,n,e),r=!0},p(t,e){const r=16&e?W(s,[X(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){K();const t=c;F(t.$$.fragment,1,0,()=>{tt(t,1)}),M()}o?(Y((c=new o(a())).$$.fragment),z(c.$$.fragment,1),Z(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&z(c.$$.fragment,t),r=!0)},o(t){c&&F(c.$$.fragment,t),r=!1},d(t){t&&h(n),c&&tt(c,t)}}}function yt(t){let e;const n=new $t({props:{error:t[0],status:t[1]}});return{c(){Y(n.$$.fragment)},l(t){Q(n.$$.fragment,t)},m(t,r){Z(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(z(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){tt(n,t)}}}function bt(t){let e,n,r,s;const o=[yt,vt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),p(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(K(),F(a[i],1,1,()=>{a[i]=null}),M(),n=a[e],n||(n=a[e]=o[e](t),n.c()),z(n,1),n.m(r.parentNode,r))},i(t){s||(z(n),s=!0)},o(t){F(n),s=!1},d(t){a[e].d(t),t&&h(r)}}}function Et(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[bt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new ht({props:s});return{c(){Y(o.$$.fragment)},l(t){Q(o.$$.fragment,t)},m(t,e){Z(o,t,e),n=!0},p(t,[e]){const n=12&e?W(r,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(z(o.$$.fragment,t),n=!0)},o(t){F(o.$$.fragment,t),n=!1},d(t){tt(o,t)}}}function _t(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=at,u=r,R().$$.context.set(l,u),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[s,o,a,c,i,r]}class xt extends rt{constructor(t){super(),nt(this,t,_t,Et,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const St=[],wt=[{js:()=>import("./index.9d2db90c.js"),css:[]},{js:()=>import("./typography.80d72b3a.js"),css:[]},{js:()=>import("./spacing.9b7fd208.js"),css:[]},{js:()=>import("./button.7da59b92.js"),css:[]},{js:()=>import("./in-use.87a5e229.js"),css:[]},{js:()=>import("./input.815db218.js"),css:[]}],At=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/typography\/?$/,parts:[{i:1}]},{pattern:/^\/spacing\/?$/,parts:[{i:2}]},{pattern:/^\/button\/?$/,parts:[{i:3}]},{pattern:/^\/in-use\/?$/,parts:[{i:4}]},{pattern:/^\/input\/?$/,parts:[{i:5}]}];const Pt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Lt,Rt,kt,Ct=!1,jt=[],Nt="{}";const Ot={page:ot({}),preloading:ot(null),session:ot(Pt&&Pt.session)};let qt,Ut;Ot.session.subscribe(async t=>{if(qt=t,!Ct)return;Ut=!0;const e=Kt(new URL(location.href)),n=Rt={},{redirect:r,props:s,branch:o}=await Gt(e);n===Rt&&await Ft(r,o,s,e.page)});let It,Dt=null;let Ht,Bt=1;const Tt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Jt={};function Vt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Kt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Pt.baseUrl))return null;let e=t.pathname.slice(Pt.baseUrl.length);if(""===e&&(e="/"),!St.some(t=>t.test(e)))for(let n=0;n<At.length;n+=1){const r=At[n],s=r.pattern.exec(e);if(s){const n=Vt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Mt(){return{x:pageXOffset,y:pageYOffset}}async function zt(t,e,n,r){if(e)Ht=e;else{const t=Mt();Jt[Ht]=t,e=Ht=++Bt,Jt[Ht]=n?t:{x:0,y:0}}Ht=e,Lt&&Ot.preloading.set(!0);const s=Dt&&Dt.href===t.href?Dt.promise:Gt(t);Dt=null;const o=Rt={},{redirect:a,props:c,branch:i}=await s;if(o===Rt&&(await Ft(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Jt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Jt[Ht]=t,t&&scrollTo(t.x,t.y)}}async function Ft(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Kt(new URL(t,document.baseURI));return n?(Tt[e.replaceState?"replaceState":"pushState"]({id:Ht},"",t),zt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ot.page.set(r),Ot.preloading.set(!1),Lt)Lt.$set(n);else{n.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},n.level0={props:await kt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Xt(t.nextSibling);Xt(t),Xt(e)}Lt=new xt({target:It,props:n,hydrate:!0})}jt=e,Nt=JSON.stringify(r.query),Ct=!0,Ut=!1}async function Gt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;kt||(kt=Pt.preloaded[0]||ct.call(a,{host:n.host,path:n.path,query:n.query,params:{}},qt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Nt)return!0;const s=jt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ut&&!u&&jt[c]&&jt[c].part===e.i)return jt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Wt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(wt[e.i]);let m;return m=Ct||!Pt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},qt):{}:Pt.preloaded[c+1],o[`level${p}`]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Wt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Xt(t){t.parentNode.removeChild(t)}function Yt(t){const e=Kt(new URL(t,document.baseURI));if(e)return Dt&&t===Dt.href||function(t,e){Dt={href:t,promise:e}}(t,Gt(e)),Dt.promise}let Qt;function Zt(t){clearTimeout(Qt),Qt=setTimeout(()=>{te(t)},20)}function te(t){const e=ne(t.target);e&&"prefetch"===e.rel&&Yt(e.href)}function ee(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ne(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Kt(s);if(o){zt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Tt.pushState({id:Ht},"",s.href)}}function ne(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function re(t){if(Jt[Ht]=Mt(),t.state){const e=Kt(new URL(location.href));e?zt(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){Ht=t}(Bt),Tt.replaceState({id:Ht},"",location.href)}var se;se={target:document.querySelector("#sapper")},"scrollRestoration"in Tt&&(Tt.scrollRestoration="manual"),function(t){It=t}(se.target),addEventListener("click",ee),addEventListener("popstate",re),addEventListener("touchstart",te),addEventListener("mousemove",Zt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Tt.replaceState({id:Bt},"",e);const n=new URL(location.href);if(Pt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Pt;kt||(kt=o&&o[0]),Ft(null,[],{error:c,status:a,session:s,level0:{props:kt},level1:{props:{status:a,error:c},component:$t},segments:o},{host:e,path:n,query:Vt(r),params:{}})}();const r=Kt(n);return r?zt(r,Bt,!0,t):void 0});export{i as A,l as B,$ as C,K as D,M as E,u as F,t as G,rt as S,g as a,_ as b,Y as c,h as d,Q as e,p as f,F as g,tt as h,nt as i,G as j,d as k,b as l,Z as m,y as n,k as o,v as p,A as q,m as r,a as s,z as t,E as u,f as v,x as w,c as x,S as y,w as z};
