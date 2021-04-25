<template lang="pug">
li( @click="$router.push('/blog' + linkDat.path)")
  .header
    h2 {{ linkDat.name }}
    .author-container 
      .author {{ linkDat.author }}
  hr
  p {{ linkDat.description }} 
</template>

<script lang="ts">
import { PropType } from "vue";
import { Vue, Options } from "vue-class-component";
import { BlogLinkInterface } from "@/views/blog/blogposts/BlogPostRegistry";

@Options({
  props: {
    linkDat: Object as PropType<BlogLinkInterface>,
  },
})
export default class BlogLink extends Vue {}
</script>

<style lang="sass">
li
  list-style-type: none
  position: relative
  padding: 1.25rem
  margin-bottom: 0.5rem
  cursor: pointer
  border-radius: 0.75rem
  transition: background-color 0.25s
  .header
    display: grid
    grid-template-columns: 1fr 1fr
    h2
      color: var(--text-primary)
      margin: 0
      text-align: left
    .author-container
      position: relative
      .author
        position: absolute
        right: 0
        bottom: 0
        color: var(--text-tertiary)
  hr
    border-color: var(--text-secondary)
    margin: 0.4rem 0.25rem
  p
    color: var(--text-primary-b)
    margin: 0.5rem 0.25rem 0.4rem 0.25rem
    text-align: left
  &:hover
    background-color: var(--bg-primary-lighter-b)
    transition: background-color 0.15s
</style>
