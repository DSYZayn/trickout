import{q as b,e as t,y as s,a as m,l as f}from"./cast-4d1aa82d.js";import{p as h,c as w}from"./string-bf9c68ed.js";import"./ensureType-8c80e8c7.js";import{o as D}from"./enumeration-de0a766e.js";import{o as y,r as v}from"./Extent-52b65909.js";import{S as g}from"./fieldUtils-c41301b0.js";import{l as c}from"./Color-46910694.js";import"./typedArrayUtil-c81d173a.js";const p=new b({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let M=0,l=class extends f{constructor(e){super(e),this.id="sym"+M++,this.type=null,this.color=new c([0,0,0,1])}readColor(e){return e&&e[0]!=null?[e[0],e[1],e[2],e[3]/255]:e}async collectRequiredFields(e,i){}hash(){return JSON.stringify(this.toJSON())}clone(){}};t([s({type:p.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:p.write}}})],l.prototype,"type",void 0),t([s({type:c,json:{write:{allowNull:!0}}})],l.prototype,"color",void 0),t([y("color")],l.prototype,"readColor",null),l=t([m("esri.symbols.Symbol")],l);const O=l;var a;let r=a=class extends O{constructor(o){super(o),this.data=null,this.type="cim"}readData(o,e){return e}writeData(o,e){if(o)for(const i in o)e[i]=o[i]}async collectRequiredFields(o,e){var i;if(((i=this.data)==null?void 0:i.type)==="CIMSymbolReference"){const n=this.data.primitiveOverrides;if(n){const d=n.map(S=>{const u=S.valueExpressionInfo;return g(o,e,u.expression)});await Promise.all(d)}}}clone(){return new a({data:h(this.data)})}hash(){return w(JSON.stringify(this.data)).toString()}};t([s({json:{write:!1}})],r.prototype,"color",void 0),t([s({json:{write:!0}})],r.prototype,"data",void 0),t([y("data",["symbol"])],r.prototype,"readData",null),t([v("data",{})],r.prototype,"writeData",null),t([D({CIMSymbolReference:"cim"},{readOnly:!0})],r.prototype,"type",void 0),r=a=t([m("esri.symbols.CIMSymbol")],r);const q=r;export{O as a,q as d};
