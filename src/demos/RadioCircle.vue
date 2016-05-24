<template>
<div>
  <group title="Default">
    <radio-option-circle
    v-for="option in radio1.options"
    :value.sync="radio1.value"
    :option-value="option.value">
      {{ option.text }}<br/>
      <p>自定义你的内容</p>
    </radio-option-circle>
  </group>
</div>
</template>

<script>
import { RadioOptionCircle, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    RadioOptionCircle,
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
