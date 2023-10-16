import{t as C,r as d,R as O}from"./typedArrayUtil-c81d173a.js";import{S as $}from"./quat-a627ac9e.js";import{w as R,l as k,c as D,I as F,e as U}from"./I3SBinaryReader-2eaf7a99.js";import{K as z}from"./mathUtils-505ef34b.js";import{r as B,n as A}from"./vec3f32-ad1dc57f.js";import{x as J}from"./projection-03688518.js";import{f as S}from"./Extent-52b65909.js";import{a as N,b as V,d as T}from"./PointCloudUniqueValueRenderer-3109c07a.js";import"./mat3f64-221ce671.js";import"./quatf64-3363c48e.js";import"./Error-9392329b.js";import"./string-bf9c68ed.js";import"./VertexAttribute-15d1866a.js";import"./preload-helper-41c905a7.js";import"./promiseUtils-3ce2a460.js";import"./cast-4d1aa82d.js";import"./ensureType-8c80e8c7.js";import"./nextTick-3ee5a785.js";import"./SimpleObservable-7e8b69a3.js";import"./mat4-63147b80.js";import"./Polyline-7f90e3cc.js";import"./assets-86d142ff.js";import"./request-16c6134d.js";import"./zscale-92e5f59b.js";import"./enumeration-de0a766e.js";import"./LegendOptions-6e5321d3.js";import"./Color-46910694.js";import"./colorUtils-639f4d25.js";function _(f,t,l,o){const{rendererJSON:a,isRGBRenderer:m}=f;let n=null,i=null;if(t&&m)n=t;else if(t&&(a==null?void 0:a.type)==="pointCloudUniqueValueRenderer"){i=N.fromJSON(a);const e=i.colorUniqueValueInfos;n=new Uint8Array(3*o);const u=v(i.fieldTransformType);for(let r=0;r<o;r++){const c=(u?u(t[r]):t[r])+"";for(let s=0;s<e.length;s++)if(e[s].values.includes(c)){n[3*r]=e[s].color.r,n[3*r+1]=e[s].color.g,n[3*r+2]=e[s].color.b;break}}}else if(t&&(a==null?void 0:a.type)==="pointCloudStretchRenderer"){i=V.fromJSON(a);const e=i.stops;n=new Uint8Array(3*o);const u=v(i.fieldTransformType);for(let r=0;r<o;r++){const c=u?u(t[r]):t[r],s=e.length-1;if(c<e[0].value)n[3*r]=e[0].color.r,n[3*r+1]=e[0].color.g,n[3*r+2]=e[0].color.b;else if(c>=e[s].value)n[3*r]=e[s].color.r,n[3*r+1]=e[s].color.g,n[3*r+2]=e[s].color.b;else for(let p=1;p<e.length;p++)if(c<e[p].value){const b=(c-e[p-1].value)/(e[p].value-e[p-1].value);n[3*r]=e[p].color.r*b+e[p-1].color.r*(1-b),n[3*r+1]=e[p].color.g*b+e[p-1].color.g*(1-b),n[3*r+2]=e[p].color.b*b+e[p-1].color.b*(1-b);break}}}else if(t&&(a==null?void 0:a.type)==="pointCloudClassBreaksRenderer"){i=T.fromJSON(a);const e=i.colorClassBreakInfos;n=new Uint8Array(3*o);const u=v(i.fieldTransformType);for(let r=0;r<o;r++){const c=u?u(t[r]):t[r];for(let s=0;s<e.length;s++)if(c>=e[s].minValue&&c<=e[s].maxValue){n[3*r]=e[s].color.r,n[3*r+1]=e[s].color.g,n[3*r+2]=e[s].color.b;break}}}else{n=new Uint8Array(3*o);for(let e=0;e<n.length;e++)n[e]=255}if(l&&i&&i.colorModulation){const e=i.colorModulation.minValue,u=i.colorModulation.maxValue,r=.3;for(let c=0;c<o;c++){const s=l[c],p=s>=u?1:s<=e?r:r+(1-r)*(s-e)/(u-e);n[3*c]=p*n[3*c],n[3*c+1]=p*n[3*c+1],n[3*c+2]=p*n[3*c+2]}}return n}function q(f,t){if(f.encoding==null||f.encoding===""){const l=R(t,f);if(C(l.vertexAttributes.position))return;const o=k(t,l.vertexAttributes.position),a=l.header.fields,m=[a.offsetX,a.offsetY,a.offsetZ],n=[a.scaleX,a.scaleY,a.scaleZ],i=o.length/3,e=new Float64Array(3*i);for(let u=0;u<i;u++)e[3*u]=o[3*u]*n[0]+m[0],e[3*u+1]=o[3*u+1]*n[1]+m[1],e[3*u+2]=o[3*u+2]*n[2]+m[2];return e}if(f.encoding==="lepcc-xyz")return D(t).result}function g(f,t,l){return d(f)&&f.attributeInfo.useElevation?t?E(t,l):null:d(f)&&f.attributeInfo.storageInfo?F(f.attributeInfo.storageInfo,f.buffer,l):null}function E(f,t){const l=new Float64Array(t);for(let o=0;o<t;o++)l[o]=f[3*o+2];return l}function P(f,t,l,o,a){const m=f.length/3;let n=0;for(let i=0;i<m;i++){let e=!0;for(let u=0;u<o.length&&e;u++){const{filterJSON:r}=o[u],c=a[u].values[i];switch(r.type){case"pointCloudValueFilter":{const s=r.mode==="exclude";r.values.includes(c)===s&&(e=!1);break}case"pointCloudBitfieldFilter":{const s=w(r.requiredSetBits),p=w(r.requiredClearBits);(c&s)===s&&!(c&p)||(e=!1);break}case"pointCloudReturnFilter":{const s=15&c,p=c>>>4&15,b=p>1,x=s===1,y=s===p;let I=!1;for(const h of r.includedReturns)if(h==="last"&&y||h==="firstOfMany"&&x&&b||h==="lastOfMany"&&y&&b||h==="single"&&!b){I=!0;break}I||(e=!1);break}}}e&&(l[n]=i,f[3*n]=f[3*i],f[3*n+1]=f[3*i+1],f[3*n+2]=f[3*i+2],t[3*n]=t[3*i],t[3*n+1]=t[3*i+1],t[3*n+2]=t[3*i+2],n++)}return n}function v(f){return f==null||f==="none"?null:f==="low-four-bit"?t=>15&t:f==="high-four-bit"?t=>(240&t)>>4:f==="absolute-value"?t=>Math.abs(t):f==="modulo-ten"?t=>t%10:null}function w(f){let t=0;for(const l of f||[])t|=1<<l;return t}class X{transform(t){const l=this._transform(t),o=[l.points.buffer,l.rgb.buffer];d(l.pointIdFilterMap)&&o.push(l.pointIdFilterMap.buffer);for(const a of l.attributes)"buffer"in a.values&&O(a.values.buffer)&&a.values.buffer!==l.rgb.buffer&&o.push(a.values.buffer);return Promise.resolve({result:l,transferList:o})}_transform(t){const l=q(t.schema,t.geometryBuffer);let o=l.length/3,a=null;const m=[],n=g(t.primaryAttributeData,l,o);d(t.primaryAttributeData)&&n&&m.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const i=g(t.modulationAttributeData,l,o);d(t.modulationAttributeData)&&i&&m.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:i});let e=_(t.rendererInfo,n,i,o);if(t.filterInfo&&t.filterInfo.length>0&&d(t.filterAttributesData)){const r=t.filterAttributesData.filter(d).map(c=>{const s=g(c,l,o),p={attributeInfo:c.attributeInfo,values:s};return m.push(p),p});a=new Uint32Array(o),o=P(l,e,a,t.filterInfo,r)}for(const r of t.userAttributesData){const c=g(r,l,o);m.push({attributeInfo:r.attributeInfo,values:c})}3*o<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(l,o,t.elevationOffset);const u=this._transformCoordinates(l,o,t.obb,S.fromJSON(t.inSR),S.fromJSON(t.outSR));return{obb:t.obb,points:u,rgb:e,attributes:m,pointIdFilterMap:a}}_transformCoordinates(t,l,o,a,m){if(!J(t,a,0,t,m,0,l))throw new Error("Can't reproject");const n=B(o.center[0],o.center[1],o.center[2]),i=A(),e=A();$(M,o.quaternion);const u=new Float32Array(3*l);for(let r=0;r<l;r++)i[0]=t[3*r]-n[0],i[1]=t[3*r+1]-n[1],i[2]=t[3*r+2]-n[2],z(e,i,M),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(e[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(e[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(e[2])),u[3*r]=i[0],u[3*r+1]=i[1],u[3*r+2]=i[2];return u}_applyElevationOffsetInPlace(t,l,o){if(o!==0)for(let a=0;a<l;a++)t[3*a+2]+=o}}const M=U();function yt(){return new X}export{yt as default};
