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
  <group title="disable">
    <radio-option-circle
    v-for="option in radio1.options"
    :value.sync="radio1.value"
    :option-value="option.value"
    :disabled="true">
      {{ option.text }}<br/>
      <p>自定义你的内容</p>
    </radio-option-circle>
  </group>
  <group title="取消选中(需要特殊处理)">
    <radio-option-circle
    v-for="option in radio2.options"
    :value.sync="radio2.value"
    :option-value="option.value"
    :disabled="true"
    @click="changeValue(option.value)">
      {{ option.text }}<br/>
      <p>点击选中项，可以取消选中</p>
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
          value: 1
        }, {
          text: '选项2',
          value: 2
        }],
        value: 1
      },
      radio2: {
        options: [{
          text: '选项1',
          value: '001'
        }, {
          text: '选项2',
          value: '002'
        }],
        value: '002'
      }
    }
  },
  methods: {
    changeValue (optionValue) {
      if (this.radio2.value === optionValue) {
        this.radio2.value = ''
      } else {
        this.radio2.value = optionValue
      }
    }
  }
}
</script>
