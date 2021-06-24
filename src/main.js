import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "firebase/auth";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;
require("@/assets/main.scss");

// firebaseConfig auto generated in project settings
firebase.initializeApp({
  apiKey: "AIzaSyDBOPTlkjhImBuw78lAzyd2bjazdr0Lo6U",
  authDomain: "kwankwan-94b21.firebaseapp.com",
  projectId: "kwankwan-94b21",
  storageBucket: "kwankwan-94b21.appspot.com",
  messagingSenderId: "766248742579",
  appId: "1:766248742579:web:7ce4a472339820bec04ac6",
  measurementId: "G-ZM2VK3E9DK",
});

// Make firebase use browser's default language
firebase.auth().useDeviceLanguage();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
