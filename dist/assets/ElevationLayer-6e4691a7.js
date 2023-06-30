import{_}from"./preload-helper-101896b7.js";import{n as f,e as a,y as l,a as g}from"./cast-4d1aa82d.js";import{U as y,e as w}from"./request-429c0e66.js";import{s as V,a as D}from"./Error-9392329b.js";import{t as $,e as u,r as m,F as T,L as b}from"./typedArrayUtil-c81d173a.js";import{O as S}from"./MultiOriginJSONSupport-55da1d06.js";import{f as c,w as L}from"./promiseUtils-3ce2a460.js";import"./ensureType-8c80e8c7.js";import{o as x}from"./Extent-52b65909.js";import{v as k}from"./HeightModelInfo-a5f98ab4.js";import{b as I}from"./Layer-3cc844b0.js";import{s as O}from"./ArcGISCachedService-fb4689e4.js";import{p as E}from"./ArcGISService-f48f70cb.js";import{c as N,f as P}from"./OperationalLayer-3f888de5.js";import{_ as j}from"./PortalLayer-d69242c0.js";import{u as A}from"./workers-6ae37cc2.js";import"./string-bf9c68ed.js";import"./nextTick-3ee5a785.js";import"./geometry-8c15a791.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./Evented-d69b5d66.js";import"./Identifiable-a49d7533.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./TilemapCache-fe1d667a.js";import"./TileInfo-3f2956cd.js";import"./aaBoundingRect-062d7c89.js";import"./mathUtils-505ef34b.js";import"./byteSizeEstimations-90c5a50d.js";import"./HandleOwner-1ffa4597.js";import"./reactiveUtils-989a8d7f.js";import"./LRUCache-7d328c48.js";import"./MemCache-c220a92a.js";import"./arcgisLayerUrl-0567e8c8.js";import"./persistableUrlUtils-ef87bc82.js";import"./TimeExtent-0fb637c6.js";import"./ElevationInfo-280697dd.js";import"./fieldUtils-7c95d0c6.js";import"./lengthUtils-320ae102.js";import"./opacityUtils-a1e441cd.js";import"./asyncUtils-d59cad3c.js";import"./layerUtils-c60873a1.js";import"./Portal-4a02a9a8.js";import"./locale-30120714.js";import"./PortalGroup-45834c06.js";import"./PortalUser-bb0f9958.js";import"./PortalItem-8c677fd9.js";import"./assets-2d98ef96.js";import"./portalItemUtils-6225971d.js";import"./projection-676f1424.js";import"./SimpleObservable-7e8b69a3.js";import"./mat4-63147b80.js";import"./zscale-92e5f59b.js";import"./Connection-ee309efe.js";import"./Queue-4939205d.js";import"./intl-806fa328.js";import"./number-b98554af.js";import"./messages-57170cca.js";class M{constructor(e,t,r,o){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=r,this.noDataValue=o)}get hasNoDataValues(){if($(this._hasNoDataValues)){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),u(this._minValue)}get maxValue(){return this._ensureBounds(),u(this._maxValue)}_ensureBounds(){if(m(this._minValue))return;const{noDataValue:e,values:t}=this;let r=1/0,o=-1/0,h=!0;for(const n of t)n===e?this._hasNoDataValues=!0:(r=n<r?n:r,o=n>o?n:o,h=!1);h?(this._minValue=0,this._maxValue=0):(this._minValue=r,this._maxValue=o>-3e38?o:0)}}class U{constructor(e,t,r,o,h={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=A(e,{...h,schedule:o}).then(n=>{if(this._thread===void 0){this._thread=n,this._promise=null,h.hasInitialize&&this.broadcast({},"initialize");for(const p of this._listeners)this._connectListener(p)}else n.close()}),this._promise.catch(n=>V.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${n}`))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),f(()=>{r.removed=!0,T(this._listeners,r),this._thread&&m(r.threadHandle)&&r.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const o=this._transferLists[e],h=o?o(t):[];return this._thread.invoke(e,t,{transferList:h,signal:r})}return this._promise?this._promise.then(()=>(c(r),this.invokeMethod(e,t,r))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}class v extends U{constructor(e=null){super("LercWorker","_decode",{_decode:t=>[t.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,r){return e&&e.byteLength!==0?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}release(){--this.ref<=0&&(d.forEach((e,t)=>{e===this&&d.delete(t)}),this.destroy())}}const d=new Map;function C(i=null){let e=d.get(u(i));return e||(m(i)?(e=new v(t=>i.immediate.schedule(t)),d.set(i,e)):(e=new v,d.set(null,e))),++e.ref,e}let s=class extends O(E(N(j(S(I))))){constructor(...i){super(...i),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=C()}normalizeCtorArgs(i,e){return typeof i=="string"?{url:i,...e}:i}destroy(){this._lercDecoder=b(this._lercDecoder)}readVersion(i,e){let t=e.currentVersion;return t||(t=9.3),t}load(i){const e=m(i)?i.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let r=0;r<t.typeKeywords.length;r++)if(t.typeKeywords[r].toLowerCase()==="elevation 3d layer")return!0;throw new D("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},i).catch(L).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(i,e,t,r){const o=m((r=r||{signal:null}).signal)?r.signal:r.signal=new AbortController().signal,h={responseType:"array-buffer",signal:o},n={noDataValue:r.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(i,e,t,r)).then(()=>y(this.getTileUrl(i,e,t),h)).then(p=>this._lercDecoder.decode(p.data,n,o)).then(p=>new M(p))}getTileUrl(i,e,t){const r=!this.tilemapCache&&this.supportsBlankTile,o=w({...this.parsedUrl.query,blankTile:!r&&null});return`${this.parsedUrl.path}/tile/${i}/${e}/${t}${o?"?"+o:""}`}async queryElevation(i,e){const{ElevationQuery:t}=await _(()=>import("./ElevationQuery-d62e3df0.js"),["assets/ElevationQuery-d62e3df0.js","assets/asyncUtils-d59cad3c.js","assets/cast-4d1aa82d.js","assets/typedArrayUtil-c81d173a.js","assets/string-bf9c68ed.js","assets/Error-9392329b.js","assets/ensureType-8c80e8c7.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-3ce2a460.js","assets/Extent-52b65909.js","assets/Polyline-7f90e3cc.js","assets/projection-676f1424.js","assets/preload-helper-101896b7.js","assets/mathUtils-505ef34b.js","assets/SimpleObservable-7e8b69a3.js","assets/mat4-63147b80.js","assets/assets-2d98ef96.js","assets/request-429c0e66.js","assets/zscale-92e5f59b.js","assets/aaBoundingRect-062d7c89.js","assets/geometry-8c15a791.js","assets/typeUtils-f38bdb16.js","assets/TileInfo-3f2956cd.js"]);return c(e),new t().query(this,i,e)}async createElevationSampler(i,e){const{ElevationQuery:t}=await _(()=>import("./ElevationQuery-d62e3df0.js"),["assets/ElevationQuery-d62e3df0.js","assets/asyncUtils-d59cad3c.js","assets/cast-4d1aa82d.js","assets/typedArrayUtil-c81d173a.js","assets/string-bf9c68ed.js","assets/Error-9392329b.js","assets/ensureType-8c80e8c7.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-3ce2a460.js","assets/Extent-52b65909.js","assets/Polyline-7f90e3cc.js","assets/projection-676f1424.js","assets/preload-helper-101896b7.js","assets/mathUtils-505ef34b.js","assets/SimpleObservable-7e8b69a3.js","assets/mat4-63147b80.js","assets/assets-2d98ef96.js","assets/request-429c0e66.js","assets/zscale-92e5f59b.js","assets/aaBoundingRect-062d7c89.js","assets/geometry-8c15a791.js","assets/typeUtils-f38bdb16.js","assets/TileInfo-3f2956cd.js"]);return c(e),new t().createSampler(this,i,e)}_fetchTileAvailability(i,e,t,r){return this.tilemapCache?this.tilemapCache.fetchAvailability(i,e,t,r):Promise.resolve("unknown")}async _fetchImageService(i){var r;if(this.sourceJSON)return this.sourceJSON;const e={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:i},t=await y(this.parsedUrl.path,e);t.ssl&&(this.url=(r=this.url)==null?void 0:r.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};a([l({json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),a([l({readOnly:!0,type:k})],s.prototype,"heightModelInfo",void 0),a([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),a([l({type:["show","hide"]})],s.prototype,"listMode",void 0),a([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"minScale",void 0),a([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"maxScale",void 0),a([l({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),a([l({type:["ArcGISTiledElevationServiceLayer"]})],s.prototype,"operationalLayerType",void 0),a([l()],s.prototype,"sourceJSON",void 0),a([l({json:{read:!1},value:"elevation",readOnly:!0})],s.prototype,"type",void 0),a([l(P)],s.prototype,"url",void 0),a([l()],s.prototype,"version",void 0),a([x("version",["currentVersion"])],s.prototype,"readVersion",null),s=a([g("esri.layers.ElevationLayer")],s),s.prototype.fetchTile.__isDefault__=!0;const Be=s;export{Be as default};
