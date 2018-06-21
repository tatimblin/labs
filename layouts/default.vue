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
        omputed: {
            ...mapState(['slideNext'])
        }
    }
</script>

<style scoped lang="scss">

</style>
