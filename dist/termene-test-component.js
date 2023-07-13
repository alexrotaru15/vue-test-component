import { resolveComponent as _, openBlock as c, createBlock as p, createElementBlock as a, Fragment as u, createVNode as l, withCtx as m, createTextVNode as i, createElementVNode as d } from "vue";
import { createRouter as f, createWebHashHistory as h } from "vue-router";
const r = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of o)
    t[n] = s;
  return t;
};
const v = {
  __name: "App",
  setup(e) {
    return (o, t) => {
      const n = _("router-view");
      return c(), p(n);
    };
  }
}, N = /* @__PURE__ */ r(v, [["__scopeId", "data-v-3ad8f193"]]), x = {}, k = /* @__PURE__ */ d("h2", null, "Home", -1);
function b(e, o) {
  const t = _("router-link");
  return c(), a(u, null, [
    k,
    l(t, { to: { name: "about" } }, {
      default: m(() => [
        i("about")
      ]),
      _: 1
    })
  ], 64);
}
const y = /* @__PURE__ */ r(x, [["render", b]]), A = {};
function H(e, o) {
  return c(), a("h2", null, "About");
}
const g = /* @__PURE__ */ r(A, [["render", H]]), w = [
  { path: "/marketplace/companies", component: y },
  {
    path: "/marketplace/companies/individual",
    name: "about",
    component: g
  }
], V = f({
  history: h(),
  routes: w
});
export {
  N as TestComponentApp,
  V as router
};
