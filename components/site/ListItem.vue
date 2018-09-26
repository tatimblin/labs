<template>
    <div class="list-item">
        <nuxt-link :to="path">{{ title }}</nuxt-link>
    </div>
</template>

<script>

    export default {
        props:['title', 'path'],
        data() {
            return {

            };
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.list-item {
    padding-bottom: 6rem;
    font-family: $font-head;
    font-size: 2.675em;
}

</style>