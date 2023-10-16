import"./geometry-8c15a791.js";import"./Error-9392329b.js";import{e as C}from"./typedArrayUtil-c81d173a.js";import{u as S}from"./screenUtils-7afeb41c.js";import{H as R,b as j,w as A,f as B}from"./Extent-52b65909.js";import{O}from"./quantizationUtils-54fe414b.js";import{i as q}from"./fieldUtils-c41301b0.js";import{y as G,m as Y}from"./heatmapUtils-74b8fd48.js";import{c as M,D as _,m as k,f as H,d as U,T as Z,y as J,x as K,z as L,S as Q,M as W}from"./utils-717e8c9c.js";import"./ensureType-8c80e8c7.js";import"./string-bf9c68ed.js";import"./Polyline-7f90e3cc.js";import"./cast-4d1aa82d.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./typeUtils-f38bdb16.js";import"./jsonUtils-e2434b33.js";import"./preload-helper-41c905a7.js";import"./mathUtils-505ef34b.js";import"./vec4f64-aa64c7e9.js";import"./generateRendererUtils-f872a1df.js";import"./enumeration-de0a766e.js";let I=null;function X(i,a,l){return i.x<0?i.x+=a:i.x>l&&(i.x-=a),i}function aa(i,a,l,o){const n=R(l)?j(l):null,r=n?Math.round((n.valid[1]-n.valid[0])/a.scale[0]):null;return i.map(t=>{const e=new A(C(t.geometry));return O(a,e,e,e.hasZ,e.hasM),t.geometry=n?X(e,r,o[0]):e,t})}function ia(i,a=18,l,o,n,r){const t=new Float64Array(n*r);a=Math.round(S(a));let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,m=0,u=0,d=0,c=0;const y=G(o,l);for(const{geometry:T,attributes:v}of i){const{x:p,y:f}=T,x=Math.max(0,p-a),F=Math.max(0,f-a),D=Math.min(r,f+a),g=Math.min(n,p+a),P=+y(v);for(let $=F;$<D;$++)for(let w=x;w<g;w++){const E=$*n+w,b=Y(w-p,$-f,a),N=t[E];m=t[E]+=b*P;const V=m-N;u+=V,d+=V*V,m<e&&(e=m),m>s&&(s=m),c++}}if(!c)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const z=(s-e)/2;return{mean:u/c,stdDev:Math.sqrt((d-u*u/c)/c),min:e,max:s,mid:z,count:c}}async function h(i,a){if(!a)return[];const{field:l,field2:o,field3:n,fieldDelimiter:r}=i,t=i.valueExpression,e=i.normalizationType,s=i.normalizationField,m=i.normalizationTotal,u=[],d=i.viewInfoParams;let c=null,y=null;if(t){if(!I){const{arcadeUtils:v}=await q();I=v}c=I.createFunction(t),y=d&&I.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new B(d.spatialReference)})}const z=i.fieldInfos,T=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&z?{fields:z}:null;return a.forEach(v=>{const p=v.attributes;let f;if(t){const x=T?{...v,layer:T}:v,F=I.createExecContext(x,y);f=I.executeFunction(c,F)}else p&&(f=p[l],o&&(f=`${M(f)}${r}${M(p[o])}`,n&&(f=`${f}${r}${M(p[n])}`)));if(e&&typeof f=="number"&&isFinite(f)){const x=p&&parseFloat(p[s]);f=_(f,e,x,m)}u.push(f)}),u}async function Fa(i){const{attribute:a,features:l}=i,{normalizationType:o,normalizationField:n,minValue:r,maxValue:t,fieldType:e}=a,s=await h({field:a.field,valueExpression:a.valueExpression,normalizationType:o,normalizationField:n,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),m=k({normalizationType:o,normalizationField:n,minValue:r,maxValue:t}),u={value:.5,fieldType:e},d=e==="esriFieldTypeString"?H({values:s,supportsNullCount:m,percentileParams:u}):U({values:s,minValue:r,maxValue:t,useSampleStdDev:!o,supportsNullCount:m,percentileParams:u});return Z(d,e==="esriFieldTypeDate")}async function Va(i){const{attribute:a,features:l}=i,o=await h({field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),n=J(o);return K(n,a.domains,a.returnAllCodedValues,a.fieldDelimiter)}async function Ma(i){const{attribute:a,features:l}=i,{field:o,normalizationType:n,normalizationField:r,normalizationTotal:t,classificationMethod:e}=a,s=await h({field:o,valueExpression:a.valueExpression,normalizationType:n,normalizationField:r,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),m=L(s,{field:o,normalizationType:n,normalizationField:r,normalizationTotal:t,classificationMethod:e,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return Q(m,e)}async function Ea(i){const{attribute:a,features:l}=i,{field:o,normalizationType:n,normalizationField:r,normalizationTotal:t,classificationMethod:e}=a,s=await h({field:o,valueExpression:a.valueExpression,normalizationType:n,normalizationField:r,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l);return W(s,{field:o,normalizationType:n,normalizationField:r,normalizationTotal:t,classificationMethod:e,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function Da(i){const{attribute:a,features:l}=i,{field:o,radius:n,fieldOffset:r,transform:t,spatialReference:e,size:s}=a,m=aa(l,t,e,s),{count:u,min:d,max:c,mean:y,stdDev:z}=ia(m,n,r,o,s[0],s[1]);return{count:u,min:d,max:c,avg:y,stddev:z}}export{Ma as classBreaks,Da as heatmapStatistics,Ea as histogram,Fa as summaryStatistics,Va as uniqueValues};