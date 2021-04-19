<template lang="pug">
NavBar
router-view.appwindow
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import NavBar from "./components/nav/Bar.vue";

@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass">
@import "./scss/themes/root.sass";
html, body
  margin: 0
  padding: 0
*
  box-sizing: border-box
#app
  font-family: "Montserrat", Helvetica, Arial, sans-serif
  font-weight: 400
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #efefff
  .appwindow
    height: 100vh
    width: calc(100vw - 75px)
    float: right
.sb-thin
  scroll-behavior: smooth
  &::-webkit-scrollbar
    width: 12px
  &::-webkit-scrollbar-thumb
    background-clip: content-box
    border: 3.5px solid transparent
    border-radius: 20px
    background-color: var(--bg-tertiary-transparent)
    margin-right: 30px
</style>
