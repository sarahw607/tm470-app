<template>
  <div>
    <h1>Recipe Search</h1>
    <recipe-search></recipe-search>
  </div>
</template>

<script>
import RecipeSearch from './recipe/RecipeSearch.vue'
export default {
  name: 'Home',
  components: {RecipeSearch}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
