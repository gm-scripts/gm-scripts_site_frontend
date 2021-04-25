<!-- Remove this post in prod, only use for reference -->
<template lang="pug">
#blogentry.sb-thin
  BlogHeader( entryName="blahfoobar" )
  section#content
    h1 This is a Blog Title.
    h2 This is a h2
    p. 
      Dolor magna Lorem eu consectetur labore cillum sit. Velit esse exercitation laborum do nisi ullamco qui. Laborum adipisicing sint qui incididunt reprehenderit Lorem anim commodo commodo est sunt. Esse sit incididunt ea occaecat elit laborum pariatur do velit cupidatat proident laborum labore. Dolore consequat cupidatat do exercitation. Exercitation aliquip voluptate exercitation do sit ex consectetur amet. Occaecat labore sit magna amet incididunt aute aute.
    p. 
      Esse duis deserunt magna ea eu eu ipsum quis ea. Culpa exercitation nisi ut velit anim non enim adipisicing qui amet veniam elit. Nulla ea anim ex ea ex ad non ex nulla proident officia ut. Laborum eiusmod cillum velit enim incididunt consectetur proident.
    hr
    p. 
      Exercitation deserunt mollit elit sint proident reprehenderit anim mollit ea commodo irure nisi. Cillum qui aute excepteur sint pariatur occaecat excepteur cillum velit reprehenderit et officia. Nisi incididunt quis deserunt anim cupidatat commodo. Consequat mollit minim cupidatat veniam excepteur ullamco consequat ea et excepteur.
    h2 Another header
    p
      | This text contains a 
      a(href="#", title="idk") Link
      | .
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import BlogHeader from "@/components/blog/BlogHeader.vue";

@Options({
  components: {
    BlogHeader,
  },
})
export default class SamplePost extends Vue {}
</script>
<style lang="sass">
@import "@/scss/blog-styles.sass"
</style>
