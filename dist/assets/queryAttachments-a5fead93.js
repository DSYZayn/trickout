import{w as h,D as f,U as i}from"./request-429c0e66.js";import{t as d}from"./query-fc1b5d57.js";import{a as l}from"./AttachmentInfo-12f14212.js";import"./preload-helper-101896b7.js";import"./Error-9392329b.js";import"./string-bf9c68ed.js";import"./typedArrayUtil-c81d173a.js";import"./promiseUtils-3ce2a460.js";import"./jsonUtils-e2434b33.js";import"./Extent-52b65909.js";import"./cast-4d1aa82d.js";import"./ensureType-8c80e8c7.js";import"./nextTick-3ee5a785.js";import"./Polyline-7f90e3cc.js";import"./normalizeUtils-78f35d29.js";import"./normalizeUtilsCommon-42c6cdb7.js";import"./geometry-8c15a791.js";import"./typeUtils-f38bdb16.js";import"./pbfQueryUtils-718fed42.js";import"./pbf-9196f6ce.js";import"./OptimizedFeature-6361f5d1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-22ca074d.js";import"./zscale-92e5f59b.js";function y(a){const t=a.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function C(a,t){const o={};for(const e of t){const{parentObjectId:r,parentGlobalId:n,attachmentInfos:m}=e;for(const s of m){const{id:c}=s,u=h(f(`${a.path}/${r}/attachments/${c}`)),p=l.fromJSON(s);p.set({url:u,parentObjectId:r,parentGlobalId:n}),o[r]?o[r].push(p):o[r]=[p]}}return o}function E(a,t,o){let e={query:d({...a.query,f:"json",...y(t)})};return o&&(e={...o,...e,query:{...o.query,...e.query}}),i(a.path+"/queryAttachments",e).then(r=>r.data.attachmentGroups)}async function F(a,t,o){const{objectIds:e}=t,r=[];for(const n of e)r.push(i(a.path+"/"+n+"/attachments",o));return Promise.all(r).then(n=>e.map((m,s)=>({parentObjectId:m,attachmentInfos:n[s].data.attachmentInfos})))}export{E as executeAttachmentQuery,F as fetchAttachments,C as processAttachmentQueryResult};
