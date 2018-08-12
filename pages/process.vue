<template>
  <section>
    <site-about></site-about>
    <site-process></site-process>
  </section>
</template>

<script>
  //import TweenLight from "gsap/TweenLight"
  import SiteAbout from '~/components/SiteAbout.vue'
  import SiteProcess from '~/components/SiteProcess.vue'

  export default {
    layout: 'site',
    transition: 'site',
    components: {
        SiteAbout,
        SiteProcess
    }
  }
</script>

<style scoped lang="scss"> 
  @import '~assets/sass/_variables.scss';

</style>
