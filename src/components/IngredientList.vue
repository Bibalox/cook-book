<script setup>
import IngredientItem from './IngredientItem.vue'

defineProps({
  list: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <aside class="ingredient-list">
    <h2 class="title-md">
      Ingrédients
    </h2>
    <ingredient-item
      v-for="(ingredient, index) in list"
      :key="index"
      :label="ingredient"
    />
  </aside>
</template>

<style lang="scss">
.ingredient-list {
  color: var(--grey-solid-80);
  flex-shrink: 0;
  width: 200px;

  @media (max-width: 700px) {
    width: 100%;
  }
}
</style>