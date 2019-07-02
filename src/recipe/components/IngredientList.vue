<template>
  <ul>
    <ingredient-list-item v-for="item in ingredientList" v-bind:ingredient="item" v-bind:key="item"></ingredient-list-item>
  </ul>
</template>

<script>
import IngredientListItem from './IngredientListItem.vue'
export default {
  name: 'IngredientList',
  props: ['ingredientList'],
  components: { IngredientListItem }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
