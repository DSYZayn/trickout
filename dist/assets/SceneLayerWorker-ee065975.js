import{r as z}from"./typedArrayUtil-c81d173a.js";import{_ as G}from"./preload-helper-41c905a7.js";import{a as q}from"./assets-86d142ff.js";import"./sphere-f01cef25.js";import"./Error-9392329b.js";import"./string-bf9c68ed.js";import"./request-16c6134d.js";import"./promiseUtils-3ce2a460.js";import"./mathUtils-505ef34b.js";import"./mat4-63147b80.js";import"./vec4f64-aa64c7e9.js";import"./nextTick-3ee5a785.js";import"./byteSizeEstimations-90c5a50d.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quatf64-3363c48e.js";import"./vec2f64-22afc56f.js";var _,O;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(_||(_={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(O||(O={}));function J(){return P||(P=new Promise(e=>G(()=>import("./i3s-608d071b.js"),[],import.meta.url).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:K,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),P}function K(e){return q(`esri/libs/i3s/${e}`)}let P;var D,h,N,x,B;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(D||(D={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(h||(h={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(N||(N={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(x||(x={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(B||(B={}));async function be(e){await E();const t=[e.geometryBuffer];return{result:$(e,t),transferList:t}}async function he(e){var g;await E();const t=[e.geometryBuffer],{geometryBuffer:r}=e,f=r.byteLength,i=o._malloc(f),u=new Uint8Array(o.HEAPU8.buffer,i,f);u.set(new Uint8Array(r));const s=o.dracoDecompressPointCloudData(i,u.byteLength);if(o._free(i),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const p=((g=s.featureIds)==null?void 0:g.length)>0?s.featureIds.slice():null,y=s.positions.slice();return p&&t.push(p.buffer),t.push(y.buffer),{result:{positions:y,featureIds:p},transferList:t}}async function pe(e){await E(),W(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Ee(e){await E(),Q(e)}async function ge(e){await E(),o.setLegacySchema(e.context,e.jsonSchema)}function we(e){k(e)}let w,o;function Q(e){const t=e.modifications,r=o._malloc(8*t.length),f=new Float64Array(o.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];o.setModifications(e.context,r,t.length,e.isGeodetic),o._free(r)}function $(e,t){if(!o)return null;const{context:r,localOrigin:f,globalTrafo:i,mbs:u,obb:s,elevationOffset:p,geometryBuffer:y,geometryDescriptor:g,indexToVertexProjector:H,vertexToRenderProjector:Y}=e,L=o._malloc(y.byteLength),T=33,A=o._malloc(T*Float64Array.BYTES_PER_ELEMENT),F=new Uint8Array(o.HEAPU8.buffer,L,y.byteLength);F.set(new Uint8Array(y));const a=new Float64Array(o.HEAPU8.buffer,A,T);b(a,f);let c=a.byteOffset+3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c);b(l,i),c+=16*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),b(l,u),c+=4*a.BYTES_PER_ELEMENT,z(s)&&(l=new Float64Array(a.buffer,c),b(l,s.center),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),b(l,s.halfSize),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),b(l,s.quaternion));const R=g,V={isDraco:!1,isLegacy:!1,color:e.layouts.some(d=>d.some(m=>m.name==="color")),normal:e.needNormals&&e.layouts.some(d=>d.some(m=>m.name==="normalCompressed")),uv0:e.layouts.some(d=>d.some(m=>m.name==="uv0")),uvRegion:e.layouts.some(d=>d.some(m=>m.name==="uvRegion")),featureIndex:R.featureIndex},n=o.process(r,!!e.obb,L,F.byteLength,R,V,A,p,H,Y,e.normalReferenceFrame);if(o._free(A),o._free(L),n.error.length>0)throw new Error(`i3s.wasm: ${n.error}`);if(n.discarded)return null;const I=n.componentOffsets.length>0?n.componentOffsets.slice():null,U=n.featureIds.length>0?n.featureIds.slice():null,M=n.interleavedVertedData.slice().buffer,S=n.indicesType===_.Int16?new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2).slice():new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4).slice(),C=n.positions.slice(),v=n.positionIndicesType===_.Int16?new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2).slice():new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4).slice(),j={layout:e.layouts[0],interleavedVertexData:M,indices:S,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:C,indices:v}};return U&&t.push(U.buffer),I&&t.push(I.buffer),t.push(M),t.push(S.buffer),t.push(C.buffer),t.push(v.buffer),{componentOffsets:I,featureIds:U,transformedGeometry:j,obb:n.obb}}function _e(e){return e===0?h.Unmodified:e===1?h.PotentiallyModified:e===2?h.Culled:h.Unknown}function W(e){const{context:t,buffer:r}=e,f=o._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(o.HEAPU8.buffer,f,i),s=new Float64Array(r);u.set(s),o.filterOBBs(t,f,i),s.set(u),o._free(f)}function k(e){o&&o.destroy(e)}function b(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function E(){return o?Promise.resolve():(w||(w=J().then(e=>{o=e,w=null})),w)}const Le={transform:$,destroy:k};export{we as destroyContext,he as dracoDecompressPointCloudData,pe as filterObbsForModifications,W as filterObbsForModificationsSync,E as initialize,_e as interpretObbModificationResults,be as process,ge as setLegacySchema,Ee as setModifications,Q as setModificationsSync,Le as test};