<template>
    <nav class="lab-nav container large-width">
        <div class="lab-nav-index">
            
            <div class="lab-nav-index-ctrl">
                prev / next {{ next }}
            </div>

            <div class="lab-nav-index-title">
                {{ title }}
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
import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['isDetail'])
        },
        props:['title', 'path', 'next'],
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