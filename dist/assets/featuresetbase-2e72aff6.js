import{c as ge}from"./arcadeTimeUtils-a56a27c9.js";import{B as x,G as v,b as R,v as P,r as A,ah as he,Q as we,U as le,y as S,K as z,J as N,z as B,P as Ie,V as j,ai as Fe,C as Ee,l as H,g as De,aj as be,ak as V,a0 as K,al as Y}from"./arcadeUtils-7fcdf76c.js";import{t as d,e as p}from"./executionError-fb3f283a.js";import{e as se,E as Ae,j as fe,f as xe,c as me,a as Ne,b as Te,d as Se,S as X,C as ve,I as Le,A as Pe,y as k,g as Re,x as J,D as L,h as _}from"./featureSetUtils-0d8811da.js";import{t as Ce}from"./portalUtils-6d6f8559.js";import{e as Me,A as ce}from"./SpatialFilter-ab56d36e.js";import{C as Oe}from"./promiseUtils-3ce2a460.js";import{f as D}from"./WhereClause-daac4082.js";import $ from"./FeatureLayer-3b171605.js";import{y as W}from"./Field-899dc481.js";import"./datetime-b6333958.js";import"./FieldsIndex-b8dc9788.js";import"./fieldUtils-c41301b0.js";import"./preload-helper-41c905a7.js";import"./Error-9392329b.js";import"./string-bf9c68ed.js";import"./typedArrayUtil-c81d173a.js";import"./geometry-8c15a791.js";import"./ensureType-8c80e8c7.js";import"./Extent-52b65909.js";import"./cast-4d1aa82d.js";import"./nextTick-3ee5a785.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./TimeReference-d5a14980.js";import"./Clonable-ad03ca71.js";import"./number-0ccbbda1.js";import"./locale-30120714.js";import"./jsonUtils-e2434b33.js";import"./featureConversionUtils-93a98860.js";import"./aaBoundingBox-55a55434.js";import"./mathUtils-505ef34b.js";import"./aaBoundingRect-062d7c89.js";import"./OptimizedFeature-6361f5d1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-16c6134d.js";import"./Portal-fe1a007c.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-b6696507.js";import"./PopupTemplate-7c042eda.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./enumeration-de0a766e.js";import"./number-b98554af.js";import"./Identifiable-a49d7533.js";import"./symbols-426355d5.js";import"./CIMSymbol-33f517af.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./persistableUrlUtils-abff3ce1.js";import"./collectionUtils-cc5781ab.js";import"./FeatureReductionLayer-a890a60c.js";import"./BlendLayer-1f4ade52.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./TimeExtent-0fb637c6.js";import"./Query-8c2b9d22.js";import"./UniqueValueRenderer-adb2594e.js";import"./LegendOptions-6e5321d3.js";import"./reactiveUtils-989a8d7f.js";import"./diffUtils-ba6273ab.js";import"./colorRamps-6cc98f16.js";import"./compilerUtils-db2fe354.js";import"./lengthUtils-320ae102.js";import"./jsonUtils-dfa282b7.js";import"./layerUtils-394e7a48.js";import"./styleUtils-6ef1c49e.js";import"./jsonUtils-714f7856.js";import"./DictionaryLoader-7f74ef6b.js";import"./LRUCache-7d328c48.js";import"./MemCache-c220a92a.js";import"./deprecate-0efb6d09.js";import"./heatmapUtils-74b8fd48.js";import"./vec4f64-aa64c7e9.js";import"./OperationalLayer-70e0771f.js";import"./ElevationInfo-5422702b.js";import"./labelingInfo-8ec658bf.js";import"./labelUtils-4db1d7ec.js";import"./defaultsJSON-b087dd4d.js";import"./executeQueryJSON-ad10aa61.js";import"./normalizeUtils-08ce1e14.js";import"./normalizeUtilsCommon-42c6cdb7.js";import"./query-b41db307.js";import"./pbfQueryUtils-718fed42.js";import"./pbf-9196f6ce.js";import"./queryZScale-22ca074d.js";import"./zscale-92e5f59b.js";import"./FeatureSet-a47eef0a.js";import"./AttachmentInfo-12f14212.js";import"./AttachmentQuery-dffd8fdc.js";import"./executeForIds-1528d522.js";import"./RelationshipQuery-80632d4c.js";import"./fieldType-68c65bf7.js";import"./TopFeaturesQuery-e56e9bfe.js";import"./FeatureType-f3fd3327.js";import"./FeatureTemplate-136fba4c.js";import"./PortalItem-d79345ac.js";import"./assets-86d142ff.js";import"./geometryEngineAsync-56faf65a.js";import"./workers-9e1006b9.js";import"./Connection-da262054.js";import"./Queue-4939205d.js";import"./intl-45f8f1a9.js";import"./messages-57170cca.js";import"./MultiOriginJSONSupport-55da1d06.js";import"./serviceCapabilitiesUtils-2296548c.js";import"./arcgisLayerUrl-824ee458.js";import"./FeatureLayerBase-ed16c570.js";import"./HeightModelInfo-a5f98ab4.js";import"./Layer-5bf3596f.js";import"./HandleOwner-1ffa4597.js";import"./editsZScale-9447610d.js";import"./APIKeyMixin-35aced10.js";import"./ArcGISService-78831401.js";import"./CustomParametersMixin-6e258788.js";import"./EditBusLayer-f379d91e.js";import"./OrderedLayer-9994883c.js";import"./PortalLayer-d4941bb0.js";import"./asyncUtils-d59cad3c.js";import"./portalItemUtils-9126718d.js";import"./projection-03688518.js";import"./RefreshableLayer-2dcbbf25.js";import"./ScaleRangeLayer-a6967062.js";import"./TemporalLayer-76f9669f.js";import"./fieldProperties-cf15bacb.js";import"./versionUtils-0602c916.js";import"./styleUtils-30cd950e.js";import"./popupUtils-eff4732c.js";function ke(o,t,n,u){if(u.length===1){if(N(u[0]))return Y(o,u[0],-1);if(j(u[0]))return Y(o,u[0].toArray(),-1)}return Y(o,u,-1)}async function ee(o,t,n){const u=o.getVariables();if(u.length>0){const w=[];for(let r=0;r<u.length;r++){const i={name:u[r]};w.push(await t.evaluateIdentifier(n,i))}const e={};for(let r=0;r<u.length;r++)e[u[r]]=w[r];return o.parameters=e,o}return o}function c(o,t,n=null){for(const u in o)if(u.toLowerCase()===t.toLowerCase())return o[u];return n}function ue(o){if(o===null)return null;const t={type:c(o,"type",""),name:c(o,"name","")};if(t.type==="range")t.range=c(o,"range",[]);else{t.codedValues=[];for(const n of c(o,"codedValues",[]))t.codedValues.push({name:c(n,"name",""),code:c(n,"code",null)})}return t}function te(o){if(o===null)return null;const t={},n=c(o,"wkt",null);n!==null&&(t.wkt=n);const u=c(o,"wkid",null);return u!==null&&(t.wkid=u),t}function de(o){if(o===null)return null;const t={hasZ:c(o,"hasz",!1),hasM:c(o,"hasm",!1)},n=c(o,"spatialreference",null);n&&(t.spatialReference=te(n));const u=c(o,"x",null);if(u!==null)return t.x=u,t.y=c(o,"y",null),t;const w=c(o,"rings",null);if(w!==null)return t.rings=w,t;const e=c(o,"paths",null);if(e!==null)return t.paths=e,t;const r=c(o,"points",null);if(r!==null)return t.points=r,t;for(const i of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const m=c(o,i,null);m!==null&&(t[i]=m)}return t}function je(o,t){for(const n of t)if(n===o)return!0;return!1}function ze(o){return!!o.layerDefinition&&!!o.featureSet&&je(o.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&o.layerDefinition.objectIdField!==null&&o.layerDefinition.objectIdField!==""&&N(o.layerDefinition.fields)!==!1&&N(o.featureSet.features)!==!1}function di(o){o.mode==="async"&&(o.functions.timezone=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,1,2,t,n),v(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(e[1]instanceof R)||e[1].hasField("type")===!1)throw new d(t,p.InvalidParameter,n);const m=e[1].field("type");if(P(m)===!1)throw new d(t,p.InvalidParameter,n);switch(A(m).toLowerCase()){case"preferredtimezone":return e[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return e[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return e[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return e[0].dateTimeReferenceFieldIndex.fieldTimeZone(A(e[1].field("fieldname")))}throw new d(t,p.InvalidParameter,n)}const r=he(e[0],we(t));if(r===null)return null;const i=r.timeZone;return i==="system"?ge.systemTimeZoneCanonicalName:i})},o.functions.sqltimestamp=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{x(e,1,3,t,n);const r=e[0];if(le(r)){if(e.length===1)return r.toSQLString();if(e.length===2)return r.changeTimeZone(A(e[1])).toSQLString();throw new d(t,p.InvalidParameter,n)}if(v(r)){if(e.length!==3)throw new d(t,p.InvalidParameter,n);await r.load();const i=A(e[1]);if(le(e[2])===!1)throw new d(t,p.InvalidParameter,n);const m=r.fieldTimeZone(i);return m===null?e[2].toSQLString():e[2].changeTimeZone(m).toSQLString()}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"sqltimestamp",min:2,max:4}),o.functions.featuresetbyid=function(t,n){return o.standardFunctionAsync(t,n,(u,w,e)=>{if(x(e,2,4,t,n),e[0]instanceof se){const r=A(e[1]);let i=S(e[2],null);const m=z(S(e[3],!0));if(i===null&&(i=["*"]),N(i)===!1)throw new d(t,p.InvalidParameter,n);return e[0].featureSetById(r,m,i)}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"featuresetbyid",min:2,max:4}),o.functions.getfeatureset=function(t,n){return o.standardFunctionAsync(t,n,(u,w,e)=>{if(x(e,1,2,t,n),B(e[0])){let r=S(e[1],"datasource");return r===null&&(r="datasource"),r=A(r).toLowerCase(),Ae(e[0].fullSchema(),r,t.lrucache,t.interceptor,t.spatialReference)}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"getfeatureset",min:1,max:2}),o.functions.featuresetbyportalitem=function(t,n){return o.standardFunctionAsync(t,n,(u,w,e)=>{if(x(e,2,5,t,n),e[0]===null)throw new d(t,p.PortalRequired,n);if(e[0]instanceof Ie){const s=A(e[1]),a=A(e[2]);let l=S(e[3],null);const f=z(S(e[4],!0));if(l===null&&(l=["*"]),N(l)===!1)throw new d(t,p.InvalidParameter,n);let F=null;return t.services&&t.services.portal&&(F=t.services.portal),F=Ce(e[0],F),fe(s,a,t.spatialReference,l,f,F,t.lrucache,t.interceptor)}if(P(e[0])===!1)throw new d(t,p.PortalRequired,n);const r=A(e[0]),i=A(e[1]);let m=S(e[2],null);const y=z(S(e[3],!0));if(m===null&&(m=["*"]),N(m)===!1)throw new d(t,p.InvalidParameter,n);if(t.services&&t.services.portal)return fe(r,i,t.spatialReference,m,y,t.services.portal,t.lrucache,t.interceptor);throw new d(t,p.PortalRequired,n)})},o.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),o.functions.featuresetbyname=function(t,n){return o.standardFunctionAsync(t,n,(u,w,e)=>{if(x(e,2,4,t,n),e[0]instanceof se){const r=A(e[1]);let i=S(e[2],null);const m=z(S(e[3],!0));if(i===null&&(i=["*"]),N(i)===!1)throw new d(t,p.InvalidParameter,n);return e[0].featureSetByName(r,m,i)}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"featuresetbyname",min:2,max:4}),o.functions.featureset=function(t,n){return o.standardFunction(t,n,(u,w,e)=>{var m;x(e,1,1,t,n);let r=e[0];const i={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(r))r=JSON.parse(r),r.layerDefinition!==void 0?(i.layerDefinition=r.layerDefinition,i.featureSet=r.featureSet,r.layerDefinition.spatialReference&&(i.layerDefinition.spatialReference=r.layerDefinition.spatialReference)):(i.featureSet.features=r.features,i.featureSet.geometryType=r.geometryType,i.layerDefinition.geometryType=i.featureSet.geometryType,i.layerDefinition.objectIdField=r.objectIdFieldName,i.layerDefinition.typeIdField=r.typeIdFieldName,i.layerDefinition.globalIdField=r.globalIdFieldName,i.layerDefinition.fields=r.fields,r.spatialReference&&(i.layerDefinition.spatialReference=r.spatialReference));else{if(!(e[0]instanceof R))throw new d(t,p.InvalidParameter,n);{r=JSON.parse(e[0].castToText(!0));const y=c(r,"layerdefinition");if(y!==null){i.layerDefinition.geometryType=c(y,"geometrytype",""),i.featureSet.geometryType=i.layerDefinition.geometryType,i.layerDefinition.globalIdField=c(y,"globalidfield",""),i.layerDefinition.objectIdField=c(y,"objectidfield",""),i.layerDefinition.typeIdField=c(y,"typeidfield","");const s=c(y,"spatialreference",null);s&&(i.layerDefinition.spatialReference=te(s));for(const l of c(y,"fields",[])){const f={name:c(l,"name",""),alias:c(l,"alias",""),type:c(l,"type",""),nullable:c(l,"nullable",!0),editable:c(l,"editable",!0),length:c(l,"length",null),domain:ue(c(l,"domain"))};i.layerDefinition.fields.push(f)}const a=c(r,"featureset",null);if(a){const l={};for(const f of i.layerDefinition.fields)l[f.name.toLowerCase()]=f.name;for(const f of c(a,"features",[])){const F={},E=c(f,"attributes",{});for(const I in E)F[l[I.toLowerCase()]]=E[I];i.featureSet.features.push({attributes:F,geometry:de(c(f,"geometry",null))})}}}else{i.layerDefinition.geometryType=c(r,"geometrytype",""),i.featureSet.geometryType=i.layerDefinition.geometryType,i.layerDefinition.objectIdField=c(r,"objectidfieldname",""),i.layerDefinition.typeIdField=c(r,"typeidfieldname","");const s=c(r,"spatialreference",null);s&&(i.layerDefinition.spatialReference=te(s));for(const l of c(r,"fields",[])){const f={name:c(l,"name",""),alias:c(l,"alias",""),type:c(l,"type",""),nullable:c(l,"nullable",!0),editable:c(l,"editable",!0),length:c(l,"length",null),domain:ue(c(l,"domain"))};i.layerDefinition.fields.push(f)}const a={};for(const l of i.layerDefinition.fields)a[l.name.toLowerCase()]=l.name;for(const l of c(r,"features",[])){const f={},F=c(l,"attributes",{});for(const E in F)f[a[E.toLowerCase()]]=F[E];i.featureSet.features.push({attributes:f,geometry:de(c(l,"geometry",null))})}}}}if(ze(i)===!1)throw new d(t,p.InvalidParameter,n);return(((m=i==null?void 0:i.layerDefinition)==null?void 0:m.geometryType)||"")===""&&(i.layerDefinition.geometryType="esriGeometryNull"),xe.create(i,t.spatialReference)})},o.signatures.push({name:"featureset",min:1,max:1}),o.functions.filter=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,2,2,t,n),N(e[0])||j(e[0])){const r=[];let i=e[0];i instanceof Fe&&(i=i.toArray());let m=null;if(!Ee(e[1]))throw new d(t,p.InvalidParameter,n);m=e[1].createFunction(t);for(const y of i){const s=m(y);Oe(s)?await s===!0&&r.push(y):s===!0&&r.push(y)}return r}if(v(e[0])){const r=await e[0].load(),i=D.create(e[1],r.getFieldsIndex()),m=i.getVariables();if(m.length>0){const y=[];for(let a=0;a<m.length;a++){const l={name:m[a]};y.push(await o.evaluateIdentifier(t,l))}const s={};for(let a=0;a<m.length;a++)s[m[a]]=y[a];return i.parameters=s,new me({parentfeatureset:e[0],whereclause:i})}return new me({parentfeatureset:e[0],whereclause:i})}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"filter",min:2,max:2}),o.functions.orderby=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,2,2,t,n),v(e[0])){const r=new Ne(e[1]);return new Te({parentfeatureset:e[0],orderbyclause:r})}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"orderby",min:2,max:2}),o.functions.top=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,2,2,t,n),v(e[0]))return new Se({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return H(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,H(e[1]));if(j(e[0]))return H(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,H(e[1]));throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"top",min:2,max:2}),o.functions.first=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,1,1,t,n),v(e[0])){const r=await e[0].first(u.abortSignal);if(r!==null){const i=De.createFromGraphicLikeObject(r.geometry,r.attributes,e[0],t.timeReference);return i._underlyingGraphic=r,i}return r}return N(e[0])?e[0].length===0?null:e[0][0]:j(e[0])?e[0].length()===0?null:e[0].get(0):null})},o.signatures.push({name:"first",min:1,max:1}),o.functions.attachments=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{x(e,1,2,t,n);const r={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof R){if(e[1].hasField("minsize")&&(r.minsize=H(e[1].field("minsize"))),e[1].hasField("metadata")&&(r.returnMetadata=z(e[1].field("metadata"))),e[1].hasField("maxsize")&&(r.maxsize=H(e[1].field("maxsize"))),e[1].hasField("types")){const i=be(e[1].field("types"),!1);i.length>0&&(r.types=i)}}else if(e[1]!==null)throw new d(t,p.InvalidParameter,n)}if(B(e[0])){let i=e[0]._layer;return i instanceof $&&(i=X(i,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),i===null?[]:v(i)===!1?[]:(await i.load(),i.queryAttachments(e[0].field(i.objectIdField),r.minsize,r.maxsize,r.types,r.returnMetadata))}if(e[0]===null)return[];throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"attachments",min:1,max:2}),o.functions.featuresetbyrelationshipname=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{x(e,2,4,t,n);const r=e[0],i=A(e[1]);let m=S(e[2],null);const y=z(S(e[3],!0));if(m===null&&(m=["*"]),N(m)===!1)throw new d(t,p.InvalidParameter,n);if(e[0]===null)return null;if(!B(e[0]))throw new d(t,p.InvalidParameter,n);let s=r._layer;if(s instanceof $&&(s=X(s,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),s===null||v(s)===!1)return null;s=await s.load();const a=s.relationshipMetaData().filter(I=>I.name===i);if(a.length===0)return null;if(a[0].relationshipTableId!==void 0&&a[0].relationshipTableId!==null&&a[0].relationshipTableId>-1)return ve(s,a[0],r.field(s.objectIdField),s.spatialReference,m,y,t.lrucache,t.interceptor);let l=s.serviceUrl();if(!l)return null;l=l.charAt(l.length-1)==="/"?l+a[0].relatedTableId.toString():l+"/"+a[0].relatedTableId.toString();const f=await Le(l,s.spatialReference,m,y,t.lrucache,t.interceptor);await f.load();let F=f.relationshipMetaData();if(F=F.filter(I=>I.id===a[0].id),r.hasField(a[0].keyField)===!1||r.field(a[0].keyField)===null){const I=await s.getFeatureByObjectId(r.field(s.objectIdField),[a[0].keyField]);if(I){const b=D.create(F[0].keyField+"= @id",f.getFieldsIndex());return b.parameters={id:I.attributes[a[0].keyField]},f.filter(b)}return new Me({parentfeatureset:f})}const E=D.create(F[0].keyField+"= @id",f.getFieldsIndex());return E.parameters={id:r.field(a[0].keyField)},f.filter(E)})},o.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),o.functions.featuresetbyassociation=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{x(e,2,3,t,n);const r=e[0],i=A(S(e[1],"")).toLowerCase(),m=P(e[2])?A(e[2]):null;if(e[0]===null)return null;if(!B(e[0]))throw new d(t,p.InvalidParameter,n);let y=r._layer;if(y instanceof $&&(y=X(y,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),y===null||v(y)===!1)return null;await y.load();const s=y.serviceUrl(),a=await Pe(s,t.spatialReference);let l=null,f=null,F=!1;if(m!==null&&m!==""&&m!==void 0){for(const h of a.terminals)h.terminalName===m&&(f=h.terminalId);f===null&&(F=!0)}const E=a.associations.getFieldsIndex(),I=E.get("TOGLOBALID").name,b=E.get("FROMGLOBALID").name,Q=E.get("TOTERMINALID").name,q=E.get("FROMTERMINALID").name,G=E.get("FROMNETWORKSOURCEID").name,Z=E.get("TONETWORKSOURCEID").name,O=E.get("ASSOCIATIONTYPE").name,pe=E.get("ISCONTENTVISIBLE").name,ye=E.get("OBJECTID").name;for(const h of y.fields)if(h.type==="global-id"){l=r.field(h.name);break}let C=null,ne=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),D.create("0",a.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),D.create("''",a.associations.getFieldsIndex()));const T="globalid",re="globalId",ae={};for(const h in a.lkp)ae[h]=a.lkp[h].sourceId;const M=new Re(new W({name:"classname",alias:"classname",type:"string"}),null,ae);let g="";switch(i){case"midspan":{g=`((${I}='${l}') OR ( ${b}='${l}')) AND (${O} IN (5))`,M.codefield=D.create(`CASE WHEN (${I}='${l}') THEN ${G} ELSE ${Z} END`,a.associations.getFieldsIndex());const h=K(L.findField(a.associations.fields,b));h.name=T,h.alias=T,C=new k(h,D.create(`CASE WHEN (${b}='${l}') THEN ${I} ELSE ${b} END`,a.associations.getFieldsIndex())),ne=a.unVersion>=4?new _(L.findField(a.associations.fields,E.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),D.create("0",a.associations.getFieldsIndex()));break}case"junctionedge":{g=`((${I}='${l}') OR ( ${b}='${l}')) AND (${O} IN (4,6))`,M.codefield=D.create(`CASE WHEN (${I}='${l}') THEN ${G} ELSE ${Z} END`,a.associations.getFieldsIndex());const h=K(L.findField(a.associations.fields,b));h.name=T,h.alias=T,C=new k(h,D.create(`CASE WHEN (${b}='${l}') THEN ${I} ELSE ${b} END`,a.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),D.create(`CASE WHEN (${O}=4) THEN 'from' ELSE 'to' END`,a.associations.getFieldsIndex()));break}case"connected":{let h=`${I}='@T'`,oe=`${b}='@T'`;f!==null&&(h+=` AND ${Q}=@A`,oe+=` AND ${q}=@A`),g="(("+h+") OR ("+oe+"))",g=V(g,"@T",l??""),h=V(h,"@T",l??""),f!==null&&(h=V(h,"@A",f.toString()),g=V(g,"@A",f.toString())),M.codefield=D.create("CASE WHEN "+h+` THEN ${G} ELSE ${Z} END`,a.associations.getFieldsIndex());const U=K(L.findField(a.associations.fields,b));U.name=T,U.alias=T,C=new k(U,D.create("CASE WHEN "+h+` THEN ${b} ELSE ${I} END`,a.associations.getFieldsIndex()));break}case"container":g=`${I}='${l}' AND ${O} = 2`,f!==null&&(g+=` AND ${Q} = `+f.toString()),M.codefield=G,g="( "+g+" )",C=new J(L.findField(a.associations.fields,b),T,T);break;case"content":g=`(${b}='${l}' AND ${O} = 2)`,f!==null&&(g+=` AND ${q} = `+f.toString()),M.codefield=Z,g="( "+g+" )",C=new J(L.findField(a.associations.fields,I),T,T);break;case"structure":g=`(${I}='${l}' AND ${O} = 3)`,f!==null&&(g+=` AND ${Q} = `+f.toString()),M.codefield=G,g="( "+g+" )",C=new J(L.findField(a.associations.fields,b),T,re);break;case"attached":g=`(${b}='${l}' AND ${O} = 3)`,f!==null&&(g+=` AND ${q} = `+f.toString()),M.codefield=Z,g="( "+g+" )",C=new J(L.findField(a.associations.fields,I),T,re);break;default:throw new d(t,p.InvalidParameter,n)}return F&&(g="1 <> 1"),new L({parentfeatureset:a.associations,adaptedFields:[new _(L.findField(a.associations.fields,ye)),new _(L.findField(a.associations.fields,pe)),C,ie,M,ne],extraFilter:g?D.create(g,a.associations.getFieldsIndex()):null})})},o.signatures.push({name:"featuresetbyassociation",min:2,max:6}),o.functions.groupby=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,3,3,t,n),!v(e[0]))throw new d(t,p.InvalidParameter,n);const r=await e[0].load(),i=[],m=[];let y=!1,s=[];if(P(e[1]))s.push(e[1]);else if(e[1]instanceof R)s.push(e[1]);else if(N(e[1]))s=e[1];else{if(!j(e[1]))throw new d(t,p.InvalidParameter,n);s=e[1].toArray()}for(const a of s)if(P(a)){const l=D.create(A(a),r.getFieldsIndex()),f=ce(l)===!0?A(a):"%%%%FIELDNAME";i.push({name:f,expression:l}),f==="%%%%FIELDNAME"&&(y=!0)}else{if(!(a instanceof R))throw new d(t,p.InvalidParameter,n);{const l=a.hasField("name")?a.field("name"):"%%%%FIELDNAME",f=a.hasField("expression")?a.field("expression"):"";if(l==="%%%%FIELDNAME"&&(y=!0),!l)throw new d(t,p.InvalidParameter,n);i.push({name:l,expression:D.create(f||l,r.getFieldsIndex())})}}if(s=[],P(e[2]))s.push(e[2]);else if(N(e[2]))s=e[2];else if(j(e[2]))s=e[2].toArray();else{if(!(e[2]instanceof R))throw new d(t,p.InvalidParameter,n);s.push(e[2])}for(const a of s){if(!(a instanceof R))throw new d(t,p.InvalidParameter,n);{const l=a.hasField("name")?a.field("name"):"",f=a.hasField("statistic")?a.field("statistic"):"",F=a.hasField("expression")?a.field("expression"):"";if(!l||!f||!F)throw new d(t,p.InvalidParameter,n);m.push({name:l,statistic:f.toLowerCase(),expression:D.create(F,r.getFieldsIndex())})}}if(y){const a={};for(const f of r.fields)a[f.name.toLowerCase()]=1;for(const f of i)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);for(const f of m)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);let l=0;for(const f of i)if(f.name==="%%%%FIELDNAME"){for(;a["field_"+l.toString()]===1;)l++;a["field_"+l.toString()]=1,f.name="FIELD_"+l.toString()}}for(const a of i)await ee(a.expression,o,t);for(const a of m)await ee(a.expression,o,t);return e[0].groupby(i,m)})},o.signatures.push({name:"groupby",min:3,max:3}),o.functions.distinct=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(v(e[0])){x(e,2,2,t,n);const r=await e[0].load(),i=[];let m=[];if(P(e[1]))m.push(e[1]);else if(e[1]instanceof R)m.push(e[1]);else if(N(e[1]))m=e[1];else{if(!j(e[1]))throw new d(t,p.InvalidParameter,n);m=e[1].toArray()}let y=!1;for(const s of m)if(P(s)){const a=D.create(A(s),r.getFieldsIndex()),l=ce(a)===!0?A(s):"%%%%FIELDNAME";i.push({name:l,expression:a}),l==="%%%%FIELDNAME"&&(y=!0)}else{if(!(s instanceof R))throw new d(t,p.InvalidParameter,n);{const a=s.hasField("name")?s.field("name"):"%%%%FIELDNAME",l=s.hasField("expression")?s.field("expression"):"";if(a==="%%%%FIELDNAME"&&(y=!0),!a)throw new d(t,p.InvalidParameter,n);i.push({name:a,expression:D.create(l||a,r.getFieldsIndex())})}}if(y){const s={};for(const l of r.fields)s[l.name.toLowerCase()]=1;for(const l of i)l.name!=="%%%%FIELDNAME"&&(s[l.name.toLowerCase()]=1);let a=0;for(const l of i)if(l.name==="%%%%FIELDNAME"){for(;s["field_"+a.toString()]===1;)a++;s["field_"+a.toString()]=1,l.name="FIELD_"+a.toString()}}for(const s of i)await ee(s.expression,o,t);return e[0].groupby(i,[])}return ke("distinct",u,w,e)})})}export{di as registerFunctions};