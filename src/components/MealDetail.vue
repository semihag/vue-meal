<template>
  <div>
    <div>
      <b>Ingredients</b> <br />
      {{ ingredients }}
    </div>
    <div>
      <app-meal :m="meal"></app-meal>
    </div>
    <div>
      <b>Instructions</b>
      <br />
      {{ meal.strInstructions }}
    </div>
  </div>
</template>

<script>
import Meal from "./Meal.vue";
export default {
  components: {
    appMeal: Meal,
  },
  data() {
    return {
      meal: null,
    };
  },
  computed: {
    ingredients() {
      let ingArray = [];
      if (this.meal != null) {
        for (let i = 1; i <= 20; i++) {
          let ing = this.meal["strIngredient" + i];
          if (ing == "" || ing == null) break;
          ingArray.push(ing);
        }
      }
      return ingArray.join(",");
    },
  },
  methods: {
    async GetIdMeals(id) {
      let response = await this.$store.dispatch("GET_MEAL_BY_ID", id);
      this.meal = response.data.meals[0];
    },
  },

  watch: {
    "$route.params.id"(c) {
      this.GetIdMeals(c);
    },
  },
  created() {
    this.GetIdMeals(this.$route.params.id);
  },
};
</script>

<style scoped></style>
