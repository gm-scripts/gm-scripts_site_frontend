<template>
  <div
    class="nav-item"
    @click="
      $router.push({
        path: itemData.target,
      })
    "
  >
    <div class="icon-container"><img :src="itemData.iconSrc" alt="" /></div>
    <span class="label">
      <slot />
    </span>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import { Vue, Options } from "vue-class-component";
import { NavItemInterface } from "../../ts/types/NavItemInterface";

@Options({
  props: {
    itemData: Object as PropType<NavItemInterface>,
  },
})
export default class NavItem extends Vue {}
</script>

<style lang="scss">
.nav-item {
  height: 75px;
  position: relative;
  transition: background-color 0.25s;
  cursor: pointer;
  .icon-container {
    position: absolute;
    left: 12.5px;
    top: 12.5px;
    img {
      height: 50px;
      width: 50px;
      transform: scale(0.85);
      transition: transform 0.25s;
    }
  }
  .label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 75px;
    opacity: 0;
    transition: opacity 0.5s;
  }
  &:hover {
    background-color: var(--bg-primary-lighter);
    transition: background-color 0.15s;
    .icon-container {
      img {
        transform: scale(1);
        transition: transform 0.15s;
      }
    }
  }
}
.expanded {
  .nav-item {
    .icon-container {
      img {
      }
    }
    .label {
      opacity: 1;
    }
  }
}
</style>
