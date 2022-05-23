import{A as s}from"./AppType.8a316df5.js";import{B as u}from"./index.4335e576.js";import{B as n}from"./index.e6eb8827.js";import{C as d}from"./index.0c381ce6.js";import{d as i}from"./index.079ade67.js";import{u as g,a as o,_ as c,b as l,c as h}from"./en-US.1fd70412.js";import{w as m,a as v}from"./utils.3b864b4e.js";import{n as _}from"./index.6222f8b9.js";import"./index.1f79a394.js";import"./shared.f8da68a0.js";import"./elements.9c883ade.js";import"./create.242e0646.js";import"./vendor.4f0eb98f.js";import"./index.8d5eec0c.js";import"./index.0d796514.js";import"./index.32e6addf.js";import"./components.1b7f472c.js";var B={themeColorBadge:"\u4E3B\u9898\u8272\u5FBD\u6807",dotBadge:"\u5706\u70B9\u5FBD\u6807",customContentBadge:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6807\u7B7E",maximum:"\u6700\u5927\u503C",differentPositioningBadges:"\u4E0D\u540C\u5B9A\u4F4D\u5FBD\u6807",upperRight:"\u53F3\u4E0A",lowerRight:"\u53F3\u4E0B",upperLeft:"\u5DE6\u4E0A",lowerLeft:"\u5DE6\u4E0B",whetherToDisplayTheBadge:"\u662F\u5426\u663E\u793A\u5FBD\u6807",clickToChangeTheState:"\u70B9\u51FB\u6539\u53D8\u72B6\u6001",badge:"\u5FBD\u6807",customBadgeColors:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272",customBadgeIcons:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u56FE\u6807"},f={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",whetherToDisplayTheBadge:"Whether To Display The Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons"};const{add:p,use:C,pack:y,packs:G,merge:H}=g(),b=e=>{h(e),C(e)};o("zh-CN",c);o("en-US",l);p("zh-CN",B);p("en-US",f);var k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"var-badge-example"},[a("app-type",[e._v(e._s(e.pack.themeColorBadge))]),a("var-badge"),a("var-badge",{attrs:{type:"primary"}}),a("var-badge",{attrs:{type:"info"}}),a("var-badge",{attrs:{type:"warning"}}),a("var-badge",{attrs:{type:"success"}}),a("var-badge",{attrs:{type:"danger"}}),a("app-type",[e._v(e._s(e.pack.dotBadge))]),a("var-badge",{attrs:{dot:"",type:"danger"}}),a("app-type",[e._v(e._s(e.pack.customContentBadge))]),a("var-badge",{attrs:{type:"danger",value:"badge"}}),a("var-badge",{attrs:{type:"danger",value:"hot"}}),a("var-badge",{attrs:{type:"danger",value:"66"}}),a("app-type",[e._v(e._s(e.pack.maximum))]),a("var-badge",{attrs:{type:"danger",value:e.value,"max-value":e.maxValue}}),a("var-badge",{attrs:{type:"danger",value:e.value1,"max-value":e.maxValue}}),a("app-type",[e._v(e._s(e.pack.differentPositioningBadges))]),a("var-badge",{attrs:{type:"danger",position:"right-top"}},[a("var-chip",{attrs:{plain:"",round:!1,color:"#009688"}},[e._v(e._s(e.pack.upperRight))])],1),a("var-badge",{attrs:{type:"danger",position:"right-bottom"}},[a("var-chip",{attrs:{plain:"",round:!1,color:"#009688"}},[e._v(e._s(e.pack.lowerRight))])],1),a("var-badge",{attrs:{type:"danger",position:"left-top"}},[a("var-chip",{attrs:{plain:"",round:!1,color:"#009688"}},[e._v(e._s(e.pack.upperLeft))])],1),a("var-badge",{attrs:{type:"danger",position:"left-bottom"}},[a("var-chip",{attrs:{plain:"",round:!1,color:"#009688"}},[e._v(e._s(e.pack.lowerLeft))])],1),a("app-type",[e._v(e._s(e.pack.whetherToDisplayTheBadge))]),a("var-button",{on:{click:e.handleChange}},[e._v(" "+e._s(e.pack.clickToChangeTheState)+" ")]),a("var-badge",{attrs:{type:"danger",position:"right-top",hidden:e.hidden}},[a("var-chip",{attrs:{plain:"",round:!1,color:"#009688"}},[e._v(e._s(e.pack.badge))])],1),a("app-type",[e._v(e._s(e.pack.customBadgeColors))]),a("var-badge",{attrs:{color:"#6200ea",position:"right-top"}},[a("var-chip",{attrs:{plain:"",round:!1,color:"#009688"}},[e._v(e._s(e.pack.badge))])],1),a("app-type",[e._v(e._s(e.pack.customBadgeIcons))]),a("var-badge",{attrs:{color:"#6200ea",position:"right-top",icon:"notebook"}},[a("var-chip",{attrs:{plain:"",round:!1,color:"#009688"}},[e._v(e._s(e.pack.badge))])],1)],1)},T=[];const D={name:"BadgeExample",components:{VarBadge:u,VarButton:n,VarChip:d,AppType:s},data:()=>({value:88,value1:188,maxValue:99,hidden:!1}),computed:{pack(){return y.value}},created(){m(this,b),v(this,i)},methods:{handleChange(){this.hidden=!this.hidden}}},r={};var E=_(D,k,T,!1,x,"23281ad2",null,null);function x(e){for(let t in r)this[t]=r[t]}var J=function(){return E.exports}();export{J as default};