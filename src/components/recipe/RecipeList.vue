<template>
  <ul class="content">
    <recipe-list-item
      v-for="item in recipeList"
      v-bind:recipe="item.recipe"
      v-bind:key="item.recipe.uri"
    ></recipe-list-item>
  </ul>
</template>

<script>
import RecipeListItem from './RecipeListItem.vue'
export default {
  name: 'RecipeList',
  props: ['recipeList'],
  components: { RecipeListItem }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
