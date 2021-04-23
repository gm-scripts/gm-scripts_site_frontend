<template lang="pug">
.home.sb-thin 
  section#header
    .skewed( :style="{ backgroundImage: `url(${logoPath})` }" )
      #main-headers
        h1 Du brauchst FiveM Mods für einen einzigartigen Server? Hier bist du richtig!
        p Wir bieten Scripts in höchster qualität zu guten Preisen!
        #header-btns
          .btn-container
            .btn.to-shop( @click="$router.push('/shop')" ) Zum Shop
          .btn-container
            .btn.more-info( @click="scrollTo('#content')" ) Mehr erfahren
  section#content
    h1.main-title  Lorem Ipsum
    p.paragraph. 
      Consequat minim culpa magna reprehenderit tempor aliqua. Pariatur quis officia Lorem officia ad non quis consectetur minim consequat aliquip in proident quis. Dolor mollit occaecat nisi Lorem ea proident deserunt nisi elit culpa excepteur excepteur.
    p.paragraph. 
      Et consequat esse sit exercitation voluptate veniam. Laboris enim eu esse officia cillum eu adipisicing magna velit aliqua incididunt laboris. Pariatur ullamco veniam nisi enim aute sunt sunt. Occaecat ut non enim Lorem.
    p.paragraph. 
      Pariatur amet nulla excepteur et enim laboris sint occaecat est tempor. Ex culpa laboris ut laborum consequat et occaecat. Voluptate fugiat amet ad et in. Velit tempor tempor officia exercitation.
    p.paragraph. 
      Incididunt sunt incididunt quis Lorem dolore fugiat laboris duis veniam labore. Mollit Lorem quis est officia. Pariatur culpa ex et irure mollit in elit incididunt laborum pariatur magna ullamco ea eiusmod. Ad tempor excepteur eu elit commodo. Consectetur amet eiusmod eu pariatur. Culpa tempor excepteur fugiat et nulla eiusmod enim elit tempor do occaecat mollit est.
    hr.divider
    h2 Dolor sit amet
    p.paragraph. 
      Aute velit laborum enim dolor consequat voluptate ipsum commodo ut exercitation nisi. Ea occaecat tempor officia sint sint irure incididunt laborum exercitation ex. Anim laboris cupidatat esse cillum Lorem labore nostrud quis cillum aute amet ex enim adipisicing. Aliquip tempor velit non consequat commodo. Incididunt Lorem esse veniam et dolore mollit laborum magna cillum labore cillum. Et tempor officia nisi dolore pariatur anim id nulla aute est aliquip. Est tempor aliquip nisi non.
  InfoFooter
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InfoFooter from "@/components/Footer.vue";

@Options({
  components: {
    InfoFooter,
  },
  watch: {
    $route() {
      console.log("route changed!");
    },
  },
})
export default class Home extends Vue {
  private logoPath = "./icons/gm_logo_inkscape.svg";
  private scrollTo(elementId: string) {
    console.log("scrolling to " + elementId);
    let el = this.$el.querySelector(elementId);
    console.log(el);
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>
<style lang="sass">
.home
  height: 100vh
  overflow-y: overlay
  overflow-x: hidden
  position: relative
  width: calc(100vw - 75px)
  background-color: var(--bg-primary)
  #header
    .skewed
      position: relative
      top: 0
      bottom: 0
      right: 0
      left: 0
      width: 100%
      height: 80vh
      background-color: var(--bg-secondary)
      background-position: center right
      background-size: 45% auto
      background-repeat: no-repeat
      z-index: 0
      transform: skewY(6deg)
      transform-origin: top right
      display: grid
      place-items: center
      #main-headers
        user-select: none
        transform: skewY(-6deg) translateY(12.5%)
        width: 50%
        position: absolute
        left: 0
        padding: 5vw
        text-align: left
        h1
          font-size: 1.81rem
          text-shadow: 0 5px 10px #0000007f
          font-weight: 600
          margin-bottom: 3%
        p
          margin: 0
          font-size: 1.5rem
          text-shadow: 0 3px 6px #0000007f
          margin-bottom: 5%
        #header-btns
          display: grid
          grid-template-columns: 1fr 1fr
          gap: 1rem
          .btn-container
            cursor: pointer
            border-radius: 1.25rem
            .btn
              height: 2.5rem
              line-height: 2rem
              font-size: 1.25rem
              width: 100%
              border: 3px solid var(--brand)
              border-radius: 1.25rem
              text-align: center
              transition: background-color 0.25s, transform 0.25s, box-shadow 0.25s
              &.to-shop
                background-color: var(--brand)
            &:hover
              .btn
                box-shadow: 0 0.25rem 0.5rem var(--brand-transparent)
                transform: translateY(-0.25rem)
                transition: transform 0.15s, box-shadow 0.15s
                background-color: var(--brand)
            &:active
              .btn
                transform: translateY(0) scale(0.95)
                box-shadow: 0 0 0.25rem var(--brand-transparent)
                transition: transform 0.05s, box-shadow 0.05s
  #content
    padding: 2rem 9rem
    text-align: left
    h1
      font-size: 3rem
      color: var(--text-primary)
    h2
      font-size: 2rem
      color: var(--text-secondary)
      margin-top: 3rem
    p
      font-size: 1.5rem
      color: var(--text-tertiary)
      margin-top: 2rem
    hr
      &.divider
        margin: 5rem 3rem
</style>
