import{j as v,a as x}from"./mathUtils-505ef34b.js";import{e as D,u as p}from"./screenUtils-7afeb41c.js";import{n as E}from"./vec4f64-aa64c7e9.js";const b=2.4;function S(t){return D(t*b)}function V(t){return p(t)/b}function G(t,o,r,e){let{color:f,ratio:a}=o,{color:c,ratio:n}=r;n===a&&(n===1?a-=1e-6:n+=1e-6);const i=x((e-a)/(n-a),0,1);v(t,f.toArray(),c.toArray(),i)}function Y(t){const r=new Uint8ClampedArray(2048);if(t=t.filter(({ratio:n})=>n>=0&&n<=1).sort((n,i)=>n.ratio-i.ratio).map(({color:n,ratio:i})=>({color:n,ratio:Math.max(i,.001)})),t.length<1)return r;let e=t[0],f=t[0],a=1;const c=E();for(let n=0;n<512;n++){const i=(n+.5)/512;for(;i>f.ratio&&a<t.length;)e=f,f=t[a++];G(c,e,f,i),r.set(c,4*n)}return r}function _(t,o,r,e){const{radius:f,fieldOffset:a,field:c}=o,n=Math.round(p(f)),i=new Float64Array(r*e);let s,l=Number.NEGATIVE_INFINITY;const g=T(c,a),A=new Set;for(const w of t){const h=w.getCursor();for(;h.next();){const M=h.getObjectId();if(A.has(M))continue;A.add(M);const u=h.readLegacyPointGeometry(),y=128;if(u.x<-y||u.x>=r+y||u.y<-y||u.y>e+y)continue;const I=+g(h),U=Math.max(0,Math.round(u.x)-n),N=Math.max(0,Math.round(u.y)-n),C=Math.min(e,Math.round(u.y)+n),F=Math.min(r,Math.round(u.x)+n);for(let m=N;m<C;m++)for(let d=U;d<F;d++){const $=m*r+d,j=P(u.x-d,u.y-m,n);s=i[$]+=j*I,s>l&&(l=s)}}}return{matrix:i.buffer,max:l}}function k(t,o,r,e,f,a){t.canvas.width=t.canvas.height=o,t.clearRect(0,0,o,o);const c=t.getImageData(0,0,o,o);r&&e&&c.data.set(new Uint8ClampedArray(O(o,r,e,f,a))),t.putImageData(c,0,0)}function O(t,o,r,e,f){const a=new Uint32Array(t*t),c="buffer"in o?o:new Float64Array(o),n="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),i=n.length/(f-e);for(let s=0;s<c.length;s++){const l=c[s],g=Math.floor((l-e)*i);a[s]=n[x(g,0,n.length-1)]}return a.buffer}function P(t,o,r){const e=Math.sqrt(t**2+o**2)/r;return e>1?0:3/(Math.PI*r**2)*(1-e**2)**2}function z(t,o){return typeof t=="function"?t:t?typeof o=="string"?r=>-1*+r[t]:r=>+r[t]+o:()=>1}function T(t,o){return t!=null?typeof o=="string"?r=>-1*+r.readAttribute(t):r=>+r.readAttribute(t)+o:r=>1}export{b as a,V as c,S as i,k as l,P as m,_ as s,Y as u,z as y};