<template>
<div>
  <flexbox :margin-left=0>
    <flexbox-item v-for="(index, one) in list" style="margin-left:0;">
      <div class="item-{{index}}">{{one}}</div>
    </flexbox-item>
  </flexbox>
</div>
</template>

<script>
import { Flexbox, FlexboxItem } from '../components/'

export default {
  ready () {
  },
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 0]
    }
  }
}
</script>
