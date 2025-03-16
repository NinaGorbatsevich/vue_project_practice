import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/products'

import '../src/assets/style/reset.css'

createApp(App).use(store).use(router).mount('#app')
