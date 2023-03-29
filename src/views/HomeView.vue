<script setup>
import BackgroundImage from '../components/BackgroundImage.vue';
</script>

<template>
  <main class="home">
    <span>Hello world!</span>
    <background-image
      src="/home-background.jpeg"
      blurry
    />
  </main>
</template>

<style lang="scss">
  .home {
    height: 100%;
    position: relative;
  }
</style>