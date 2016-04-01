import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Datetime from './demos/Datetime'
import Picker from './demos/Picker'

Vue.use(Router)

const router = new Router({
  history: false, // use history=false when testing
  saveScrollPosition: true
})

router.map({
  '/components/datetime': {
    component: Datetime
  },
  '/components/picker': {
    component: Picker
  }
})

router.start(App, '#app')
