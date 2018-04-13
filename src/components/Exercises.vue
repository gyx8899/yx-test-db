<template>
  <div class="exercise">
    <h1>{{title}}</h1>
    <choice-list v-for="(dataItem, dataIndex) in dataList"
                 v-bind:key="dataIndex"
                 :section="section"
                 :dataProp="dataProp"
                 :optionNum="optionNum"
                 :sourceData="dataItem"
                 :dataPicked="dataPicked"
                 :dataShowAnswer="dataShowAnswer"></choice-list>

    <pagination
        :pageInfo="pageInfo"
        @change="pagechange"
        ></pagination>
  </div>
</template>

<script>
import pagination from './vuePagination.vue'
import jsonData from '../assets/js/json'
import choiceList from './exercises/choiceList.vue'

export default {
  name: 'Exercises',
  data () {
    return {
      pageInfo: {
        total: 0,
        current: 1,
        pagenum: 10,
        pagegroup: 3,
        skin: '#16a086'
      },
      section: '',
      title: '',
      dataProp: [],
      dataPicked: [],
      dataList: [],
      dataShowAnswer: [],
      optionNum: 0
    }
  },
  mounted: function () {
    this.section = this.getSection()
    this.title = jsonData.getSectionDataName(this.getSection())
    this.dataProp = jsonData.getSectionDataProps(this.getSection())

    var optionCount = 0
    for (var item of this.dataProp) {
      optionCount += item && item.includes('选项') ? 1 : 0
    }
    this.optionNum = optionCount

    this.pageInfo.total = Math.round(jsonData.getSectionDataAll(this.getSection()).length / this.pageInfo.pagenum)
    this.dataList = jsonData.getSectionData(this.getSection(), this.pageInfo.current - 1, this.pageInfo.pagenum)
    this.dataPicked = new Array(this.pageInfo.pagenum).fill((this.dataList[0][this.dataList[0].length - 1].length === 1) ? '' : [])
    this.dataShowAnswer = new Array(this.pageInfo.pagenum).fill(false)
  },
  watch: {

  },
  methods: {
    getSection () {
      return this.$route.query.section
    },
    getType () {
      return this.$route.query.type
    },
    pagechange: function (current) {
      this.dataList = jsonData.getSectionData(this.getSection(), current - 1, this.pageInfo.pagenum)
    }
  },
  components: {
    choiceList,
    pagination
  }
}
</script>

<style scoped>
  .exercise
  {
    margin: 0 20px;
  }
</style>
