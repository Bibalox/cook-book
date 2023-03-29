<script setup>
import BackgroundImage from '../components/BackgroundImage.vue';
</script>

<template>
  <main class="home">
    <background-image
      src="/home-background.jpeg"
      blurry
    />
    <span>Hello world!</span>
  </main>
</template>

<style lang="scss">
  .home {
    height: 100%;
    position: relative;
  }
</style>