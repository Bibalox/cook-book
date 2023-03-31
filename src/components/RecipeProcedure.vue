<script setup>
</script>

<template>
  <article class="recipe-procedure">
    <section class="recipe-procedure__step">
      <h2 class="recipe-procedure__title recipe-procedure__title--medium title-md">
        Caramel
      </h2>
      <p class="recipe-procedure__paragraph paragraph">
        Verser le sucre dans une casserole et couvrir d’eau. Faire chauffer à feu doux jusqu’à obtenir un caramel liquide avec une belle coloration.
      </p>
    </section>
    <section class="recipe-procedure__step">
      <h2 class="recipe-procedure__title recipe-procedure__title--medium title-md">
        Crème
      </h2>
      <p class="recipe-procedure__paragraph paragraph">
        Verser le lait dans une casserole et faire chauffer jusqu’à 40°C environ.
      </p>
      <p class="recipe-procedure__paragraph paragraph">
        Verser le sucre, le sucre vanillé et les oeufs dans un bol et mélanger au fouet. Verser ensuite le lait et mélanger le tout.
      </p>
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