<script setup>
import { ref } from 'vue'

import BackgroundImage from '../components/BackgroundImage.vue'
import SegmentedControls from '../components/SegmentedControls.vue'
import RecipeCard from '../components/RecipeCard.vue'

const activeFilter = ref(0)

const changeActiveFilter = control => {
  activeFilter.value = control
}
</script>

<template>
  <main class="home-view">
    <segmented-controls
      :active-control="activeFilter"
      @click-on-control="(control) => changeActiveFilter(control)"
    />
    <background-image
      src="/images/home-background.jpeg"
      blurry
    />
    <div class="home-view__recipe-grid">
      <recipe-card
        thumbnail="/temp/cake-sale.jpeg"
        to="recipe"
        type="Salé"
        name="Cake tomate basilic"
      />
      <recipe-card
        thumbnail="/temp/cake-sale.jpeg"
        to="recipe"
        type="Salé"
        name="Cake tomate basilic"
      />
    </div>
  </main>
</template>

<style lang="scss">
  .home-view {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 60px;
    min-height: 100%;
    padding: calc(env(safe-area-inset-top) + 56px) 56px 56px;
    position: relative;

    &__recipe-grid {
      border-radius: 28px;
      background-color: var(--base-50);
      -webkit-backdrop-filter: blur(18px);
      backdrop-filter: blur(18px);
      box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 900px;
      padding: 24px;
      width: 100%;
    }
  }
</style>