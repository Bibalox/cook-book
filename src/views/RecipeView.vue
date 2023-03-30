<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="recipe-view">
    <router-link to="/">
      <button>
        Go back
      </button>
    </router-link>
  </div>
</template>

<style lang="scss">
.recipe-view {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>