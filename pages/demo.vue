<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1>This is demo.vue</h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped lang="scss">
.container {
    div {
        background-color: red;
    }
}
</style>
