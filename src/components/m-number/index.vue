<template>
  <div class="mui-number">
    <span
    @click="decrease()"
    :class="['mui-number-decrease', {
      'mui-number-disabled': checkDisabledDecr
    }]">-</span>
    <input number
    v-model="value"
    class="mui-number-input"
    :style="{width: width+'px'}"
    pattern="[0-9]*"
    :disabled="disabled"
    :placeholder="placeholder"
    @blur="handlerBlur"/>
    <span
    @click="increase()"
    :class="['mui-number-increase', {
      'mui-number-disabled': checkDisabledIncr
    }]">+</span>
  </div>
</template>

<script>
export default {
  ready () {
    let parentEl = this.$parent.$el

    if (parentEl.className.indexOf('mui-group-item') > -1 &&
    parentEl.className.indexOf('mui-group-item-number') === -1) {
      parentEl.className += ' mui-group-item-number'
    }
  },
  props: {
    width: {
      type: Number,
      default: 50
    },
    step: {
      type: Number,
      default: 1
    },
    placeholder: String,
    value: {
      type: Number,
      default: 0
    },
    min: Number,
    max: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    disabledDecrease: {
      type: Boolean,
      default: false
    },
    disabledIncrease: {
      type: Boolean,
      default: false
    },
    onIncrease: Function,
    onDecrease: Function
  },
  watch: {
    value (newVal, oldVal) {
      if (newVal > this.max) this.value = this.max
      if (newVal < this.min) this.value = this.min
    }
  },
  computed: {
    checkDisabledDecr () {
      return this.disabledDecrease || this.value <= this.min
    },
    checkDisabledIncr () {
      return this.disabledIncrease || this.value >= this.max
    }
  },
  methods: {
    decrease () {
      if (!this.checkDisabledDecr) {
        this.value -= this.step
        this.onDecrease && this.onDecrease(this.value)
        this.$dispatch('mui-change', this.value)
      }
    },
    increase () {
      if (!this.checkDisabledIncr) {
        this.value += this.step
        this.onIncrease && this.onIncrease(this.value)
        this.$dispatch('mui-change', this.value)
      }
    },
    handlerBlur () {
      this.$dispatch('blur', this.value)
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
@import "./style.less";
</style>
