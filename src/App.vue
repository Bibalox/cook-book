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

  button, a {
    touch-action: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  #app {
    height: 100%;
    min-height: 100vh;
  } 
</style>