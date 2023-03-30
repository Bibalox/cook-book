<script setup>
import { reactive, computed } from 'vue'

import BackgroundImage from '../components/BackgroundImage.vue'
import SegmentedControls from '../components/SegmentedControls.vue'
import RecipeCard from '../components/RecipeCard.vue'

const activeFilter = reactive({
  id: 0,
  type: 'Tout'
})

const recipes = reactive([
  {
    id: '1',
    thumbnail: '/temp/cake-sale.jpeg',
    to: 'recipe',
    type: 'Salé',
    name: 'Cake tomate basilic'
  },
  {
    id: '2',
    thumbnail: '/temp/creme-caramel.jpeg',
    to: 'recipe',
    type: 'Sucré',
    name: 'Crème caramel'
  },
  {
    id: '3',
    thumbnail: '/temp/gauffres.jpeg',
    to: 'recipe',
    type: 'Sucré',
    name: 'Gauffres'
  },
  {
    id: '4',
    thumbnail: '/temp/lasagnes-chevre.jpg',
    to: 'recipe',
    type: 'Salé',
    name: 'Lasagnes chèvre épinards'
  },
  {
    id: '5',
    thumbnail: '/temp/oeuf-brioche.jpg',
    to: 'recipe',
    type: 'Salé',
    name: 'Oeuf brioche'
  },
  {
    id: '6',
    thumbnail: '/temp/quiche-lorraine.jpeg',
    to: 'recipe',
    type: 'Salé',
    name: 'Quiche lorraine'
  },
  {
    id: '7',
    thumbnail: '/temp/quiche-poireaux.jpg',
    to: 'recipe',
    type: 'Salé',
    name: 'Quiche aux poireaux'
  },
  {
    id: '8',
    thumbnail: '/temp/risotto.jpeg',
    to: 'recipe',
    type: 'Salé',
    name: 'Risotto aux poireaux'
  }
])

const changeActiveFilter = control => {
  activeFilter.id = control
  switch (control) {
    case 0:
      activeFilter.type = 'Tout'
      break
    case 1:
      activeFilter.type = 'Salé'
      break
    case 2:
      activeFilter.type = 'Sucré'
      break
    default:
      activeFilter.type = 'Tout'
  }
}

const filteredRecipes = computed(() => {
  return recipes.filter(recipe => activeFilter.type === 'Tout' || recipe.type === activeFilter.type)
})
</script>

<template>
  <main class="home-view">
    <background-image
      src="/images/home-background.jpeg"
      blurry
    />
    <segmented-controls
      :active-control="activeFilter.id"
      @click-on-control="(control) => changeActiveFilter(control)"
    />
    <section class="home-view__recipe-grid">
      <recipe-card
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :thumbnail="recipe.thumbnail"
        :to="recipe.to"
        :type="recipe.type"
        :name="recipe.name"
      />
    </section>
  </main>
</template>

<style lang="scss">
.home-view {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 64px;
  min-height: 100%;
  padding: calc(env(safe-area-inset-top) + 78px) 56px 78px;
  position: relative;

  @media (max-width: 1000px) {
    padding: calc(env(safe-area-inset-top) + 56px) 56px 56px;
  }

  @media (max-width: 600px) {
    padding: calc(env(safe-area-inset-top) + 24px) 16px 24px;
    gap: 32px;
  }

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

    @media (max-width: 600px) {
      border-radius: 20px;
      gap: 16px;
      padding: 16px;
    }
  }
}
</style>