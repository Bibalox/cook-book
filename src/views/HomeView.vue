<script setup>
import { ref } from 'vue'
import BackgroundImage from '../components/BackgroundImage.vue'
import SegmentedControls from '../components/SegmentedControls.vue'

const activeFilter = ref(0)

const changeActiveFilter = control => {
  activeFilter.value = control
}
</script>

<template>
  <main class="home">
    <segmented-controls
      :active-control="activeFilter"
      @click-on-control="(control) => changeActiveFilter(control)"
    />
    <background-image
      src="/home-background.jpeg"
      blurry
    />
  </main>
</template>

<style lang="scss">
  .home {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: calc(env(safe-area-inset-top) + 56px) 56px 56px;
    position: relative;
  }
</style>