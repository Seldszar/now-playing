import Vue from "vue";
import WebFont from "webfontloader";
import App from "./App.vue";

const app = new Vue({
  render: h => h(App)
});

WebFont.load({
  classes: false,
  google: {
    families: ["Montserrat:400,700"]
  },
  active: () => {
    app.$mount("#app");
  }
});
