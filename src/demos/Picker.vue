<template>
  <div>
    <group-title>1111</group-title>
  </div>
</template>

<script>
import { GroupTitle } from '../components/'

export default {
  ready () {
  },
  components: {
    GroupTitle
  },
  data () {
    return {
      
    }
  },
  methods: {
    change (value) {
      console.log('change', value)
    }
  }
}
</script>

<style>
</style>
