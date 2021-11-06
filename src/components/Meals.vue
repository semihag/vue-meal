<template>
  <div v-if="this.$store.getters.MEALS != null">
    <app-meal
      v-for="m in this.$store.getters.MEALS"
      :key="m.id"
      :m="m"
    ></app-meal>
  </div>
  <div v-else>Not Found</div>
</template>

<script>
import Meal from "./Meal.vue";
export default {
  components: {
    appMeal: Meal,
  },
};
</script>

<style scoped></style>
