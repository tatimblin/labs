<template>
  <section class="container">
    <div>
      <h1>This is demo2.vue</h1>
    </div>
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
        background-color: yellow;
    }
}
</style>
