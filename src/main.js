import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import "wired-elements";
// import axios from 'axios'

createApp(App).use(router).use(ElementPlus).mount('#app')