<template>
  <flexbox class="mui-header" :margin-left="0">
    <flexbox-item class="mui-header-left">
      <slot name="left">
        <div class="mui-header-back" @click="handlerBackClick()">
          {{ backText }}
        </div>
      </slot>
    </flexbox-item>
    <flexbox-item class="mui-header-middle">
      <slot>
        <h1 class="mui-header-title">
          {{ title }}
        </h1>
      </slot>
    </flexbox-item>
    <flexbox-item class="mui-header-right">
      <slot name="right"></slot>
    </flexbox-item>
  </flexbox>
</template>

<script>
import Flexbox from '../flexbox'
import FlexboxItem from '../flexbox-item'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  props: {
    title: {
      type: String
    },
    backText: {
      type: String
    },
    backCb: {
      type: Function
    }
  },
  methods: {
    handlerBackClick () {
      this.backCb ? this.backCb() : window.history.back()
    }
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
