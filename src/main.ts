import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Lqve from './components/Lqve.vue'
import Lqve2 from './components/Lqve2.vue'

import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Lqve
    },
    {
      path: '/xxx',
      component: Lqve2
    },
  ]
})

const app = createApp(App);
app.use(router)
app.mount('#app')
