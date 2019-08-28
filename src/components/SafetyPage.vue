<template>
  <div class="content">
    <h1>Food Safety Advice</h1>
    <p>
      While our application can be used to search for any recipe you may want, our main aim is to give you advice about food safety regarding use-by dates,
      and to encourage you to use foods that would otherwise be thrown away. While some foods should not be consumed beyond their use-by dates, there are others that
      can be safely consumed.*
    </p>
    <h2>Do's</h2>
    <h3>Hard Cheese</h3>
    <p></p>
    <p
      class="safety-message"
    >*Food past use-by date is consumed at users' own risk, this page is purely informational and not instructive</p>
  </div>
</template>

<script>
export default {
  name: 'SafetyPage'
}
</script>

<style scoped>
.safety-message {
  font-size: 0.7em;
}
.content {
  align-items: flex-start;
  text-align: left;
}
</style>
