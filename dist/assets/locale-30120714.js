let o;var t,a;const u=((t=globalThis.esriConfig)==null?void 0:t.locale)??((a=globalThis.dojoConfig)==null?void 0:a.locale);function r(){var n;return u??((n=globalThis.navigator)==null?void 0:n.language)??"en"}function g(){return o===void 0&&(o=r()),o}const e=[];function f(n){return e.push(n),{remove(){e.splice(e.indexOf(n),1)}}}const i=[];function h(n){return i.push(n),{remove(){e.splice(i.indexOf(n),1)}}}function s(){const n=r();o!==n&&(o=n,[...i].forEach(l=>{l.call(null,n)}),[...e].forEach(l=>{l.call(null,n)}))}var c;(c=globalThis.addEventListener)==null||c.call(globalThis,"languagechange",s);export{h as g,g as l,f as s};
