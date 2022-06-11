import App from './App.vue'
import {createApp} from "vue";
import router from "@/router";
import VueScroller from "vue-scroller/src";
const app=createApp(App)
app.use(router)
app.use(VueScroller)
app.mount('#app');
