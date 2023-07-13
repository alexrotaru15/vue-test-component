import { ref as m, openBlock as n, createElementBlock as c, Fragment as p, createElementVNode as _, toDisplayString as h, pushScopeId as d, popScopeId as l, resolveComponent as u, createVNode as r, withCtx as f, createTextVNode as v } from "vue";
import { createRouter as x, createWebHashHistory as b } from "vue-router";
const a = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, i] of o)
    t[s] = i;
  return t;
}, g = (e) => (d("data-v-18ccd6b8"), e = e(), l(), e), y = /* @__PURE__ */ g(() => /* @__PURE__ */ _("div", { class: "card" }, "aceasta este noua componenta", -1)), H = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(e) {
    return m(0), (o, t) => (n(), c(p, null, [
      _("h1", null, h(e.msg), 1),
      y
    ], 64));
  }
}, $ = /* @__PURE__ */ a(H, [["__scopeId", "data-v-18ccd6b8"]]);
const k = (e) => (d("data-v-f15dae4a"), e = e(), l(), e), w = { class: "awala" }, A = /* @__PURE__ */ k(() => /* @__PURE__ */ _("p", null, "end component noua", -1)), I = {
  __name: "App",
  setup(e) {
    return (o, t) => {
      const s = u("router-view");
      return n(), c("div", w, [
        r($, { msg: "Componenta noua" }),
        r(s),
        A
      ]);
    };
  }
}, O = /* @__PURE__ */ a(I, [["__scopeId", "data-v-f15dae4a"]]), S = {}, C = /* @__PURE__ */ _("h2", null, "Home", -1);
function W(e, o) {
  const t = u("router-link");
  return n(), c(p, null, [
    C,
    r(t, { to: { name: "about" } }, {
      default: f(() => [
        v("about")
      ]),
      _: 1
    })
  ], 64);
}
const N = /* @__PURE__ */ a(S, [["render", W]]), V = {};
function B(e, o) {
  return n(), c("h2", null, "About");
}
const E = /* @__PURE__ */ a(V, [["render", B]]), T = [
  { path: "/", component: N },
  {
    path: "/marketplace/companies/individual",
    name: "about",
    component: E
  }
], R = x({
  history: b(),
  routes: T
});
export {
  O as TestComponentApp,
  R as router
};
