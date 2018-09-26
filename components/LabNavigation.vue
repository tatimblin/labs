<template>
<section>
    <nav v-bind:class="{active: isClosed}">
        <div class="nav">
            <div class="nav-ctrl"
                @click="changeLab" >
                <nuxt-link :to="'/labs/'+nextLab" class="nav-ctrl-next">
                    <div @click="$store.state.slideNext = true" class="nav-ctrl-next-icon"></div>
                </nuxt-link>
                <nuxt-link :to="'/labs/'+prevLab" class="nav-ctrl-prev">
                    <div @click="$store.state.slideNext = false" class="nav-ctrl-prev-icon"></div>
                </nuxt-link>
            </div>
            <div class="nav-title">

                <h1>{{posts[$store.state.indexedLab].title}}</h1>

            </div>
            <div class="nav-external">

                <div>

                    Details

                </div>

                <div>

                    <a href="/labs">timblin.io</a>

                </div>

                <div>

                    <a :href="`https://github.com/tatimblin/labs/blob/master/pages/labs${ currentLab.page }.vue`" target="_blank">Source</a>
                
                </div>

                <div>

                    <github-button></github-button>

                </div>
            </div>
        </div>
        <ui-expander/>
    </nav>
    <header v-bind:class="{expand: this.isDetail}">
        <lab-detail></lab-detail>
    </header>
</section>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import IconBase from './IconBase.vue'
    import IconTwitter from './IconTwitter.vue'
    import GithubButton from './GithubButton.vue'
    import LabDetail from './LabDetail.vue'
    
    export default {
        components: {
            IconBase,
            IconTwitter,
            GithubButton,
            LabDetail
        },
        computed: {
            ...mapState(['page', 'labs', 'slideNext', 'isClosed']),
            ...mapGetters(['currentLab', 'prevLab', 'nextLab'])
        },
        data() {
            const context = require.context('~/content/lab/posts/', false, /\.json$/);
            const posts = context.keys().map(key => ({
                ...context(key),
                _path: `/labs/${key.substring(13).replace('.json', '').replace('./', '')}`
            }));
            return {
                posts,
                isDetail: false,
                isChange: false
            }
        },
        props: {
            
        },
        methods: {
            toggleNav() {
                // vuex mutation
                this.$store.commit('closeNav')
                if (this.isDetail) {
                    this.isDetail = !this.isDetail;
                }
            },
            toggleDetail() {
                this.isDetail = !this.isDetail;
            },
            changeLab() {
                this.isChange = !this.isChange;
                if (this.isDetail) {
                    this.isDetail = !this.isDetail;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '~assets/sass/_variables.scss';
    
    nav {
        position: relative;
        height: 95px;
        transition: all 600ms $ease; 

        @include bigger ($screen-sm) {
            height: 65px;
        }
    }
    
    .nav {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        max-width: 1200px + $spacing*2;
        margin: 0 auto;
        padding: 0 $spacing;
        transition: all 600ms $ease; 
        
        &-ctrl {
            display: flex;

            a {
                margin: 0;
            }
            
            &-next, &-prev {
                position: relative;
                width: 20px; height: 1.15em;
                padding: 0 10px 0 0;
                transition: transform 400ms 75ms $ease;

                &:hover {
                    transform: translateX(3px) scale(1.0);
                }
                
                &-icon {
                    color: $dark-txt;
                    position: absolute;
                    margin-left: 2px; margin-right: 2px;
                    margin-top: 18px; margin-bottom: 18px;
                    width: 14px;
                    height: 1px;
                    background-color: currentColor;
                    &:before {
                        content: '';
                        position: absolute;
                        right: 1px;
                        top: -4px;
                        width: 8px;
                        height: 8px;
                        border-top: solid 1px currentColor;
                        border-right: solid 1px currentColor;
                        -webkit-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                }
            }
            &-next {

                &:hover {
                    transform: translateX(-3px) scale(1.0);
                }

                &-icon {
                    margin-left: 3px;
                    
                    &:before {
                        left: 1px; right: inherit;
                        -webkit-transform: rotate(-135deg);
                        transform: rotate(-135deg);
                    }
                }
            }
        }
        &-title {
            padding: 0 $spacing;
            border-left: 1px solid $dark-txt;
            overflow: hidden;
            
            h1 {
                margin: 0;
                font-family: $font;
                font-weight: 300;
                font-size: 18px;
                color: $dark-txt;
                text-transform: capitalize;
                letter-spacing: 0.2px;
            }
        }
        &-external {
            display: flex;
            align-items: center;
            margin-left: auto;
            
            > div {
                position: relative;
                margin: 0 0 0 15px;
                font-family: $font;
                font-size: 11px;
                color: $dark-txt;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                cursor: pointer;
                overflow: hidden;

                &:hover:after {
                    animation: pulse 1.2s 0ms $ease infinite both;
                }
                
                &:after {
                    content: '';
                    position: absolute;
                    width: 0; height: 1px;
                    right: 0;
                    bottom: -5px;
                    background-color: $dark-txt;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                &__desktop {

                    @include smaller($screen-sm) {
                        display: none;
                    }
                }
            }
        }
    }


    // Transition lab title
    .swipe-enter-active, .swipe-leave-active {
        transform: translateY(-1em);
        animation: swipe-text 1000ms 0ms 1 reverse forwards;
    }
    .swipe-enter, .swipe-leave-to {
        animation: swipe-text 1250ms 0ms 1 forwards;
    }

    @keyframes swipe-text {
        0% {
            transform: translateY(0);
            opacity: 0;
        }
        1% {
            opacity: 1;
        }
        80% {
            transform: translateY(-2.2em);
            opacity: 1;

            @include bigger ($screen-sm) {
                transform: translateY(-1.2em);
            }
        }
        100% {
            transform: translateY(-2.2em);
            opacity: 0;

            @include bigger ($screen-sm) {
                transform: translateY(-1.2em);
            }
        }
    }
    
    @keyframes pulse {
        0% {
            width: 0%;
            left:0;
        }
        25% {
            width: 0%;
        }
        50% {
            width: 100%;
        }
        75% {
            width: 100%;
            left: none;
            right: 0 !important;
        }
        100% {
            width: 0%;
            right: 0 !important;
        }
    }

    header {
        overflow: hidden;
        height:0;
        transition: height 600ms 50ms $ease;

        &.expand {
            height: 320px;
        }
    }
</style>