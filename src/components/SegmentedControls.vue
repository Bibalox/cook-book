<script setup>
defineProps({
  activeControl: {
    type: Number,
    default: 0
  }
})

defineEmits(['clickOnControl'])
</script>

<template>
  <div class="segmented-controls">
    <div class="segmented-controls__wrapper">
      <div
        :class="[
          'segmented-controls__active-marker',
          `segmented-controls__active-marker--position-${activeControl}`
        ]"
      />
      <span
        :class="[
          'segmented-controls__control',
          'label-md',
          { 'segmented-controls__control--active' : activeControl === 0 }
        ]"
        @click="$emit('clickOnControl', 0)"
      >
        Tout
      </span>
      <span
        :class="[
          'segmented-controls__control',
          'label-md',
          { 'segmented-controls__control--active' : activeControl === 1 }
        ]"
        @click="$emit('clickOnControl', 1)"
      >
        Salé
      </span>
      <span
        :class="[
          'segmented-controls__control',
          'label-md',
          { 'segmented-controls__control--active' : activeControl === 2 }
        ]"
        @click="$emit('clickOnControl', 2)"
      >
        Sucré
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.segmented-controls {
  border-radius: 25px;
  background-color: var(--base-50);
  backdrop-filter: blur(22px);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  padding: 4px;
  height: 50px;
  width: 100%;
  max-width: 360px;

  &__wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
  } 

  &__active-marker {
    background-color: var(--grey-solid-10);
    border-radius: 21px;
    box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.16);
    height: 100%;
    position: absolute;
    transition: transform .4s cubic-bezier(.65,0,.35,1);
    width: calc(100% / 3);
    z-index: 10;

    &--position-0 {
      transform: translateX(0);
    }

    &--position-1 {
      transform: translateX(100%);
    }

    &--position-2 {
      transform: translateX(200%);
    }
  }

  &__control {
    align-items: center;
    color: var(--grey-solid-80);
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    transition: color .2s ease-out .1s;
    width: calc(100% / 3);
    z-index: 20;

    &--active {
      color: var(--accent-solid-50);
    }
  }
}
</style>