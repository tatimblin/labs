<template>
  <div class="post container large-width">
      <div class="content-block">
        <img :src="thumbnail">
        <h1>{{ title }}</h1>
        <p>{{ body }}</p>
      </div>
  </div>
</template>

<script>
export default {
  layout: 'site',
  async asyncData({ params }) {
    const postPromise = process.BROWSER_BUILD
      ? import('~/content/project/posts/' + params.slug + '.json')
      : Promise.resolve(
       require('~/content/project/posts/' + params.slug + '.json')
      );
    let post = await import('~/content/project/posts/' + params.slug + '.json');
    return post;
  }
};
</script>