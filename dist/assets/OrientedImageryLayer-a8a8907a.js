import{e as t,y as r,a as i}from"./cast-4d1aa82d.js";import{a as m}from"./Error-9392329b.js";import"./ensureType-8c80e8c7.js";import"./typedArrayUtil-c81d173a.js";import e from"./FeatureLayer-fc4ae836.js";import"./string-bf9c68ed.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./preload-helper-101896b7.js";import"./PopupTemplate-6b3c08c8.js";import"./Clonable-ad03ca71.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./Extent-52b65909.js";import"./fieldUtils-7c95d0c6.js";import"./geometry-8c15a791.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./enumeration-de0a766e.js";import"./number-b98554af.js";import"./locale-30120714.js";import"./Identifiable-a49d7533.js";import"./UniqueValueRenderer-16354145.js";import"./symbols-0c3dfce8.js";import"./CIMSymbol-adda48ca.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./mathUtils-505ef34b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./aaBoundingBox-55a55434.js";import"./request-429c0e66.js";import"./persistableUrlUtils-ef87bc82.js";import"./collectionUtils-cc5781ab.js";import"./Portal-4a02a9a8.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./PortalGroup-45834c06.js";import"./PortalUser-bb0f9958.js";import"./LegendOptions-6e5321d3.js";import"./reactiveUtils-989a8d7f.js";import"./diffUtils-ba6273ab.js";import"./colorRamps-6cc98f16.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-4a228e99.js";import"./jsonUtils-e2434b33.js";import"./compilerUtils-db2fe354.js";import"./lengthUtils-320ae102.js";import"./jsonUtils-beb5fd18.js";import"./layerUtils-c60873a1.js";import"./styleUtils-0d4515e5.js";import"./jsonUtils-4e342d8c.js";import"./DictionaryLoader-3797a46e.js";import"./LRUCache-7d328c48.js";import"./MemCache-c220a92a.js";import"./deprecate-0efb6d09.js";import"./heatmapUtils-74b8fd48.js";import"./vec4f64-aa64c7e9.js";import"./MultiOriginJSONSupport-55da1d06.js";import"./serviceCapabilitiesUtils-bdb661e2.js";import"./arcgisLayerUrl-0567e8c8.js";import"./FeatureLayerBase-c8196cb0.js";import"./Field-899dc481.js";import"./fieldType-68c65bf7.js";import"./HeightModelInfo-a5f98ab4.js";import"./OperationalLayer-3f888de5.js";import"./TimeExtent-0fb637c6.js";import"./ElevationInfo-280697dd.js";import"./TimeReference-d5a14980.js";import"./datetime-b6333958.js";import"./AttachmentQuery-dffd8fdc.js";import"./Query-8c2b9d22.js";import"./RelationshipQuery-80632d4c.js";import"./Layer-3cc844b0.js";import"./HandleOwner-1ffa4597.js";import"./workers-6ae37cc2.js";import"./Connection-ee309efe.js";import"./Queue-4939205d.js";import"./assets-2d98ef96.js";import"./intl-806fa328.js";import"./messages-57170cca.js";import"./editsZScale-9447610d.js";import"./queryZScale-22ca074d.js";import"./zscale-92e5f59b.js";import"./FeatureSet-b6c99b8e.js";import"./APIKeyMixin-35aced10.js";import"./ArcGISService-f48f70cb.js";import"./BlendLayer-1f4ade52.js";import"./parser-7deabd3b.js";import"./mat4-63147b80.js";import"./CustomParametersMixin-6e258788.js";import"./EditBusLayer-f379d91e.js";import"./FeatureReductionLayer-398b84cc.js";import"./labelingInfo-0e7e440a.js";import"./labelUtils-4db1d7ec.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-9994883c.js";import"./PortalLayer-d69242c0.js";import"./asyncUtils-d59cad3c.js";import"./PortalItem-8c677fd9.js";import"./portalItemUtils-6225971d.js";import"./projection-676f1424.js";import"./RefreshableLayer-2dcbbf25.js";import"./ScaleRangeLayer-a6967062.js";import"./TemporalLayer-e1338658.js";import"./FeatureTemplate-136fba4c.js";import"./FeatureType-f3fd3327.js";import"./fieldProperties-d1a48384.js";import"./FieldsIndex-29a8df54.js";import"./versionUtils-c26fc550.js";import"./styleUtils-30cd950e.js";import"./TopFeaturesQuery-e56e9bfe.js";import"./popupUtils-89cdd81e.js";let o=class extends e{constructor(p){super(p),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new m("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([r()],o.prototype,"cameraProperties",void 0),t([r()],o.prototype,"coverage",void 0),t([r()],o.prototype,"coveragePercent",void 0),t([r()],o.prototype,"defaultSearchLocation",void 0),t([r()],o.prototype,"depthImage",void 0),t([r()],o.prototype,"digitalElevationModel",void 0),t([r()],o.prototype,"geometryType",void 0),t([r()],o.prototype,"imageProperties",void 0),t([r()],o.prototype,"maximumDistance",void 0),t([r({json:{read:!1},value:"oriented-imagery",readOnly:!0})],o.prototype,"type",void 0),t([r({type:["OrientedImageryLayer"]})],o.prototype,"operationalLayerType",void 0),o=t([i("esri.layers.OrientedImageryLayer")],o);const lt=o;export{lt as default};
