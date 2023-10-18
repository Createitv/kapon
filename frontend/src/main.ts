/** @format */

import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
import 'virtual:uno.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// @ts-ignore
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue))
	app.component(key, component)

app.use(pinia)
app.mount('#app')
