<template>
  <div class="list-container">
    <div v-for="item in ingredientList" v-bind:key="item" class="list-item">{{item}} X</div>
  </div>
</template>

<script>
export default {
  name: 'IngredientList',
  props: ['ingredientList'],
  methods: {
    removeIngredient () {
      // TODO implement delete function
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
