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
    position: absolute;
    width: 100%;

    .container {
        display: flex;
        justify-content: space-between;
        max-width: $container-lg;
        margin: 60px auto 0 auto;
        padding: 0 $spacing;

        a {
            font-family: $font;
            color: $light-txt;
            text-decoration: none;
        }
        nav a {
            padding-left: $spacing; 
        }
    }
}
</style>


