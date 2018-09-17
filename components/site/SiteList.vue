<template>
    <section class="site-list">
        {{ post.title }}
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
            return {
                projIndex: 0
            };
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';


</style>