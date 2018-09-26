<template>
  <section class="container large-width">
    <process-list></process-list>
  </section>
</template>

<script>
  //import TweenLight from "gsap/TweenLight"
  import SiteAbout from '~/components/site/SiteAbout.vue'
  import ProcessHero from '~/components/site/ProcessHero.vue'
  import ProcessList from '~/components/site/ProcessList.vue'

  export default {
    layout: 'home',
    transition: 'site',
    components: {
        SiteAbout,
        ProcessHero,
        ProcessList,
    },
    data() {
      // Using webpacks context to gather all files from a folder
      const context = require.context('~/content/project/posts/', false, /\.json$/);

      const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/project/${key.replace('.json', '').replace('./', '')}`
      }));

      return { 
        posts,
        projIndex: 0
      };
    }
  }
</script>

<style scoped lang="scss"> 
  @import '~assets/sass/_variables.scss';

  

</style>
