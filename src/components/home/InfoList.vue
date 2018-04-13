<template>
  <div>
    <h2>{{sectionData.title}}</h2>
    <ul>
      <list-item v-for="item in sectionData.list"
                 v-bind:key="item.showName" :list="item" />
    </ul>
  </div>
</template>

<script>
import listItem from './listItem.vue'
export default {
  name: 'info-list',
  props: ['sectionData'],
  components: {
    listItem
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

</style>
