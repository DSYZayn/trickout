import{e as t,y as r,a as i}from"./cast-4d1aa82d.js";import{a as m}from"./Error-9392329b.js";import"./ensureType-8c80e8c7.js";import"./typedArrayUtil-c81d173a.js";import e from"./FeatureLayer-3b171605.js";import"./string-bf9c68ed.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./preload-helper-41c905a7.js";import"./PopupTemplate-7c042eda.js";import"./Clonable-ad03ca71.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./Extent-52b65909.js";import"./fieldUtils-c41301b0.js";import"./geometry-8c15a791.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./enumeration-de0a766e.js";import"./number-b98554af.js";import"./locale-30120714.js";import"./Identifiable-a49d7533.js";import"./UniqueValueRenderer-adb2594e.js";import"./symbols-426355d5.js";import"./CIMSymbol-33f517af.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./aaBoundingBox-55a55434.js";import"./request-16c6134d.js";import"./persistableUrlUtils-abff3ce1.js";import"./collectionUtils-cc5781ab.js";import"./Portal-fe1a007c.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./PortalGroup-45834c06.js";import"./PortalUser-8de15b25.js";import"./LegendOptions-6e5321d3.js";import"./reactiveUtils-989a8d7f.js";import"./diffUtils-ba6273ab.js";import"./colorRamps-6cc98f16.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-b6696507.js";import"./jsonUtils-e2434b33.js";import"./compilerUtils-db2fe354.js";import"./lengthUtils-320ae102.js";import"./jsonUtils-dfa282b7.js";import"./layerUtils-394e7a48.js";import"./styleUtils-6ef1c49e.js";import"./jsonUtils-714f7856.js";import"./DictionaryLoader-7f74ef6b.js";import"./LRUCache-7d328c48.js";import"./MemCache-c220a92a.js";import"./deprecate-0efb6d09.js";import"./heatmapUtils-74b8fd48.js";import"./vec4f64-aa64c7e9.js";import"./MultiOriginJSONSupport-55da1d06.js";import"./serviceCapabilitiesUtils-2296548c.js";import"./arcgisLayerUrl-824ee458.js";import"./FeatureLayerBase-ed16c570.js";import"./Field-899dc481.js";import"./fieldType-68c65bf7.js";import"./HeightModelInfo-a5f98ab4.js";import"./OperationalLayer-70e0771f.js";import"./TimeExtent-0fb637c6.js";import"./ElevationInfo-5422702b.js";import"./TimeReference-d5a14980.js";import"./datetime-b6333958.js";import"./AttachmentQuery-dffd8fdc.js";import"./Query-8c2b9d22.js";import"./RelationshipQuery-80632d4c.js";import"./Layer-5bf3596f.js";import"./HandleOwner-1ffa4597.js";import"./workers-9e1006b9.js";import"./Connection-da262054.js";import"./Queue-4939205d.js";import"./assets-86d142ff.js";import"./intl-45f8f1a9.js";import"./messages-57170cca.js";import"./editsZScale-9447610d.js";import"./queryZScale-22ca074d.js";import"./zscale-92e5f59b.js";import"./FeatureSet-a47eef0a.js";import"./APIKeyMixin-35aced10.js";import"./ArcGISService-78831401.js";import"./BlendLayer-1f4ade52.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./CustomParametersMixin-6e258788.js";import"./EditBusLayer-f379d91e.js";import"./FeatureReductionLayer-a890a60c.js";import"./labelingInfo-8ec658bf.js";import"./labelUtils-4db1d7ec.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-9994883c.js";import"./PortalLayer-d4941bb0.js";import"./asyncUtils-d59cad3c.js";import"./PortalItem-d79345ac.js";import"./portalItemUtils-9126718d.js";import"./projection-03688518.js";import"./RefreshableLayer-2dcbbf25.js";import"./ScaleRangeLayer-a6967062.js";import"./TemporalLayer-76f9669f.js";import"./FeatureTemplate-136fba4c.js";import"./FeatureType-f3fd3327.js";import"./fieldProperties-cf15bacb.js";import"./FieldsIndex-b8dc9788.js";import"./versionUtils-0602c916.js";import"./styleUtils-30cd950e.js";import"./TopFeaturesQuery-e56e9bfe.js";import"./popupUtils-eff4732c.js";let o=class extends e{constructor(p){super(p),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new m("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([r()],o.prototype,"cameraProperties",void 0),t([r()],o.prototype,"coverage",void 0),t([r()],o.prototype,"coveragePercent",void 0),t([r()],o.prototype,"defaultSearchLocation",void 0),t([r()],o.prototype,"depthImage",void 0),t([r()],o.prototype,"digitalElevationModel",void 0),t([r()],o.prototype,"geometryType",void 0),t([r()],o.prototype,"imageProperties",void 0),t([r()],o.prototype,"maximumDistance",void 0),t([r({json:{read:!1},value:"oriented-imagery",readOnly:!0})],o.prototype,"type",void 0),t([r({type:["OrientedImageryLayer"]})],o.prototype,"operationalLayerType",void 0),o=t([i("esri.layers.OrientedImageryLayer")],o);const lt=o;export{lt as default};