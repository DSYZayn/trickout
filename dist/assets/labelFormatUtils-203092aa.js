import{_ as y}from"./preload-helper-41c905a7.js";import{s as g,a as c}from"./Error-9392329b.js";import{t as h}from"./typedArrayUtil-c81d173a.js";import{L as w,m as v,S as b}from"./number-b98554af.js";import{n as x,a as _}from"./fieldUtils-c41301b0.js";import{x as E,_ as F}from"./labelUtils-4db1d7ec.js";import"./string-bf9c68ed.js";import"./cast-4d1aa82d.js";import"./ensureType-8c80e8c7.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./locale-30120714.js";import"./geometry-8c15a791.js";import"./Extent-52b65909.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";const f=g.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},V={getAttribute:(a,n)=>a.field(n)};async function z(a,n,e){if(!a||!a.symbol||!n)return d;const o=a.where,i=E(a),s=o?await y(()=>import("./WhereClause-daac4082.js").then(r=>r.W),["./WhereClause-daac4082.js","./string-bf9c68ed.js","./typedArrayUtil-c81d173a.js","./executionError-fb3f283a.js","./datetime-b6333958.js"],import.meta.url):null;let l;if(i.type==="arcade"){const r=await x(i.expression,e,n);if(h(r))return d;l={type:"arcade",evaluate(u){try{const t=r.evaluate({$feature:"attributes"in u?r.repurposeFeature(u):u});if(t!=null)return t.toString()}catch{f.error(new c("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:u,expression:i}))}return null},needsHydrationToEvaluate:()=>F(i.expression)==null}}else l={type:"simple",evaluate:r=>i.expression.replace(/{[^}]*}/g,u=>{const t=u.slice(1,-1),p=n.get(t);if(!p)return u;let m=null;return"attributes"in r?r&&r.attributes&&(m=r.attributes[p.name]):m=r.field(p.name),m==null?"":L(m,p)})};if(o){let r;try{r=s.WhereClause.create(o,n)}catch(t){return f.error(new c("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:o,error:t})),d}const u=l.evaluate;l.evaluate=t=>{const p="attributes"in t?void 0:V;try{if(r.testFeature(t,p))return u(t)}catch(m){f.error(new c("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:o,feature:t,error:m}))}return null}}return l}function L(a,n){if(a==null)return"";const e=n.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const i=a;for(const s of e.codedValues)if(s.code===i)return s.name}else if(e.type==="range"){const i=+a,s="range"in e?e.range[0]:e.minValue,l="range"in e?e.range[1]:e.maxValue;if(s<=i&&i<=l)return e.name}}let o=a;return n.type==="date"||n.type==="esriFieldTypeDate"?o=w(o,b("short-date")):_(n)&&(o=v(+o)),o||""}export{z as createLabelFunction,L as formatField};