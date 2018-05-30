<template>
    <section class="detail">
        <div class="detail-desc">
            <h3>Description</h3>
            <p>{{ labs[indexedLab].desc }}</p>
        </div>
        <div class="detail-res">
            <h3>Resources</h3>
            resources here!
        </div>
    </section>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapState(['labs', 'indexedLab']),
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.detail {
    display: flex;
    max-width: $screen-md;
    margin: $spacing*2 auto;

    div {
        width: 50%;
        padding: 0 $spacing;
    }
    &-desc {
        line-height: 3em;
    }
}

</style>


