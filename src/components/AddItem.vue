<template>
  <v-btn block color="primary" dark @click="newItem">New Item</v-btn>
</template>
<script>
import { EventBus } from '../EventBus'
export default {
  methods: {
    newItem () {
      EventBus.$emit('newItem')
    }
  }
}
</script>

