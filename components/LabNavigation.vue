<template>
<section>
    <nav v-bind:class="{active: isClosed}">
        <div class="nav">
            <div class="nav-ctrl"
                @click="changeLab" >
                <nuxt-link :to="'/'+nextLab" class="nav-ctrl-next">
                    <div @click="$store.state.slideNext = true" class="nav-ctrl-next-icon"></div>
                </nuxt-link>
                <nuxt-link :to="'/'+prevLab" class="nav-ctrl-prev">
                    <div @click="$store.state.slideNext = false" class="nav-ctrl-prev-icon"></div>
                </nuxt-link>
            </div>
            <div class="nav-title" v-if="currentLab">
                <transition name="swipe" mode="out-in">
                    <div
                        v-if="isChange"
                        key="expand_close"
                        ><h1>{{ currentLab.title }}</h1></div>
                    <div
                        v-else
                        key="expand_detail"
                        ><h1>{{ currentLab.title }}</h1></div>
                </transition>
            </div>
            <div class="nav-external">
                <div class="nav-external-link">
                    <transition name="swipe" mode="out-in">
                        <div class="nav-external-link-close"
                            v-if="isDetail" 
                            @click="toggleDetail"
                            key="expand_close">Close</div>
                        <div class="nav-external-link-open"
                            v-else 
                            @click="toggleDetail"
                            key="expand_detail">Details</div>
                    </transition>
                </div>
                <div class="nav-external-link nav-external-link__desktop">
                    <nuxt-link to="/">timblin.io</nuxt-link>
                </div>
                <div class="nav-external-link" v-if="currentLab">
                    <a :href="`https://github.com/tatimblin/labs/blob/master/pages/labs${ currentLab.page }.vue`" target="_blank">Source</a>
                </div>
                <div class="nav-external-link nav-external-link__desktop">
                    <github-button></github-button>
                </div>
            </div>
        </div>
        <div class="toggle" @click="toggleNav">
            <div class="toggle-icon"></div>
        </div>
    </nav>
    <header v-bind:class="{expand: isDetail}">
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
            return {
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
            
            &-next, &-prev {
                width: 30px; height: 1.3em;
                transition: transform 400ms 75ms $ease;

                &:hover {
                    transform: translateX(3px) scale(1.0);
                }
                
                &-icon {
                    color: $brand;
                    position: absolute;
                    margin-left: 2px;
                    margin-top: 10px;
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
            border-left: 1px solid $brand;
            overflow: hidden;
            
            h1 {
                font-family: $font;
                font-weight: 300;
                font-size: 18px;
                color: $brand;
                text-transform: capitalize;
                letter-spacing: 0.2px;
            }
        }
        &-external {
            display: flex;
            align-items: center;
            margin-left: auto;
            
            &-link {
                position: relative;
                margin: 0 0 0 15px;
                font-family: $font;
                font-size: 11px;
                color: $brand;
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
                    background-color: $brand;
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
        animation: swipe-text 450ms 0ms 1 reverse forwards;
    }
    .swipe-enter, .swipe-leave-to {
        animation: swipe-text 450ms 0ms 1 forwards;
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

    
    // Open close navigation
    .toggle {
        position: absolute;
        width: 18px * 2; height: 18px*2;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        z-index: 9999;
        
        &-icon {
            
            &:before, &:after {
                content: '';
                position: absolute;
                width: 15px; height: 3px;
                bottom: 50%;
                background-color: #a1a1a1;
                transform-origin: 100% top;
                transition: all 300ms 100ms $ease;
            }
            &:before {
                border-radius: 10px 0 0 10px;
                transform: rotate(0deg);
            }
            &:after {
                border-radius: 0 10px 10px 0;
                transform: rotate(0deg) translateX(15px);
            }
        }
        &:hover .toggle-icon:before {
            border-radius: 10px 0 10px 10px;
            transform: rotate(-25deg);
        }
        &:hover .toggle-icon:after {
            border-radius: 0 10px 10px 10px;
            transform: rotate(25deg) translateX(15px);
        }
    }
    
    // closed navigation
    .active {
        height: 0;
        
        .nav {
            transform: translateY(-65px);
        }
        .toggle {
            
            &-icon:before, &-icon:after {
                transform-origin: 100% bottom;
            }
            &:hover .toggle-icon:before {
            transform: rotate(25deg);
            }
            &:hover .toggle-icon:after {
                transform: rotate(-25deg) translateX(15px);
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