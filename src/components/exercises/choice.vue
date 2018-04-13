<template>
  <div class="choice">
    <h5>{{prop[0]}} {{choiceData[0]}}: {{choiceData[1]}}</h5>
    <!--<ul>-->
      <!--<choice-item v-for="item in choiceData"-->
                   <!--v-bind:key="item[0]" :list="item"/>-->
    <!--</ul>-->
  </div>
</template>

<script>
// import choiceItem from './choiceItem.vue'

export default {
  name: 'choice',
  props: ['choiceData', 'prop'],
  components: {
    // choiceItem
  }
}
</script>

<style scoped>
  ul {
      list-style-type: none;
      padding: 0;
    }
</style>
