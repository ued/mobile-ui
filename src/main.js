import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import ActionSheet from './demos/ActionSheet'
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
  '/demo/action-sheet': {
    component: ActionSheet
  },
  '/components/datetime': {
    component: Datetime
  },
  '/components/dialog': {
    component: Dialog
  },
  '/demo/flexbox': {
    component: Flexbox
  },
  '/demo/picker': {
    component: Picker
  },
  '/demo/popup': {
    component: Popup
  }
})

router.start(App, '#app')
