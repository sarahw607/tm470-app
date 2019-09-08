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
    <p>Hard cheeses such as cheddar can be eaten, even once mould has begun to grow. As long as mould is removed from the cheese, it should still be safe to eat.</p>
    <h3>Sugary Foods</h3>
    <p>
      Any foods with a high sugar content, such as jam, honey and preserves are considered low risk, and should be safe to consume even beyond the use by date,
      as long as there is no sign of mould
    </p>
    <h2>Dont's</h2>
    <h3>Soft cheese</h3>
    <p>Soft cheese will grow harmful bacteria if not eaten quickly, and should not be consumed if they show signs of being mouldy.</p>
    <h3>Chicken</h3>
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

h2{
  text-decoration: underline;
}
</style>
