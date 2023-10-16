import{f as d}from"./normalizeUtils-08ce1e14.js";import{U as f}from"./request-16c6134d.js";import{t as y}from"./query-b41db307.js";import{x as R}from"./FeatureSet-a47eef0a.js";import u from"./RelationshipQuery-80632d4c.js";import"./Error-9392329b.js";import"./string-bf9c68ed.js";import"./typedArrayUtil-c81d173a.js";import"./Polyline-7f90e3cc.js";import"./cast-4d1aa82d.js";import"./ensureType-8c80e8c7.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./Extent-52b65909.js";import"./normalizeUtilsCommon-42c6cdb7.js";import"./jsonUtils-e2434b33.js";import"./geometry-8c15a791.js";import"./typeUtils-f38bdb16.js";import"./preload-helper-41c905a7.js";import"./pbfQueryUtils-718fed42.js";import"./pbf-9196f6ce.js";import"./OptimizedFeature-6361f5d1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-22ca074d.js";import"./zscale-92e5f59b.js";import"./Graphic-b6696507.js";import"./PopupTemplate-7c042eda.js";import"./Clonable-ad03ca71.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./fieldUtils-c41301b0.js";import"./enumeration-de0a766e.js";import"./number-b98554af.js";import"./locale-30120714.js";import"./Identifiable-a49d7533.js";import"./symbols-426355d5.js";import"./CIMSymbol-33f517af.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./aaBoundingBox-55a55434.js";import"./persistableUrlUtils-abff3ce1.js";import"./collectionUtils-cc5781ab.js";import"./Portal-fe1a007c.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./Field-899dc481.js";import"./fieldType-68c65bf7.js";import"./Query-8c2b9d22.js";import"./TimeExtent-0fb637c6.js";function j(e,o){const t=e.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t.outFields&&!(o!=null&&o.returnCountOnly)?t.outFields.includes("*")?t.outFields="*":t.outFields=t.outFields.join(","):delete t.outFields,t.outSpatialReference&&(t.outSR=t.outSR.wkid||JSON.stringify(t.outSR.toJSON()),delete t.outSpatialReference),t.dynamicDataSource&&(t.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t}async function S(e,o,t){const i=await l(e,o,t),r=i.data,p=r.geometryType,m=r.spatialReference,n={};for(const a of r.relatedRecordGroups){const c={fields:void 0,objectIdFieldName:void 0,geometryType:p,spatialReference:m,hasZ:!!r.hasZ,hasM:!!r.hasM,features:a.relatedRecords};if(a.objectId!=null)n[a.objectId]=c;else for(const s in a)a.hasOwnProperty(s)&&s!=="relatedRecords"&&(n[a[s]]=c)}return{...i,data:n}}async function h(e,o,t){const i=await l(e,o,t,{returnCountOnly:!0}),r=i.data,p={};for(const m of r.relatedRecordGroups)m.objectId!=null&&(p[m.objectId]=m.count);return{...i,data:p}}async function l(e,o,t={},i){const r=y({...e.query,f:"json",...i,...j(o,i)});return f(e.path+"/queryRelatedRecords",{...t,query:{...t.query,...r}})}async function bt(e,o,t){o=u.from(o);const i=d(e);return S(i,o,t).then(r=>{const p=r.data,m={};return Object.keys(p).forEach(n=>m[n]=R.fromJSON(p[n])),m})}async function Ot(e,o,t){o=u.from(o);const i=d(e);return h(i,o,{...t}).then(r=>r.data)}export{bt as executeRelationshipQuery,Ot as executeRelationshipQueryForCount};
