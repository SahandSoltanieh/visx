"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2462],{6236:function(n,t,r){function i(){return new e}function e(){this.reset()}r.d(t,{Z:function(){return i}}),e.prototype={constructor:e,reset:function(){this.s=this.t=0},add:function(n){u(o,n,this.t),u(this,o.s,this.s),this.s?this.t+=o.t:this.s=o.t},valueOf:function(){return this.s}};var o=new e;function u(n,t,r){var i=n.s=t+r,e=i-t,o=i-e;n.t=t-o+(r-e)}},81319:function(n,t,r){function i(n,t){function r(r,i){return r=n(r,i),t(r[0],r[1])}return n.invert&&t.invert&&(r.invert=function(r,i){return(r=t.invert(r,i))&&n.invert(r[0],r[1])}),r}r.d(t,{Z:function(){return i}})},51418:function(n,t,r){r.d(t,{Z:function(){return f}});var i=r(79492),e=r(66573);function o(n,t,r){var o=(0,i.w6)(n,t-e.Ho,r).concat(t);return function(n){return o.map((function(t){return[n,t]}))}}function u(n,t,r){var o=(0,i.w6)(n,t-e.Ho,r).concat(t);return function(n){return o.map((function(t){return[t,n]}))}}function f(){var n,t,r,f,c,l,a,p,s,h,v,g,d=10,m=d,y=90,Z=360,E=2.5;function S(){return{type:"MultiLineString",coordinates:R()}}function R(){return(0,i.w6)((0,e.mD)(f/y)*y,r,y).map(v).concat((0,i.w6)((0,e.mD)(p/Z)*Z,a,Z).map(g)).concat((0,i.w6)((0,e.mD)(t/d)*d,n,d).filter((function(n){return(0,e.Wn)(n%y)>e.Ho})).map(s)).concat((0,i.w6)((0,e.mD)(l/m)*m,c,m).filter((function(n){return(0,e.Wn)(n%Z)>e.Ho})).map(h))}return S.lines=function(){return R().map((function(n){return{type:"LineString",coordinates:n}}))},S.outline=function(){return{type:"Polygon",coordinates:[v(f).concat(g(a).slice(1),v(r).reverse().slice(1),g(p).reverse().slice(1))]}},S.extent=function(n){return arguments.length?S.extentMajor(n).extentMinor(n):S.extentMinor()},S.extentMajor=function(n){return arguments.length?(f=+n[0][0],r=+n[1][0],p=+n[0][1],a=+n[1][1],f>r&&(n=f,f=r,r=n),p>a&&(n=p,p=a,a=n),S.precision(E)):[[f,p],[r,a]]},S.extentMinor=function(r){return arguments.length?(t=+r[0][0],n=+r[1][0],l=+r[0][1],c=+r[1][1],t>n&&(r=t,t=n,n=r),l>c&&(r=l,l=c,c=r),S.precision(E)):[[t,l],[n,c]]},S.step=function(n){return arguments.length?S.stepMajor(n).stepMinor(n):S.stepMinor()},S.stepMajor=function(n){return arguments.length?(y=+n[0],Z=+n[1],S):[y,Z]},S.stepMinor=function(n){return arguments.length?(d=+n[0],m=+n[1],S):[d,m]},S.precision=function(i){return arguments.length?(E=+i,s=o(l,c,90),h=u(t,n,E),v=o(p,a,90),g=u(f,r,E),S):E},S.extentMajor([[-180,-90+e.Ho],[180,90-e.Ho]]).extentMinor([[-180,-80-e.Ho],[180,80+e.Ho]])}},59350:function(n,t,r){function i(n){return n}r.d(t,{Z:function(){return i}})},66573:function(n,t,r){r.d(t,{Ho:function(){return i},aW:function(){return e},pi:function(){return o},ou:function(){return u},pu:function(){return f},BZ:function(){return c},RW:function(){return l},uR:function(){return a},Wn:function(){return p},z4:function(){return s},fv:function(){return h},mC:function(){return v},mD:function(){return g},Qq:function(){return d},cM:function(){return m},sQ:function(){return y},O$:function(){return Z},Xx:function(){return E},_b:function(){return S},OR:function(){return R},Kh:function(){return M},ZR:function(){return _}});var i=1e-6,e=1e-12,o=Math.PI,u=o/2,f=o/4,c=2*o,l=180/o,a=o/180,p=Math.abs,s=Math.atan,h=Math.atan2,v=Math.cos,g=Math.ceil,d=Math.exp,m=(Math.floor,Math.log),y=Math.pow,Z=Math.sin,E=Math.sign||function(n){return n>0?1:n<0?-1:0},S=Math.sqrt,R=Math.tan;function M(n){return n>1?0:n<-1?o:Math.acos(n)}function _(n){return n>1?u:n<-1?-u:Math.asin(n)}},48340:function(n,t,r){function i(){}r.d(t,{Z:function(){return i}})},57620:function(n,t,r){var i=r(48340),e=1/0,o=e,u=-e,f=u,c={point:function(n,t){n<e&&(e=n);n>u&&(u=n);t<o&&(o=t);t>f&&(f=t)},lineStart:i.Z,lineEnd:i.Z,polygonStart:i.Z,polygonEnd:i.Z,result:function(){var n=[[e,o],[u,f]];return u=f=-(o=e=1/0),n}};t.Z=c},20251:function(n,t,r){r.d(t,{Z:function(){return on}});var i,e,o,u,f=r(59350),c=r(60600),l=r(6236),a=r(66573),p=r(48340),s=(0,l.Z)(),h=(0,l.Z)(),v={point:p.Z,lineStart:p.Z,lineEnd:p.Z,polygonStart:function(){v.lineStart=g,v.lineEnd=y},polygonEnd:function(){v.lineStart=v.lineEnd=v.point=p.Z,s.add((0,a.Wn)(h)),h.reset()},result:function(){var n=s/2;return s.reset(),n}};function g(){v.point=d}function d(n,t){v.point=m,i=o=n,e=u=t}function m(n,t){h.add(u*n-o*t),o=n,u=t}function y(){m(i,e)}var Z,E,S,R,M=v,_=r(57620),x=0,W=0,H=0,O=0,C=0,w=0,$=0,b=0,N=0,k={point:B,lineStart:P,lineEnd:z,polygonStart:function(){k.lineStart=q,k.lineEnd=A},polygonEnd:function(){k.point=B,k.lineStart=P,k.lineEnd=z},result:function(){var n=N?[$/N,b/N]:w?[O/w,C/w]:H?[x/H,W/H]:[NaN,NaN];return x=W=H=O=C=w=$=b=N=0,n}};function B(n,t){x+=n,W+=t,++H}function P(){k.point=j}function j(n,t){k.point=F,B(S=n,R=t)}function F(n,t){var r=n-S,i=t-R,e=(0,a._b)(r*r+i*i);O+=e*(S+n)/2,C+=e*(R+t)/2,w+=e,B(S=n,R=t)}function z(){k.point=B}function q(){k.point=L}function A(){T(Z,E)}function L(n,t){k.point=T,B(Z=S=n,E=R=t)}function T(n,t){var r=n-S,i=t-R,e=(0,a._b)(r*r+i*i);O+=e*(S+n)/2,C+=e*(R+t)/2,w+=e,$+=(e=R*n-S*t)*(S+n),b+=e*(R+t),N+=3*e,B(S=n,R=t)}var X=k;function D(n){this._context=n}D.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,a.BZ)}},result:p.Z};var G,I,Q,V,K,Y=(0,l.Z)(),J={point:p.Z,lineStart:function(){J.point=U},lineEnd:function(){G&&nn(I,Q),J.point=p.Z},polygonStart:function(){G=!0},polygonEnd:function(){G=null},result:function(){var n=+Y;return Y.reset(),n}};function U(n,t){J.point=nn,I=V=n,Q=K=t}function nn(n,t){V-=n,K-=t,Y.add((0,a._b)(V*V+K*K)),V=n,K=t}var tn=J;function rn(){this._string=[]}function en(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function on(n,t){var r,i,e=4.5;function o(n){return n&&("function"===typeof e&&i.pointRadius(+e.apply(this,arguments)),(0,c.Z)(n,r(i))),i.result()}return o.area=function(n){return(0,c.Z)(n,r(M)),M.result()},o.measure=function(n){return(0,c.Z)(n,r(tn)),tn.result()},o.bounds=function(n){return(0,c.Z)(n,r(_.Z)),_.Z.result()},o.centroid=function(n){return(0,c.Z)(n,r(X)),X.result()},o.projection=function(t){return arguments.length?(r=null==t?(n=null,f.Z):(n=t).stream,o):n},o.context=function(n){return arguments.length?(i=null==n?(t=null,new rn):new D(t=n),"function"!==typeof e&&i.pointRadius(e),o):t},o.pointRadius=function(n){return arguments.length?(e="function"===typeof n?n:(i.pointRadius(+n),+n),o):e},o.projection(n).context(t)}rn.prototype={_radius:4.5,_circle:en(4.5),pointRadius:function(n){return(n=+n)!==this._radius&&(this._radius=n,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._string.push("M",n,",",t),this._point=1;break;case 1:this._string.push("L",n,",",t);break;default:null==this._circle&&(this._circle=en(this._radius)),this._string.push("M",n,",",t,this._circle)}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}return null}}},48645:function(n,t,r){r.d(t,{Z:function(){return e}});var i=r(40884);function e(){return(0,i.Z)().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}},51700:function(n,t,r){r.d(t,{Z:function(){return f}});var i=r(66573),e=r(48645),o=r(40884),u=r(80686);function f(){var n,t,r,f,c,l,a=(0,e.Z)(),p=(0,o.Z)().rotate([154,0]).center([-2,58.5]).parallels([55,65]),s=(0,o.Z)().rotate([157,0]).center([-3,19.9]).parallels([8,18]),h={point:function(n,t){l=[n,t]}};function v(n){var t=n[0],i=n[1];return l=null,r.point(t,i),l||(f.point(t,i),l)||(c.point(t,i),l)}function g(){return n=t=null,v}return v.invert=function(n){var t=a.scale(),r=a.translate(),i=(n[0]-r[0])/t,e=(n[1]-r[1])/t;return(e>=.12&&e<.234&&i>=-.425&&i<-.214?p:e>=.166&&e<.234&&i>=-.214&&i<-.115?s:a).invert(n)},v.stream=function(r){return n&&t===r?n:n=function(n){var t=n.length;return{point:function(r,i){for(var e=-1;++e<t;)n[e].point(r,i)},sphere:function(){for(var r=-1;++r<t;)n[r].sphere()},lineStart:function(){for(var r=-1;++r<t;)n[r].lineStart()},lineEnd:function(){for(var r=-1;++r<t;)n[r].lineEnd()},polygonStart:function(){for(var r=-1;++r<t;)n[r].polygonStart()},polygonEnd:function(){for(var r=-1;++r<t;)n[r].polygonEnd()}}}([a.stream(t=r),p.stream(r),s.stream(r)])},v.precision=function(n){return arguments.length?(a.precision(n),p.precision(n),s.precision(n),g()):a.precision()},v.scale=function(n){return arguments.length?(a.scale(n),p.scale(.35*n),s.scale(n),v.translate(a.translate())):a.scale()},v.translate=function(n){if(!arguments.length)return a.translate();var t=a.scale(),e=+n[0],o=+n[1];return r=a.translate(n).clipExtent([[e-.455*t,o-.238*t],[e+.455*t,o+.238*t]]).stream(h),f=p.translate([e-.307*t,o+.201*t]).clipExtent([[e-.425*t+i.Ho,o+.12*t+i.Ho],[e-.214*t-i.Ho,o+.234*t-i.Ho]]).stream(h),c=s.translate([e-.205*t,o+.212*t]).clipExtent([[e-.214*t+i.Ho,o+.166*t+i.Ho],[e-.115*t-i.Ho,o+.234*t-i.Ho]]).stream(h),g()},v.fitExtent=function(n,t){return(0,u.qg)(v,n,t)},v.fitSize=function(n,t){return(0,u.mF)(v,n,t)},v.fitWidth=function(n,t){return(0,u.V6)(v,n,t)},v.fitHeight=function(n,t){return(0,u.rf)(v,n,t)},v.scale(1070)}},82210:function(n,t,r){r.d(t,{O:function(){return e}});var i=r(66573);function e(n){return function(t,r){var e=(0,i._b)(t*t+r*r),o=n(e),u=(0,i.O$)(o),f=(0,i.mC)(o);return[(0,i.fv)(t*u,e*f),(0,i.ZR)(e&&r*u/e)]}}},32387:function(n,t,r){r.d(t,{o:function(){return o}});var i=r(66573),e=r(73883);function o(n){var t=0,r=i.pi/3,o=(0,e.r)(n),u=o(t,r);return u.parallels=function(n){return arguments.length?o(t=n[0]*i.uR,r=n[1]*i.uR):[t*i.RW,r*i.RW]},u}},40884:function(n,t,r){r.d(t,{Z:function(){return u}});var i=r(66573),e=r(32387);function o(n,t){var r=(0,i.O$)(n),e=(r+(0,i.O$)(t))/2;if((0,i.Wn)(e)<i.Ho)return function(n){var t=(0,i.mC)(n);function r(n,r){return[n*t,(0,i.O$)(r)/t]}return r.invert=function(n,r){return[n/t,(0,i.ZR)(r*t)]},r}(n);var o=1+r*(2*e-r),u=(0,i._b)(o)/e;function f(n,t){var r=(0,i._b)(o-2*e*(0,i.O$)(t))/e;return[r*(0,i.O$)(n*=e),u-r*(0,i.mC)(n)]}return f.invert=function(n,t){var r=u-t,f=(0,i.fv)(n,(0,i.Wn)(r))*(0,i.Xx)(r);return r*e<0&&(f-=i.pi*(0,i.Xx)(n)*(0,i.Xx)(r)),[f/e,(0,i.ZR)((o-(n*n+r*r)*e*e)/(2*e))]},f}function u(){return(0,e.o)(o).scale(155.424).center([0,33.6442])}},74749:function(n,t,r){r.d(t,{Z:function(){return p}});var i=r(73883),e=r(66573),o=1.340264,u=-.081106,f=893e-6,c=.003796,l=(0,e._b)(3)/2;function a(n,t){var r=(0,e.ZR)(l*(0,e.O$)(t)),i=r*r,a=i*i*i;return[n*(0,e.mC)(r)/(l*(o+3*u*i+a*(7*f+9*c*i))),r*(o+u*i+a*(f+c*i))]}function p(){return(0,i.Z)(a).scale(177.158)}a.invert=function(n,t){for(var r,i=t,a=i*i,p=a*a*a,s=0;s<12&&(p=(a=(i-=r=(i*(o+u*a+p*(f+c*a))-t)/(o+3*u*a+p*(7*f+9*c*a)))*i)*a*a,!((0,e.Wn)(r)<e.aW));++s);return[l*n*(o+3*u*a+p*(7*f+9*c*a))/(0,e.mC)(i),(0,e.ZR)((0,e.O$)(i)/l)]}},80686:function(n,t,r){r.d(t,{qg:function(){return u},mF:function(){return f},V6:function(){return c},rf:function(){return l}});var i=r(60600),e=r(57620);function o(n,t,r){var o=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=o&&n.clipExtent(null),(0,i.Z)(r,n.stream(e.Z)),t(e.Z.result()),null!=o&&n.clipExtent(o),n}function u(n,t,r){return o(n,(function(r){var i=t[1][0]-t[0][0],e=t[1][1]-t[0][1],o=Math.min(i/(r[1][0]-r[0][0]),e/(r[1][1]-r[0][1])),u=+t[0][0]+(i-o*(r[1][0]+r[0][0]))/2,f=+t[0][1]+(e-o*(r[1][1]+r[0][1]))/2;n.scale(150*o).translate([u,f])}),r)}function f(n,t,r){return u(n,[[0,0],t],r)}function c(n,t,r){return o(n,(function(r){var i=+t,e=i/(r[1][0]-r[0][0]),o=(i-e*(r[1][0]+r[0][0]))/2,u=-e*r[0][1];n.scale(150*e).translate([o,u])}),r)}function l(n,t,r){return o(n,(function(r){var i=+t,e=i/(r[1][1]-r[0][1]),o=-e*r[0][0],u=(i-e*(r[1][1]+r[0][1]))/2;n.scale(150*e).translate([o,u])}),r)}},73883:function(n,t,r){r.d(t,{Z:function(){return A},r:function(){return L}});var i=r(48340);function e(){var n,t=[];return{point:function(t,r,i){n.push([t,r,i])},lineStart:function(){t.push(n=[])},lineEnd:i.Z,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var r=t;return t=[],n=null,r}}}var o=r(66573);function u(n,t){return(0,o.Wn)(n[0]-t[0])<o.Ho&&(0,o.Wn)(n[1]-t[1])<o.Ho}function f(n,t,r,i){this.x=n,this.z=t,this.o=r,this.e=i,this.v=!1,this.n=this.p=null}function c(n,t,r,i,e){var c,a,p=[],s=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,r,i=n[0],l=n[t];if(u(i,l)){if(!i[2]&&!l[2]){for(e.lineStart(),c=0;c<t;++c)e.point((i=n[c])[0],i[1]);return void e.lineEnd()}l[0]+=2*o.Ho}p.push(r=new f(i,n,null,!0)),s.push(r.o=new f(i,null,r,!1)),p.push(r=new f(l,n,null,!1)),s.push(r.o=new f(l,null,r,!0))}})),p.length){for(s.sort(t),l(p),l(s),c=0,a=s.length;c<a;++c)s[c].e=r=!r;for(var h,v,g=p[0];;){for(var d=g,m=!0;d.v;)if((d=d.n)===g)return;h=d.z,e.lineStart();do{if(d.v=d.o.v=!0,d.e){if(m)for(c=0,a=h.length;c<a;++c)e.point((v=h[c])[0],v[1]);else i(d.x,d.n.x,1,e);d=d.n}else{if(m)for(h=d.p.z,c=h.length-1;c>=0;--c)e.point((v=h[c])[0],v[1]);else i(d.x,d.p.x,-1,e);d=d.p}h=(d=d.o).z,m=!m}while(!d.v);e.lineEnd()}}}function l(n){if(t=n.length){for(var t,r,i=0,e=n[0];++i<t;)e.n=r=n[i],r.p=e,e=r;e.n=r=n[0],r.p=e}}function a(n){return[(0,o.fv)(n[1],n[0]),(0,o.ZR)(n[2])]}function p(n){var t=n[0],r=n[1],i=(0,o.mC)(r);return[i*(0,o.mC)(t),i*(0,o.O$)(t),(0,o.O$)(r)]}function s(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function h(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function v(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function g(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function d(n){var t=(0,o._b)(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}var m=(0,r(6236).Z)();function y(n){return(0,o.Wn)(n[0])<=o.pi?n[0]:(0,o.Xx)(n[0])*(((0,o.Wn)(n[0])+o.pi)%o.BZ-o.pi)}var Z=r(79492);function E(n,t,r,i){return function(u){var f,l,a,s=t(u),v=e(),g=t(v),E=!1,M={point:_,lineStart:W,lineEnd:H,polygonStart:function(){M.point=O,M.lineStart=C,M.lineEnd=w,l=[],f=[]},polygonEnd:function(){M.point=_,M.lineStart=W,M.lineEnd=H,l=(0,Z.TS)(l);var n=function(n,t){var r=y(t),i=t[1],e=(0,o.O$)(i),u=[(0,o.O$)(r),-(0,o.mC)(r),0],f=0,c=0;m.reset(),1===e?i=o.ou+o.Ho:-1===e&&(i=-o.ou-o.Ho);for(var l=0,a=n.length;l<a;++l)if(v=(s=n[l]).length)for(var s,v,g=s[v-1],Z=y(g),E=g[1]/2+o.pu,S=(0,o.O$)(E),R=(0,o.mC)(E),M=0;M<v;++M,Z=x,S=H,R=O,g=_){var _=s[M],x=y(_),W=_[1]/2+o.pu,H=(0,o.O$)(W),O=(0,o.mC)(W),C=x-Z,w=C>=0?1:-1,$=w*C,b=$>o.pi,N=S*H;if(m.add((0,o.fv)(N*w*(0,o.O$)($),R*O+N*(0,o.mC)($))),f+=b?C+w*o.BZ:C,b^Z>=r^x>=r){var k=h(p(g),p(_));d(k);var B=h(u,k);d(B);var P=(b^C>=0?-1:1)*(0,o.ZR)(B[2]);(i>P||i===P&&(k[0]||k[1]))&&(c+=b^C>=0?1:-1)}}return(f<-o.Ho||f<o.Ho&&m<-o.Ho)^1&c}(f,i);l.length?(E||(u.polygonStart(),E=!0),c(l,R,n,r,u)):n&&(E||(u.polygonStart(),E=!0),u.lineStart(),r(null,null,1,u),u.lineEnd()),E&&(u.polygonEnd(),E=!1),l=f=null},sphere:function(){u.polygonStart(),u.lineStart(),r(null,null,1,u),u.lineEnd(),u.polygonEnd()}};function _(t,r){n(t,r)&&u.point(t,r)}function x(n,t){s.point(n,t)}function W(){M.point=x,s.lineStart()}function H(){M.point=_,s.lineEnd()}function O(n,t){a.push([n,t]),g.point(n,t)}function C(){g.lineStart(),a=[]}function w(){O(a[0][0],a[0][1]),g.lineEnd();var n,t,r,i,e=g.clean(),o=v.result(),c=o.length;if(a.pop(),f.push(a),a=null,c)if(1&e){if((t=(r=o[0]).length-1)>0){for(E||(u.polygonStart(),E=!0),u.lineStart(),n=0;n<t;++n)u.point((i=r[n])[0],i[1]);u.lineEnd()}}else c>1&&2&e&&o.push(o.pop().concat(o.shift())),l.push(o.filter(S))}return M}}function S(n){return n.length>1}function R(n,t){return((n=n.x)[0]<0?n[1]-o.ou-o.Ho:o.ou-n[1])-((t=t.x)[0]<0?t[1]-o.ou-o.Ho:o.ou-t[1])}var M=E((function(){return!0}),(function(n){var t,r=NaN,i=NaN,e=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,f){var c=u>0?o.pi:-o.pi,l=(0,o.Wn)(u-r);(0,o.Wn)(l-o.pi)<o.Ho?(n.point(r,i=(i+f)/2>0?o.ou:-o.ou),n.point(e,i),n.lineEnd(),n.lineStart(),n.point(c,i),n.point(u,i),t=0):e!==c&&l>=o.pi&&((0,o.Wn)(r-e)<o.Ho&&(r-=e*o.Ho),(0,o.Wn)(u-c)<o.Ho&&(u-=c*o.Ho),i=function(n,t,r,i){var e,u,f=(0,o.O$)(n-r);return(0,o.Wn)(f)>o.Ho?(0,o.z4)(((0,o.O$)(t)*(u=(0,o.mC)(i))*(0,o.O$)(r)-(0,o.O$)(i)*(e=(0,o.mC)(t))*(0,o.O$)(n))/(e*u*f)):(t+i)/2}(r,i,u,f),n.point(e,i),n.lineEnd(),n.lineStart(),n.point(c,i),t=0),n.point(r=u,i=f),e=c},lineEnd:function(){n.lineEnd(),r=i=NaN},clean:function(){return 2-t}}}),(function(n,t,r,i){var e;if(null==n)e=r*o.ou,i.point(-o.pi,e),i.point(0,e),i.point(o.pi,e),i.point(o.pi,0),i.point(o.pi,-e),i.point(0,-e),i.point(-o.pi,-e),i.point(-o.pi,0),i.point(-o.pi,e);else if((0,o.Wn)(n[0]-t[0])>o.Ho){var u=n[0]<t[0]?o.pi:-o.pi;e=r*u/2,i.point(-u,e),i.point(0,e),i.point(u,e)}else i.point(t[0],t[1])}),[-o.pi,-o.ou]);function _(n,t,r,i,e,u){if(r){var f=(0,o.mC)(t),c=(0,o.O$)(t),l=i*r;null==e?(e=t+i*o.BZ,u=t-l/2):(e=x(f,e),u=x(f,u),(i>0?e<u:e>u)&&(e+=i*o.BZ));for(var p,s=e;i>0?s>u:s<u;s-=l)p=a([f,-c*(0,o.mC)(s),-c*(0,o.O$)(s)]),n.point(p[0],p[1])}}function x(n,t){(t=p(t))[0]-=n,d(t);var r=(0,o.Kh)(-t[1]);return((-t[2]<0?-r:r)+o.BZ-o.Ho)%o.BZ}function W(n){var t=(0,o.mC)(n),r=6*o.uR,i=t>0,e=(0,o.Wn)(t)>o.Ho;function f(n,r){return(0,o.mC)(n)*(0,o.mC)(r)>t}function c(n,r,i){var e=[1,0,0],u=h(p(n),p(r)),f=s(u,u),c=u[0],l=f-c*c;if(!l)return!i&&n;var d=t*f/l,m=-t*c/l,y=h(e,u),Z=g(e,d);v(Z,g(u,m));var E=y,S=s(Z,E),R=s(E,E),M=S*S-R*(s(Z,Z)-1);if(!(M<0)){var _=(0,o._b)(M),x=g(E,(-S-_)/R);if(v(x,Z),x=a(x),!i)return x;var W,H=n[0],O=r[0],C=n[1],w=r[1];O<H&&(W=H,H=O,O=W);var $=O-H,b=(0,o.Wn)($-o.pi)<o.Ho;if(!b&&w<C&&(W=C,C=w,w=W),b||$<o.Ho?b?C+w>0^x[1]<((0,o.Wn)(x[0]-H)<o.Ho?C:w):C<=x[1]&&x[1]<=w:$>o.pi^(H<=x[0]&&x[0]<=O)){var N=g(E,(-S+_)/R);return v(N,Z),[x,a(N)]}}}function l(t,r){var e=i?n:o.pi-n,u=0;return t<-e?u|=1:t>e&&(u|=2),r<-e?u|=4:r>e&&(u|=8),u}return E(f,(function(n){var t,r,a,p,s;return{lineStart:function(){p=a=!1,s=1},point:function(h,v){var g,d=[h,v],m=f(h,v),y=i?m?0:l(h,v):m?l(h+(h<0?o.pi:-o.pi),v):0;if(!t&&(p=a=m)&&n.lineStart(),m!==a&&(!(g=c(t,d))||u(t,g)||u(d,g))&&(d[2]=1),m!==a)s=0,m?(n.lineStart(),g=c(d,t),n.point(g[0],g[1])):(g=c(t,d),n.point(g[0],g[1],2),n.lineEnd()),t=g;else if(e&&t&&i^m){var Z;y&r||!(Z=c(d,t,!0))||(s=0,i?(n.lineStart(),n.point(Z[0][0],Z[0][1]),n.point(Z[1][0],Z[1][1]),n.lineEnd()):(n.point(Z[1][0],Z[1][1]),n.lineEnd(),n.lineStart(),n.point(Z[0][0],Z[0][1],3)))}!m||t&&u(t,d)||n.point(d[0],d[1]),t=d,a=m,r=y},lineEnd:function(){a&&n.lineEnd(),t=null},clean:function(){return s|(p&&a)<<1}}}),(function(t,i,e,o){_(o,n,r,e,t,i)}),i?[0,-n]:[-o.pi,n-o.pi])}var H=1e9,O=-H;function C(n,t,r,i){function u(e,o){return n<=e&&e<=r&&t<=o&&o<=i}function f(e,o,u,f){var c=0,a=0;if(null==e||(c=l(e,u))!==(a=l(o,u))||p(e,o)<0^u>0)do{f.point(0===c||3===c?n:r,c>1?i:t)}while((c=(c+u+4)%4)!==a);else f.point(o[0],o[1])}function l(i,e){return(0,o.Wn)(i[0]-n)<o.Ho?e>0?0:3:(0,o.Wn)(i[0]-r)<o.Ho?e>0?2:1:(0,o.Wn)(i[1]-t)<o.Ho?e>0?1:0:e>0?3:2}function a(n,t){return p(n.x,t.x)}function p(n,t){var r=l(n,1),i=l(t,1);return r!==i?r-i:0===r?t[1]-n[1]:1===r?n[0]-t[0]:2===r?n[1]-t[1]:t[0]-n[0]}return function(o){var l,p,s,h,v,g,d,m,y,E,S,R=o,M=e(),_={point:x,lineStart:function(){_.point=W,p&&p.push(s=[]);E=!0,y=!1,d=m=NaN},lineEnd:function(){l&&(W(h,v),g&&y&&M.rejoin(),l.push(M.result()));_.point=x,y&&R.lineEnd()},polygonStart:function(){R=M,l=[],p=[],S=!0},polygonEnd:function(){var t=function(){for(var t=0,r=0,e=p.length;r<e;++r)for(var o,u,f=p[r],c=1,l=f.length,a=f[0],s=a[0],h=a[1];c<l;++c)o=s,u=h,s=(a=f[c])[0],h=a[1],u<=i?h>i&&(s-o)*(i-u)>(h-u)*(n-o)&&++t:h<=i&&(s-o)*(i-u)<(h-u)*(n-o)&&--t;return t}(),r=S&&t,e=(l=(0,Z.TS)(l)).length;(r||e)&&(o.polygonStart(),r&&(o.lineStart(),f(null,null,1,o),o.lineEnd()),e&&c(l,a,t,f,o),o.polygonEnd());R=o,l=p=s=null}};function x(n,t){u(n,t)&&R.point(n,t)}function W(e,o){var f=u(e,o);if(p&&s.push([e,o]),E)h=e,v=o,g=f,E=!1,f&&(R.lineStart(),R.point(e,o));else if(f&&y)R.point(e,o);else{var c=[d=Math.max(O,Math.min(H,d)),m=Math.max(O,Math.min(H,m))],l=[e=Math.max(O,Math.min(H,e)),o=Math.max(O,Math.min(H,o))];!function(n,t,r,i,e,o){var u,f=n[0],c=n[1],l=0,a=1,p=t[0]-f,s=t[1]-c;if(u=r-f,p||!(u>0)){if(u/=p,p<0){if(u<l)return;u<a&&(a=u)}else if(p>0){if(u>a)return;u>l&&(l=u)}if(u=e-f,p||!(u<0)){if(u/=p,p<0){if(u>a)return;u>l&&(l=u)}else if(p>0){if(u<l)return;u<a&&(a=u)}if(u=i-c,s||!(u>0)){if(u/=s,s<0){if(u<l)return;u<a&&(a=u)}else if(s>0){if(u>a)return;u>l&&(l=u)}if(u=o-c,s||!(u<0)){if(u/=s,s<0){if(u>a)return;u>l&&(l=u)}else if(s>0){if(u<l)return;u<a&&(a=u)}return l>0&&(n[0]=f+l*p,n[1]=c+l*s),a<1&&(t[0]=f+a*p,t[1]=c+a*s),!0}}}}}(c,l,n,t,r,i)?f&&(R.lineStart(),R.point(e,o),S=!1):(y||(R.lineStart(),R.point(c[0],c[1])),R.point(l[0],l[1]),f||R.lineEnd(),S=!1)}d=e,m=o,y=f}return _}}var w=r(81319),$=r(59350),b=r(85295);function N(n){return function(t){var r=new k;for(var i in n)r[i]=n[i];return r.stream=t,r}}function k(){}k.prototype={constructor:k,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var B=r(80686),P=(0,o.mC)(30*o.uR);function j(n,t){return+t?function(n,t){function r(i,e,u,f,c,l,a,p,s,h,v,g,d,m){var y=a-i,Z=p-e,E=y*y+Z*Z;if(E>4*t&&d--){var S=f+h,R=c+v,M=l+g,_=(0,o._b)(S*S+R*R+M*M),x=(0,o.ZR)(M/=_),W=(0,o.Wn)((0,o.Wn)(M)-1)<o.Ho||(0,o.Wn)(u-s)<o.Ho?(u+s)/2:(0,o.fv)(R,S),H=n(W,x),O=H[0],C=H[1],w=O-i,$=C-e,b=Z*w-y*$;(b*b/E>t||(0,o.Wn)((y*w+Z*$)/E-.5)>.3||f*h+c*v+l*g<P)&&(r(i,e,u,f,c,l,O,C,W,S/=_,R/=_,M,d,m),m.point(O,C),r(O,C,W,S,R,M,a,p,s,h,v,g,d,m))}}return function(t){var i,e,o,u,f,c,l,a,s,h,v,g,d={point:m,lineStart:y,lineEnd:E,polygonStart:function(){t.polygonStart(),d.lineStart=S},polygonEnd:function(){t.polygonEnd(),d.lineStart=y}};function m(r,i){r=n(r,i),t.point(r[0],r[1])}function y(){a=NaN,d.point=Z,t.lineStart()}function Z(i,e){var o=p([i,e]),u=n(i,e);r(a,s,l,h,v,g,a=u[0],s=u[1],l=i,h=o[0],v=o[1],g=o[2],16,t),t.point(a,s)}function E(){d.point=m,t.lineEnd()}function S(){y(),d.point=R,d.lineEnd=M}function R(n,t){Z(i=n,t),e=a,o=s,u=h,f=v,c=g,d.point=Z}function M(){r(a,s,l,h,v,g,e,o,i,u,f,c,16,t),d.lineEnd=E,E()}return d}}(n,t):function(n){return N({point:function(t,r){t=n(t,r),this.stream.point(t[0],t[1])}})}(n)}var F=N({point:function(n,t){this.stream.point(n*o.uR,t*o.uR)}});function z(n,t,r,i,e){function o(o,u){return[t+n*(o*=i),r-n*(u*=e)]}return o.invert=function(o,u){return[(o-t)/n*i,(r-u)/n*e]},o}function q(n,t,r,i,e,u){var f=(0,o.mC)(u),c=(0,o.O$)(u),l=f*n,a=c*n,p=f/n,s=c/n,h=(c*r-f*t)/n,v=(c*t+f*r)/n;function g(n,o){return[l*(n*=i)-a*(o*=e)+t,r-a*n-l*o]}return g.invert=function(n,t){return[i*(p*n-s*t+h),e*(v-s*n-p*t)]},g}function A(n){return L((function(){return n}))()}function L(n){var t,r,i,e,u,f,c,l,a,p,s=150,h=480,v=250,g=0,d=0,m=0,y=0,Z=0,E=0,S=1,R=1,_=null,x=M,H=null,O=$.Z,k=.5;function P(n){return l(n[0]*o.uR,n[1]*o.uR)}function A(n){return(n=l.invert(n[0],n[1]))&&[n[0]*o.RW,n[1]*o.RW]}function L(){var n=q(s,0,0,S,R,E).apply(null,t(g,d)),i=(E?q:z)(s,h-n[0],v-n[1],S,R,E);return r=(0,b.I)(m,y,Z),c=(0,w.Z)(t,i),l=(0,w.Z)(r,c),f=j(c,k),T()}function T(){return a=p=null,P}return P.stream=function(n){return a&&p===n?a:a=F(function(n){return N({point:function(t,r){var i=n(t,r);return this.stream.point(i[0],i[1])}})}(r)(x(f(O(p=n)))))},P.preclip=function(n){return arguments.length?(x=n,_=void 0,T()):x},P.postclip=function(n){return arguments.length?(O=n,H=i=e=u=null,T()):O},P.clipAngle=function(n){return arguments.length?(x=+n?W(_=n*o.uR):(_=null,M),T()):_*o.RW},P.clipExtent=function(n){return arguments.length?(O=null==n?(H=i=e=u=null,$.Z):C(H=+n[0][0],i=+n[0][1],e=+n[1][0],u=+n[1][1]),T()):null==H?null:[[H,i],[e,u]]},P.scale=function(n){return arguments.length?(s=+n,L()):s},P.translate=function(n){return arguments.length?(h=+n[0],v=+n[1],L()):[h,v]},P.center=function(n){return arguments.length?(g=n[0]%360*o.uR,d=n[1]%360*o.uR,L()):[g*o.RW,d*o.RW]},P.rotate=function(n){return arguments.length?(m=n[0]%360*o.uR,y=n[1]%360*o.uR,Z=n.length>2?n[2]%360*o.uR:0,L()):[m*o.RW,y*o.RW,Z*o.RW]},P.angle=function(n){return arguments.length?(E=n%360*o.uR,L()):E*o.RW},P.reflectX=function(n){return arguments.length?(S=n?-1:1,L()):S<0},P.reflectY=function(n){return arguments.length?(R=n?-1:1,L()):R<0},P.precision=function(n){return arguments.length?(f=j(c,k=n*n),T()):(0,o._b)(k)},P.fitExtent=function(n,t){return(0,B.qg)(P,n,t)},P.fitSize=function(n,t){return(0,B.mF)(P,n,t)},P.fitWidth=function(n,t){return(0,B.V6)(P,n,t)},P.fitHeight=function(n,t){return(0,B.rf)(P,n,t)},function(){return t=n.apply(this,arguments),P.invert=t.invert&&A,L()}}},15317:function(n,t,r){r.d(t,{hk:function(){return u},ZP:function(){return f},iW:function(){return c}});var i=r(66573),e=r(85295),o=r(73883);function u(n,t){return[n,(0,i.cM)((0,i.OR)((i.ou+t)/2))]}function f(){return c(u).scale(961/i.BZ)}function c(n){var t,r,f,c=(0,o.Z)(n),l=c.center,a=c.scale,p=c.translate,s=c.clipExtent,h=null;function v(){var o=i.pi*a(),l=c((0,e.Z)(c.rotate()).invert([0,0]));return s(null==h?[[l[0]-o,l[1]-o],[l[0]+o,l[1]+o]]:n===u?[[Math.max(l[0]-o,h),t],[Math.min(l[0]+o,r),f]]:[[h,Math.max(l[1]-o,t)],[r,Math.min(l[1]+o,f)]])}return c.scale=function(n){return arguments.length?(a(n),v()):a()},c.translate=function(n){return arguments.length?(p(n),v()):p()},c.center=function(n){return arguments.length?(l(n),v()):l()},c.clipExtent=function(n){return arguments.length?(null==n?h=t=r=f=null:(h=+n[0][0],t=+n[0][1],r=+n[1][0],f=+n[1][1]),v()):null==h?null:[[h,t],[r,f]]},v()}u.invert=function(n,t){return[n,2*(0,i.z4)((0,i.Qq)(t))-i.ou]}},42617:function(n,t,r){r.d(t,{Z:function(){return u}});var i=r(73883),e=r(66573);function o(n,t){var r=t*t,i=r*r;return[n*(.8707-.131979*r+i*(i*(.003971*r-.001529*i)-.013791)),t*(1.007226+r*(.015085+i*(.028874*r-.044475-.005916*i)))]}function u(){return(0,i.Z)(o).scale(175.295)}o.invert=function(n,t){var r,i=t,o=25;do{var u=i*i,f=u*u;i-=r=(i*(1.007226+u*(.015085+f*(.028874*u-.044475-.005916*f)))-t)/(1.007226+u*(.045255+f*(.259866*u-.311325-.005916*11*f)))}while((0,e.Wn)(r)>e.Ho&&--o>0);return[n/(.8707+(u=i*i)*(u*(u*u*u*(.003971-.001529*u)-.013791)-.131979)),i]}},77792:function(n,t,r){r.d(t,{Z:function(){return f}});var i=r(66573),e=r(82210),o=r(73883);function u(n,t){return[(0,i.mC)(t)*(0,i.O$)(n),(0,i.O$)(t)]}function f(){return(0,o.Z)(u).scale(249.5).clipAngle(90+i.Ho)}u.invert=(0,e.O)(i.ZR)},85295:function(n,t,r){r.d(t,{I:function(){return u},Z:function(){return a}});var i=r(81319),e=r(66573);function o(n,t){return[(0,e.Wn)(n)>e.pi?n+Math.round(-n/e.BZ)*e.BZ:n,t]}function u(n,t,r){return(n%=e.BZ)?t||r?(0,i.Z)(c(n),l(t,r)):c(n):t||r?l(t,r):o}function f(n){return function(t,r){return[(t+=n)>e.pi?t-e.BZ:t<-e.pi?t+e.BZ:t,r]}}function c(n){var t=f(n);return t.invert=f(-n),t}function l(n,t){var r=(0,e.mC)(n),i=(0,e.O$)(n),o=(0,e.mC)(t),u=(0,e.O$)(t);function f(n,t){var f=(0,e.mC)(t),c=(0,e.mC)(n)*f,l=(0,e.O$)(n)*f,a=(0,e.O$)(t),p=a*r+c*i;return[(0,e.fv)(l*o-p*u,c*r-a*i),(0,e.ZR)(p*o+l*u)]}return f.invert=function(n,t){var f=(0,e.mC)(t),c=(0,e.mC)(n)*f,l=(0,e.O$)(n)*f,a=(0,e.O$)(t),p=a*o-l*u;return[(0,e.fv)(l*o+a*u,c*r+p*i),(0,e.ZR)(p*r-c*i)]},f}function a(n){function t(t){return(t=n(t[0]*e.uR,t[1]*e.uR))[0]*=e.RW,t[1]*=e.RW,t}return n=u(n[0]*e.uR,n[1]*e.uR,n.length>2?n[2]*e.uR:0),t.invert=function(t){return(t=n.invert(t[0]*e.uR,t[1]*e.uR))[0]*=e.RW,t[1]*=e.RW,t},t}o.invert=o},60600:function(n,t,r){function i(n,t){n&&o.hasOwnProperty(n.type)&&o[n.type](n,t)}r.d(t,{Z:function(){return c}});var e={Feature:function(n,t){i(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,e=-1,o=r.length;++e<o;)i(r[e].geometry,t)}},o={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)n=r[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){u(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)u(r[i],t,0)},Polygon:function(n,t){f(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)f(r[i],t)},GeometryCollection:function(n,t){for(var r=n.geometries,e=-1,o=r.length;++e<o;)i(r[e],t)}};function u(n,t,r){var i,e=-1,o=n.length-r;for(t.lineStart();++e<o;)i=n[e],t.point(i[0],i[1],i[2]);t.lineEnd()}function f(n,t){var r=-1,i=n.length;for(t.polygonStart();++r<i;)u(n[r],t,1);t.polygonEnd()}function c(n,t){n&&e.hasOwnProperty(n.type)?e[n.type](n,t):i(n,t)}},79492:function(n,t,r){function i(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function e(n){var t;return 1===n.length&&(t=n,n=function(n,r){return i(t(n),r)}),{left:function(t,r,i,e){for(null==i&&(i=0),null==e&&(e=t.length);i<e;){var o=i+e>>>1;n(t[o],r)<0?i=o+1:e=o}return i},right:function(t,r,i,e){for(null==i&&(i=0),null==e&&(e=t.length);i<e;){var o=i+e>>>1;n(t[o],r)>0?e=o:i=o+1}return i}}}r.d(t,{YF:function(){return e},We:function(){return u},Fp:function(){return c},TS:function(){return l},w6:function(){return a},p4:function(){return p}});var o=e(i);o.right,o.left;function u(n,t){var r,i,e,o=n.length,u=-1;if(null==t){for(;++u<o;)if(null!=(r=n[u])&&r>=r)for(i=e=r;++u<o;)null!=(r=n[u])&&(i>r&&(i=r),e<r&&(e=r))}else for(;++u<o;)if(null!=(r=t(n[u],u,n))&&r>=r)for(i=e=r;++u<o;)null!=(r=t(n[u],u,n))&&(i>r&&(i=r),e<r&&(e=r));return[i,e]}var f=Array.prototype;f.slice,f.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);function c(n,t){var r,i,e=n.length,o=-1;if(null==t){for(;++o<e;)if(null!=(r=n[o])&&r>=r)for(i=r;++o<e;)null!=(r=n[o])&&r>i&&(i=r)}else for(;++o<e;)if(null!=(r=t(n[o],o,n))&&r>=r)for(i=r;++o<e;)null!=(r=t(n[o],o,n))&&r>i&&(i=r);return i}function l(n){for(var t,r,i,e=n.length,o=-1,u=0;++o<e;)u+=n[o].length;for(r=new Array(u);--e>=0;)for(t=(i=n[e]).length;--t>=0;)r[--u]=i[t];return r}function a(n,t,r){n=+n,t=+t,r=(e=arguments.length)<2?(t=n,n=0,1):e<3?1:+r;for(var i=-1,e=0|Math.max(0,Math.ceil((t-n)/r)),o=new Array(e);++i<e;)o[i]=n+i*r;return o}function p(n){if(!(e=n.length))return[];for(var t=-1,r=function(n,t){var r,i,e=n.length,o=-1;if(null==t){for(;++o<e;)if(null!=(r=n[o])&&r>=r)for(i=r;++o<e;)null!=(r=n[o])&&i>r&&(i=r)}else for(;++o<e;)if(null!=(r=t(n[o],o,n))&&r>=r)for(i=r;++o<e;)null!=(r=t(n[o],o,n))&&i>r&&(i=r);return i}(n,s),i=new Array(r);++t<r;)for(var e,o=-1,u=i[t]=new Array(e);++o<e;)u[o]=n[o][t];return i}function s(n){return n.length}},48523:function(n,t,r){function i(n){return n}function e(n,t){return"string"===typeof t&&(t=n.objects[t]),"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map((function(t){return o(n,t)}))}:o(n,t)}function o(n,t){var r=t.id,e=t.bbox,o=null==t.properties?{}:t.properties,u=function(n,t){var r=function(n){if(null==n)return i;var t,r,e=n.scale[0],o=n.scale[1],u=n.translate[0],f=n.translate[1];return function(n,i){i||(t=r=0);var c=2,l=n.length,a=new Array(l);for(a[0]=(t+=n[0])*e+u,a[1]=(r+=n[1])*o+f;c<l;)a[c]=n[c],++c;return a}}(n.transform),e=n.arcs;function o(n,t){t.length&&t.pop();for(var i=e[n<0?~n:n],o=0,u=i.length;o<u;++o)t.push(r(i[o],o));n<0&&function(n,t){for(var r,i=n.length,e=i-t;e<--i;)r=n[e],n[e++]=n[i],n[i]=r}(t,u)}function u(n){return r(n)}function f(n){for(var t=[],r=0,i=n.length;r<i;++r)o(n[r],t);return t.length<2&&t.push(t[0]),t}function c(n){for(var t=f(n);t.length<4;)t.push(t[0]);return t}function l(n){return n.map(c)}function a(n){var t,r=n.type;switch(r){case"GeometryCollection":return{type:r,geometries:n.geometries.map(a)};case"Point":t=u(n.coordinates);break;case"MultiPoint":t=n.coordinates.map(u);break;case"LineString":t=f(n.arcs);break;case"MultiLineString":t=n.arcs.map(f);break;case"Polygon":t=l(n.arcs);break;case"MultiPolygon":t=n.arcs.map(l);break;default:return null}return{type:r,coordinates:t}}return a(t)}(n,t);return null==r&&null==e?{type:"Feature",properties:o,geometry:u}:null==e?{type:"Feature",id:r,properties:o,geometry:u}:{type:"Feature",id:r,bbox:e,properties:o,geometry:u}}r.d(t,{Z:function(){return e}})}}]);