import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/icons";

// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   next();
// });

const app = createApp(App).use(router);
app.mount("#app");

