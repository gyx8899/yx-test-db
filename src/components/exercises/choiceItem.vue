<template>
  <li>
    <a>{{choice}}</a>
  </li>
</template>

<script>
export default {
  name: 'choice-item',
  props: ['choice']
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
