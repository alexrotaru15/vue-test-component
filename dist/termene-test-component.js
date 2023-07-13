import { ref as i, openBlock as c, createElementBlock as _, Fragment as p, createElementVNode as s, toDisplayString as h, pushScopeId as u, popScopeId as l, resolveComponent as d, createVNode as a, withCtx as f, createTextVNode as v } from "vue";
import { useRouter as b, useRoute as x, createRouter as g, createWebHashHistory as y } from "vue-router";
const r = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, m] of t)
    o[n] = m;
  return o;
}, H = (e) => (u("data-v-18ccd6b8"), e = e(), l(), e), w = /* @__PURE__ */ H(() => /* @__PURE__ */ s("div", { class: "card" }, "aceasta este noua componenta", -1)), A = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(e) {
    return i(0), (t, o) => (c(), _(p, null, [
      s("h1", null, h(e.msg), 1),
      w
    ], 64));
  }
}, I = /* @__PURE__ */ r(A, [["__scopeId", "data-v-18ccd6b8"]]);
const S = (e) => (u("data-v-f15dae4a"), e = e(), l(), e), $ = { class: "awala" }, k = /* @__PURE__ */ S(() => /* @__PURE__ */ s("p", null, "end component noua", -1)), C = {
  __name: "App",
  setup(e) {
    return (t, o) => {
      const n = d("router-view");
      return c(), _("div", $, [
        a(I, { msg: "Componenta noua" }),
        a(n),
        k
      ]);
    };
  }
}, F = /* @__PURE__ */ r(C, [["__scopeId", "data-v-f15dae4a"]]), W = /* @__PURE__ */ s("h2", null, "Home", -1), N = {
  __name: "Home",
  setup(e) {
    return b(), x(), (t, o) => {
      const n = d("router-link");
      return c(), _(p, null, [
        W,
        a(n, { to: "about" }, {
          default: f(() => [
            v("about")
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
  { path: "/", component: N },
  { path: "/about", name: "about", component: B }
], O = g({
  history: y(),
  routes: E
});
export {
  F as TestComponentApp,
  O as router
};
