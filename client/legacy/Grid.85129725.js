import{_ as s,a as o,b as t,c as n,i,s as c,d as a,S as l,C as u,u as e,v as f,w as r,g as h,x as v,D as d,E as $,k as p,l as g,F as m,G as j,t as x,n as D}from"./client.1293f85f.js";function E(s){var o,t,n=s[4].default,i=u(n,s,s[3],null);return{c:function(){o=e("div"),i&&i.c(),this.h()},l:function(s){o=f(s,"DIV",{cols:!0,style:!0,class:!0});var t=r(o);i&&i.l(t),t.forEach(h),this.h()},h:function(){v(o,"cols",s[0]),d(o,"--columns",s[0]),v(o,"class","svelte-cjcicu"),$(o,"tight",s[1]),$(o,"loose",s[2])},m:function(s,n){p(s,o,n),i&&i.m(o,null),t=!0},p:function(s,c){var a=g(c,1)[0];i&&i.p&&8&a&&i.p(m(n,s,s[3],null),j(n,s[3],a,null)),(!t||1&a)&&v(o,"cols",s[0]),(!t||1&a)&&d(o,"--columns",s[0]),2&a&&$(o,"tight",s[1]),4&a&&$(o,"loose",s[2])},i:function(s){t||(x(i,s),t=!0)},o:function(s){D(i,s),t=!1},d:function(s){s&&h(o),i&&i.d(s)}}}function G(s,o,t){var n=o.cols,i=void 0===n?1:n,c=o.tight,a=void 0!==c&&c,l=o.loose,u=void 0!==l&&l,e=o.$$slots,f=void 0===e?{}:e,r=o.$$scope;return s.$set=function(s){"cols"in s&&t(0,i=s.cols),"tight"in s&&t(1,a=s.tight),"loose"in s&&t(2,u=s.loose),"$$scope"in s&&t(3,r=s.$$scope)},[i,a,u,r,f]}var b=function(u){function e(s){var l;return o(this,e),l=t(this,n(e).call(this)),i(a(l),s,G,E,c,{cols:0,tight:1,loose:2}),l}return s(e,l),e}();export{b as G};