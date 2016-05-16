<template>
  <div v-show="show" transition="popup" :style="{height:height}" class="mui-popup">
    <slot></slot>
  </div>
</template>

<script>
import Popup from './popup'
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  ready () {
    var _this = this
    this.popup = new Popup({
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
    _this.show ? this.popup.show() : this.popup.hide()
  },
  watch: {
    show: function (val) {
      if (val) {
        this.popup.show()
      } else {
        this.popup.hide()
      }
    }
  },
  beforeDestroy () {
    this.popup.destroy()
  }
}
</script>

<style>
.popup-dialog {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fbf9fe;
  z-index: 101;
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}
.popup-mask {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  z-index: -1;
}
.popup-mask.show {
  opacity: 1;
  z-index: 100;
}
.popup-transiton {
}
.popup-enter {
  background-color:red;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}
.popup-leave {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}
</style>
