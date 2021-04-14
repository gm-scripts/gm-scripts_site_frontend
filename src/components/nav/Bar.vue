<template>
  <div
    class="nav-bar"
    :class="{
      expanded: expanded,
    }"
  >
    <div class="expand-btn-container">
      <img :src="arrow" alt="" class="expand-btn" @click="expand" />
    </div>

    <NavItem v-for="item in items" :key="item.label" :itemData="item">{{
      item.label
    }}</NavItem>

    <!-- div.lang-select -->
  </div>
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
      target: "/",
      label: "Blog",
    },
    {
      iconSrc: "./icons/changelog-inkscape.svg",
      target: "/",
      label: "Changelogs",
    },
    {
      iconSrc: "./icons/about-us-inkscape.svg",
      target: "/",
      label: "About",
    },
    {
      iconSrc: "./icons/shop-inkscape.svg",
      target: "/",
      label: "Shop",
    },
    {
      iconSrc: "./icons/controlpanel-inkscape.svg",
      target: "/",
      label: "Controlpanel",
    },
  ];
  private expand() {
    this.expanded = !this.expanded;
    console.log("expanded");
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 75px;
  float: left;
  background-color: var(--bg-secondary);
  height: 100vh;
  position: fixed;
  transition: width 0.5s;
  .expand-btn-container {
    height: 75px;
    position: relative;
    .expand-btn {
      height: 50px;
      width: 50px;
      position: absolute;
      left: 12.5px;
      top: 12.5px;
      transform: scale(0.85);
      transition: transform 0.5s;
    }
  }
  &.expanded {
    width: 225px;

    .expand-btn {
      height: 50px;
      width: 50px;
      position: absolute;
      left: 12.5px;
      top: 12.5px;
      transform: rotate(180deg);
    }
  }
}
</style>
