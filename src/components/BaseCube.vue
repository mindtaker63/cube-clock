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
$cube-size: 25px
$perspective: $cube-size * 3
$face-opacity: 1
$face-border: none
$face-color: ("front": #fff, "back": #8c1c1c, "right": #e07b7b, "left": #e07b7b, "top": #fff, "bottom": #fff)
$animation-time: 60s
.base-cube
  width: $cube-size
  height: $cube-size
  perspective: $perspective
  &__cube
    width: 100%
    height: 100%
    position: relative
    transform-style: preserve-3d
    animation: rotation $animation-time linear infinite
  &__cube-face
    position: absolute
    width: $cube-size
    height: $cube-size
    border: $face-border
    text-align: center
    opacity: $face-opacity
    &--front
      background-color: map-get($face-color, "front")
      transform: rotateY(0deg) translateZ(#{$cube-size / 2})
    &--back
      background-color: map-get($face-color, "back")
      transform: rotateY(180deg) translateZ(#{$cube-size / 2})
    &--right
      background-color: map-get($face-color, "right")
      transform: rotateY(90deg) translateZ(#{$cube-size / 2})
    &--left
      background-color: map-get($face-color, "left")
      transform: rotateY(-90deg) translateZ(#{$cube-size / 2})
    &--top
      background-color: map-get($face-color, "top")
      transform: rotateX(90deg) translateZ(#{$cube-size / 2})
    &--bottom
      background-color: map-get($face-color, "bottom")
      transform: rotateX(-90deg) translateZ(#{$cube-size / 2})

@keyframes rotation
  0%
    transform: rotateY(0deg)
  100%
    transform: rotateY(360deg)
</style>
