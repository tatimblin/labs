<template>
    <div class="lab">
        <lab-interface/>
        <div class="lab-content">
            <nuxt/>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import LabInterface from '~/components/lab/LabInterface.vue'
    
    export default {
        middleware: 'labs',
        components: {
            LabInterface
        },
        computed: {
            ...mapState(['hideUi'])
        }
    }
</script>

<style scoped lang="scss">

    .lab-content {
        position: relative;
        z-index: 100;
    }
</style>
