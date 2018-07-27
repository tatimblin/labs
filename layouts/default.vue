<template>
    <div v-bind:class="{ 'slide-next': $store.state.slideNext, 'is-closed': $store.state.isClosed }">
        <navigation/>
        <nuxt/>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Navigation from '~/components/LabNavigation.vue'
    
    export default {
        components: {
            Navigation
        },
        computed: {
            ...mapState(['slideNext', 'isClosed'])
        }
    }
</script>

<style scoped lang="scss">

</style>
