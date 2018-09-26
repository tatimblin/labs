<template>
    <div class="feat-image" :class="$route.name">

        <transition name="image-fade" mode="out-in" tag="div">

            <div class="feat-image-container container small-width">

                <img :src="thisBg" alt="Post featured image">

            </div>

        </transition>

    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
      ...mapState(['indexedProj']),
      ...mapGetters(['thisBg'])
    },
    data() {
      const context = require.context('~/content/project/posts/', false, /\.json$/);
      const posts = context.keys().map(key => ({
        ...context(key),
        path: `/project/${key.replace('.json', '').replace('./', '')}`
      }));
      return { 
        posts,
      }
    }
}
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.feat-image {
    position: fixed;
    width: 100%;
    top: 50vh;
    transform: translateY(-50%);
    z-index: 0;

    &:before, &:after {
      content: '';
      position: absolute;
      display:block;
      width: 100%; height: 101%;
      top: -1px; right: 0;
      background: linear-gradient(left, $dark-bg 50%, rgba(24, 22, 24, 0.4));
      transition: all 600ms $ease;
      opacity: 0;
      z-index: 10000;
    }
    &:after {
      background: linear-gradient(right, $dark-bg 50%, rgba(24, 22, 24, 0.4));
    }
    
    &-container {
        position: relative;
        text-align: center;
        z-index: 100;

        img {
          position: relative;
          display: inline-block;
          max-width: 100%;
          transform-origin: 50% 50%;
          transition: all 750ms $ease;
          z-index: 0;
        }
    }
}

.project {
  &:before {
    opacity: 1;
  }

  .feat-image-container {

    img {
      width: 50%;
      right: 0;
      transform: translate(50%);
    }
  }
}

.labs {
  &:after {
    opacity: 1;
  }

  .feat-image-container {

    img {
      width: 50%;
      transform: translate(-50%);
    }
  }
}

.project-slug {
  position: relative;

  &:before {
    opacity: 0;
    transform: translateX(0%);
  }

  .feat-image-container {

    img {
      width: 100%;
      transform: translateX(0%);
      transition: 
        transform 600ms $ease,
        width 600ms $ease;
    }
  }
}

</style>