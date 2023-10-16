import{G as A,a as R}from"./typedArrayUtil-c81d173a.js";import{o as D}from"./FeatureContainer-2988c992.js";import{r as E,i as C,M as O,f as I,h as $}from"./mat3-5b850236.js";import{e as c}from"./mat3f32-6c416b1c.js";import{t as L}from"./vec2f32-eaf29605.js";import{r as N}from"./vec3f32-ad1dc57f.js";import{U as S}from"./normalizeUtils-08ce1e14.js";import{r as T}from"./Container-782a7f3a.js";import{e as w}from"./color-349a3ca2.js";import{E as m,f as F}from"./VertexArrayObject-2b4e90de.js";import{R as p,E as P,C as x,F as g,I as U}from"./enums-64ab819c.js";const W=Math.PI/180,q=4;class G extends T{constructor(s){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=c(),this._localOrigin={x:0,y:0},this._getBounds=s}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=A(this._program)}doRender(s){const{context:t}=s,o=this._getBounds();if(o.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(s),this._updateBufferData(t,o),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(p.ONE,p.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const h=this._program;t.bindVAO(this._vao),t.useProgram(h),h.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(P.LINES,8*o.length,x.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:c()}}_createShaderProgram(s){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,o=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=s.programCache.acquire(t,o,v().attributes)}_updateMatricesAndLocalOrigin(s){const{state:t}=s,{displayMat3:o,size:h,resolution:f,pixelRatio:n,rotation:a,viewpoint:e}=t,l=W*a,{x:i,y}=e.targetGeometry,B=S(i,t.spatialReference);this._localOrigin.x=B,this._localOrigin.y=y;const _=n*h[0],u=n*h[1],b=f*_,M=f*u,d=E(this._dvsMat3);C(d,d,o),O(d,d,L(_/2,u/2)),I(d,d,N(h[0]/b,-u/M,1)),$(d,d,-l)}_updateBufferData(s,t){const{x:o,y:h}=this._localOrigin,f=2*q*t.length,n=new Float32Array(f),a=new Uint32Array(8*t.length);let e=0,l=0;for(const i of t)i&&(n[2*e+0]=i[0]-o,n[2*e+1]=i[1]-h,n[2*e+2]=i[0]-o,n[2*e+3]=i[3]-h,n[2*e+4]=i[2]-o,n[2*e+5]=i[3]-h,n[2*e+6]=i[2]-o,n[2*e+7]=i[1]-h,a[l+0]=e+0,a[l+1]=e+3,a[l+2]=e+3,a[l+3]=e+2,a[l+4]=e+2,a[l+5]=e+1,a[l+6]=e+1,a[l+7]=e+0,e+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=m.createVertex(s,g.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=m.createIndex(s,g.DYNAMIC_DRAW,a),!this._vao){const i=v();this._vao=new F(s,i.attributes,i.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const v=()=>w("bounds",{geometry:[{location:0,name:"a_position",count:2,type:x.FLOAT}]});let tt=class extends D{constructor(r){super(r),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=R(this._boundsRenderer)}enableRenderingBounds(r){this._boundsRenderer=new G(r),this.requestRender()}get hasLabels(){return!1}onTileData(r,s){r.patch(s),this.contains(r)||this.addChild(r),this.requestRender()}onTileError(r){r.clear(),this.contains(r)||this.addChild(r)}_renderChildren(r,s){for(const t of this.children)t.isReady&&t.hasData&&(t.commit(r),r.context.setStencilFunction(U.EQUAL,t.stencilRef,255),t.getDisplayList().replay(r,t,s))}};export{tt as n};