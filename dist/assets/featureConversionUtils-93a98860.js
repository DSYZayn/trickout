import{s as ln,a as k}from"./Error-9392329b.js";import{t as F,r as G,i as an}from"./typedArrayUtil-c81d173a.js";import{w as fn,q as hn}from"./aaBoundingBox-55a55434.js";import{o as dn}from"./aaBoundingRect-062d7c89.js";import{s as mn,y as gn,f as yn,l as pn}from"./jsonUtils-e2434b33.js";import{t as N,s as x}from"./OptimizedFeature-6361f5d1.js";import{e as wn}from"./OptimizedFeatureSet-1d1ac4b9.js";function p(n,r){return n?r?4:3:r?3:2}const v=ln.getLogger("esri.layers.graphics.featureConversionUtils"),J={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},bn=(n,r,e,t,s,o)=>{n[e]=s,n[e+1]=o},B=(n,r,e,t,s,o)=>{n[e]=s,n[e+1]=o,n[e+2]=r[t+2]},In=(n,r,e,t,s,o)=>{n[e]=s,n[e+1]=o,n[e+2]=r[t+3]},Mn=(n,r,e,t,s,o)=>{n[e]=s,n[e+1]=o,n[e+2]=r[t+2],n[e+3]=r[t+3]};function A(n,r,e,t){if(n){if(e)return r&&t?Mn:B;if(r&&t)return In}else if(r&&t)return B;return bn}function E({scale:n,translate:r},e){return Math.round((e-r[0])/n[0])}function L({scale:n,translate:r},e){return Math.round((r[1]-e)/n[1])}function U({scale:n,translate:r},e,t){return e*n[t]+r[t]}function _n(n,r,e){return n?r?e?Y(n):R(n):e?V(n):z(n):null}function z(n){const r=n.coords;return{x:r[0],y:r[1]}}function K(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n}function R(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2]}}function Gn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n}function V(n){const r=n.coords;return{x:r[0],y:r[1],m:r[2]}}function Tn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.m,n}function Y(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function Pn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n.coords[3]=r.m,n}function Nn(n,r,e,t){let s=z;e&&t?s=Y:e?s=R:t&&(s=V);for(const o of r){const{geometry:u,attributes:c}=o,l=G(u)?s(u):null;n.push({attributes:c,geometry:l})}return n}function _(n,r){return n&&r?Pn:n?Gn:r?Tn:K}function Q(n,r,e,t,s){const o=_(e,t);for(const{geometry:u,attributes:c}of r){const l=G(u)?o(new N,u):null;n.push(new x(l,c,null,s?c[s]:void 0))}return n}function Cn(n,r,e=_(r.z!=null,r.m!=null)){return e(n,r)}function Fn(n,r,e,t){for(const{geometry:s,attributes:o}of r)n.push({attributes:o,geometry:G(s)?W(s,e,t):null});return n}function W(n,r,e){if(F(n))return null;const t=p(r,e),s=[];for(let o=0;o<n.coords.length;o+=t){const u=[];for(let c=0;c<t;c++)u.push(n.coords[o+c]);s.push(u)}return r?e?{points:s,hasZ:r,hasM:e}:{points:s,hasZ:r}:e?{points:s,hasM:e}:{points:s}}function X(n,r,e,t,s){const o=p(e,t);for(const{geometry:u,attributes:c}of r){const l=G(u)?$(new N,u,o):null;n.push(new x(l,c,null,s?c[s]:void 0))}return n}function $(n,r,e=p(r.hasZ,r.hasM)){n.lengths[0]=r.points.length;const t=n.coords;let s=0;for(const o of r.points)for(let u=0;u<e;u++)t[s++]=o[u];return n}function Zn(n,r,e,t){for(const{geometry:s,attributes:o}of r)n.push({attributes:o,geometry:G(s)?nn(s,e,t):null});return n}function nn(n,r,e){if(!n)return null;const t=p(r,e),{coords:s,lengths:o}=n,u=[];let c=0;for(const l of o){const i=[];for(let a=0;a<l;a++){const f=[];for(let h=0;h<t;h++)f.push(s[c++]);i.push(f)}u.push(i)}return r?e?{paths:u,hasZ:r,hasM:e}:{paths:u,hasZ:r}:e?{paths:u,hasM:e}:{paths:u}}function rn(n,r,e,t,s){const o=p(e,t);for(const{geometry:u,attributes:c}of r){const l=G(u)?en(new N,u,o):null;n.push(new x(l,c,null,s?c[s]:void 0))}return n}function en(n,r,e=p(r.hasZ,r.hasM)){const{lengths:t,coords:s}=n;let o=0;for(const u of r.paths){for(const c of u)for(let l=0;l<e;l++)s[o++]=c[l];t.push(u.length)}return n}function xn(n,r,e,t){for(const{geometry:s,attributes:o,centroid:u}of r){const c=G(s)?tn(s,e,t):null;if(G(u)){const l=z(u);n.push({attributes:o,centroid:l,geometry:c})}else n.push({attributes:o,geometry:c})}return n}function tn(n,r,e){if(!n)return null;const t=p(r,e),{coords:s,lengths:o}=n,u=[];let c=0;for(const l of o){const i=[];for(let a=0;a<l;a++){const f=[];for(let h=0;h<t;h++)f.push(s[c++]);i.push(f)}u.push(i)}return r?e?{rings:u,hasZ:r,hasM:e}:{rings:u,hasZ:r}:e?{rings:u,hasM:e}:{rings:u}}function on(n,r,e,t,s){for(const{geometry:o,centroid:u,attributes:c}of r){const l=G(o)?sn(new N,o,e,t):null,i=s?c[s]:void 0;G(u)?n.push(new x(l,c,K(new N,u),i)):n.push(new x(l,c,null,i))}return n}function sn(n,r,e=r.hasZ,t=r.hasM){return kn(n,r.rings,e,t),n}function kn(n,r,e,t){const s=p(e,t),{lengths:o,coords:u}=n;let c=0;P(n);for(const l of r){for(const i of l)for(let a=0;a<s;a++)u[c++]=i[a];o.push(l.length)}return n}const Z=[],j=[];function On(n,r,e,t,s){Z[0]=n;const[o]=un(j,Z,r,e,t,s);return T(Z),T(j),o}function un(n,r,e,t,s,o){if(T(n),!e){for(const u of r){const c=o?u.attributes[o]:void 0;n.push(new x(null,u.attributes,null,c))}return n}switch(e){case"esriGeometryPoint":return Q(n,r,t,s,o);case"esriGeometryMultipoint":return X(n,r,t,s,o);case"esriGeometryPolyline":return rn(n,r,t,s,o);case"esriGeometryPolygon":return on(n,r,t,s,o);default:v.error("convertToFeatureSet:unknown-geometry",new k(`Unable to parse unknown geometry type '${e}'`)),T(n)}return n}function Bn(n,r,e,t,s,o){const u=n.length;switch(e){case"esriGeometryPoint":Q(n,r,t,s,o);break;case"esriGeometryMultipoint":X(n,r,t,s,o);break;case"esriGeometryPolyline":rn(n,r,t,s,o);break;case"esriGeometryPolygon":on(n,r,t,s,o);break;default:v.error("convertToFeatureSet:unknown-geometry",new k(`Unable to parse unknown geometry type '${e}'`))}for(let c=0;c<r.length;c++)n[c+u].geometryType=e,n[c+u].insertAfter=r[c].insertAfter,n[c+u].groupId=r[c].groupId;return n}function Dn(n,r,e,t){j[0]=n,cn(Z,j,r,e,t);const s=Z[0];return T(Z),T(j),s}function Hn(n,r,e){if(F(n))return null;const t=new N;return"hasZ"in n&&r==null&&(r=n.hasZ),"hasM"in n&&e==null&&(e=n.hasM),mn(n)?_(r??n.z!=null,e??n.m!=null)(t,n):gn(n)?sn(t,n,r,e):yn(n)?en(t,n,p(r,e)):pn(n)?$(t,n,p(r,e)):void v.error("convertFromGeometry:unknown-geometry",new k(`Unable to parse unknown geometry type '${n}'`))}function vn(n,r,e,t){const s=n&&("coords"in n?n:n.geometry);if(F(s))return null;switch(r){case"esriGeometryPoint":{let o=z;return e&&t?o=Y:e?o=R:t&&(o=V),o(s)}case"esriGeometryMultipoint":return W(s,e,t);case"esriGeometryPolyline":return nn(s,e,t);case"esriGeometryPolygon":return tn(s,e,t);default:return v.error("convertToGeometry:unknown-geometry",new k(`Unable to parse unknown geometry type '${r}'`)),null}}function jn(n,r){for(const e of r)n.push({attributes:e.attributes});return n}function cn(n,r,e,t,s){if(T(n),F(e))return jn(n,r);switch(e){case"esriGeometryPoint":return Nn(n,r,t,s);case"esriGeometryMultipoint":return Fn(n,r,t,s);case"esriGeometryPolyline":return Zn(n,r,t,s);case"esriGeometryPolygon":return xn(n,r,t,s);default:v.error("convertToFeatureSet:unknown-geometry",new k(`Unable to parse unknown geometry type '${e}'`))}return n}function Jn(n){const{objectIdFieldName:r,spatialReference:e,transform:t,fields:s,hasM:o,hasZ:u,features:c,geometryType:l,exceededTransferLimit:i,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=n,d={features:cn([],c,l,u,o),fields:s,geometryType:l,objectIdFieldName:r,spatialReference:e,uniqueIdField:a,queryGeometry:vn(f,h,!1,!1)};return t&&(d.transform=t),i&&(d.exceededTransferLimit=i),o&&(d.hasM=o),u&&(d.hasZ=u),d}function Kn(n,r){const e=new wn,{hasM:t,hasZ:s,features:o,objectIdFieldName:u,spatialReference:c,geometryType:l,exceededTransferLimit:i,transform:a,fields:f}=n;return f&&(e.fields=f),e.geometryType=l??null,e.objectIdFieldName=u??r??null,e.spatialReference=c??null,e.objectIdFieldName?(o&&un(e.features,o,l,s,t,e.objectIdFieldName),i&&(e.exceededTransferLimit=i),t&&(e.hasM=t),s&&(e.hasZ=s),a&&(e.transform=a),e):(v.error(new k("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),e)}function Qn(n){const{transform:r,features:e,hasM:t,hasZ:s}=n;if(!r)return n;for(const o of e)G(o.geometry)&&H(o.geometry,o.geometry,t,s,r),G(o.centroid)&&H(o.centroid,o.centroid,t,s,r);return n.transform=null,n}function Wn(n,r){const{geometryType:e,features:t,hasM:s,hasZ:o}=r;if(!n)return r;for(let u=0;u<t.length;u++){const c=t[u],l=c.weakClone();l.geometry=new N,D(l.geometry,c.geometry,s,o,e,n),c.centroid&&(l.centroid=new N,D(l.centroid,c.centroid,s,o,"esriGeometryPoint",n)),t[u]=l}return r.transform=n,r}function D(n,r,e,t,s,o,u=e,c=t){if(P(n),F(r)||!r.coords.length)return null;const l=J[s],{coords:i,lengths:a}=r,f=p(e,t),h=p(e&&u,t&&c),d=A(e,t,u,c);if(!a.length)return d(n.coords,i,0,0,E(o,i[0]),L(o,i[1])),P(n,f,0),n;let m,y,b,I,w=0,g=0,M=g;for(const C of a){if(C<l)continue;let q=0;g=M,b=m=E(o,i[w]),I=y=L(o,i[w+1]),d(n.coords,i,g,w,b,I),q++,w+=f,g+=h;for(let O=1;O<C;O++,w+=f)b=E(o,i[w]),I=L(o,i[w+1]),b===m&&I===y||(d(n.coords,i,g,w,b-m,I-y),g+=h,q++,m=b,y=I);q>=l&&(n.lengths.push(q),M=g)}return T(n.coords,M),n.coords.length?n:null}function Xn(n,r,e,t,s,o,u=e,c=t){if(P(n),!r||!r.coords.length)return null;const l=J[s],{coords:i,lengths:a}=r,f=p(e,t),h=p(e&&u,t&&c),d=A(e,t,u,c);if(!a.length)return d(n.coords,i,0,0,i[0],i[1]),P(n,f,0),n;let m=0;const y=o*o;for(const b of a){if(b<l){m+=b*f;continue}const I=n.coords.length/h,w=m,g=m+(b-1)*f;d(n.coords,i,n.coords.length,w,i[w],i[w+1]),S(n.coords,i,f,y,d,w,g),d(n.coords,i,n.coords.length,g,i[g],i[g+1]);const M=n.coords.length/h-I;M>=l?n.lengths.push(M):T(n.coords,I*h),m+=b*f}return n.coords.length?n:null}function qn(n,r,e,t){const s=n[r],o=n[r+1],u=n[e],c=n[e+1],l=n[t],i=n[t+1];let a=u,f=c,h=l-a,d=i-f;if(h!==0||d!==0){const m=((s-a)*h+(o-f)*d)/(h*h+d*d);m>1?(a=l,f=i):m>0&&(a+=h*m,f+=d*m)}return h=s-a,d=o-f,h*h+d*d}function S(n,r,e,t,s,o,u){let c,l=t,i=0;for(let a=o+e;a<u;a+=e)c=qn(r,a,o,u),c>l&&(i=a,l=c);l>t&&(i-o>e&&S(n,r,e,t,s,o,i),s(n,r,n.length,i,r[i],r[i+1]),u-i>e&&S(n,r,e,t,s,i,u))}function $n(n,r,e,t){if(F(r)||!r.coords||!r.coords.length)return null;const s=p(e,t);let o=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&r.coords){const i=r.coords;for(let a=0;a<i.length;a+=s){const f=i[a],h=i[a+1];o=Math.min(o,f),c=Math.max(c,f),u=Math.min(u,h),l=Math.max(l,h)}}return fn(n)?hn(n,o,u,c,l):dn(o,u,c,l,n),n}function H(n,r,e,t,s){const{coords:o,lengths:u}=r,c=p(e,t);if(!o.length)return n!==r&&P(n),n;an(s);const{originPosition:l,scale:i,translate:a}=s,f=En;f.originPosition=l;const h=f.scale;h[0]=i[0]??1,h[1]=-(i[1]??1),h[2]=i[2]??1,h[3]=i[3]??1;const d=f.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!u.length){for(let y=0;y<c;++y)n.coords[y]=U(f,o[y],y);return n!==r&&P(n,c,0),n}let m=0;for(let y=0;y<u.length;y++){const b=u[y];n.lengths[y]=b;for(let g=0;g<c;++g)n.coords[m+g]=U(f,o[m+g],g);let I=n.coords[m],w=n.coords[m+1];m+=c;for(let g=1;g<b;g++,m+=c){I+=o[m]*h[0],w+=o[m+1]*h[1],n.coords[m]=I,n.coords[m+1]=w;for(let M=2;M<c;++M)n.coords[m+M]=U(f,o[m+M],M)}}return n!==r&&P(n,o.length,u.length),n}function nr(n,r,e,t,s,o){if(P(n),n.lengths.push(...r.lengths),e===s&&t===o)for(let u=0;u<r.coords.length;u++)n.coords.push(r.coords[u]);else{const u=p(e,t),c=A(e,t,s,o),l=r.coords;for(let i=0;i<l.length;i+=u)c(n.coords,l,n.coords.length,i,l[i],l[i+1])}return n}function zn(n,r,e,t){let s=0,o=n[t*r],u=n[t*(r+1)];for(let c=1;c<e;c++){const l=o+n[t*(r+c)],i=u+n[t*(r+c)+1],a=(l-o)*(i+u);o=l,u=i,s+=a}return .5*s}function rr(n,r){const{coords:e,lengths:t}=n;let s=0,o=0;for(let u=0;u<t.length;u++){const c=t[u];o+=zn(e,s,c,r),s+=c}return Math.abs(o)}function er(n,r){if(F(n))return null;const e=n.clone(),t=n.coords,s=n.lengths;let o=0;for(let u=0;u<s.length;u++){const c=s[u];let l=t[r*o],i=t[r*o+1];for(let a=1;a<c;a++){const f=l+t[r*(o+a)],h=i+t[r*(o+a)+1];e.coords[r*(o+a)]=f,e.coords[r*(o+a)+1]=h,l=f,i=h}o+=c}return e}function P(n,r=0,e=0){T(n.lengths,e),T(n.coords,r)}function T(n,r=0){n.length!==r&&(n.length=r)}const En={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{nn as C,E as G,en as H,$n as I,tn as K,nr as M,er as P,rr as T,Cn as U,sn as W,kn as X,Kn as a,L as b,Hn as c,Wn as d,Jn as f,Xn as g,Qn as h,_n as j,D as m,un as n,On as o,W as q,Bn as r,Dn as s,vn as u,H as w};