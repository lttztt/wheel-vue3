import {createWebHashHistory, createRouter} from 'vue-router'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'


const history = createWebHashHistory()

export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', component: ButtonDemo},
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'dialog', component: DialogDemo }
      ]
    },
  ]
})