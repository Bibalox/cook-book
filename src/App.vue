<script setup>
import { RouterView } from 'vue-router'
import './variables/colors.scss'
import './variables/fonts.scss'
</script>

<template>
  <div class="safe-area-cover" />
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
    //touch-action: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .safe-area-cover {
    background: linear-gradient(180deg, rgba(0, 0, 0, .25) 20%, rgba(0, 0, 0, .1) 60%, rgba(0, 0, 0, 0) 100%);
    //backdrop-filter: blur(10px);
    height: calc(env(safe-area-inset-top) + 30px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
  }

  #app {
    height: 100%;
    min-height: 100vh;
  } 
</style>