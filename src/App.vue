<script setup>
import { RouterView } from 'vue-router'
import './variables/colors.scss'
import './variables/fonts.scss'
</script>

<template>
  <router-view />
</template>

<style lang="scss">
  body {
    background-color: var(--grey-solid-10);
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  #app {
    height: 100%;
    min-height: 100vh;
  } 
</style>