import { ref as a, openBlock as o, createElementBlock as r, Fragment as l, createElementVNode as _, toDisplayString as d, pushScopeId as u, popScopeId as m, createBlock as i } from "vue";
const n = (e, t) => {
  const c = e.__vccOpts || e;
  for (const [s, p] of t)
    c[s] = p;
  return c;
}, v = (e) => (u("data-v-18ccd6b8"), e = e(), m(), e), g = /* @__PURE__ */ v(() => /* @__PURE__ */ _("div", { class: "card" }, "aceasta este noua componenta", -1)), f = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(e) {
    return a(0), (t, c) => (o(), r(l, null, [
      _("h1", null, d(e.msg), 1),
      g
    ], 64));
  }
}, h = /* @__PURE__ */ n(f, [["__scopeId", "data-v-18ccd6b8"]]);
const x = {
  __name: "App",
  setup(e) {
    return (t, c) => (o(), i(h, { msg: "Componenta noua" }));
  }
}, I = /* @__PURE__ */ n(x, [["__scopeId", "data-v-94c93cf2"]]);
export {
  I as App
};
