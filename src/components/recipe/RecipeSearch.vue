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
        <input type="checkbox" v-model="includeStore"/>
        <label>Include Store Cupboard Items?</label>
      </div>
    </form>
    <ingredient-list v-bind:ingredientList="ingredients"></ingredient-list>
    <div>{{error}}</div>
    <recipe-list v-bind:recipeList="recipes"></recipe-list>
  </div>
</template>

<script>
import IngredientList from '../shared/IngredientList.vue'
import RecipeList from './RecipeList.vue'
import axios from 'axios'
export default {
  name: 'RecipeSearch',
  data: function () {
    return {
      ingredients: [],
      newIngredient: '',
      error: '',
      recipes: [],
      includeStore: false
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
      if (this.ingredients.length < 1) {
        this.error = 'Please add some ingredients to search'
        return
      }
      let apiPath = ''
      if (this.includeStore) {
        const ingredientApi = `${process.env.ROOT_API}/users/ingredients`
        axios.get(ingredientApi, { method: 'GET', mode: 'CORS', headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')) } })
          .then(response => {
            const ingredientsString = [...response.data.ingredients.map(ing => ing.name), ...this.ingredients]
            apiPath = `${process.env.RECIPE_API}/search?q=${ingredientsString}&app_id=77782426&app_key=04992e180e5fa5497e347529b8570e88`
            axios.get(apiPath).then(results => {
              if (results.data.hits.length < 1) {
                this.error = 'No matching recipes were found'
              } else {
                this.recipes = results.data.hits
              }
            })
          })
      } else {
        apiPath = `${process.env.RECIPE_API}/search?q=${this.ingredients.join(',')}&app_id=77782426&app_key=04992e180e5fa5497e347529b8570e88`
        axios.get(apiPath).then(response => { this.recipes = response.data.hits })
      }
    }
  },
  components: { IngredientList, RecipeList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
