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
    touch-action: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .safe-area-cover {
    background: linear-gradient(180deg, rgba(0, 0, 0, .5) 10%, rgba(0, 0, 0, 0) 90%);
    height: env(safe-area-inset-top);
    position: fixed;
    width: 100%;
    z-index: 9999;
    // margin: env(safe-area-inset-right);
    // // you can also use fallback values
    // padding: env(safe-area-inset-bottom, 20px);
  }

  #app {
    height: 100%;
    min-height: 100vh;
  } 
</style>