<template>
  <div class="menu" @click="this.$router.push({ name: 'meal', params: { id: m.idMeal } })">
    <img :src="m.strMealThumb" width="200" /><br />
    {{ m.strMeal }}
  </div>
</template>

<script>
export default {
  props: ["m"],
};
</script>

<style scoped>
.menu{
  display: inline-block;
  margin: 2px;
  cursor: pointer;
}
</style>
