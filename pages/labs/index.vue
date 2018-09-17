<template>
  <div class="lab container small-width">
    <ul>
      <li v-for="(post, index) in posts" :key="post.date">
        <list-item v-bind="post" @click="$store.state.indexedLab = index"/>{{$store.state.indexedLab}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ListItem from '~/components/site/ListItem.vue'

  export default {
    layout: 'site',
    transition: 'list',
    components: {
        ListItem
    },
    computed: {
      ...mapState(['indexedLab'])
    },
    data() {
      const context = require.context('~/content/lab/posts/', false, /\.json$/);
      const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/labs/${key.substring(13).replace('.json', '').replace('./', '')}`
      }));
      return { 
        posts,
        projIndex: 0
      };
    }
  }
</script>

<style scoped lang="scss"> 
  .lab {
    
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    li {
      width: 50%;
    }
  }
}
</style>
