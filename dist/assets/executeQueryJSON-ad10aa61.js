import{f as m}from"./normalizeUtils-08ce1e14.js";import{c}from"./query-b41db307.js";import{x as e}from"./FeatureSet-a47eef0a.js";import{x as s}from"./Query-8c2b9d22.js";async function S(r,o,t){const a=await p(r,o,t);return e.fromJSON(a)}async function p(r,o,t){const a=m(r),f={...t},n=s.from(o),{data:i}=await c(a,n,n.sourceSpatialReference,f);return i}export{p as a,S as s};