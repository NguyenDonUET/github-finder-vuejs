import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "@/router";
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";
// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueAwesomePaginate);
app.mount("#app");
