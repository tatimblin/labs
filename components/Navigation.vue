<template>
    <nav v-bind:class="{active: isClosed}">
        <div class="nav">
            <div class="nav-ctrl">
                <div class="nav-ctrl-next">
                    <nuxt-link :to="`${ currentLab.page }`">
                        <div class="nav-ctrl-next-icon"></div>
                    </nuxt-link>
                </div>
                <div class="nav-ctrl-prev">
                    <nuxt-link :to="`${ currentLab.page }`">
                        <div class="nav-ctrl-prev-icon"></div>
                    </nuxt-link>
                </div>
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
                    <a href="https://twitter.com/share?url=&text=&source=tristantimblin&related=tristantimblin" target="_blank">
                        twitter
                    </a>
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
    
    export default {
        components: {
            IconBase,
            IconTwitter
        },
        computed: {
            ...mapState(['page']),
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
    $spacing: 15px;
    $ease: ease;
    
    nav {
        position: relative;
        height: 55px;
        background-color: #F0F0F0;
        box-shadow: inset 0 -10px 25px rgba(0,0,0,.22);
        transition: all 600ms $ease; 
    }
    
    .nav {
        display: flex;
        max-width: 1200px + $spacing*2;
        margin: 0 auto;
        padding: $spacing;
        transition: all 600ms $ease; 
        
        &-ctrl {
            display: flex;
            
            div {
                width: 16px;
                margin-right: $spacing;
                
                .nav-ctrl-prev-icon, .nav-ctrl-next-icon {
                    color: $brand;
                    position: absolute;
                    margin-left: 3px;
                    margin-top: 10px;
                    
                    &:before {
                        content: '';
                        position: absolute;
                        left: 1px;
                        top: -5px;
                        width: 12px;
                        height: 12px;
                        border-top: solid 1px currentColor;
                        border-right: solid 1px currentColor;
                        -webkit-transform: rotate(-135deg);
                        transform: rotate(-135deg);
                    }
                }
                .nav-ctrl-prev-icon {
                    margin-left: 2px;
                    &:before {
                        top: -5px;
                        left: auto; right: 1px;
                        -webkit-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                }
            }
        }
        &-title {
            padding: 0 $spacing;
            border-left: 1px solid $brand;
        }
        &-external {
            display: flex;
            margin-left: auto;
            
            &-link {
                padding: 0 0 0 15px;
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
                width: 18px; height: 3px;
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
                transform: rotate(0deg) translateX(18px);
            }
        }
        &:hover .toggle-icon:before {
            transform: rotate(-30deg);
        }
        &:hover .toggle-icon:after {
            transform: rotate(30deg) translateX(18px);
        }
    }
    
    // closed navigation
    .active {
        height: 0;
        
        .nav {
            transform: translateY(-100%);
        }
        .toggle {
            
            &-icon:before, &-icon:after {
                transform-origin: 100% bottom;
            }
            &:hover .toggle-icon:before {
            transform: rotate(30deg);
            }
            &:hover .toggle-icon:after {
                transform: rotate(-30deg) translateX(18px);
            }
        }
    }
</style>