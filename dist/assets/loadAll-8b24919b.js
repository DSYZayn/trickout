import{h as c,b as s}from"./asyncUtils-d59cad3c.js";import{j as e}from"./Collection-54857936.js";import{m}from"./Loadable-e19fba09.js";import{t as u}from"./typedArrayUtil-c81d173a.js";async function b(r,n){return await r.load(),p(r,n)}async function p(r,n){const l=[],i=(...t)=>{for(const o of t)u(o)||(Array.isArray(o)?i(...o):e.isCollection(o)?o.forEach(f=>i(f)):m.isLoadable(o)&&l.push(o))};n(i);let a=null;if(await c(l,async t=>{const o=await s(d(t)?t.loadAll():t.load());o.ok!==!1||a||(a=o)}),a)throw a.error;return r}function d(r){return"loadAll"in r&&typeof r.loadAll=="function"}export{p as i,b as l};
