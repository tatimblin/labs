<template>
    <div class="site">
        <site-navigation/>
        <nuxt/>
    </div>
</template>

<script>
import SiteNavigation from '~/components/site/SiteNavigation.vue'

export default {
    components: {
        SiteNavigation
    }
  }
    
</script>

<style scoped lang="scss">
@import '~assets/sass/_variables.scss';

.site {
    background-color: $dark-bg;
    color: $light-bg;
}
</style>
