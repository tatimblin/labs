<template>
    <nav class="lab-nav container large-width">
        <div class="lab-nav-index">
            
            <div class="lab-nav-index-ctrl">
                <div class="lab-nav-index-ctrl-prev">

                    <nuxt-link :to="nav.next">prev</nuxt-link>

                </div>
                <div class="lab-nav-index-ctrl-next">

                    <nuxt-link :to="nav.next">next</nuxt-link>

                </div>
            </div>

            <div class="lab-nav-index-title">

                <h2>{{ thisLab.title }}</h2>

            </div>

        </div>
        <div class="lab-nav-extra">
            <div class="lab-nav-extra-link" @click="toggleDetail()">
                Details
            </div>
            <div class="lab-nav-extra-link">
                <a :href="`https://github.com/tatimblin/labs/blob/master/pages${$route.path}.vue`" target="_blank">Github</a>
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
    padding: $spacing 0 0 0;

    &-index {
        display: flex;
        align-items: center;

        &-ctrl {
            display: flex;

            > div {
                padding: $spacing;
            }
        }
        &-title {
            position: relative;
            padding-left: $spacing;
            border-left: 1px solid $dark-bg;
        }
    }
    &-extra {
        display: flex;

        &-link {
            padding: $spacing;
            cursor: pointer;
        }
    }
}
</style>