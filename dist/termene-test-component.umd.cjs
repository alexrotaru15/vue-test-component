(function(o,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("vue-router")):typeof define=="function"&&define.amd?define(["exports","vue","vue-router"],e):(o=typeof globalThis<"u"?globalThis:o||self,e(o.TestTermeneComponent={},o.Vue,o.vueRouter))})(this,function(o,e,s){"use strict";const $="",r=(t,c)=>{const n=t.__vccOpts||t;for(const[a,x]of c)n[a]=x;return n},_=(t=>(e.pushScopeId("data-v-18ccd6b8"),t=t(),e.popScopeId(),t))(()=>e.createElementVNode("div",{class:"card"},"aceasta este noua componenta",-1)),p=r({__name:"HelloWorld",props:{msg:String},setup(t){return e.ref(0),(c,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("h1",null,e.toDisplayString(t.msg),1),_],64))}},[["__scopeId","data-v-18ccd6b8"]]),B="",d=t=>(e.pushScopeId("data-v-f15dae4a"),t=t(),e.popScopeId(),t),l={class:"awala"},i=d(()=>e.createElementVNode("p",null,"end component noua",-1)),m=r({__name:"App",setup(t){return(c,n)=>{const a=e.resolveComponent("router-view");return e.openBlock(),e.createElementBlock("div",l,[e.createVNode(p,{msg:"Componenta noua"}),e.createVNode(a),i])}}},[["__scopeId","data-v-f15dae4a"]]),u={},f=e.createElementVNode("h2",null,"Home",-1);function h(t,c){const n=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[f,e.createVNode(n,{to:{name:"about"}},{default:e.withCtx(()=>[e.createTextVNode("about")]),_:1})],64)}const k=r(u,[["render",h]]),y={};function b(t,c){return e.openBlock(),e.createElementBlock("h2",null,"About")}const S=[{path:"/marketplace/companies",component:k},{path:"/marketplace/companies/individual",name:"about",component:r(y,[["render",b]])}],g=s.createRouter({history:s.createWebHashHistory(),routes:S});o.TestComponentApp=m,o.router=g,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
