import { resolveComponent as c, openBlock as r, createBlock as d, createElementBlock as a, Fragment as s, createVNode as p, withCtx as u, createTextVNode as m, createElementVNode as l } from "vue";
import { createRouter as f, createWebHashHistory as h } from "vue-router";
const _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, i] of o)
    e[n] = i;
  return e;
};
const v = {
  __name: "App",
  setup(t) {
    return (o, e) => {
      const n = c("router-view");
      return r(), d(n);
    };
  }
}, N = /* @__PURE__ */ _(v, [["__scopeId", "data-v-3ad8f193"]]), k = {}, x = /* @__PURE__ */ l("h2", null, "Home", -1);
function y(t, o) {
  const e = c("router-link");
  return r(), a(s, null, [
    x,
    p(e, { to: { name: "about", params: { company: "awala" } } }, {
      default: u(() => [
        m("about")
      ]),
      _: 1
    })
  ], 64);
}
const b = /* @__PURE__ */ _(k, [["render", y]]), w = {}, A = /* @__PURE__ */ l("h2", null, "About", -1);
function g(t, o) {
  const e = c("router-view");
  return r(), a(s, null, [
    A,
    p(e, { to: "/marketplace/companies" }, {
      default: u(() => [
        m("go back")
      ]),
      _: 1
    })
  ], 64);
}
const H = /* @__PURE__ */ _(w, [["render", g]]), $ = [
  { path: "/marketplace/companies", component: b },
  {
    path: "/marketplace/companies/:company",
    name: "about",
    component: H
  }
], V = f({
  history: h(),
  routes: $
});
export {
  N as TestComponentApp,
  V as router
};
