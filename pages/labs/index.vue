<template>
  <section>
    <site-list list="labs"></site-list>
  </section>
</template>

<script>
  //import TweenLight from "gsap/TweenLight"
  import SiteList from '~/components/SiteList.vue'

  export default {
    layout: 'site',
    transition: 'list',
    components: {
        SiteList
    }
  }
</script>

<style scoped lang="scss"> 
  @import '~assets/sass/_variables.scss';

</style>
