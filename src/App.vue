<script setup>
import { RouterView } from 'vue-router'
import './variables/colors.scss'
import './variables/fonts.scss'

import BackgroundImage from './components/BackgroundImage.vue'

const init = async () => {
  try {
    await navigator.wakeLock.request('screen')
  } catch (err) {
    console.error('Screen wake lock cannot be activated')
  }
}

init()
</script>

<template>
  <div class="safe-area-cover" />
  <background-image
    src="/images/home-background.jpeg"
    blurry
  />
  <router-view />
</template>

<style lang="scss">
html {
  height: calc(100% + env(safe-area-inset-top));
}

body {
  background-color: var(--grey-solid-10);
  margin: 0;
  height: 100%;
  padding: 0;
  position: fixed;
  width: 100%;
}

button, a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.safe-area-cover {
  background: linear-gradient(180deg, rgba(0, 0, 0, .25) 20%, rgba(0, 0, 0, .1) 60%, rgba(0, 0, 0, 0) 100%);
  height: calc(env(safe-area-inset-top) + 30px);
  position: fixed;
  top: 0;
  width: 100%;
}

#app {
  height: 100%;
}
</style>