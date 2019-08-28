<template>
  <div class="content">
    <h1>Store Cupboard</h1>
    <form>
      <input type="text" v-model="newIngredient" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'StoreCupboard',
  data: function () {
    return {
      newIngredient: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
