<template>
    <section class="site-list">
        <ul v-if="this.listType == 'post'">
            <li v-for="lab in labs" :key="lab.index">
                <nuxt-link :to="lab.page">{{ lab.title }}</nuxt-link>
            </li>
        </ul>
        <div v-else class="site-list-post">
            <div class="site-list-post-preview">
                <transition name="post-preview" mode="out-in">
                    <img :key="projIndex" :src="`${ posts[projIndex].thumbnail }`">
                </transition>
            </div>
            <ul>
                <transition-group 
                    appear 
                    name="list" 
                    tag="li"
                    v-bind:css="false"
                    v-on:enter="enter"
                >
                <li v-for="(post, index) in posts" :key="post.date" @mouseover="highlightProject(`${index}`)">
                    <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
                </li>
                </transition-group>
            </ul>
        </div>
    </section>
</template>

<script>

    import TweenMax from "gsap"
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
            },
            enter: function (el, done) {
                console.log('enter');
                TweenMax.staggerFrom(el, 0.5, { 
				scale: 1.25,
				opacity: 0,
				y: 250,
				x: 1,
				rotation: -50,
				cycle: {
					x:function(index, target){
						return 200 + (index + 100);
					},
					rotation:function(index, target){
						return -30 - (index + 5);
					}
				},
				delay:0.5,
				ease: Back.easeOut.config(1.7),
				force3D:true,
				onComplete: done
			});
            }
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.site-list {
    position: relative;
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
        max-width: 400px;
        left: 50%; right: 50%;

        img {
            position: absolute;
            max-width: 400px;
            transform-origin: center center;
            opacity: 0.33;
        }
    }
}


// Transition lab title
.post-preview-enter-active {
    //transform: rotate3D(3, 1, -1.5, 30deg) scale(0.5);
    transition: all .6s 0.3s $ease;
}

.post-preview-leave-active {
    transition: all .3s $ease;
}

.post-preview-enter {
    transform: rotate3D(0.75, 0.5, -0.25, 90deg) scale(0.5);
    opacity: 0 !important;
}

.post-preview-leave-to {
    transform: rotate3D(0.75, 0.5, -0.25, 90deg) scale(0.5);
    opacity: 0 !important;
}

</style>