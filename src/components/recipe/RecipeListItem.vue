<template>
  <div>
    <router-link :to="{ name: 'RecipeDetails', params: { recipe: recipe.uri }}">{{recipe.label}}</router-link>
    {{recipe.healthLabels}}
  </div>
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
