function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}function i(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function _(t){return E(t," ")}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function w(t,e,n){t.classList[n?"add":"remove"](e)}function A(t,e=document.body){return Array.from(e.querySelectorAll(t))}let P;function L(t){P=t}function R(t,e){(function(){if(!P)throw new Error("Function called outside component initialization");return P})().$$.context.set(t,e)}const k=[],C=[],j=[],N=[],O=Promise.resolve();let q=!1;function U(t){j.push(t)}let I=!1;const D=new Set;function H(){if(!I){I=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];L(e),B(e.$$)}for(k.length=0;C.length;)C.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];D.has(e)||(D.add(e),e())}j.length=0}while(k.length);for(;N.length;)N.pop()();q=!1,I=!1,D.clear()}}function B(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const T=new Set;let J;function V(){J={r:0,c:[],p:J}}function K(){J.r||s(J.c),J=J.p}function M(t,e){t&&t.i&&(T.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),J.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function F(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Y(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(U)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(k.push(t),q||(q=!0,O.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,o,a,c,i,l=[-1]){const u=P;L(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),d&&Z(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=y(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&M(e.$$.fragment),Y(e,n.target,n.anchor),H()}L(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const nt=[];function rt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const st={},ot=()=>({});function at(e){let n,r,s,o,a,c,i,l,u,$,x,S,w,A,P,L,R,k,C,j,N,O,q,U,I,D,H,B,T,J,V;return{c(){n=d("nav"),r=d("ul"),s=d("li"),o=d("a"),a=m("home"),i=g(),l=d("li"),u=d("a"),$=m("typography"),S=g(),w=d("li"),A=d("a"),P=m("spacing"),R=g(),k=d("li"),C=d("a"),j=m("button"),O=g(),q=d("li"),U=d("a"),I=m("input"),H=g(),B=d("li"),T=d("a"),J=m("in-use"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=y(n);r=b(e,"UL",{class:!0});var c=y(r);s=b(c,"LI",{class:!0});var f=y(s);o=b(f,"A",{"aria-current":!0,href:!0,class:!0});var p=y(o);a=E(p,"home"),p.forEach(h),f.forEach(h),i=_(c),l=b(c,"LI",{class:!0});var d=y(l);u=b(d,"A",{"aria-current":!0,href:!0,class:!0});var m=y(u);$=E(m,"typography"),m.forEach(h),d.forEach(h),S=_(c),w=b(c,"LI",{class:!0});var g=y(w);A=b(g,"A",{"aria-current":!0,href:!0,class:!0});var v=y(A);P=E(v,"spacing"),v.forEach(h),g.forEach(h),R=_(c),k=b(c,"LI",{class:!0});var x=y(k);C=b(x,"A",{"aria-current":!0,href:!0,class:!0});var L=y(C);j=E(L,"button"),L.forEach(h),x.forEach(h),O=_(c),q=b(c,"LI",{class:!0});var N=y(q);U=b(N,"A",{"aria-current":!0,href:!0,class:!0});var D=y(U);I=E(D,"input"),D.forEach(h),N.forEach(h),H=_(c),B=b(c,"LI",{class:!0});var V=y(B);T=b(V,"A",{"aria-current":!0,href:!0,class:!0});var K=y(T);J=E(K,"in-use"),K.forEach(h),V.forEach(h),c.forEach(h),e.forEach(h),this.h()},h(){v(o,"aria-current",c=void 0===e[0]?"page":void 0),v(o,"href","."),v(o,"class","svelte-18k4x53"),v(s,"class","svelte-18k4x53"),v(u,"aria-current",x="typography"===e[0]?"page":void 0),v(u,"href","typography"),v(u,"class","svelte-18k4x53"),v(l,"class","svelte-18k4x53"),v(A,"aria-current",L="spacing"===e[0]?"page":void 0),v(A,"href","spacing"),v(A,"class","svelte-18k4x53"),v(w,"class","svelte-18k4x53"),v(C,"aria-current",N="button"===e[0]?"page":void 0),v(C,"href","button"),v(C,"class","svelte-18k4x53"),v(k,"class","svelte-18k4x53"),v(U,"aria-current",D="input"===e[0]?"page":void 0),v(U,"href","input"),v(U,"class","svelte-18k4x53"),v(q,"class","svelte-18k4x53"),v(T,"aria-current",V="in-use"===e[0]?"page":void 0),v(T,"href","in-use"),v(T,"class","svelte-18k4x53"),v(B,"class","svelte-18k4x53"),v(r,"class","svelte-18k4x53"),v(n,"class","svelte-18k4x53")},m(t,e){p(t,n,e),f(n,r),f(r,s),f(s,o),f(o,a),f(r,i),f(r,l),f(l,u),f(u,$),f(r,S),f(r,w),f(w,A),f(A,P),f(r,R),f(r,k),f(k,C),f(C,j),f(r,O),f(r,q),f(q,U),f(U,I),f(r,H),f(r,B),f(B,T),f(T,J)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&v(o,"aria-current",c),1&e&&x!==(x="typography"===t[0]?"page":void 0)&&v(u,"aria-current",x),1&e&&L!==(L="spacing"===t[0]?"page":void 0)&&v(A,"aria-current",L),1&e&&N!==(N="button"===t[0]?"page":void 0)&&v(C,"aria-current",N),1&e&&D!==(D="input"===t[0]?"page":void 0)&&v(U,"aria-current",D),1&e&&V!==(V="in-use"===t[0]?"page":void 0)&&v(T,"aria-current",V)},i:t,o:t,d(t){t&&h(n)}}}function ct(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class it extends et{constructor(t){super(),tt(this,t,ct,at,a,{segment:0})}}function lt(t){let e,n,r;const s=new it({props:{segment:t[0]}}),o=t[2].default,a=c(o,t,t[1],null);return{c(){W(s.$$.fragment),e=g(),n=d("main"),a&&a.c(),this.h()},l(t){X(s.$$.fragment,t),e=_(t),n=b(t,"MAIN",{class:!0});var r=y(n);a&&a.l(r),r.forEach(h),this.h()},h(){v(n,"class","svelte-1hdk33b")},m(t,o){Y(s,t,o),p(t,e,o),p(t,n,o),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),a&&a.p&&2&e&&a.p(i(o,t,t[1],null),l(o,t[1],e,null))},i(t){r||(M(s.$$.fragment,t),M(a,t),r=!0)},o(t){z(s.$$.fragment,t),z(a,t),r=!1},d(t){Q(s,t),t&&h(e),t&&h(n),a&&a.d(t)}}}function ut(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class ft extends et{constructor(t){super(),tt(this,t,ut,lt,a,{segment:0})}}function pt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=b(t,"PRE",{});var s=y(e);n=E(s,r),s.forEach(h)},m(t,r){p(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&h(e)}}}function ht(e){let n,r,s,o,a,c,i,l,u,S=e[1].message+"";document.title=n=e[0];let w=e[2]&&e[1].stack&&pt(e);return{c(){r=g(),s=d("h1"),o=m(e[0]),a=g(),c=d("p"),i=m(S),l=g(),w&&w.c(),u=$(),this.h()},l(t){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),r=_(t),s=b(t,"H1",{class:!0});var n=y(s);o=E(n,e[0]),n.forEach(h),a=_(t),c=b(t,"P",{class:!0});var f=y(c);i=E(f,S),f.forEach(h),l=_(t),w&&w.l(t),u=$(),this.h()},h(){v(s,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6")},m(t,e){p(t,r,e),p(t,s,e),f(s,o),p(t,a,e),p(t,c,e),f(c,i),p(t,l,e),w&&w.m(t,e),p(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(o,t[0]),2&e&&S!==(S=t[1].message+"")&&x(i,S),t[2]&&t[1].stack?w?w.p(t,e):(w=pt(t),w.c(),w.m(u.parentNode,u)):w&&(w.d(1),w=null)},i:t,o:t,d(t){t&&h(r),t&&h(s),t&&h(a),t&&h(c),t&&h(l),w&&w.d(t),t&&h(u)}}}function dt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class mt extends et{constructor(t){super(),tt(this,t,dt,ht,a,{status:0,error:1})}}function gt(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&W(c.$$.fragment),n=$()},l(t){c&&X(c.$$.fragment,t),n=$()},m(t,e){c&&Y(c,t,e),p(t,n,e),r=!0},p(t,e){const r=16&e?F(s,[G(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){V();const t=c;z(t.$$.fragment,1,0,()=>{Q(t,1)}),K()}o?(W((c=new o(a())).$$.fragment),M(c.$$.fragment,1),Y(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&M(c.$$.fragment,t),r=!0)},o(t){c&&z(c.$$.fragment,t),r=!1},d(t){t&&h(n),c&&Q(c,t)}}}function $t(t){let e;const n=new mt({props:{error:t[0],status:t[1]}});return{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,r){Y(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(M(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){Q(n,t)}}}function vt(t){let e,n,r,s;const o=[$t,gt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),p(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(V(),z(a[i],1,1,()=>{a[i]=null}),K(),n=a[e],n||(n=a[e]=o[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){s||(M(n),s=!0)},o(t){z(n),s=!1},d(t){a[e].d(t),t&&h(r)}}}function yt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new ft({props:s});return{c(){W(o.$$.fragment)},l(t){X(o.$$.fragment,t)},m(t,e){Y(o,t,e),n=!0},p(t,[e]){const n=12&e?F(r,[4&e&&{segment:t[2][0]},8&e&&G(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(M(o.$$.fragment,t),n=!0)},o(t){z(o.$$.fragment,t),n=!1},d(t){Q(o,t)}}}function bt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;return R(st,r),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[s,o,a,c,i,r]}class Et extends et{constructor(t){super(),tt(this,t,bt,yt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const _t=[],xt=[{js:()=>import("./index.e6e05bcf.js"),css:[]},{js:()=>import("./typography.76c13167.js"),css:[]},{js:()=>import("./spacing.ea91e304.js"),css:[]},{js:()=>import("./button.5fa15168.js"),css:[]},{js:()=>import("./in-use.8b1847ba.js"),css:[]},{js:()=>import("./input.88d98cfc.js"),css:[]}],St=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/typography\/?$/,parts:[{i:1}]},{pattern:/^\/spacing\/?$/,parts:[{i:2}]},{pattern:/^\/button\/?$/,parts:[{i:3}]},{pattern:/^\/in-use\/?$/,parts:[{i:4}]},{pattern:/^\/input\/?$/,parts:[{i:5}]}];const wt="undefined"!=typeof __SAPPER__&&__SAPPER__;let At,Pt,Lt,Rt=!1,kt=[],Ct="{}";const jt={page:rt({}),preloading:rt(null),session:rt(wt&&wt.session)};let Nt,Ot;jt.session.subscribe(async t=>{if(Nt=t,!Rt)return;Ot=!0;const e=Jt(new URL(location.href)),n=Pt={},{redirect:r,props:s,branch:o}=await zt(e);n===Pt&&await Mt(r,o,s,e.page)});let qt,Ut=null;let It,Dt=1;const Ht="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Bt={};function Tt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(wt.baseUrl))return null;let e=t.pathname.slice(wt.baseUrl.length);if(""===e&&(e="/"),!_t.some(t=>t.test(e)))for(let n=0;n<St.length;n+=1){const r=St[n],s=r.pattern.exec(e);if(s){const n=Tt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Vt(){return{x:pageXOffset,y:pageYOffset}}async function Kt(t,e,n,r){if(e)It=e;else{const t=Vt();Bt[It]=t,e=It=++Dt,Bt[It]=n?t:{x:0,y:0}}It=e,At&&jt.preloading.set(!0);const s=Ut&&Ut.href===t.href?Ut.promise:zt(t);Ut=null;const o=Pt={},{redirect:a,props:c,branch:i}=await s;if(o===Pt&&(await Mt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Bt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Bt[It]=t,t&&scrollTo(t.x,t.y)}}async function Mt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Jt(new URL(t,document.baseURI));return n?(Ht[e.replaceState?"replaceState":"pushState"]({id:It},"",t),Kt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(jt.page.set(r),jt.preloading.set(!1),At)At.$set(n);else{n.stores={page:{subscribe:jt.page.subscribe},preloading:{subscribe:jt.preloading.subscribe},session:jt.session},n.level0={props:await Lt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Gt(t.nextSibling);Gt(t),Gt(e)}At=new Et({target:qt,props:n,hydrate:!0})}kt=e,Ct=JSON.stringify(r.query),Rt=!0,Ot=!1}async function zt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;Lt||(Lt=wt.preloaded[0]||ot.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Nt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ct)return!0;const s=kt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ot&&!u&&kt[c]&&kt[c].part===e.i)return kt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ft);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(xt[e.i]);let m;return m=Rt||!wt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Nt):{}:wt.preloaded[c+1],o[`level${p}`]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Ft(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Gt(t){t.parentNode.removeChild(t)}function Wt(t){const e=Jt(new URL(t,document.baseURI));if(e)return Ut&&t===Ut.href||function(t,e){Ut={href:t,promise:e}}(t,zt(e)),Ut.promise}let Xt;function Yt(t){clearTimeout(Xt),Xt=setTimeout(()=>{Qt(t)},20)}function Qt(t){const e=te(t.target);e&&"prefetch"===e.rel&&Wt(e.href)}function Zt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=te(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Jt(s);if(o){Kt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Ht.pushState({id:It},"",s.href)}}function te(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ee(t){if(Bt[It]=Vt(),t.state){const e=Jt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else Dt=Dt+1,function(t){It=t}(Dt),Ht.replaceState({id:It},"",location.href)}var ne;ne={target:document.querySelector("#sapper")},"scrollRestoration"in Ht&&(Ht.scrollRestoration="manual"),function(t){qt=t}(ne.target),addEventListener("click",Zt),addEventListener("popstate",ee),addEventListener("touchstart",Qt),addEventListener("mousemove",Yt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ht.replaceState({id:Dt},"",e);const n=new URL(location.href);if(wt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=wt;Lt||(Lt=o&&o[0]),Mt(null,[],{error:c,status:a,session:s,level0:{props:Lt},level1:{props:{status:a,error:c},component:mt},segments:o},{host:e,path:n,query:Tt(r),params:{}})}();const r=Jt(n);return r?Kt(r,Dt,!0,t):void 0});export{V as A,K as B,u as C,x as D,t as E,et as S,b as a,y as b,c,h as d,d as e,v as f,S as g,p as h,tt as i,i as j,l as k,M as l,z as m,g as n,W as o,_ as p,A as q,X as r,a as s,w as t,Y as u,Q as v,m as w,E as x,f as y,$ as z};