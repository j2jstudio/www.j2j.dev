import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@csstools/normalize.css'
import 'virtual:uno.css'
import '@/assets/base.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
