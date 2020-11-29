import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { rtdbPlugin } from "vuefire";
import firebase from "firebase";

Vue.use(rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        store.dispatch("autoSignIn", firebaseUser);
      }
    });
  },
}).$mount("#app");
