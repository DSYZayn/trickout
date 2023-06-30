import{e as p,y as m,a as h}from"./cast-4d1aa82d.js";import{s as l}from"./Error-9392329b.js";import{j as g}from"./promiseUtils-3ce2a460.js";import{l as d}from"./reactiveUtils-989a8d7f.js";import"./ensureType-8c80e8c7.js";import"./typedArrayUtil-c81d173a.js";import{i as u}from"./GraphicsCollection-19c3233c.js";import{a as c}from"./BitmapContainer-8540a11b.js";import{f as y,u as f}from"./LayerView-44f9aaab.js";import{a as x}from"./GraphicsView2D-de279223.js";import{n as w}from"./HighlightGraphicContainer-65cd1f9e.js";import{v}from"./ExportStrategy-8b65928f.js";import{b as _}from"./OperationalLayer-3f888de5.js";import{c as H}from"./ExportImageParameters-663b35f4.js";import{i as I}from"./RefreshableLayerView-d6853579.js";import{S as V,a as P}from"./drapedUtils-55946f5b.js";import"./string-bf9c68ed.js";import"./nextTick-3ee5a785.js";import"./Graphic-4a228e99.js";import"./geometry-8c15a791.js";import"./Extent-52b65909.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./PopupTemplate-6b3c08c8.js";import"./Clonable-ad03ca71.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./fieldUtils-7c95d0c6.js";import"./preload-helper-101896b7.js";import"./enumeration-de0a766e.js";import"./number-b98554af.js";import"./locale-30120714.js";import"./Identifiable-a49d7533.js";import"./symbols-0c3dfce8.js";import"./CIMSymbol-adda48ca.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./aaBoundingBox-55a55434.js";import"./request-429c0e66.js";import"./persistableUrlUtils-ef87bc82.js";import"./collectionUtils-cc5781ab.js";import"./Portal-4a02a9a8.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./PortalGroup-45834c06.js";import"./PortalUser-bb0f9958.js";import"./jsonUtils-e2434b33.js";import"./HandleOwner-1ffa4597.js";import"./WGLContainer-12d66f96.js";import"./mat3f32-6c416b1c.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-2b4e90de.js";import"./Texture-5c56cee1.js";import"./context-util-2fc70f17.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-349a3ca2.js";import"./enums-4b2a86a0.js";import"./enums-b1d611e3.js";import"./ProgramTemplate-b518276b.js";import"./MaterialKey-8f458904.js";import"./utils-45a97d77.js";import"./heatmapUtils-74b8fd48.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-7d58136b.js";import"./vec2f32-eaf29605.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-782a7f3a.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./earcut-61f7b102.js";import"./vec2-3a431caf.js";import"./vec2f64-22afc56f.js";import"./featureConversionUtils-93a98860.js";import"./aaBoundingRect-062d7c89.js";import"./OptimizedFeature-6361f5d1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./MyMap-5b789db1.js";import"./Basemap-983226f4.js";import"./deprecate-0efb6d09.js";import"./loadAll-8b24919b.js";import"./asyncUtils-d59cad3c.js";import"./PortalItem-8c677fd9.js";import"./assets-2d98ef96.js";import"./messages-57170cca.js";import"./writeUtils-3ee09246.js";import"./layerUtils-c60873a1.js";import"./compilerUtils-db2fe354.js";import"./CollectionFlattener-8de7cbfd.js";import"./TablesMixin-52c2dbd2.js";import"./Layer-3cc844b0.js";import"./Cyclical-e9c94d8a.js";import"./workers-6ae37cc2.js";import"./Connection-ee309efe.js";import"./Queue-4939205d.js";import"./intl-806fa328.js";import"./projection-676f1424.js";import"./zscale-92e5f59b.js";import"./TileInfo-3f2956cd.js";import"./widget-f511f891.js";import"./uuid-73213768.js";import"./byteSizeEstimations-90c5a50d.js";import"./AttachmentInfo-12f14212.js";import"./AttachmentQuery-dffd8fdc.js";import"./LegendOptions-6e5321d3.js";import"./utils-7a9e5fc6.js";import"./ItemCache-28393d1d.js";import"./MemCache-c220a92a.js";import"./jsonUtils-4e342d8c.js";import"./UniqueValueRenderer-16354145.js";import"./diffUtils-ba6273ab.js";import"./colorRamps-6cc98f16.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-320ae102.js";import"./jsonUtils-beb5fd18.js";import"./styleUtils-0d4515e5.js";import"./DictionaryLoader-3797a46e.js";import"./LRUCache-7d328c48.js";import"./Query-8c2b9d22.js";import"./TimeExtent-0fb637c6.js";import"./Field-899dc481.js";import"./fieldType-68c65bf7.js";import"./executeQueryJSON-c58ecd81.js";import"./normalizeUtils-78f35d29.js";import"./normalizeUtilsCommon-42c6cdb7.js";import"./query-fc1b5d57.js";import"./pbfQueryUtils-718fed42.js";import"./pbf-9196f6ce.js";import"./queryZScale-22ca074d.js";import"./FeatureSet-b6c99b8e.js";import"./RelationshipQuery-80632d4c.js";import"./TopFeaturesQuery-e56e9bfe.js";import"./FeatureLayer-fc4ae836.js";import"./MultiOriginJSONSupport-55da1d06.js";import"./serviceCapabilitiesUtils-bdb661e2.js";import"./arcgisLayerUrl-0567e8c8.js";import"./FeatureLayerBase-c8196cb0.js";import"./HeightModelInfo-a5f98ab4.js";import"./TimeReference-d5a14980.js";import"./datetime-b6333958.js";import"./editsZScale-9447610d.js";import"./APIKeyMixin-35aced10.js";import"./ArcGISService-f48f70cb.js";import"./BlendLayer-1f4ade52.js";import"./CustomParametersMixin-6e258788.js";import"./EditBusLayer-f379d91e.js";import"./FeatureReductionLayer-398b84cc.js";import"./labelingInfo-0e7e440a.js";import"./labelUtils-4db1d7ec.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-9994883c.js";import"./PortalLayer-d69242c0.js";import"./portalItemUtils-6225971d.js";import"./RefreshableLayer-2dcbbf25.js";import"./ScaleRangeLayer-a6967062.js";import"./TemporalLayer-e1338658.js";import"./FeatureTemplate-136fba4c.js";import"./FeatureType-f3fd3327.js";import"./fieldProperties-d1a48384.js";import"./FieldsIndex-29a8df54.js";import"./versionUtils-c26fc550.js";import"./styleUtils-30cd950e.js";import"./popupUtils-89cdd81e.js";import"./ElevationInfo-280697dd.js";import"./mat2d-795519e1.js";import"./Scheduler-05bc8017.js";import"./ViewingMode-fb6259a5.js";import"./unitBezier-881ac1eb.js";import"./mat3-5b850236.js";import"./TileStrategy-cb3a7d25.js";import"./TileStore-4f504952.js";import"./TileKey-3acb01a1.js";import"./rbush-f2a85c98.js";import"./quickselect-56c5966e.js";import"./capabilities-55572a33.js";import"./WebTileLayer-b1b21595.js";import"./imageBitmapUtils-86f741ce.js";import"./index-c5dc512b.js";import"./ExpandedCIM-9a9f682e.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-54fe414b.js";import"./floatRGBA-90587fc5.js";import"./normalizeUtilsSync-87c5ef07.js";import"./projectionSupport-26ba0ab6.js";import"./json-48e3ea08.js";import"./AttributeStoreView-dcb739c3.js";import"./TiledDisplayObject-76821229.js";import"./visualVariablesUtils-f202191f.js";import"./visualVariablesUtils-904a1f06.js";import"./Matcher-c9075c7b.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-e8d830a5.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-5cba5948.js";import"./createSymbolSchema-8b7065b5.js";import"./rendererUtils-90c6d352.js";import"./util-54b675a7.js";import"./ComputedAttributeStorage-3b1fa8e7.js";import"./FeatureSetReader-0b7eb9fe.js";import"./arcadeTimeUtils-0a92beb1.js";import"./executionError-fb3f283a.js";import"./centroid-85944438.js";import"./BaseGraphicContainer-93192059.js";import"./FeatureContainer-2988c992.js";import"./TileContainer-04cf618b.js";import"./vec3f32-ad1dc57f.js";import"./Bitmap-044822eb.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-5d4d0ee3.js";import"./scaleUtils-8911ddd5.js";import"./popupUtils-b7545076.js";const U=t=>{let i=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var r;return((r=this.view)==null?void 0:r.floors)??null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var r;return!!super.canResume()&&!((r=this.timeExtent)!=null&&r.isEmpty)}};return p([m()],i.prototype,"exportImageParameters",void 0),p([m({readOnly:!0})],i.prototype,"floors",null),p([m({readOnly:!0})],i.prototype,"exportImageVersion",null),p([m()],i.prototype,"layer",void 0),p([m()],i.prototype,"suspended",void 0),p([m(_)],i.prototype,"timeExtent",void 0),i=p([h("esri.views.layers.MapImageLayerView")],i),i};let e=class extends U(I(y(f))){constructor(){super(...arguments),this._highlightGraphics=new u,this._updateHash=""}fetchPopupFeatures(t,i){return this._popupHighlightHelper.fetchPopupFeatures(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(o=>{g(o)||l.getLogger(this.declaredClass).error(o)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:o}=this.layer,r=o>=10.3,n=o>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new w(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(a,s)=>P(a,s,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(a,s)=>{this._highlightView.graphicUpdateHandler({graphic:a,property:s})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:r,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(d(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,o,r){return this.layer.fetchImage(t,i,o,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,i,o,r){return this.layer.fetchImageBitmap(t,i,o,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};p([m()],e.prototype,"strategy",void 0),p([m()],e.prototype,"updating",void 0),e=p([h("esri.views.2d.layers.MapImageLayerView2D")],e);const So=e;export{So as default};
