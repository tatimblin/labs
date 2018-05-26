<template>
    <div>
        <navigation/>
        <transition name="test">
            <nuxt/>
        </transition>
    </div>
</template>

<script>
    import Navigation from '~/components/Navigation.vue'
    
    export default {
        components: {
            Navigation
        }
    }
</script>

<style scoped lang="scss">
$ease: cubic-bezier(0.86, 0, 0.07, 1);
    
.test-enter-active {
    animation: acrossIn 1s 1s $ease both;
}
.test-leave-active {
    animation: acrossOut 2s $ease both;
} 
@keyframes acrossIn {
    0% {
        transform: scale(0.5) translate3d(-100vw, 0, 0);
    }
    100% {
        transform: scale(1) translate3d(0, 0, 0);
    }
}
@keyframes acrossOut {
    0% {
        transform: translate3d(100vw, 0, 0);
    }
    100% {
        transform: translate3d(0vw, 0, 0);
    }
}
    .fade-enter-active, .fade-leave-active {
    transition: opacity 0.75s;
  }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
