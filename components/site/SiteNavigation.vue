<template>
    <header>
        <div class="container">
            <div class="title">
                <nuxt-link exact to="/">timblin.io</nuxt-link>
            </div>
            <nav>
                <nuxt-link exact to="/project/">projects</nuxt-link>
                <nuxt-link exact to="/labs/">labs</nuxt-link>
                <nuxt-link exact to="/process/">process</nuxt-link>
            </nav>
        </div>
    </header>
</template>

<script>

    export default {
        
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

header {
    position: relative;
    top: 0; left: 0;
    width: 100%;
    z-index: 1000;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 15vh;
        
        nav a {
            margin-left: $spacing;
            
            @include bigger($screen-sm) {
                margin-left: $spacing*2;
            }
        }
        .nuxt-link-active {
            &:before {
                transform-origin: 100%;
                transform: scale(0, 1);
                transition: transform 600ms $ease;
            }
            &:after {
                transform: scale(1, 1);
            }
        }
    }
}
</style>


