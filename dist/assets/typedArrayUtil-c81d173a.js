function a(n){return n!=null}function l(n){return n==null}function g(n,t){return a(n)?t(n):null}function w(n){return n}function x(n,t){return m(n,t),n}function m(n,t){if(l(n))throw new Error(t??"value is None")}function I(n,t){return a(n)?n:typeof t=="function"?t():t}function _(n,t){return a(n)?n:t}function v(n){return a(n)&&n.destroy(),null}function b(n){return a(n)&&n.dispose(),null}function F(n){return a(n)&&n.remove(),null}function M(n){return a(n)&&n.abort(),null}function R(n){return a(n)&&n.release(),null}function U(n,t,r){return a(n)&&a(t)?a(r)?r(n,t):n.equals(t):n===t}function q(n){return null}function z(n,t){const r=new Array;for(const e of n)r.push($(e,null,t));return r}function E(n,t){for(const r of n)g(r,t)}function $(n,t,r){return a(n)?r(n):t}function O(n){return n.filter(t=>a(t))}function B(n,...t){let r=n;for(let e=0;e<t.length&&r;++e)r=r[t[e]];return r}function C(n){return n}let h=class f{constructor(t=1){this._seed=t}set seed(t){this._seed=t??Math.random()*f._m}getInt(){return this._seed=(f._a*this._seed+f._c)%f._m,this._seed}getFloat(){return this.getInt()/(f._m-1)}getIntRange(t,r){return Math.round(this.getFloatRange(t,r))}getFloatRange(t,r){const e=r-t;return t+this.getInt()/f._m*e}};h._m=2147483647,h._a=48271,h._c=0;function N(n,t){return t?n.filter((r,e,s)=>s.findIndex(t.bind(null,r))===e):n.filter((r,e,s)=>s.indexOf(r)===e)}function S(n,t,r){if(l(n)&&l(t))return!0;if(l(n)||l(t)||n.length!==t.length)return!1;if(r){for(let e=0;e<n.length;e++)if(!r(n[e],t[e]))return!1}else for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function j(n,t){let r=n.length!==t.length;r&&(n.length=t.length);for(let e=0;e<t.length;++e)n[e]!==t[e]&&(n[e]=t[e],r=!0);return r}function k(n,t,r){let e,s;return r?(e=t.filter(c=>!n.some(o=>r(o,c))),s=n.filter(c=>!t.some(o=>r(o,c)))):(e=t.filter(c=>!n.includes(c)),s=n.filter(c=>!t.includes(c))),{added:e,removed:s}}function D(n){return n&&typeof n.length=="number"}const y=!!Array.prototype.fill;function G(n,t){if(y)return new Array(n).fill(t);const r=new Array(n);for(let e=0;e<n;e++)r[e]=t;return r}function H(n,t){t===void 0&&(t=n,n=0);const r=new Array(t-n);for(let e=n;e<t;e++)r[e-n]=e;return r}class A{constructor(){this.last=0}}const d=new A;function p(n,t,r,e){e=e||d;const s=Math.max(0,e.last-10);for(let o=s;o<r;++o)if(n[o]===t)return e.last=o,o;const c=Math.min(s,r);for(let o=0;o<c;++o)if(n[o]===t)return e.last=o,o;return-1}function J(n,t,r,e){const s=r??n.length,c=p(n,t,s,e);if(c!==-1)return n[c]=n[s-1],r==null&&n.pop(),t}const i=new Set;function K(n,t,r=n.length,e=t.length,s,c){if(e===0||r===0)return r;i.clear();for(let u=0;u<e;++u)i.add(t[u]);s=s||d;const o=Math.max(0,s.last-10);for(let u=o;u<r;++u)if(i.has(n[u])&&(c&&c.push(n[u]),i.delete(n[u]),n[u]=n[r-1],--r,--u,i.size===0||r===0))return i.clear(),r;for(let u=0;u<o;++u)if(i.has(n[u])&&(c&&c.push(n[u]),i.delete(n[u]),n[u]=n[r-1],--r,--u,i.size===0||r===0))return i.clear(),r;return i.clear(),r}function L(n,t){const r=n.indexOf(t);return r!==-1?(n.splice(r,1),t):null}function P(n){return n instanceof ArrayBuffer}function Q(n){return n&&n.constructor&&n.constructor.name==="Int8Array"}function T(n){return n&&n.constructor&&n.constructor.name==="Uint8Array"}function V(n){return n&&n.constructor&&n.constructor.name==="Uint8ClampedArray"}function W(n){return n&&n.constructor&&n.constructor.name==="Int16Array"}function X(n){return n&&n.constructor&&n.constructor.name==="Uint16Array"}function Y(n){return n&&n.constructor&&n.constructor.name==="Int32Array"}function Z(n){return n&&n.constructor&&n.constructor.name==="Uint32Array"}function nn(n){return n&&n.constructor&&n.constructor.name==="Float32Array"}function tn(n){return n&&n.constructor&&n.constructor.name==="Float64Array"}const rn=1024;export{I as A,$ as B,J as C,U as D,D as E,L as F,b as G,j as H,h as I,z as J,E as K,R as L,G as M,C as N,H as O,rn as P,O as Q,P as R,k as S,v as a,A as b,x as c,p as d,w as e,S as f,T as g,V as h,m as i,K as j,W as k,X as l,Y as m,Q as n,g as o,F as p,Z as q,a as r,_ as s,l as t,N as u,q as v,M as w,B as x,nn as y,tn as z};
