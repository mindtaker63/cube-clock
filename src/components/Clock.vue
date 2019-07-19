<template>
  <div class="clock">
    <digit
      class="clock__first-hour-digit clock__digit"
      :active-number="getHourFirstDigit" />
    <digit
      class="clock__second-hour-digit clock__digit"
      :active-number="getHourSecondDigit" />
    <span class="clock__colon">:</span>
    <digit
      class="clock__first-minute-digit clock__digit"
      :active-number="getMinuteFirstDigit" />
    <digit
      class="clock__second-minute-digit clock__digit"
      :active-number="getMinuteSecondDigit" />
    <span class="clock__colon">:</span>
    <digit
      class="clock__first-second-digit clock__digit"
      :active-number="getSecondFirstDigit" />
    <digit
      class="clock__second-second-digit clock__digit"
      :active-number="getSecondSecondDigit" />
  </div>
</template>

<script>
import Digit from './Digit.vue';

export default {
  name: 'Clock',
  components: { Digit },
  computed: {
    getHourFirstDigit() {
      return this.digitAtPlace(this.cachedDate.getHours(), 1);
    },
    getHourSecondDigit() {
      return this.digitAtPlace(this.cachedDate.getHours(), 2);
    },
    getMinuteFirstDigit() {
      return this.digitAtPlace(this.cachedDate.getMinutes(), 1);
    },
    getMinuteSecondDigit() {
      return this.digitAtPlace(this.cachedDate.getMinutes(), 2);
    },
    getSecondFirstDigit() {
      return this.digitAtPlace(this.cachedDate.getSeconds(), 1);
    },
    getSecondSecondDigit() {
      return this.digitAtPlace(this.cachedDate.getSeconds(), 2);
    },
  },
  data() {
    return {
      cachedDate: new Date(),
    };
  },
  methods: {
    digitAtPlace(number, place) {
      const strNumber = number.toString();
      if (strNumber.length > 1) {
        return Number.parseInt(strNumber[place - 1], 0);
      }
      return 0;
    },
  },
  mounted() {
    setInterval(() => this.cachedDate = new Date(), 500);
  },
};
</script>

<style lang="sass" scoped>
  $separator-color: #fff
  $separator-size: 11em
  .clock
    display: flex
    &__digit
      margin: 0 8px
    &__colon
      font-size: $separator-size
      color: $separator-color
</style>
