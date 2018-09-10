<template>
  <section>
    <process-list></process-list>
  </section>
</template>

<script>
  //import TweenLight from "gsap/TweenLight"
  import SiteAbout from '~/components/site/SiteAbout.vue'
  import ProcessHero from '~/components/site/ProcessHero.vue'
  import ProcessList from '~/components/site/ProcessList.vue'

  export default {
    layout: 'site',
    transition: 'site',
    components: {
        SiteAbout,
        ProcessHero,
        ProcessList,
    }
  }
</script>

<style scoped lang="scss"> 
  @import '~assets/sass/_variables.scss';

  

</style>
