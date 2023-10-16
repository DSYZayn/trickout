import"./geometry-8c15a791.js";import{r as a,e as l}from"./typedArrayUtil-c81d173a.js";import{c}from"./projection-03688518.js";import{m as i,d as f,R as p,b as u,c as S,e as d,f as h,g as y}from"./dataUtils-712d153e.js";import{S as x,T as O,p as N}from"./RasterSymbolizer-dddafecd.js";import{C as J,i as b}from"./utils-522170cc.js";import{M as g,T as w,$ as B}from"./rasterProjectionHelper-2f2082da.js";import{a as m}from"./Extent-52b65909.js";import"./ensureType-8c80e8c7.js";import"./string-bf9c68ed.js";import"./Error-9392329b.js";import"./Polyline-7f90e3cc.js";import"./cast-4d1aa82d.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-3ce2a460.js";import"./typeUtils-f38bdb16.js";import"./preload-helper-41c905a7.js";import"./mathUtils-505ef34b.js";import"./SimpleObservable-7e8b69a3.js";import"./mat4-63147b80.js";import"./assets-86d142ff.js";import"./request-16c6134d.js";import"./zscale-92e5f59b.js";import"./colorUtils-c0f43caf.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./enumeration-de0a766e.js";import"./colorRamps-6cc98f16.js";class et{convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),o=f(e,t.type);return Promise.resolve(a(o)?o.toJSON():null)}async decode(t){const e=await x(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?m.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(a(e)?e.toJSON():null)}async updateSymbolizer(t){var e;this.symbolizer=O.fromJSON(t.symbolizerJSON),t.histograms&&((e=this.symbolizer)==null?void 0:e.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=J(t.rasterFunctionJSON)}async process(t){const e=this.rasterFunction.process({extent:m.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(o=>a(o)?i.fromJSON(o):null),primaryRasterIds:t.primaryRasterIds});return a(e)?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(a(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=N(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=p(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((o,r)=>{e.set(r,o==null?void 0:o.toJSON())}),Promise.resolve(e)}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(n=>n?new i(n):null),o=u(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let r,s=o;return t.coefs&&(s=S(o,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(r=d(t.destDimension,t.gcsGrid),s=l(h(s,t.isUV?"vector-uv":"vector-magdir",r))),{pixelBlock:s==null?void 0:s.toJSON(),localNorthDirections:r}}async createFlowMesh(t,e){const o={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:r,indexData:s}=await y(t.meshType,t.simulationSettings,o,e.signal);return{result:{vertexBuffer:r.buffer,indexBuffer:s.buffer},transferList:[r.buffer,s.buffer]}}async getProjectionOffsetGrid(t){const e=m.fromJSON(t.projectedExtent),o=m.fromJSON(t.srcBufferExtent);let r=null;t.datumTransformationSteps&&(r=new c({steps:t.datumTransformationSteps})),(t.includeGCSGrid||g(e.spatialReference,o.spatialReference,r))&&await w();const s=t.rasterTransform?b(t.rasterTransform):null;return B({...t,projectedExtent:e,srcBufferExtent:o,datumTransformation:r,rasterTransform:s})}}export{et as default};