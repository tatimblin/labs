<template>
    <div v-bind:class="{ 'slide-next': $store.state.slideNext, 'is-closed': $store.state.isClosed }">
        <lab-navigation/>
        <nuxt/>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import LabNavigation from '~/components/LabNavigation.vue'
    
    export default {
        components: {
            LabNavigation
        },
        computed: {
            ...mapState(['slideNext', 'isClosed'])
        }
    }
</script>

<style scoped lang="scss">

</style>
