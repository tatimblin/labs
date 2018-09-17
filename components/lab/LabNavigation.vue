<template>
    <nav class="lab-nav container large-width">
        <div class="lab-nav-index">
            
            <div class="lab-nav-index-ctrl">
                <div class="lab-nav-index-ctrl-prev">

                    <nuxt-link :to="nav.next">{{ nav.prev }}</nuxt-link>

                </div>
                <div class="lab-nav-index-ctrl-next">

                    <nuxt-link :to="nav.next">{{ nav.next }}</nuxt-link>

                </div>
            </div>

            <div class="lab-nav-index-title">

                hi - {{ $store.state.indexedLab }}

            </div>

        </div>
        <div class="lab-nav-extra">
            <div class="lab-nav-extra-link" @click="toggleDetail()">
                Details
            </div>
            <div class="lab-nav-extra-link">
                Github
            </div>
            <div class="lab-nav-extra-link">
                <nuxt-link to="/">Home</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapState(['isDetail', 'indexedLab']),
            ...mapGetters(['thisLab', 'nav'])
        },
        data() {
            return {

            };
        },
        methods: {
            toggleDetail () {
                this.$store.commit('toggleDetail')
            }
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.lab-nav {
    display: flex;
    justify-content: space-between;
    padding: $spacing*2 0;

    &-index {
        display: flex;
    }
    &-extra {
        display: flex;
    }
}
</style>