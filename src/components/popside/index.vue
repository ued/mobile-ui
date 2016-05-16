<template>
  <div v-show="show" transition="mui-popside" class="mui-popside-dialog" :style="{height:height, width:width}">
    <slot></slot>
  </div>
</template>

<script>
import Popside from './popside'
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    height: {
      type: String,
      default: document.documentElement.clientHeight + 'px'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  ready () {
    var _this = this
    this.popside = new Popside({
      container: _this.$el,
      innerHTML: '',
      onOpen: function (dialog) {
        _this.show = true
      },
      onClose: function (dialog) {
        _this.show = false
      }
    })
    // 初始化状态
    _this.show ? this.popside.show() : this.popside.hide()
  },
  watch: {
    show: function (val) {
      if (val) {
        this.popside.show()
      } else {
        this.popside.hide()
      }
    }
  }
}
</script>

<style lang="scss">
.mui-popside {
}
.mui-popside-dialog {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background: #fbf9fe;
  z-index: 101;
  box-shadow: -3px 0px 8px 0px rgba(50, 50, 50, 0.75);
  box-sizing: border-box;
}
.mui-popside-transiton {
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}
.mui-popside-enter {
  background-color:red;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
.mui-popside-leave {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
</style>
