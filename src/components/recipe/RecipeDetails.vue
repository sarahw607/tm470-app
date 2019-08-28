<template>
<div class="content">
 <h1> {{recipe.label}}</h1>
 <p v-for="item in recipe.ingredientLines" v-bind:key="item">{{item}}</p>
 <a :href="recipe.url" target="_blank">Method</a>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RecipeDetails',
  data: function () {
    return {
      recipe: ''
    }
  },
  mounted () {
    const apiPath = `https://api.edamam.com/search?r=${encodeURIComponent(this.$route.params.recipe)}&app_id=77782426&app_key=04992e180e5fa5497e347529b8570e88`
    axios.get(apiPath).then(response => { this.recipe = response.data[0] })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
