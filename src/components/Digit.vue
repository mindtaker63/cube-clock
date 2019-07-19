<template>
  <div class="digit">
    <div
      class="digit__row"
      v-for="(row, i) in activeGrid"
      :key="i">
          <base-cube
            :class="['digit__cube', { 'digit__cube--active': !!cube }]"
            v-for="(cube, i) in row"
            :key="i" />
    </div>
  </div>
</template>

<script>
import BaseCube from './BaseCube.vue';

// grid is 6 cubes across 4 cubes wide
// const GRID_WIDTH = 4;
// const GRID_HEIGHT = 6;

// const FULL_GRID = new Array(GRID_HEIGHT).fill(new Array(GRID_WIDTH).fill(1));

const ZERO = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

const ONE = [
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 1, 1, 1],
];

const TWO = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 1, 1],
];

const THREE = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [1, 1, 1, 1],
];

const FOUR = [
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];

const FIVE = [
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [1, 1, 1, 1],
];

const SIX = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

const SEVEN = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];

const EIGHT = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

const NINE = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];

const numberMap = new Map([
  [0, ZERO],
  [1, ONE],
  [2, TWO],
  [3, THREE],
  [4, FOUR],
  [5, FIVE],
  [6, SIX],
  [7, SEVEN],
  [8, EIGHT],
  [9, NINE],
]);

export default {
  name: 'Digit',
  components: { BaseCube },
  props: {
    activeNumber: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    activeGrid() {
      return numberMap.get(this.activeNumber);
    },
  },
};
</script>

<style lang="sass" scoped>
  $digit-margin: 8px
  .digit
    display: flex
    flex-direction: column
    &__row
      display: flex
      flex-direction: row
      max-width: content
    &__cube
      margin: $digit-margin
      visibility: hidden
      &--active
        visibility: visible
</style>
