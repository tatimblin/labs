<template>
  <div class="post">

    <div class="post-content container small-width">

      <div class="content-block">

        <h1>{{ title }}</h1>
        <p>{{ body }}</p>

      </div>

    </div>
    
  </div>
</template>

<script>
import FeatImage from '~/components/site/FeatImage.vue'

export default {
  layout: 'site',
  components: {
    FeatImage
  },
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

<style scoped lang="scss">
@import '~assets/sass/_variables.scss';
.post {
  padding: 6rem 0;
  position: relative;
  z-index: 10;

  &-content {
    padding-top: 175px;
  }
}

</style>
