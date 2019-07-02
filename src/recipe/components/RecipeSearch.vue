<template>
  <div>
    <form>
      <label>Search</label>
      <input v-model="newIngredient" />
      <button type="button" v-on:click="addIngredient()">Add Ingredient</button>
      <button type="button">Search Recipes</button>
      <label>Include Store Cupboard Items?</label>
      <input type="checkbox" />
    </form>
    <ingredient-list v-bind:ingredientList="ingredients"></ingredient-list>
    {{error}}
  </div>
</template>

<script>
import IngredientList from './IngredientList.vue'
export default {
  name: 'RecipeSearch',
  data: function () {
    return {
      ingredients: ['cheese', 'tomato'],
      newIngredient: '',
      error: ''
    }
  },
  methods: {
    addIngredient: function () {
      this.error = '';
      (this.ingredients.indexOf(this.newIngredient) === -1)
        ? this.ingredients.push(this.newIngredient)
        : this.error = `You've already added that one`
    }
  },
  components: { IngredientList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
