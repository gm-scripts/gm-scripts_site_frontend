<template lang="pug">
.nav-item( @click="$router.push({ path: itemData.target, })" :class="{ active: active }" )
    .icon-container
      img( :src="itemData.iconSrc" )
    span.label
      slot
</template>

<script lang="ts">
import { PropType } from "vue";
import { Vue, Options } from "vue-class-component";
import { NavItemInterface } from "../../ts/types/NavItemInterface";

interface NavItemClassInterface {
  itemData: NavItemInterface | undefined;
}

@Options({
  props: {
    itemData: Object as PropType<NavItemInterface>,
  },
})
export default class NavItem extends Vue implements NavItemClassInterface {
  public itemData: any;

  get active(): boolean {
    return (
      this.itemData.target.split("/")[1] === this.$route.path.split("/")[1]
    );
  }
}
</script>

<style lang="sass">
.nav-item
  height: 75px
  position: relative
  transition: background-color 0.25s
  cursor: pointer
  .icon-container
    position: absolute
    left: 12.5px
    top: 12.5px
    img
      height: 50px
      width: 50px
      transform: scale(0.85)
      transition: transform 0.25s
      opacity: 65%
  .label
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 75px
    opacity: 0
    transition: opacity 0.3s
  &:hover
    background-color: var(--bg-tertiary-lighter-b)
    transition: background-color 0.5s
    .icon-container
      img
        transform: scale(1)
        transition: transform 0.15s
        opacity: 1
  &.active
    border-right: 3px solid var(--text-primary)
    img
      opacity: 1
.expanded
  .nav-item
    .icon-container
      img
    .label
      opacity: 1
</style>
