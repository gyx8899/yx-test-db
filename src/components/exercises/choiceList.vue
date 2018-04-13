<template>
  <div>
    <ul v-bind:class="{multiOption: !type}">
      <li>{{sourceData[0]}}. {{dataProp[1]}}:</li>
      <li>{{sourceData[1]}}</li>
      <br>
      <li v-if="type"
          v-bind:class="{correctAnswer: sourceData[dataProp.length - 1].includes(dataProp[2 + optionIndex][dataProp[2 + optionIndex].length - 1]) && dataPicked[sourceData[0]] !== ''}"
          v-for="(option, optionIndex) in options"
          v-bind:key="section + '-' +sourceData[0] + '-' + optionIndex"
      >
        <input type="radio" :id="section + '-' +sourceData[0] + '-' + optionIndex" :value="dataProp[2 + optionIndex][dataProp[2 + optionIndex].length - 1]" v-model="dataPicked[sourceData[0]]">
        <label :for="section + '-' +sourceData[0] + '-' + optionIndex">{{dataProp[2 + optionIndex]}}: {{option}}</label>
      </li>
      <li v-if="!type"
          v-bind:class="{correctAnswer: sourceData[dataProp.length - 1].includes(dataProp[2 + optionIndex][dataProp[2 + optionIndex].length - 1]), showAnswer: dataShowAnswer[sourceData[0]]}"
          v-for="(option, optionIndex) in options"
          v-bind:key="section + '-' +sourceData[0] + '-' + optionIndex"
      >
        <input type="checkbox" :id="section + '-' +sourceData[0] + '-' + optionIndex" :value="dataProp[2 + optionIndex][dataProp[2 + optionIndex].length - 1]" v-model="dataPicked[sourceData[0]]">
        <label :for="section + '-' +sourceData[0] + '-' + optionIndex">{{dataProp[2 + optionIndex]}}: {{option}}</label>
      </li>
      <br>
      <template v-if="type">
        <li v-show="dataPicked[sourceData[0]] !== ''">{{dataProp[dataProp.length - 1]}}: {{sourceData[dataProp.length - 1]}}</li>
      </template>
      <template v-if="!type">
        <li><button @click="showAnswer(sourceData[0])">看答案</button></li>
        <li v-show="dataShowAnswer[sourceData[0]]">{{dataProp[dataProp.length - 1]}}: {{sourceData[dataProp.length - 1]}}</li>
      </template>
    </ul>
    </div>
</template>

<script>
// import choice from 'choice.vue'
//
export default {
  name: 'choice-list',
  props: ['section', 'dataProp', 'sourceData', 'dataPicked', 'dataShowAnswer'],
  data () {
    return {
      type: this.sourceData[this.sourceData.length - 1].length === 1,
      prop: this.dataProp,
      id: this.sourceData[0],
      options: this.sourceData.slice().splice(2, this.sourceData.length - 3),
      answer: this.sourceData[this.sourceData.length - 1]
    }
  },
  mounted: function () {

  },
  methods: {
    showAnswer (index) {
      this.$set(this.dataShowAnswer, (index / 1), true)
    }
  },
  components: {
    // choice
  }
}
</script>

<style scoped>
  ul
  {
    list-style-type: none;
    padding: 0;
    text-align: left;
  }
  li
  {
    display: inline-block;
    margin: 0 10px;
  }
  li.correctAnswer
  {
    display: inline-block;
    margin: 0 10px;
    color: #fff;
    background-color: rgb(22, 160, 134);
  }
  ul.multiOption li.correctAnswer
  {
    color: #000;
    background-color: transparent;
  }
  ul.multiOption li.correctAnswer.showAnswer
  {
    color: #fff;
    background-color: rgb(22, 160, 134);
  }
</style>
