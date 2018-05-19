<template>
  <section class="container">
    <div>
      <navigation lab-title="My First Demo" />
      <h1>This is demo.vue</h1>
    </div>
  </section>
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
.container {
    h1 {
        background-color: red;
    }
}
</style>
