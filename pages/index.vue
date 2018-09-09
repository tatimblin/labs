<template>
  <div class="site">
    <site-about></site-about>
  </div>
</template>

<script>
  //import TweenLight from "gsap/TweenLight"
  import SiteAbout from '~/components/site/SiteAbout.vue'

  export default {
    layout: 'site',
    transition: 'site',
    components: {
      SiteAbout
    }
  }
</script>

<style scoped lang="scss"> 
@import '~assets/sass/_variables.scss';

</style>
