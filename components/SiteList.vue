<template>
    <section class="site-list">
        <ul v-if="this.listType == 'post'">
            <li v-for="lab in labs" :key="lab.index">
                <nuxt-link :to="lab.page">{{ lab.title }}</nuxt-link>
            </li>
        </ul>
        <div v-else class="site-list-post">
            <div class="site-list-post-preview">
                <transition name="post-preview" mode="in-out">
                    <img :key="projIndex" :src="`${ posts[projIndex].thumbnail }`">
                </transition>
            </div>
            <ul>
                <li v-for="(post, index) in posts" :key="post.date" @mouseover="highlightProject(`${index}`)">
                    <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
                </li>
            </ul>
        </div>
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

            return { 
                posts,
                projIndex: 0
            };
        },
        props: {
            listType: {
                type: String,
                default: 'post'
            }
        },
        methods: {
            highlightProject(i) {
                this.projIndex = i
            }
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.site-list {
    text-align: right;

    ul {
        
        li {
            padding: $spacing/2 0;
        }
        a {
            color: $light-txt;
            text-decoration: none;
        }
    }
    &-post-preview {
        img {
            position: absolute;
            width: 300px;
            left: 0;
        }
    }
}


// Transition lab title
.post-preview-enter-active {
    transform-origin: center left;
    transition: all .3s ease;
}

.post-preview-leave-active {
    transition: all .3s ease;
}

.post-preview-enter {
    transform: translateY(60px) scale(0.5);
    opacity: 0 !important;
}

.post-preview-leave-to {
    transform: translateY(-60px);
    opacity: 0 !important;
}

</style>