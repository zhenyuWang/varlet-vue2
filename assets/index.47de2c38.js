import{d as m}from"./create.242e0646.js";import{t as v}from"./elements.9c883ade.js";import{n as i}from"./index.6222f8b9.js";import{A as d}from"./AppType.8a316df5.js";import{d as p}from"./index.079ade67.js";import{w as h,a as f}from"./utils.3b864b4e.js";import{u as b,a as u,_ as g,b as y,c as k}from"./en-US.1fd70412.js";var x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"var-table var-elevation--1 var--box"},[e("div",{staticClass:"var-table__main"},[e("table",{staticClass:"var-table__table",style:{width:t.toSizeUnit(t.fullWidth)}},[t._t("default")],2)]),t.hasSlots("footer")?e("div",{staticClass:"var-table__footer"},[t._t("footer")],2):t._e()])},C=[];const S=m({name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},methods:{toSizeUnit:v}}),_={};var $=i(S,x,C,!1,U,null,null,null);function U(t){for(let a in _)this[a]=_[a]}var n=function(){return $.exports}();n.install=function(t){t.component(n.name,n)};var F={basicUsage:"\u57FA\u672C\u4F7F\u7528",slot:"\u5C3E\u90E8\u63D2\u69FD",math:"\u6570\u5B66",english:"\u82F1\u8BED",tom:"\u706B\u732B\u6851",jerry:"\u8017\u5B50\u541B",name:"\u59D3\u540D"},T={basicUsage:"Basic Usage",slot:"Footer Slots",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"};const{add:c,use:N,pack:j,packs:G,merge:H}=b(),z=t=>{k(t),N(t)};u("zh-CN",g);u("en-US",y);c("zh-CN",F);c("en-US",T);var B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"var-table-example"},[e("app-type",[t._v(t._s(t.pack.basicUsage))]),e("var-table",[e("thead",[e("tr",[e("th",[t._v(t._s(t.pack.name))]),e("th",[t._v(t._s(t.pack.math))]),e("th",[t._v(t._s(t.pack.english))])])]),e("tbody",[e("tr",[e("td",[t._v(t._s(t.pack.jerry))]),e("td",[t._v("124")]),e("td",[t._v("38")])]),e("tr",[e("td",[t._v(t._s(t.pack.tom))]),e("td",[t._v("100")]),e("td",[t._v("135")])])])]),e("app-type",[t._v(t._s(t.pack.slot))]),e("var-table",{scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticClass:"footer"})]},proxy:!0}])},[e("thead",[e("tr",[e("th",[t._v(t._s(t.pack.name))]),e("th",[t._v(t._s(t.pack.math))]),e("th",[t._v(t._s(t.pack.english))])])]),e("tbody",t._l(t.list,function(s){return e("tr",{key:s.name},[e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.math))]),e("td",[t._v(t._s(s.english))])])}),0)])],1)},E=[];const o=(t,a)=>Array.from({length:a}).map((e,s)=>{const r=(t-1)*a+s+1;return{name:`Name ${r}`,math:r,english:r}}),D={name:"TableExample",components:{VarTable:n,AppType:d},data:()=>({data:[{name:"tom",math:100,english:135},{name:"jerry",math:124,english:38}],list:o(1,10)}),computed:{pack(){return j.value}},created(){h(this,z),f(this,p)},methods:{get(t,a){this.list=o(t,a)}}},l={};var M=i(D,B,E,!1,w,"fbd487d2",null,null);function w(t){for(let a in l)this[a]=l[a]}var A=function(){return M.exports}(),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",gen:o,default:A});export{n as T,o as g,I as i,j as p,z as u};