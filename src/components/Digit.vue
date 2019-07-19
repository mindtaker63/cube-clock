<template>
  <div class="digit">
    <div
      class="digit__row"
      v-for="(row, i) in grid"
      :key="i">
        <base-cube
          class="digit__cube"
          v-for="(cube, i) in row"
          :key="i" />
    </div>
  </div>
</template>

<script>
import BaseCube from './BaseCube.vue';

//grid is 6 cubes across 4 cubes wide
const GRID_WIDTH = 4;
const GRID_HEIGHT = 6;

const FULL_GRID = new Array(GRID_HEIGHT).fill(new Array(GRID_WIDTH).fill(1));

export default {
  name: 'Digit',
  components: { BaseCube },
  data() {
    return {
      grid: FULL_GRID,
    };
  },
};
</script>

<style lang="sass" scoped>
  .digit
    display: flex
    flex-direction: column
    &__row
      display: flex
      flex-direction: row
    &__cube
      margin: 8px
</style>
