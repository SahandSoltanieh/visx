"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6419,5769,3025],{47538:function(n,r){r.Z=Math.random},56426:function(n,r,t){t.r(r),t.d(r,{randomBates:function(){return c},randomBernoulli:function(){return s},randomBeta:function(){return g},randomBinomial:function(){return m},randomCauchy:function(){return Z},randomExponential:function(){return l},randomGamma:function(){return v},randomGeometric:function(){return M},randomInt:function(){return e},randomIrwinHall:function(){return f},randomLcg:function(){return b.Z},randomLogNormal:function(){return i},randomLogistic:function(){return d},randomNormal:function(){return a.Z},randomPareto:function(){return h},randomPoisson:function(){return w},randomUniform:function(){return o},randomWeibull:function(){return p}});var u=t(47538),o=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,1===arguments.length?(t=n,n=0):t-=n,function(){return r()*t+n}}return t.source=n,t}(u.Z),e=function n(r){function t(n,t){return arguments.length<2&&(t=n,n=0),n=Math.floor(n),t=Math.floor(t)-n,function(){return Math.floor(r()*t+n)}}return t.source=n,t}(u.Z),a=t(80086),i=function n(r){var t=a.Z.source(r);function u(){var n=t.apply(this,arguments);return function(){return Math.exp(n())}}return u.source=n,u}(u.Z),f=function n(r){function t(n){return(n=+n)<=0?()=>0:function(){for(var t=0,u=n;u>1;--u)t+=r();return t+u*r()}}return t.source=n,t}(u.Z),c=function n(r){var t=f.source(r);function u(n){if(0===(n=+n))return r;var u=t(n);return function(){return u()/n}}return u.source=n,u}(u.Z),l=function n(r){function t(n){return function(){return-Math.log1p(-r())/n}}return t.source=n,t}(u.Z),h=function n(r){function t(n){if((n=+n)<0)throw new RangeError("invalid alpha");return n=1/-n,function(){return Math.pow(1-r(),n)}}return t.source=n,t}(u.Z),s=function n(r){function t(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return function(){return Math.floor(r()+n)}}return t.source=n,t}(u.Z),M=function n(r){function t(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return 0===n?()=>1/0:1===n?()=>1:(n=Math.log1p(-n),function(){return 1+Math.floor(Math.log1p(-r())/n)})}return t.source=n,t}(u.Z),v=function n(r){var t=a.Z.source(r)();function u(n,u){if((n=+n)<0)throw new RangeError("invalid k");if(0===n)return()=>0;if(u=null==u?1:+u,1===n)return()=>-Math.log1p(-r())*u;var o=(n<1?n+1:n)-1/3,e=1/(3*Math.sqrt(o)),a=n<1?()=>Math.pow(r(),1/n):()=>1;return function(){do{do{var n=t(),i=1+e*n}while(i<=0);i*=i*i;var f=1-r()}while(f>=1-.0331*n*n*n*n&&Math.log(f)>=.5*n*n+o*(1-i+Math.log(i)));return o*i*a()*u}}return u.source=n,u}(u.Z),g=function n(r){var t=v.source(r);function u(n,r){var u=t(n),o=t(r);return function(){var n=u();return 0===n?0:n/(n+o())}}return u.source=n,u}(u.Z),m=function n(r){var t=M.source(r),u=g.source(r);function o(n,r){return n=+n,(r=+r)>=1?()=>n:r<=0?()=>0:function(){for(var o=0,e=n,a=r;e*a>16&&e*(1-a)>16;){var i=Math.floor((e+1)*a),f=u(i,e-i+1)();f<=a?(o+=i,e-=i,a=(a-f)/(1-f)):(e=i-1,a/=f)}for(var c=a<.5,l=t(c?a:1-a),h=l(),s=0;h<=e;++s)h+=l();return o+(c?s:e-s)}}return o.source=n,o}(u.Z),p=function n(r){function t(n,t,u){var o;return 0===(n=+n)?o=n=>-Math.log(n):(n=1/n,o=r=>Math.pow(r,n)),t=null==t?0:+t,u=null==u?1:+u,function(){return t+u*o(-Math.log1p(-r()))}}return t.source=n,t}(u.Z),Z=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,function(){return n+t*Math.tan(Math.PI*r())}}return t.source=n,t}(u.Z),d=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,function(){var u=r();return n+t*Math.log(u/(1-u))}}return t.source=n,t}(u.Z),w=function n(r){var t=v.source(r),u=m.source(r);function o(n){return function(){for(var o=0,e=n;e>16;){var a=Math.floor(.875*e),i=t(a)();if(i>e)return o+u(a-1,e/i)();o+=a,e-=i}for(var f=-Math.log1p(-r()),c=0;f<=e;++c)f-=Math.log1p(-r());return o+c}}return o.source=n,o}(u.Z),b=t(89422)},89422:function(n,r,t){t.d(r,{Z:function(){return o}});const u=1/4294967296;function o(n=Math.random()){let r=0|(0<=n&&n<1?n/u:Math.abs(n));return()=>(r=1664525*r+1013904223|0,u*(r>>>0))}},80086:function(n,r,t){var u=t(47538);r.Z=function n(r){function t(n,t){var u,o;return n=null==n?0:+n,t=null==t?1:+t,function(){var e;if(null!=u)e=u,u=null;else do{u=2*r()-1,e=2*r()-1,o=u*u+e*e}while(!o||o>1);return n+t*e*Math.sqrt(-2*Math.log(o)/o)}}return t.source=n,t}(u.Z)},79492:function(n,r,t){function u(n,r){return n<r?-1:n>r?1:n>=r?0:NaN}function o(n){var r;return 1===n.length&&(r=n,n=function(n,t){return u(r(n),t)}),{left:function(r,t,u,o){for(null==u&&(u=0),null==o&&(o=r.length);u<o;){var e=u+o>>>1;n(r[e],t)<0?u=e+1:o=e}return u},right:function(r,t,u,o){for(null==u&&(u=0),null==o&&(o=r.length);u<o;){var e=u+o>>>1;n(r[e],t)>0?o=e:u=e+1}return u}}}t.d(r,{YF:function(){return o},We:function(){return a},Fp:function(){return f},TS:function(){return c},w6:function(){return l},p4:function(){return h}});var e=o(u);e.right,e.left;function a(n,r){var t,u,o,e=n.length,a=-1;if(null==r){for(;++a<e;)if(null!=(t=n[a])&&t>=t)for(u=o=t;++a<e;)null!=(t=n[a])&&(u>t&&(u=t),o<t&&(o=t))}else for(;++a<e;)if(null!=(t=r(n[a],a,n))&&t>=t)for(u=o=t;++a<e;)null!=(t=r(n[a],a,n))&&(u>t&&(u=t),o<t&&(o=t));return[u,o]}var i=Array.prototype;i.slice,i.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);function f(n,r){var t,u,o=n.length,e=-1;if(null==r){for(;++e<o;)if(null!=(t=n[e])&&t>=t)for(u=t;++e<o;)null!=(t=n[e])&&t>u&&(u=t)}else for(;++e<o;)if(null!=(t=r(n[e],e,n))&&t>=t)for(u=t;++e<o;)null!=(t=r(n[e],e,n))&&t>u&&(u=t);return u}function c(n){for(var r,t,u,o=n.length,e=-1,a=0;++e<o;)a+=n[e].length;for(t=new Array(a);--o>=0;)for(r=(u=n[o]).length;--r>=0;)t[--a]=u[r];return t}function l(n,r,t){n=+n,r=+r,t=(o=arguments.length)<2?(r=n,n=0,1):o<3?1:+t;for(var u=-1,o=0|Math.max(0,Math.ceil((r-n)/t)),e=new Array(o);++u<o;)e[u]=n+u*t;return e}function h(n){if(!(o=n.length))return[];for(var r=-1,t=function(n,r){var t,u,o=n.length,e=-1;if(null==r){for(;++e<o;)if(null!=(t=n[e])&&t>=t)for(u=t;++e<o;)null!=(t=n[e])&&u>t&&(u=t)}else for(;++e<o;)if(null!=(t=r(n[e],e,n))&&t>=t)for(u=t;++e<o;)null!=(t=r(n[e],e,n))&&u>t&&(u=t);return u}(n,s),u=new Array(t);++r<t;)for(var o,e=-1,a=u[r]=new Array(o);++e<o;)a[e]=n[e][r];return u}function s(n){return n.length}},27230:function(n,r,t){t.d(r,{Q:function(){return i},Z:function(){return f}});var u=t(90461),o=t(30486),e=t(55545),a=t(1452);function i(n){var r=n.domain;return n.ticks=function(n){var t=r();return(0,u.ZP)(t[0],t[t.length-1],null==n?10:n)},n.tickFormat=function(n,t){var u=r();return(0,a.Z)(u[0],u[u.length-1],null==n?10:n,t)},n.nice=function(t){null==t&&(t=10);var o,e,a=r(),i=0,f=a.length-1,c=a[i],l=a[f],h=10;for(l<c&&(e=c,c=l,l=e,e=i,i=f,f=e);h-- >0;){if((e=(0,u.G9)(c,l,t))===o)return a[i]=c,a[f]=l,r(a);if(e>0)c=Math.floor(c/e)*e,l=Math.ceil(l/e)*e;else{if(!(e<0))break;c=Math.ceil(c*e)/e,l=Math.floor(l*e)/e}o=e}return n},n}function f(){var n=(0,o.ZP)();return n.copy=function(){return(0,o.JG)(n,f())},e.o.apply(n,arguments),i(n)}},1452:function(n,r,t){t.d(r,{Z:function(){return i}});var u=t(90461),o=t(17206);var e=t(38119),a=t(14090);function i(n,r,t,i){var f,c=(0,u.ly)(n,r,t);switch((i=(0,e.Z)(null==i?",f":i)).type){case"s":var l=Math.max(Math.abs(n),Math.abs(r));return null!=i.precision||isNaN(f=function(n,r){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,o.Z)(r)/3)))-(0,o.Z)(Math.abs(n)))}(c,l))||(i.precision=f),(0,a.jH)(i,l);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(f=function(n,r){return n=Math.abs(n),r=Math.abs(r)-n,Math.max(0,(0,o.Z)(r)-(0,o.Z)(n))+1}(c,Math.max(Math.abs(n),Math.abs(r))))||(i.precision=f-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(f=function(n){return Math.max(0,-(0,o.Z)(Math.abs(n)))}(c))||(i.precision=f-2*("%"===i.type))}return(0,a.WU)(i)}}}]);