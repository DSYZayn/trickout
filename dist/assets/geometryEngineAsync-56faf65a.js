import"./geometry-8c15a791.js";import{u as w}from"./workers-9e1006b9.js";import"./Extent-52b65909.js";import{v as f}from"./jsonUtils-e2434b33.js";function i(t){var r;return Array.isArray(t)?(r=t[0])==null?void 0:r.spatialReference:t==null?void 0:t.spatialReference}function l(t){return t&&(Array.isArray(t)?t.map(l):t.toJSON?t.toJSON():t)}function u(t){return Array.isArray(t)?t.map(r=>f(r)):f(t)}function m(t,r){let n;return Array.isArray(t)?n=t:(n=[],n.push(t),r!=null&&n.push(r)),n}let s;async function g(){return s||(s=w("geometryEngineWorker",{strategy:"distributed"})),s}async function e(t,r){return(await g()).invoke("executeGEOperation",{operation:t,parameters:l(r)})}async function E(t,r){return u(await e("clip",[i(t),t,r]))}async function O(t,r){return u(await e("cut",[i(t),t,r]))}function R(t,r){return e("contains",[i(t),t,r])}function S(t,r){return e("crosses",[i(t),t,r])}function J(t,r,n){return e("distance",[i(t),t,r,n])}function N(t,r){return e("equals",[i(t),t,r])}function b(t,r){return e("intersects",[i(t),t,r])}function k(t,r){return e("touches",[i(t),t,r])}function D(t,r){return e("within",[i(t),t,r])}function L(t,r){return e("disjoint",[i(t),t,r])}function j(t,r){return e("overlaps",[i(t),t,r])}function B(t,r,n){return e("relate",[i(t),t,r,n])}function G(t){return e("isSimple",[i(t),t])}async function H(t){return u(await e("simplify",[i(t),t]))}async function W(t,r=!1){return u(await e("convexHull",[i(t),t,r]))}async function $(t,r){return u(await e("difference",[i(t),t,r]))}async function q(t,r){return u(await e("symmetricDifference",[i(t),t,r]))}async function z(t,r){return u(await e("intersect",[i(t),t,r]))}async function C(t,r=null){const n=m(t,r);return u(await e("union",[i(n),n]))}async function F(t,r,n,a,c,o){return u(await e("offset",[i(t),t,r,n,a,c,o]))}async function I(t,r,n,a=!1){const c=[i(t),t,r,n,a];return u(await e("buffer",c))}async function K(t,r,n,a,c,o){const p=[i(t),t,r,n,a,c,o];return u(await e("geodesicBuffer",p))}function d(t){var r;return"xmin"in t?t.center:"x"in t?t:(r=t.extent)==null?void 0:r.center}async function M(t,r,n){if(t==null)throw new y;const a=t.spatialReference;if((n=n??d(t))==null)throw new y;const c=t.constructor.fromJSON(await e("rotate",[a,t,r,n]));return c.spatialReference=a,c}async function P(t,r,n,a){return u(await e("generalize",[i(t),t,r,n,a]))}async function U(t,r,n){return u(await e("densify",[i(t),t,r,n]))}async function Z(t,r,n,a=0){return u(await e("geodesicDensify",[i(t),t,r,n,a]))}function Q(t,r){return e("planarArea",[i(t),t,r])}function T(t,r){return e("planarLength",[i(t),t,r])}function V(t,r,n){return e("geodesicArea",[i(t),t,r,n])}function X(t,r,n){return e("geodesicLength",[i(t),t,r,n])}class y extends Error{constructor(){super("Illegal Argument Exception")}}export{L as A,P as B,U as C,z as D,$ as E,T as F,M as H,G as J,V as K,I as L,X as M,H as N,j as O,K as P,B as R,k as S,Z as U,Q as W,C as b,J as d,N as g,b as h,W as j,q as k,S as m,R as p,F as v,O as w,D as x,E as y};
