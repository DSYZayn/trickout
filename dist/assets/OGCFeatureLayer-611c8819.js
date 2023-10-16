import{e as r,y as i,a as j}from"./cast-4d1aa82d.js";import"./geometry-8c15a791.js";import{k as L}from"./PopupTemplate-7c042eda.js";import"./UniqueValueRenderer-adb2594e.js";import{b as N,n as k}from"./jsonUtils-714f7856.js";import{O as H}from"./MultiOriginJSONSupport-55da1d06.js";import"./ensureType-8c80e8c7.js";import{t as J,r as F}from"./typedArrayUtil-c81d173a.js";import{i as Z,o as R}from"./typeUtils-f38bdb16.js";import{b as z}from"./Layer-5bf3596f.js";import{a as I}from"./Error-9392329b.js";import{m as U}from"./Loadable-e19fba09.js";import{N as V,F as O,v as $,x as W,k as K,T as X,S as Y,I as ee,j as te}from"./ogcFeatureUtils-6172e10d.js";import{x as re}from"./FeatureSet-a47eef0a.js";import{f as x,a as oe}from"./Extent-52b65909.js";import{i as ie}from"./APIKeyMixin-35aced10.js";import{n as se}from"./BlendLayer-1f4ade52.js";import{o as pe}from"./CustomParametersMixin-6e258788.js";import{n as ne,p as ae}from"./FeatureReductionLayer-a890a60c.js";import{c as le,d as ue,m as me,a as de,p as ce,l as ye,f as fe}from"./OperationalLayer-70e0771f.js";import{c as he}from"./OrderedLayer-9994883c.js";import{_ as ge}from"./PortalLayer-d4941bb0.js";import{p as ve}from"./RefreshableLayer-2dcbbf25.js";import{t as Se}from"./ScaleRangeLayer-a6967062.js";import{a as xe}from"./TemporalLayer-76f9669f.js";import{n as Ce}from"./FeatureType-f3fd3327.js";import{y as we}from"./Field-899dc481.js";import{s as be}from"./fieldProperties-cf15bacb.js";import{F as T,c as Fe}from"./fieldUtils-c41301b0.js";import{C as Re,i as Ie}from"./labelingInfo-8ec658bf.js";import{x as D}from"./Query-8c2b9d22.js";import{p as Oe}from"./popupUtils-eff4732c.js";import"./string-bf9c68ed.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./Polyline-7f90e3cc.js";import"./Clonable-ad03ca71.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./enumeration-de0a766e.js";import"./number-b98554af.js";import"./locale-30120714.js";import"./Identifiable-a49d7533.js";import"./symbols-426355d5.js";import"./CIMSymbol-33f517af.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./aaBoundingBox-55a55434.js";import"./request-16c6134d.js";import"./preload-helper-41c905a7.js";import"./persistableUrlUtils-abff3ce1.js";import"./collectionUtils-cc5781ab.js";import"./Portal-fe1a007c.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./LegendOptions-6e5321d3.js";import"./reactiveUtils-989a8d7f.js";import"./diffUtils-ba6273ab.js";import"./colorRamps-6cc98f16.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-b6696507.js";import"./jsonUtils-e2434b33.js";import"./compilerUtils-db2fe354.js";import"./lengthUtils-320ae102.js";import"./jsonUtils-dfa282b7.js";import"./layerUtils-394e7a48.js";import"./styleUtils-6ef1c49e.js";import"./DictionaryLoader-7f74ef6b.js";import"./LRUCache-7d328c48.js";import"./MemCache-c220a92a.js";import"./deprecate-0efb6d09.js";import"./heatmapUtils-74b8fd48.js";import"./vec4f64-aa64c7e9.js";import"./Promise-24c50191.js";import"./featureConversionUtils-93a98860.js";import"./aaBoundingRect-062d7c89.js";import"./OptimizedFeature-6361f5d1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./geojson-8b67a4cc.js";import"./clientSideDefaults-62cfdc11.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-b087dd4d.js";import"./FieldsIndex-b8dc9788.js";import"./fieldType-68c65bf7.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./TimeExtent-0fb637c6.js";import"./ElevationInfo-5422702b.js";import"./asyncUtils-d59cad3c.js";import"./PortalItem-d79345ac.js";import"./assets-86d142ff.js";import"./portalItemUtils-9126718d.js";import"./projection-03688518.js";import"./zscale-92e5f59b.js";import"./TimeReference-d5a14980.js";import"./datetime-b6333958.js";import"./FeatureTemplate-136fba4c.js";import"./labelUtils-4db1d7ec.js";let m=class extends U{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:s,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>re.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>V(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(e){var s,p,n,l,a;const t=(s=e==null?void 0:e.components)==null?void 0:s.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??O,s=$(t);return J(s)?x.WGS84:new x({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",p=e.crs??[O],n=p.includes(s)?p.filter(a=>a!==s).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const s=F(t)?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:y,hasZ:f,objectIdField:P,timeInfo:h,url:_}=e,E={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:Z.toJSON(y),hasZ:f??!1,objectIdField:P,timeInfo:h==null?void 0:h.toJSON()},d={apiKey:p,customParameters:l,signal:s},g=await W(_,d),[C,w]=await Promise.all([K(g,d),X(g,d)]);if(!this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new I("ogc-feature-layer:no-geojson-support","Server does not support geojson");const c=w.collections.find(u=>u.id===n);if(!c)throw new I("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Y(g,d):null,b=await ee(c,E,d),M=this._getMaxRecordCount(q),G=this._getCapabilities(b.hasZ,M),Q=this._getStorageSpatialReference(c).toJSON(),A=this._getSupportedSpatialReferences(c,w),B=new RegExp(`^${te}`,"i"),v={};for(const u of A){const S=$(u);F(S)&&(v[S]||(v[S]=u.replace(B,"")))}this.featureDefinition={capabilities:G,collection:c,layerDefinition:b,spatialReference:Q,supportedCrs:v}}};r([i()],m.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],m.prototype,"layer",void 0),r([i()],m.prototype,"type",void 0),m=r([j("esri.layers.graphics.sources.OGCFeatureSource")],m);const $e=be();let o=class extends ie(pe(ne(ae(se(he(xe(Se(le(ge(ve(H(z)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new m({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){T(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Oe(this,e)}createQuery(){return new D}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(y=>{var f;return y.id==l&&(s=(f=y.domains)==null?void 0:f[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(D.from(e)||this.createQuery(),t)).then(s=>{var p;return(p=s==null?void 0:s.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),T(this.renderer,this.fieldsIndex),Fe(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String})],o.prototype,"definitionExpression",void 0),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(ue)],o.prototype,"elevationInfo",void 0),r([i({type:[we],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i($e.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:oe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:R.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:R.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[Re],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(me)],o.prototype,"labelsVisible",void 0),r([i(de)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(ce)],o.prototype,"popupEnabled",void 0),r([i({type:L,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:N,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:k,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(ye)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:x,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[Ce]})],o.prototype,"types",void 0),r([i(fe)],o.prototype,"url",void 0),o=r([j("esri.layers.OGCFeatureLayer")],o);const br=o;export{br as default};
