<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <info-list v-for="infoSection in infoSections" v-bind:key="infoSection.title"
               :sectionData="infoSection"
    />
  </div>
</template>

<script>
import infoList from './home/InfoList.vue'
import json from '../assets/js/json'

export default {
  name: 'Home',
  data () {
    return {
      title: '金护帽考试-专题训练',
      infoSections: json.getInfoSections()
    }
  },
  components: {
    infoList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
