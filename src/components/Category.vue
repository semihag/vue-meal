<template>
  <div>
    Category Page
    <app-meals></app-meals>
  </div>
</template>

<script>
import Meals from "./Meals.vue";
export default {
  components: {
    appMeals: Meals,
  },

  methods: {
    GetCategoryMeals(cat) {
      this.$store.dispatch("GET_CATEGORY_MEALS", cat);
    },
  },
  watch: {
    "$route.params.cat"(c) {
      if (c != undefined) this.GetCategoryMeals(c);
    },
  },
  created() {
    this.GetCategoryMeals(this.$route.params.cat);
  },
};
</script>

<style scoped></style>
