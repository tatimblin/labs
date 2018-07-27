<template>
  <section>
    <site-about></site-about>
    <site-process></site-process>
    <site-list></site-list>
  </section>
</template>

<script>
  //import TweenLight from "gsap/TweenLight"
  import SiteAbout from '~/components/SiteAbout.vue'
  import SiteProcess from '~/components/SiteProcess.vue'
  import SiteList from '~/components/SiteList.vue'

  export default {
    layout: 'blank',
    transition: 'slide',
    components: {
        SiteAbout,
        SiteProcess,
        SiteList
    }
  }
</script>

<style scoped lang="scss"> 
  @import '~assets/sass/_variables.scss';

</style>
