import{e as a,y as s,a as f,v as D}from"./cast-4d1aa82d.js";import{g as b}from"./Graphic-b6696507.js";import{j as $}from"./Collection-54857936.js";import{l as x,w as P,U as S}from"./reactiveUtils-989a8d7f.js";import"./ensureType-8c80e8c7.js";import{r as _,t as V,e as z}from"./typedArrayUtil-c81d173a.js";import{i as A}from"./GraphicsCollection-6cd24d14.js";import{m as C,y as M,h as O}from"./RasterVFDisplayObject-092dfa30.js";import{f as j,u as N}from"./LayerView-f4777136.js";import{a as J}from"./GraphicsView2D-c3e93aa6.js";import{n as L}from"./HighlightGraphicContainer-1485a784.js";import{s as R,a as q}from"./Error-9392329b.js";import{j as E,x as G}from"./promiseUtils-3ce2a460.js";import{T as H,x as W,d as K}from"./dataUtils-712d153e.js";import{a as Q}from"./BitmapContainer-8540a11b.js";import{h as X}from"./Container-782a7f3a.js";import{l as Y}from"./Bitmap-044822eb.js";import{v as Z}from"./ExportStrategy-8b65928f.js";import{U as tt}from"./request-16c6134d.js";import{d as et}from"./HandleOwner-1ffa4597.js";import{a as k,w as T}from"./Extent-52b65909.js";import{J as it}from"./rasterProjectionHelper-2f2082da.js";import{T as B}from"./enums-b1d611e3.js";import{c as rt}from"./WGLContainer-12d66f96.js";import{b as ot}from"./OperationalLayer-70e0771f.js";import{x as at}from"./Query-8c2b9d22.js";import{s as st}from"./popupUtils-4db6471b.js";import{i as pt}from"./RefreshableLayerView-d6853579.js";import"./string-bf9c68ed.js";import"./nextTick-3ee5a785.js";import"./geometry-8c15a791.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./PopupTemplate-7c042eda.js";import"./Clonable-ad03ca71.js";import"./fieldUtils-c41301b0.js";import"./preload-helper-41c905a7.js";import"./enumeration-de0a766e.js";import"./number-b98554af.js";import"./locale-30120714.js";import"./Identifiable-a49d7533.js";import"./symbols-426355d5.js";import"./CIMSymbol-33f517af.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./aaBoundingBox-55a55434.js";import"./persistableUrlUtils-abff3ce1.js";import"./collectionUtils-cc5781ab.js";import"./Portal-fe1a007c.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./jsonUtils-e2434b33.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./VertexArrayObject-2b4e90de.js";import"./Texture-5c56cee1.js";import"./context-util-2fc70f17.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./mat3f32-6c416b1c.js";import"./mat3-5b850236.js";import"./vec2f32-eaf29605.js";import"./color-349a3ca2.js";import"./enums-4b2a86a0.js";import"./MyMap-cf7367ff.js";import"./Basemap-5520ad34.js";import"./deprecate-0efb6d09.js";import"./loadAll-8b24919b.js";import"./asyncUtils-d59cad3c.js";import"./PortalItem-d79345ac.js";import"./assets-86d142ff.js";import"./messages-57170cca.js";import"./writeUtils-9e2bb9d7.js";import"./layerUtils-394e7a48.js";import"./compilerUtils-db2fe354.js";import"./CollectionFlattener-8de7cbfd.js";import"./TablesMixin-54823533.js";import"./Layer-5bf3596f.js";import"./Cyclical-e9c94d8a.js";import"./workers-9e1006b9.js";import"./Connection-da262054.js";import"./Queue-4939205d.js";import"./intl-45f8f1a9.js";import"./projection-03688518.js";import"./mat4-63147b80.js";import"./zscale-92e5f59b.js";import"./TileInfo-3f2956cd.js";import"./aaBoundingRect-062d7c89.js";import"./widget-b2a8e375.js";import"./uuid-73213768.js";import"./byteSizeEstimations-90c5a50d.js";import"./AttachmentInfo-12f14212.js";import"./AttachmentQuery-dffd8fdc.js";import"./LegendOptions-6e5321d3.js";import"./utils-285aaf9a.js";import"./parser-7deabd3b.js";import"./ItemCache-28393d1d.js";import"./MemCache-c220a92a.js";import"./jsonUtils-714f7856.js";import"./UniqueValueRenderer-adb2594e.js";import"./diffUtils-ba6273ab.js";import"./colorRamps-6cc98f16.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-320ae102.js";import"./jsonUtils-dfa282b7.js";import"./styleUtils-6ef1c49e.js";import"./DictionaryLoader-7f74ef6b.js";import"./LRUCache-7d328c48.js";import"./heatmapUtils-74b8fd48.js";import"./vec4f64-aa64c7e9.js";import"./executeQueryJSON-ad10aa61.js";import"./normalizeUtils-08ce1e14.js";import"./normalizeUtilsCommon-42c6cdb7.js";import"./query-b41db307.js";import"./pbfQueryUtils-718fed42.js";import"./pbf-9196f6ce.js";import"./OptimizedFeature-6361f5d1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-22ca074d.js";import"./FeatureSet-a47eef0a.js";import"./Field-899dc481.js";import"./fieldType-68c65bf7.js";import"./featureConversionUtils-93a98860.js";import"./RelationshipQuery-80632d4c.js";import"./TimeExtent-0fb637c6.js";import"./TopFeaturesQuery-e56e9bfe.js";import"./FeatureLayer-3b171605.js";import"./MultiOriginJSONSupport-55da1d06.js";import"./serviceCapabilitiesUtils-2296548c.js";import"./arcgisLayerUrl-824ee458.js";import"./FeatureLayerBase-ed16c570.js";import"./HeightModelInfo-a5f98ab4.js";import"./TimeReference-d5a14980.js";import"./datetime-b6333958.js";import"./editsZScale-9447610d.js";import"./APIKeyMixin-35aced10.js";import"./ArcGISService-78831401.js";import"./BlendLayer-1f4ade52.js";import"./CustomParametersMixin-6e258788.js";import"./EditBusLayer-f379d91e.js";import"./FeatureReductionLayer-a890a60c.js";import"./labelingInfo-8ec658bf.js";import"./labelUtils-4db1d7ec.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-9994883c.js";import"./PortalLayer-d4941bb0.js";import"./portalItemUtils-9126718d.js";import"./RefreshableLayer-2dcbbf25.js";import"./ScaleRangeLayer-a6967062.js";import"./TemporalLayer-76f9669f.js";import"./FeatureTemplate-136fba4c.js";import"./FeatureType-f3fd3327.js";import"./fieldProperties-cf15bacb.js";import"./FieldsIndex-b8dc9788.js";import"./versionUtils-0602c916.js";import"./styleUtils-30cd950e.js";import"./popupUtils-eff4732c.js";import"./ElevationInfo-5422702b.js";import"./mat2d-795519e1.js";import"./Scheduler-05bc8017.js";import"./ViewingMode-fb6259a5.js";import"./unitBezier-881ac1eb.js";import"./vec2-3a431caf.js";import"./vec2f64-22afc56f.js";import"./TileStrategy-cb3a7d25.js";import"./TileStore-4f504952.js";import"./TileKey-3acb01a1.js";import"./rbush-f2a85c98.js";import"./quickselect-56c5966e.js";import"./capabilities-55572a33.js";import"./WebTileLayer-cf969b4c.js";import"./imageBitmapUtils-86f741ce.js";import"./index-0970c694.js";import"./ExpandedCIM-23a9d4d0.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./MaterialKey-8f458904.js";import"./definitions-19bfb61c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-54fe414b.js";import"./floatRGBA-90587fc5.js";import"./normalizeUtilsSync-87c5ef07.js";import"./projectionSupport-6e748f70.js";import"./json-48e3ea08.js";import"./AttributeStoreView-dcb739c3.js";import"./TiledDisplayObject-76821229.js";import"./visualVariablesUtils-f202191f.js";import"./visualVariablesUtils-904a1f06.js";import"./Matcher-38d3d28c.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-14d34b25.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-d9e5d320.js";import"./utils-45a97d77.js";import"./createSymbolSchema-8b7065b5.js";import"./rendererUtils-90c6d352.js";import"./util-54b675a7.js";import"./ComputedAttributeStorage-8962ca7e.js";import"./FeatureSetReader-a6554301.js";import"./arcadeTimeUtils-a56a27c9.js";import"./executionError-fb3f283a.js";import"./centroid-85944438.js";import"./BaseGraphicContainer-1eb25f25.js";import"./FeatureContainer-2988c992.js";import"./TileContainer-04cf618b.js";import"./vec3f32-ad1dc57f.js";import"./ProgramTemplate-b518276b.js";import"./StyleDefinition-7d58136b.js";import"./config-1337d16e.js";let m=class extends D{constructor(){super(...arguments),this.attached=!1,this.container=new X,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Q}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(e=>{E(e)||R.getLogger(this.declaredClass).error(e)})}hitTest(t){return new b({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new Z({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:e.extent}}).catch(t=>{E(t)||R.getLogger(this.declaredClass).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map(o=>o.source).filter(o=>o.extent&&o.extent.intersects(e)).map(o=>({extent:o.extent,pixelBlock:o.originalPixelBlock})),r=H(i,e);return _(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){var c;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const o=await this.layer.fetchImage(t,e,i,r);if(o.imageBitmap)return o.imageBitmap;const p=await this.layer.applyRenderer(o.pixelData,{signal:r.signal}),n=new Y(p.pixelBlock,(c=p.extent)==null?void 0:c.clone(),o.pixelData.pixelBlock);return n.filter=l=>this.layer.applyFilter(l),n}};a([s()],m.prototype,"attached",void 0),a([s()],m.prototype,"container",void 0),a([s()],m.prototype,"layer",void 0),a([s()],m.prototype,"strategy",void 0),a([s()],m.prototype,"timeExtent",void 0),a([s()],m.prototype,"view",void 0),a([s()],m.prototype,"updateRequested",void 0),a([s()],m.prototype,"updating",null),a([s()],m.prototype,"type",void 0),m=a([f("esri.views.2d.layers.imagery.ImageryView2D")],m);const nt=m;class mt extends rt{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[C],target:()=>this.children,drawPhase:B.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===B.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends D{constructor(t){super(t),this._loading=null,this.update=G((e,i)=>this._update(e,i).catch(r=>{E(r)||R.getLogger(this.declaredClass).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:o}=t.state,p=new k({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:o}),[n,c]=t.state.size;this._loading=this.fetchPixels(p,n,c,i);const l=await this._loading;this._addToDisplay(l,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(V(t.pixelBlock))return this.container.children.forEach(n=>n.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:o}=t,p=new M(o);p.offset=[0,0],p.symbolizerParameters=e,p.rawPixelData=t,p.invalidateVAO(),p.x=r.xmin,p.y=r.ymax,p.pixelRatio=i.pixelRatio,p.rotation=i.rotation,p.resolution=i.resolution,p.width=o.width*e.symbolTileSize,p.height=o.height*e.symbolTileSize,this.container.children.forEach(n=>n.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(p)}};a([s()],y.prototype,"fetchPixels",void 0),a([s()],y.prototype,"container",void 0),a([s()],y.prototype,"_loading",void 0),a([s()],y.prototype,"updating",null),y=a([f("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const lt=y;let h=class extends et{constructor(){super(...arguments),this.attached=!1,this.container=new mt,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const o=await this._projectFullExtentPromise,{symbolTileSize:p}=this.layer.renderer,{extent:n,width:c,height:l}=W(t,e,i,p,o);if(_(o)&&!o.intersects(t))return{extent:n,pixelBlock:null};const d={bbox:`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:p,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const u=this.getPixelData();if(_(u)&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===d.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(n,c,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=d;const w=g==null?void 0:g.pixelBlock;return V(w)?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?z(K(w,"vector-uv")):w}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new lt({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(x(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),P),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new b({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams)}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,o=this._dataParameters.bbox===t.bbox;return e&&i&&r&&o}async _getProjectedFullExtent(t){try{return await it(this.layer.fullExtent,t)}catch{try{const i=(await tt(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?k.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};a([s()],h.prototype,"attached",void 0),a([s()],h.prototype,"container",void 0),a([s()],h.prototype,"layer",void 0),a([s()],h.prototype,"timeExtent",void 0),a([s()],h.prototype,"type",void 0),a([s()],h.prototype,"view",void 0),a([s()],h.prototype,"updating",null),h=a([f("esri.views.2d.layers.imagery.VectorFieldView2D")],h);const ht=h,ct=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:o}=this;if(!i)throw new q("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:p}=o,n=st(o,r);if(!p||V(n))throw new q("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:n});const c=await n.getRequiredFields(),l=new at;l.timeExtent=this.timeExtent,l.geometry=i,l.outFields=c,l.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:g}=this.view,w=this.view.type==="2d"?new T(d,d,g):new T(.5*d,.5*d,g),{returnTopmostRaster:u,showNoDataRecords:F}=n.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},I={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:w,showNoDataRecords:F,signal:_(r)?r.signal:null};return o.queryVisibleRasters(l,I).then(U=>U)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return a([s()],e.prototype,"layer",void 0),a([s()],e.prototype,"suspended",void 0),a([s(ot)],e.prototype,"timeExtent",void 0),a([s()],e.prototype,"view",void 0),e=a([f("esri.views.layers.ImageryLayerView")],e),e};let v=class extends ct(pt(j(N))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new A,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}async hitTest(t,e){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new J({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new L(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([x(()=>this.layer.blendMode??"normal",t=>this.subview&&(this.subview.container.blendMode=t),P),x(()=>this.layer.effect??null,t=>this.subview&&(this.subview.container.effect=t),P),x(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},S),x(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},S),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),x(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:$.isCollection(t)?t.getItemAt(0):t)instanceof b))return{remove:()=>{}};let i=[];return Array.isArray(t)||$.isCollection(t)?i=t.map(r=>r.clone()):t instanceof b&&(i=[t.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:o}=this.subview;if(o===e)return this._attachSubview(this.subview),void(o==="flow"?this.subview.redrawOrRefetch():o==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new nt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new ht({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new O({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0),t.container.blendMode=this.layer.blendMode,t.container.effect=this.layer.effect)}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};a([s()],v.prototype,"pixelData",null),a([s()],v.prototype,"subview",void 0),v=a([f("esri.views.2d.layers.ImageryLayerView2D")],v);const uo=v;export{uo as default};