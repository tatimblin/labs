<template>
    <div class="list-item">
        <nuxt-link :to="_path">{{ title }}</nuxt-link>
    </div>
</template>

<script>

    export default {
        props:['title', '_path'],
        data() {
            return {

            };
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';


</style>