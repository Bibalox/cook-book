<script setup>
import BackgroundImage from '../components/BackgroundImage.vue';
import BackButton from '../components/BackButton.vue'
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
          <h2 class="recipe-view__title recipe-view__title--medium title-md">
            Ingrédients
          </h2>
        </aside>
        <article class="recipe-view__procedure">
          <section class="recipe-view__step">
            <h2 class="recipe-view__title recipe-view__title--medium title-md">
              Caramel
            </h2>
            <p class="recipe-view__paragraph paragraph">
              Verser le sucre dans une casserole et couvrir d’eau. Faire chauffer à feu doux jusqu’à obtenir un caramel liquide avec une belle coloration.
            </p>
          </section>
          <section class="recipe-view__step">
            <h2 class="recipe-view__title recipe-view__title--medium title-md">
              Crème
            </h2>
            <p class="recipe-view__paragraph paragraph">
              Verser le lait dans une casserole et faire chauffer jusqu’à 40°C environ.
            </p>
            <p class="recipe-view__paragraph paragraph">
              Verser le sucre, le sucre vanillé et les oeufs dans un bol et mélanger au fouet. Verser ensuite le lait et mélanger le tout.
            </p>
          </section>
        </article>
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
  min-height: 100%;
  padding: calc(env(safe-area-inset-top) + 56px) 56px 56px;
  position: relative;

  @media (max-width: 1000px) {
    padding: calc(env(safe-area-inset-top) + 32px) 56px 32px;
  }

  @media (max-width: 600px) {
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

    @media (max-width: 600px) {
      border-radius: 20px;
      gap: 24px;
      padding: 32px;
    }
  }

  &__title {
    margin: 0;

    &--large {
      color: var(--accent-solid-50);
    }
  }

  &__paragraph {
    margin: 0;
  }

  &__section {
    color: var(--grey-solid-80);
    display: flex;
    gap: 72px;

    @media (max-width: 1000px) {
      gap: 56px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 24px;
    }
  }

  &__ingredient-list {
    flex-shrink: 0;
    width: 200px;
  }

  &__procedure {
    display: flex;
    flex-direction: column;
    gap: 48px;

    @media (max-width: 600px) {
      gap: 24px;
    }
  }

  &__step {
    display: flex;
    flex-direction: column;
    gap: 16px;
  } 
}
</style>