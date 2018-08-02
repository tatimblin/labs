<template>
    <div class="layout__site">
        <site-navigation/>
        <nuxt/>
    </div>
</template>

<script>
import SiteNavigation from '~/components/SiteNavigation.vue'

export default {
    components: {
        SiteNavigation
    }
  }
    
</script>

<style scoped lang="scss">
@import '~assets/sass/_variables.scss';

.layout__site {
    background-color: $dark-bg;
    color: $light-bg;
}
</style>
