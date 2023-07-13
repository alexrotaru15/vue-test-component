import { ref as g, openBlock as l, createElementBlock as d, Fragment as u, createElementVNode as _, toDisplayString as h, pushScopeId as m, popScopeId as i, resolveComponent as s, createVNode as c, withCtx as p, createTextVNode as r } from "vue";
const v = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [t, a] of n)
    o[t] = a;
  return o;
}, f = (e) => (m("data-v-18ccd6b8"), e = e(), i(), e), x = /* @__PURE__ */ f(() => /* @__PURE__ */ _("div", { class: "card" }, "aceasta este noua componenta", -1)), y = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(e) {
    return g(0), (n, o) => (l(), d(u, null, [
      _("h1", null, h(e.msg), 1),
      x
    ], 64));
  }
}, I = /* @__PURE__ */ v(y, [["__scopeId", "data-v-18ccd6b8"]]);
const S = (e) => (m("data-v-64a2858c"), e = e(), i(), e), b = /* @__PURE__ */ S(() => /* @__PURE__ */ _("p", null, "end component noua", -1)), k = {
  __name: "App",
  setup(e) {
    return (n, o) => {
      const t = s("router-link"), a = s("router-view");
      return l(), d(u, null, [
        c(I, { msg: "Componenta noua" }),
        _("p", null, [
          c(t, { to: "/" }, {
            default: p(() => [
              r("Go to Home")
            ]),
            _: 1
          }),
          c(t, { to: "/about" }, {
            default: p(() => [
              r("Go to About")
            ]),
            _: 1
          })
        ]),
        c(a),
        b
      ], 64);
    };
  }
}, A = /* @__PURE__ */ v(k, [["__scopeId", "data-v-64a2858c"]]);
export {
  A as App
};
