import{t as y,e as F}from"./executionError-fb3f283a.js";import{B as h,G as f,J as c,v as A,V as d,al as p,y as u}from"./arcadeUtils-7fcdf76c.js";import{f as l}from"./WhereClause-daac4082.js";import"./geometry-8c15a791.js";import"./ensureType-8c80e8c7.js";import"./string-bf9c68ed.js";import"./typedArrayUtil-c81d173a.js";import"./Error-9392329b.js";import"./Extent-52b65909.js";import"./cast-4d1aa82d.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./preload-helper-41c905a7.js";import"./arcadeTimeUtils-a56a27c9.js";import"./datetime-b6333958.js";import"./FieldsIndex-b8dc9788.js";import"./fieldUtils-c41301b0.js";import"./TimeReference-d5a14980.js";import"./Clonable-ad03ca71.js";import"./number-0ccbbda1.js";import"./locale-30120714.js";import"./Field-899dc481.js";import"./enumeration-de0a766e.js";import"./fieldType-68c65bf7.js";import"./jsonUtils-e2434b33.js";import"./featureConversionUtils-93a98860.js";import"./aaBoundingBox-55a55434.js";import"./mathUtils-505ef34b.js";import"./aaBoundingRect-062d7c89.js";import"./OptimizedFeature-6361f5d1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-16c6134d.js";import"./Portal-fe1a007c.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./sizeVariableUtils-d4870b0d.js";async function m(r,n,i,t,e,o){if(t.length===1){if(c(t[0]))return p(r,t[0],u(t[1],-1));if(d(t[0]))return p(r,t[0].toArray(),u(t[1],-1))}else if(t.length===2){if(c(t[0]))return p(r,t[0],u(t[1],-1));if(d(t[0]))return p(r,t[0].toArray(),u(t[1],-1));if(f(t[0])){const a=await t[0].load(),s=await g(l.create(t[1],a.getFieldsIndex()),o,e);return t[0].calculateStatistic(r,s,u(t[2],1e3),n.abortSignal)}}else if(t.length===3&&f(t[0])){const a=await t[0].load(),s=await g(l.create(t[1],a.getFieldsIndex()),o,e);return t[0].calculateStatistic(r,s,u(t[2],1e3),n.abortSignal)}return p(r,t,-1)}async function g(r,n,i){const t=r.getVariables();if(t.length>0){const e=[];for(let a=0;a<t.length;a++){const s={name:t[a]};e.push(await n.evaluateIdentifier(i,s))}const o={};for(let a=0;a<t.length;a++)o[t[a]]=e[a];return r.parameters=o,r}return r}function at(r){r.mode==="async"&&(r.functions.stdev=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("stdev",t,e,o,n,r))},r.functions.variance=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("variance",t,e,o,n,r))},r.functions.average=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("mean",t,e,o,n,r))},r.functions.mean=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("mean",t,e,o,n,r))},r.functions.sum=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("sum",t,e,o,n,r))},r.functions.min=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("min",t,e,o,n,r))},r.functions.max=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("max",t,e,o,n,r))},r.functions.count=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>{if(h(o,1,1,n,i),f(o[0]))return o[0].count(t.abortSignal);if(c(o[0])||A(o[0]))return o[0].length;if(d(o[0]))return o[0].length();throw new y(n,F.InvalidParameter,i)})})}export{at as registerFunctions};