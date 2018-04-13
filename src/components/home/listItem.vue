<template>
  <li>
    <!--<a class="" v-link="{path: list.url}" target="_blank">{{list.name}}</a>-->
    <!--<a class="" v-link="{path: list.url}">{{list.name}}</a>-->
    <!--<a v-link="{name: list.name, query: list.query}">{{list.showName}}</a>-->
    <router-link :to="{name: list.name, query: list.query}">{{list.showName}}</router-link>
  </li>
</template>

<script>
export default {
  name: 'list-item',
  props: ['list']
}
</script>

<style scoped>
  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
