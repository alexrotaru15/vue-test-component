import { About, Contact, Home } from "./";

export default {
  install: (app) => {
    app.component("About", About);
    app.component("Contact", Contact);
    app.component("Home", Home);
  },
};

export { About, Contact, Home };
