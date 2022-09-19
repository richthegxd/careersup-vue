import { createApp } from "vue";
import router from "@/router";

// * Root element
import App from "./App.vue";

// * Tailwind styles
import "./assets/tailwind.css";

// * Fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// * Fontawesome icons
import {
  faSearch,
  faBuilding,
  faLocationDot,
  faAngleLeft,
  faAngleRight,
  faAngleDown,
  faLink,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

// * Vuex
import store from "@/store";
import { key } from "@/store";

// * Adding fontawesome icons for common library
library.add(
  faSearch,
  faBuilding,
  faLocationDot,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faLink,
  faBookmark,
  farBookmark
);

createApp(App)
  .use(store, key)
  .use(router)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
