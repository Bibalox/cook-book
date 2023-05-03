<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import fetchData from '../utils/fetchData.js'

import BackgroundImage from '../components/BackgroundImage.vue';
import BackButton from '../components/BackButton.vue'
import IngredientList from '../components/IngredientList.vue';
import RecipeProcedure from '../components/RecipeProcedure.vue';

const recipe = reactive({
  ready: false
})

const route = useRoute()

const query = `{
  receipe(id: "${route.params.id}") {
    title
    thumbnail {
      url
    }
    ingredients
    procedure {
      json
    }
  }
}`

const init = async () => {
  try {
    const response = await fetchData(query, 'receipe')
    Object.assign(recipe, {
      ready: true,
      thumbnail: response.thumbnail.url,
      title: response.title,
      ingredients: response.ingredients,
      procedure: buildProcedure(response.procedure['json']['content'])
    })
  } catch (error) {
    console.error(error)
  }
}

const buildProcedure = content => {
  let procedure = ''

  content.forEach(node => {
    if (node['nodeType'] === 'heading-2') {
      procedure += `<h2 class="title-md">${node['content'][0]['value']}</h2>`
    } else {
      procedure += `<p class="paragraph">${node['content'][0]['value']}</p>`
    }
  })

  return procedure
}

init()
</script>

<template>
  <transition>
    <main v-if="recipe.ready" class="recipe-view">
      <background-image :src="recipe.thumbnail" />
      <div class="recipe-view__recipe-card">
        <back-button />
        <h1
          class="recipe-view__title recipe-view__title--large title-lg"
          v-text="recipe.title"
        />
        <section class="recipe-view__content">
          <ingredient-list :list="recipe.ingredients" />
          <recipe-procedure :procedure="recipe.procedure" />
        </section>
      </div>
    </main>
  </transition>
</template>

<style lang="scss">
.recipe-view {
  $padding-x: 56px;

  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  padding: calc(env(safe-area-inset-top) + $padding-x) 56px calc(env(safe-area-inset-bottom) + $padding-x);
  position: relative;

  @media (max-width: 1000px) {
    $padding-x: 32px;
    padding: calc(env(safe-area-inset-top) + $padding-x) 56px calc(env(safe-area-inset-bottom) + $padding-x);
  }

  @media (max-width: 700px) {
    $padding-x: 16px;
    padding: calc(env(safe-area-inset-top) + $padding-x) 16px calc(env(safe-area-inset-bottom) + $padding-x);
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
    overflow: hidden auto;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s .15s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>