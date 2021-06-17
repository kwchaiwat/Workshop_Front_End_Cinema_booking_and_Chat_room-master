<template>
  <div>
    <ToolbarBackToLogin/>
    <Register />
  </div>
</template>

<script>
import Register from '../components/Register.vue'
import ToolbarBackToLogin from '../components/ToolbarBackToLogin.vue'

export default {
  components: {
    Register,
    ToolbarBackToLogin
  }
}
</script>
