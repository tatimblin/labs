<template>
  <section class="container">
    <div>
      <h1>This is demo4.vue {{ title }}</h1>
    </div>
  </section>
</template>

<script>

export default {
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
