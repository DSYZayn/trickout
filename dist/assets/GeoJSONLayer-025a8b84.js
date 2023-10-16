import{_ as w}from"./preload-helper-41c905a7.js";import{e as r,y as i,a as b}from"./cast-4d1aa82d.js";import"./geometry-8c15a791.js";import{k as J}from"./PopupTemplate-7c042eda.js";import"./UniqueValueRenderer-adb2594e.js";import{b as N,n as j}from"./jsonUtils-714f7856.js";import{r as O,t as R}from"./typedArrayUtil-c81d173a.js";import{O as P}from"./MultiOriginJSONSupport-55da1d06.js";import{x as q,w as T}from"./promiseUtils-3ce2a460.js";import{L as y}from"./request-16c6134d.js";import"./ensureType-8c80e8c7.js";import{o as I}from"./typeUtils-f38bdb16.js";import{b as k}from"./Layer-5bf3596f.js";import{s as D,a as f}from"./Error-9392329b.js";import{h as L}from"./string-bf9c68ed.js";import{m as G}from"./Loadable-e19fba09.js";import{u as C}from"./workers-9e1006b9.js";import{l as Q}from"./clientSideDefaults-62cfdc11.js";import{x as Z}from"./FeatureSet-a47eef0a.js";import{a as x,f as F}from"./Extent-52b65909.js";import{v as z}from"./Polyline-7f90e3cc.js";import{n as V}from"./BlendLayer-1f4ade52.js";import{o as A}from"./CustomParametersMixin-6e258788.js";import{n as U,p as W}from"./FeatureReductionLayer-a890a60c.js";import{c as B,d as M,v as H,m as K,a as X,u as Y,p as tt,l as et,f as rt}from"./OperationalLayer-70e0771f.js";import{c as ot}from"./OrderedLayer-9994883c.js";import{_ as it}from"./PortalLayer-d4941bb0.js";import{p as st}from"./RefreshableLayer-2dcbbf25.js";import{t as nt}from"./ScaleRangeLayer-a6967062.js";import{a as at}from"./TemporalLayer-76f9669f.js";import{p as pt}from"./FeatureTemplate-136fba4c.js";import{n as lt}from"./FeatureType-f3fd3327.js";import{y as ut}from"./Field-899dc481.js";import{s as dt}from"./fieldProperties-cf15bacb.js";import{F as g,c as mt}from"./fieldUtils-c41301b0.js";import{C as ht,i as ct}from"./labelingInfo-8ec658bf.js";import{x as h}from"./Query-8c2b9d22.js";import{p as yt}from"./popupUtils-eff4732c.js";import"./nextTick-3ee5a785.js";import"./Clonable-ad03ca71.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./enumeration-de0a766e.js";import"./number-b98554af.js";import"./locale-30120714.js";import"./Identifiable-a49d7533.js";import"./symbols-426355d5.js";import"./CIMSymbol-33f517af.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./aaBoundingBox-55a55434.js";import"./persistableUrlUtils-abff3ce1.js";import"./collectionUtils-cc5781ab.js";import"./Portal-fe1a007c.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./LegendOptions-6e5321d3.js";import"./reactiveUtils-989a8d7f.js";import"./diffUtils-ba6273ab.js";import"./colorRamps-6cc98f16.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-b6696507.js";import"./jsonUtils-e2434b33.js";import"./compilerUtils-db2fe354.js";import"./lengthUtils-320ae102.js";import"./jsonUtils-dfa282b7.js";import"./layerUtils-394e7a48.js";import"./styleUtils-6ef1c49e.js";import"./DictionaryLoader-7f74ef6b.js";import"./LRUCache-7d328c48.js";import"./MemCache-c220a92a.js";import"./deprecate-0efb6d09.js";import"./heatmapUtils-74b8fd48.js";import"./vec4f64-aa64c7e9.js";import"./Promise-24c50191.js";import"./Connection-da262054.js";import"./Queue-4939205d.js";import"./assets-86d142ff.js";import"./intl-45f8f1a9.js";import"./messages-57170cca.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-b087dd4d.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./TimeExtent-0fb637c6.js";import"./ElevationInfo-5422702b.js";import"./asyncUtils-d59cad3c.js";import"./PortalItem-d79345ac.js";import"./portalItemUtils-9126718d.js";import"./projection-03688518.js";import"./zscale-92e5f59b.js";import"./TimeReference-d5a14980.js";import"./datetime-b6333958.js";import"./fieldType-68c65bf7.js";import"./FieldsIndex-b8dc9788.js";import"./labelUtils-4db1d7ec.js";const E="esri.layers.graphics.sources.GeoJSONSource",v=D.getLogger(E);let d=class extends G{constructor(){super(...arguments),this.type="geojson",this.refresh=q(async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=O(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)).then(o=>Z.fromJSON(o))}queryFeaturesJSON(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))}queryFeatureCount(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e))}queryObjectIds(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e))}queryExtent(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e)).then(o=>({count:o.count,extent:x.fromJSON(o.extent)}))}querySnapping(t,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",t,e))}_applyEdits(t){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,o=[],n=[],u=[];if(t.addFeatures)for(const a of t.addFeatures)o.push(this._serializeFeature(a));if(t.deleteFeatures)for(const a of t.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[e]!=null&&n.push(a.attributes[e]);if(t.updateFeatures)for(const a of t.updateFeatures)u.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:o,updates:u,deletes:n}).then(({extent:a,timeExtent:p,featureEditResults:l})=>(this.sourceJSON.extent=a,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(l)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new f("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,o=this._geometryForSerialization(t);return o?{geometry:o.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return R(e)?null:e.type==="mesh"||e.type==="extent"?z.fromExtent(e.extent):e}async _startWorker(t){this._connection=await C("GeoJSONSourceWorker",{strategy:L("feature-layers-workers")?"dedicated":"local",signal:t});const{fields:e,spatialReference:o,hasZ:n,geometryType:u,objectIdField:a,url:p,timeInfo:l,customParameters:_}=this.layer,S=this.layer.originOf("spatialReference")==="defaults",$={url:p,customParameters:_,fields:e&&e.map(c=>c.toJSON()),geometryType:I.toJSON(u),hasZ:n,objectIdField:a,timeInfo:l?l.toJSON():null,spatialReference:S?null:o&&o.toJSON()},m=await this._connection.invoke("load",$,{signal:t});for(const c of m.warnings)v.warn(c.message,{layer:this.layer,warning:c});m.featureErrors.length&&v.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=Q(this.sourceJSON.hasZ,!0)}};r([i()],d.prototype,"capabilities",void 0),r([i()],d.prototype,"type",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"sourceJSON",void 0),d=r([b(E)],d);const ft=dt();let s=class extends ot(A(U(W(V(at(nt(st(B(it(P(k))))))))))){constructor(t){super(t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var t;(t=this.source)==null||t.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(T).then(()=>this.source.load(t)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),mt(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?y(this.url):null}set renderer(t){g(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=y(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async applyEdits(t,e){const o=await w(()=>import("./editingSupport-ace4d987.js"),["./editingSupport-ace4d987.js","./Graphic-b6696507.js","./cast-4d1aa82d.js","./typedArrayUtil-c81d173a.js","./string-bf9c68ed.js","./Error-9392329b.js","./ensureType-8c80e8c7.js","./nextTick-3ee5a785.js","./promiseUtils-3ce2a460.js","./geometry-8c15a791.js","./Extent-52b65909.js","./Polyline-7f90e3cc.js","./typeUtils-f38bdb16.js","./PopupTemplate-7c042eda.js","./Clonable-ad03ca71.js","./Collection-54857936.js","./Evented-d69b5d66.js","./SimpleObservable-7e8b69a3.js","./fieldUtils-c41301b0.js","./preload-helper-41c905a7.js","./enumeration-de0a766e.js","./number-b98554af.js","./locale-30120714.js","./Identifiable-a49d7533.js","./symbols-426355d5.js","./CIMSymbol-33f517af.js","./Color-46910694.js","./colorUtils-639f4d25.js","./mathUtils-505ef34b.js","./screenUtils-7afeb41c.js","./opacityUtils-a1e441cd.js","./aaBoundingBox-55a55434.js","./request-16c6134d.js","./persistableUrlUtils-abff3ce1.js","./collectionUtils-cc5781ab.js","./Portal-fe1a007c.js","./Loadable-e19fba09.js","./Promise-24c50191.js","./PortalGroup-45834c06.js","./PortalUser-8de15b25.js","./jsonUtils-e2434b33.js","./uuid-73213768.js","./normalizeUtils-08ce1e14.js","./normalizeUtilsCommon-42c6cdb7.js","./assetEditingSupport-2cebf928.js","./EditBusLayer-f379d91e.js","./layerUtils-394e7a48.js"],import.meta.url);await this.load();const n=await o.applyEdits(this,this.source,t,e);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(t,e){return super.on(t,e)}createPopupTemplate(t){return yt(this,t)}createQuery(){const t=new h,e=this.get("capabilities.data");t.returnGeometry=!0,e&&e.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:o,timeExtent:n}=this;return t.timeExtent=o!=null&&n!=null?n.offset(-o.value,o.unit):n||null,t}getFieldDomain(t,e){let o,n=!1;const u=e&&e.feature,a=u&&u.attributes,p=this.typeIdField&&a&&a[this.typeIdField];return p!=null&&this.types&&(n=this.types.some(l=>l.id==p&&(o=l.domains&&l.domains[t],o&&o.type==="inherited"&&(o=this._getLayerDomain(t)),!0))),n||o||(o=this._getLayerDomain(t)),o}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(h.from(t)||this.createQuery(),e)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(h.from(t)||this.createQuery(),e))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(h.from(t)||this.createQuery(),e))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(h.from(t)||this.createQuery(),e))}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return O(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_getLayerDomain(t){if(!this.fields)return null;let e=null;return this.fields.some(o=>(o.name===t&&(e=o.domain),!!e)),e}};r([i({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",null),r([i({type:String})],s.prototype,"copyright",void 0),r([i({readOnly:!0})],s.prototype,"createQueryVersion",null),r([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),r([i({type:String})],s.prototype,"displayField",void 0),r([i({type:Boolean})],s.prototype,"editingEnabled",void 0),r([i(M)],s.prototype,"elevationInfo",void 0),r([i({type:[ut],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),r([i(ft.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([i({type:x,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],s.prototype,"geometryType",void 0),r([i({type:Boolean})],s.prototype,"hasZ",void 0),r([i(H)],s.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([i(K)],s.prototype,"labelsVisible",void 0),r([i({type:[ht],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ct},write:!0}})],s.prototype,"labelingInfo",void 0),r([i(X)],s.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],s.prototype,"objectIdField",void 0),r([i(Y)],s.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],s.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],s.prototype,"parsedUrl",null),r([i(tt)],s.prototype,"popupEnabled",void 0),r([i({type:J,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([i({types:N,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:j}}}})],s.prototype,"renderer",null),r([i(et)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],s.prototype,"source",void 0),r([i({type:F})],s.prototype,"spatialReference",void 0),r([i({type:[pt]})],s.prototype,"templates",void 0),r([i()],s.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),r([i({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),r([i({type:[lt]})],s.prototype,"types",void 0),r([i(rt)],s.prototype,"url",null),s=r([b("esri.layers.GeoJSONLayer")],s);const lr=s;export{lr as default};