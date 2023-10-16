import{e as Y}from"./mat3f64-221ce671.js";import{e as x}from"./quatf64-3363c48e.js";import{d as A,w as D,q as L,y as O,A as S,B as T,j as w,C as B,D as C,E as G,G as W,I as X,P as Z,_ as g,Y as k,z as F,n as H,c as _,e as J}from"./mathUtils-505ef34b.js";function K(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function b(n,o,a){a*=.5;const r=Math.sin(a);return n[0]=r*o[0],n[1]=r*o[1],n[2]=r*o[2],n[3]=Math.cos(a),n}function N(n,o){const a=2*Math.acos(o[3]),r=Math.sin(a/2);return r>A()?(n[0]=o[0]/r,n[1]=o[1]/r,n[2]=o[2]/r):(n[0]=1,n[1]=0,n[2]=0),a}function z(n,o,a){const r=o[0],e=o[1],c=o[2],t=o[3],u=a[0],i=a[1],h=a[2],M=a[3];return n[0]=r*M+t*u+e*h-c*i,n[1]=e*M+t*i+c*u-r*h,n[2]=c*M+t*h+r*i-e*u,n[3]=t*M-r*u-e*i-c*h,n}function Q(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+t*u,n[1]=e*i+c*u,n[2]=c*i-e*u,n[3]=t*i-r*u,n}function R(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i-c*u,n[1]=e*i+t*u,n[2]=c*i+r*u,n[3]=t*i-e*u,n}function U(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+e*u,n[1]=e*i-r*u,n[2]=c*i+t*u,n[3]=t*i-c*u,n}function V(n,o){const a=o[0],r=o[1],e=o[2];return n[0]=a,n[1]=r,n[2]=e,n[3]=Math.sqrt(Math.abs(1-a*a-r*r-e*e)),n}function d(n,o,a,r){const e=o[0],c=o[1],t=o[2],u=o[3];let i,h,M,l,f,m=a[0],q=a[1],p=a[2],$=a[3];return h=e*m+c*q+t*p+u*$,h<0&&(h=-h,m=-m,q=-q,p=-p,$=-$),1-h>A()?(i=Math.acos(h),M=Math.sin(i),l=Math.sin((1-r)*i)/M,f=Math.sin(r*i)/M):(l=1-r,f=r),n[0]=l*e+f*m,n[1]=l*c+f*q,n[2]=l*t+f*p,n[3]=l*u+f*$,n}function nn(n){const o=J,a=o(),r=o(),e=o(),c=Math.sqrt(1-a),t=Math.sqrt(a);return n[0]=c*Math.sin(2*Math.PI*r),n[1]=c*Math.cos(2*Math.PI*r),n[2]=t*Math.sin(2*Math.PI*e),n[3]=t*Math.cos(2*Math.PI*e),n}function on(n,o){const a=o[0],r=o[1],e=o[2],c=o[3],t=a*a+r*r+e*e+c*c,u=t?1/t:0;return n[0]=-a*u,n[1]=-r*u,n[2]=-e*u,n[3]=c*u,n}function rn(n,o){return n[0]=-o[0],n[1]=-o[1],n[2]=-o[2],n[3]=o[3],n}function E(n,o){const a=o[0]+o[4]+o[8];let r;if(a>0)r=Math.sqrt(a+1),n[3]=.5*r,r=.5/r,n[0]=(o[5]-o[7])*r,n[1]=(o[6]-o[2])*r,n[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const c=(e+1)%3,t=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*c+c]-o[3*t+t]+1),n[e]=.5*r,r=.5/r,n[3]=(o[3*c+t]-o[3*t+c])*r,n[c]=(o[3*c+e]+o[3*e+c])*r,n[t]=(o[3*t+e]+o[3*e+t])*r}return n}function en(n,o,a,r){const e=.5*Math.PI/180;o*=e,a*=e,r*=e;const c=Math.sin(o),t=Math.cos(o),u=Math.sin(a),i=Math.cos(a),h=Math.sin(r),M=Math.cos(r);return n[0]=c*i*M-t*u*h,n[1]=t*u*M+c*i*h,n[2]=t*i*h-c*u*M,n[3]=t*i*M+c*u*h,n}function an(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const cn=D,tn=L,un=O,hn=z,Mn=S,sn=T,ln=w,j=B,fn=j,v=C,mn=v,y=G,qn=W,pn=X;function $n(n,o,a){const r=Z(o,a);return r<-.999999?(g(s,dn,o),k(s)<1e-6&&g(s,gn,o),F(s,s),b(n,s,Math.PI),n):r>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(g(s,o,a),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=1+r,y(n,n))}const s=H(),dn=_(1,0,0),gn=_(0,1,0);function yn(n,o,a,r,e,c){return d(I,o,e,c),d(P,a,r,c),d(n,I,P,2*c*(1-c)),n}const I=x(),P=x();function In(n,o,a,r){const e=Pn;return e[0]=a[0],e[3]=a[1],e[6]=a[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],y(n,E(n,e))}const Pn=Y();Object.freeze(Object.defineProperty({__proto__:null,add:un,calculateW:V,conjugate:rn,copy:cn,dot:sn,equals:pn,exactEquals:qn,fromEuler:en,fromMat3:E,getAxisAngle:N,identity:K,invert:on,len:fn,length:j,lerp:ln,mul:hn,multiply:z,normalize:y,random:nn,rotateX:Q,rotateY:R,rotateZ:U,rotationTo:$n,scale:Mn,set:tn,setAxes:In,setAxisAngle:b,slerp:d,sqlerp:yn,sqrLen:mn,squaredLength:v,str:an},Symbol.toStringTag,{value:"Module"}));export{qn as K,rn as S,en as k,b as v,N as x,z as y};
