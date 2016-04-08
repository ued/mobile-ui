import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Datetime from './demos/Datetime'
import Dialog from './demos/Dialog'
import Flexbox from './demos/Flexbox'
import Picker from './demos/Picker'
import Popup from './demos/Popup'

Vue.use(Router)

const router = new Router({
  history: false, // use history=false when testing
  saveScrollPosition: true
})

router.map({
  '/components/datetime': {
    component: Datetime
  },
  '/components/dialog': {
    component: Dialog
  },
  '/components/flexbox': {
    component: Flexbox
  },
  '/components/picker': {
    component: Picker
  },
  '/components/popup': {
    component: Popup
  }
})

router.start(App, '#app')
