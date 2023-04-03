<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <router-link
    to="/"
    class="back-button"
  >
    <svg
      class="back-button__icon"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3.5L5 8.5L10 13.5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="back-button__label label-md">
      Retour
    </span>
  </router-link>
</template>

<style lang="scss">
.back-button {
  align-items: center;
  background-color: var(--grey-transparent-20);
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  gap: 8px;
  height: 32px;
  padding: 0 16px 0 8px;
  text-decoration: none;
  transition: background-color .2s ease-in-out;

  &__icon {
    stroke: var(--grey-solid-80);
  }

  &__label {
    color: var(--grey-solid-80);
  }

}
</style>