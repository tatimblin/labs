<template>
  <section class="page">
    <div>
      <h1>This is demo1.vue</h1>
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
.page {
    h1 {
        background-color: orange;
    }
}
</style>
