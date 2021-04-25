<template lang="pug">
.blog-header
  section#header
    .skewed( :style="{ backgroundImage: `url(${logoPath})` }" )
      h1 Blog - {{ entryName }}
    .backbtn( @click="$router.push('/blog')" title="Back" )
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    entryName: String,
  },
})
export default class BlogHeader extends Vue {
  private logoPath = "./icons/gm_logo_inkscape.svg";
}
</script>
<style lang="sass">
.blog-header #header
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
      transform-origin: top left
      text-align: left
      transform: skewY(-4deg)
      position: absolute
      top: 4.75rem
      left: 2rem
      font-weight: 600
      font-size: 1.81rem
  .backbtn
    height: 2.5rem
    width: 2.5rem
    background-image: url("../../../public/icons/arrow-2.svg")
    background-size: auto 80%
    background-position: 85% 50%
    background-repeat: no-repeat
    cursor: pointer
    transform: rotateY(180deg) translateY(-100%)
    margin-left: 1.3rem
    padding: 5px
    border-radius: 50%
    &:hover
      background-color: var(--bg-primary-lighter-b)
</style>
