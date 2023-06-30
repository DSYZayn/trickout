import{_ as h}from"./preload-helper-101896b7.js";import{U as d}from"./request-429c0e66.js";import{a as n}from"./Error-9392329b.js";import{e as b}from"./ItemCache-28393d1d.js";import{r as u,c as w}from"./typedArrayUtil-c81d173a.js";import{F as v,a as z}from"./aaBoundingBox-55a55434.js";import{t as _,q as g}from"./symbols-0c3dfce8.js";import"./string-bf9c68ed.js";import"./promiseUtils-3ce2a460.js";import"./MemCache-c220a92a.js";import"./cast-4d1aa82d.js";import"./ensureType-8c80e8c7.js";import"./nextTick-3ee5a785.js";import"./Extent-52b65909.js";import"./mathUtils-505ef34b.js";import"./CIMSymbol-adda48ca.js";import"./enumeration-de0a766e.js";import"./fieldUtils-7c95d0c6.js";import"./geometry-8c15a791.js";import"./Polyline-7f90e3cc.js";import"./typeUtils-f38bdb16.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-a1e441cd.js";import"./persistableUrlUtils-ef87bc82.js";import"./Collection-54857936.js";import"./Evented-d69b5d66.js";import"./SimpleObservable-7e8b69a3.js";import"./collectionUtils-cc5781ab.js";import"./Portal-4a02a9a8.js";import"./Loadable-e19fba09.js";import"./Promise-24c50191.js";import"./locale-30120714.js";import"./PortalGroup-45834c06.js";import"./PortalUser-bb0f9958.js";import"./Clonable-ad03ca71.js";let m=c();function c(){return new b(50)}function cr(){m=c()}function ar(r,e){if(r.type==="icon")return a(r,e);if(r.type==="object")return f(r,e);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function fr(r,e){if(r.type==="icon")return j(r,e);if(r.type==="object")return B(r,e);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function a(r,e){var o,i;if((o=r.resource)!=null&&o.href)return L(r.resource.href).then(t=>[t.width,t.height]);if((i=r.resource)!=null&&i.primitive)return u(e)?[e,e]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function j(r,e){return a(r,e).then(o=>{if(r.size==null)return o;const i=o[0]/o[1];return i>1?[r.size,r.size/i]:[r.size*i,r.size]})}function L(r){return d(r,{responseType:"image"}).then(e=>e.data)}function f(r,e){return S(r,e).then(o=>v(o))}async function B(r,e){const o=await f(r,e);return _(o,r)}async function S(r,e){var i;if(!r.isPrimitive){const t=w((i=r.resource)==null?void 0:i.href),s=m.get(t);if(s!==void 0)return s;const y=await h(()=>import("./objectResourceUtils-779c07e9.js").then(l=>l.o),["assets/objectResourceUtils-779c07e9.js","assets/devEnvironmentUtils-5002a058.js","assets/typedArrayUtil-c81d173a.js","assets/mat3-5b850236.js","assets/mathUtils-505ef34b.js","assets/mat3f64-221ce671.js","assets/mat4-63147b80.js","assets/mat4f64-1413b4a7.js","assets/aaBoundingBox-55a55434.js","assets/Extent-52b65909.js","assets/cast-4d1aa82d.js","assets/string-bf9c68ed.js","assets/Error-9392329b.js","assets/ensureType-8c80e8c7.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-3ce2a460.js","assets/BufferView-9443e496.js","assets/vec2-3a431caf.js","assets/vec33-b4c9c39b.js","assets/DefaultMaterial_COLOR_GAMMA-3efe91af.js","assets/types-e1c0a5bf.js","assets/request-429c0e66.js","assets/preload-helper-101896b7.js","assets/asyncUtils-d59cad3c.js","assets/enums-64ab819c.js","assets/Version-e29b3f14.js","assets/quat-a627ac9e.js","assets/quatf64-3363c48e.js","assets/compilerUtils-db2fe354.js","assets/resourceUtils-71fe9113.js","assets/basicInterfaces-b7051eb1.js","assets/Indices-84eb2539.js","assets/mat3f32-6c416b1c.js","assets/vec2f32-eaf29605.js","assets/byteSizeEstimations-90c5a50d.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-f47c9460.js","assets/Util-f84403e5.js","assets/sphere-f01cef25.js","assets/vec4f64-aa64c7e9.js","assets/vec2f64-22afc56f.js","assets/VertexAttribute-15d1866a.js","assets/Evented-d69b5d66.js","assets/OrderIndependentTransparency-e1b3a745.js","assets/assets-2d98ef96.js","assets/Texture-5c56cee1.js","assets/context-util-2fc70f17.js","assets/VertexArrayObject-2b4e90de.js","assets/VertexElementDescriptor-2925c6af.js","assets/ViewingMode-fb6259a5.js","assets/InterleavedLayout-8a88b926.js","assets/vec3f32-ad1dc57f.js","assets/parser-7deabd3b.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-3109747d.js"]),p=await y.fetch(t,{disableTextures:!0});return m.put(t,p.referenceBoundingBox),p.referenceBoundingBox}let o=null;if(r.resource&&r.resource.primitive&&(o=z(g(r.resource.primitive)),u(e)))for(let t=0;t<o.length;t++)o[t]*=e;return o?Promise.resolve(o):Promise.reject(new n("symbol:invalid-resource","The symbol does not have a valid resource"))}export{cr as clearBoundingBoxCache,a as computeIconLayerResourceSize,ar as computeLayerResourceSize,fr as computeLayerSize,f as computeObjectLayerResourceSize};
