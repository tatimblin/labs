<template>
  <div class="lab">

    <div class="lab-list container large-width">

      <ul>

        <li v-for="lab in labs" :key="lab.date">

          <list-item v-bind="lab"/>

        </li>

      </ul>

    </div>

  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import ListItem from '~/components/site/ListItem.vue'

  export default {
    layout: 'site',
    components: {
        ListItem
    },
    computed: {
      ...mapState(['indexedLab']),
      ...mapGetters(['labs'])
    },
    data() {
      return { 
        
      };
    },
    methods: {
      
    }
  }
</script>

<style scoped lang="scss"> 
  .lab {
    &-list {
      position: relative;
      padding: 50vh 0 25vh 0;
      z-index: 10;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      li {
        width: 50%;
      }
    }
  }
</style>
