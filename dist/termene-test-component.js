import { ref as i, openBlock as c, createElementBlock as _, Fragment as p, createElementVNode as a, toDisplayString as h, pushScopeId as u, popScopeId as l, resolveComponent as d, createVNode as s, withCtx as v, createTextVNode as f } from "vue";
import { useRouter as x, useRoute as b, createRouter as g, createWebHashHistory as y } from "vue-router";
const r = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, m] of t)
    o[n] = m;
  return o;
}, k = (e) => (u("data-v-18ccd6b8"), e = e(), l(), e), H = /* @__PURE__ */ k(() => /* @__PURE__ */ a("div", { class: "card" }, "aceasta este noua componenta", -1)), w = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(e) {
    return i(0), (t, o) => (c(), _(p, null, [
      a("h1", null, h(e.msg), 1),
      H
    ], 64));
  }
}, A = /* @__PURE__ */ r(w, [["__scopeId", "data-v-18ccd6b8"]]);
const I = (e) => (u("data-v-f15dae4a"), e = e(), l(), e), S = { class: "awala" }, $ = /* @__PURE__ */ I(() => /* @__PURE__ */ a("p", null, "end component noua", -1)), C = {
  __name: "App",
  setup(e) {
    return (t, o) => {
      const n = d("router-view");
      return c(), _("div", S, [
        s(A, { msg: "Componenta noua" }),
        s(n),
        $
      ]);
    };
  }
}, F = /* @__PURE__ */ r(C, [["__scopeId", "data-v-f15dae4a"]]), W = /* @__PURE__ */ a("h2", null, "Home", -1), N = {
  __name: "Home",
  setup(e) {
    return x(), b(), (t, o) => {
      const n = d("router-link");
      return c(), _(p, null, [
        W,
        s(n, { to: "about" }, {
          default: v(() => [
            f("about")
          ]),
          _: 1
        })
      ], 64);
    };
  }
}, R = {};
function V(e, t) {
  return c(), _("h2", null, "About");
}
const B = /* @__PURE__ */ r(R, [["render", V]]), E = [
  { path: "/marketplace/companies", component: N },
  {
    path: "/marketplace/companies/individual",
    name: "about",
    component: B
  }
], O = g({
  history: y(),
  routes: E
});
export {
  F as TestComponentApp,
  O as router
};
