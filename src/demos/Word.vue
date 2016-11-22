<template>
<div style="padding: 0 15px;">
  <group title="正常类"></group>
  <tag>新春特惠1234567809</tag>
  <tag type="green">新春特惠</tag>
  <tag type="gray">新春特惠</tag>
  <tag type="purple">新春特惠</tag>

  <group title="line类"></group>
  <tag line>新春特惠</tag>
  <tag type="green" line>新春特惠</tag>
  <tag type="gray" line>新春特惠</tag>
  <tag type="purple" line>新春特惠</tag>

</div>
</template>

<script>
import { Tag, Group } from '../components/'

export default {
  components: {
    Tag,
    Group
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">

</style>
