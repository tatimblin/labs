<template>
  <section class="container">
    <div>
      <navigation title="My Second Demo"/>
      <h1>This is demo1.vue</h1>
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
        background-color: blue;
    }
}
</style>
