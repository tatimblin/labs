<template>
  <div class="site">
    <site-about></site-about>
  </div>
</template>

<script>
  //import TweenLight from "gsap/TweenLight"
  import SiteAbout from '~/components/SiteAbout.vue'

  export default {
    layout: 'site',
    transition: 'slide',
    components: {
      SiteAbout
    }
  }
</script>

<style scoped lang="scss"> 
@import '~assets/sass/_variables.scss';

</style>
