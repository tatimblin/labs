<template>
  <section>
    <div class="intro-container">
      <h1>Labs by tris timb</h1>
      <p>the Labs is a collection of front-end experiments designed and curated by myself.</p>
      <div class="btn">
        <nuxt-link :to="'/'+labs[0].page">
          Enter
        </nuxt-link>
      </div>
      <ul>
        <li v-for="lab in labs" :key="lab.index">{{ lab.title }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    layout: 'blank',
    transition: 'slide',
    computed: {
      ...mapState(['labs']),
    }
  }
</script>

<style scoped lang="scss"> 
  @import '~assets/sass/_variables.scss';

  .intro-container {
    max-width: 300px;
    margin: 33vh auto;
    text-align: center;
    font-family: $font;

    h1 {
      margin-bottom: 15px;
      font-size: 1.33em;
      font-weight: 600;
    }

    p {
      line-height: 2em;
      font-size: 0.66em;
      letter-spacing: 0.06em;
    }

    .btn {
      display: inline-block;
      margin: 15px 0;
      padding: 2px 12px;
      transform: rotateZ(-2deg);
      a {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1em;
        letter-spacing: 0.11em;
      }
    }
  }
</style>
