import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/Student'
import './assets/css.css'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
.use(router)
.use(store)
.mount('#app')
