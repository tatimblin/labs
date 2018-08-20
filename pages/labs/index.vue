<template>
  <div class="home container small-width">
    <site-list list="labs"></site-list>
  </div>
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
