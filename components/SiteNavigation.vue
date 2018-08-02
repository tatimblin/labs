<template>
    <header>
        <div class="container">
            <div class="title">
                <nuxt-link to="/">timblin.io</nuxt-link>
            </div>
            <nav>
                <nuxt-link to="projects">projects</nuxt-link>
                <nuxt-link to="labs">labs</nuxt-link>
                <nuxt-link to="process">process</nuxt-link>
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

        a {
            font-family: $font;
            font-size: 0.5em;
            color: $light-txt;
            text-decoration: none;
        }
        nav a {
            padding-left: $spacing;
            
            @include bigger($screen-sm) {
                padding-left: $spacing*2;
            }
        }
    }
}
</style>


