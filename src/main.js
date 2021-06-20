import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { firestorePlugin } from "vuefire";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(firestorePlugin);

Vue.config.productionTip = false;
require("@/assets/main.scss");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
