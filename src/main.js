import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

const vuetify = createVuetify({
  components,
  directives,

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

//axios

import axios from "axios";
import VueAxios from "vue-axios";

// bootstrap

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);

app.mount("#app");
