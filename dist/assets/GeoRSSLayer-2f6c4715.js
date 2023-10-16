import{e as o,y as i,a as m}from"./cast-4d1aa82d.js";import{b as n}from"./Error-9392329b.js";import{q as y,U as u}from"./request-16c6134d.js";import{m as d,n as h,y as c,S as f}from"./symbols-426355d5.js";import{r as S}from"./typedArrayUtil-c81d173a.js";import{O as v}from"./MultiOriginJSONSupport-55da1d06.js";import{w as g}from"./promiseUtils-3ce2a460.js";import"./ensureType-8c80e8c7.js";import{G as b,o as C,a as w}from"./Extent-52b65909.js";import{b as G}from"./Layer-5bf3596f.js";import{n as _}from"./BlendLayer-1f4ade52.js";import{c as $,v as x,a as P,f as R}from"./OperationalLayer-70e0771f.js";import{_ as k}from"./PortalLayer-d4941bb0.js";import{p as F}from"./RefreshableLayer-2dcbbf25.js";import{t as j}from"./ScaleRangeLayer-a6967062.js";import{a}from"./CIMSymbol-33f517af.js";import"./string-bf9c68ed.js";import"./nextTick-3ee5a785.js";import"./preload-helper-41c905a7.js";import"./enumeration-de0a766e.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./aaBoundingBox-55a55434.js";import"./persistableUrlUtils-abff3ce1.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./collectionUtils-cc5781ab.js";import"./Portal-fe1a007c.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./locale-30120714.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./Clonable-ad03ca71.js";import"./geometry-8c15a791.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./Identifiable-a49d7533.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./TimeExtent-0fb637c6.js";import"./ElevationInfo-5422702b.js";import"./fieldUtils-c41301b0.js";import"./lengthUtils-320ae102.js";import"./asyncUtils-d59cad3c.js";import"./layerUtils-394e7a48.js";import"./PortalItem-d79345ac.js";import"./assets-86d142ff.js";import"./portalItemUtils-9126718d.js";import"./projection-03688518.js";import"./zscale-92e5f59b.js";const E=["atom","xml"],L={base:a,key:"type",typeMap:{"simple-line":d},errorContext:"symbol"},M={base:a,key:"type",typeMap:{"picture-marker":h,"simple-marker":c},errorContext:"symbol"},O={base:a,key:"type",typeMap:{"simple-fill":f},errorContext:"symbol"};let e=class extends _(F($(k(j(v(G)))))){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(t,r){return typeof t=="string"?{url:t,...r}:t}readFeatureCollections(t,r){return r.featureCollection.layers.forEach(s=>{var l;const p=s.layerDefinition.drawingInfo.renderer.symbol;p&&p.type==="esriSFS"&&((l=p.outline)!=null&&l.style.includes("esriSFS"))&&(p.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?y(this.url,E)||"GeoRSS":t||""}set title(t){this._set("title",t)}load(t){const r=S(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},t).catch(g).then(()=>this._fetchService(r)).then(s=>{this.read(s,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const t=await this._fetchService();return this.read(t,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(t){const r=this.spatialReference,{data:s}=await u(n.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:b(r)?void 0:r.wkid??JSON.stringify(r)},signal:t});return s}_hasGeometry(t){var r;return((r=this.featureCollections)==null?void 0:r.some(s=>{var p,l;return((p=s.featureSet)==null?void 0:p.geometryType)===t&&((l=s.featureSet.features)==null?void 0:l.length)>0}))??!1}};o([i()],e.prototype,"description",void 0),o([i()],e.prototype,"featureCollections",void 0),o([C("service","featureCollections",["featureCollection.layers"])],e.prototype,"readFeatureCollections",null),o([i({type:w,json:{name:"lookAtExtent"}})],e.prototype,"fullExtent",void 0),o([i(x)],e.prototype,"id",void 0),o([i(P)],e.prototype,"legendEnabled",void 0),o([i({types:L,json:{write:!0}})],e.prototype,"lineSymbol",void 0),o([i({type:["show","hide"]})],e.prototype,"listMode",void 0),o([i({types:M,json:{write:!0}})],e.prototype,"pointSymbol",void 0),o([i({types:O,json:{write:!0}})],e.prototype,"polygonSymbol",void 0),o([i({type:["GeoRSS"]})],e.prototype,"operationalLayerType",void 0),o([i(R)],e.prototype,"url",void 0),o([i({json:{origins:{service:{read:{source:"name",reader:t=>t||void 0}}}}})],e.prototype,"title",null),o([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],e.prototype,"type",void 0),e=o([m("esri.layers.GeoRSSLayer")],e);const qt=e;export{qt as default};
