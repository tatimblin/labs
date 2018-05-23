<template>
    <nav v-bind:class="{active: isClosed}">
        <div class="nav">
            <div class="nav-ctrl">
                <nuxt-link :to="`${ nextLab.page }`" class="nav-ctrl-next">
                    next
                </nuxt-link>
                <nuxt-link :to="`${ prevLab.page }`" class="nav-ctrl-prev">
                    prev
                </nuxt-link>
            </div>
            <div class="nav-title">
                <h1>{{ currentLab.title }}</h1>
            </div>
            <div class="nav-external">
                <div class="nav-external-link">
                    <a href="/" target="_blank">timblin.co</a>
                </div>
                <div class="nav-external-link">
                    <a :href="`https://github.com/tatimblin/labs/blob/master/pages/${ currentLab.page }.vue`" target="_blank">github</a>
                </div>
                <div class="nav-external-link">
                    <github-button></github-button>
                </div>
            </div>
        </div>
        <div class="toggle" @click="toggleNav">
            <div class="toggle-icon"></div>
        </div>
    </nav>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import IconBase from './IconBase.vue'
    import IconTwitter from './IconTwitter.vue'
    import GithubButton from './GithubButton.vue'
    
    export default {
        components: {
            IconBase,
            IconTwitter,
            GithubButton
        },
        computed: {
            ...mapState(['page', 'labs']),
            ...mapGetters(['currentLab', 'prevLab', 'nextLab'])
        },
        data() {
            return {
                isClosed: false
            }
        },
        methods: {
            toggleNav() {
                this.isClosed = !this.isClosed;
            }
        }
    }
</script>

<style scoped lang="scss">
    $brand: #a1a1a1;
    $font: "brevia", sans-serif;
    $spacing: 15px;
    $ease: ease;
    
    nav {
        position: relative;
        height: 65px;
        transition: all 600ms $ease; 
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
                margin-right: 15px;
                padding: 8px;
                background-color: green;
            }
        }
        &-title {
            padding: 0 $spacing;
            border-left: 1px solid $brand;
            
            h1 {
                font-family: $font;
                font-weight: 300;
                font-size: 18px;
                color: #2b2b2b;
                text-transform: capitalize;
                letter-spacing: 0.2px;
            }
        }
        &-external {
            display: flex;
            align-items: center;
            margin-left: auto;
            
            &-link {
                padding: 0 0 0 15px;
                
                a {
                    position: relative;
                    font-family: $font;
                    font-size: 11px;
                    color: #2b2b2b;
                    font-weight: 600;
                    text-transform: uppercase;
                    text-decoration: none;
                    letter-spacing: 0.11em;
                    
                    &:hover:after {
                        animation: pulse 1.2s 0ms $ease infinite both;
                    }
                    
                    &:after {
                        content: '';
                        position: absolute;
                        width: 0; height: 1px;
                        bottom: -3px;
                        background-color: #2b2b2b;
                    }
                }
            }
        }
    }
    
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
                background-color: $brand;
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
            transform: rotate(-25deg);
        }
        &:hover .toggle-icon:after {
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
            right: 0 !important;
        }
        100% {
            width: 0%;
            right: 0 !important;
        }
    }
</style>