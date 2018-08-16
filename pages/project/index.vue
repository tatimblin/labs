<template>
    <div class="home container small-width">
        <site-list list-type="posts"></site-list>
    </div>
</template>

<script>
import SiteList from '~/components/SiteList.vue'

export default {
  layout: 'site',
  transition: 'list',
  components: {
    SiteList
  }
};
</script>

<style lang="scss" scoped>

</style>

