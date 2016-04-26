<template>
<div>
  <group title="Default"></group>
  <m-button>submit</m-button>
  <m-button type="primary">primary</m-button>
  <m-button type="warn">Delete</m-button>

  <group title="Default"></group>
  <m-button disabled>disable submit</m-button>
  <m-button type="primary" disabled>disable primary</m-button>
  <m-button type="warn" disabled>disable Delete</m-button>
</div>
</template>

<script>
import { MButton, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    MButton,
    Group
  },
  data () {
    return {}
  }
}
</script>
