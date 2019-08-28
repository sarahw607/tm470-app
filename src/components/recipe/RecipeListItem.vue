<template>
  <router-link :to="{ name: 'RecipeDetails', params: { recipe: recipe.uri }}" tag="div" class="recipe-list-item">
    <img class="recipe-img" :src="recipe.image"/>
    <label>{{recipe.label}}</label></router-link>
    <!-- {{recipe.healthLabels}} -->
</template>

<script>
export default {
  name: 'RecipeListItem',
  props: ['recipe']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipe-list-item{
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
  padding: 5px;
}
.recipe-list-item > img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.recipe-list-item:hover{
  background-color: rgba(174, 140, 163, 0.3);
  cursor: pointer;
}
</style>
