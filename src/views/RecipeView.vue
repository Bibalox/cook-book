<script setup>
import { reactive } from 'vue'

import BackgroundImage from '../components/BackgroundImage.vue';
import BackButton from '../components/BackButton.vue'
import IngredientItem from '../components/IngredientItem.vue'
import RecipeProcedure from '../components/RecipeProcedure.vue';

const ingredientList = reactive([
  '5 oeufs',
  '1/2l de lait',
  '100g de sucre (pour le caramel)',
  '80g de sucre (pour la crème)',
  '20g de sucre vanillé'
])
</script>

<template>
  <main class="recipe-view">
    <background-image src="/temp/creme-caramel.jpeg" />
    <div class="recipe-view__recipe-card">
      <back-button />
      <h1 class="recipe-view__title recipe-view__title--large title-lg">
        Crème caramel
      </h1>
      <section class="recipe-view__section">
        <aside class="recipe-view__ingredient-list">
          <h2 class="title-md">
            Ingrédients
          </h2>
          <ingredient-item
            v-for="(ingredient, index) in ingredientList"
            :key="index"
            :label="ingredient"
          />
        </aside>
        <recipe-procedure />
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.recipe-view {
  align-items: center;
  box-sizing: border-box;
  color: var(--grey-solid-80);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: calc(env(safe-area-inset-top) + 56px) 56px 56px;
  position: relative;

  @media (max-width: 1000px) {
    padding: calc(env(safe-area-inset-top) + 32px) 56px 32px;
  }

  @media (max-width: 700px) {
    padding: calc(env(safe-area-inset-top) + 8px) 16px 16px;
    gap: 48px;
  }

  &__recipe-card {
    align-items: flex-start;
    border-radius: 28px;
    background-color: var(--base-50);
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 900px;
    padding: 48px 56px;
    width: 100%;

    @media (max-width: 700px) {
      border-radius: 20px;
      gap: 24px;
      padding: 32px;
    }
  }

  &__title {
    color: var(--accent-solid-50);
  }

  &__section {
    display: flex;
    gap: 72px;

    @media (max-width: 1000px) {
      gap: 56px;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 24px;
    }
  }

  &__ingredient-list {
    flex-shrink: 0;
    width: 200px;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
}
</style>