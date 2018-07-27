<template>
    <section class="site-list">
        <ul>
            <li v-for="lab in labs" :key="lab.index">
                <nuxt-link :to="lab.page">{{ lab.title }}</nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['labs']),
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

</style>