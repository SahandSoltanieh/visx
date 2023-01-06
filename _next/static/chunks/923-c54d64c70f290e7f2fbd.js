"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[923],{47033:function(n,r,t){function e(n){return null==n?null:u(n)}function u(n){if("function"!==typeof n)throw new Error;return n}t.d(r,{j:function(){return e},C:function(){return u}})},35227:function(n,r,t){function e(){return 0}function u(n){return function(){return n}}t.d(r,{G:function(){return e},Z:function(){return u}})},22210:function(n,r,t){function e(n){var r=0,t=n.children,e=t&&t.length;if(e)for(;--e>=0;)r+=t[e].value;else r=1;n.value=r}function u(n,r){var t,e,u,i,f,l=new c(n),h=+n.value&&(l.value=n.value),d=[l];for(null==r&&(r=o);t=d.pop();)if(h&&(t.value=+t.data.value),(u=r(t.data))&&(f=u.length))for(t.children=new Array(f),i=f-1;i>=0;--i)d.push(e=t.children[i]=new c(u[i])),e.parent=t,e.depth=t.depth+1;return l.eachBefore(a)}function o(n){return n.children}function i(n){n.data=n.data.data}function a(n){var r=0;do{n.height=r}while((n=n.parent)&&n.height<++r)}function c(n){this.data=n,this.depth=this.height=0,this.parent=null}t.d(r,{NB:function(){return c},le:function(){return a},ZP:function(){return u}}),c.prototype=u.prototype={constructor:c,count:function(){return this.eachAfter(e)},each:function(n){var r,t,e,u,o=this,i=[o];do{for(r=i.reverse(),i=[];o=r.pop();)if(n(o),t=o.children)for(e=0,u=t.length;e<u;++e)i.push(t[e])}while(i.length);return this},eachAfter:function(n){for(var r,t,e,u=this,o=[u],i=[];u=o.pop();)if(i.push(u),r=u.children)for(t=0,e=r.length;t<e;++t)o.push(r[t]);for(;u=i.pop();)n(u);return this},eachBefore:function(n){for(var r,t,e=this,u=[e];e=u.pop();)if(n(e),r=e.children)for(t=r.length-1;t>=0;--t)u.push(r[t]);return this},sum:function(n){return this.eachAfter((function(r){for(var t=+n(r.data)||0,e=r.children,u=e&&e.length;--u>=0;)t+=e[u].value;r.value=t}))},sort:function(n){return this.eachBefore((function(r){r.children&&r.children.sort(n)}))},path:function(n){for(var r=this,t=function(n,r){if(n===r)return n;var t=n.ancestors(),e=r.ancestors(),u=null;n=t.pop(),r=e.pop();for(;n===r;)u=n,n=t.pop(),r=e.pop();return u}(r,n),e=[r];r!==t;)r=r.parent,e.push(r);for(var u=e.length;n!==t;)e.splice(u,0,n),n=n.parent;return e},ancestors:function(){for(var n=this,r=[n];n=n.parent;)r.push(n);return r},descendants:function(){var n=[];return this.each((function(r){n.push(r)})),n},leaves:function(){var n=[];return this.eachBefore((function(r){r.children||n.push(r)})),n},links:function(){var n=this,r=[];return n.each((function(t){t!==n&&r.push({source:t.parent,target:t})})),r},copy:function(){return u(this).eachBefore(i)}}},10018:function(n,r,t){t.d(r,{Z:function(){return f}});var e=t(47033),u=t(22210),o={depth:-1},i={};function a(n){return n.id}function c(n){return n.parentId}function f(){var n=a,r=c;function t(t){var e,a,c,f,l,h,d,s=t.length,p=new Array(s),v={};for(a=0;a<s;++a)e=t[a],l=p[a]=new u.NB(e),null!=(h=n(e,a,t))&&(h+="")&&(v[d="$"+(l.id=h)]=d in v?i:l);for(a=0;a<s;++a)if(l=p[a],null!=(h=r(t[a],a,t))&&(h+="")){if(!(f=v["$"+h]))throw new Error("missing: "+h);if(f===i)throw new Error("ambiguous: "+h);f.children?f.children.push(l):f.children=[l],l.parent=f}else{if(c)throw new Error("multiple roots");c=l}if(!c)throw new Error("no root");if(c.parent=o,c.eachBefore((function(n){n.depth=n.parent.depth+1,--s})).eachBefore(u.le),c.parent=null,s>0)throw new Error("cycle");return c}return t.id=function(r){return arguments.length?(n=(0,e.C)(r),t):n},t.parentId=function(n){return arguments.length?(r=(0,e.C)(n),t):r},t}},29483:function(n,r,t){function e(n,r,t,e,u){var o,i,a=n.children,c=a.length,f=new Array(c+1);for(f[0]=i=o=0;o<c;++o)f[o+1]=i+=a[o].value;!function n(r,t,e,u,o,i,c){if(r>=t-1){var l=a[r];return l.x0=u,l.y0=o,l.x1=i,void(l.y1=c)}var h=f[r],d=e/2+h,s=r+1,p=t-1;for(;s<p;){var v=s+p>>>1;f[v]<d?s=v+1:p=v}d-f[s-1]<f[s]-d&&r+1<s&&--s;var g=f[s]-h,M=e-g;if(i-u>c-o){var Z=(u*M+i*g)/e;n(r,s,g,u,o,Z,c),n(s,t,M,Z,o,i,c)}else{var m=(o*M+c*g)/e;n(r,s,g,u,o,i,m),n(s,t,M,u,m,i,c)}}(0,c,n.value,r,t,e,u)}t.d(r,{Z:function(){return e}})},44925:function(n,r,t){function e(n,r,t,e,u){for(var o,i=n.children,a=-1,c=i.length,f=n.value&&(e-r)/n.value;++a<c;)(o=i[a]).y0=t,o.y1=u,o.x0=r,o.x1=r+=o.value*f}t.d(r,{Z:function(){return e}})},23062:function(n,r,t){t.d(r,{Z:function(){return a}});var e=t(86228),u=t(21086),o=t(47033),i=t(35227);function a(){var n=u.ZP,r=!1,t=1,a=1,c=[0],f=i.G,l=i.G,h=i.G,d=i.G,s=i.G;function p(n){return n.x0=n.y0=0,n.x1=t,n.y1=a,n.eachBefore(v),c=[0],r&&n.eachBefore(e.Z),n}function v(r){var t=c[r.depth],e=r.x0+t,u=r.y0+t,o=r.x1-t,i=r.y1-t;o<e&&(e=o=(e+o)/2),i<u&&(u=i=(u+i)/2),r.x0=e,r.y0=u,r.x1=o,r.y1=i,r.children&&(t=c[r.depth+1]=f(r)/2,e+=s(r)-t,u+=l(r)-t,(o-=h(r)-t)<e&&(e=o=(e+o)/2),(i-=d(r)-t)<u&&(u=i=(u+i)/2),n(r,e,u,o,i))}return p.round=function(n){return arguments.length?(r=!!n,p):r},p.size=function(n){return arguments.length?(t=+n[0],a=+n[1],p):[t,a]},p.tile=function(r){return arguments.length?(n=(0,o.C)(r),p):n},p.padding=function(n){return arguments.length?p.paddingInner(n).paddingOuter(n):p.paddingInner()},p.paddingInner=function(n){return arguments.length?(f="function"===typeof n?n:(0,i.Z)(+n),p):f},p.paddingOuter=function(n){return arguments.length?p.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):p.paddingTop()},p.paddingTop=function(n){return arguments.length?(l="function"===typeof n?n:(0,i.Z)(+n),p):l},p.paddingRight=function(n){return arguments.length?(h="function"===typeof n?n:(0,i.Z)(+n),p):h},p.paddingBottom=function(n){return arguments.length?(d="function"===typeof n?n:(0,i.Z)(+n),p):d},p.paddingLeft=function(n){return arguments.length?(s="function"===typeof n?n:(0,i.Z)(+n),p):s},p}},3346:function(n,r,t){var e=t(44925),u=t(12460),o=t(21086);r.Z=function n(r){function t(n,t,i,a,c){if((f=n._squarify)&&f.ratio===r)for(var f,l,h,d,s,p=-1,v=f.length,g=n.value;++p<v;){for(h=(l=f[p]).children,d=l.value=0,s=h.length;d<s;++d)l.value+=h[d].value;l.dice?(0,e.Z)(l,t,i,a,i+=(c-i)*l.value/g):(0,u.Z)(l,t,i,t+=(a-t)*l.value/g,c),g-=l.value}else n._squarify=f=(0,o.DD)(r,n,t,i,a,c),f.ratio=r}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(o.Sk)},86228:function(n,r,t){function e(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)}t.d(r,{Z:function(){return e}})},12460:function(n,r,t){function e(n,r,t,e,u){for(var o,i=n.children,a=-1,c=i.length,f=n.value&&(u-t)/n.value;++a<c;)(o=i[a]).x0=r,o.x1=e,o.y0=t,o.y1=t+=o.value*f}t.d(r,{Z:function(){return e}})},44164:function(n,r,t){t.d(r,{Z:function(){return o}});var e=t(44925),u=t(12460);function o(n,r,t,o,i){(1&n.depth?u.Z:e.Z)(n,r,t,o,i)}},21086:function(n,r,t){t.d(r,{Sk:function(){return o},DD:function(){return i}});var e=t(44925),u=t(12460),o=(1+Math.sqrt(5))/2;function i(n,r,t,o,i,a){for(var c,f,l,h,d,s,p,v,g,M,Z,m=[],y=r.children,w=0,x=0,b=y.length,k=r.value;w<b;){l=i-t,h=a-o;do{d=y[x++].value}while(!d&&x<b);for(s=p=d,Z=d*d*(M=Math.max(h/l,l/h)/(k*n)),g=Math.max(p/Z,Z/s);x<b;++x){if(d+=f=y[x].value,f<s&&(s=f),f>p&&(p=f),Z=d*d*M,(v=Math.max(p/Z,Z/s))>g){d-=f;break}g=v}m.push(c={value:d,dice:l<h,children:y.slice(w,x)}),c.dice?(0,e.Z)(c,t,o,i,k?o+=h*d/k:a):(0,u.Z)(c,t,o,k?t+=l*d/k:i,a),k-=d,w=x}return m}r.ZP=function n(r){function t(n,t,e,u,o){i(r,n,t,e,u,o)}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(o)},47538:function(n,r){r.Z=Math.random},56426:function(n,r,t){t.r(r),t.d(r,{randomBates:function(){return f},randomBernoulli:function(){return d},randomBeta:function(){return v},randomBinomial:function(){return g},randomCauchy:function(){return Z},randomExponential:function(){return l},randomGamma:function(){return p},randomGeometric:function(){return s},randomInt:function(){return o},randomIrwinHall:function(){return c},randomLcg:function(){return w.Z},randomLogNormal:function(){return a},randomLogistic:function(){return m},randomNormal:function(){return i.Z},randomPareto:function(){return h},randomPoisson:function(){return y},randomUniform:function(){return u},randomWeibull:function(){return M}});var e=t(47538),u=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,1===arguments.length?(t=n,n=0):t-=n,function(){return r()*t+n}}return t.source=n,t}(e.Z),o=function n(r){function t(n,t){return arguments.length<2&&(t=n,n=0),n=Math.floor(n),t=Math.floor(t)-n,function(){return Math.floor(r()*t+n)}}return t.source=n,t}(e.Z),i=t(80086),a=function n(r){var t=i.Z.source(r);function e(){var n=t.apply(this,arguments);return function(){return Math.exp(n())}}return e.source=n,e}(e.Z),c=function n(r){function t(n){return(n=+n)<=0?()=>0:function(){for(var t=0,e=n;e>1;--e)t+=r();return t+e*r()}}return t.source=n,t}(e.Z),f=function n(r){var t=c.source(r);function e(n){if(0===(n=+n))return r;var e=t(n);return function(){return e()/n}}return e.source=n,e}(e.Z),l=function n(r){function t(n){return function(){return-Math.log1p(-r())/n}}return t.source=n,t}(e.Z),h=function n(r){function t(n){if((n=+n)<0)throw new RangeError("invalid alpha");return n=1/-n,function(){return Math.pow(1-r(),n)}}return t.source=n,t}(e.Z),d=function n(r){function t(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return function(){return Math.floor(r()+n)}}return t.source=n,t}(e.Z),s=function n(r){function t(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return 0===n?()=>1/0:1===n?()=>1:(n=Math.log1p(-n),function(){return 1+Math.floor(Math.log1p(-r())/n)})}return t.source=n,t}(e.Z),p=function n(r){var t=i.Z.source(r)();function e(n,e){if((n=+n)<0)throw new RangeError("invalid k");if(0===n)return()=>0;if(e=null==e?1:+e,1===n)return()=>-Math.log1p(-r())*e;var u=(n<1?n+1:n)-1/3,o=1/(3*Math.sqrt(u)),i=n<1?()=>Math.pow(r(),1/n):()=>1;return function(){do{do{var n=t(),a=1+o*n}while(a<=0);a*=a*a;var c=1-r()}while(c>=1-.0331*n*n*n*n&&Math.log(c)>=.5*n*n+u*(1-a+Math.log(a)));return u*a*i()*e}}return e.source=n,e}(e.Z),v=function n(r){var t=p.source(r);function e(n,r){var e=t(n),u=t(r);return function(){var n=e();return 0===n?0:n/(n+u())}}return e.source=n,e}(e.Z),g=function n(r){var t=s.source(r),e=v.source(r);function u(n,r){return n=+n,(r=+r)>=1?()=>n:r<=0?()=>0:function(){for(var u=0,o=n,i=r;o*i>16&&o*(1-i)>16;){var a=Math.floor((o+1)*i),c=e(a,o-a+1)();c<=i?(u+=a,o-=a,i=(i-c)/(1-c)):(o=a-1,i/=c)}for(var f=i<.5,l=t(f?i:1-i),h=l(),d=0;h<=o;++d)h+=l();return u+(f?d:o-d)}}return u.source=n,u}(e.Z),M=function n(r){function t(n,t,e){var u;return 0===(n=+n)?u=n=>-Math.log(n):(n=1/n,u=r=>Math.pow(r,n)),t=null==t?0:+t,e=null==e?1:+e,function(){return t+e*u(-Math.log1p(-r()))}}return t.source=n,t}(e.Z),Z=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,function(){return n+t*Math.tan(Math.PI*r())}}return t.source=n,t}(e.Z),m=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,function(){var e=r();return n+t*Math.log(e/(1-e))}}return t.source=n,t}(e.Z),y=function n(r){var t=p.source(r),e=g.source(r);function u(n){return function(){for(var u=0,o=n;o>16;){var i=Math.floor(.875*o),a=t(i)();if(a>o)return u+e(i-1,o/a)();u+=i,o-=a}for(var c=-Math.log1p(-r()),f=0;c<=o;++f)c-=Math.log1p(-r());return u+f}}return u.source=n,u}(e.Z),w=t(89422)},89422:function(n,r,t){t.d(r,{Z:function(){return u}});const e=1/4294967296;function u(n=Math.random()){let r=0|(0<=n&&n<1?n/e:Math.abs(n));return()=>(r=1664525*r+1013904223|0,e*(r>>>0))}},80086:function(n,r,t){var e=t(47538);r.Z=function n(r){function t(n,t){var e,u;return n=null==n?0:+n,t=null==t?1:+t,function(){var o;if(null!=e)o=e,e=null;else do{e=2*r()-1,o=2*r()-1,u=e*e+o*o}while(!u||u>1);return n+t*o*Math.sqrt(-2*Math.log(u)/u)}}return t.source=n,t}(e.Z)},23712:function(n,r,t){function e(n,r){if(null==n)return{};var t,e,u=function(n,r){if(null==n)return{};var t,e,u={},o=Object.keys(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||(u[t]=n[t]);return u}(n,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(u[t]=n[t])}return u}t.d(r,{Z:function(){return e}})},21414:function(n,r,t){function e(n,r,t){n=+n,r=+r,t=(u=arguments.length)<2?(r=n,n=0,1):u<3?1:+t;for(var e=-1,u=0|Math.max(0,Math.ceil((r-n)/t)),o=new Array(u);++e<u;)o[e]=n+e*t;return o}t.d(r,{Z:function(){return i},x:function(){return c}});var u=t(55545),o=t(80859);function i(){var n,r,t=(0,o.Z)().unknown(void 0),a=t.domain,c=t.range,f=0,l=1,h=!1,d=0,s=0,p=.5;function v(){var t=a().length,u=l<f,o=u?l:f,i=u?f:l;n=(i-o)/Math.max(1,t-d+2*s),h&&(n=Math.floor(n)),o+=(i-o-n*(t-d))*p,r=n*(1-d),h&&(o=Math.round(o),r=Math.round(r));var v=e(t).map((function(r){return o+n*r}));return c(u?v.reverse():v)}return delete t.unknown,t.domain=function(n){return arguments.length?(a(n),v()):a()},t.range=function(n){return arguments.length?([f,l]=n,f=+f,l=+l,v()):[f,l]},t.rangeRound=function(n){return[f,l]=n,f=+f,l=+l,h=!0,v()},t.bandwidth=function(){return r},t.step=function(){return n},t.round=function(n){return arguments.length?(h=!!n,v()):h},t.padding=function(n){return arguments.length?(d=Math.min(1,s=+n),v()):d},t.paddingInner=function(n){return arguments.length?(d=Math.min(1,n),v()):d},t.paddingOuter=function(n){return arguments.length?(s=+n,v()):s},t.align=function(n){return arguments.length?(p=Math.max(0,Math.min(1,n)),v()):p},t.copy=function(){return i(a(),[f,l]).round(h).paddingInner(d).paddingOuter(s).align(p)},u.o.apply(v(),arguments)}function a(n){var r=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return a(r())},n}function c(){return a(i.apply(null,arguments).paddingInner(1))}},27230:function(n,r,t){t.d(r,{Q:function(){return a},Z:function(){return c}});var e=t(90461),u=t(30486),o=t(55545),i=t(1452);function a(n){var r=n.domain;return n.ticks=function(n){var t=r();return(0,e.ZP)(t[0],t[t.length-1],null==n?10:n)},n.tickFormat=function(n,t){var e=r();return(0,i.Z)(e[0],e[e.length-1],null==n?10:n,t)},n.nice=function(t){null==t&&(t=10);var u,o,i=r(),a=0,c=i.length-1,f=i[a],l=i[c],h=10;for(l<f&&(o=f,f=l,l=o,o=a,a=c,c=o);h-- >0;){if((o=(0,e.G9)(f,l,t))===u)return i[a]=f,i[c]=l,r(i);if(o>0)f=Math.floor(f/o)*o,l=Math.ceil(l/o)*o;else{if(!(o<0))break;f=Math.ceil(f*o)/o,l=Math.floor(l*o)/o}u=o}return n},n}function c(){var n=(0,u.ZP)();return n.copy=function(){return(0,u.JG)(n,c())},o.o.apply(n,arguments),a(n)}},91182:function(n,r,t){t.d(r,{Q:function(){return v},Z:function(){return g}});var e=t(90461),u=t(38119),o=t(14090),i=t(99245),a=t(30486),c=t(55545);function f(n){return Math.log(n)}function l(n){return Math.exp(n)}function h(n){return-Math.log(-n)}function d(n){return-Math.exp(-n)}function s(n){return isFinite(n)?+("1e"+n):n<0?0:n}function p(n){return(r,t)=>-n(-r,t)}function v(n){const r=n(f,l),t=r.domain;let a,c,v=10;function g(){return a=function(n){return n===Math.E?Math.log:10===n&&Math.log10||2===n&&Math.log2||(n=Math.log(n),r=>Math.log(r)/n)}(v),c=function(n){return 10===n?s:n===Math.E?Math.exp:r=>Math.pow(n,r)}(v),t()[0]<0?(a=p(a),c=p(c),n(h,d)):n(f,l),r}return r.base=function(n){return arguments.length?(v=+n,g()):v},r.domain=function(n){return arguments.length?(t(n),g()):t()},r.ticks=n=>{const r=t();let u=r[0],o=r[r.length-1];const i=o<u;i&&([u,o]=[o,u]);let f,l,h=a(u),d=a(o);const s=null==n?10:+n;let p=[];if(!(v%1)&&d-h<s){if(h=Math.floor(h),d=Math.ceil(d),u>0){for(;h<=d;++h)for(f=1;f<v;++f)if(l=h<0?f/c(-h):f*c(h),!(l<u)){if(l>o)break;p.push(l)}}else for(;h<=d;++h)for(f=v-1;f>=1;--f)if(l=h>0?f/c(-h):f*c(h),!(l<u)){if(l>o)break;p.push(l)}2*p.length<s&&(p=(0,e.ZP)(u,o,s))}else p=(0,e.ZP)(h,d,Math.min(d-h,s)).map(c);return i?p.reverse():p},r.tickFormat=(n,t)=>{if(null==n&&(n=10),null==t&&(t=10===v?"s":","),"function"!==typeof t&&(v%1||null!=(t=(0,u.Z)(t)).precision||(t.trim=!0),t=(0,o.WU)(t)),n===1/0)return t;const e=Math.max(1,v*n/r.ticks().length);return n=>{let r=n/c(Math.round(a(n)));return r*v<v-.5&&(r*=v),r<=e?t(n):""}},r.nice=()=>t((0,i.Z)(t(),{floor:n=>c(Math.floor(a(n))),ceil:n=>c(Math.ceil(a(n)))})),r}function g(){const n=v((0,a.l4)()).domain([1,10]);return n.copy=()=>(0,a.JG)(n,g()).base(n.base()),c.o.apply(n,arguments),n}},1452:function(n,r,t){t.d(r,{Z:function(){return a}});var e=t(90461),u=t(17206);var o=t(38119),i=t(14090);function a(n,r,t,a){var c,f=(0,e.ly)(n,r,t);switch((a=(0,o.Z)(null==a?",f":a)).type){case"s":var l=Math.max(Math.abs(n),Math.abs(r));return null!=a.precision||isNaN(c=function(n,r){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,u.Z)(r)/3)))-(0,u.Z)(Math.abs(n)))}(f,l))||(a.precision=c),(0,i.jH)(a,l);case"":case"e":case"g":case"p":case"r":null!=a.precision||isNaN(c=function(n,r){return n=Math.abs(n),r=Math.abs(r)-n,Math.max(0,(0,u.Z)(r)-(0,u.Z)(n))+1}(f,Math.max(Math.abs(n),Math.abs(r))))||(a.precision=c-("e"===a.type));break;case"f":case"%":null!=a.precision||isNaN(c=function(n){return Math.max(0,-(0,u.Z)(Math.abs(n)))}(f))||(a.precision=c-2*("%"===a.type))}return(0,i.WU)(a)}}}]);