<script setup>
import { RouterView } from 'vue-router'
import './variables/colors.scss'
import './variables/fonts.scss'

import BackgroundImage from './components/BackgroundImage.vue'

const init = async () => {
  try {
    await navigator.wakeLock.request('screen')
    console.info('Screen wake lock activated')
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
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
body {
  background-color: var(--grey-solid-10);
  margin: 0;
  padding: 0;
  height: 100vh;
}

button, a {
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>