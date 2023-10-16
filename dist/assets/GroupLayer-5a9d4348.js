import{z as d,e as r,y as s,a as h}from"./cast-4d1aa82d.js";import{l as b}from"./CollectionFlattener-8de7cbfd.js";import{l as v}from"./loadAll-8b24919b.js";import{r as u}from"./typedArrayUtil-c81d173a.js";import{O as f}from"./MultiOriginJSONSupport-55da1d06.js";import{l as m,U as y}from"./reactiveUtils-989a8d7f.js";import"./ensureType-8c80e8c7.js";import{r as c}from"./Extent-52b65909.js";import{b as _}from"./Layer-5bf3596f.js";import{n as g}from"./BlendLayer-1f4ade52.js";import{c as L}from"./OperationalLayer-70e0771f.js";import{_ as O}from"./PortalLayer-d4941bb0.js";import{t as w}from"./ScaleRangeLayer-a6967062.js";import{a as M}from"./lazyLayerLoader-4953a1fd.js";import{l as $,d as V,t as C}from"./TablesMixin-54823533.js";import{y as x}from"./writeUtils-9e2bb9d7.js";import"./string-bf9c68ed.js";import"./Error-9392329b.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./asyncUtils-d59cad3c.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./preload-helper-41c905a7.js";import"./geometry-8c15a791.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./request-16c6134d.js";import"./Identifiable-a49d7533.js";import"./parser-7deabd3b.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-63147b80.js";import"./mathUtils-505ef34b.js";import"./TimeExtent-0fb637c6.js";import"./persistableUrlUtils-abff3ce1.js";import"./ElevationInfo-5422702b.js";import"./fieldUtils-c41301b0.js";import"./lengthUtils-320ae102.js";import"./opacityUtils-a1e441cd.js";import"./layerUtils-394e7a48.js";import"./Portal-fe1a007c.js";import"./locale-30120714.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./PortalItem-d79345ac.js";import"./assets-86d142ff.js";import"./portalItemUtils-9126718d.js";import"./projection-03688518.js";import"./zscale-92e5f59b.js";import"./collectionUtils-cc5781ab.js";let t=class extends g(w(L(O($(V(f(_))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new b({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=C(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(m(()=>this.visible,this._onVisibilityChange.bind(this),y))}_writeLayers(i,e,a,o){const l=[];if(!i)return l;i.forEach(n=>{const p=x(n,o.webmap?o.webmap.getLayerJSONFromResourceInfo(n):null,o);u(p)&&p.layerType&&l.push(p)}),e.layers=l}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:M},i)),Promise.resolve(this)}async loadAll(){return v(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=m(()=>i.visible,e=>this._onChildVisibilityChange(i,e),y)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!d(this).initialized)return;const a=this.layers;let o=a.find(l=>l.visible);switch(i){case"exclusive":a.length&&!o&&(o=a.getItemAt(0),o.visible=!0),this._turnOffOtherLayers(o);break;case"inherited":a.forEach(l=>{l.visible=e})}}_onVisibilityChange(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};r([s({readOnly:!0,dependsOn:[]})],t.prototype,"allLayers",void 0),r([s({readOnly:!0})],t.prototype,"allTables",void 0),r([s()],t.prototype,"fullExtent",void 0),r([s({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),r([s({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),r([c("layers")],t.prototype,"_writeLayers",null),r([s({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),r([s({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),r([s()],t.prototype,"spatialReference",void 0),r([s({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),r([s({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=r([h("esri.layers.GroupLayer")],t);const Ti=t;export{Ti as default};