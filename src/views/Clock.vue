<template>
  <div class="clock">
    <digit />
  </div>
</template>

<script>
// @ is an alias to /src
import Digit from '@/components/Digit.vue';

export default {
  name: 'Clock',
  components: {
    Digit,
  },
};
</script>

<style lang="sass">
  $body-bg: #000
  body
    background-color: $body-bg
</style>
