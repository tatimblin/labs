<template>
  <section>
    <div class="container site-process-content">
        <h1>My Process</h1>
    </div>
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

  .site-process-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 85vh;
  }

</style>
