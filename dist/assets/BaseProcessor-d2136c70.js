import{e as t,y as o,a as s}from"./cast-4d1aa82d.js";import{d as p}from"./HandleOwner-1ffa4597.js";import"./ensureType-8c80e8c7.js";import"./typedArrayUtil-c81d173a.js";let e=class extends p{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const r=this.get("tileStore.tileScheme.spatialReference");return r&&r.toJSON()||null}};t([o({readOnly:!0})],e.prototype,"supportsTileUpdates",null),t([o({constructOnly:!0})],e.prototype,"remoteClient",void 0),t([o({constructOnly:!0})],e.prototype,"service",void 0),t([o()],e.prototype,"spatialReference",null),t([o({constructOnly:!0})],e.prototype,"tileInfo",void 0),t([o({constructOnly:!0})],e.prototype,"tileStore",void 0),e=t([s("esri.views.2d.layers.features.processors.BaseProcessor")],e);const a=e;export{a as p};
