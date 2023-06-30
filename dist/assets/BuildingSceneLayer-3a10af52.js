import{e as t,y as i,a as p,q as de,g as ue,l as g}from"./cast-4d1aa82d.js";import{j as w}from"./Collection-54857936.js";import{l as ce}from"./CollectionFlattener-8de7cbfd.js";import{s as I,a as F}from"./Error-9392329b.js";import{p as c}from"./string-bf9c68ed.js";import{i as me,l as he}from"./loadAll-8b24919b.js";import{r as d,t as fe}from"./typedArrayUtil-c81d173a.js";import{S as ge,O as ve}from"./MultiOriginJSONSupport-55da1d06.js";import{w as be}from"./promiseUtils-3ce2a460.js";import{U as Y,V as we}from"./request-429c0e66.js";import{T as Se}from"./ensureType-8c80e8c7.js";import{o as j,a as $e,f as ee}from"./Extent-52b65909.js";import{b as Oe}from"./Layer-3cc844b0.js";import{g as xe}from"./Graphic-4a228e99.js";import{k as Ie}from"./PopupTemplate-6b3c08c8.js";import"./UniqueValueRenderer-16354145.js";import{n as Fe}from"./jsonUtils-4e342d8c.js";import{m as te}from"./Loadable-e19fba09.js";import{m as re}from"./Promise-24c50191.js";import{o as ie}from"./enumeration-de0a766e.js";import se from"./FeatureLayer-fc4ae836.js";import{s as je}from"./Identifiable-a49d7533.js";import{y as q,p as Le,c as Te,j as Be,d as Ae}from"./OperationalLayer-3f888de5.js";import{t as Ee,u as _e,l as qe}from"./FetchAssociatedFeatureLayer-fec0cd4a.js";import{s as Ne}from"./fieldProperties-d1a48384.js";import{r as Pe}from"./FieldsIndex-29a8df54.js";import{v as Re}from"./fieldUtils-7c95d0c6.js";import{n as Me,E as ke,L as J}from"./SceneService-affe3927.js";import{s as Ue,l as Ce,u as Qe,m as De}from"./I3SLayerDefinitions-ba10d1d7.js";import{x as Ke}from"./Query-8c2b9d22.js";import{p as Ve}from"./popupUtils-89cdd81e.js";import{x as He}from"./ElevationInfo-280697dd.js";import{d as Je,s as Ze}from"./popupUtils-b7545076.js";import{i as Ge}from"./APIKeyMixin-35aced10.js";import{p as ze}from"./ArcGISService-f48f70cb.js";import{_ as We}from"./PortalLayer-d69242c0.js";import{t as Xe}from"./ScaleRangeLayer-a6967062.js";import{n as Ye}from"./uuid-73213768.js";import{r as et}from"./symbols-0c3dfce8.js";import"./nextTick-3ee5a785.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./asyncUtils-d59cad3c.js";import"./preload-helper-101896b7.js";import"./geometry-8c15a791.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./Clonable-ad03ca71.js";import"./jsonUtils-e2434b33.js";import"./number-b98554af.js";import"./locale-30120714.js";import"./LegendOptions-6e5321d3.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./reactiveUtils-989a8d7f.js";import"./diffUtils-ba6273ab.js";import"./Portal-4a02a9a8.js";import"./PortalGroup-45834c06.js";import"./PortalUser-bb0f9958.js";import"./colorRamps-6cc98f16.js";import"./opacityUtils-a1e441cd.js";import"./screenUtils-7afeb41c.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-db2fe354.js";import"./lengthUtils-320ae102.js";import"./jsonUtils-beb5fd18.js";import"./layerUtils-c60873a1.js";import"./CIMSymbol-adda48ca.js";import"./persistableUrlUtils-ef87bc82.js";import"./styleUtils-0d4515e5.js";import"./DictionaryLoader-3797a46e.js";import"./LRUCache-7d328c48.js";import"./MemCache-c220a92a.js";import"./deprecate-0efb6d09.js";import"./heatmapUtils-74b8fd48.js";import"./vec4f64-aa64c7e9.js";import"./serviceCapabilitiesUtils-bdb661e2.js";import"./arcgisLayerUrl-0567e8c8.js";import"./FeatureLayerBase-c8196cb0.js";import"./Field-899dc481.js";import"./fieldType-68c65bf7.js";import"./HeightModelInfo-a5f98ab4.js";import"./TimeReference-d5a14980.js";import"./datetime-b6333958.js";import"./AttachmentQuery-dffd8fdc.js";import"./RelationshipQuery-80632d4c.js";import"./TimeExtent-0fb637c6.js";import"./HandleOwner-1ffa4597.js";import"./workers-6ae37cc2.js";import"./Connection-ee309efe.js";import"./Queue-4939205d.js";import"./assets-2d98ef96.js";import"./intl-806fa328.js";import"./messages-57170cca.js";import"./editsZScale-9447610d.js";import"./queryZScale-22ca074d.js";import"./zscale-92e5f59b.js";import"./FeatureSet-b6c99b8e.js";import"./BlendLayer-1f4ade52.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./CustomParametersMixin-6e258788.js";import"./EditBusLayer-f379d91e.js";import"./FeatureReductionLayer-398b84cc.js";import"./labelingInfo-0e7e440a.js";import"./labelUtils-4db1d7ec.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-9994883c.js";import"./RefreshableLayer-2dcbbf25.js";import"./TemporalLayer-e1338658.js";import"./FeatureTemplate-136fba4c.js";import"./FeatureType-f3fd3327.js";import"./versionUtils-c26fc550.js";import"./styleUtils-30cd950e.js";import"./TopFeaturesQuery-e56e9bfe.js";import"./aaBoundingBox-55a55434.js";import"./collectionUtils-cc5781ab.js";import"./PortalItem-8c677fd9.js";import"./portalItemUtils-6225971d.js";import"./projection-676f1424.js";import"./mat3-5b850236.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-a627ac9e.js";import"./quatf64-3363c48e.js";import"./I3SBinaryReader-2eaf7a99.js";import"./VertexAttribute-15d1866a.js";import"./spatialReferenceEllipsoidUtils-8886c520.js";import"./aaBoundingRect-062d7c89.js";import"./symbolColorUtils-3109747d.js";import"./vec3f32-ad1dc57f.js";import"./plane-51dc8956.js";import"./sphere-f01cef25.js";import"./byteSizeEstimations-90c5a50d.js";import"./vec2f64-22afc56f.js";import"./ViewingMode-fb6259a5.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-c073bb6b.js";let y=class extends je(ge){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(r,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([i({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([j("service","title",["alias","name"])],y.prototype,"readTitle",null),t([i()],y.prototype,"layer",void 0),t([i({type:Se,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([j("service","id")],y.prototype,"readIdOnlyOnce",null),t([i(q(String))],y.prototype,"modelName",void 0),t([i(q(Boolean))],y.prototype,"isEmpty",void 0),t([i({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([i({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const oe=y,ae="esri.layers.buildingSublayers.BuildingComponentSublayer",tt=I.getLogger(ae),Z=Ne();let a=class extends te.LoadableMixin(re(oe)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new Pe(this.fields)}readAssociatedLayer(e,r){const s=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return d(s)&&typeof o=="number"?new se({portalItem:s,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=d(e)?e.signal:null,s=this._fetchService(r).then(()=>{this.indexInfo=Me(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,tt,r)});return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return Ve(this,e)}async _fetchService(e){const r=(await Y(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var o,n,m;const s=(n=(o=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:o.domains)==null?void 0:n[e];return s&&s.type!=="inherited"?s:((m=this.getField(e))==null?void 0:m.domain)??null}getFeatureType(e){return e&&d(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return d(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return d(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Ee,{query:r,data:{supportsZ:s,supportsM:o,isVersioned:n}}=e;return{query:r,data:{supportsZ:s,supportsM:o,isVersioned:n}}}createQuery(){const e=new Ke;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),r)).then(s=>{if(s!=null&&s.features)for(const o of s.features)o.layer=this.layer,o.sourceLayer=this;return s})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const s=Re(this.fieldsIndex,await Je(this,Ze(this)));return _e(this.parsedUrl.path,this.attributeStorageInfo,e,r,s)}async queryCachedFeature(e,r){const s=await this.queryCachedAttributes(e,[r]);if(!s||s.length===0)throw new F("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new xe;return o.attributes=s[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:d(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),fe(this.associatedLayer))throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([i({readOnly:!0})],a.prototype,"parsedUrl",null),t([i({type:Ue,readOnly:!0})],a.prototype,"nodePages",void 0),t([i({type:[Ce],readOnly:!0})],a.prototype,"materialDefinitions",void 0),t([i({type:[Qe],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),t([i({type:[De],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),t([i({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),t([i({readOnly:!0})],a.prototype,"store",void 0),t([i({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),t([i({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),t([i(Z.fields)],a.prototype,"fields",void 0),t([i({readOnly:!0})],a.prototype,"fieldsIndex",null),t([i({readOnly:!0,type:se})],a.prototype,"associatedLayer",void 0),t([j("service","associatedLayer",["associatedLayerID"])],a.prototype,"readAssociatedLayer",null),t([i(Z.outFields)],a.prototype,"outFields",void 0),t([i({type:String,readOnly:!0})],a.prototype,"objectIdField",null),t([i({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),t([i({readOnly:!0,type:String})],a.prototype,"apiKey",null),t([i({readOnly:!0,type:$e})],a.prototype,"fullExtent",null),t([i({readOnly:!0,type:ee})],a.prototype,"spatialReference",null),t([i({readOnly:!0})],a.prototype,"version",null),t([i({readOnly:!0,type:He})],a.prototype,"elevationInfo",null),t([i({readOnly:!0,type:Number})],a.prototype,"minScale",null),t([i({readOnly:!0,type:Number})],a.prototype,"maxScale",null),t([i({readOnly:!0,type:Number})],a.prototype,"effectiveScaleRange",null),t([i({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0),t([i({types:Fe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",void 0),t([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),t([i(Le)],a.prototype,"popupEnabled",void 0),t([i({type:Ie,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0),t([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),t([i({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([i()],a.prototype,"types",null),t([i()],a.prototype,"typeIdField",null),t([i({json:{write:!1}}),ie(new de({"3DObject":"3d-object",Point:"point"}))],a.prototype,"layerType",void 0),t([i()],a.prototype,"geometryType",null),t([i()],a.prototype,"profile",null),t([i({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),a=t([p(ae)],a);const N=a;var P;const G={type:w,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(e,r,s){if(e&&Array.isArray(e))return new w(e.map(o=>{const n=rt(o);if(n){const m=new n;return m.read(o,s),m}return s&&s.messages&&o&&s.messages.push(new ue("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(o.type||"unknown")+"' are not supported",{definition:o,context:s})),null}))}let f=P=class extends oe{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return me(this,e=>P.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function rt(e){return e.layerType==="group"?f:N}t([i({type:["hide","show","hide-children"],json:{write:!0}})],f.prototype,"listMode",void 0),t([i(G)],f.prototype,"sublayers",void 0),f=P=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],f),function(e){function r(s,o){s.forEach(n=>{o(n),n.type==="building-group"&&r(n.sublayers,o)})}e.sublayersProperty=G,e.readSublayers=ne,e.forEachSublayer=r}(f||(f={}));const v=f;let L=class extends g{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],L.prototype,"type",void 0),L=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],L);const le=L;var R;let S=R=class extends g{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new R({filterType:this.filterType,filterValues:c(this.filterValues)})}};t([i({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([i({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=R=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const it=S;var M;const st=w.ofType(it);let T=M=class extends g{clone(){return new M({filterTypes:c(this.filterTypes)})}};t([i({type:st,json:{write:!0}})],T.prototype,"filterTypes",void 0),T=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],T);const ot=T;var k;const at=w.ofType(ot);let $=k=class extends le{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:c(this.filterBlocks)})}};t([i({type:["checkbox"]})],$.prototype,"type",void 0),t([i({type:at,json:{write:!0}})],$.prototype,"filterBlocks",void 0),$=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],$);const z=$;let B=class extends g{};t([i({readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),B=t([p("esri.layers.support.BuildingFilterMode")],B);const _=B;var U;let A=U=class extends _{constructor(){super(...arguments),this.type="solid"}clone(){return new U}};t([i({type:["solid"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),A=U=t([p("esri.layers.support.BuildingFilterModeSolid")],A);const C=A;var Q;let O=Q=class extends _{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Q({edges:c(this.edges)})}};t([ie({wireFrame:"wire-frame"})],O.prototype,"type",void 0),t([i(et)],O.prototype,"edges",void 0),O=Q=t([p("esri.layers.support.BuildingFilterModeWireFrame")],O);const W=O;var D;let E=D=class extends _{constructor(){super(...arguments),this.type="x-ray"}clone(){return new D}};t([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0),E=D=t([p("esri.layers.support.BuildingFilterModeXRay")],E);const X=E;var K;const nt={nonNullable:!0,types:{key:"type",base:_,typeMap:{solid:C,"wire-frame":W,"x-ray":X}},json:{read:e=>{switch(e&&e.type){case"solid":return C.fromJSON(e);case"wireFrame":return W.fromJSON(e);case"x-ray":return X.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=K=class extends g{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new C,this.title=""}clone(){return new K({filterExpression:this.filterExpression,filterMode:c(this.filterMode),title:this.title})}};t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),t([i(nt)],b.prototype,"filterMode",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=K=t([p("esri.layers.support.BuildingFilterBlock")],b);const lt=b;var V;const pt=w.ofType(lt);let h=V=class extends g{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Ye(),this.name=null}clone(){return new V({description:this.description,filterBlocks:c(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:c(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([i({type:pt,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([i({types:{key:"type",base:le,typeMap:{checkbox:z}},json:{read:e=>(e&&e.type)==="checkbox"?z.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=V=t([p("esri.layers.support.BuildingFilter")],h);const yt=h;let u=class extends g{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([i({type:String})],u.prototype,"fieldName",void 0),t([i({type:String})],u.prototype,"modelName",void 0),t([i({type:String})],u.prototype,"label",void 0),t([i({type:Number})],u.prototype,"min",void 0),t([i({type:Number})],u.prototype,"max",void 0),t([i({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([i({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingFieldStatistics")],u);let x=class extends te.LoadableMixin(re(g)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(I.getLogger(this.declaredClass).error("building summary statistics are not loaded"),null)}load(e){const r=d(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await Y(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([i({constructOnly:!0,type:String})],x.prototype,"url",void 0),t([i({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],x.prototype,"fields",null),x=t([p("esri.layers.support.BuildingSummaryStatistics")],x);const pe=x,ye=w.ofType(yt),H=c(v.sublayersProperty);H.json.origins["web-scene"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},H.json.origins["portal-item"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let l=class extends ke(ze(Te(We(Xe(ve(Ge(Oe))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new ce({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,s){const o=v.readSublayers(e,r,s);return v.forEachSublayer(o,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(o,this._sublayerOverrides),this._sublayerOverrides=null),o}applySublayerOverrides(e,{overrides:r,context:s}){v.forEachSublayer(e,o=>o.read(r.get(o.id),s))}readSublayerOverrides(e,r){var o;const s=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?s.set(n.id,n):(o=r.messages)==null||o.push(new F("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:s,context:r}}writeSublayerOverrides(e,r,s){const o=[];v.forEachSublayer(this.sublayers,n=>{const m=n.write({},s);Object.keys(m).length>1&&o.push(m)}),o.length>0&&(r.sublayers=o)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(s=>{r.sublayers.push(c(s))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const s=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,s):this._sublayerOverrides=s}}readSummaryStatistics(e,r){var s;if(typeof r.statisticsHRef=="string"){const o=we((s=this.parsedUrl)==null?void 0:s.path,r.statisticsHRef);return new pe({url:o})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=d(e)?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(be).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return he(this,e=>{v.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(J.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(J.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new F("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&I.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&I.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new qe(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(s){I.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",s)}}};t([i({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],l.prototype,"allSublayers",void 0),t([i(H)],l.prototype,"sublayers",void 0),t([j("service","sublayers")],l.prototype,"readSublayers",null),t([i({type:ye,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([i({readOnly:!0,type:pe})],l.prototype,"summaryStatistics",void 0),t([j("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([i({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([i(Be)],l.prototype,"fullExtent",void 0),t([i({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([i(q(ee))],l.prototype,"spatialReference",void 0),t([i(Ae)],l.prototype,"elevationInfo",null),t([i({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([i()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const Vi=l;export{Vi as default};
