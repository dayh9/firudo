import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light1: {
        primary: "#4caf50",
        secondary: "#673ab7",
        accent: "#cddc39",
        error: "#f44336",
        warning: "#ff5722",
        info: "#f0f0f0",
        success: "#8bc34a",
      },
      light: {
        primary: "#8FCB9B",
        secondary: "#EAE6E5",
        accent: "#5B9279",
        click: "#4E3B59",
        error: "#ff4b19",
        warning: "#F1A259",
        info: "#ECF0E8",
        success: "#75af8a",
      },
    },
  },
});
