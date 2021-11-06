<template>
  <div>
    {{ meal }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      meal: null,
    };
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
