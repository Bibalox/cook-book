<script setup>
import { reactive, computed } from 'vue'
import fetchData from '../utils/fetchData.js'

import SegmentedControls from '../components/SegmentedControls.vue'
import RecipeCard from '../components/RecipeCard.vue'

const activeFilter = reactive({
  id: 0,
  type: 'Tout'
})

const recipeList = reactive({
  ready: false,
  value: []
})

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

const query = `{
  receipeCollection(order: [title_ASC]) {
    items {
      sys {
        id
      }
      title
      type
      thumbnail {
        url
      }
    }
  }
}`

const filteredRecipes = computed(() => {
  return recipeList.value.filter(recipe => activeFilter.type === 'Tout' || recipe.type === activeFilter.type)
})

const init = async () => {
  try {
    const response = await fetchData(query, 'receipeCollection')
    recipeList.value = response.items
    recipeList.ready = true
  } catch (error) {
    console.error(error)
  }
}

init()
</script>

<template>
  <main class="home-view">
    <segmented-controls
      :active-control="activeFilter.id"
      @click-on-control="(control) => changeActiveFilter(control)"
    />
    <section v-if="recipeList.ready" class="home-view__recipe-grid">
      <recipe-card
        v-for="recipe in filteredRecipes"
        :key="recipe.sys.id"
        :title="recipe.title"
        :type="recipe.type"
        :thumbnail="recipe.thumbnail.url"
        :to="`/recipe/${recipe.sys.id}`"
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
  height: 100%;
  overflow-y: auto;
  padding: calc(env(safe-area-inset-top) + 80px) 56px 80px;

  @media (max-width: 1000px) {
    padding: calc(env(safe-area-inset-top) + 56px) 56px 56px;
  }

  @media (max-width: 700px) {
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

    @media (max-width: 700px) {
      border-radius: 20px;
      gap: 16px;
      padding: 16px;
    }
  }
}
</style>