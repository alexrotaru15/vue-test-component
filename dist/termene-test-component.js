import { resolveComponent as c, openBlock as r, createBlock as d, createElementBlock as a, Fragment as s, createVNode as p, withCtx as l, createTextVNode as m, createElementVNode as u, toDisplayString as f } from "vue";
import { createRouter as k, createWebHashHistory as h } from "vue-router";
const _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, i] of o)
    e[n] = i;
  return e;
};
const y = {
  __name: "App",
  setup(t) {
    return (o, e) => {
      const n = c("router-view");
      return r(), d(n);
    };
  }
}, N = /* @__PURE__ */ _(y, [["__scopeId", "data-v-3ad8f193"]]), v = {}, b = /* @__PURE__ */ u("h2", null, "Home", -1);
function x(t, o) {
  const e = c("router-link");
  return r(), a(s, null, [
    b,
    p(e, { to: { name: "about", params: { company: "awala" } } }, {
      default: l(() => [
        m("about")
      ]),
      _: 1
    })
  ], 64);
}
const g = /* @__PURE__ */ _(v, [["render", x]]), A = {};
function H(t, o) {
  const e = c("router-link");
  return r(), a(s, null, [
    u("h2", null, "About:" + f(t.$route.params.company), 1),
    p(e, { to: "/marketplace/companies" }, {
      default: l(() => [
        m("go back")
      ]),
      _: 1
    })
  ], 64);
}
const w = /* @__PURE__ */ _(A, [["render", H]]), $ = [
  { path: "/marketplace/companies", component: g },
  {
    path: "/marketplace/companies/:company",
    name: "about",
    component: w
  }
], V = k({
  history: h(),
  routes: $
});
export {
  N as TestComponentApp,
  V as router
};
