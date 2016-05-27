<template>
<div>
  <flexbox>
    <flexbox-item>1</flexbox-item>
  </flexbox>
</div>
</template>

<script>
import Flexbox from '../flexbox'
import FlexboxItem from '../flexbox-item'

export default {
  ready () {
  },
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      test: {}
    }
  }
}
</script>
