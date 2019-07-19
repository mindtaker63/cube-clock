<template>
  <div class="clock-view">
    <clock />
  </div>
</template>

<script>
// @ is an alias to /src
import Clock from '@/components/Clock.vue';

export default {
  name: 'ClockView',
  components: {
    Clock,
  },
};
</script>

<style lang="sass">
  $body-bg: #000
  body
    background-color: $body-bg
</style>
