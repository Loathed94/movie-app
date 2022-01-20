import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

createApp.store = store; //??
createApp.router = router; //??
createApp(App).mount('#app')
