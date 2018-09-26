<template>
  <div class="project">

    <div class="proj-list container large-width">

      <ul>

        <li v-for="(post, index) in posts" :key="post.date" @mouseover="updateIndex(index)">

          <list-item v-bind="post"/>

        </li>

      </ul>

    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import FeatImage from '~/components/site/FeatImage.vue'
import ListItem from '~/components/site/ListItem.vue'

export default {
  layout: 'site',
  components: {
    FeatImage,
    ListItem
  },
  data() {
    const context = require.context('~/content/project/posts/', false, /\.json$/);
    const posts = context.keys().map(key => ({
    ...context(key),
    path: `/project/${key.replace('.json', '').replace('./', '')}`
    }));
    return { 
      posts,
      projIndex: 0
    }
  },
  methods: {
    updateIndex (i) {
      this.$store.commit('bgImage', i)
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/sass/_variables.scss';

.proj-list {
  position: relative;
  padding: 50vh 0 25vh 0;
  z-index: 10;

  ul {
    width: 50%;

    li {
      text-align: right
    }
  }
}
</style>

