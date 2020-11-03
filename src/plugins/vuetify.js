import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#4caf50",
        secondary: "#673ab7",
        accent: "#cddc39",
        error: "#f44336",
        warning: "#ff5722",
        info: "#f0f0f0",
        success: "#8bc34a",
      },
    },
  },
});
