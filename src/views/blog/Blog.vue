<template lang="pug">
.blog.sb-thin
  section#header
    .skewed( :style="{ backgroundImage: `url(${logoPath})` }" )
      h1 Blog
  section#bloglinks
    ul
      BlogLink( v-for="link in bpRegistry" :key="link.name" :linkDat="link" )
  
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import BlogLink from "@/components/blog/BlogLink.vue";
import { bpRegistry } from "@/views/blogposts/BlogPostRegistry";

@Options({
  components: {
    BlogLink,
  },
})
export default class Blog extends Vue {
  private readonly bpRegistry = bpRegistry;
  private logoPath = "./icons/gm_logo_inkscape.svg";
}
</script>

<style lang="sass" scoped>
.blog
  background-color: var(--bg-primary)
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
      transform: skewY(-4deg) translate(-50%, -50%)
      position: absolute
      top: 11vh
      left: 10vh
      font-weight: 600
      font-size: 1.81rem
  #bloglinks
    position: relative
    ul
      margin: 2rem 7.5rem
      padding: 0
</style>
