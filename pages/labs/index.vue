<template>
  <div class="home container small-width">
    <ul>
      <li v-for="lab in labs" :key="lab.index">
        <site-list></site-list>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  //import TweenLight from "gsap/TweenLight"
  import SiteList from '~/components/site/SiteList.vue'

  export default {
    layout: 'site',
    transition: 'list',
    components: {
        SiteList
    },
    computed: {
      ...mapState(['labs']),
    },
  }
</script>

<style scoped lang="scss"> 
  @import '~assets/sass/_variables.scss';

</style>
