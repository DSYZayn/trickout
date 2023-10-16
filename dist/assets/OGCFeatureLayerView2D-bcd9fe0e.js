import{e as t,y as p,a as m}from"./cast-4d1aa82d.js";import"./Error-9392329b.js";import"./ensureType-8c80e8c7.js";import"./typedArrayUtil-c81d173a.js";import"./string-bf9c68ed.js";import a from"./FeatureLayerView2D-0925c787.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./Graphic-b6696507.js";import"./geometry-8c15a791.js";import"./Extent-52b65909.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./PopupTemplate-7c042eda.js";import"./Clonable-ad03ca71.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./fieldUtils-c41301b0.js";import"./preload-helper-41c905a7.js";import"./enumeration-de0a766e.js";import"./number-b98554af.js";import"./locale-30120714.js";import"./Identifiable-a49d7533.js";import"./symbols-426355d5.js";import"./CIMSymbol-33f517af.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./aaBoundingBox-55a55434.js";import"./request-16c6134d.js";import"./persistableUrlUtils-abff3ce1.js";import"./collectionUtils-cc5781ab.js";import"./Portal-fe1a007c.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./jsonUtils-e2434b33.js";import"./reactiveUtils-989a8d7f.js";import"./Container-782a7f3a.js";import"./mat3f32-6c416b1c.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-5c56cee1.js";import"./context-util-2fc70f17.js";import"./FeatureReductionLayer-a890a60c.js";import"./BlendLayer-1f4ade52.js";import"./TimeExtent-0fb637c6.js";import"./Query-8c2b9d22.js";import"./Field-899dc481.js";import"./fieldType-68c65bf7.js";import"./UniqueValueRenderer-adb2594e.js";import"./LegendOptions-6e5321d3.js";import"./diffUtils-ba6273ab.js";import"./colorRamps-6cc98f16.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-db2fe354.js";import"./lengthUtils-320ae102.js";import"./jsonUtils-dfa282b7.js";import"./layerUtils-394e7a48.js";import"./styleUtils-6ef1c49e.js";import"./jsonUtils-714f7856.js";import"./DictionaryLoader-7f74ef6b.js";import"./LRUCache-7d328c48.js";import"./MemCache-c220a92a.js";import"./deprecate-0efb6d09.js";import"./heatmapUtils-74b8fd48.js";import"./vec4f64-aa64c7e9.js";import"./OperationalLayer-70e0771f.js";import"./ElevationInfo-5422702b.js";import"./labelingInfo-8ec658bf.js";import"./labelUtils-4db1d7ec.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureSet-a47eef0a.js";import"./LayerView-f4777136.js";import"./MyMap-cf7367ff.js";import"./Basemap-5520ad34.js";import"./loadAll-8b24919b.js";import"./asyncUtils-d59cad3c.js";import"./PortalItem-d79345ac.js";import"./assets-86d142ff.js";import"./messages-57170cca.js";import"./writeUtils-9e2bb9d7.js";import"./CollectionFlattener-8de7cbfd.js";import"./TablesMixin-54823533.js";import"./Layer-5bf3596f.js";import"./Cyclical-e9c94d8a.js";import"./workers-9e1006b9.js";import"./Connection-da262054.js";import"./Queue-4939205d.js";import"./intl-45f8f1a9.js";import"./projection-03688518.js";import"./zscale-92e5f59b.js";import"./TileInfo-3f2956cd.js";import"./aaBoundingRect-062d7c89.js";import"./widget-b2a8e375.js";import"./uuid-73213768.js";import"./HandleOwner-1ffa4597.js";import"./byteSizeEstimations-90c5a50d.js";import"./AttachmentInfo-12f14212.js";import"./AttachmentQuery-dffd8fdc.js";import"./utils-285aaf9a.js";import"./ItemCache-28393d1d.js";import"./executeQueryJSON-ad10aa61.js";import"./normalizeUtils-08ce1e14.js";import"./normalizeUtilsCommon-42c6cdb7.js";import"./query-b41db307.js";import"./pbfQueryUtils-718fed42.js";import"./pbf-9196f6ce.js";import"./OptimizedFeature-6361f5d1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-22ca074d.js";import"./featureConversionUtils-93a98860.js";import"./RelationshipQuery-80632d4c.js";import"./TopFeaturesQuery-e56e9bfe.js";import"./FeatureLayer-3b171605.js";import"./MultiOriginJSONSupport-55da1d06.js";import"./serviceCapabilitiesUtils-2296548c.js";import"./arcgisLayerUrl-824ee458.js";import"./FeatureLayerBase-ed16c570.js";import"./HeightModelInfo-a5f98ab4.js";import"./TimeReference-d5a14980.js";import"./datetime-b6333958.js";import"./editsZScale-9447610d.js";import"./APIKeyMixin-35aced10.js";import"./ArcGISService-78831401.js";import"./CustomParametersMixin-6e258788.js";import"./EditBusLayer-f379d91e.js";import"./OrderedLayer-9994883c.js";import"./PortalLayer-d4941bb0.js";import"./portalItemUtils-9126718d.js";import"./RefreshableLayer-2dcbbf25.js";import"./ScaleRangeLayer-a6967062.js";import"./TemporalLayer-76f9669f.js";import"./FeatureTemplate-136fba4c.js";import"./FeatureType-f3fd3327.js";import"./fieldProperties-cf15bacb.js";import"./FieldsIndex-b8dc9788.js";import"./versionUtils-0602c916.js";import"./styleUtils-30cd950e.js";import"./popupUtils-eff4732c.js";import"./mat2d-795519e1.js";import"./Scheduler-05bc8017.js";import"./GraphicsCollection-6cd24d14.js";import"./ViewingMode-fb6259a5.js";import"./unitBezier-881ac1eb.js";import"./vec2-3a431caf.js";import"./vec2f64-22afc56f.js";import"./mat3-5b850236.js";import"./vec2f32-eaf29605.js";import"./TileStrategy-cb3a7d25.js";import"./TileStore-4f504952.js";import"./TileKey-3acb01a1.js";import"./rbush-f2a85c98.js";import"./quickselect-56c5966e.js";import"./capabilities-55572a33.js";import"./WebTileLayer-cf969b4c.js";import"./imageBitmapUtils-86f741ce.js";import"./index-0970c694.js";import"./schemaUtils-d9e5d320.js";import"./enums-b1d611e3.js";import"./color-349a3ca2.js";import"./enums-4b2a86a0.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-45a97d77.js";import"./MaterialKey-8f458904.js";import"./visualVariablesUtils-904a1f06.js";import"./createSymbolSchema-8b7065b5.js";import"./ExpandedCIM-23a9d4d0.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-54fe414b.js";import"./floatRGBA-90587fc5.js";import"./rendererUtils-90c6d352.js";import"./util-54b675a7.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-4db6471b.js";import"./RefreshableLayerView-d6853579.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(e=>e.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([m("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([m("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const Ii=o;export{Ii as default};