import{e as m}from"./typedArrayUtil-c81d173a.js";import{F as f,G as h,Y as i,K as y,t as x,c as p,A as c,M as P,C as O}from"./request-429c0e66.js";function v(e,t){const l=t&&t.url&&t.url.path;if(e&&l&&(e=f(e,l,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const r=h(e,t.portalItem.itemUrl);r!=null&&$.test(r)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(r).path)}return n(e,t&&t.portal)}function U(e,t,l=s.YES){if(e==null)return e;!i(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);let r=f(e);if(t){const o=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(o){const u=n(o,t.portal),a=n(r,t.portal);r=h(a,u,u),r!=null&&r!==a&&r!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(r)}}return r=I(r,t==null?void 0:t.portal),i(r)&&(r=y(r)),t!=null&&t.resources&&(t!=null&&t.portalItem)&&!i(r)&&!x(r)&&l===s.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),r}function S(e,t,l){return v(e,l)}function K(e,t,l,r){const o=U(e,r);o!==void 0&&(t[l]=o)}const d=/\/items\/([^\/]+)\/resources\/(.*)/,$=/^\.\/resources\//;function F(e){var t;return((t=(e==null?void 0:e.match(d))??null)==null?void 0:t[1])??null}function b(e){const t=(e==null?void 0:e.match(d))??null;if(t==null)return null;const l=t[2],r=l.lastIndexOf("/");if(r===-1){const{path:a,extension:R}=p(l);return{prefix:null,filename:a,extension:m(R)}}const{path:o,extension:u}=p(l.slice(r+1));return{prefix:l.slice(0,r),filename:o,extension:m(u)}}function I(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?c(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function n(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;const l=`${t.urlKey}.${t.customBaseUrl}`,r=O();return P(r,`${r.scheme}://${l}`)?c(e,t.portalHostname,l):c(e,l,t.portalHostname)}var s;(function(e){e[e.YES=0]="YES",e[e.NO=1]="NO"})(s||(s={}));const B=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return s},ensureMainOnlineDomain:I,fromJSON:v,itemIdFromResourceUrl:F,prefixAndFilenameFromResourceUrl:b,read:S,toJSON:U,write:K},Symbol.toStringTag,{value:"Module"}));export{s as R,F as U,v as c,b as d,K as f,U as m,S as p,B as x,I as y};
