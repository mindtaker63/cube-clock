<template>
  <div class="base-cube">
    <div class="base-cube__cube">
      <div class="base-cube__cube-face base-cube__cube-face--front"></div>
      <div class="base-cube__cube-face base-cube__cube-face--back"></div>
      <div class="base-cube__cube-face base-cube__cube-face--right"></div>
      <div class="base-cube__cube-face base-cube__cube-face--left"></div>
      <div class="base-cube__cube-face base-cube__cube-face--top"></div>
      <div class="base-cube__cube-face base-cube__cube-face--bottom"></div>
    </div>
</div>
</template>

<script>
export default {
  name: 'BaseCube',
};
</script>

<style lang="sass" scoped>
$cube-size: 50px
$perspective: $cube-size * 3
$face-opacity: .3
$face-border: 2px solid #000
.base-cube
  width: $cube-size
  height: $cube-size
  perspective: $perspective
  &__cube
    width: 100%
    height: 100%
    position: relative
    transform-style: preserve-3d
  &__cube-face
    position: absolute
    width: $cube-size
    height: $cube-size
    border: $face-border
    text-align: center
    opacity: $face-opacity
    &--front
      background-color: red
      transform: rotateY(0deg) translateZ(#{$cube-size / 2})
    &--back
      background-color: green
      transform: rotateY(180deg) translateZ(#{$cube-size / 2})
    &--right
      background-color: yellow
      transform: rotateY(90deg) translateZ(#{$cube-size / 2})
    &--left
      background-color: cyan
      transform: rotateY(-90deg) translateZ(#{$cube-size / 2})
    &--top
      background-color: blue
      transform: rotateX(90deg) translateZ(#{$cube-size / 2})
    &--bottom
      background-color: pink
      transform: rotateX(-90deg) translateZ(#{$cube-size / 2})
</style>
