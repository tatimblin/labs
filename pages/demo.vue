<template>
    <section class="page">
    <h1>This is demo.vue</h1>
    </section>
</template>

<script>

export default {
    transition: 'slide',
    data() {
        return {
            title: 'Issa demo'
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    h1 {
        background-color: red;
    }
}
</style>
