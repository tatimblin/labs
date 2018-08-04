<template>
    <header>
        <div class="container">
            <div class="title">
                <nuxt-link exact to="/">timblin.io</nuxt-link>
            </div>
            <nav>
                <nuxt-link exact to="projects">projects</nuxt-link>
                <nuxt-link exact to="labs">labs</nuxt-link>
                <nuxt-link exact to="process">process</nuxt-link>
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
    position: fixed;
    top: 0; left: 0;
    width: 100%;

    .container {
        display: flex;
        justify-content: space-between;
        max-width: $container-lg;
        margin: 0 auto;
        padding: 60px $spacing 0;
        background-color: $dark-bg;
        isolation: isolate;

        a {
            position: relative;
            padding: 0 2px;
            text-align: center;
            font-family: $font;
            font-size: 0.5em;
            color: $light-txt;
            mix-blend-mode: difference;
            text-decoration: none;

            &:before {
                content: '';
                position: absolute;
                width: 100%; height: 6px;
                top: 50%; bottom: 50%; left: 0;
                background-color:#d0d0d068;
                transform: scale(0, 1);
                transform-origin: 0;
                z-index: -1;
                transition: transform 300ms $ease;
            }
            &:after {
                content: '';
                position: absolute;
                width: 100%; height: 6px;
                top: 50%; bottom: 50%; left: 0;
                background-color: $light-txt;
                transform: scale(0, 1);
                transform-origin: 0;
                z-index: -1;
                transition: transform 300ms 900ms $ease;
            }

            &:hover:before {
                transform: scale(1, 1);
            }
        }
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


