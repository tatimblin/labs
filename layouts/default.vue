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
    
.test-enter-active {
    animation: acrossIn 2s 2s ease-out both;
}
.test-leave-active {
    animation: acrossOut 2s ease-in both;
} 

@keyframes acrossIn {
    0% {
        transform: translate3d(-100vw, 0, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
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
    
</style>
