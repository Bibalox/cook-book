<script setup>
import { ref } from 'vue'

const checked = ref(false)

const switchState = () => {
  checked.value = !checked.value
}
</script>

<template>
  <div
    :class="[
      'ingredient-item',
      { 'ingredient-item--checked' : checked }
    ]"
    @click="switchState"
  >
    <div class="ingredient-item__checkbox">
      <svg
        class="ingredient-item__check"
        height="16px"
        width="16px"
        viewbox="0 0 16 16"
      >
        <polyline points="2 9 6 13 14 4" />
      </svg>
    </div>
    <span class="ingredient-item__label">Check me</span>
  </div>
</template>

<style lang="scss">
.ingredient-item {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 78px;
  gap: 24px;

  &--checked {
    .ingredient-item__checkbox {
      animation: glow 1s;
      background-color: #FF4036;
      box-shadow: none;

      &:hover {
        background-color: #E63329;
      }
    }

    .ingredient-item__check {
      animation: trace .2s .1s ease-in-out both;
    }
  }

  &__checkbox {
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1.5px #808080;
    display: flex;
    justify-content: center;
    height: 30px;
    transition: all .2s;
    width: 30px;

    &:hover {
      background-color: rgba(0,0,0, .1);
    }
  }
  
  &__check {
    fill: transparent;
    stroke: white;
    stroke-dasharray: 18px;
    stroke-dashoffset: 18px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
  }

  &__label {
    color: #2B2B2B;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
}

@keyframes trace {
      0% {
        stroke-dashoffset: 18px;
      }

      100% {
        stroke-dashoffset: 0;
      }
    }

    @keyframes glow {
      0% {
        box-shadow: 0 0 0 0 rgba(255, 64, 54, 0.4);
        transform: scale(1);
      }

      20% {
        transform: scale(1.1);
      }

      60% {
        transform: scale(1);
      }

      100% {
        box-shadow: 0 0 0 10px rgba(255, 64, 54, 0);
      }
    }
</style>