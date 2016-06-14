<template>
  <div class="mui-number">
    <span
    @click="decrease()"
    :class="['mui-number-decrease', {
      'mui-number-disabled': checkDisabledDecr
    }]">-</span>
    <input number v-model="value" class="mui-number-input" :style="{width: width+'px'}" pattern="[0-9]*" :disabled="disabled" :placeholder="placeholder"/>
    <span
    @click="increase()"
    :class="['mui-number-increase', {
      'mui-number-disabled': checkDisabledIncr
    }]">+</span>
  </div>
</template>

<script>
export default {
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
      if (!this.checkDisabledDecr) this.value -= this.step
    },
    increase () {
      if (!this.checkDisabledIncr) this.value += this.step
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
