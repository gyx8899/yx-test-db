<template>
  <div>
    <ul v-bind:class="{multiOption: !(sourceData[sourceData.length - 1].length === 1)}">
      <li>{{sourceData[0]}}. {{dataProp[1]}}:</li>
      <li>{{sourceData[1]}}</li>
      <br>
      <li v-for="(option, optionIndex) in sourceData.slice().splice(2, optionNum)"
          v-bind:class="{correctAnswer: checkIsAnswer(optionIndex) && (((sourceData[sourceData.length - 1].length === 1) && dataPicked[sourceData[0] - 1] !== '') || true), showAnswer: dataShowAnswer[sourceData[0]]}"
          v-bind:key="section + '-' +sourceData[0] + '-' + optionIndex"
      >
        <input :type="(sourceData[sourceData.length - 1].length === 1) ? 'radio': 'checkbox'" :id="section + '-' +sourceData[0] + '-' + optionIndex" :value="dataProp[2 + optionIndex][dataProp[2 + optionIndex].length - 1]" v-model="dataPicked[sourceData[0] - 1]">
        <label :for="section + '-' +sourceData[0] + '-' + optionIndex">{{dataProp[2 + optionIndex]}}: {{option}}</label>
      </li>
      <br>
      <li v-if="!(sourceData[sourceData.length - 1].length === 1)"><button @click="showAnswer(sourceData[0])">看答案</button></li>
      <li v-show="(sourceData[sourceData.length - 1].length === 1) ? dataPicked[sourceData[0] - 1] : dataShowAnswer[sourceData[0]]">{{dataProp[2 + optionNum]}}: {{sourceData[2 + optionNum]}}</li>
    </ul>
    </div>
</template>

<script>

export default {
  name: 'choice-list',
  props: ['section', 'dataProp', 'optionNum', 'sourceData', 'dataPicked', 'dataShowAnswer'],
  data () {
    return {
      // type: this.sourceData[this.sourceData.length - 1].length === 1,
      // prop: this.dataProp,
      // options: this.sourceData.slice().splice(2, this.optionNum),
      // answer: this.sourceData[2 + this.optionNum]
    }
  },
  mounted: function () {

  },
  methods: {
    showAnswer (index) {
      this.$set(this.dataShowAnswer, (index / 1), true)
    },
    checkIsAnswer (optionIndex) {
      if (this.type) {
        return this.dataProp[2 + optionIndex].includes(this.sourceData[2 + this.optionNum])
      } else {
        var answers = this.sourceData[2 + this.optionNum].slice()
        for (var answerItem of answers) {
          if (this.dataProp[2 + optionIndex].includes(answerItem)) {
            return true
          }
        }
        return false
      }
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
