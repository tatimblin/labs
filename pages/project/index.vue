<template>
    <div class="home container small-width">
        <site-list></site-list>
    </div>
</template>

<script>
import SiteList from '~/components/SiteList.vue'

export default {
  layout: 'site',
  transition: 'list',
  components: {
    SiteList
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/project/posts/', false, /\.json$/);

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/project/${key.replace('.json', '').replace('./', '')}`
    }));

    return { posts };
  }
};
</script>

<style lang="scss" scoped>

</style>

