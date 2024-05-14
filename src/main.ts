/*
 * @Author: your name
 * @Date: 2024-05-08 10:22:48
 * @LastEditors: your name
 * @LastEditTime: 2024-05-10 15:10:04
 * @Description:
 * @FilePath: \demo\src\main.ts
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.mount('#app')
