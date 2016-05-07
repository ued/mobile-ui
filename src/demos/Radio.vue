<template>
<div>
  <group title="Default">
    <radio :options="radio1.options" :value.sync="radio1.value"></radio>
  </group>
  <group title="inlineDesc">
    <radio :options="radio2.options" :value.sync="radio2.value"></radio>
  </group>
</div>
</template>

<script>
import { Radio, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    Radio,
    Group
  },
  data () {
    return {
      radio1: {
        options: [{
          text: '选项1',
          value: '001'
        }, {
          text: '选项2',
          value: '002'
        }],
        value: '002'
      },
      radio2: {
        options: [{
          text: '选项1',
          value: '001',
          inlineDesc: '一些描述补充'
        }, {
          text: '选项2',
          value: '002'
        }],
        value: '002'
      }
    }
  }
}
</script>
