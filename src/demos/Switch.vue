<template>
<div>
  <group title="Default"></group>
  <switch :value.sync="switcher.checked"></switch>

  <group title="Disalbed"></group>
  <switch :value.sync="switcher.checked" :disabled="true"></switch>

  <group title="GroupItem">
    <switch
    :value.sync="switcher2.checked"
    :is-group-item="switcher2.isGroupItem"
    :title="switcher2.title"></switch>
  </group>
</div>
</template>

<script>
import { Switch, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    Switch,
    Group
  },
  data () {
    return {
      switcher: {
        checked: true
      },
      switcher2: {
        checked: true,
        isGroupItem: true,
        title: '开光'
      }
    }
  }
}
</script>
