import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Index from './demos/Index'
import Tpl from './demos/_Tpl'
import ActionSheet from './demos/ActionSheet'
import Datetime from './demos/Datetime'
import Dialog from './demos/Dialog'
import Flexbox from './demos/Flexbox'
import MButton from './demos/MButton'
import MInput from './demos/MInput'
import MTextarea from './demos/MTextarea'
import Picker from './demos/Picker'
import Popup from './demos/Popup'
import Lesson2 from './demos/Lesson2'

Vue.use(Router)

const router = new Router({
  history: false, // use history=false when testing
  saveScrollPosition: true
})

router.map({

  '/': {
    component: Index
  },
  '/components/_tpl': {
    component: Tpl
  },
  '/components/action-sheet': {
    component: ActionSheet
  },
  '/components/flexbox': {
    component: Flexbox
  },
  '/components/popup': {
    component: Popup
  },
  '/components/datetime': {
    component: Datetime
  },
  '/components/dialog': {
    component: Dialog
  },
  '/components/m-button': {
    component: MButton
  },
  '/components/m-input': {
    component: MInput
  },
  '/components/m-textarea': {
    component: MTextarea
  },
  '/components/picker': {
    component: Picker
  },
  '/aa/l2': {
    component: Lesson2
  }

})

router.start(App, '#app')
