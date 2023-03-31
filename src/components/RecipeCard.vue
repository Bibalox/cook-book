<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  thumbnail: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <router-link :to="to">
    <div class="recipe-card">
      <img
        class="recipe-card__thumbnail"
        :src="thumbnail"
      >
      <div class="recipe-card__info-overlay">
        <span
          class="recipe-card__type label-sm"
          v-text="type"
        />
        <span
          class="recipe-card__name label-lg"
          v-text="name"
        />
      </div>
    </div>
  </router-link>
</template>

<style lang="scss">
.recipe-card {
  border-radius: 12px;
  cursor: pointer;
  height: 240px;
  overflow: hidden;
  position: relative;
  transition: box-shadow .2s;
  width: 100%;

  @media (max-width: 1000px) {
    border-radius: 8px;
    height: 200px;
  }

  @media (max-width: 700px) {
    border-radius: 8px;
    height: 128px;
  }

  &:hover {
    box-shadow: 0 0 0 6px var(--accent-solid-50);
  }

  &__thumbnail {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &__info-overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--grey-transparent-90) 100%);
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 50%;
    justify-content: flex-end;
    position: absolute;
    padding: 16px;
    width: 100%;
  }
  
  &__type {
    color: var(--accent-solid-50);
  }

  &__name {
    color: var(--grey-solid-10);
  }
}
</style>