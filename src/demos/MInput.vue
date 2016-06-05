<template>
<div>
  <group title="Default">
    <m-input title="message" placeholder="placeholder" @input="handlerInput($event.target.value)"></m-input>
  </group>
  <group title="清除按钮">
    <m-input title="标题" placeholder="写点什么" value="右边有清除"></m-input>
  </group>
  <group title="数字键盘">
    <m-input title="数字" placeholder="写点什么" value="12" type="number" keyboard="number"></m-input>
  </group>
  <group title="Disabled">
    <m-input title="提示" placeholder="写点什么" value="不可以修改哟" :disabled="true"></m-input>
  </group>
</div>
</template>

<script>
import { MInput, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    MInput,
    Group
  },
  methods: {
    handlerInput (...params) {
      console.log(params)
    }
  },
  data () {
    return {}
  }
}
</script>
