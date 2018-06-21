<template>
    <div v-bind:class="{ 'slide-next': $store.state.slideNext }">
        <navigation/>
        <nuxt/>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Navigation from '~/components/Navigation.vue'
    
    export default {
        components: {
            Navigation
        },
        computed: {
            ...mapState(['slideNext'])
        },
        async asyncData ({ app, route }) {
            return {
                project: await app.$content('/projects').get(route.path.replace(/\/$/, ''))
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
