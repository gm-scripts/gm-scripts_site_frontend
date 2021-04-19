<template lang="pug">
.nav-bar(:class="{ expanded: expanded }")
  .expand-btn-container
    img.expand-btn(:src="arrow" @click="expand")
  NavItem(v-for="item in items" :key="item.label" :id="item.label.toLowerCase()" :itemData="item") {{ item.label }}

</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import NavItem from "./Item.vue";
import { NavItemInterface } from "../../ts/types/NavItemInterface";

@Options({
  components: {
    NavItem,
  },
})
export default class NavBar extends Vue {
  private arrow = "./icons/arrow-2.svg";
  private expanded = false;
  private items: NavItemInterface[] = [
    {
      iconSrc: "./icons/home-inkscape.svg",
      target: "/",
      label: "Home",
    },
    {
      iconSrc: "./icons/blog-inkscape.svg",
      target: "/blog",
      label: "Blog",
    },
    {
      iconSrc: "./icons/about-us-inkscape.svg",
      target: "/about",
      label: "About",
    },
    {
      iconSrc: "./icons/shop-inkscape.svg",
      target: "/shop",
      label: "Shop",
    },
  ];
  private expand() {
    this.expanded = !this.expanded;
    console.log("expanded");
  }
}
</script>

<style lang="sass" scoped>
.nav-bar
  *
    user-select: none
  width: 75px
  float: left
  background-color: var(--bg-tertiary)
  height: 100vh
  position: fixed
  transition: width 0.5s
  z-index: 999999
  .expand-btn-container
    height: 75px
    position: relative
    .expand-btn
      height: 50px
      width: 50px
      position: absolute
      left: 12.5px
      top: 12.5px
      transform: scale(0.85)
      transition: transform 0.5s
      opacity: 65%
      cursor: pointer
      &:hover
        opacity: 1
  &.expanded
    width: 225px
    .expand-btn
      height: 50px
      width: 50px
      position: absolute
      left: 12.5px
      top: 12.5px
      transform: rotate(180deg)
</style>
