<template>
    <div class="home container large-width">
        <div class="content-block">
            <h2>Not Home</h2>
            <ul>
                <li v-for="post in posts" :key="post.date">
                    <nuxt-link :to="post._path">
                        {{ post.title }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  layout: 'site',
  transition: 'list',
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
