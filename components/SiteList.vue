<template>
    <section class="site-list">
        <ul v-if="this.listType == 'post'">
            <li v-for="lab in labs" :key="lab.index">
                <nuxt-link :to="lab.page">{{ lab.title }}</nuxt-link>
            </li>
        </ul>
        <ul v-else>
            <li v-for="post in posts" :key="post.date">
                <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['labs']),
        },
        data() {
            // Using webpacks context to gather all files from a folder
            const context = require.context('~/content/project/posts/', false, /\.json$/);

            const posts = context.keys().map(key => ({
            ...context(key),
            _path: `/project/${key.replace('.json', '').replace('./', '')}`
            }));

            return { posts };
        },
        props: {
            listType: {
                type: String,
                default: 'post'
            }
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

</style>