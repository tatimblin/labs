<template>
    <div class="site">
        <div class="site-nav">
            <site-navigation/>
        </div>
        <feat-image/>
        <nuxt/>
    </div>
</template>

<script>
import SiteNavigation from '~/components/site/SiteNavigation.vue'
import FeatImage from '~/components/site/FeatImage.vue'

export default {
    components: {
        SiteNavigation,
        FeatImage
    }
  }
    
</script>

<style scoped lang="scss">
@import '~assets/sass/_variables.scss';

.site {
    min-height: 100vh;
    background-color: $dark-bg;
    color: $light-bg;

    &-nav {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
    }
}
</style>
