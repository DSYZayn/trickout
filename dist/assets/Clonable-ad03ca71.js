import{e as d,a as y,z as b,w as t,v as A}from"./cast-4d1aa82d.js";import{y as O}from"./string-bf9c68ed.js";import"./Error-9392329b.js";import{c as U}from"./typedArrayUtil-c81d173a.js";const h=f=>{let l=class extends f{clone(){var $;const p=U(b(this),"unable to clone instance of non-accessor class"),u=p.metadatas,a=p.store,m={},i=new Map;for(const o in u){const s=u[o],e=a==null?void 0:a.originOf(o),n=s.clonable;if(s.readOnly||n===!1||e!==t.USER&&e!==t.DEFAULTS&&e!==t.WEB_MAP&&e!==t.WEB_SCENE)continue;const r=this[o];let c=null;c=typeof n=="function"?n(r):n==="reference"?r:O(r),r!=null&&c==null||(e===t.DEFAULTS?i.set(o,c):m[o]=c)}const E=new(Object.getPrototypeOf(this)).constructor(m);if(i.size){const o=($=b(E))==null?void 0:$.store;if(o)for(const[s,e]of i)o.set(s,e,t.DEFAULTS)}return E}};return l=d([y("esri.core.Clonable")],l),l};let S=class extends h(A){};S=d([y("esri.core.Clonable")],S);export{h as i,S as l};
