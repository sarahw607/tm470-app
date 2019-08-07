<template>
<form >
  <input type="text" v-model="newIngredient"></input>
</form>
</template>

<script>

export default {
  name: 'StoreCupboard',
  data: function () {
    return {
      newIngredient: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
