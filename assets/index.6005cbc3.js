import{S as m}from"./index.287ec6d4.js";import{d as h}from"./create.242e0646.js";import{a as l}from"./relation.9e421618.js";import{n as p}from"./index.31927c0d.js";const d={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1}};var u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("var-swipe",{ref:"swipe",staticClass:"var-tabs-items",attrs:{loop:t.loop,touchable:t.canSwipe,indicator:!1},on:{change:t.handleSwipeChange}},[t._t("default")],2)},f=[];const v=h({name:"VarTabsItems",components:{VarSwipe:m},mixins:[l("tabsItems",{childrenKey:"tabItemList"})],props:d,watch:{active(t){this.handleActiveChange(t)},tabItemList(){this.handleActiveChange(this.active)}},methods:{matchName(t){return this.tabItemList.find(({name:e})=>t===e)},matchIndex(t){return this.tabItemList.find(({index:e})=>t===e)},matchActive(t){return this.matchName(t)||this.matchIndex(t)},handleActiveChange(t){var a;const e=this.matchActive(t);!e||(this.tabItemList.forEach(({setCurrent:n})=>n(!1)),e.setCurrent(!0),(a=this.$refs.swipe)==null||a.to(e.index))},handleSwipeChange(t){var n,s,r;const e=this.tabItemList.find(({index:c})=>c===t),a=(n=e.name)!=null?n:e.index;(r=(s=this.getListeners())["onUpdate:active"])==null||r.call(s,a)}}}),o={};var _=p(v,u,f,!1,b,null,null,null);function b(t){for(let e in o)this[e]=o[e]}var i=function(){return _.exports}();i.install=function(t){t.component(i.name,i)};export{i as T};
