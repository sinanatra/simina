import{S as z,i as A,s as L,k as d,l as b,m as k,h as f,n as p,b as H,H as w,O as R,q as Q,a as x,Q as B,r as F,c as E,R as J,G as g,P as K}from"../chunks/index.44ad13ec.js";const N=async({fetch:c})=>({posts:await(await c("/api/projects")).json()}),Y=Object.freeze(Object.defineProperty({__proto__:null,load:N},Symbol.toStringTag,{value:"Module"}));function C(c,t,s){const e=c.slice();return e[3]=t[s],e}function D(c,t,s){const e=c.slice();return e[6]=t[s],e}function G(c){let t,s;return{c(){t=d("img"),this.h()},l(e){t=b(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){var e,a;K(t.src,s=c[6])||p(t,"src",s),p(t,"alt"," "+((a=(e=c[3])==null?void 0:e.meta)==null?void 0:a.title)),p(t,"class","svelte-v06hah")},m(e,a){H(e,t,a)},p:w,d(e){e&&f(t)}}}function M(c){var I,S,q,O,P;let t,s,e=((S=(I=c[3])==null?void 0:I.meta)==null?void 0:S.title)+"",a,n,l,u,y,V=((q=c[3])==null?void 0:q.text)+"",j,m=(P=(O=c[3])==null?void 0:O.meta)==null?void 0:P.media,r=[];for(let i=0;i<m.length;i+=1)r[i]=G(D(c,m,i));return{c(){t=d("div"),s=d("h1"),a=Q(e),n=x(),l=d("div");for(let i=0;i<r.length;i+=1)r[i].c();u=x(),y=new B(!1),j=x(),this.h()},l(i){t=b(i,"DIV",{class:!0});var h=k(t);s=b(h,"H1",{});var _=k(s);a=F(_,e),_.forEach(f),n=E(h),l=b(h,"DIV",{class:!0});var v=k(l);for(let o=0;o<r.length;o+=1)r[o].l(v);v.forEach(f),u=E(h),y=J(h,!1),j=E(h),h.forEach(f),this.h()},h(){p(l,"class","images svelte-v06hah"),y.a=j,p(t,"class","svelte-v06hah")},m(i,h){H(i,t,h),g(t,s),g(s,a),g(t,n),g(t,l);for(let _=0;_<r.length;_+=1)r[_]&&r[_].m(l,null);g(t,u),y.m(V,t),g(t,j)},p(i,h){var _,v;if(h&1){m=(v=(_=i[3])==null?void 0:_.meta)==null?void 0:v.media;let o;for(o=0;o<m.length;o+=1){const T=D(i,m,o);r[o]?r[o].p(T,h):(r[o]=G(T),r[o].c(),r[o].m(l,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=m.length}},d(i){i&&f(t),R(r,i)}}}function U(c){let t,s=c[0],e=[];for(let a=0;a<s.length;a+=1)e[a]=M(C(c,s,a));return{c(){t=d("article");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=b(a,"ARTICLE",{class:!0});var n=k(t);for(let l=0;l<e.length;l+=1)e[l].l(n);n.forEach(f),this.h()},h(){p(t,"class","svelte-v06hah")},m(a,n){H(a,t,n);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null)},p(a,[n]){if(n&1){s=a[0];let l;for(l=0;l<s.length;l+=1){const u=C(a,s,l);e[l]?e[l].p(u,n):(e[l]=M(u),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=s.length}},i:w,o:w,d(a){a&&f(t),R(e,a)}}}function W(c,t,s){let{data:e}=t,a=e.posts.filter(n=>{var l;return(l=n==null?void 0:n.meta)==null?void 0:l.title});return e.posts.find(n=>(n==null?void 0:n.path)=="/texts/about"),c.$$set=n=>{"data"in n&&s(1,e=n.data)},[a,e]}class Z extends z{constructor(t){super(),A(this,t,W,U,L,{data:1})}}export{Z as component,Y as universal};
