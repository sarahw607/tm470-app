<template>
  <div>
    <form>
      <div>
        <input v-model="newIngredient" type="text" />
      </div>
      <div>
        <button type="button" v-on:click="addIngredient()">Add Ingredient</button>
        <button type="button" v-on:click="searchRecipes()">Search Recipes</button>
      </div><div>
        <input type="checkbox" />
        <label>Include Store Cupboard Items?</label>
      </div>
    </form>
    <ingredient-list v-bind:ingredientList="ingredients"></ingredient-list>
    <div>{{error}}</div>
    <recipe-list v-bind:recipeList="recipes"></recipe-list>
  </div>
</template>

<script>
import IngredientList from './IngredientList.vue'
import RecipeList from './RecipeList.vue'
import axios from 'axios'
export default {
  name: 'RecipeSearch',
  data: function () {
    return {
      ingredients: [],
      newIngredient: '',
      error: '',
      recipes: []
    }
  },
  methods: {
    addIngredient: function () {
      this.error = '';
      (this.ingredients.indexOf(this.newIngredient) === -1 && this.newIngredient.length > 1)
        ? this.ingredients.push(this.newIngredient)
        // eslint-disable-next-line
        : this.error = `There's an issue`
      this.newIngredient = ''
    },
    searchRecipes: function () {
      const apiPath = `https://api.edamam.com/search?q=${this.ingredients.join(',')}&app_id=77782426&app_key=04992e180e5fa5497e347529b8570e88`
      axios.get(apiPath).then(response => { this.recipes = response.data.hits })
    }
  },
  components: { IngredientList, RecipeList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
