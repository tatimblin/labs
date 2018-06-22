<template>
  <section>
    <div class="main-head">
      <h1>Labs by Tristan Timblin</h1>
    </div>
    <div class="main-list">
      <ul>
        <li>
          <h2>{{ $store.state.labs }}</h2>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    layout: 'blank',
    fetch ({store}) {
      store.dispatch('getLabs')
    },
    computed: {
      Labs () {
        return this.$store.state.labs
      }
    }
  }
</script>

<style> 
    
</style>
