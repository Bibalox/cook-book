<script setup>
import BackgroundImage from '../components/BackgroundImage.vue';
</script>

<template>
  <main class="home title-lg">
    <span>Hello world!</span>
    <background-image
      src="/home-background.jpeg"
      blurry
    />
  </main>
</template>

<style lang="scss">
  .home {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  }
</style>