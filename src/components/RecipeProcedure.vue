<script setup>
defineProps({
  procedure: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <article class="recipe-procedure">
    <section
      v-for="(step, stepIndex) in procedure"
      :key="stepIndex"
      class="recipe-procedure__step"
    >
      <h2
        class="recipe-procedure__title recipe-procedure__title--medium title-md"
        v-text="step.title"
      />
      <p
        v-for="(paragraph, paragraphIndex) in step.paragraphs"
        :key="paragraphIndex"
        class="recipe-procedure__paragraph paragraph"
        v-text="paragraph"
      />
    </section>
  </article>
</template>

<style lang="scss">
.recipe-procedure {
  color: var(--grey-solid-80);
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 700px) {
    gap: 24px;
  }

  &__step {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>