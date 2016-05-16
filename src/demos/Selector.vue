<template>
<div>
  <group title="Default">
    <selector title="message"
    :value.sync="selector1.value"
    :options="selector1.options"></selector>
  </group>
</div>
</template>

<script>
import { Selector, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    Selector,
    Group
  },
  data () {
    return {
      selector1: {
        value: '1',
        options: [{
          text: '选项1',
          value: '1'
        }, {
          text: '选项2',
          value: '2'
        }]
      }
    }
  }
}
</script>
