import{e as i,a as x,y as l,u as ge,v as be,s as Ee}from"./cast-4d1aa82d.js";import{j as ee}from"./Collection-54857936.js";import{s as B,a as q}from"./Error-9392329b.js";import{t as c,r as j,e as F}from"./typedArrayUtil-c81d173a.js";import{O as Le}from"./MultiOriginJSONSupport-55da1d06.js";import{w as d,f as Pe,o as Y,r as se,a as ie,E as je,F as Se}from"./Extent-52b65909.js";import{b as Oe}from"./Layer-3cc844b0.js";import{n as Ce}from"./BlendLayer-1f4ade52.js";import{c as Te}from"./OperationalLayer-3f888de5.js";import{t as Ve}from"./ScaleRangeLayer-a6967062.js";import{U as te,t as ve,Z as xe,Y as Ue,l as He,V as Ae}from"./request-429c0e66.js";import{n as We}from"./uuid-73213768.js";import"./ensureType-8c80e8c7.js";import{i as Ne}from"./Identifiable-a49d7533.js";import{m as we}from"./Loadable-e19fba09.js";import{h as S,j as Ge,u as Be}from"./perspectiveUtils-a75c1ea9.js";import{c as z}from"./screenUtils-7afeb41c.js";import{u as Fe}from"./mat3-5b850236.js";import{t as ze,e as oe}from"./mat3f64-221ce671.js";import{r as N,L as G,A as pe}from"./vec2-3a431caf.js";import{n as M,r as D}from"./vec2f64-22afc56f.js";import{v as ae}from"./Polyline-7f90e3cc.js";import{u as ne,_ as Je,r as ke}from"./projection-676f1424.js";import{l as qe}from"./Clonable-ad03ca71.js";import"./string-bf9c68ed.js";import{b as De,r as Ke}from"./mathUtils-505ef34b.js";import{t as Ye}from"./resourceExtension-f73a9b73.js";import{c as Qe,m as me,U as Xe,R as Ze}from"./persistableUrlUtils-ef87bc82.js";import"./geometry-8c15a791.js";import{n as et}from"./collectionUtils-cc5781ab.js";import{n as tt}from"./Evented-d69b5d66.js";import{a as ot}from"./HandleOwner-1ffa4597.js";import{m as nt}from"./Promise-24c50191.js";import{f as rt}from"./promiseUtils-3ce2a460.js";import{l as st}from"./reactiveUtils-989a8d7f.js";import{c as it}from"./aaBoundingRect-062d7c89.js";import{o as at}from"./BoundsStore-a184d1ac.js";import"./nextTick-3ee5a785.js";import"./SimpleObservable-7e8b69a3.js";import"./preload-helper-101896b7.js";import"./parser-7deabd3b.js";import"./colorUtils-639f4d25.js";import"./mat4-63147b80.js";import"./TimeExtent-0fb637c6.js";import"./ElevationInfo-280697dd.js";import"./fieldUtils-7c95d0c6.js";import"./lengthUtils-320ae102.js";import"./opacityUtils-a1e441cd.js";import"./normalizeUtilsSync-87c5ef07.js";import"./jsonUtils-e2434b33.js";import"./normalizeUtilsCommon-42c6cdb7.js";import"./assets-2d98ef96.js";import"./zscale-92e5f59b.js";import"./typeUtils-f38bdb16.js";import"./PooledRBush-f7459720.js";import"./quickselect-56c5966e.js";let re=class extends qe{projectOrWarn(t,o){if(c(t))return t;const{geometry:n,pending:r}=ne(t,o);return r?null:r||n?n:(B.getLogger(this.declaredClass).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:t,sourceSpatialReference:t.spatialReference,targetSpatialReference:o}),null)}};re=i([x("esri.layers.support.GeoreferenceBase")],re);const Q=re,X=oe(),m=M();let J=class extends be{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([l()],J.prototype,"sourcePoint",void 0),i([l({type:d})],J.prototype,"mapPoint",void 0),J=i([x("esri.layers.support.ControlPoint")],J);let y=class extends ge(Q){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,o){const n=Pe.fromJSON(o.spatialReference),r=ze(...o.coefficients,1);return t.map(s=>(N(m,s.x,s.y),S(m,m,r),{sourcePoint:s,mapPoint:new d({x:m[0],y:m[1],spatialReference:n})}))}writeControlPoints(t,o,n,r){if(c(this.transform)){const s=new q("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:r==null?void 0:r.layer,georeference:this});r!=null&&r.messages?r.messages.push(s):B.getLogger(this.declaredClass).error(s.name,s.message)}else j(t)&&h(t[0])&&(o.controlPoints=t.map(s=>{const a=F(s.sourcePoint);return{x:a.x,y:a.y}}),o.spatialReference=t[0].mapPoint.spatialReference.toJSON(),o.coefficients=this.transform.slice(0,8))}get coords(){if(c(this.controlPoints))return null;const t=this._updateTransform(X);if(c(t)||!h(this.controlPoints[0]))return null;const o=this.controlPoints[0].mapPoint.spatialReference;return ut(t,this.width,this.height,o)}set coords(t){if(c(this.controlPoints)||!h(this.controlPoints[0]))return;const o=this.controlPoints[0].mapPoint.spatialReference;if(t=this.projectOrWarn(t,o),c(t))return;const{width:n,height:r}=this,{rings:[[s,a,p,u]]}=t,g={sourcePoint:z(0,r),mapPoint:new d({x:s[0],y:s[1],spatialReference:o})},P={sourcePoint:z(0,0),mapPoint:new d({x:a[0],y:a[1],spatialReference:o})},v={sourcePoint:z(n,0),mapPoint:new d({x:p[0],y:p[1],spatialReference:o})},b={sourcePoint:z(n,r),mapPoint:new d({x:u[0],y:u[1],spatialReference:o})};h(g)&&h(P)&&h(v)&&h(b)&&(ue(X,g,P,v,b),this.controlPoints=F(this.controlPoints).map(({sourcePoint:T})=>(N(m,T.x,T.y),S(m,m,X),{sourcePoint:T,mapPoint:new d({x:m[0],y:m[1],spatialReference:o})})))}get inverseTransform(){return c(this.transform)?null:Fe(oe(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(c(t)||c(this.transform)||c(this.controlPoints)||!h(this.controlPoints[0]))return null;N(m,t.x,t.y);const o=this.controlPoints[0].mapPoint.spatialReference;return S(m,m,this.transform),new d({x:m[0],y:m[1],spatialReference:o})}toSource(t){if(c(t)||c(this.inverseTransform)||c(this.controlPoints)||!h(this.controlPoints[0]))return null;const o=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),t=ne(t,o).geometry,c(t)?null:(N(m,t.x,t.y),S(m,m,this.inverseTransform),z(m[0],m[1]))}_updateTransform(t){const{controlPoints:o,width:n,height:r}=this;if(c(o)||!(n>0)||!(r>0))return null;const[s,a,p,u]=o;if(!h(s))return null;const g=s.mapPoint.spatialReference,P=this._projectControlPoint(a,g),v=this._projectControlPoint(p,g),b=this._projectControlPoint(u,g);if(!P.valid||!v.valid||!b.valid||!h(P.controlPoint))return null;c(t)&&(t=oe());let T=null;return T=h(v.controlPoint)&&h(b.controlPoint)?ue(t,s,P.controlPoint,v.controlPoint,b.controlPoint):h(v.controlPoint)?ct(t,s,P.controlPoint,v.controlPoint):lt(t,s,P.controlPoint),T.every(Me=>Me===0)?null:T}_projectControlPoint(t,o){if(!h(t))return{valid:!0,controlPoint:t};const{sourcePoint:n,mapPoint:r}=t,{geometry:s,pending:a}=ne(r,o);return a?{valid:!1,controlPoint:null}:a||s?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:s}}:(B.getLogger(this.declaredClass).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:r.spatialReference,targetSpatialReference:o}),{valid:!1,controlPoint:null})}};function h(e){return j(e)&&j(e.sourcePoint)&&j(e.mapPoint)}i([l({type:[J],json:{write:{allowNull:!1,isRequired:!0}}})],y.prototype,"controlPoints",void 0),i([Y("controlPoints")],y.prototype,"readControlPoints",null),i([se("controlPoints")],y.prototype,"writeControlPoints",null),i([l()],y.prototype,"coords",null),i([l({json:{write:!0}})],y.prototype,"height",void 0),i([l({readOnly:!0})],y.prototype,"inverseTransform",null),i([l({readOnly:!0})],y.prototype,"transform",null),i([l({json:{write:!0}})],y.prototype,"width",void 0),y=i([x("esri.layers.support.ControlPointsGeoreference")],y);const w=M(),R=M(),V=M(),O=M(),_=M(),$=M(),U=M(),C=M(),K=Math.PI/2;function I(e,t,o){N(e,o.sourcePoint.x,o.sourcePoint.y),N(t,o.mapPoint.x,o.mapPoint.y)}function lt(e,t,o){return I(w,_,t),I(R,$,o),G(V,R,w,K),G(O,w,R,K),G(U,$,_,-K),G(C,_,$,-K),le(e,w,R,V,O,_,$,U,C)}function ct(e,t,o,n){return I(w,_,t),I(R,$,o),I(V,U,n),pe(O,w,R,.5),G(O,V,O,Math.PI),pe(C,_,$,.5),G(C,U,C,Math.PI),le(e,w,R,V,O,_,$,U,C)}function ue(e,t,o,n,r){return I(w,_,t),I(R,$,o),I(V,U,n),I(O,C,r),le(e,w,R,V,O,_,$,U,C)}const pt=new Array(8).fill(0),mt=new Array(8).fill(0);function de(e,t,o,n,r){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=n[0],e[5]=n[1],e[6]=r[0],e[7]=r[1],e}function le(e,t,o,n,r,s,a,p,u){return Ge(e,de(pt,t,o,n,r),de(mt,s,a,p,u))}function ut(e,t,o,n){const r=D(0,o),s=D(0,0),a=D(t,0),p=D(t,o);return S(r,r,e),S(s,s,e),S(a,a,e),S(p,p,e),new ae({rings:[[r,s,a,p,r]],spatialReference:n})}const Re=y;let E=class extends Q{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:o,bottomLeft:n,bottomRight:r}=this;if(c(t)||c(o)||c(n)||c(r))return null;const s=t.spatialReference;return o=this.projectOrWarn(o,s),n=this.projectOrWarn(n,s),r=this.projectOrWarn(r,s),c(o)||c(n)||c(r)?null:new ae({rings:[[[n.x,n.y],[t.x,t.y],[o.x,o.y],[r.x,r.y],[n.x,n.y]]],spatialReference:s})}set coords(t){const{topLeft:o}=this;if(c(o))return;const n=o.spatialReference;if(t=this.projectOrWarn(t,n),c(t))return;const{rings:[[r,s,a,p]]}=t;this.bottomLeft=new d({x:r[0],y:r[1],spatialReference:n}),this.topLeft=new d({x:s[0],y:s[1],spatialReference:n}),this.topRight=new d({x:a[0],y:a[1],spatialReference:n}),this.bottomRight=new d({x:p[0],y:p[1],spatialReference:n})}};i([l()],E.prototype,"coords",null),i([l({type:d})],E.prototype,"bottomLeft",void 0),i([l({type:d})],E.prototype,"bottomRight",void 0),i([l({type:d})],E.prototype,"topLeft",void 0),i([l({type:d})],E.prototype,"topRight",void 0),E=i([x("esri.layers.support.CornersGeoreference")],E);const dt=E;let H=class extends Q{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(c(this.extent))return null;const{xmin:e,ymin:t,xmax:o,ymax:n,spatialReference:r}=this.extent;let s;if(this.rotation){const{x:a,y:p}=this.extent.center,u=he(a,p,this.rotation);s=[u(e,t),u(e,n),u(o,n),u(o,t)],s.push(s[0])}else s=[[e,t],[e,n],[o,n],[o,t],[e,t]];return new ae({rings:[s],spatialReference:r})}set coords(e){if(c(e)||c(this.extent))return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),c(e)||c(e.extent))return;const{rings:[[o,n,r]],extent:{center:{x:s,y:a}}}=e,p=De(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),u=he(s,a,-p),[g,P]=u(o[0],o[1]),[v,b]=u(r[0],r[1]);this.extent=new ie({xmin:g,ymin:P,xmax:v,ymax:b,spatialReference:t}),this.rotation=p}};function he(e,t,o){const n=Ke(o),r=Math.cos(n),s=Math.sin(n);return(a,p)=>[r*(a-e)+s*(p-t)+e,r*(p-t)-s*(a-e)+t]}i([l()],H.prototype,"coords",null),i([l({type:ie})],H.prototype,"extent",void 0),i([l({type:Number})],H.prototype,"rotation",void 0),H=i([x("esri.layers.support.ExtentAndRotationGeoreference")],H);const ht=H,ft={key:"type",base:Q,typeMap:{"control-points":Re,corners:dt,"extent-and-rotation":ht}};let A=class extends Ne(ge(we)){constructor(){super(...arguments),this.georeference=null,this.opacity=1}readGeoreference(e){return Re.fromJSON(e)}};i([l({types:ft,json:{write:!0}})],A.prototype,"georeference",void 0),i([Y("georeference")],A.prototype,"readGeoreference",null),i([l()],A.prototype,"opacity",void 0),A=i([x("esri.layers.support.MediaElementBase")],A);const ce=A;let L=class extends ce{constructor(e){super(e),this.content=null,this.image=null,this.type="image",this.image=null}load(){const e=this.image;if(typeof e=="string"){const t=te(e,{responseType:"image"}).then(({data:o})=>{this._set("content",o)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){const t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new q("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}readImage(e,t,o){return Qe(t.url,o)}writeImage(e,t,o,n){if(c(e))return;const r=n==null?void 0:n.portalItem,s=n==null?void 0:n.resources;if(!r||!s)return void(typeof e=="string"&&(t[o]=me(e,n)));const a=typeof e!="string"||ve(e)||xe(e)?null:e;if(a){if(Xe(a)==null)return void(t[o]=a);const p=me(a,{...n,verifyItemRelativeUrls:n&&n.verifyItemRelativeUrls?{writtenUrls:n.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Ze.NO);if(r&&p&&!Ue(p))return s.toKeep.push({resource:r.resourceFromPath(p),compress:!1}),void(t[o]=p)}t[o]="<pending>",s.pendingOperations.push($e(e).then(p=>{const u=gt(p,r);t[o]=u.itemRelativeUrl,s.toAdd.push({resource:u,content:p,compress:!1,finish:g=>{this.image=g.url}})}))}};i([l({readOnly:!0})],L.prototype,"content",void 0),i([l({json:{name:"url",type:String}})],L.prototype,"image",void 0),i([Y("image",["url"])],L.prototype,"readImage",null),i([se("image")],L.prototype,"writeImage",null),i([l({readOnly:!0,json:{name:"mediaType"}})],L.prototype,"type",void 0),L=i([x("esri.layers.support.ImageElement")],L);const _e=L;async function $e(e){if(typeof e=="string"){if(xe(e)){const{data:t}=await te(e,{responseType:"blob"});return t}return ve(e)?He(e):$e((await te(e,{responseType:"image"})).data)}return new Promise(t=>yt(e).toBlob(t))}function yt(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),r=n.getContext("2d");return n.width=t,n.height=o,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),n}function gt(e,t){const o=We(),n=`${Ae("media",o)}.${Ye(e)}`;return t.resourceFromPath(n)}let k=class extends ce{constructor(e){super(e),this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new q("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):B.getLogger(this.declaredClass).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,o)=>{e.oncanplay=()=>{e.oncanplay=null,e.play().then(t,o)},e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src=e.src)})}};i([l({readOnly:!0})],k.prototype,"content",void 0),i([l()],k.prototype,"video",null),k=i([x("esri.layers.support.VideoElement")],k);const Ie=k,Pt={key:"type",defaultKeyValue:"image",base:ce,typeMap:{image:_e,video:Ie}},fe=ee.ofType(Pt);let W=class extends we.LoadableMixin(nt(ot(tt.EventedAccessor))){constructor(e){super(e),this._index=new at,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const r=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(r),this.handles.remove(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:o}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const r=new Be({spatialReference:o,element:n});this._elementViewsMap.set(n,r);const s=st(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.handles.add(s,r)}this._elementsIndexes.clear(),this.elements.forEach((n,r)=>this._elementsIndexes.set(n,r)),this.emit("refresh")},this.elements=new fe}async load(e){if(rt(e),!this.spatialReference){const t=this.elements.find(o=>j(o.georeference)&&j(o.georeference.coords));this._set("spatialReference",t?F(F(t.georeference).coords).spatialReference:Pe.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.handles.add(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",et(e,this._get("elements"),fe))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return c(e)?null:new ie({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):B.getLogger(this.declaredClass).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await Je(e.spatialReference,this.spatialReference,null,t);const o=je(e.spatialReference,this.spatialReference)?e:ke(e,this.spatialReference);if(!o)return[];const n=o.normalize(),r=[];for(const s of n)this._index.forEachInBounds(it(s),({normalizedCoords:a,element:p})=>{j(a)&&Se(s,a)&&r.push(p)});return r.sort((s,a)=>this._elementsIndexes.get(s)-this._elementsIndexes.get(a)),r}_updateIndexForElement(e,t){const o=e.normalizedBounds,n=this._index.has(e),r=j(o);this._index.delete(e),r&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(n!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([l()],W.prototype,"elements",null),i([l({readOnly:!0})],W.prototype,"fullExtent",null),i([l()],W.prototype,"spatialReference",null),W=i([x("esri.layers.support.LocalMediaElementSource")],W);const Z=W;function ye(e){return typeof e=="object"&&e!=null&&"type"in e}let f=class extends Ce(Ve(Te(Le(Oe)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new Z}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new q("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const o=ye(t)?new Z({elements:new ee([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference);const n=o.load(e).then(()=>{this.spatialReference=o.spatialReference});return this.addResolvingPromise(n),Promise.resolve(this)}destroy(){var e,t;(e=F(this.effectiveSource))==null||e.destroy(),(t=F(this.source))==null||t.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):B.getLogger(this.declaredClass).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)||e instanceof ee?new Z({elements:e}):e:null}readSource(e,t,o){const n=t.mediaType==="image"?new _e:t.mediaType==="video"?new Ie:null;return n==null||n.read(t,o),n}writeSource(e,t,o,n){var r;e&&ye(e)&&e.type==="image"?e.write(t,n):n!=null&&n.messages&&((r=n==null?void 0:n.messages)==null||r.push(new q("media-layer:unsupported-source","source must be an 'ImageElement'")))}};i([l({readOnly:!0})],f.prototype,"effectiveSource",void 0),i([l({type:String})],f.prototype,"copyright",void 0),i([l({readOnly:!0})],f.prototype,"fullExtent",null),i([l({type:["MediaLayer"]})],f.prototype,"operationalLayerType",void 0),i([l({type:["show","hide"]})],f.prototype,"listMode",void 0),i([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],f.prototype,"source",null),i([Ee("source")],f.prototype,"castSource",null),i([Y("source",["url"])],f.prototype,"readSource",null),i([se("source")],f.prototype,"writeSource",null),i([l()],f.prototype,"spatialReference",void 0),i([l({readOnly:!0})],f.prototype,"type",void 0),f=i([x("esri.layers.MediaLayer")],f);const Io=f;export{Io as default};
