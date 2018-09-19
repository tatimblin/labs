<template>
  <div class="project container large-width">
    <ul>
      <li v-for="post in posts" :key="post.date">
        <list-item v-bind="post"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from '~/components/site/ListItem.vue'

export default {
  layout: 'site',
  transition: 'list',
  components: {
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
    };
  },
};
</script>

<style lang="scss" scoped>
.project {
  ul {
    width: 50%;

    li {
      text-align: right
    }
  }
}
</style>

