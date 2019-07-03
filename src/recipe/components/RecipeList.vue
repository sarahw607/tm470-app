<template>
  <ul>
    <a v-for="item in recipeList" v-bind:key="item.uri" v-bind:href="item.uri">{{item}}</a>
    <!-- <recipe-list-item v-for="item in recipeList" v-bind:recipe="item" v-bind:key="item.uri"></recipe-list-item> -->
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
