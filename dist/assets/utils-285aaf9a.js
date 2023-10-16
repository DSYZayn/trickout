import{_ as g}from"./preload-helper-41c905a7.js";import{l as u}from"./Color-46910694.js";import{x as h,a as p,l as z}from"./symbols-426355d5.js";import{c as S}from"./asyncUtils-d59cad3c.js";import"./string-bf9c68ed.js";import{r as a,t as b,e as w}from"./typedArrayUtil-c81d173a.js";import{l as x}from"./mathUtils-505ef34b.js";import"./Error-9392329b.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./assets-86d142ff.js";import"./request-16c6134d.js";import{e as _}from"./ItemCache-28393d1d.js";new _(1e3);new u([128,128,128]);const v=new u("white");function W(t,o){if(!t)return null;let n=null;return h(t)?n=L(t):p(t)&&(n=t.color?new u(t.color):null),n?f(n,o):null}function L(t){const o=t.symbolLayers;if(!o)return null;let n=null;return o.forEach(r=>{var i;r.type==="object"&&((i=r.resource)==null?void 0:i.href)!=null||(n=r.type==="water"?w(r.color):a(r.material)?w(r.material.color):null)}),n?new u(n):null}function f(t,o){if(o==null||t==null)return t;const n=t.toRgba();return n[3]=n[3]*o,new u(n)}function j(t,o,n){const r=t.symbolLayers;if(!r)return;const i=l=>{const c=a(l)?l:null;return f(o=o??c??(n!=null?v:null),n)};r.forEach(l=>{var c;if(l.type!=="object"||((c=l.resource)==null?void 0:c.href)==null||o)if(l.type==="water")l.color=i(l.color);else{const m=a(l.material)?l.material.color:null,e=i(m);b(l.material)?l.material=new z({color:e}):l.material.color=e,n!=null&&"outline"in l&&a(l.outline)&&a(l.outline.color)&&(l.outline.color=f(l.outline.color,n))}})}function E(t,o,n){(o=o??t.color)&&(t.color=f(o,n)),n!=null&&"outline"in t&&t.outline&&t.outline.color&&(t.outline.color=f(t.outline.color,n))}function X(t,o,n){t&&(o||n!=null)&&(o&&(o=new u(o)),h(t)?j(t,o,n):p(t)&&E(t,o,n))}async function $(t,o){const n=t.symbolLayers;n&&await S(n,async r=>R(r,o))}async function R(t,o){switch(t.type){case"extrude":O(t,o);break;case"icon":case"line":case"text":I(t,o);break;case"path":C(t,o);break;case"object":await A(t,o)}}function I(t,o){const n=d(o);a(n)&&(t.size=n)}function d(t){for(const o of t)if(typeof o=="number")return o;return null}function O(t,o){t.size=typeof o[2]=="number"?o[2]:0}async function A(t,o){const{resourceSize:n,symbolSize:r}=await D(t),i=k(o,n,r);t.width=s(o[0],r[0],n[0],i),t.depth=s(o[1],r[1],n[1],i),t.height=s(o[2],r[2],n[2],i)}function C(t,o){const n=k(o,x,[t.width,void 0,t.height]);t.width=s(o[0],t.width,1,n),t.height=s(o[2],t.height,1,n)}function k(t,o,n){for(let r=0;r<3;r++){const i=t[r];switch(i){case"symbol-value":{const l=n[r];return l!=null?l/o[r]:1}case"proportional":break;default:if(i&&o[r])return i/o[r]}}return 1}async function D(t){const o=await g(()=>import("./symbolLayerUtils-a100fef5.js"),["./symbolLayerUtils-a100fef5.js","./preload-helper-41c905a7.js","./request-16c6134d.js","./Error-9392329b.js","./string-bf9c68ed.js","./typedArrayUtil-c81d173a.js","./promiseUtils-3ce2a460.js","./ItemCache-28393d1d.js","./MemCache-c220a92a.js","./cast-4d1aa82d.js","./ensureType-8c80e8c7.js","./nextTick-3ee5a785.js","./aaBoundingBox-55a55434.js","./Extent-52b65909.js","./mathUtils-505ef34b.js","./symbols-426355d5.js","./CIMSymbol-33f517af.js","./enumeration-de0a766e.js","./fieldUtils-c41301b0.js","./geometry-8c15a791.js","./Polyline-7f90e3cc.js","./typeUtils-f38bdb16.js","./Color-46910694.js","./colorUtils-639f4d25.js","./screenUtils-7afeb41c.js","./opacityUtils-a1e441cd.js","./persistableUrlUtils-abff3ce1.js","./Collection-54857936.js","./Evented-d69b5d66.js","./SimpleObservable-7e8b69a3.js","./collectionUtils-cc5781ab.js","./Portal-fe1a007c.js","./Loadable-e19fba09.js","./Promise-24c50191.js","./locale-30120714.js","./PortalGroup-45834c06.js","./PortalUser-8de15b25.js","./Clonable-ad03ca71.js"],import.meta.url),n=await o.computeObjectLayerResourceSize(t,10),{width:r,height:i,depth:l}=t,c=[r,l,i];let m=1;for(let e=0;e<3;e++){const y=c[e];if(y!=null){m=y/n[e];break}}for(let e=0;e<3;e++)c[e]==null&&(c[e]=n[e]*m);return{resourceSize:n,symbolSize:c}}function s(t,o,n,r){switch(t){case"proportional":return n*r;case"symbol-value":return o??n;default:return t}}function M(t,o){const n=d(o);if(!b(n))switch(t.type){case"simple-marker":t.size=n;break;case"picture-marker":{const r=t.width/t.height;r>1?(t.width=n,t.height=n*r):(t.width=n*r,t.height=n);break}case"simple-line":t.width=n;break;case"text":t.font.size=n}}async function Y(t,o){if(t&&o)return h(t)?$(t,o):void(p(t)&&M(t,o))}function Z(t,o,n){if(t&&o!=null)if(h(t)){const r=t.symbolLayers;r&&r.forEach(i=>{if(i&&i.type==="object")switch(n){case"tilt":i.tilt=o;break;case"roll":i.roll=o;break;default:i.heading=o}})}else p(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle=o))}async function tt(t,o){return await t.fetchSymbol(o)||t.fetchCIMSymbol(o)}export{tt as F,Y as J,Z as N,X as S,W as j};