<template>
  <div>{{recipe[uri]}}</div>
</template>

<script>
export default {
  name: 'RecipeListItem',
  props: ['recipe']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
