<template>
  <div>
    Starts With {{ this.$route.params.letter }}
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
    GetFirstLetterMeals(letter) {
      this.$store.dispatch("GET_FIRST_LETTER_MEALS", letter);
    },
  },
  watch: {
    "$route.params.letter"(f) {
      if (f != undefined)
      this.GetFirstLetterMeals(f);
    },
  },
  created() {
    this.GetFirstLetterMeals(this.$route.params.letter);
  },
};
</script>

<style scoped></style>
