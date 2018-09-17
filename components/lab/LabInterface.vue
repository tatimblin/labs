<template>
    <header class="lab-interface">

        <ui-expander/>

        <div :class="{ visible : $store.state.isNav }">

            <lab-navigation 
                v-bind="posts[$store.state.indexedLab]" 
                :next="next"
            />

        </div>

        <div :class="{ visible : $store.state.isDetail }">

            <lab-detail v-bind="posts[$store.state.indexedLab]"/>

        </div>

    </header>
</template>

<script>
import { mapState } from 'vuex'
import LabNavigation from '~/components/lab/LabNavigation.vue'
import LabDetail from '~/components/lab/LabDetail.vue'
import UiExpander from '~/components/lab/UiExpander.vue'

    export default {
        components: {
            LabNavigation,
            LabDetail,
            UiExpander
        },
        computed: {
            ...mapState(['page', 'labs'])
        },
        data() {
            const context = require.context('~/content/lab/posts/', false, /\.json$/);
            const posts = context.keys().map(key => ({
                ...context(key),
                path: `/labs/${key.substring(13).replace('.json', '').replace('./', '')}`
            }));
            return {
                posts,
                next: '',
                prev: ''
            }
        },
        created() {
            let i = this.$store.state.indexedLab
            let next = ++i
            let prev = --i
            
            this.next = this.posts[next].path
        }
    }
</script>

<style scoped lang="scss">
@import '~assets/sass/_variables.scss';

.lab-interface {
    position: relative;

    > div {
        position: relative;
        max-height: 0px;
    }
    .visible {
        max-height: 600px;
    }
}
</style>