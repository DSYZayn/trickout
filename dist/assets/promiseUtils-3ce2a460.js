import"./string-bf9c68ed.js";import{a as $}from"./Error-9392329b.js";import{r as g,t as w,p as D,N as E}from"./typedArrayUtil-c81d173a.js";function C(e){return{setTimeout:(r,n)=>{const t=e.setTimeout(r,n);return{remove:()=>e.clearTimeout(t)}}}}const S=C(globalThis);function T(e){return e&&(typeof e.on=="function"||typeof e.addEventListener=="function")}function k(e,r,n){if(!T(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(r,n);if(Array.isArray(r)){const t=r.slice();for(const o of t)e.addEventListener(o,n);return{remove(){for(const o of t)e.removeEventListener(o,n)}}}return e.addEventListener(r,n),{remove(){e.removeEventListener(r,n)}}}function j(e,r,n){if(!T(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(r,n);const t=k(e,r,o=>{t.remove(),n.call(e,o)});return{remove(){t.remove()}}}const x={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function q({key:e}){return x[e]||e}function a(e="Aborted"){return new $("AbortError",e)}function L(e,r="Aborted"){if(M(e))throw a(r)}function f(e){return g(e)?"aborted"in e?e:e.signal:e}function M(e){const r=f(e);return g(r)&&r.aborted}function z(e){if(h(e))throw e}function B(e){if(!h(e))throw e}function v(e,r){const n=f(e);if(!w(n)){if(!n.aborted)return j(n,"abort",()=>r());r()}}function F(e,r){const n=f(e);if(!w(n))return L(n),j(n,"abort",()=>r(a()))}function G(e,r){const n=f(r);return w(n)?e:new Promise((t,o)=>{let i=v(r,()=>o(a()));const c=()=>i=D(i);e.then(c,c),e.then(t,o)})}function h(e){return(e==null?void 0:e.name)==="AbortError"}async function H(e){try{return await e}catch(r){if(!h(r))throw r;return}}function y(){let e=null;const r=new Promise((n,t)=>{e={promise:void 0,resolve:n,reject:t}});return e.promise=r,e}async function P(e){if(!e)return;if(typeof e.forEach!="function"){const n=Object.keys(e),t=n.map(c=>e[c]),o=await P(t),i={};return n.map((c,s)=>i[c]=o[s]),i}const r=e;return new Promise(n=>{const t=[];let o=r.length;o===0&&n(t),r.forEach(i=>{const c={promise:i||Promise.resolve(i)};t.push(c),c.promise.then(s=>{c.value=s}).catch(s=>{c.error=s}).then(()=>{--o,o===0&&n(t)})})})}async function I(e){return(await P(e)).filter(r=>!!r.value).map(r=>r.value)}function U(e,r,n){const t=new AbortController;return v(n,()=>t.abort()),new Promise((o,i)=>{let c=setTimeout(()=>{c=0,o(r)},e);v(t,()=>{c&&(clearTimeout(c),i(a()))})})}function O(e){return e&&typeof e.then=="function"}function A(e){return O(e)?e:Promise.resolve(e)}function J(e,r=-1){let n,t,o,i,c=null;const s=(...l)=>{if(n){t=l,i&&i.reject(a()),i=y();const u=E(i.promise);if(c){const p=c;c=null,p.abort()}return u}if(o=i||y(),i=null,r>0){const u=new AbortController;n=A(e(...l,u.signal));const p=n;U(r).then(()=>{n===p&&(i?u.abort():c=u)})}else n=1,n=A(e(...l));const b=()=>{const u=t;t=o=n=c=null,u!=null&&s(...u)},d=n,m=o;return d.then(b,b),d.then(m.resolve,m.reject),E(m.promise)};return s}function K(){let e,r;const n=new Promise((o,i)=>{e=o,r=i}),t=o=>{e(o)};return t.resolve=o=>e(o),t.reject=o=>r(o),t.timeout=(o,i)=>S.setTimeout(()=>t.reject(i),o),t.promise=n,t}async function Q(e){await Promise.resolve(),L(e)}export{A as $,y as A,O as C,K as D,P as E,I as L,Q as O,U,a,B as b,F as d,T as e,L as f,H as g,q as i,h as j,M as p,k as r,S as t,v,z as w,J as x,G as y};
