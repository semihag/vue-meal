<template>
  <div>
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
    GetCountryMeals(country) {
      this.$store.dispatch("GET_COUNTRY_MEALS", country);
    },
  },

  watch: {
    "$route.params.country"(c) {
      if (c != undefined)
      this.GetCountryMeals(c);
    },
  },
  created() {
    this.GetCountryMeals(this.$route.params.country);
  },
};
</script>

<style scoped></style>
