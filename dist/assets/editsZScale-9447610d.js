import{t as l}from"./typedArrayUtil-c81d173a.js";import{L as a,E as c}from"./Extent-52b65909.js";function e(n,o,t){if(n.hasM==null||n.hasZ)for(const f of o)for(const s of f)s.length>2&&(s[2]*=t)}function h(n,o,t){if(!n&&!o||!t)return;const f=a(t);r(n,t,f),r(o,t,f)}function r(n,o,t){if(n)for(const f of n)i(f.geometry,o,t)}function i(n,o,t){if(l(n)||!n.spatialReference||c(n.spatialReference,o))return;const f=a(n.spatialReference)/t;if(f!==1){if("x"in n)n.z!=null&&(n.z*=f);else if("rings"in n)e(n,n.rings,f);else if("paths"in n)e(n,n.paths,f);else if("points"in n&&(n.hasM==null||n.hasZ))for(const s of n.points)s.length>2&&(s[2]*=f)}}export{h as i};