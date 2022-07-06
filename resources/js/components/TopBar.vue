<template>
  <v-app-bar app flat color="primary" class="px-5">
    <v-app-bar-title class="white--text font-weight-bold">{{user.username}}</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon color="#fff" small @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    logout() {
      this.$store.dispatch('logoutAction')
    }
  }
}
</script>
