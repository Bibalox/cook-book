<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view />
</template>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  #app {
    height: 100%;
    min-height: 100vh;
  } 
</style>