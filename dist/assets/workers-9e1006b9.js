import{_ as R}from"./preload-helper-41c905a7.js";import{s as J,b as p,a as D}from"./Error-9392329b.js";import{h as n}from"./string-bf9c68ed.js";import{d as U,C as F,j as x,f as $}from"./promiseUtils-3ce2a460.js";import{t as m,f as P,w as E,c as T,e as q,s as N,o as z,r as K,h as V}from"./Connection-da262054.js";import{F as f,a as B,s as G}from"./request-16c6134d.js";import{p as M}from"./typedArrayUtil-c81d173a.js";import{a as Q}from"./assets-86d142ff.js";import"./intl-45f8f1a9.js";import{t as L}from"./nextTick-3ee5a785.js";import{l as A}from"./locale-30120714.js";const X={};function Y(r){const e={async:r.async,isDebug:r.isDebug,locale:r.locale,baseUrl:r.baseUrl,has:{...r.has},map:{...r.map},packages:r.packages&&r.packages.concat()||[],paths:{...r.paths}};return r.hasOwnProperty("async")||(e.async=!0),r.hasOwnProperty("isDebug")||(e.isDebug=!1),r.baseUrl||(e.baseUrl=X.baseUrl),e}class Z{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(t=>{this[t]=(...s)=>e[t](...s)})}}let y=class{constructor(){this._dispatcher=new Z,this._workerPostMessage({type:m.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){L(()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))})}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,s){this._dispatcher.addEventListener(e,t,s)}removeEventListener(e,t,s){this._dispatcher.removeEventListener(e,t,s)}_workerPostMessage(e){L(()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))})}async _workerMessageHandler(e){const t=P(e);if(t&&t.type===m.OPEN){const{modulePath:s,jobId:o}=t;let a=await E.loadWorker(s);a||(a=await R(()=>import(s),[],import.meta.url));const i=E.connect(a);this._workerPostMessage({type:m.OPENED,jobId:o,data:i})}}};const _=J.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:ee}=m,re='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,version:r}=configuration.kernelInfo,{revision:t,version:n}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS API for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\\nModules version: ${r}\\nAssets version: ${n}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const i=outgoing.get(r);outgoing.delete(r),o.error?i.reject(JSON.parse(o.error)):i.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';let g,w;const j="Failed to create Worker. Fallback to execute module in main thread";async function te(){if(!n("esri-workers")||(n("mozilla"),0))return C(new y);if(!g&&!w)try{const e=re.split('"{CONFIGURATION}"').join(`'${se()}'`);g=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){w=e||{}}let r;if(g)try{r=new Worker(g,{name:"esri-worker-"+oe++})}catch{_.warn(j,w),r=new y}else _.warn(j,w),r=new y;return C(r)}async function C(r){return new Promise(e=>{function t(o){const a=P(o);a&&a.type===ee&&(r.removeEventListener("message",t),r.removeEventListener("error",s),e(r))}function s(o){o.preventDefault(),r.removeEventListener("message",t),r.removeEventListener("error",s),_.warn("Failed to create Worker. Fallback to execute module in main thread",o),(r=new y).addEventListener("message",t),r.addEventListener("error",s)}r.addEventListener("message",t),r.addEventListener("error",s)})}function se(){let r;if(p.default!=null){const o={...p};delete o.default,r=JSON.parse(JSON.stringify(o))}else r=JSON.parse(JSON.stringify(p));r.assetsPath=f(r.assetsPath),r.defaultAssetsPath=r.defaultAssetsPath?f(r.defaultAssetsPath):void 0,r.request.interceptors=[],r.log.interceptors=[],r.locale=A(),r.has={"esri-csp-restrictions":n("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":n("esri-2d-update-debug"),"featurelayer-pbf":n("featurelayer-pbf"),"featurelayer-simplify-thresholds":n("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":n("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":n("featurelayer-simplify-mobile-factor"),"esri-atomics":n("esri-atomics"),"esri-shared-array-buffer":n("esri-shared-array-buffer"),"esri-tiles-debug":n("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":n("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":n("feature-polyline-generalization-factor"),"host-webworker":1,"polylabel-placement-enabled":n("polylabel-placement-enabled")},r.workers.loaderUrl&&(r.workers.loaderUrl=f(r.workers.loaderUrl)),r.workers.workerPath?r.workers.workerPath=f(r.workers.workerPath):r.workers.workerPath=f(Q("esri/core/workers/RemoteClient.js")),r.workers.useDynamicImport=!1;const e=p.workers.loaderConfig,t=Y({baseUrl:e==null?void 0:e.baseUrl,locale:A(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...e==null?void 0:e.has},map:{...e==null?void 0:e.map},paths:{...e==null?void 0:e.paths},packages:(e==null?void 0:e.packages)||[]});return JSON.stringify({esriConfig:r,loaderConfig:t,kernelInfo:{version:B,buildDate:T,revision:q}})}let oe=0;const{ABORT:S,INVOKE:ne,OPEN:ae,OPENED:ie,RESPONSE:h}=m;class I{static async create(e){const t=await te();return new I(t,e)}constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",s=>{s.preventDefault(),J.getLogger("esri.core.workers.WorkerOwner").error(s)})}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:s}=t,o=K();return new Promise((a,i)=>{const c={resolve:a,reject:i,abortHandle:U(s,()=>{this._outJobs.delete(o),this._post({type:S,jobId:o})})};this._outJobs.set(o,c),this._post({type:ae,jobId:o,modulePath:e})})}_onMessage(e){const t=P(e);if(t)switch(t.type){case ie:this._onOpenedMessage(t);break;case h:this._onResponseMessage(t);break;case S:this._onAbortMessage(t);break;case ne:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,s=e.jobId,o=t.get(s);o&&(o.controller&&o.controller.abort(),t.delete(s))}_onInvokeMessage(e){const{methodName:t,jobId:s,data:o,abortable:a}=e,i=a?new AbortController:null,c=this._inJobs,O=G[t];let u;try{if(typeof O!="function")throw new TypeError(`${t} is not a function`);u=O.call(null,o,{signal:i?i.signal:null})}catch(l){return void this._post({type:h,jobId:s,error:N(l)})}F(u)?(c.set(s,{controller:i,promise:u}),u.then(l=>{c.has(s)&&(c.delete(s),this._post({type:h,jobId:s},l))},l=>{c.has(s)&&(c.delete(s),l||(l={message:"Error encountered at method"+t}),x(l)||this._post({type:h,jobId:s,error:N(l||{message:`Error encountered at method ${t}`})}))})):this._post({type:h,jobId:s},u)}_onOpenedMessage(e){const{jobId:t,data:s}=e,o=this._outJobs.get(t);o&&(this._outJobs.delete(t),M(o.abortHandle),o.resolve(s))}_onResponseMessage(e){const{jobId:t,error:s,data:o}=e,a=this._outJobs.get(t);a&&(this._outJobs.delete(t),M(a.abortHandle),s?a.reject(D.fromJSON(JSON.parse(s))):a.resolve(o))}_post(e,t,s){return z(this.worker,e,t,s)}}let d=n("esri-workers-debug")?1:n("esri-mobile")?Math.min(navigator.hardwareConcurrency-1,3):n("host-browser")?navigator.hardwareConcurrency-1:0;d||(d=n("safari")&&n("mac")?7:2);let H=0;const v=[];function ye(){W()}async function b(r,e){const t=new V;return await t.open(r,e),t}async function ve(r,e={}){if(typeof r!="string")throw new D("workers:undefined-module","modulePath is missing");let t=e.strategy||"distributed";if(n("host-webworker")&&!n("esri-workers")&&(t="local"),t==="local"){let s=await E.loadWorker(r);s||(s=await R(()=>import(r),[],import.meta.url)),$(e.signal);const o=e.client||s;return b([E.connect(s)],{...e,client:o})}if(await W(),$(e.signal),t==="dedicated"){const s=H++%d;return b([await v[s].open(r,e)],e)}if(e.maxNumWorkers&&e.maxNumWorkers>0){const s=Math.min(e.maxNumWorkers,d);if(s<d){const o=new Array(s);for(let a=0;a<s;++a){const i=H++%d;o[a]=v[i].open(r,e)}return b(o,e)}}return b(v.map(s=>s.open(r,e)),e)}let k=null;async function W(){if(k)return k;new AbortController;const r=[];for(let e=0;e<d;e++){const t=I.create(e).then(s=>(v[e]=s,s));r.push(t)}return k=Promise.all(r),k}export{ye as c,ve as u};
