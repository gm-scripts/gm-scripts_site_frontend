<template lang="pug">
.about
  section#header
    .skewed( :style="{ backgroundImage: `url(${logoPath})` }" )
      h1 About us
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({})
export default class About extends Vue {
  private logoPath = "./icons/gm_logo_inkscape.svg";
}
</script>

<style lang="sass">
.about
  .skewed
    position: relative
    top: 0
    bottom: 0
    right: 0
    left: 0
    width: 100%
    height: 20vh
    background-color: var(--bg-secondary)
    background-position: center right
    background-size: 26vh auto
    background-repeat: no-repeat
    z-index: 0
    transform: skewY(4deg)
    transform-origin: top right
    display: grid
    place-items: center
    h1
      transform: skewY(-4deg)
      position: absolute
      text-align: left
      transform-origin: top left
      top: 4.75rem
      left: 2rem
      font-weight: 600
      font-size: 1.81rem
</style>
