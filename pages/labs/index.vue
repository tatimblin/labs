<template>
  <div class="lab container small-width">
    <ul>
      <li v-for="lab in labs" :key="lab.date">
        <list-item v-bind="lab"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import ListItem from '~/components/site/ListItem.vue'

  export default {
    layout: 'site',
    transition: 'list',
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
