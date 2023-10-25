/** @format */

import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import 'virtual:uno.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// @ts-ignore
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue))
	app.component(key, component)

app.use(pinia).use(router)
app.mount('#app')
