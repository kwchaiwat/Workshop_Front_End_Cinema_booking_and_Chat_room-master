<template>
  <div>
    <v-toolbar app style="background-color:#FF5722">
      <v-btn dark icon @click="Login()">
        <v-icon color="black">chevron_left</v-icon><h3 style="color:#000000">Back</h3>
      </v-btn>
      <v-toolbar-title class="headline text-uppercase"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>


<script>
export default {
  methods: {
    Login() {
      this.$router.push('/')
    }
  }
}
</script>
