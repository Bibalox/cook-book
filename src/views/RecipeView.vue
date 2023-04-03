<script setup>
import { reactive } from 'vue'

import BackgroundImage from '../components/BackgroundImage.vue';
import BackButton from '../components/BackButton.vue'
import IngredientList from '../components/IngredientList.vue';
import RecipeProcedure from '../components/RecipeProcedure.vue';

const ingredients = reactive([
  '5 oeufs',
  '1/2l de lait',
  '100g de sucre (pour le caramel)',
  '80g de sucre (pour la crème)',
  '20g de sucre vanillé'
])

const procedure = reactive([
  {
    title: 'Caramel',
    paragraphs: [
      'Verser le sucre dans une casserole et couvrir d’eau. Faire chauffer à feu doux jusqu’à obtenir un caramel liquide avec une belle coloration.'
    ]
  },
  {
    title: 'Crème',
    paragraphs: [
      'Verser le lait dans une casserole et faire chauffer jusqu’à 40°C environ.',
      'Verser le sucre, le sucre vanillé et les oeufs dans un bol et mélanger au fouet. Verser ensuite le lait et mélanger le tout.'
    ]
  },
  {
    title: 'Montage et cuisson',
    paragraphs: [
      'Verser le caramel au fond des ramequins, le laisser refroidir au frais avant de verser la crème.',
      'Verser la crème dans les ramequins (à la louche pour éviter de mélanger le caramel.',
      'Faire cuire 40 minutes au bain marie (l’eau à mi-hauteur des ramequins) dans un four à 150°C.',
      'Faire refroidir avant de démouler.'
    ]
  }
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
      <section class="recipe-view__content">
        <ingredient-list :list="ingredients" />
        <recipe-procedure :procedure="procedure" />
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.recipe-view {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  padding: calc(env(safe-area-inset-top) + 56px) 56px 56px;
  position: relative;

  @media (max-width: 1000px) {
    padding: calc(env(safe-area-inset-top) + 32px) 56px 32px;
  }

  @media (max-width: 700px) {
    padding: calc(env(safe-area-inset-top) + 8px) 16px 8px;
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
    flex: 1;
    max-width: 900px;
    overflow-y: auto;
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

  &__content {
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
}
</style>