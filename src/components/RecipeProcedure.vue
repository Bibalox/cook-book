<script setup>
defineProps({
  procedure: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="recipe-procedure" v-html="procedure" />
</template>

<style lang="scss">
.recipe-procedure {
  color: var(--grey-solid-80);

  & h2:not(:first-child) {
    margin-top: 48px;

    @media (max-width: 700px) {
      margin-top: 24px;
    }
  }

  & p {
    margin-top: 16px;
  } 
}
</style>