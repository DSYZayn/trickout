import{_ as u,r as l}from"./projection-03688518.js";import{q as f,f as d}from"./Extent-52b65909.js";async function p(n){const t=n.spatialReference;if(t.isWGS84)return n.clone();if(t.isWebMercator)return f(n);const e=d.WGS84;return await u(t,e),l(n,e)}function m(n,t){if(!y(n,t)){const e=n.typeKeywords;e?e.push(t):n.typeKeywords=[t]}}function y(n,t){var e;return!!((e=n.typeKeywords)!=null&&e.includes(t))}function S(n,t){const e=n.typeKeywords;if(e){const r=e.indexOf(t);r>-1&&e.splice(r,1)}}async function w(n){const t=n.clone().normalize();let e;if(t.length>1)for(const r of t)e?r.width>e.width&&(e=r):e=r;else e=t[0];return p(e)}const I={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"};function L(n){var a;const{portal:t,isOrgItem:e,itemControl:r}=n,s=(a=t.user)==null?void 0:a.privileges;let i=!s||s.includes("features:user:edit"),o=!!e&&!!(s!=null&&s.includes("features:user:fullEdit"));const c=r==="update"||r==="admin";return c?o=i=!0:o&&(i=!0),{features:{edit:i,fullEdit:o},content:{updateItem:c}}}export{w as a,S as c,m as i,L as l,y as s,I as u};