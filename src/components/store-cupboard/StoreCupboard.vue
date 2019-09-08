<template>
  <div class="content">
    <h1>Store Cupboard</h1>
    <div>
      <form>
        <div>
          <label>
            Here you can add or delete ingredients to your Store Cupboard, which you
            will be able to include in your recipe searches on the Search page.
          </label>
          <input v-model="newIngredient" type="text" />
        </div>
        <div>
          <button type="button" v-on:click="addIngredient()">Add Ingredient</button>
        </div>
      </form>
      <ingredient-list v-bind:ingredientList="ingredients"></ingredient-list>
      {{error}}
    </div>
  </div>
</template>

<script>
import IngredientList from '../shared/IngredientList.vue'
import axios from 'axios'
export default {
  name: 'StoreCupboard',
  data: function () {
    return {
      ingredients: [],
      newIngredient: '',
      error: ''
    }
  },
  mounted () {
    const apiPath = `${process.env.ROOT_API}/users/ingredients`
    axios.get(apiPath, { method: 'GET', mode: 'CORS', headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')) } })
      .then(response => {
        this.ingredients = response.data.ingredients
        this.ingredients = this.ingredients.map(ing => ing.name)
      })
  },
  methods: {
    // TODO pass ingredient to api to add to database
    addIngredient: function () {
      this.error = ''
      if (this.ingredients.indexOf(this.newIngredient) === -1 && this.newIngredient.length > 1) {
        const apiPath = `${process.env.ROOT_API}/users/ingredients`
        // eslint-disable-next-line
        axios.post(apiPath,  {name: this.newIngredient}, {method: 'POST', mode: 'CORS', headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')) }  } )
          .then(response => {
            this.ingredients = response.data.ingredients
            this.ingredients = this.ingredients.map(ing => ing.name)
          })
      } else {
        this.error = `You cannot add the same ingredient twice`
      }
      // eslint-disable-next-line
      this.newIngredient = ''
    },
    // TODO plug in written api to delete ingredient
    removeIngredient: function () {}
  },
  components: { IngredientList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
