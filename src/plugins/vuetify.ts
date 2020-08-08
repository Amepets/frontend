import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import pt from "vuetify/src/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        "blue-variant-one": "#3941fb",
        "blue-variant-two": "#3995fb",
        "blue-variant-three": "#49cbfc",
        black: "#101010",
        "grey-variant-one": "#4f4e50",
        "grey-variant-two": "#7b7685",
        "grey-variant-three": "#f2f2f2",
        "grey-variant-four": "#f5f5f5",
        white: "#ffffff",
        green: "#00bc8a",
        pink: "#f15ba2",
        yellow: "#f9dc32",
        red: "#f62e68"
      }
    }
  },
  lang: {
    locales: { pt },
    current: "pt-br"
  },
  icons: {
    iconfont: "md"
  }
});
