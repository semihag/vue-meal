import { createApp } from "vue";
import { createStore} from "vuex"
import App from "./App.vue";
import router from "./router";
import storeJs from "./store/store"

const store = createStore({ modules : { storeJs }});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");